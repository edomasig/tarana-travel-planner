# 📘 Product Requirements Document (PRD) — GalaGPT.ph AI Travel Assistant

## 🎯 Overview
**GalaGPT.ph** is an AI-powered travel assistant focused on providing personalized travel itineraries, recommendations, and insights for destinations in the Philippines. The system is designed around a chat-first UI with monetization via contextual advertising.

---

## 🧩 UI Layout Overview

| Section              | Description |
|----------------------|-------------|
| 🧠 AI Chatbox (Center) | Main interface where users ask travel questions |
| 🧾 Suggested Prompts (Below Chat) | Clickable quick prompts like: “Where should I go in Palawan?” |
| 📢 Ads – Left Sidebar | Sponsored travel cards (e.g., hotel, tour, food) |
| 📢 Ads – Top Banner   | Wide banner ad (AdSense or sponsorship) |
| 📢 Ads – Bottom Banner| Footer ad for monetization |
| 💬 Message Limit Tracker | e.g., "0/10 messages used" (for freemium control) |

---

## ✅ Core Features

### 1. 🗺️ AI Travel Assistant Chat
- Friendly chat-based interface
- Users input freeform travel queries
- AI provides full itineraries, travel tips, estimated costs, etc.

### 2. 🧠 Suggested Prompts
- Improve engagement and reduce friction
- Examples:
  - “Where should I go in Palawan for 5 days?”
  - “How much is the budget for a Baguio weekend trip?”

### 3. 📢 Ad Monetization (Google AdSense or Direct Sponsorship)
- **Left Sidebar**: Sponsored travel service cards
- **Top Banner**: Horizontal banner ads
- **Bottom Banner**: Footer ad space

### 4. 👤 Freemium Usage Limit
- Message quota UI (e.g., “0/10 messages used”)
- Offer upgrades for unlimited use or premium features

---

## 🧠 AI Prompt (System Role)

```
You are GalaGPT.ph, a friendly and helpful Filipino AI travel assistant. Your role is to create personalized, real-world travel itineraries in the Philippines based on user questions. Always suggest real destinations and give practical travel advice like transportation, estimated budget, places to eat, and local tips. Use a warm and informative tone, and format answers in a clear day-by-day breakdown when possible. Avoid repeating information unless asked.
```

---

## ✏️ Example AI Output Style

**3-Day Itinerary – North Luzon (Nature + Culture)**

**Day 1 – Vigan City**
- Visit Calle Crisologo, Syquia Mansion, and the Dancing Fountain
- Eat at Café Leona (₱250–₱300/person)
- Stay: Vigan Plaza Hotel (~₱1,200/night)
- Travel: Partas bus from Manila (~8 hrs, ₱700)

**Day 2 – Laoag & Paoay**
- Morning: Tour Paoay Church and Malacañang of the North
- Afternoon: Sand dunes adventure (₱1,500 per ride for group)
- Food: Try Ilocos empanada and bagnet at Johnny Moon Café

**Day 3 – Pagudpud**
- Saud Beach swimming + Bangui Windmills photo stop
- Lunch at BergBlick Restaurant (₱400/person)
- Return to Laoag in evening for Manila-bound bus or flight

---

## 🚀 Future Enhancements (Optional)

- Persistent chat history
- Save itinerary to PDF / shareable link
- Non-chat form-based planner UI
- Multilingual support (Tagalog, Japanese, Korean)
