// Mock API functions
export const api = {
  getEvents: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      {
        id: 1,
        title: "Tech Conference 2025",
        description: "Annual technology conference featuring the latest innovations in AI, web development, and cloud computing. Join industry leaders and innovators for a day of learning and networking.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        startTime: "2025-03-15T09:00:00",
        endTime: "2025-03-15T18:00:00",
        location: "San Francisco Convention Center",
        categories: ["Technology", "Conference", "Networking"],
        createdBy: {
          name: "John Doe",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
        }
      },
      {
        id: 2,
        title: "Music Festival",
        description: "Three-day outdoor music festival featuring local and international artists. Experience the best in live music across multiple stages with food trucks and art installations.",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
        startTime: "2025-04-20T14:00:00",
        endTime: "2025-04-22T23:00:00",
        location: "Central Park",
        categories: ["Music", "Festival", "Entertainment"],
        createdBy: {
          name: "Sarah Smith",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
        }
      },
      {
        id: 3,
        title: "Art Exhibition",
        description: "Contemporary art exhibition showcasing works from emerging artists. Explore innovative pieces that challenge conventional boundaries and redefine modern aesthetics.",
        image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800",
        startTime: "2025-05-01T10:00:00",
        endTime: "2025-05-31T18:00:00",
        location: "Modern Art Gallery",
        categories: ["Art", "Exhibition", "Culture"],
        createdBy: {
          name: "Mike Johnson",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
        }
      },
      {
        id: 4,
        title: "Food & Wine Festival",
        description: "Culinary celebration featuring renowned chefs, wine tastings, cooking demonstrations, and gourmet food vendors. Discover new flavors and culinary techniques from around the world.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
        startTime: "2025-06-10T11:00:00",
        endTime: "2025-06-12T21:00:00",
        location: "Riverside Park",
        categories: ["Food", "Wine", "Festival"],
        createdBy: {
          name: "Emily Chen",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
        }
      },
      {
        id: 5,
        title: "Startup Pitch Night",
        description: "Watch innovative startups pitch their ideas to top investors. Network with entrepreneurs, VCs, and industry experts while enjoying an evening of innovation and possibilities.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
        startTime: "2025-02-28T18:00:00",
        endTime: "2025-02-28T22:00:00",
        location: "Innovation Hub Downtown",
        categories: ["Business", "Startup", "Networking"],
        createdBy: {
          name: "Alex Rivera",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
        }
      },
      {
        id: 6,
        title: "Marathon 2025",
        description: "Annual city marathon featuring 42km full marathon, 21km half marathon, and 10km fun run. Join thousands of runners in this celebration of fitness and community spirit.",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800",
        startTime: "2025-09-15T06:00:00",
        endTime: "2025-09-15T14:00:00",
        location: "City Center Start Line",
        categories: ["Sports", "Marathon", "Fitness"],
        createdBy: {
          name: "David Martinez",
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100"
        }
      },
      {
        id: 7,
        title: "Jazz Under the Stars",
        description: "Intimate evening of smooth jazz featuring local and touring musicians. Enjoy exceptional music under the open sky with premium beverages and artisanal food offerings.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        startTime: "2025-07-18T19:00:00",
        endTime: "2025-07-18T23:00:00",
        location: "Rooftop Garden Venue",
        categories: ["Music", "Jazz", "Nightlife"],
        createdBy: {
          name: "Maria Rodriguez",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
        }
      },
      {
        id: 8,
        title: "Gaming Championship",
        description: "Competitive gaming tournament featuring multiple esports titles including League of Legends, Counter-Strike, and Fortnite. Watch pro players compete for substantial prize pools.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        startTime: "2025-08-05T10:00:00",
        endTime: "2025-08-07T22:00:00",
        location: "Gaming Arena Complex",
        categories: ["Gaming", "Sports", "Competition"],
        createdBy: {
          name: "Kevin Park",
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
        }
      },
      {
        id: 9,
        title: "Digital Marketing Workshop",
        description: "Comprehensive workshop covering modern digital marketing strategies, social media advertising, SEO optimization, and analytics. Perfect for entrepreneurs and marketing professionals.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        startTime: "2025-10-12T09:00:00",
        endTime: "2025-10-12T17:00:00",
        location: "Business Learning Center",
        categories: ["Education", "Workshop", "Business"],
        createdBy: {
          name: "Lisa Thompson",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100"
        }
      },
      {
        id: 10,
        title: "Cultural Heritage Festival",
        description: "Celebrate diverse cultures with traditional music, dance performances, artisan crafts, and authentic cuisine. A family-friendly event promoting cultural understanding and community bonding.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
        startTime: "2025-11-01T12:00:00",
        endTime: "2025-11-03T20:00:00",
        location: "Downtown Cultural Plaza",
        categories: ["Culture", "Festival", "Community"],
        createdBy: {
          name: "Sophia Lee",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100"
        }
      },
      {
        id: 11,
        title: "Startup Weekend",
        description: "Intensive 54-hour event where developers, designers, marketers, and entrepreneurs come together to pitch ideas, form teams, and launch startups. Mentorship from industry experts included.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        startTime: "2025-12-05T18:00:00",
        endTime: "2025-12-07T21:00:00",
        location: "Tech Innovation Center",
        categories: ["Business", "Startup", "Networking"],
        createdBy: {
          name: "Chris Evans",
          image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100"
        }
      },
      {
        id: 12,
        title: "Outdoor Film Festival",
        description: "Enjoy classic and contemporary films screened outdoors in a scenic park setting. Bring your own blankets and snacks for a cozy movie night under the stars.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
        startTime: "2025-09-20T19:00:00",
        endTime: "2025-09-20T23:00:00",
        location: "Lakeside Park",
        categories: ["Entertainment", "Festival", "Culture"],
        createdBy: {
          name: "Natalie Portman",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100"
        }
      }
    ];
  },
  
  createEvent: async (event) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { ...event, id: Date.now() };
  },
  
  updateEvent: async (id, event) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { ...event, id };
  },
  
  deleteEvent: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  }
};