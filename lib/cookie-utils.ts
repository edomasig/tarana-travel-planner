// Cookie utilities for saving conversations
export const setCookie = (name: string, value: string, days: number = 30) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`
}

export const getCookie = (name: string): string | null => {
  const nameEQ = name + "="
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length))
  }
  return null
}

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

// Lightweight meta storage to avoid cookie size limits
export const saveConversationsMeta = (conversationsMeta: any[]) => {
  try {
    const payload = JSON.stringify(conversationsMeta.map(c => ({
      id: c.id,
      title: c.title,
      preview: c.preview,
      messageCount: c.messageCount,
      createdAt: c.createdAt,
      lastMessage: c.lastMessage
    })))
    setCookie('conversations_meta', payload, 30)
    return true
  } catch (error) {
    console.error('Error saving conversations meta to cookie:', error)
    return false
  }
}

export const loadConversationsMeta = (): any[] => {
  try {
    const payload = getCookie('conversations_meta')
    if (!payload) return []
    const meta = JSON.parse(payload)
    return Array.isArray(meta) ? meta : []
  } catch (error) {
    console.error('Error loading conversations meta from cookie:', error)
    return []
  }
}

export const deleteConversationFromMeta = (conversationId: string) => {
  try {
    const meta = loadConversationsMeta()
    const updated = meta.filter((m: any) => m.id !== conversationId)
    return saveConversationsMeta(updated)
  } catch (error) {
    console.error('Error deleting conversation from meta cookie:', error)
    return false
  }
}

// Conversation-specific utilities (chunked) - fallback when needed
export const saveConversationsToCookies = (conversations: any[]) => {
  try {
    // Also write meta for lightweight consumers
    saveConversationsMeta(conversations)

    // Split into chunks if data is too large (cookies have ~4KB limit per cookie)
    const jsonString = JSON.stringify(conversations)
    const chunkSize = 3000 // Safe size under 4KB limit
    const chunks = []
    
    for (let i = 0; i < jsonString.length; i += chunkSize) {
      chunks.push(jsonString.slice(i, i + chunkSize))
    }
    
    // Save number of chunks
    setCookie('conversationsCount', chunks.length.toString(), 30)
    
    // Save each chunk
    chunks.forEach((chunk, index) => {
      setCookie(`conversations_${index}`, chunk, 30)
    })
    
    console.log(`Saved ${conversations.length} conversations in ${chunks.length} chunks`)
    return true
  } catch (error) {
    console.error('Error saving conversations to cookies:', error)
    return false
  }
}

export const loadConversationsFromCookies = (): any[] => {
  // Prefer lightweight meta cookie first
  const meta = loadConversationsMeta()
  if (meta.length > 0) return meta

  try {
    const countStr = getCookie('conversationsCount')
    if (!countStr) return []
    
    const count = parseInt(countStr)
    let jsonString = ''
    
    // Reconstruct the JSON string from chunks
    for (let i = 0; i < count; i++) {
      const chunk = getCookie(`conversations_${i}`)
      if (chunk) {
        jsonString += chunk
      }
    }
    
    if (!jsonString) return []
    
    const conversations = JSON.parse(jsonString)
    console.log(`Loaded ${conversations.length} conversations from cookies`)
    return conversations
  } catch (error) {
    console.error('Error loading conversations from cookies:', error)
    return []
  }
}

export const loadFullConversationsFromCookies = (): any[] => {
  try {
    const countStr = getCookie('conversationsCount')
    if (!countStr) return []
    const count = parseInt(countStr)
    let jsonString = ''
    for (let i = 0; i < count; i++) {
      const chunk = getCookie(`conversations_${i}`)
      if (chunk) jsonString += chunk
    }
    if (!jsonString) return []
    const conversations = JSON.parse(jsonString)
    return Array.isArray(conversations) ? conversations : []
  } catch (error) {
    console.error('Error loading full conversations from cookies:', error)
    return []
  }
}

export const getConversationById = (id: string): any | null => {
  try {
    // Prefer full cookie store
    const full = loadFullConversationsFromCookies()
    if (full.length) {
      const found = full.find((c: any) => c.id === id)
      if (found) return found
    }
    // Fallback to localStorage (client-side only)
    if (typeof window !== 'undefined') {
      const ls = window.localStorage.getItem('savedConversations')
      if (ls) {
        const arr = JSON.parse(ls)
        const found = Array.isArray(arr) ? arr.find((c: any) => c.id === id) : null
        if (found) return found
      }
    }
    return null
  } catch (error) {
    console.error('Error getting conversation by id:', error)
    return null
  }
}

export const deleteConversationFromCookies = (conversationId: string) => {
  try {
    const conversations = loadConversationsFromCookies()
    const updated = conversations.filter((conv: any) => conv.id !== conversationId)
    // Save both meta and chunked (if used)
    const metaSaved = saveConversationsMeta(updated)
    const chunkSaved = saveConversationsToCookies(updated)
    return metaSaved || chunkSaved
  } catch (error) {
    console.error('Error deleting conversation from cookies:', error)
    return false
  }
}
