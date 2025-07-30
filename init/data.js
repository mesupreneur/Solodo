const sampleListings = [
  {
    title: "DevHunt",
    description:
      "Discover, launch, and promote dev tools and projects with the power of community",
    image:
      "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0,
    location: "Remote",
    techstack: "Vue, Supabase, Tailwind",
    revenue: 5000,
    users: 800,
    reason: "Lack of engagement",
    demolink: "https://devhunt.org",
    linkedin: "https://www.linkedin.com/company/devhuntorg",
    github: "https://github.com/devhunt",
  },
  {
    title: "StartAI",
    description:
      "Generate full-stack apps from just a prompt using LLMs and modern frameworks",
    image:
      "https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 99,
    location: "San Francisco",
    techstack: "Python, React, GPT-4",
    revenue: 25000,
    users: 400,
    reason: "Founder exit",
    demolink: "https://startai.dev",
    linkedin: "https://www.linkedin.com/company/startai",
    github: "https://github.com/startai",
  },
  {
    title: "TaskPilot",
    description:
      "An AI-powered productivity assistant that automates your daily task list",
    image:
      "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 39,
    location: "Berlin",
    techstack: "Node.js, MongoDB, OpenAI API",
    revenue: 12000,
    users: 700,
    reason: "Looking for partnership",
    demolink: "https://taskpilot.ai",
    linkedin: "https://www.linkedin.com/company/taskpilot",
    github: "https://github.com/taskpilot",
  },
  {
    title: "DesignForge",
    description:
      "Collaborative platform for designers and developers to co-build UI components",
    image:
      "https://images.unsplash.com/photo-1605224307451-c86d7093f375?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29,
    location: "London",
    techstack: "SvelteKit, Firebase",
    revenue: 8500,
    users: 550,
    reason: "Tech migration",
    demolink: "https://designforge.io",
    linkedin: "https://www.linkedin.com/company/designforge",
    github: "https://github.com/designforge",
  },
  {
    title: "CodeStream",
    description:
      "Real-time collaboration platform for developers to write, review, and ship code faster",
    image:
      "https://images.unsplash.com/photo-1530539967144-47f24f9832e2?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 49,
    location: "Toronto",
    techstack: "React, GraphQL, AWS",
    revenue: 15000,
    users: 900,
    reason: "Scaling issues",
    demolink: "https://codestream.io",
    linkedin: "https://www.linkedin.com/company/codestream",
    github: "https://github.com/codestream",
  },
  {
    title: "AIHealth",
    description:
      "AI-powered platform for personalized health monitoring and diagnostics",
    image:
      "https://images.unsplash.com/photo-1704440286929-c5b8025d10ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 79,
    location: "Boston",
    techstack: "Python, TensorFlow, Flask",
    revenue: 22000,
    users: 600,
    reason: "Need strategic partner",
    demolink: "https://aihealth.com",
    linkedin: "https://www.linkedin.com/company/aihealth",
    github: "https://github.com/aihealth",
  },
  {
    title: "GreenFleet",
    description:
      "Electric vehicle fleet management software to optimize routes and reduce emissions",
    image:
      "https://plus.unsplash.com/premium_photo-1675967838044-fe13de539f44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 69,
    location: "Amsterdam",
    techstack: "Node.js, React Native, MongoDB",
    revenue: 18000,
    users: 750,
    reason: "Expansion capital needed",
    demolink: "https://greenfleet.io",
    linkedin: "https://www.linkedin.com/company/greenfleet",
    github: "https://github.com/greenfleet",
  },
  {
    title: "FinSight",
    description:
      "AI-driven financial analytics platform for small and medium businesses",
    image:
      "https://images.unsplash.com/photo-1669633760258-186e9dee81e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89,
    location: "New York City",
    techstack: "Python, Django, React",
    revenue: 27000,
    users: 950,
    reason: "Merging with partner",
    demolink: "https://finsight.ai",
    linkedin: "https://www.linkedin.com/company/finsight",
    github: "https://github.com/finsight",
  },
  {
    title: "EduSpark",
    description:
      "Interactive e-learning platform using gamification and AI-driven content personalization",
    image:
      "https://images.unsplash.com/photo-1702047076267-6719aadd2807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25,
    location: "Sydney",
    techstack: "Ruby on Rails, React, AWS",
    revenue: 9000,
    users: 400,
    reason: "Pivoting business model",
    demolink: "https://eduspark.com",
    linkedin: "https://www.linkedin.com/company/eduspark",
    github: "https://github.com/eduspark",
  },

  {
    title: "CloudNest",
    description:
      "Affordable cloud infrastructure solutions tailored for startups and SMEs",
    image:
      "https://images.unsplash.com/photo-1603700501120-de2ebf0ae131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45,
    location: "Dublin",
    techstack: "Kubernetes, Docker, AWS",
    revenue: 13000,
    users: 650,
    reason: "Seeking investment",
    demolink: "https://cloudnest.io",
    linkedin: "https://www.linkedin.com/company/cloudnest",
    github: "https://github.com/cloudnest",
  },
  {
    title: "SmartShop",
    description:
      "AI-driven personalized shopping assistant for online retailers",
    image:
      "https://images.unsplash.com/photo-1650831433364-3bbd0f2d2f01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 55,
    location: "Seattle",
    techstack: "Python, Django, React",
    revenue: 16000,
    users: 720,
    reason: "Scaling team",
    demolink: "https://smartshop.ai",
    linkedin: "https://www.linkedin.com/company/smartshop",
    github: "https://github.com/smartshop",
  },
  {
    title: "TravelGenie",
    description:
      "Personalized AI travel planner that creates customized itineraries",
    image:
      "https://images.unsplash.com/photo-1613324996029-f6190a17838f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40,
    location: "Barcelona",
    techstack: "React Native, Node.js, MongoDB",
    revenue: 11000,
    users: 500,
    reason: "Market pivot",
    demolink: "https://travelgenie.com",
    linkedin: "https://www.linkedin.com/company/travelgenie",
    github: "https://github.com/travelgenie",
  },
  {
    title: "FarmLink",
    description:
      "Platform connecting farmers directly with consumers for fresh produce delivery",
    image:
      "https://images.unsplash.com/photo-1568658173325-c7b8a11d5666?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 35,
    location: "Nairobi",
    techstack: "Flutter, Firebase, Node.js",
    revenue: 8000,
    users: 350,
    reason: "Tech overhaul",
    demolink: "https://farmlink.africa",
    linkedin: "https://www.linkedin.com/company/farmlink-africa",
    github: "https://github.com/farmlink",
  },
  {
    title: "SecurePay",
    description:
      "Blockchain-based secure payment gateway for online transactions",
    image:
      "https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
    location: "Singapore",
    techstack: "Solidity, Ethereum, React",
    revenue: 30000,
    users: 1500,
    reason: "Regulatory challenges",
    demolink: "https://securepay.io",
    linkedin: "https://www.linkedin.com/company/securepay",
    github: "https://github.com/securepay",
  },
  {
    title: "MediaWave",
    description: "AI-powered media content creation and management platform",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 70,
    location: "Los Angeles",
    techstack: "React, Node.js, AWS",
    revenue: 14000,
    users: 650,
    reason: "Rebranding",
    demolink: "https://mediawave.ai",
    linkedin: "https://www.linkedin.com/company/mediawave",
    github: "https://github.com/mediawave",
  },
  {
    title: "BuildBetter",
    description:
      "Platform for managing construction projects with real-time collaboration tools",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 65,
    location: "Chicago",
    techstack: "Angular, Firebase, Node.js",
    revenue: 17000,
    users: 800,
    reason: "Seeking partners",
    demolink: "https://buildbetter.com",
    linkedin: "https://www.linkedin.com/company/buildbetter",
    github: "https://github.com/buildbetter",
  },
];

module.exports = { data: sampleListings };
