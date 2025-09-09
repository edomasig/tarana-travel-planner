// Check Facebook access token permissions and capabilities
const FB_ACCESS_TOKEN = "EAALIts1SSa8BPePIxfPPShyVIdwqYO7I0cRI63XeeRoYRHBZBiUbV2jBBTMUSqf4p9Jwp2nyDxefZCZBc0sylAdm3Xb0s0e7QdzjJoZAjRv7kgabDVIwixEMLZBvb8bkug9AwEJ4qzza02EweShAESDDYGbckLaKhILLogqANvZA1IDGvcPotrCsIDA8It8quQqwKPqwZDZD"

async function checkPermissions() {
  try {
    console.log('🔍 Checking Facebook access token permissions...\n')
    
    // Check token info
    const tokenUrl = `https://graph.facebook.com/me?access_token=${FB_ACCESS_TOKEN}`
    const tokenRes = await fetch(tokenUrl)
    const tokenData = await tokenRes.json()
    
    if (tokenData.error) {
      console.error('❌ Token Error:', tokenData.error)
      return
    }
    
    console.log('👤 Token belongs to:', tokenData.name)
    console.log('🆔 User ID:', tokenData.id)
    
    // Check permissions
    const permUrl = `https://graph.facebook.com/me/permissions?access_token=${FB_ACCESS_TOKEN}`
    const permRes = await fetch(permUrl)
    const permData = await permRes.json()
    
    if (permData.data) {
      console.log('\n🔑 Granted Permissions:')
      permData.data
        .filter(p => p.status === 'granted')
        .forEach(perm => console.log(`  ✅ ${perm.permission}`))
      
      console.log('\n❌ Declined Permissions:')
      const declined = permData.data.filter(p => p.status === 'declined')
      if (declined.length > 0) {
        declined.forEach(perm => console.log(`  ❌ ${perm.permission}`))
      } else {
        console.log('  None')
      }
    }
    
    // Test simple draft post creation
    console.log('\n🧪 Testing simple unpublished post...')
    const testUrl = `https://graph.facebook.com/805483499309797/feed`
    const testParams = new URLSearchParams()
    testParams.append('message', 'Test draft post - ignore')
    testParams.append('published', 'false')
    testParams.append('access_token', FB_ACCESS_TOKEN)
    
    const testRes = await fetch(testUrl, {
      method: 'POST',
      body: testParams
    })
    
    const testData = await testRes.json()
    
    if (testRes.ok) {
      console.log('✅ Draft post test successful!')
      console.log(`📋 Test draft ID: ${testData.id}`)
    } else {
      console.log('❌ Draft post test failed:')
      console.log(JSON.stringify(testData, null, 2))
    }
    
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

checkPermissions()
