// Helper functions for creating engaging Facebook promotional messages

export function getRandomPromotionalMessage(): string {
    const messages = [
        "🤖 Ready to plan your perfect Philippines adventure? Let GalaGPT create your personalized itinerary in seconds! Get insider tips, hidden gems, and budget-friendly recommendations tailored just for you.\n\n✨ Visit galagpt.ph and start planning your dream trip today!",

        "🌴 Planning your next Philippines getaway? Skip the hours of research! GalaGPT's AI travel assistant creates custom itineraries with local insights, must-visit spots, and budget-friendly options.\n\n🚀 Try it now at galagpt.ph - Your perfect trip is just one click away!",

        "✈️ Dreaming of exploring the Philippines? Let our AI travel expert do the planning for you! Get personalized recommendations, hidden local gems, and detailed itineraries in minutes.\n\n🎯 Start your adventure at galagpt.ph - Where every trip becomes unforgettable!",

        "🏝️ Want to discover the Philippines like a local? GalaGPT creates smart itineraries with insider tips, budget breakdowns, and off-the-beaten-path destinations you won't find in guidebooks.\n\n💫 Plan smarter at galagpt.ph - Your AI travel companion awaits!",

        "🌺 Turn your Philippines travel dreams into reality! Our AI assistant crafts personalized itineraries with authentic experiences, local favorites, and practical tips for every budget.\n\n🔥 Get started at galagpt.ph - Adventure planning made effortless!"
    ]

    return messages[Math.floor(Math.random() * messages.length)]
}

export function getSeasonalPromotionalMessage(): string {
    const currentMonth = new Date().getMonth()

    // Dry season (November to April)
    if (currentMonth >= 10 || currentMonth <= 3) {
        return "🌞 Perfect weather for Philippines travel! Let GalaGPT plan your dry season adventure with the best beaches, festivals, and outdoor activities.\n\n🏖️ Start planning at galagpt.ph - Make the most of the sunny season!"
    }

    // Rainy season (May to October)
    return "🌧️ Rainy season = fewer crowds & better deals! Discover indoor attractions, cultural experiences, and cozy spots with GalaGPT's weather-smart itineraries.\n\n☔ Plan your unique adventure at galagpt.ph - Every season has its magic!"
}

export function getCategorySpecificMessage(tags: string[]): string {
    const tagString = tags.join(' ').toLowerCase()

    if (tagString.includes('food') || tagString.includes('cuisine')) {
        return "🍽️ Hungry for authentic Filipino flavors? GalaGPT creates food-focused itineraries with the best local eats, street food gems, and culinary experiences.\n\n🥘 Taste the Philippines at galagpt.ph - Your foodie adventure starts here!"
    }

    if (tagString.includes('beach') || tagString.includes('island')) {
        return "🏖️ Beach paradise awaits! Let GalaGPT design your perfect island-hopping adventure with pristine beaches, water activities, and tropical escapes.\n\n🌊 Dive into paradise at galagpt.ph - Your beach getaway planned perfectly!"
    }

    if (tagString.includes('adventure') || tagString.includes('hiking')) {
        return "🥾 Ready for an adrenaline rush? GalaGPT crafts action-packed itineraries with hiking trails, adventure sports, and thrilling outdoor experiences.\n\n⛰️ Fuel your adventure at galagpt.ph - Where excitement meets expert planning!"
    }

    if (tagString.includes('budget') || tagString.includes('backpack')) {
        return "💰 Traveling on a budget? GalaGPT specializes in affordable adventures with money-saving tips, budget accommodations, and free attractions.\n\n🎒 Stretch your peso at galagpt.ph - Amazing trips don't have to break the bank!"
    }

    // Default message
    return getRandomPromotionalMessage()
}