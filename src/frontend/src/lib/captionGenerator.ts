export interface GeneratedCaption {
  text: string;
  hashtags: string[];
  charCount: number;
  variation: "Enthusiastic" | "Descriptive" | "Call-to-Action";
  emoji: string;
}

const templateData: Record<
  string,
  {
    prefixes: [string[], string[], string[]];
    suffixes: [string[], string[], string[]];
    hashtags: string[];
    emojis: string[];
  }
> = {
  "Social Media": {
    prefixes: [
      [
        "Okay but this is {topic} and I am OBSESSED 😍",
        "Not me falling in love with {topic} all over again ✨",
        "POV: You just discovered {topic} and your life is forever changed",
      ],
      [
        "Sharing my {topic} journey with you all today 📱",
        "Here's everything you need to know about {topic}",
        "A little {topic} content for your feed today 💫",
      ],
      [
        "Your sign to explore {topic} today 👇",
        "Save this if {topic} is on your list!",
        "Drop a 🔥 if you're obsessed with {topic} too",
      ],
    ],
    suffixes: [
      [
        "follow for more content like this!",
        "double tap if this made your day!",
        "tag someone who needs to see this!",
      ],
      [
        "what do you think about {topic}?",
        "tell me your thoughts below!",
        "have you tried {topic} yet?",
      ],
      [
        "click the link in bio to learn more!",
        "share this with a friend!",
        "save for later! 📌",
      ],
    ],
    hashtags: [
      "viral",
      "trending",
      "fyp",
      "foryoupage",
      "explore",
      "reels",
      "content",
      "creator",
    ],
    emojis: ["✨", "🔥", "💫", "🌟", "💯"],
  },
  Funny: {
    prefixes: [
      [
        "Me trying to explain {topic} to my family:",
        "Nobody asked but here's my hot take on {topic} 😭",
        "When {topic} hits different at 3am lmao",
      ],
      [
        "{topic}: exists. Me: I will now dedicate my entire personality to this 💀",
        "The way {topic} has been living rent free in my head...",
        "Therapist: {topic} can't hurt you. {topic}:",
      ],
      [
        "If you're not talking about {topic} what are you even doing?",
        "Real ones know {topic} is superior 🫡",
        "POV: You tried {topic} and now nothing else matters",
      ],
    ],
    suffixes: [
      [
        "I'm not okay 😭",
        "send help.",
        "therapy is expensive, {topic} is not.",
      ],
      [
        "anyway good luck everyone.",
        "I don't make the rules.",
        "not me being completely normal about this.",
      ],
      [
        "tell me I'm wrong, I'll wait.",
        "you can't change my mind.",
        "be honest in the comments lol",
      ],
    ],
    hashtags: [
      "funny",
      "relatable",
      "lol",
      "humor",
      "memes",
      "comedy",
      "vibes",
      "mood",
    ],
    emojis: ["😂", "💀", "😭", "🫡", "🤣"],
  },
  Formal: {
    prefixes: [
      [
        "We are pleased to present our latest insights on {topic}.",
        "Today's focus: an in-depth exploration of {topic}.",
        "A comprehensive overview of {topic} and its significance.",
      ],
      [
        "The following content addresses key aspects of {topic}.",
        "Our analysis of {topic} reveals several important considerations.",
        "An examination of {topic} from multiple professional perspectives.",
      ],
      [
        "For those seeking expertise on {topic}, this content is for you.",
        "We invite you to explore the nuances of {topic}.",
        "A professional perspective on {topic} for discerning audiences.",
      ],
    ],
    suffixes: [
      [
        "We welcome your professional insights in the comments.",
        "Your feedback on this topic is greatly appreciated.",
        "Please share with colleagues who may benefit.",
      ],
      [
        "Further information is available upon request.",
        "Connect with us for detailed consultation.",
        "Subscribe for continued professional content.",
      ],
      [
        "We encourage thoughtful discussion below.",
        "Your professional perspective matters to us.",
        "Join the conversation with your expertise.",
      ],
    ],
    hashtags: [
      "professional",
      "expertise",
      "industry",
      "leadership",
      "innovation",
      "excellence",
      "business",
      "strategy",
    ],
    emojis: ["📊", "💼", "🎯", "📋", "✅"],
  },
  Promotional: {
    prefixes: [
      [
        "🚨 HUGE NEWS about {topic} — you won't want to miss this!",
        "The {topic} deal you've been waiting for is HERE! 🔥",
        "Limited time: The best {topic} offer we've ever seen!",
      ],
      [
        "Introducing something incredible for {topic} lovers 🎉",
        "Everything you love about {topic}, now even better!",
        "We've completely transformed the {topic} experience!",
      ],
      [
        "Don't miss out on this {topic} opportunity! ⏰",
        "Last chance to get the best {topic} deal!",
        "Act now — this {topic} offer won't last forever!",
      ],
    ],
    suffixes: [
      [
        "Link in bio! Grab yours before it's gone!",
        "Shop now — limited quantities available!",
        "Tap the link and treat yourself today!",
      ],
      [
        "Use code SAVE20 for an exclusive discount!",
        "DM us for your special offer!",
        "Click the link to claim your deal!",
      ],
      [
        "Don't wait — offer ends soon!",
        "Your future self will thank you!",
        "Tag someone who needs this!",
      ],
    ],
    hashtags: [
      "sale",
      "deal",
      "offer",
      "discount",
      "promo",
      "musthave",
      "shopnow",
      "limitedtime",
    ],
    emojis: ["🚨", "🎉", "💥", "⚡", "🛍️"],
  },
  Inspirational: {
    prefixes: [
      [
        "Every journey with {topic} begins with a single brave step. ✨",
        "{topic} is not just a destination — it's a transformation. 🌟",
        "Let {topic} be the spark that ignites your greatest chapter.",
      ],
      [
        "The beauty of {topic} lies in what it teaches you about yourself.",
        "In a world of noise, {topic} reminds us what truly matters. 💫",
        "{topic} is proof that beautiful things take time and courage.",
      ],
      [
        "Your {topic} story is still being written. Keep going. 🙏",
        "Believe in the power of {topic} to change your life.",
        "Today is the perfect day to embrace {topic} wholeheartedly.",
      ],
    ],
    suffixes: [
      [
        "What does {topic} mean to you? Share below 👇",
        "Tag someone who needs to hear this today.",
        "Save this as your daily reminder. 📌",
      ],
      [
        "Your journey matters. Keep pushing forward.",
        "The best version of you is waiting on the other side.",
        "You are capable of more than you know.",
      ],
      [
        "Start today. Not tomorrow. Now.",
        "Inspire someone today — share this message.",
        "Let this be your sign to begin.",
      ],
    ],
    hashtags: [
      "inspiration",
      "motivation",
      "mindset",
      "growth",
      "positivity",
      "believe",
      "dreams",
      "success",
    ],
    emojis: ["✨", "🌟", "💫", "🙏", "🌅"],
  },
  Motivational: {
    prefixes: [
      [
        "You were built for {topic}. Don't let anyone tell you otherwise. 💪",
        "Champions don't wait for {topic} — they create it! 🏆",
        "Rise up. Show up. Dominate {topic}. 🔥",
      ],
      [
        "{topic} isn't easy. That's exactly why YOU can do it.",
        "The grind for {topic} is real, but so is the reward.",
        "Every expert at {topic} was once a beginner who refused to quit.",
      ],
      [
        "Your dedication to {topic} will pay off. Trust the process. ⚡",
        "Wake up. Conquer {topic}. Repeat. 💯",
        "The pain of {topic} today is the strength of tomorrow.",
      ],
    ],
    suffixes: [
      [
        "Keep pushing. Your breakthrough is coming! 💪",
        "No excuses. Just results.",
        "Do the work. Earn the reward.",
      ],
      [
        "Drop a 🔥 if you're grinding today!",
        "Who's doing the work? Comment below!",
        "Tag your workout partner!",
      ],
      [
        "Share this with someone who needs a push!",
        "Repost if you're committed to your goals!",
        "Let's go — the time is NOW!",
      ],
    ],
    hashtags: [
      "motivation",
      "hustle",
      "grind",
      "mindset",
      "goals",
      "nevergiveup",
      "champion",
      "success",
    ],
    emojis: ["💪", "🔥", "🏆", "⚡", "💯"],
  },
  Travel: {
    prefixes: [
      [
        "Lost in the magic of {topic} and never wanting to be found 🌍",
        "My heart left a piece of itself in {topic}. ✈️",
        "{topic} just rewrote every definition of beautiful I had.",
      ],
      [
        "The light in {topic} is unlike anything I've ever seen. 📸",
        "{topic} is calling and I absolutely must go. 🗺️",
        "Every corner of {topic} tells a story worth listening to.",
      ],
      [
        "Add {topic} to your bucket list. Like, right now. 🌏",
        "If {topic} is a dream, I never want to wake up.",
        "The wanderer in me found home in {topic}. 🧳",
      ],
    ],
    suffixes: [
      [
        "Save for your next adventure! 📌",
        "Tag your travel partner!",
        "Where should I go next? 👇",
      ],
      [
        "Follow for more travel inspo! ✈️",
        "Share your {topic} tips below!",
        "Have you been to {topic}? Tell me!",
      ],
      [
        "Book it. Life is too short. 🌟",
        "Your passport is calling.",
        "Adventure awaits — go find it!",
      ],
    ],
    hashtags: [
      "travel",
      "wanderlust",
      "explore",
      "adventure",
      "travelgram",
      "instatravel",
      "bucketlist",
      "travelphotography",
    ],
    emojis: ["✈️", "🌍", "🗺️", "🧳", "📸"],
  },
  Food: {
    prefixes: [
      [
        "This {topic} is criminally delicious and I have no regrets 🍽️",
        "Warning: This {topic} content will make you extremely hungry. 😍",
        "The way this {topic} just melts in your mouth... I can't.",
      ],
      [
        "Recreated this incredible {topic} and it turned out PERFECT. 👨‍🍳",
        "There's something deeply comforting about {topic} done right.",
        "{topic} is my love language and I will stand by that statement.",
      ],
      [
        "Drop this {topic} recipe in your rotation immediately. 🔥",
        "Your weekend deserves this {topic}. Trust me on this.",
        "Life is too short not to eat incredible {topic}.",
      ],
    ],
    suffixes: [
      [
        "Recipe link in bio! 🍴",
        "Save this for your next cooking session!",
        "Tag your foodie bestie!",
      ],
      [
        "What's your favorite {topic} recipe? Comment below!",
        "Would you try this? Tell me! 👇",
        "Give this a 🔥 if you're hungry now!",
      ],
      [
        "Follow for daily food inspiration!",
        "Share with someone who loves to cook!",
        "Make this and thank me later! 😋",
      ],
    ],
    hashtags: [
      "foodie",
      "foodphotography",
      "delicious",
      "homemade",
      "recipe",
      "yummy",
      "instafood",
      "foodlover",
    ],
    emojis: ["🍽️", "😋", "👨‍🍳", "🔥", "🌶️"],
  },
  Fitness: {
    prefixes: [
      [
        "This {topic} workout will absolutely DESTROY you (in the best way) 💪",
        "New {topic} routine just dropped and my muscles are crying 🏋️",
        "Day 1 of {topic} and I'm already a completely different person.",
      ],
      [
        "Form check! Here's how I approach {topic} for maximum results.",
        "The science behind {topic} is actually fascinating. 🧬",
        "My complete {topic} guide — everything I wish I knew when I started.",
      ],
      [
        "Ready to transform your {topic} game? Start here. 👇",
        "Swipe for my complete {topic} routine!",
        "Your {topic} journey starts with this one commitment.",
      ],
    ],
    suffixes: [
      [
        "Drop a 💪 if you're training today!",
        "Tag your gym partner!",
        "Save this workout for later!",
      ],
      [
        "What's your favorite {topic} exercise? Comment below!",
        "How long have you been doing {topic}? 👇",
        "Any questions? Ask me!",
      ],
      [
        "Follow for daily fitness content!",
        "Share with someone starting their fitness journey!",
        "Start today — not Monday. TODAY.",
      ],
    ],
    hashtags: [
      "fitness",
      "workout",
      "gym",
      "fitnessmotivation",
      "training",
      "health",
      "fitlife",
      "exercise",
    ],
    emojis: ["💪", "🏋️", "🔥", "🏃", "⚡"],
  },
  Business: {
    prefixes: [
      [
        "The {topic} strategy that grew my business by 10x 🚀",
        "Hard truth about {topic} that nobody in business talks about.",
        "I spent years learning {topic} so you don't have to. Here's what I know:",
      ],
      [
        "The biggest {topic} mistake entrepreneurs make (and how to avoid it)",
        "{topic} changed everything about how I run my business. Here's how:",
        "3 {topic} principles that separate 7-figure businesses from the rest:",
      ],
      [
        "Your {topic} framework is the difference between scaling and struggling.",
        "Stop overthinking {topic}. Here's the framework that actually works.",
        "The {topic} playbook that every founder needs to read:",
      ],
    ],
    suffixes: [
      [
        "Save this for your next planning session! 📌",
        "Share with a fellow entrepreneur!",
        "DM me 'SCALE' for my full framework!",
      ],
      [
        "What's your biggest {topic} challenge? Comment below!",
        "Drop your thoughts below — let's discuss!",
        "Where are you stuck with {topic}? Let me help!",
      ],
      [
        "Follow for daily business insights!",
        "Book a call — link in bio!",
        "Join 50,000+ entrepreneurs — subscribe!",
      ],
    ],
    hashtags: [
      "business",
      "entrepreneur",
      "startup",
      "marketing",
      "growth",
      "strategy",
      "success",
      "mindset",
    ],
    emojis: ["🚀", "💼", "📈", "💡", "🎯"],
  },
  YouTube: {
    prefixes: [
      [
        "I spent 30 days doing {topic} every single day. Here's what happened: 👇",
        "HONEST review of {topic} after 6 months of experience.",
        "Everything I wish I knew about {topic} before starting my channel:",
      ],
      [
        "The REAL truth about {topic} that YouTubers don't tell you.",
        "I tested every {topic} method so you don't have to. Results:",
        "Complete {topic} guide for beginners (step-by-step):",
      ],
      [
        "Watch until the end — this {topic} reveal will change your mind.",
        "Why I finally decided to talk about {topic} on this channel.",
        "The {topic} video I've been avoiding making. Until now.",
      ],
    ],
    suffixes: [
      [
        "LIKE & SUBSCRIBE for more content like this! 🔔",
        "Watch next: [video link in description!]",
        "Turn on notifications so you never miss a video!",
      ],
      [
        "What should I cover next? Comment below!",
        "Have questions about {topic}? Ask in the comments!",
        "What was YOUR experience with {topic}? Tell me!",
      ],
      [
        "Share this video with someone who needs it!",
        "Join my newsletter — link in description!",
        "Let me know if you want a part 2!",
      ],
    ],
    hashtags: [
      "youtube",
      "youtuber",
      "video",
      "subscribe",
      "content",
      "creator",
      "vlog",
      "tutorial",
    ],
    emojis: ["📹", "🎬", "🔔", "▶️", "🎥"],
  },
  "Reel/Short": {
    prefixes: [
      [
        "Wait for it... 🤩 #{topic}",
        "This {topic} one-second trick changed EVERYTHING 😱",
        "POV: {topic} is your entire personality (same)",
      ],
      [
        "Quick {topic} tip that actually works! ✅",
        "Nobody tells you about this {topic} hack 👀",
        "The {topic} secret they don't want you to know",
      ],
      [
        "Rate this {topic} content 1-10 👇",
        "Try this {topic} challenge! I dare you. 🎯",
        "Before vs After: {topic} edition 🔄",
      ],
    ],
    suffixes: [
      [
        "Follow for more! 🙏",
        "Part 2? Comment YES! 👇",
        "Share if this helped! ❤️",
      ],
      [
        "Like for luck! 🍀",
        "Save before it disappears! 📌",
        "Tag a friend who needs this!",
      ],
      [
        "Did this work for you? Comment below!",
        "Try it and tell me! 💬",
        "Repost for more content like this!",
      ],
    ],
    hashtags: [
      "reels",
      "shorts",
      "viral",
      "trending",
      "fyp",
      "shortsvideo",
      "reelsviral",
      "explore",
    ],
    emojis: ["🎬", "🔥", "✨", "💥", "🚀"],
  },
  Wedding: {
    prefixes: [
      [
        "The love story of {topic} had everyone in their feelings 💍",
        "Forever starts today, and {topic} made it unforgettable 👰",
        "Two hearts, one perfect day — and {topic} made it magical ✨",
      ],
      [
        "The details of this {topic} wedding were absolutely breathtaking.",
        "Love, laughter, and {topic} — this wedding had it all. 💕",
        "When {topic} meets true love, this is what happens:",
      ],
      [
        "Planning your wedding around {topic}? Start here. 💒",
        "Real wedding inspo featuring {topic} that you'll want to screenshot.",
        "Your {topic} dream wedding is closer than you think.",
      ],
    ],
    suffixes: [
      [
        "Save for your wedding planning board! 💍",
        "Tag the love of your life!",
        "Share with your future spouse! 💕",
      ],
      [
        "What's your dream wedding style? Comment below!",
        "Tell me your wedding theme! 👇",
        "Follow for daily wedding inspiration!",
      ],
      [
        "Book your consultation — link in bio!",
        "Follow to see more real weddings!",
        "Your love story deserves to be told!",
      ],
    ],
    hashtags: [
      "wedding",
      "bride",
      "weddingday",
      "weddingphotography",
      "love",
      "weddinginspo",
      "bridal",
      "forever",
    ],
    emojis: ["💍", "👰", "💒", "💕", "🌸"],
  },
  Festival: {
    prefixes: [
      [
        "{topic} hits different when you're surrounded by your people 🎉",
        "THE {topic} SEASON IS HERE AND I CANNOT CONTAIN MYSELF 🎊",
        "There's no celebration like a {topic} celebration. Period.",
      ],
      [
        "The colors, the joy, the food — {topic} is simply unmatched. 🌈",
        "{topic} is that time of year when the whole world feels alive.",
        "Capturing the spirit of {topic} one photo at a time. 📸",
      ],
      [
        "How are you celebrating {topic} this year? Tell me! 🎆",
        "Your {topic} celebration guide starts here! 🎉",
        "Make this {topic} one for the memories.",
      ],
    ],
    suffixes: [
      [
        "Wishing everyone joy this {topic}! 🎊",
        "Tag your {topic} squad!",
        "Share your celebration photos! 📸",
      ],
      [
        "How are you celebrating? Comment below! 👇",
        "What's your favorite {topic} tradition? Tell me!",
        "Drop a 🎉 if you're celebrating!",
      ],
      [
        "Follow for more festival content!",
        "Share with your family!",
        "Make this {topic} unforgettable!",
      ],
    ],
    hashtags: [
      "festival",
      "celebration",
      "festive",
      "traditions",
      "culture",
      "joy",
      "family",
      "holiday",
    ],
    emojis: ["🎉", "🎊", "🌈", "✨", "🎆"],
  },
  Sports: {
    prefixes: [
      [
        "The {topic} game last night had my heart in my THROAT 🏟️",
        "Incredible {topic} performance that will go down in history. 🏆",
        "THIS is why we love {topic}. Moments like these. 🙌",
      ],
      [
        "Breaking down the {topic} highlights you need to see:",
        "The tactics behind this {topic} victory were masterclass level.",
        "My complete {topic} analysis — what actually happened:",
      ],
      [
        "Who's watching {topic}? Drop a 🔥 if you're live!",
        "Predictions for the next {topic} match — who wins?",
        "React to this {topic} play. I'll wait. 👀",
      ],
    ],
    suffixes: [
      [
        "Drop your team in the comments! 🏆",
        "Repost if you watched!",
        "Tag a fellow fan!",
      ],
      [
        "What's your take? Comment below! 👇",
        "Who had the best performance? Tell me!",
        "Predictions for next game? Drop them!",
      ],
      [
        "Follow for live sports updates!",
        "Share with your sports group chat!",
        "Subscribe for analysis and highlights!",
      ],
    ],
    hashtags: [
      "sports",
      "athlete",
      "game",
      "champion",
      "teamwork",
      "victory",
      "sports",
      "compete",
    ],
    emojis: ["🏆", "⚽", "🏟️", "🙌", "🔥"],
  },
  Fashion: {
    prefixes: [
      [
        "This {topic} look just rewrote my entire wardrobe philosophy 👗",
        "Styled {topic} three ways because I have no chill ✨",
        "The {topic} trend we all needed and nobody asked for:",
      ],
      [
        "Breaking down the {topic} aesthetic and why it works so well.",
        "Everything I know about {topic} styling, condensed into this post.",
        "The {topic} wardrobe essentials you absolutely need right now.",
      ],
      [
        "How to style {topic} for every occasion (save this!) 📌",
        "Get the {topic} look for less — here's how:",
        "Style challenge: {topic} edition — are you ready? 🎯",
      ],
    ],
    suffixes: [
      [
        "Shop the look — link in bio! 🛍️",
        "Save for outfit inspo! 📌",
        "Tag your style twin!",
      ],
      [
        "What's your {topic} style? Comment below! 👇",
        "Would you wear this? Yes or no? Tell me!",
        "Drop your favorite {topic} brand below!",
      ],
      [
        "Follow for daily style inspiration!",
        "Share with your fashion-obsessed friend!",
        "DM me for styling advice!",
      ],
    ],
    hashtags: [
      "fashion",
      "style",
      "ootd",
      "outfitinspo",
      "fashionista",
      "trendy",
      "streetstyle",
      "lookbook",
    ],
    emojis: ["👗", "✨", "💅", "🛍️", "🎀"],
  },
  Tech: {
    prefixes: [
      [
        "The {topic} update just changed the game and nobody's talking about it 🤖",
        "Hot take: {topic} is the most underrated tech of 2024.",
        "I tested {topic} for 30 days. Here's my completely honest review:",
      ],
      [
        "Deep dive: How {topic} actually works (no hype, just facts).",
        "The {topic} architecture is more interesting than you think.",
        "Breaking down the {topic} announcement everyone missed:",
      ],
      [
        "Should you use {topic}? The complete pros/cons breakdown:",
        "The {topic} tutorial I wish existed when I started:",
        "Build with {topic} — a practical guide for developers:",
      ],
    ],
    suffixes: [
      [
        "Save for your next build! 💻",
        "Share with a developer friend!",
        "Follow for daily tech insights!",
      ],
      [
        "What do you think about {topic}? Comment below! 👇",
        "Using {topic} in production? Tell me how!",
        "Questions? Drop them in the comments!",
      ],
      [
        "Subscribe for weekly tech breakdowns!",
        "GitHub link in bio!",
        "Join the newsletter — link in description!",
      ],
    ],
    hashtags: [
      "tech",
      "developer",
      "coding",
      "programming",
      "software",
      "ai",
      "innovation",
      "technology",
    ],
    emojis: ["💻", "🤖", "⚡", "🔧", "🚀"],
  },
  Education: {
    prefixes: [
      [
        "Everything you need to know about {topic} — explained simply. 📚",
        "I studied {topic} so you can learn it in 60 seconds:",
        "The {topic} concept that changed how I see the world:",
      ],
      [
        "Most people misunderstand {topic}. Here's the truth:",
        "A quick and clear guide to {topic} for absolute beginners.",
        "The {topic} lesson they should've taught in school:",
      ],
      [
        "Learn {topic} in under 5 minutes — swipe through!",
        "Save this {topic} cheatsheet before the algorithm hides it! 📌",
        "Test your {topic} knowledge — what score do you get? 👇",
      ],
    ],
    suffixes: [
      [
        "Save this to learn later! 📌",
        "Share with a student!",
        "Follow for daily learning!",
      ],
      [
        "What did you learn today? Comment below! 👇",
        "Quiz yourself — how much did you know before? Tell me!",
        "What topic should I explain next?",
      ],
      [
        "Subscribe for more educational content!",
        "Share with someone who'd benefit!",
        "More resources — link in bio!",
      ],
    ],
    hashtags: [
      "education",
      "learning",
      "knowledge",
      "study",
      "facts",
      "didyouknow",
      "school",
      "learneveryday",
    ],
    emojis: ["📚", "🧠", "✏️", "🎓", "💡"],
  },
  Nature: {
    prefixes: [
      [
        "Standing in the middle of {topic} and feeling impossibly small — in the best way 🌿",
        "{topic} is the reminder we all need that the world is still beautiful. 🌍",
        "The silence of {topic} speaks louder than any city ever could.",
      ],
      [
        "Nature documentary energy: {topic} edition. 🌲",
        "The biodiversity found in {topic} continues to astonish scientists and photographers alike.",
        "Every angle of {topic} is a masterpiece that no filter can improve.",
      ],
      [
        "Go to {topic}. Leave everything else behind. 🏔️",
        "Your next nature escape should be {topic}. Here's why:",
        "The healing power of {topic} is something you have to experience yourself.",
      ],
    ],
    suffixes: [
      [
        "Save for your next nature adventure! 🌿",
        "Tag someone you'd explore this with!",
        "Follow for more nature photography!",
      ],
      [
        "What's your favorite natural place? Comment below! 👇",
        "Have you visited {topic}? Tell me your experience!",
        "Drop a 🌿 if you love the outdoors!",
      ],
      [
        "Protect what we love. Share this.",
        "Our planet is worth saving. 🌍",
        "Follow for conservation content!",
      ],
    ],
    hashtags: [
      "nature",
      "naturephotography",
      "outdoors",
      "wildlife",
      "earthpix",
      "natgeo",
      "conservation",
      "wilderness",
    ],
    emojis: ["🌿", "🌍", "🏔️", "🌲", "🦋"],
  },
  Quotes: {
    prefixes: [
      [
        '"The secret to {topic} is doing it before you feel ready." — Unknown 💫',
        "On {topic}: 'Those who dare, win.' Remember that today. ✨",
        "Your reminder about {topic}: 'Start where you are. Use what you have. Do what you can.'",
      ],
      [
        "A thought on {topic} that's been living in my head: 🧠",
        "The most powerful {topic} quote I've ever encountered:",
        "Words on {topic} that hit completely different today:",
      ],
      [
        "Print this. Frame this. Live this. {topic} changed my life. 📿",
        "The {topic} quote you need to read today:",
        "Sending this {topic} wisdom to everyone who needs it:",
      ],
    ],
    suffixes: [
      [
        "Save this for when you need it most. 📌",
        "Tag someone who needs these words today.",
        "Which quote resonates most? Tell me! 👇",
      ],
      [
        "Follow for daily quotes and wisdom!",
        "Share this message with your circle!",
        "What quote has changed your life? Comment below!",
      ],
      [
        "Print it. Read it. Live it.",
        "Wisdom is only useful when shared.",
        "Pass this on to someone who needs it.",
      ],
    ],
    hashtags: [
      "quotes",
      "wisdom",
      "inspiration",
      "mindset",
      "motivation",
      "quoteoftheday",
      "words",
      "thoughtfulwords",
    ],
    emojis: ["💫", "✨", "📿", "🌟", "💎"],
  },
};

const topicHashtags = (topic: string): string[] => {
  return topic
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 3)
    .map((w) => w.replace(/[^a-z0-9]/g, ""));
};

const interpolate = (template: string, topic: string): string => {
  return template.replace(/\{topic\}/g, topic);
};

const pickRandom = <T>(arr: T[], seed: number): T => {
  return arr[seed % arr.length];
};

export const generateCaptions = (
  topic: string,
  template: string,
  language: string,
  seed = 0,
): GeneratedCaption[] => {
  const data = templateData[template] ?? templateData["Social Media"];
  const langLabel = language !== "English" ? `[${language}] ` : "";
  const tHashtags = topicHashtags(topic);

  const variations: ["Enthusiastic", "Descriptive", "Call-to-Action"] = [
    "Enthusiastic",
    "Descriptive",
    "Call-to-Action",
  ];

  return variations.map((variation, i) => {
    const prefix = interpolate(pickRandom(data.prefixes[i], seed + i), topic);
    const suffix = interpolate(
      pickRandom(data.suffixes[i], seed + i + 1),
      topic,
    );
    const text = `${langLabel}${prefix} ${suffix}`;

    const selectedHashtags = [
      ...tHashtags,
      ...data.hashtags.slice(0, 5 + (seed % 3)),
    ]
      .filter((h, idx, arr) => arr.indexOf(h) === idx)
      .slice(0, 8);

    return {
      text,
      hashtags: selectedHashtags,
      charCount: text.length + selectedHashtags.join(" #").length + 2,
      variation,
      emoji: data.emojis[i % data.emojis.length],
    };
  });
};

export const TEMPLATES = Object.keys(templateData);

export const LANGUAGES = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Italian",
  "Arabic",
  "Japanese",
  "Korean",
  "Chinese",
  "Russian",
  "Bengali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Urdu",
  "Indonesian",
  "Dutch",
  "Turkish",
  "Vietnamese",
  "Thai",
  "Swahili",
  "Polish",
  "Ukrainian",
];
