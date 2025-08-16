# Agoda Affiliate Integration Guide

## 🎯 **Successfully Implemented**

Your Agoda affiliate banners are now live on your TaraNa Travel Planner! Here's what was implemented:

### 📋 **Configuration Details**
- **CID (Channel ID)**: 1947165
- **API Key**: ed9ce8b0-3f76-40b3-a3e5-8da361fb865b
- **Currency**: PHP (Philippine Peso)
- **Language**: en-us

### 🏨 **Available Components**

#### **Floating Agoda Search Box** (NEW!)
- **Interactive floating widget** with toggle button
- **Responsive positioning** (bottom-right on homepage, bottom-left on mobile chat)
- **Clean modal-style interface** with header and footer
- **Size**: 320x360px with responsive behavior
- **Features**: Collapsible, backdrop overlay on mobile, branded design

#### **Agoda Search Box** (Sidebar)
- **Interactive hotel search** with calendar picker
- **Default location**: Tagaytay, Philippines (City: 18218)
- **Size**: 320x400px (responsive)
- **Features**: Date picker, guest selection, real-time search

#### **Manila Banner** (Banner 1)
- **City Code**: 17196 (Manila)
- **Size**: 300x300px (responsive)
- **Features**: Search box, discounted rates, auto-scroll

#### **Cebu Banner** (Banner 2) 
- **City Code**: 16185 (Cebu)
- **Area Code**: 539836
- **Size**: 300x300px (responsive)
- **Features**: Search box, discounted rates, auto-scroll

### 🚀 **Implementation Locations**

#### **Homepage**
- Added **floating Agoda search box** (bottom-right corner)
- Added responsive Manila banner between Features section
- Removed fixed search box for cleaner layout
- Centered and optimized for mobile/desktop

#### **Chat Page**
- Added **floating search box** on mobile/tablet (hidden on desktop due to sidebar)
- Added Agoda search box to desktop sidebar (replaces mock hotel ad)
- Integrated with existing travel deals section

### 💻 **Component Usage**

```tsx
// Search Box Components
import { AgodaResponsiveSearchBox, AgodaTagaytaySearch } from '@/components/affiliate/agoda-search-box'

// Tagaytay hotels search (default)
<AgodaResponsiveSearchBox />

// Manila hotels search
<AgodaResponsiveSearchBox 
  cityCode="17196"
  destinationName="Manila, Philippines" 
/>

// Custom search box
<AgodaSearchBox 
  cityCode="16185"
  destinationName="Cebu, Philippines"
  width="320px" 
  height="420px"
/>

// Banner Components  
import { AgodaResponsiveBanner } from '@/components/affiliate/agoda-banner'

// Manila hotels
<AgodaResponsiveBanner variant="manila" />

// Cebu hotels  
<AgodaResponsiveBanner variant="cebu" />
```

### 🔗 **Affiliate Link Generation**

```tsx
import { generateAgodaLink } from '@/lib/affiliate-config'

// Basic search link
const link = generateAgodaLink('Manila')

// With dates and guests
const link = generateAgodaLink(
  'Manila',
  '2025-09-01',  // check-in
  '2025-09-03',  // check-out  
  2              // guests
)
```

### 📊 **Revenue Tracking**

The banners automatically include:
- **UTM tracking**: Source, medium, campaign
- **CID tracking**: Your affiliate ID (1947165)
- **Analytics integration**: Google Analytics events

### 🛠️ **Customization Options**

1. **City Targeting**: Add more Philippine cities
2. **International Destinations**: Expand to global markets
3. **AI Integration**: Include Agoda links in AI travel responses
4. **Seasonal Campaigns**: Different banners for seasons

### 🎯 **Next Steps**

1. **Monitor Performance**: Check your Agoda affiliate dashboard
2. **A/B Testing**: Try different banner positions
3. **AI Integration**: Add Agoda recommendations to chat responses
4. **Mobile Optimization**: Ensure banners work on all devices

### 💰 **Expected Revenue**

- **Commission Rate**: 25-35% of booking value
- **Philippine Market**: High conversion potential
- **Average Booking**: ₱3,000-15,000 per hotel stay
- **Potential Earnings**: ₱750-5,250 per booking

## 🚀 **Your site is now monetizing with Agoda affiliate banners!**

Visit http://localhost:3000 to see the banners in action! 🏨✨
