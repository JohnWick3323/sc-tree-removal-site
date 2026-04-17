export interface Location {
  slug: string; name: string; county: string; zip: string[]; neighborhoods: string[];
  landmarks: { name: string; type: string; description: string }[];
  geo: { lat: number; lng: number }; soilType: string; waterRestrictions: string;
  localInsight: string; commonYardSize: string; hoaNotes: string; image: string;
  testimonial: { name: string; quote: string; location: string };
}

export const locations: Location[] = [
  {
    "slug": "charleston",
    "name": "Charleston",
    "county": "Charleston County",
    "zip": ["29401"],
    "neighborhoods": [
      "Downtown Charleston",
      "Greater Charleston"
    ],
    "landmarks": [
      {
        "name": "Charleston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 32.7167,
      "lng": -79.9508
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Charleston, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Charleston"
    }
  },
  {
    "slug": "columbia",
    "name": "Columbia",
    "county": "Richland County",
    "zip": ["29201"],
    "neighborhoods": [
      "Downtown Columbia",
      "Greater Columbia"
    ],
    "landmarks": [
      {
        "name": "Columbia Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9328,
      "lng": -80.9646
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Columbia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Columbia"
    }
  },
  {
    "slug": "north-charleston",
    "name": "North Charleston",
    "county": "Charleston County",
    "zip": ["29405"],
    "neighborhoods": [
      "Downtown North Charleston",
      "Greater North Charleston"
    ],
    "landmarks": [
      {
        "name": "North Charleston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 32.8175,
      "lng": -79.8753
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Charleston, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in North Charleston!",
      "location": "North Charleston"
    }
  },
  {
    "slug": "mount-pleasant",
    "name": "Mount Pleasant",
    "county": "Charleston County",
    "zip": ["29464"],
    "neighborhoods": [
      "Downtown Mount Pleasant",
      "Greater Mount Pleasant"
    ],
    "landmarks": [
      {
        "name": "Mount Pleasant Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0843,
      "lng": -80.9701
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mount Pleasant, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Mount Pleasant"
    }
  },
  {
    "slug": "rock-hill",
    "name": "Rock Hill",
    "county": "York County",
    "zip": ["29730"],
    "neighborhoods": [
      "Downtown Rock Hill",
      "Greater Rock Hill"
    ],
    "landmarks": [
      {
        "name": "Rock Hill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.9151,
      "lng": -80.9257
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rock Hill, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Rock Hill"
    }
  },
  {
    "slug": "greenville",
    "name": "Greenville",
    "county": "Greenville County",
    "zip": ["29601"],
    "neighborhoods": [
      "Downtown Greenville",
      "Greater Greenville"
    ],
    "landmarks": [
      {
        "name": "Greenville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.8228,
      "lng": -82.4071
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greenville, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Greenville"
    }
  },
  {
    "slug": "summerville",
    "name": "Summerville",
    "county": "Dorchester County",
    "zip": ["29483"],
    "neighborhoods": [
      "Downtown Summerville",
      "Greater Summerville"
    ],
    "landmarks": [
      {
        "name": "Summerville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0956,
      "lng": -81.0796
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Summerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Summerville"
    }
  },
  {
    "slug": "goose-creek",
    "name": "Goose creek",
    "county": "Berkeley County",
    "zip": ["29445"],
    "neighborhoods": [
      "Downtown Goose creek",
      "Greater Goose creek"
    ],
    "landmarks": [
      {
        "name": "Goose Creek Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9736,
      "lng": -81.0647
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Goose creek, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Goose creek"
    }
  },
  {
    "slug": "sumter",
    "name": "Sumter",
    "county": "Sumter County",
    "zip": ["29150"],
    "neighborhoods": [
      "Downtown Sumter",
      "Greater Sumter"
    ],
    "landmarks": [
      {
        "name": "Sumter Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.8798,
      "lng": -80.3545
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sumter, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Sumter"
    }
  },
  {
    "slug": "florence",
    "name": "Florence",
    "county": "Florence County",
    "zip": ["29501"],
    "neighborhoods": [
      "Downtown Florence",
      "Greater Florence"
    ],
    "landmarks": [
      {
        "name": "Florence Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.2263,
      "lng": -79.8142
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Florence, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Florence!",
      "location": "Florence"
    }
  },
  {
    "slug": "spartanburg",
    "name": "Spartanburg",
    "county": "Spartanburg County",
    "zip": ["29301"],
    "neighborhoods": [
      "Downtown Spartanburg",
      "Greater Spartanburg"
    ],
    "landmarks": [
      {
        "name": "Spartanburg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.8704,
      "lng": -81.9681
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Spartanburg, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Spartanburg"
    }
  },
  {
    "slug": "hilton-head-island",
    "name": "Hilton Head Island",
    "county": "Beaufort County",
    "zip": ["29925"],
    "neighborhoods": [
      "Downtown Hilton Head Island",
      "Greater Hilton Head Island"
    ],
    "landmarks": [
      {
        "name": "Hilton Head Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0957,
      "lng": -81.0423
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hilton Head Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Hilton Head Island"
    }
  },
  {
    "slug": "greer",
    "name": "Greer",
    "county": "Greenville County",
    "zip": ["29650"],
    "neighborhoods": [
      "Downtown Greer",
      "Greater Greer"
    ],
    "landmarks": [
      {
        "name": "Greer Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0018,
      "lng": -81.0053
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greer, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Greer"
    }
  },
  {
    "slug": "myrtle-beach",
    "name": "Myrtle Beach",
    "county": "Horry County",
    "zip": ["29572"],
    "neighborhoods": [
      "Downtown Myrtle Beach",
      "Greater Myrtle Beach"
    ],
    "landmarks": [
      {
        "name": "Myrtle Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.7230,
      "lng": -78.9506
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Myrtle Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Myrtle Beach"
    }
  },
  {
    "slug": "aiken",
    "name": "Aiken",
    "county": "Aiken County",
    "zip": ["29801"],
    "neighborhoods": [
      "Downtown Aiken",
      "Greater Aiken"
    ],
    "landmarks": [
      {
        "name": "Aiken Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.5214,
      "lng": -81.6708
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Aiken, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Aiken"
    }
  },
  {
    "slug": "bluffton",
    "name": "Bluffton",
    "county": "Beaufort County",
    "zip": ["29910"],
    "neighborhoods": [
      "Downtown Bluffton",
      "Greater Bluffton"
    ],
    "landmarks": [
      {
        "name": "Bluffton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9125,
      "lng": -80.9536
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bluffton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Bluffton"
    }
  },
  {
    "slug": "anderson",
    "name": "Anderson",
    "county": "Anderson County",
    "zip": ["29621"],
    "neighborhoods": [
      "Downtown Anderson",
      "Greater Anderson"
    ],
    "landmarks": [
      {
        "name": "Anderson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.5256,
      "lng": -82.6093
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Anderson, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Anderson"
    }
  },
  {
    "slug": "fort-mill",
    "name": "Fort Mill",
    "county": "Lancaster County",
    "zip": ["29707"],
    "neighborhoods": [
      "Downtown Fort Mill",
      "Greater Fort Mill"
    ],
    "landmarks": [
      {
        "name": "Fort Mill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9098,
      "lng": -81.0930
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fort Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Fort Mill"
    }
  },
  {
    "slug": "mauldin",
    "name": "Mauldin",
    "county": "Greenville County",
    "zip": ["29662"],
    "neighborhoods": [
      "Downtown Mauldin",
      "Greater Mauldin"
    ],
    "landmarks": [
      {
        "name": "Mauldin Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9457,
      "lng": -81.1211
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mauldin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Mauldin!",
      "location": "Mauldin"
    }
  },
  {
    "slug": "conway",
    "name": "Conway",
    "county": "Horry County",
    "zip": ["29526"],
    "neighborhoods": [
      "Downtown Conway",
      "Greater Conway"
    ],
    "landmarks": [
      {
        "name": "Conway Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0605,
      "lng": -81.0898
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Conway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Conway"
    }
  },
  {
    "slug": "carolina-forest",
    "name": "Carolina Forest",
    "county": "South Carolina",
    "zip": ["29560"],
    "neighborhoods": [
      "Downtown Carolina Forest",
      "Greater Carolina Forest"
    ],
    "landmarks": [
      {
        "name": "Carolina Forest Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9446,
      "lng": -80.9676
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Carolina Forest, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Carolina Forest!",
      "location": "Carolina Forest"
    }
  },
  {
    "slug": "socastee",
    "name": "Socastee",
    "county": "South Carolina",
    "zip": ["29869"],
    "neighborhoods": [
      "Downtown Socastee",
      "Greater Socastee"
    ],
    "landmarks": [
      {
        "name": "Socastee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9582,
      "lng": -81.1051
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Socastee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Socastee"
    }
  },
  {
    "slug": "north-augusta",
    "name": "North Augusta",
    "county": "Aiken County",
    "zip": ["29841"],
    "neighborhoods": [
      "Downtown North Augusta",
      "Greater North Augusta"
    ],
    "landmarks": [
      {
        "name": "North Augusta Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0830,
      "lng": -81.1056
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Augusta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in North Augusta!",
      "location": "North Augusta"
    }
  },
  {
    "slug": "simpsonville",
    "name": "Simpsonville",
    "county": "Greenville County",
    "zip": ["29680"],
    "neighborhoods": [
      "Downtown Simpsonville",
      "Greater Simpsonville"
    ],
    "landmarks": [
      {
        "name": "Simpsonville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0024,
      "lng": -81.0284
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Simpsonville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Simpsonville"
    }
  },
  {
    "slug": "lexington",
    "name": "Lexington",
    "county": "Lexington County",
    "zip": ["29071"],
    "neighborhoods": [
      "Downtown Lexington",
      "Greater Lexington"
    ],
    "landmarks": [
      {
        "name": "Lexington Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9891,
      "lng": -81.0860
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lexington, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Lexington"
    }
  },
  {
    "slug": "easley",
    "name": "Easley",
    "county": "Pickens County",
    "zip": ["29640"],
    "neighborhoods": [
      "Downtown Easley",
      "Greater Easley"
    ],
    "landmarks": [
      {
        "name": "Easley Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0627,
      "lng": -81.0360
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Easley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Easley!",
      "location": "Easley"
    }
  },
  {
    "slug": "taylors",
    "name": "Taylors",
    "county": "Greenville County",
    "zip": ["29687"],
    "neighborhoods": [
      "Downtown Taylors",
      "Greater Taylors"
    ],
    "landmarks": [
      {
        "name": "Taylors Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9825,
      "lng": -81.1242
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Taylors, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Taylors"
    }
  },
  {
    "slug": "greenwood",
    "name": "Greenwood",
    "county": "Greenwood County",
    "zip": ["29646"],
    "neighborhoods": [
      "Downtown Greenwood",
      "Greater Greenwood"
    ],
    "landmarks": [
      {
        "name": "Greenwood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0525,
      "lng": -80.9723
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greenwood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Greenwood!",
      "location": "Greenwood"
    }
  },
  {
    "slug": "st.-andrews",
    "name": "St. Andrews",
    "county": "South Carolina",
    "zip": ["29669"],
    "neighborhoods": [
      "Downtown St. Andrews",
      "Greater St. Andrews"
    ],
    "landmarks": [
      {
        "name": "St. Andrews Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9243,
      "lng": -80.9495
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. Andrews, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "St. Andrews"
    }
  },
  {
    "slug": "wade-hampton",
    "name": "Wade Hampton",
    "county": "South Carolina",
    "zip": ["29670"],
    "neighborhoods": [
      "Downtown Wade Hampton",
      "Greater Wade Hampton"
    ],
    "landmarks": [
      {
        "name": "Wade Hampton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0943,
      "lng": -80.9349
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wade Hampton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Wade Hampton"
    }
  },
  {
    "slug": "hanahan",
    "name": "Hanahan",
    "county": "Berkeley County",
    "zip": ["29410"],
    "neighborhoods": [
      "Downtown Hanahan",
      "Greater Hanahan"
    ],
    "landmarks": [
      {
        "name": "Hanahan Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9434,
      "lng": -81.0617
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hanahan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Hanahan"
    }
  },
  {
    "slug": "north-myrtle-beach",
    "name": "North Myrtle Beach",
    "county": "Horry County",
    "zip": ["29582"],
    "neighborhoods": [
      "Downtown North Myrtle Beach",
      "Greater North Myrtle Beach"
    ],
    "landmarks": [
      {
        "name": "North Myrtle Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.7654,
      "lng": -78.7979
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Myrtle Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "North Myrtle Beach"
    }
  },
  {
    "slug": "five-forks",
    "name": "Five Forks",
    "county": "South Carolina",
    "zip": ["29504"],
    "neighborhoods": [
      "Downtown Five Forks",
      "Greater Five Forks"
    ],
    "landmarks": [
      {
        "name": "Five Forks Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9482,
      "lng": -81.1097
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Five Forks, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Five Forks"
    }
  },
  {
    "slug": "clemson",
    "name": "Clemson",
    "county": "Pickens County",
    "zip": ["29631"],
    "neighborhoods": [
      "Downtown Clemson",
      "Greater Clemson"
    ],
    "landmarks": [
      {
        "name": "Clemson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0236,
      "lng": -81.0003
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clemson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Clemson"
    }
  },
  {
    "slug": "west-columbia",
    "name": "West Columbia",
    "county": "Lexington County",
    "zip": ["29169"],
    "neighborhoods": [
      "Downtown West Columbia",
      "Greater West Columbia"
    ],
    "landmarks": [
      {
        "name": "West Columbia Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9103,
      "lng": -80.9489
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In West Columbia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "West Columbia"
    }
  },
  {
    "slug": "dentsville",
    "name": "Dentsville",
    "county": "South Carolina",
    "zip": ["29308"],
    "neighborhoods": [
      "Downtown Dentsville",
      "Greater Dentsville"
    ],
    "landmarks": [
      {
        "name": "Dentsville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9021,
      "lng": -81.0364
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dentsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Dentsville"
    }
  },
  {
    "slug": "berea",
    "name": "Berea",
    "county": "South Carolina",
    "zip": ["29557"],
    "neighborhoods": [
      "Downtown Berea",
      "Greater Berea"
    ],
    "landmarks": [
      {
        "name": "Berea Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0466,
      "lng": -80.9890
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Berea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Berea"
    }
  },
  {
    "slug": "seven-oaks",
    "name": "Seven Oaks",
    "county": "South Carolina",
    "zip": ["29966"],
    "neighborhoods": [
      "Downtown Seven Oaks",
      "Greater Seven Oaks"
    ],
    "landmarks": [
      {
        "name": "Seven Oaks Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0659,
      "lng": -81.0509
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seven Oaks, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Seven Oaks"
    }
  },
  {
    "slug": "red-hill",
    "name": "Red Hill",
    "county": "South Carolina",
    "zip": ["29782"],
    "neighborhoods": [
      "Downtown Red Hill",
      "Greater Red Hill"
    ],
    "landmarks": [
      {
        "name": "Red Hill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0767,
      "lng": -81.0213
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Red Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Red Hill!",
      "location": "Red Hill"
    }
  },
  {
    "slug": "ladson",
    "name": "Ladson",
    "county": "Charleston County",
    "zip": ["29456"],
    "neighborhoods": [
      "Downtown Ladson",
      "Greater Ladson"
    ],
    "landmarks": [
      {
        "name": "Ladson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0241,
      "lng": -81.0435
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ladson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Ladson"
    }
  },
  {
    "slug": "port-royal",
    "name": "Port Royal",
    "county": "Beaufort County",
    "zip": ["29935"],
    "neighborhoods": [
      "Downtown Port Royal",
      "Greater Port Royal"
    ],
    "landmarks": [
      {
        "name": "Port Royal Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9868,
      "lng": -80.9629
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Port Royal, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Port Royal"
    }
  },
  {
    "slug": "lake-wylie",
    "name": "Lake Wylie",
    "county": "South Carolina",
    "zip": ["29239"],
    "neighborhoods": [
      "Downtown Lake Wylie",
      "Greater Lake Wylie"
    ],
    "landmarks": [
      {
        "name": "Lake Wylie Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0969,
      "lng": -81.0260
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake Wylie, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Lake Wylie"
    }
  },
  {
    "slug": "gantt",
    "name": "Gantt",
    "county": "South Carolina",
    "zip": ["29459"],
    "neighborhoods": [
      "Downtown Gantt",
      "Greater Gantt"
    ],
    "landmarks": [
      {
        "name": "Gantt Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0883,
      "lng": -81.0250
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gantt, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Gantt"
    }
  },
  {
    "slug": "cayce",
    "name": "Cayce",
    "county": "Lexington County",
    "zip": ["29033"],
    "neighborhoods": [
      "Downtown Cayce",
      "Greater Cayce"
    ],
    "landmarks": [
      {
        "name": "Cayce Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0705,
      "lng": -81.1262
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cayce, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Cayce"
    }
  },
  {
    "slug": "beaufort",
    "name": "Beaufort",
    "county": "Beaufort County",
    "zip": ["29901"],
    "neighborhoods": [
      "Downtown Beaufort",
      "Greater Beaufort"
    ],
    "landmarks": [
      {
        "name": "Beaufort Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 32.4206,
      "lng": -80.6015
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Beaufort, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Beaufort"
    }
  },
  {
    "slug": "moncks-corner",
    "name": "Moncks corner",
    "county": "Berkeley County",
    "zip": ["29461"],
    "neighborhoods": [
      "Downtown Moncks corner",
      "Greater Moncks corner"
    ],
    "landmarks": [
      {
        "name": "Moncks Corner Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0918,
      "lng": -81.0738
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Moncks corner, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Moncks corner"
    }
  },
  {
    "slug": "orangeburg",
    "name": "Orangeburg",
    "county": "Orangeburg County",
    "zip": ["29115"],
    "neighborhoods": [
      "Downtown Orangeburg",
      "Greater Orangeburg"
    ],
    "landmarks": [
      {
        "name": "Orangeburg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0969,
      "lng": -80.9557
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Orangeburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Orangeburg!",
      "location": "Orangeburg"
    }
  },
  {
    "slug": "tega-cay",
    "name": "Tega cay",
    "county": "South Carolina",
    "zip": ["29398"],
    "neighborhoods": [
      "Downtown Tega cay",
      "Greater Tega cay"
    ],
    "landmarks": [
      {
        "name": "Tega Cay Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0929,
      "lng": -81.1222
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tega cay, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Tega cay"
    }
  },
  {
    "slug": "gaffney",
    "name": "Gaffney",
    "county": "Cherokee County",
    "zip": ["29340"],
    "neighborhoods": [
      "Downtown Gaffney",
      "Greater Gaffney"
    ],
    "landmarks": [
      {
        "name": "Gaffney Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9030,
      "lng": -80.9795
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gaffney, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Gaffney"
    }
  },
  {
    "slug": "parker",
    "name": "Parker",
    "county": "South Carolina",
    "zip": ["29897"],
    "neighborhoods": [
      "Downtown Parker",
      "Greater Parker"
    ],
    "landmarks": [
      {
        "name": "Parker Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0205,
      "lng": -80.9597
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Parker, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Parker"
    }
  },
  {
    "slug": "james-island",
    "name": "James Island",
    "county": "South Carolina",
    "zip": ["29795"],
    "neighborhoods": [
      "Downtown James Island",
      "Greater James Island"
    ],
    "landmarks": [
      {
        "name": "James Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9367,
      "lng": -80.9768
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In James Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "James Island"
    }
  },
  {
    "slug": "irmo",
    "name": "Irmo",
    "county": "Richland County",
    "zip": ["29063"],
    "neighborhoods": [
      "Downtown Irmo",
      "Greater Irmo"
    ],
    "landmarks": [
      {
        "name": "Irmo Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0393,
      "lng": -81.1143
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Irmo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Irmo"
    }
  },
  {
    "slug": "oak-grove",
    "name": "Oak Grove",
    "county": "South Carolina",
    "zip": ["29684"],
    "neighborhoods": [
      "Downtown Oak Grove",
      "Greater Oak Grove"
    ],
    "landmarks": [
      {
        "name": "Oak Grove Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9137,
      "lng": -80.9829
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Oak Grove, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Oak Grove"
    }
  },
  {
    "slug": "boiling-springs",
    "name": "Boiling Springs",
    "county": "Spartanburg County",
    "zip": ["29316"],
    "neighborhoods": [
      "Downtown Boiling Springs",
      "Greater Boiling Springs"
    ],
    "landmarks": [
      {
        "name": "Boiling Springs Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0501,
      "lng": -80.9788
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Boiling Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Boiling Springs"
    }
  },
  {
    "slug": "garden-city",
    "name": "Garden city",
    "county": "South Carolina",
    "zip": ["29191"],
    "neighborhoods": [
      "Downtown Garden city",
      "Greater Garden city"
    ],
    "landmarks": [
      {
        "name": "Garden City Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9341,
      "lng": -81.0930
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Garden city, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Garden city"
    }
  },
  {
    "slug": "newberry",
    "name": "Newberry",
    "county": "Newberry County",
    "zip": ["29108"],
    "neighborhoods": [
      "Downtown Newberry",
      "Greater Newberry"
    ],
    "landmarks": [
      {
        "name": "Newberry Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9010,
      "lng": -80.9357
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newberry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Newberry"
    }
  },
  {
    "slug": "powdersville",
    "name": "Powdersville",
    "county": "South Carolina",
    "zip": ["29568"],
    "neighborhoods": [
      "Downtown Powdersville",
      "Greater Powdersville"
    ],
    "landmarks": [
      {
        "name": "Powdersville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9909,
      "lng": -81.0615
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Powdersville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Powdersville"
    }
  },
  {
    "slug": "fountain-inn",
    "name": "Fountain Inn",
    "county": "Greenville County",
    "zip": ["29644"],
    "neighborhoods": [
      "Downtown Fountain Inn",
      "Greater Fountain Inn"
    ],
    "landmarks": [
      {
        "name": "Fountain Inn Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0716,
      "lng": -80.9667
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fountain Inn, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Fountain Inn"
    }
  },
  {
    "slug": "red-bank",
    "name": "Red Bank",
    "county": "South Carolina",
    "zip": ["29657"],
    "neighborhoods": [
      "Downtown Red Bank",
      "Greater Red Bank"
    ],
    "landmarks": [
      {
        "name": "Red Bank Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9911,
      "lng": -80.9371
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Red Bank, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Red Bank"
    }
  },
  {
    "slug": "forest-acres",
    "name": "Forest Acres",
    "county": "South Carolina",
    "zip": ["29508"],
    "neighborhoods": [
      "Downtown Forest Acres",
      "Greater Forest Acres"
    ],
    "landmarks": [
      {
        "name": "Forest Acres Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0058,
      "lng": -81.1252
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Forest Acres, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Forest Acres!",
      "location": "Forest Acres"
    }
  },
  {
    "slug": "murrells-inlet",
    "name": "Murrells Inlet",
    "county": "Horry County",
    "zip": ["29576"],
    "neighborhoods": [
      "Downtown Murrells Inlet",
      "Greater Murrells Inlet"
    ],
    "landmarks": [
      {
        "name": "Murrells Inlet Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0445,
      "lng": -81.0739
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Murrells Inlet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Murrells Inlet"
    }
  },
  {
    "slug": "little-river",
    "name": "Little River",
    "county": "Horry County",
    "zip": ["29566"],
    "neighborhoods": [
      "Downtown Little River",
      "Greater Little River"
    ],
    "landmarks": [
      {
        "name": "Little River Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9825,
      "lng": -81.0984
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Little River, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Little River"
    }
  },
  {
    "slug": "woodfield",
    "name": "Woodfield",
    "county": "South Carolina",
    "zip": ["29104"],
    "neighborhoods": [
      "Downtown Woodfield",
      "Greater Woodfield"
    ],
    "landmarks": [
      {
        "name": "Woodfield Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0881,
      "lng": -81.0705
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Woodfield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Woodfield"
    }
  },
  {
    "slug": "lugoff",
    "name": "Lugoff",
    "county": "Kershaw County",
    "zip": ["29078"],
    "neighborhoods": [
      "Downtown Lugoff",
      "Greater Lugoff"
    ],
    "landmarks": [
      {
        "name": "Lugoff Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0310,
      "lng": -80.9485
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lugoff, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lugoff!",
      "location": "Lugoff"
    }
  },
  {
    "slug": "laurens",
    "name": "Laurens",
    "county": "Laurens County",
    "zip": ["29360"],
    "neighborhoods": [
      "Downtown Laurens",
      "Greater Laurens"
    ],
    "landmarks": [
      {
        "name": "Laurens Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0717,
      "lng": -81.0915
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Laurens, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Laurens"
    }
  },
  {
    "slug": "litchfield-beach",
    "name": "Litchfield Beach",
    "county": "South Carolina",
    "zip": ["29858"],
    "neighborhoods": [
      "Downtown Litchfield Beach",
      "Greater Litchfield Beach"
    ],
    "landmarks": [
      {
        "name": "Litchfield Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9581,
      "lng": -81.0731
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Litchfield Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Litchfield Beach"
    }
  },
  {
    "slug": "seneca",
    "name": "Seneca",
    "county": "Oconee County",
    "zip": ["29672"],
    "neighborhoods": [
      "Downtown Seneca",
      "Greater Seneca"
    ],
    "landmarks": [
      {
        "name": "Seneca Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9213,
      "lng": -80.9670
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seneca, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Seneca"
    }
  },
  {
    "slug": "sangaree",
    "name": "Sangaree",
    "county": "South Carolina",
    "zip": ["29872"],
    "neighborhoods": [
      "Downtown Sangaree",
      "Greater Sangaree"
    ],
    "landmarks": [
      {
        "name": "Sangaree Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9269,
      "lng": -81.1294
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sangaree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Sangaree"
    }
  },
  {
    "slug": "lancaster",
    "name": "Lancaster",
    "county": "Lancaster County",
    "zip": ["29720"],
    "neighborhoods": [
      "Downtown Lancaster",
      "Greater Lancaster"
    ],
    "landmarks": [
      {
        "name": "Lancaster Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0479,
      "lng": -81.0583
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lancaster, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Lancaster"
    }
  },
  {
    "slug": "york",
    "name": "York",
    "county": "York County",
    "zip": ["29745"],
    "neighborhoods": [
      "Downtown York",
      "Greater York"
    ],
    "landmarks": [
      {
        "name": "York Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0608,
      "lng": -81.0504
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In York, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "York"
    }
  },
  {
    "slug": "georgetown",
    "name": "Georgetown",
    "county": "Georgetown County",
    "zip": ["29440"],
    "neighborhoods": [
      "Downtown Georgetown",
      "Greater Georgetown"
    ],
    "landmarks": [
      {
        "name": "Georgetown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9188,
      "lng": -81.0927
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Georgetown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Georgetown"
    }
  },
  {
    "slug": "union",
    "name": "Union",
    "county": "Union County",
    "zip": ["29379"],
    "neighborhoods": [
      "Downtown Union",
      "Greater Union"
    ],
    "landmarks": [
      {
        "name": "Union Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9753,
      "lng": -81.0979
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Union, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Union"
    }
  },
  {
    "slug": "hardeeville",
    "name": "Hardeeville",
    "county": "Jasper County",
    "zip": ["29927"],
    "neighborhoods": [
      "Downtown Hardeeville",
      "Greater Hardeeville"
    ],
    "landmarks": [
      {
        "name": "Hardeeville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9378,
      "lng": -81.0795
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hardeeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Hardeeville"
    }
  },
  {
    "slug": "sans-souci",
    "name": "Sans Souci",
    "county": "South Carolina",
    "zip": ["29492"],
    "neighborhoods": [
      "Downtown Sans Souci",
      "Greater Sans Souci"
    ],
    "landmarks": [
      {
        "name": "Sans Souci Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9547,
      "lng": -81.1269
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sans Souci, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Sans Souci"
    }
  },
  {
    "slug": "travelers-rest",
    "name": "Travelers Rest",
    "county": "Greenville County",
    "zip": ["29690"],
    "neighborhoods": [
      "Downtown Travelers Rest",
      "Greater Travelers Rest"
    ],
    "landmarks": [
      {
        "name": "Travelers Rest Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0938,
      "lng": -80.9565
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Travelers Rest, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Travelers Rest"
    }
  },
  {
    "slug": "camden",
    "name": "Camden",
    "county": "Kershaw County",
    "zip": ["29020"],
    "neighborhoods": [
      "Downtown Camden",
      "Greater Camden"
    ],
    "landmarks": [
      {
        "name": "Camden Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0602,
      "lng": -81.0751
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Camden, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Camden"
    }
  },
  {
    "slug": "clinton",
    "name": "Clinton",
    "county": "Laurens County",
    "zip": ["29325"],
    "neighborhoods": [
      "Downtown Clinton",
      "Greater Clinton"
    ],
    "landmarks": [
      {
        "name": "Clinton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9249,
      "lng": -81.0463
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clinton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Clinton"
    }
  },
  {
    "slug": "burton",
    "name": "Burton",
    "county": "South Carolina",
    "zip": ["29854"],
    "neighborhoods": [
      "Downtown Burton",
      "Greater Burton"
    ],
    "landmarks": [
      {
        "name": "Burton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0623,
      "lng": -80.9918
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Burton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Burton"
    }
  },
  {
    "slug": "homeland-park",
    "name": "Homeland Park",
    "county": "South Carolina",
    "zip": ["29651"],
    "neighborhoods": [
      "Downtown Homeland Park",
      "Greater Homeland Park"
    ],
    "landmarks": [
      {
        "name": "Homeland Park Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0492,
      "lng": -81.1087
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Homeland Park, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Homeland Park"
    }
  },
  {
    "slug": "hartsville",
    "name": "Hartsville",
    "county": "Darlington County",
    "zip": ["29550"],
    "neighborhoods": [
      "Downtown Hartsville",
      "Greater Hartsville"
    ],
    "landmarks": [
      {
        "name": "Hartsville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9233,
      "lng": -81.0461
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hartsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Hartsville"
    }
  },
  {
    "slug": "forestbrook",
    "name": "Forestbrook",
    "county": "South Carolina",
    "zip": ["29436"],
    "neighborhoods": [
      "Downtown Forestbrook",
      "Greater Forestbrook"
    ],
    "landmarks": [
      {
        "name": "Forestbrook Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9942,
      "lng": -80.9444
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Forestbrook, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Forestbrook"
    }
  },
  {
    "slug": "centerville",
    "name": "Centerville",
    "county": "South Carolina",
    "zip": ["29507"],
    "neighborhoods": [
      "Downtown Centerville",
      "Greater Centerville"
    ],
    "landmarks": [
      {
        "name": "Centerville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9608,
      "lng": -81.0760
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Centerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Centerville"
    }
  },
  {
    "slug": "white-knoll",
    "name": "White Knoll",
    "county": "South Carolina",
    "zip": ["29686"],
    "neighborhoods": [
      "Downtown White Knoll",
      "Greater White Knoll"
    ],
    "landmarks": [
      {
        "name": "White Knoll Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9260,
      "lng": -81.0553
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In White Knoll, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "White Knoll"
    }
  },
  {
    "slug": "welcome",
    "name": "Welcome",
    "county": "South Carolina",
    "zip": ["29581"],
    "neighborhoods": [
      "Downtown Welcome",
      "Greater Welcome"
    ],
    "landmarks": [
      {
        "name": "Welcome Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0616,
      "lng": -81.0292
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Welcome, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Welcome"
    }
  },
  {
    "slug": "valley-falls",
    "name": "Valley Falls",
    "county": "South Carolina",
    "zip": ["29104"],
    "neighborhoods": [
      "Downtown Valley Falls",
      "Greater Valley Falls"
    ],
    "landmarks": [
      {
        "name": "Valley Falls Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0340,
      "lng": -80.9609
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Valley Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Valley Falls"
    }
  },
  {
    "slug": "bennettsville",
    "name": "Bennettsville",
    "county": "Marlboro County",
    "zip": ["29512"],
    "neighborhoods": [
      "Downtown Bennettsville",
      "Greater Bennettsville"
    ],
    "landmarks": [
      {
        "name": "Bennettsville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0997,
      "lng": -80.9556
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bennettsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Bennettsville"
    }
  },
  {
    "slug": "lake-murray-of-richland",
    "name": "Lake Murray of Richland",
    "county": "South Carolina",
    "zip": ["29668"],
    "neighborhoods": [
      "Downtown Lake Murray of Richland",
      "Greater Lake Murray of Richland"
    ],
    "landmarks": [
      {
        "name": "Lake Murray Of Richland Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0400,
      "lng": -81.0359
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake Murray of Richland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Lake Murray of Richland"
    }
  },
  {
    "slug": "clover",
    "name": "Clover",
    "county": "York County",
    "zip": ["29710"],
    "neighborhoods": [
      "Downtown Clover",
      "Greater Clover"
    ],
    "landmarks": [
      {
        "name": "Clover Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9716,
      "lng": -81.0869
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clover, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Clover"
    }
  },
  {
    "slug": "dillon",
    "name": "Dillon",
    "county": "Dillon County",
    "zip": ["29536"],
    "neighborhoods": [
      "Downtown Dillon",
      "Greater Dillon"
    ],
    "landmarks": [
      {
        "name": "Dillon Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0462,
      "lng": -80.9985
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dillon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Dillon"
    }
  },
  {
    "slug": "marion",
    "name": "Marion",
    "county": "Marion County",
    "zip": ["29571"],
    "neighborhoods": [
      "Downtown Marion",
      "Greater Marion"
    ],
    "landmarks": [
      {
        "name": "Marion Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9870,
      "lng": -81.0036
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Marion, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Marion!",
      "location": "Marion"
    }
  },
  {
    "slug": "clemson-university",
    "name": "Clemson University",
    "county": "South Carolina",
    "zip": ["29171"],
    "neighborhoods": [
      "Downtown Clemson University",
      "Greater Clemson University"
    ],
    "landmarks": [
      {
        "name": "Clemson University Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9097,
      "lng": -81.0432
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clemson University, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Clemson University"
    }
  },
  {
    "slug": "darlington",
    "name": "Darlington",
    "county": "Darlington County",
    "zip": ["29532"],
    "neighborhoods": [
      "Downtown Darlington",
      "Greater Darlington"
    ],
    "landmarks": [
      {
        "name": "Darlington Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0008,
      "lng": -81.1183
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Darlington, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Darlington"
    }
  },
  {
    "slug": "lyman",
    "name": "Lyman",
    "county": "Spartanburg County",
    "zip": ["29365"],
    "neighborhoods": [
      "Downtown Lyman",
      "Greater Lyman"
    ],
    "landmarks": [
      {
        "name": "Lyman Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9384,
      "lng": -81.1027
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lyman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Lyman"
    }
  },
  {
    "slug": "lake-city",
    "name": "Lake city",
    "county": "Florence County",
    "zip": ["29560"],
    "neighborhoods": [
      "Downtown Lake city",
      "Greater Lake city"
    ],
    "landmarks": [
      {
        "name": "Lake City Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9397,
      "lng": -81.0898
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake city, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Lake city"
    }
  },
  {
    "slug": "belvedere",
    "name": "Belvedere",
    "county": "South Carolina",
    "zip": ["29351"],
    "neighborhoods": [
      "Downtown Belvedere",
      "Greater Belvedere"
    ],
    "landmarks": [
      {
        "name": "Belvedere Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0810,
      "lng": -80.9906
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Belvedere, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Belvedere!",
      "location": "Belvedere"
    }
  },
  {
    "slug": "walterboro",
    "name": "Walterboro",
    "county": "Colleton County",
    "zip": ["29488"],
    "neighborhoods": [
      "Downtown Walterboro",
      "Greater Walterboro"
    ],
    "landmarks": [
      {
        "name": "Walterboro Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0215,
      "lng": -80.9830
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Walterboro, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Walterboro"
    }
  },
  {
    "slug": "laurel-bay",
    "name": "Laurel Bay",
    "county": "South Carolina",
    "zip": ["29565"],
    "neighborhoods": [
      "Downtown Laurel Bay",
      "Greater Laurel Bay"
    ],
    "landmarks": [
      {
        "name": "Laurel Bay Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9161,
      "lng": -80.9600
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Laurel Bay, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Laurel Bay!",
      "location": "Laurel Bay"
    }
  },
  {
    "slug": "piedmont",
    "name": "Piedmont",
    "county": "Greenville County",
    "zip": ["29673"],
    "neighborhoods": [
      "Downtown Piedmont",
      "Greater Piedmont"
    ],
    "landmarks": [
      {
        "name": "Piedmont Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0261,
      "lng": -81.0688
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Piedmont, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Piedmont"
    }
  },
  {
    "slug": "hollywood",
    "name": "Hollywood",
    "county": "Charleston County",
    "zip": ["29449"],
    "neighborhoods": [
      "Downtown Hollywood",
      "Greater Hollywood"
    ],
    "landmarks": [
      {
        "name": "Hollywood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9770,
      "lng": -80.9427
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hollywood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Hollywood"
    }
  },
  {
    "slug": "central",
    "name": "Central",
    "county": "Pickens County",
    "zip": ["29630"],
    "neighborhoods": [
      "Downtown Central",
      "Greater Central"
    ],
    "landmarks": [
      {
        "name": "Central Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9563,
      "lng": -81.0093
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Central, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Central"
    }
  },
  {
    "slug": "chester",
    "name": "Chester",
    "county": "Chester County",
    "zip": ["29706"],
    "neighborhoods": [
      "Downtown Chester",
      "Greater Chester"
    ],
    "landmarks": [
      {
        "name": "Chester Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0869,
      "lng": -80.9916
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Chester, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Chester"
    }
  },
  {
    "slug": "cheraw",
    "name": "Cheraw",
    "county": "Chesterfield County",
    "zip": ["29520"],
    "neighborhoods": [
      "Downtown Cheraw",
      "Greater Cheraw"
    ],
    "landmarks": [
      {
        "name": "Cheraw Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0519,
      "lng": -81.1247
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cheraw, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Cheraw!",
      "location": "Cheraw"
    }
  },
  {
    "slug": "batesburg-leesville",
    "name": "Batesburg-Leesville",
    "county": "South Carolina",
    "zip": ["29968"],
    "neighborhoods": [
      "Downtown Batesburg-Leesville",
      "Greater Batesburg-Leesville"
    ],
    "landmarks": [
      {
        "name": "Batesburg-Leesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9013,
      "lng": -81.0294
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Batesburg-Leesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Batesburg-Leesville"
    }
  },
  {
    "slug": "abbeville",
    "name": "Abbeville",
    "county": "Abbeville County",
    "zip": ["29620"],
    "neighborhoods": [
      "Downtown Abbeville",
      "Greater Abbeville"
    ],
    "landmarks": [
      {
        "name": "Abbeville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9508,
      "lng": -81.0157
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Abbeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Abbeville!",
      "location": "Abbeville"
    }
  },
  {
    "slug": "blythewood",
    "name": "Blythewood",
    "county": "Richland County",
    "zip": ["29016"],
    "neighborhoods": [
      "Downtown Blythewood",
      "Greater Blythewood"
    ],
    "landmarks": [
      {
        "name": "Blythewood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9909,
      "lng": -81.0545
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blythewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Blythewood"
    }
  },
  {
    "slug": "barnwell",
    "name": "Barnwell",
    "county": "Barnwell County",
    "zip": ["29812"],
    "neighborhoods": [
      "Downtown Barnwell",
      "Greater Barnwell"
    ],
    "landmarks": [
      {
        "name": "Barnwell Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0973,
      "lng": -81.1205
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Barnwell, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Barnwell!",
      "location": "Barnwell"
    }
  },
  {
    "slug": "baxter-village",
    "name": "Baxter Village",
    "county": "South Carolina",
    "zip": ["29817"],
    "neighborhoods": [
      "Downtown Baxter Village",
      "Greater Baxter Village"
    ],
    "landmarks": [
      {
        "name": "Baxter Village Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0201,
      "lng": -81.0404
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Baxter Village, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Baxter Village"
    }
  },
  {
    "slug": "india-hook",
    "name": "India Hook",
    "county": "South Carolina",
    "zip": ["29480"],
    "neighborhoods": [
      "Downtown India Hook",
      "Greater India Hook"
    ],
    "landmarks": [
      {
        "name": "India Hook Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0263,
      "lng": -80.9497
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In India Hook, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "India Hook"
    }
  },
  {
    "slug": "belton",
    "name": "Belton",
    "county": "Anderson County",
    "zip": ["29627"],
    "neighborhoods": [
      "Downtown Belton",
      "Greater Belton"
    ],
    "landmarks": [
      {
        "name": "Belton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9394,
      "lng": -80.9718
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Belton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Belton"
    }
  },
  {
    "slug": "isle-of-palms",
    "name": "Isle of Palms",
    "county": "Charleston County",
    "zip": ["29451"],
    "neighborhoods": [
      "Downtown Isle of Palms",
      "Greater Isle of Palms"
    ],
    "landmarks": [
      {
        "name": "Isle Of Palms Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9091,
      "lng": -81.0885
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Isle of Palms, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Isle of Palms"
    }
  },
  {
    "slug": "woodruff",
    "name": "Woodruff",
    "county": "Spartanburg County",
    "zip": ["29388"],
    "neighborhoods": [
      "Downtown Woodruff",
      "Greater Woodruff"
    ],
    "landmarks": [
      {
        "name": "Woodruff Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9651,
      "lng": -80.9924
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Woodruff, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Woodruff"
    }
  },
  {
    "slug": "newport",
    "name": "Newport",
    "county": "South Carolina",
    "zip": ["29433"],
    "neighborhoods": [
      "Downtown Newport",
      "Greater Newport"
    ],
    "landmarks": [
      {
        "name": "Newport Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0636,
      "lng": -80.9627
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newport, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Newport"
    }
  },
  {
    "slug": "surfside-beach",
    "name": "Surfside Beach",
    "county": "South Carolina",
    "zip": ["29893"],
    "neighborhoods": [
      "Downtown Surfside Beach",
      "Greater Surfside Beach"
    ],
    "landmarks": [
      {
        "name": "Surfside Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9881,
      "lng": -80.9759
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Surfside Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Surfside Beach"
    }
  },
  {
    "slug": "saxon",
    "name": "Saxon",
    "county": "South Carolina",
    "zip": ["29754"],
    "neighborhoods": [
      "Downtown Saxon",
      "Greater Saxon"
    ],
    "landmarks": [
      {
        "name": "Saxon Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9626,
      "lng": -81.0761
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Saxon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Saxon"
    }
  },
  {
    "slug": "walhalla",
    "name": "Walhalla",
    "county": "Oconee County",
    "zip": ["29691"],
    "neighborhoods": [
      "Downtown Walhalla",
      "Greater Walhalla"
    ],
    "landmarks": [
      {
        "name": "Walhalla Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0869,
      "lng": -81.0669
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Walhalla, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Walhalla"
    }
  },
  {
    "slug": "williamston",
    "name": "Williamston",
    "county": "Anderson County",
    "zip": ["29697"],
    "neighborhoods": [
      "Downtown Williamston",
      "Greater Williamston"
    ],
    "landmarks": [
      {
        "name": "Williamston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0722,
      "lng": -80.9439
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Williamston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Williamston"
    }
  },
  {
    "slug": "brookdale",
    "name": "Brookdale",
    "county": "South Carolina",
    "zip": ["29523"],
    "neighborhoods": [
      "Downtown Brookdale",
      "Greater Brookdale"
    ],
    "landmarks": [
      {
        "name": "Brookdale Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9030,
      "lng": -81.0611
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Brookdale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Brookdale"
    }
  },
  {
    "slug": "duncan",
    "name": "Duncan",
    "county": "Spartanburg County",
    "zip": ["29334"],
    "neighborhoods": [
      "Downtown Duncan",
      "Greater Duncan"
    ],
    "landmarks": [
      {
        "name": "Duncan Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0567,
      "lng": -80.9889
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Duncan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Duncan"
    }
  },
  {
    "slug": "mullins",
    "name": "Mullins",
    "county": "Marion County",
    "zip": ["29574"],
    "neighborhoods": [
      "Downtown Mullins",
      "Greater Mullins"
    ],
    "landmarks": [
      {
        "name": "Mullins Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0614,
      "lng": -81.0020
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mullins, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Mullins"
    }
  },
  {
    "slug": "northlake",
    "name": "Northlake",
    "county": "South Carolina",
    "zip": ["29325"],
    "neighborhoods": [
      "Downtown Northlake",
      "Greater Northlake"
    ],
    "landmarks": [
      {
        "name": "Northlake Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0664,
      "lng": -81.1044
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Northlake, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Northlake"
    }
  },
  {
    "slug": "manning",
    "name": "Manning",
    "county": "Clarendon County",
    "zip": ["29102"],
    "neighborhoods": [
      "Downtown Manning",
      "Greater Manning"
    ],
    "landmarks": [
      {
        "name": "Manning Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0691,
      "lng": -80.9630
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Manning, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Manning"
    }
  },
  {
    "slug": "southern-shops",
    "name": "Southern Shops",
    "county": "South Carolina",
    "zip": ["29775"],
    "neighborhoods": [
      "Downtown Southern Shops",
      "Greater Southern Shops"
    ],
    "landmarks": [
      {
        "name": "Southern Shops Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9723,
      "lng": -80.9725
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Southern Shops, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Southern Shops"
    }
  },
  {
    "slug": "roebuck",
    "name": "Roebuck",
    "county": "Spartanburg County",
    "zip": ["29376"],
    "neighborhoods": [
      "Downtown Roebuck",
      "Greater Roebuck"
    ],
    "landmarks": [
      {
        "name": "Roebuck Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0982,
      "lng": -81.1301
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Roebuck, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Roebuck"
    }
  },
  {
    "slug": "wyboo",
    "name": "Wyboo",
    "county": "South Carolina",
    "zip": ["29783"],
    "neighborhoods": [
      "Downtown Wyboo",
      "Greater Wyboo"
    ],
    "landmarks": [
      {
        "name": "Wyboo Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9124,
      "lng": -81.0860
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wyboo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Wyboo"
    }
  },
  {
    "slug": "ridgeland",
    "name": "Ridgeland",
    "county": "Jasper County",
    "zip": ["29936"],
    "neighborhoods": [
      "Downtown Ridgeland",
      "Greater Ridgeland"
    ],
    "landmarks": [
      {
        "name": "Ridgeland Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0096,
      "lng": -81.0031
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridgeland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Ridgeland"
    }
  },
  {
    "slug": "whitney",
    "name": "Whitney",
    "county": "South Carolina",
    "zip": ["29920"],
    "neighborhoods": [
      "Downtown Whitney",
      "Greater Whitney"
    ],
    "landmarks": [
      {
        "name": "Whitney Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0890,
      "lng": -81.0345
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Whitney, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Whitney!",
      "location": "Whitney"
    }
  },
  {
    "slug": "honea-path",
    "name": "Honea Path",
    "county": "Anderson County",
    "zip": ["29654"],
    "neighborhoods": [
      "Downtown Honea Path",
      "Greater Honea Path"
    ],
    "landmarks": [
      {
        "name": "Honea Path Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9980,
      "lng": -80.9511
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Honea Path, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Honea Path!",
      "location": "Honea Path"
    }
  },
  {
    "slug": "andrews",
    "name": "Andrews",
    "county": "Williamsburg County",
    "zip": ["29510"],
    "neighborhoods": [
      "Downtown Andrews",
      "Greater Andrews"
    ],
    "landmarks": [
      {
        "name": "Andrews Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0080,
      "lng": -81.1100
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Andrews, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Andrews"
    }
  },
  {
    "slug": "east-camden",
    "name": "East Camden",
    "county": "South Carolina",
    "zip": ["29288"],
    "neighborhoods": [
      "Downtown East Camden",
      "Greater East Camden"
    ],
    "landmarks": [
      {
        "name": "East Camden Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9466,
      "lng": -80.9491
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In East Camden, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in East Camden!",
      "location": "East Camden"
    }
  },
  {
    "slug": "pendleton",
    "name": "Pendleton",
    "county": "Anderson County",
    "zip": ["29670"],
    "neighborhoods": [
      "Downtown Pendleton",
      "Greater Pendleton"
    ],
    "landmarks": [
      {
        "name": "Pendleton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9108,
      "lng": -81.0647
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pendleton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Pendleton"
    }
  },
  {
    "slug": "capitol-view",
    "name": "Capitol View",
    "county": "South Carolina",
    "zip": ["29107"],
    "neighborhoods": [
      "Downtown Capitol View",
      "Greater Capitol View"
    ],
    "landmarks": [
      {
        "name": "Capitol View Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0456,
      "lng": -81.1194
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Capitol View, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Capitol View"
    }
  },
  {
    "slug": "dunean",
    "name": "Dunean",
    "county": "South Carolina",
    "zip": ["29355"],
    "neighborhoods": [
      "Downtown Dunean",
      "Greater Dunean"
    ],
    "landmarks": [
      {
        "name": "Dunean Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9923,
      "lng": -81.0733
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dunean, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Dunean"
    }
  },
  {
    "slug": "dalzell",
    "name": "Dalzell",
    "county": "Sumter County",
    "zip": ["29040"],
    "neighborhoods": [
      "Downtown Dalzell",
      "Greater Dalzell"
    ],
    "landmarks": [
      {
        "name": "Dalzell Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0949,
      "lng": -80.9504
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dalzell, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Dalzell"
    }
  },
  {
    "slug": "clearwater",
    "name": "Clearwater",
    "county": "Aiken County",
    "zip": ["29822"],
    "neighborhoods": [
      "Downtown clearwater",
      "Greater clearwater"
    ],
    "landmarks": [
      {
        "name": "Clearwater Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9899,
      "lng": -81.1134
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In clearwater, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "clearwater"
    }
  },
  {
    "slug": "pickens",
    "name": "Pickens",
    "county": "Pickens County",
    "zip": ["29671"],
    "neighborhoods": [
      "Downtown Pickens",
      "Greater Pickens"
    ],
    "landmarks": [
      {
        "name": "Pickens Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9501,
      "lng": -81.0340
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pickens, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Pickens"
    }
  },
  {
    "slug": "wellford",
    "name": "Wellford",
    "county": "Spartanburg County",
    "zip": ["29385"],
    "neighborhoods": [
      "Downtown Wellford",
      "Greater Wellford"
    ],
    "landmarks": [
      {
        "name": "Wellford Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0384,
      "lng": -80.9829
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wellford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Wellford"
    }
  },
  {
    "slug": "liberty",
    "name": "Liberty",
    "county": "Pickens County",
    "zip": ["29657"],
    "neighborhoods": [
      "Downtown Liberty",
      "Greater Liberty"
    ],
    "landmarks": [
      {
        "name": "Liberty Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0073,
      "lng": -81.1048
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Liberty, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Liberty!",
      "location": "Liberty"
    }
  },
  {
    "slug": "golden-grove",
    "name": "Golden Grove",
    "county": "South Carolina",
    "zip": ["29643"],
    "neighborhoods": [
      "Downtown Golden Grove",
      "Greater Golden Grove"
    ],
    "landmarks": [
      {
        "name": "Golden Grove Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9758,
      "lng": -80.9679
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Golden Grove, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Golden Grove"
    }
  },
  {
    "slug": "north-hartsville",
    "name": "North Hartsville",
    "county": "South Carolina",
    "zip": ["29415"],
    "neighborhoods": [
      "Downtown North Hartsville",
      "Greater North Hartsville"
    ],
    "landmarks": [
      {
        "name": "North Hartsville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0397,
      "lng": -81.0943
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Hartsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in North Hartsville!",
      "location": "North Hartsville"
    }
  },
  {
    "slug": "hilltop",
    "name": "Hilltop",
    "county": "South Carolina",
    "zip": ["29474"],
    "neighborhoods": [
      "Downtown Hilltop",
      "Greater Hilltop"
    ],
    "landmarks": [
      {
        "name": "Hilltop Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0221,
      "lng": -81.0551
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hilltop, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Hilltop"
    }
  },
  {
    "slug": "winnsboro",
    "name": "Winnsboro",
    "county": "Fairfield County",
    "zip": ["29180"],
    "neighborhoods": [
      "Downtown Winnsboro",
      "Greater Winnsboro"
    ],
    "landmarks": [
      {
        "name": "Winnsboro Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9160,
      "lng": -81.0128
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Winnsboro, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Winnsboro!",
      "location": "Winnsboro"
    }
  },
  {
    "slug": "kingstree",
    "name": "Kingstree",
    "county": "Williamsburg County",
    "zip": ["29556"],
    "neighborhoods": [
      "Downtown Kingstree",
      "Greater Kingstree"
    ],
    "landmarks": [
      {
        "name": "Kingstree Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0204,
      "lng": -81.0705
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kingstree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Kingstree!",
      "location": "Kingstree"
    }
  },
  {
    "slug": "denmark",
    "name": "Denmark",
    "county": "Bamberg County",
    "zip": ["29042"],
    "neighborhoods": [
      "Downtown Denmark",
      "Greater Denmark"
    ],
    "landmarks": [
      {
        "name": "Denmark Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9941,
      "lng": -81.0864
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Denmark, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Denmark"
    }
  },
  {
    "slug": "lakewood",
    "name": "Lakewood",
    "county": "South Carolina",
    "zip": ["29138"],
    "neighborhoods": [
      "Downtown Lakewood",
      "Greater Lakewood"
    ],
    "landmarks": [
      {
        "name": "Lakewood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0464,
      "lng": -81.0695
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lakewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lakewood!",
      "location": "Lakewood"
    }
  },
  {
    "slug": "saluda",
    "name": "Saluda",
    "county": "Saluda County",
    "zip": ["29138"],
    "neighborhoods": [
      "Downtown Saluda",
      "Greater Saluda"
    ],
    "landmarks": [
      {
        "name": "Saluda Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0057,
      "lng": -81.0019
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Saluda, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Saluda"
    }
  },
  {
    "slug": "lesslie",
    "name": "Lesslie",
    "county": "South Carolina",
    "zip": ["29463"],
    "neighborhoods": [
      "Downtown Lesslie",
      "Greater Lesslie"
    ],
    "landmarks": [
      {
        "name": "Lesslie Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0787,
      "lng": -81.0406
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lesslie, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lesslie!",
      "location": "Lesslie"
    }
  },
  {
    "slug": "gloverville",
    "name": "Gloverville",
    "county": "Aiken County",
    "zip": ["29828"],
    "neighborhoods": [
      "Downtown Gloverville",
      "Greater Gloverville"
    ],
    "landmarks": [
      {
        "name": "Gloverville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9900,
      "lng": -80.9919
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gloverville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Gloverville"
    }
  },
  {
    "slug": "bamberg",
    "name": "Bamberg",
    "county": "Bamberg County",
    "zip": ["29003"],
    "neighborhoods": [
      "Downtown Bamberg",
      "Greater Bamberg"
    ],
    "landmarks": [
      {
        "name": "Bamberg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9996,
      "lng": -81.1324
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bamberg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Bamberg!",
      "location": "Bamberg"
    }
  },
  {
    "slug": "keowee-key",
    "name": "Keowee Key",
    "county": "South Carolina",
    "zip": ["29398"],
    "neighborhoods": [
      "Downtown Keowee Key",
      "Greater Keowee Key"
    ],
    "landmarks": [
      {
        "name": "Keowee Key Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0778,
      "lng": -81.0760
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Keowee Key, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Keowee Key!",
      "location": "Keowee Key"
    }
  },
  {
    "slug": "burnettown",
    "name": "Burnettown",
    "county": "South Carolina",
    "zip": ["29249"],
    "neighborhoods": [
      "Downtown Burnettown",
      "Greater Burnettown"
    ],
    "landmarks": [
      {
        "name": "Burnettown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0639,
      "lng": -81.1283
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Burnettown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Burnettown"
    }
  },
  {
    "slug": "arthurtown",
    "name": "Arthurtown",
    "county": "South Carolina",
    "zip": ["29783"],
    "neighborhoods": [
      "Downtown Arthurtown",
      "Greater Arthurtown"
    ],
    "landmarks": [
      {
        "name": "Arthurtown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9255,
      "lng": -81.1245
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arthurtown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Arthurtown"
    }
  },
  {
    "slug": "inman",
    "name": "Inman",
    "county": "Spartanburg County",
    "zip": ["29349"],
    "neighborhoods": [
      "Downtown Inman",
      "Greater Inman"
    ],
    "landmarks": [
      {
        "name": "Inman Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9148,
      "lng": -81.0761
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Inman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Inman"
    }
  },
  {
    "slug": "bishopville",
    "name": "Bishopville",
    "county": "Lee County",
    "zip": ["29010"],
    "neighborhoods": [
      "Downtown Bishopville",
      "Greater Bishopville"
    ],
    "landmarks": [
      {
        "name": "Bishopville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0372,
      "lng": -81.0334
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bishopville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Bishopville"
    }
  },
  {
    "slug": "east-gaffney",
    "name": "East Gaffney",
    "county": "South Carolina",
    "zip": ["29748"],
    "neighborhoods": [
      "Downtown East Gaffney",
      "Greater East Gaffney"
    ],
    "landmarks": [
      {
        "name": "East Gaffney Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9802,
      "lng": -81.1075
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In East Gaffney, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "East Gaffney"
    }
  },
  {
    "slug": "elgin-cdp",
    "name": "Elgin cDP",
    "county": "South Carolina",
    "zip": ["29167"],
    "neighborhoods": [
      "Downtown Elgin cDP",
      "Greater Elgin cDP"
    ],
    "landmarks": [
      {
        "name": "Elgin Cdp Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9570,
      "lng": -80.9654
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elgin cDP, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Elgin cDP"
    }
  },
  {
    "slug": "williston",
    "name": "Williston",
    "county": "Barnwell County",
    "zip": ["29853"],
    "neighborhoods": [
      "Downtown Williston",
      "Greater Williston"
    ],
    "landmarks": [
      {
        "name": "Williston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9398,
      "lng": -81.0626
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Williston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Williston"
    }
  },
  {
    "slug": "arcadia",
    "name": "Arcadia",
    "county": "Spartanburg County",
    "zip": ["29320"],
    "neighborhoods": [
      "Downtown Arcadia",
      "Greater Arcadia"
    ],
    "landmarks": [
      {
        "name": "Arcadia Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9608,
      "lng": -81.0721
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arcadia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Arcadia"
    }
  },
  {
    "slug": "cherryvale",
    "name": "Cherryvale",
    "county": "South Carolina",
    "zip": ["29182"],
    "neighborhoods": [
      "Downtown cherryvale",
      "Greater cherryvale"
    ],
    "landmarks": [
      {
        "name": "Cherryvale Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9561,
      "lng": -81.0714
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cherryvale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in cherryvale!",
      "location": "cherryvale"
    }
  },
  {
    "slug": "mccormick",
    "name": "Mccormick",
    "county": "South Carolina",
    "zip": ["29442"],
    "neighborhoods": [
      "Downtown Mccormick",
      "Greater Mccormick"
    ],
    "landmarks": [
      {
        "name": "Mccormick Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9249,
      "lng": -81.0698
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mccormick, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Mccormick"
    }
  },
  {
    "slug": "pageland",
    "name": "Pageland",
    "county": "Chesterfield County",
    "zip": ["29728"],
    "neighborhoods": [
      "Downtown Pageland",
      "Greater Pageland"
    ],
    "landmarks": [
      {
        "name": "Pageland Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0846,
      "lng": -81.0564
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pageland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Pageland"
    }
  },
  {
    "slug": "hampton",
    "name": "Hampton",
    "county": "Hampton County",
    "zip": ["29924"],
    "neighborhoods": [
      "Downtown Hampton",
      "Greater Hampton"
    ],
    "landmarks": [
      {
        "name": "Hampton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0941,
      "lng": -81.0705
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hampton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Hampton"
    }
  },
  {
    "slug": "springdale-town",
    "name": "Springdale town",
    "county": "South Carolina",
    "zip": ["29990"],
    "neighborhoods": [
      "Downtown Springdale town",
      "Greater Springdale town"
    ],
    "landmarks": [
      {
        "name": "Springdale Town Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0563,
      "lng": -81.0846
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Springdale town, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Springdale town"
    }
  },
  {
    "slug": "allendale",
    "name": "Allendale",
    "county": "Allendale County",
    "zip": ["29810"],
    "neighborhoods": [
      "Downtown Allendale",
      "Greater Allendale"
    ],
    "landmarks": [
      {
        "name": "Allendale Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0743,
      "lng": -81.0629
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Allendale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Allendale"
    }
  },
  {
    "slug": "pine-ridge-town",
    "name": "Pine Ridge town",
    "county": "South Carolina",
    "zip": ["29453"],
    "neighborhoods": [
      "Downtown Pine Ridge town",
      "Greater Pine Ridge town"
    ],
    "landmarks": [
      {
        "name": "Pine Ridge Town Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0841,
      "lng": -81.0956
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pine Ridge town, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Pine Ridge town"
    }
  },
  {
    "slug": "arkwright",
    "name": "Arkwright",
    "county": "South Carolina",
    "zip": ["29166"],
    "neighborhoods": [
      "Downtown Arkwright",
      "Greater Arkwright"
    ],
    "landmarks": [
      {
        "name": "Arkwright Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0614,
      "lng": -81.0922
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arkwright, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Arkwright!",
      "location": "Arkwright"
    }
  },
  {
    "slug": "springdale-cdp",
    "name": "Springdale cDP",
    "county": "South Carolina",
    "zip": ["29499"],
    "neighborhoods": [
      "Downtown Springdale cDP",
      "Greater Springdale cDP"
    ],
    "landmarks": [
      {
        "name": "Springdale Cdp Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9368,
      "lng": -80.9707
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Springdale cDP, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Springdale cDP"
    }
  },
  {
    "slug": "ninety-six",
    "name": "Ninety Six",
    "county": "Greenwood County",
    "zip": ["29666"],
    "neighborhoods": [
      "Downtown Ninety Six",
      "Greater Ninety Six"
    ],
    "landmarks": [
      {
        "name": "Ninety Six Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9745,
      "lng": -80.9784
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ninety Six, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Ninety Six!",
      "location": "Ninety Six"
    }
  },
  {
    "slug": "ravenel",
    "name": "Ravenel",
    "county": "Charleston County",
    "zip": ["29470"],
    "neighborhoods": [
      "Downtown Ravenel",
      "Greater Ravenel"
    ],
    "landmarks": [
      {
        "name": "Ravenel Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0110,
      "lng": -81.0731
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ravenel, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Ravenel"
    }
  },
  {
    "slug": "loris",
    "name": "Loris",
    "county": "Horry County",
    "zip": ["29569"],
    "neighborhoods": [
      "Downtown Loris",
      "Greater Loris"
    ],
    "landmarks": [
      {
        "name": "Loris Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9742,
      "lng": -81.1198
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Loris, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Loris"
    }
  },
  {
    "slug": "new-ellenton",
    "name": "New Ellenton",
    "county": "Aiken County",
    "zip": ["29809"],
    "neighborhoods": [
      "Downtown New Ellenton",
      "Greater New Ellenton"
    ],
    "landmarks": [
      {
        "name": "New Ellenton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9800,
      "lng": -80.9416
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In New Ellenton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "New Ellenton"
    }
  },
  {
    "slug": "edgefield",
    "name": "Edgefield",
    "county": "Edgefield County",
    "zip": ["29824"],
    "neighborhoods": [
      "Downtown Edgefield",
      "Greater Edgefield"
    ],
    "landmarks": [
      {
        "name": "Edgefield Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9727,
      "lng": -80.9381
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edgefield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Edgefield"
    }
  },
  {
    "slug": "landrum",
    "name": "Landrum",
    "county": "Greenville County",
    "zip": ["29356"],
    "neighborhoods": [
      "Downtown Landrum",
      "Greater Landrum"
    ],
    "landmarks": [
      {
        "name": "Landrum Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0302,
      "lng": -81.0216
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Landrum, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Landrum"
    }
  },
  {
    "slug": "graniteville",
    "name": "Graniteville",
    "county": "Aiken County",
    "zip": ["29829"],
    "neighborhoods": [
      "Downtown Graniteville",
      "Greater Graniteville"
    ],
    "landmarks": [
      {
        "name": "Graniteville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0763,
      "lng": -81.1277
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Graniteville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Graniteville!",
      "location": "Graniteville"
    }
  },
  {
    "slug": "johnston",
    "name": "Johnston",
    "county": "Edgefield County",
    "zip": ["29832"],
    "neighborhoods": [
      "Downtown Johnston",
      "Greater Johnston"
    ],
    "landmarks": [
      {
        "name": "Johnston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9954,
      "lng": -81.0538
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Johnston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Johnston"
    }
  },
  {
    "slug": "sullivan's-island",
    "name": "Sullivan's Island",
    "county": "South Carolina",
    "zip": ["29659"],
    "neighborhoods": [
      "Downtown Sullivan's Island",
      "Greater Sullivan's Island"
    ],
    "landmarks": [
      {
        "name": "Sullivan'S Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0700,
      "lng": -80.9586
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sullivan's Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Sullivan's Island"
    }
  },
  {
    "slug": "kershaw",
    "name": "Kershaw",
    "county": "Lancaster County",
    "zip": ["29067"],
    "neighborhoods": [
      "Downtown Kershaw",
      "Greater Kershaw"
    ],
    "landmarks": [
      {
        "name": "Kershaw Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0212,
      "lng": -81.0396
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kershaw, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Kershaw"
    }
  },
  {
    "slug": "mccoll",
    "name": "Mccoll",
    "county": "South Carolina",
    "zip": ["29788"],
    "neighborhoods": [
      "Downtown Mccoll",
      "Greater Mccoll"
    ],
    "landmarks": [
      {
        "name": "Mccoll Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9913,
      "lng": -81.1069
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mccoll, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Mccoll"
    }
  },
  {
    "slug": "south-congaree",
    "name": "South congaree",
    "county": "South Carolina",
    "zip": ["29542"],
    "neighborhoods": [
      "Downtown South congaree",
      "Greater South congaree"
    ],
    "landmarks": [
      {
        "name": "South Congaree Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9063,
      "lng": -81.0813
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In South congaree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in South congaree!",
      "location": "South congaree"
    }
  },
  {
    "slug": "pimlico",
    "name": "Pimlico",
    "county": "South Carolina",
    "zip": ["29688"],
    "neighborhoods": [
      "Downtown Pimlico",
      "Greater Pimlico"
    ],
    "landmarks": [
      {
        "name": "Pimlico Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9424,
      "lng": -81.0377
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pimlico, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Pimlico"
    }
  },
  {
    "slug": "estill",
    "name": "Estill",
    "county": "Hampton County",
    "zip": ["29918"],
    "neighborhoods": [
      "Downtown Estill",
      "Greater Estill"
    ],
    "landmarks": [
      {
        "name": "Estill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9984,
      "lng": -81.0778
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Estill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Estill"
    }
  },
  {
    "slug": "westminster",
    "name": "Westminster",
    "county": "Oconee County",
    "zip": ["29693"],
    "neighborhoods": [
      "Downtown Westminster",
      "Greater Westminster"
    ],
    "landmarks": [
      {
        "name": "Westminster Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0204,
      "lng": -81.0140
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Westminster, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Westminster"
    }
  },
  {
    "slug": "slater-marietta",
    "name": "Slater-Marietta",
    "county": "South Carolina",
    "zip": ["29444"],
    "neighborhoods": [
      "Downtown Slater-Marietta",
      "Greater Slater-Marietta"
    ],
    "landmarks": [
      {
        "name": "Slater-Marietta Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0431,
      "lng": -80.9797
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Slater-Marietta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Slater-Marietta!",
      "location": "Slater-Marietta"
    }
  },
  {
    "slug": "privateer",
    "name": "Privateer",
    "county": "South Carolina",
    "zip": ["29410"],
    "neighborhoods": [
      "Downtown Privateer",
      "Greater Privateer"
    ],
    "landmarks": [
      {
        "name": "Privateer Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9412,
      "lng": -80.9581
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Privateer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Privateer"
    }
  },
  {
    "slug": "varnville",
    "name": "Varnville",
    "county": "Hampton County",
    "zip": ["29944"],
    "neighborhoods": [
      "Downtown Varnville",
      "Greater Varnville"
    ],
    "landmarks": [
      {
        "name": "Varnville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0845,
      "lng": -80.9480
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Varnville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Varnville!",
      "location": "Varnville"
    }
  },
  {
    "slug": "ben-avon",
    "name": "Ben Avon",
    "county": "South Carolina",
    "zip": ["29739"],
    "neighborhoods": [
      "Downtown Ben Avon",
      "Greater Ben Avon"
    ],
    "landmarks": [
      {
        "name": "Ben Avon Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9568,
      "lng": -81.0030
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ben Avon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Ben Avon"
    }
  },
  {
    "slug": "kiawah-island",
    "name": "Kiawah Island",
    "county": "South Carolina",
    "zip": ["29278"],
    "neighborhoods": [
      "Downtown Kiawah Island",
      "Greater Kiawah Island"
    ],
    "landmarks": [
      {
        "name": "Kiawah Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0304,
      "lng": -81.0755
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kiawah Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Kiawah Island"
    }
  },
  {
    "slug": "tigerville",
    "name": "Tigerville",
    "county": "Greenville County",
    "zip": ["29688"],
    "neighborhoods": [
      "Downtown Tigerville",
      "Greater Tigerville"
    ],
    "landmarks": [
      {
        "name": "Tigerville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9738,
      "lng": -81.0539
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tigerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Tigerville"
    }
  },
  {
    "slug": "timmonsville",
    "name": "Timmonsville",
    "county": "Florence County",
    "zip": ["29161"],
    "neighborhoods": [
      "Downtown Timmonsville",
      "Greater Timmonsville"
    ],
    "landmarks": [
      {
        "name": "Timmonsville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9634,
      "lng": -81.0402
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Timmonsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Timmonsville"
    }
  },
  {
    "slug": "blacksburg",
    "name": "Blacksburg",
    "county": "Cherokee County",
    "zip": ["29702"],
    "neighborhoods": [
      "Downtown Blacksburg",
      "Greater Blacksburg"
    ],
    "landmarks": [
      {
        "name": "Blacksburg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0978,
      "lng": -80.9722
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blacksburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Blacksburg!",
      "location": "Blacksburg"
    }
  },
  {
    "slug": "elgin-town",
    "name": "Elgin town",
    "county": "South Carolina",
    "zip": ["29703"],
    "neighborhoods": [
      "Downtown Elgin town",
      "Greater Elgin town"
    ],
    "landmarks": [
      {
        "name": "Elgin Town Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0215,
      "lng": -81.1069
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elgin town, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Elgin town!",
      "location": "Elgin town"
    }
  },
  {
    "slug": "seabrook-island",
    "name": "Seabrook Island",
    "county": "South Carolina",
    "zip": ["29920"],
    "neighborhoods": [
      "Downtown Seabrook Island",
      "Greater Seabrook Island"
    ],
    "landmarks": [
      {
        "name": "Seabrook Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9939,
      "lng": -80.9387
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seabrook Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Seabrook Island"
    }
  },
  {
    "slug": "wedgefield",
    "name": "Wedgefield",
    "county": "Sumter County",
    "zip": ["29168"],
    "neighborhoods": [
      "Downtown Wedgefield",
      "Greater Wedgefield"
    ],
    "landmarks": [
      {
        "name": "Wedgefield Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0641,
      "lng": -81.0202
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wedgefield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Wedgefield"
    }
  },
  {
    "slug": "fairfax",
    "name": "Fairfax",
    "county": "Allendale County",
    "zip": ["29827"],
    "neighborhoods": [
      "Downtown Fairfax",
      "Greater Fairfax"
    ],
    "landmarks": [
      {
        "name": "Fairfax Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0439,
      "lng": -81.0075
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fairfax, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Fairfax"
    }
  },
  {
    "slug": "blackville",
    "name": "Blackville",
    "county": "Barnwell County",
    "zip": ["29817"],
    "neighborhoods": [
      "Downtown Blackville",
      "Greater Blackville"
    ],
    "landmarks": [
      {
        "name": "Blackville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9768,
      "lng": -81.0804
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blackville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Blackville"
    }
  },
  {
    "slug": "shell-point",
    "name": "Shell Point",
    "county": "South Carolina",
    "zip": ["29706"],
    "neighborhoods": [
      "Downtown Shell Point",
      "Greater Shell Point"
    ],
    "landmarks": [
      {
        "name": "Shell Point Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0509,
      "lng": -81.0970
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Shell Point, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Shell Point"
    }
  },
  {
    "slug": "watts-mills",
    "name": "Watts Mills",
    "county": "South Carolina",
    "zip": ["29111"],
    "neighborhoods": [
      "Downtown Watts Mills",
      "Greater Watts Mills"
    ],
    "landmarks": [
      {
        "name": "Watts Mills Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0337,
      "lng": -80.9737
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Watts Mills, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Watts Mills"
    }
  },
  {
    "slug": "riverview",
    "name": "Riverview",
    "county": "South Carolina",
    "zip": ["29589"],
    "neighborhoods": [
      "Downtown Riverview",
      "Greater Riverview"
    ],
    "landmarks": [
      {
        "name": "Riverview Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9117,
      "lng": -81.1101
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Riverview, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Riverview"
    }
  },
  {
    "slug": "gaston",
    "name": "Gaston",
    "county": "Lexington County",
    "zip": ["29053"],
    "neighborhoods": [
      "Downtown Gaston",
      "Greater Gaston"
    ],
    "landmarks": [
      {
        "name": "Gaston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0278,
      "lng": -81.1073
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gaston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Gaston"
    }
  },
  {
    "slug": "pacolet",
    "name": "Pacolet",
    "county": "Spartanburg County",
    "zip": ["29372"],
    "neighborhoods": [
      "Downtown Pacolet",
      "Greater Pacolet"
    ],
    "landmarks": [
      {
        "name": "Pacolet Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0546,
      "lng": -80.9405
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pacolet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Pacolet"
    }
  },
  {
    "slug": "calhoun-falls",
    "name": "calhoun Falls",
    "county": "Abbeville County",
    "zip": ["29628"],
    "neighborhoods": [
      "Downtown calhoun Falls",
      "Greater calhoun Falls"
    ],
    "landmarks": [
      {
        "name": "Calhoun Falls Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9720,
      "lng": -81.0341
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In calhoun Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "calhoun Falls"
    }
  },
  {
    "slug": "ware-shoals",
    "name": "Ware Shoals",
    "county": "Laurens County",
    "zip": ["29692"],
    "neighborhoods": [
      "Downtown Ware Shoals",
      "Greater Ware Shoals"
    ],
    "landmarks": [
      {
        "name": "Ware Shoals Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9862,
      "lng": -80.9559
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ware Shoals, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Ware Shoals"
    }
  },
  {
    "slug": "st.-matthews",
    "name": "St. Matthews",
    "county": "South Carolina",
    "zip": ["29620"],
    "neighborhoods": [
      "Downtown St. Matthews",
      "Greater St. Matthews"
    ],
    "landmarks": [
      {
        "name": "St. Matthews Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0457,
      "lng": -80.9457
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. Matthews, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "St. Matthews"
    }
  },
  {
    "slug": "mayo",
    "name": "Mayo",
    "county": "Spartanburg County",
    "zip": ["29368"],
    "neighborhoods": [
      "Downtown Mayo",
      "Greater Mayo"
    ],
    "landmarks": [
      {
        "name": "Mayo Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0759,
      "lng": -81.0052
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mayo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Mayo"
    }
  },
  {
    "slug": "wilkinson-heights",
    "name": "Wilkinson Heights",
    "county": "South Carolina",
    "zip": ["29481"],
    "neighborhoods": [
      "Downtown Wilkinson Heights",
      "Greater Wilkinson Heights"
    ],
    "landmarks": [
      {
        "name": "Wilkinson Heights Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0416,
      "lng": -81.1270
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wilkinson Heights, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Wilkinson Heights"
    }
  },
  {
    "slug": "edisto",
    "name": "Edisto",
    "county": "South Carolina",
    "zip": ["29745"],
    "neighborhoods": [
      "Downtown Edisto",
      "Greater Edisto"
    ],
    "landmarks": [
      {
        "name": "Edisto Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0323,
      "lng": -80.9633
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edisto, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Edisto"
    }
  },
  {
    "slug": "st.-george",
    "name": "St. George",
    "county": "South Carolina",
    "zip": ["29593"],
    "neighborhoods": [
      "Downtown St. George",
      "Greater St. George"
    ],
    "landmarks": [
      {
        "name": "St. George Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9816,
      "lng": -81.1018
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. George, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in St. George!",
      "location": "St. George"
    }
  },
  {
    "slug": "eureka-mill",
    "name": "Eureka Mill",
    "county": "South Carolina",
    "zip": ["29559"],
    "neighborhoods": [
      "Downtown Eureka Mill",
      "Greater Eureka Mill"
    ],
    "landmarks": [
      {
        "name": "Eureka Mill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0149,
      "lng": -81.0837
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Eureka Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Eureka Mill"
    }
  },
  {
    "slug": "jackson",
    "name": "Jackson",
    "county": "Aiken County",
    "zip": ["29831"],
    "neighborhoods": [
      "Downtown Jackson",
      "Greater Jackson"
    ],
    "landmarks": [
      {
        "name": "Jackson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0139,
      "lng": -80.9536
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jackson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Jackson"
    }
  },
  {
    "slug": "judson",
    "name": "Judson",
    "county": "South Carolina",
    "zip": ["29873"],
    "neighborhoods": [
      "Downtown Judson",
      "Greater Judson"
    ],
    "landmarks": [
      {
        "name": "Judson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9898,
      "lng": -81.0743
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Judson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Judson"
    }
  },
  {
    "slug": "irwin",
    "name": "Irwin",
    "county": "South Carolina",
    "zip": ["29563"],
    "neighborhoods": [
      "Downtown Irwin",
      "Greater Irwin"
    ],
    "landmarks": [
      {
        "name": "Irwin Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9204,
      "lng": -81.0231
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Irwin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Irwin"
    }
  },
  {
    "slug": "cowpens",
    "name": "Cowpens",
    "county": "Spartanburg County",
    "zip": ["29330"],
    "neighborhoods": [
      "Downtown Cowpens",
      "Greater Cowpens"
    ],
    "landmarks": [
      {
        "name": "Cowpens Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9125,
      "lng": -81.1199
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cowpens, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Cowpens"
    }
  },
  {
    "slug": "langley",
    "name": "Langley",
    "county": "Aiken County",
    "zip": ["29834"],
    "neighborhoods": [
      "Downtown Langley",
      "Greater Langley"
    ],
    "landmarks": [
      {
        "name": "Langley Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9164,
      "lng": -80.9983
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Langley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Langley"
    }
  },
  {
    "slug": "monarch-mill",
    "name": "Monarch Mill",
    "county": "South Carolina",
    "zip": ["29729"],
    "neighborhoods": [
      "Downtown Monarch Mill",
      "Greater Monarch Mill"
    ],
    "landmarks": [
      {
        "name": "Monarch Mill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9151,
      "lng": -81.0651
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Monarch Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Monarch Mill"
    }
  },
  {
    "slug": "arial",
    "name": "Arial",
    "county": "South Carolina",
    "zip": ["29571"],
    "neighborhoods": [
      "Downtown Arial",
      "Greater Arial"
    ],
    "landmarks": [
      {
        "name": "Arial Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0590,
      "lng": -80.9702
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arial, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Arial"
    }
  },
  {
    "slug": "stateburg",
    "name": "Stateburg",
    "county": "South Carolina",
    "zip": ["29993"],
    "neighborhoods": [
      "Downtown Stateburg",
      "Greater Stateburg"
    ],
    "landmarks": [
      {
        "name": "Stateburg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9658,
      "lng": -80.9410
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Stateburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Stateburg!",
      "location": "Stateburg"
    }
  },
  {
    "slug": "hopkins",
    "name": "Hopkins",
    "county": "Richland County",
    "zip": ["29061"],
    "neighborhoods": [
      "Downtown Hopkins",
      "Greater Hopkins"
    ],
    "landmarks": [
      {
        "name": "Hopkins Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0206,
      "lng": -81.0578
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hopkins, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Hopkins"
    }
  },
  {
    "slug": "reidville",
    "name": "Reidville",
    "county": "Spartanburg County",
    "zip": ["29375"],
    "neighborhoods": [
      "Downtown Reidville",
      "Greater Reidville"
    ],
    "landmarks": [
      {
        "name": "Reidville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0894,
      "lng": -80.9460
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Reidville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Reidville"
    }
  },
  {
    "slug": "city-view",
    "name": "city View",
    "county": "South Carolina",
    "zip": ["29300"],
    "neighborhoods": [
      "Downtown city View",
      "Greater city View"
    ],
    "landmarks": [
      {
        "name": "City View Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0153,
      "lng": -81.1201
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In city View, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "city View"
    }
  },
  {
    "slug": "camp-croft",
    "name": "Camp Croft",
    "county": "South Carolina",
    "zip": ["29560"],
    "neighborhoods": [
      "Downtown Camp Croft",
      "Greater Camp Croft"
    ],
    "landmarks": [
      {
        "name": "Camp Croft Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9126,
      "lng": -81.0482
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Camp Croft, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Camp Croft!",
      "location": "Camp Croft"
    }
  },
  {
    "slug": "winnsboro-mills",
    "name": "Winnsboro Mills",
    "county": "South Carolina",
    "zip": ["29555"],
    "neighborhoods": [
      "Downtown Winnsboro Mills",
      "Greater Winnsboro Mills"
    ],
    "landmarks": [
      {
        "name": "Winnsboro Mills Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9056,
      "lng": -81.0833
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Winnsboro Mills, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Winnsboro Mills"
    }
  },
  {
    "slug": "great-falls",
    "name": "Great Falls",
    "county": "Chester County",
    "zip": ["29055"],
    "neighborhoods": [
      "Downtown Great Falls",
      "Greater Great Falls"
    ],
    "landmarks": [
      {
        "name": "Great Falls Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9316,
      "lng": -81.0993
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Great Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Great Falls"
    }
  },
  {
    "slug": "utica",
    "name": "Utica",
    "county": "South Carolina",
    "zip": ["29206"],
    "neighborhoods": [
      "Downtown Utica",
      "Greater Utica"
    ],
    "landmarks": [
      {
        "name": "Utica Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9336,
      "lng": -81.0539
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Utica, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Utica"
    }
  },
  {
    "slug": "fairforest",
    "name": "Fairforest",
    "county": "Spartanburg County",
    "zip": ["29336"],
    "neighborhoods": [
      "Downtown Fairforest",
      "Greater Fairforest"
    ],
    "landmarks": [
      {
        "name": "Fairforest Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9787,
      "lng": -80.9940
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fairforest, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Fairforest"
    }
  },
  {
    "slug": "south-sumter",
    "name": "South Sumter",
    "county": "South Carolina",
    "zip": ["29147"],
    "neighborhoods": [
      "Downtown South Sumter",
      "Greater South Sumter"
    ],
    "landmarks": [
      {
        "name": "South Sumter Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9779,
      "lng": -80.4305
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In South Sumter, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "South Sumter"
    }
  },
  {
    "slug": "awendaw",
    "name": "Awendaw",
    "county": "Charleston County",
    "zip": ["29429"],
    "neighborhoods": [
      "Downtown Awendaw",
      "Greater Awendaw"
    ],
    "landmarks": [
      {
        "name": "Awendaw Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0989,
      "lng": -81.0635
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Awendaw, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Awendaw!",
      "location": "Awendaw"
    }
  },
  {
    "slug": "ridgeville",
    "name": "Ridgeville",
    "county": "Dorchester County",
    "zip": ["29472"],
    "neighborhoods": [
      "Downtown Ridgeville",
      "Greater Ridgeville"
    ],
    "landmarks": [
      {
        "name": "Ridgeville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9024,
      "lng": -81.0571
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridgeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Ridgeville"
    }
  },
  {
    "slug": "chapin",
    "name": "Chapin",
    "county": "Lexington County",
    "zip": ["29036"],
    "neighborhoods": [
      "Downtown chapin",
      "Greater chapin"
    ],
    "landmarks": [
      {
        "name": "Chapin Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0995,
      "lng": -81.0554
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In chapin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in chapin!",
      "location": "chapin"
    }
  },
  {
    "slug": "cane-savannah",
    "name": "Cane Savannah",
    "county": "South Carolina",
    "zip": ["29598"],
    "neighborhoods": [
      "Downtown Cane Savannah",
      "Greater Cane Savannah"
    ],
    "landmarks": [
      {
        "name": "Cane Savannah Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0328,
      "lng": -81.1082
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cane Savannah, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Cane Savannah"
    }
  },
  {
    "slug": "latta",
    "name": "Latta",
    "county": "Dillon County",
    "zip": ["29565"],
    "neighborhoods": [
      "Downtown Latta",
      "Greater Latta"
    ],
    "landmarks": [
      {
        "name": "Latta Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9148,
      "lng": -81.1095
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Latta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Latta"
    }
  },
  {
    "slug": "bonneau-beach",
    "name": "Bonneau Beach",
    "county": "South Carolina",
    "zip": ["29993"],
    "neighborhoods": [
      "Downtown Bonneau Beach",
      "Greater Bonneau Beach"
    ],
    "landmarks": [
      {
        "name": "Bonneau Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0031,
      "lng": -81.0807
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bonneau Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Bonneau Beach"
    }
  },
  {
    "slug": "pelzer",
    "name": "Pelzer",
    "county": "Greenville County",
    "zip": ["29669"],
    "neighborhoods": [
      "Downtown Pelzer",
      "Greater Pelzer"
    ],
    "landmarks": [
      {
        "name": "Pelzer Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9934,
      "lng": -81.0143
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pelzer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Pelzer"
    }
  },
  {
    "slug": "murphys-estates",
    "name": "Murphys Estates",
    "county": "South Carolina",
    "zip": ["29573"],
    "neighborhoods": [
      "Downtown Murphys Estates",
      "Greater Murphys Estates"
    ],
    "landmarks": [
      {
        "name": "Murphys Estates Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0117,
      "lng": -80.9503
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Murphys Estates, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Murphys Estates"
    }
  },
  {
    "slug": "catawba",
    "name": "Catawba",
    "county": "York County",
    "zip": ["29704"],
    "neighborhoods": [
      "Downtown catawba",
      "Greater catawba"
    ],
    "landmarks": [
      {
        "name": "Catawba Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0479,
      "lng": -81.0918
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In catawba, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "catawba"
    }
  },
  {
    "slug": "chesterfield",
    "name": "Chesterfield",
    "county": "Chesterfield County",
    "zip": ["29709"],
    "neighborhoods": [
      "Downtown Chesterfield",
      "Greater Chesterfield"
    ],
    "landmarks": [
      {
        "name": "Chesterfield Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9120,
      "lng": -81.0009
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Chesterfield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Chesterfield"
    }
  },
  {
    "slug": "joanna",
    "name": "Joanna",
    "county": "Laurens County",
    "zip": ["29351"],
    "neighborhoods": [
      "Downtown Joanna",
      "Greater Joanna"
    ],
    "landmarks": [
      {
        "name": "Joanna Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9205,
      "lng": -81.0775
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Joanna, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Joanna"
    }
  },
  {
    "slug": "st.-stephen",
    "name": "St. Stephen",
    "county": "South Carolina",
    "zip": ["29697"],
    "neighborhoods": [
      "Downtown St. Stephen",
      "Greater St. Stephen"
    ],
    "landmarks": [
      {
        "name": "St. Stephen Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9206,
      "lng": -80.9667
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. Stephen, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "St. Stephen"
    }
  },
  {
    "slug": "holly-hill",
    "name": "Holly Hill",
    "county": "Orangeburg County",
    "zip": ["29059"],
    "neighborhoods": [
      "Downtown Holly Hill",
      "Greater Holly Hill"
    ],
    "landmarks": [
      {
        "name": "Holly Hill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9784,
      "lng": -81.0024
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Holly Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Holly Hill"
    }
  },
  {
    "slug": "gadsden",
    "name": "Gadsden",
    "county": "Richland County",
    "zip": ["29052"],
    "neighborhoods": [
      "Downtown Gadsden",
      "Greater Gadsden"
    ],
    "landmarks": [
      {
        "name": "Gadsden Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0557,
      "lng": -81.1264
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gadsden, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Gadsden"
    }
  },
  {
    "slug": "beech-island",
    "name": "Beech Island",
    "county": "Aiken County",
    "zip": ["29842"],
    "neighborhoods": [
      "Downtown Beech Island",
      "Greater Beech Island"
    ],
    "landmarks": [
      {
        "name": "Beech Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9053,
      "lng": -80.9797
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Beech Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Beech Island"
    }
  },
  {
    "slug": "meggett",
    "name": "Meggett",
    "county": "South Carolina",
    "zip": ["29934"],
    "neighborhoods": [
      "Downtown Meggett",
      "Greater Meggett"
    ],
    "landmarks": [
      {
        "name": "Meggett Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9962,
      "lng": -81.0674
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Meggett, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Meggett"
    }
  },
  {
    "slug": "branchville",
    "name": "Branchville",
    "county": "Orangeburg County",
    "zip": ["29432"],
    "neighborhoods": [
      "Downtown Branchville",
      "Greater Branchville"
    ],
    "landmarks": [
      {
        "name": "Branchville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9638,
      "lng": -80.9429
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Branchville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Branchville"
    }
  },
  {
    "slug": "homewood",
    "name": "Homewood",
    "county": "South Carolina",
    "zip": ["29952"],
    "neighborhoods": [
      "Downtown Homewood",
      "Greater Homewood"
    ],
    "landmarks": [
      {
        "name": "Homewood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9829,
      "lng": -80.9451
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Homewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Homewood"
    }
  },
  {
    "slug": "whitmire",
    "name": "Whitmire",
    "county": "Newberry County",
    "zip": ["29178"],
    "neighborhoods": [
      "Downtown Whitmire",
      "Greater Whitmire"
    ],
    "landmarks": [
      {
        "name": "Whitmire Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9294,
      "lng": -81.1342
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Whitmire, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Whitmire!",
      "location": "Whitmire"
    }
  },
  {
    "slug": "lake-secession",
    "name": "Lake Secession",
    "county": "South Carolina",
    "zip": ["29835"],
    "neighborhoods": [
      "Downtown Lake Secession",
      "Greater Lake Secession"
    ],
    "landmarks": [
      {
        "name": "Lake Secession Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9170,
      "lng": -81.0952
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake Secession, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Lake Secession"
    }
  },
  {
    "slug": "olympia",
    "name": "Olympia",
    "county": "South Carolina",
    "zip": ["29790"],
    "neighborhoods": [
      "Downtown Olympia",
      "Greater Olympia"
    ],
    "landmarks": [
      {
        "name": "Olympia Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9464,
      "lng": -81.1193
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Olympia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Olympia"
    }
  },
  {
    "slug": "lamar",
    "name": "Lamar",
    "county": "Darlington County",
    "zip": ["29069"],
    "neighborhoods": [
      "Downtown Lamar",
      "Greater Lamar"
    ],
    "landmarks": [
      {
        "name": "Lamar Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9127,
      "lng": -81.0579
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lamar, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lamar!",
      "location": "Lamar"
    }
  },
  {
    "slug": "conestee",
    "name": "Conestee",
    "county": "Greenville County",
    "zip": ["29636"],
    "neighborhoods": [
      "Downtown Conestee",
      "Greater Conestee"
    ],
    "landmarks": [
      {
        "name": "Conestee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9089,
      "lng": -81.1117
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Conestee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Conestee"
    }
  },
  {
    "slug": "santee",
    "name": "Santee",
    "county": "Orangeburg County",
    "zip": ["29142"],
    "neighborhoods": [
      "Downtown Santee",
      "Greater Santee"
    ],
    "landmarks": [
      {
        "name": "Santee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0348,
      "lng": -80.9725
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Santee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Santee"
    }
  },
  {
    "slug": "buffalo",
    "name": "Buffalo",
    "county": "Union County",
    "zip": ["29321"],
    "neighborhoods": [
      "Downtown Buffalo",
      "Greater Buffalo"
    ],
    "landmarks": [
      {
        "name": "Buffalo Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0621,
      "lng": -81.1233
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Buffalo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Buffalo"
    }
  },
  {
    "slug": "west-pelzer",
    "name": "West Pelzer",
    "county": "South Carolina",
    "zip": ["29535"],
    "neighborhoods": [
      "Downtown West Pelzer",
      "Greater West Pelzer"
    ],
    "landmarks": [
      {
        "name": "West Pelzer Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0967,
      "lng": -81.0726
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In West Pelzer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "West Pelzer"
    }
  },
  {
    "slug": "fort-lawn",
    "name": "Fort Lawn",
    "county": "Chester County",
    "zip": ["29714"],
    "neighborhoods": [
      "Downtown Fort Lawn",
      "Greater Fort Lawn"
    ],
    "landmarks": [
      {
        "name": "Fort Lawn Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0948,
      "lng": -81.0588
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fort Lawn, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Fort Lawn"
    }
  },
  {
    "slug": "edmund",
    "name": "Edmund",
    "county": "South Carolina",
    "zip": ["29412"],
    "neighborhoods": [
      "Downtown Edmund",
      "Greater Edmund"
    ],
    "landmarks": [
      {
        "name": "Edmund Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0540,
      "lng": -80.9360
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edmund, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Edmund!",
      "location": "Edmund"
    }
  },
  {
    "slug": "due-west",
    "name": "Due West",
    "county": "Abbeville County",
    "zip": ["29639"],
    "neighborhoods": [
      "Downtown Due West",
      "Greater Due West"
    ],
    "landmarks": [
      {
        "name": "Due West Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0687,
      "lng": -80.9534
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Due West, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Due West!",
      "location": "Due West"
    }
  },
  {
    "slug": "cottageville",
    "name": "Cottageville",
    "county": "Colleton County",
    "zip": ["29435"],
    "neighborhoods": [
      "Downtown Cottageville",
      "Greater Cottageville"
    ],
    "landmarks": [
      {
        "name": "Cottageville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9717,
      "lng": -80.9397
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cottageville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Cottageville"
    }
  },
  {
    "slug": "prosperity",
    "name": "Prosperity",
    "county": "Newberry County",
    "zip": ["29127"],
    "neighborhoods": [
      "Downtown Prosperity",
      "Greater Prosperity"
    ],
    "landmarks": [
      {
        "name": "Prosperity Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9928,
      "lng": -81.0498
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Prosperity, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Prosperity!",
      "location": "Prosperity"
    }
  },
  {
    "slug": "johnsonville",
    "name": "Johnsonville",
    "county": "Florence County",
    "zip": ["29555"],
    "neighborhoods": [
      "Downtown Johnsonville",
      "Greater Johnsonville"
    ],
    "landmarks": [
      {
        "name": "Johnsonville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9761,
      "lng": -80.9384
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Johnsonville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Johnsonville"
    }
  },
  {
    "slug": "seabrook",
    "name": "Seabrook",
    "county": "Beaufort County",
    "zip": ["29940"],
    "neighborhoods": [
      "Downtown Seabrook",
      "Greater Seabrook"
    ],
    "landmarks": [
      {
        "name": "Seabrook Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9664,
      "lng": -81.0608
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seabrook, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Seabrook"
    }
  },
  {
    "slug": "six-mile",
    "name": "Six Mile",
    "county": "Pickens County",
    "zip": ["29682"],
    "neighborhoods": [
      "Downtown Six Mile",
      "Greater Six Mile"
    ],
    "landmarks": [
      {
        "name": "Six Mile Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9914,
      "lng": -81.0883
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Six Mile, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Six Mile"
    }
  },
  {
    "slug": "gayle-mill",
    "name": "Gayle Mill",
    "county": "South Carolina",
    "zip": ["29293"],
    "neighborhoods": [
      "Downtown Gayle Mill",
      "Greater Gayle Mill"
    ],
    "landmarks": [
      {
        "name": "Gayle Mill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9213,
      "lng": -81.0391
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gayle Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Gayle Mill"
    }
  },
  {
    "slug": "pamplico",
    "name": "Pamplico",
    "county": "Florence County",
    "zip": ["29583"],
    "neighborhoods": [
      "Downtown Pamplico",
      "Greater Pamplico"
    ],
    "landmarks": [
      {
        "name": "Pamplico Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9230,
      "lng": -81.0564
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pamplico, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Pamplico"
    }
  },
  {
    "slug": "dunbar",
    "name": "Dunbar",
    "county": "South Carolina",
    "zip": ["29642"],
    "neighborhoods": [
      "Downtown Dunbar",
      "Greater Dunbar"
    ],
    "landmarks": [
      {
        "name": "Dunbar Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9394,
      "lng": -81.0608
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dunbar, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Dunbar"
    }
  },
  {
    "slug": "pelion",
    "name": "Pelion",
    "county": "Lexington County",
    "zip": ["29123"],
    "neighborhoods": [
      "Downtown Pelion",
      "Greater Pelion"
    ],
    "landmarks": [
      {
        "name": "Pelion Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0108,
      "lng": -81.1304
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pelion, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Pelion"
    }
  },
  {
    "slug": "mcbee",
    "name": "McBee",
    "county": "South Carolina",
    "zip": ["29887"],
    "neighborhoods": [
      "Downtown McBee",
      "Greater McBee"
    ],
    "landmarks": [
      {
        "name": "Mcbee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0090,
      "lng": -81.0950
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In McBee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "McBee"
    }
  },
  {
    "slug": "wagener",
    "name": "Wagener",
    "county": "Aiken County",
    "zip": ["29164"],
    "neighborhoods": [
      "Downtown Wagener",
      "Greater Wagener"
    ],
    "landmarks": [
      {
        "name": "Wagener Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9898,
      "lng": -81.0545
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wagener, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Wagener"
    }
  },
  {
    "slug": "iva",
    "name": "Iva",
    "county": "Anderson County",
    "zip": ["29655"],
    "neighborhoods": [
      "Downtown Iva",
      "Greater Iva"
    ],
    "landmarks": [
      {
        "name": "Iva Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9404,
      "lng": -81.0665
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Iva, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Iva"
    }
  },
  {
    "slug": "folly-beach",
    "name": "Folly Beach",
    "county": "Charleston County",
    "zip": ["29439"],
    "neighborhoods": [
      "Downtown Folly Beach",
      "Greater Folly Beach"
    ],
    "landmarks": [
      {
        "name": "Folly Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9925,
      "lng": -81.0161
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Folly Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Folly Beach"
    }
  },
  {
    "slug": "drayton",
    "name": "Drayton",
    "county": "Spartanburg County",
    "zip": ["29333"],
    "neighborhoods": [
      "Downtown Drayton",
      "Greater Drayton"
    ],
    "landmarks": [
      {
        "name": "Drayton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0681,
      "lng": -81.0851
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Drayton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Drayton"
    }
  },
  {
    "slug": "elloree",
    "name": "Elloree",
    "county": "Orangeburg County",
    "zip": ["29047"],
    "neighborhoods": [
      "Downtown Elloree",
      "Greater Elloree"
    ],
    "landmarks": [
      {
        "name": "Elloree Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9335,
      "lng": -81.0902
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elloree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Elloree"
    }
  },
  {
    "slug": "la-france",
    "name": "La France",
    "county": "Anderson County",
    "zip": ["29656"],
    "neighborhoods": [
      "Downtown La France",
      "Greater La France"
    ],
    "landmarks": [
      {
        "name": "La France Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9570,
      "lng": -81.1281
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In La France, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "La France"
    }
  },
  {
    "slug": "aynor",
    "name": "Aynor",
    "county": "Horry County",
    "zip": ["29511"],
    "neighborhoods": [
      "Downtown Aynor",
      "Greater Aynor"
    ],
    "landmarks": [
      {
        "name": "Aynor Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0523,
      "lng": -81.0161
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Aynor, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Aynor"
    }
  },
  {
    "slug": "yemassee",
    "name": "Yemassee",
    "county": "Beaufort County",
    "zip": ["29945"],
    "neighborhoods": [
      "Downtown Yemassee",
      "Greater Yemassee"
    ],
    "landmarks": [
      {
        "name": "Yemassee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0716,
      "lng": -80.9508
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Yemassee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Yemassee"
    }
  },
  {
    "slug": "cateechee",
    "name": "Cateechee",
    "county": "South Carolina",
    "zip": ["29133"],
    "neighborhoods": [
      "Downtown Cateechee",
      "Greater Cateechee"
    ],
    "landmarks": [
      {
        "name": "Cateechee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9366,
      "lng": -81.0303
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cateechee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Cateechee"
    }
  },
  {
    "slug": "clifton",
    "name": "Clifton",
    "county": "Spartanburg County",
    "zip": ["29324"],
    "neighborhoods": [
      "Downtown Clifton",
      "Greater Clifton"
    ],
    "landmarks": [
      {
        "name": "Clifton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9999,
      "lng": -81.0213
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clifton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Clifton!",
      "location": "Clifton"
    }
  },
  {
    "slug": "oakland",
    "name": "Oakland",
    "county": "South Carolina",
    "zip": ["29482"],
    "neighborhoods": [
      "Downtown Oakland",
      "Greater Oakland"
    ],
    "landmarks": [
      {
        "name": "Oakland Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9137,
      "lng": -81.1239
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Oakland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Oakland"
    }
  },
  {
    "slug": "dale",
    "name": "Dale",
    "county": "Beaufort County",
    "zip": ["29914"],
    "neighborhoods": [
      "Downtown Dale",
      "Greater Dale"
    ],
    "landmarks": [
      {
        "name": "Dale Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0815,
      "lng": -81.1169
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Dale"
    }
  },
  {
    "slug": "inman-mills",
    "name": "Inman Mills",
    "county": "South Carolina",
    "zip": ["29858"],
    "neighborhoods": [
      "Downtown Inman Mills",
      "Greater Inman Mills"
    ],
    "landmarks": [
      {
        "name": "Inman Mills Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0924,
      "lng": -80.9943
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Inman Mills, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Inman Mills"
    }
  },
  {
    "slug": "dovesville",
    "name": "Dovesville",
    "county": "South Carolina",
    "zip": ["29612"],
    "neighborhoods": [
      "Downtown Dovesville",
      "Greater Dovesville"
    ],
    "landmarks": [
      {
        "name": "Dovesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0678,
      "lng": -80.9900
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dovesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Dovesville!",
      "location": "Dovesville"
    }
  },
  {
    "slug": "pinopolis",
    "name": "Pinopolis",
    "county": "Berkeley County",
    "zip": ["29469"],
    "neighborhoods": [
      "Downtown Pinopolis",
      "Greater Pinopolis"
    ],
    "landmarks": [
      {
        "name": "Pinopolis Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0733,
      "lng": -80.9782
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pinopolis, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Pinopolis"
    }
  },
  {
    "slug": "jonesville",
    "name": "Jonesville",
    "county": "Union County",
    "zip": ["29353"],
    "neighborhoods": [
      "Downtown Jonesville",
      "Greater Jonesville"
    ],
    "landmarks": [
      {
        "name": "Jonesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0510,
      "lng": -81.0899
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jonesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Jonesville"
    }
  },
  {
    "slug": "north",
    "name": "North",
    "county": "Orangeburg County",
    "zip": ["29112"],
    "neighborhoods": [
      "Downtown North",
      "Greater North"
    ],
    "landmarks": [
      {
        "name": "North Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9649,
      "lng": -81.0315
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in North!",
      "location": "North"
    }
  },
  {
    "slug": "quinby",
    "name": "Quinby",
    "county": "South Carolina",
    "zip": ["29492"],
    "neighborhoods": [
      "Downtown Quinby",
      "Greater Quinby"
    ],
    "landmarks": [
      {
        "name": "Quinby Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0301,
      "lng": -80.9430
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Quinby, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Quinby!",
      "location": "Quinby"
    }
  },
  {
    "slug": "scranton",
    "name": "Scranton",
    "county": "Florence County",
    "zip": ["29591"],
    "neighborhoods": [
      "Downtown Scranton",
      "Greater Scranton"
    ],
    "landmarks": [
      {
        "name": "Scranton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0887,
      "lng": -80.9801
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Scranton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Scranton"
    }
  },
  {
    "slug": "edisto-beach",
    "name": "Edisto Beach",
    "county": "South Carolina",
    "zip": ["29421"],
    "neighborhoods": [
      "Downtown Edisto Beach",
      "Greater Edisto Beach"
    ],
    "landmarks": [
      {
        "name": "Edisto Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0031,
      "lng": -81.1099
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edisto Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Edisto Beach"
    }
  },
  {
    "slug": "harleyville",
    "name": "Harleyville",
    "county": "Dorchester County",
    "zip": ["29448"],
    "neighborhoods": [
      "Downtown Harleyville",
      "Greater Harleyville"
    ],
    "landmarks": [
      {
        "name": "Harleyville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0537,
      "lng": -81.1207
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Harleyville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Harleyville"
    }
  },
  {
    "slug": "sandy-springs",
    "name": "Sandy Springs",
    "county": "Anderson County",
    "zip": ["29677"],
    "neighborhoods": [
      "Downtown Sandy Springs",
      "Greater Sandy Springs"
    ],
    "landmarks": [
      {
        "name": "Sandy Springs Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0451,
      "lng": -81.1215
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sandy Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Sandy Springs"
    }
  },
  {
    "slug": "van-wyck",
    "name": "Van Wyck",
    "county": "Lancaster County",
    "zip": ["29744"],
    "neighborhoods": [
      "Downtown Van Wyck",
      "Greater Van Wyck"
    ],
    "landmarks": [
      {
        "name": "Van Wyck Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0002,
      "lng": -80.9679
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Van Wyck, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Van Wyck"
    }
  },
  {
    "slug": "arcadia-lakes",
    "name": "Arcadia Lakes",
    "county": "South Carolina",
    "zip": ["29301"],
    "neighborhoods": [
      "Downtown Arcadia Lakes",
      "Greater Arcadia Lakes"
    ],
    "landmarks": [
      {
        "name": "Arcadia Lakes Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0910,
      "lng": -80.9453
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arcadia Lakes, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Arcadia Lakes"
    }
  },
  {
    "slug": "campobello",
    "name": "Campobello",
    "county": "Spartanburg County",
    "zip": ["29322"],
    "neighborhoods": [
      "Downtown Campobello",
      "Greater Campobello"
    ],
    "landmarks": [
      {
        "name": "Campobello Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9872,
      "lng": -81.0795
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Campobello, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Campobello"
    }
  },
  {
    "slug": "the-cliffs-valley",
    "name": "The cliffs Valley",
    "county": "South Carolina",
    "zip": ["29954"],
    "neighborhoods": [
      "Downtown The cliffs Valley",
      "Greater The cliffs Valley"
    ],
    "landmarks": [
      {
        "name": "The Cliffs Valley Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9358,
      "lng": -81.0490
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In The cliffs Valley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "The cliffs Valley"
    }
  },
  {
    "slug": "jefferson",
    "name": "Jefferson",
    "county": "Chesterfield County",
    "zip": ["29718"],
    "neighborhoods": [
      "Downtown Jefferson",
      "Greater Jefferson"
    ],
    "landmarks": [
      {
        "name": "Jefferson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9849,
      "lng": -81.0478
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jefferson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Jefferson"
    }
  },
  {
    "slug": "heath-springs",
    "name": "Heath Springs",
    "county": "Lancaster County",
    "zip": ["29058"],
    "neighborhoods": [
      "Downtown Heath Springs",
      "Greater Heath Springs"
    ],
    "landmarks": [
      {
        "name": "Heath Springs Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9206,
      "lng": -81.0977
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Heath Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Heath Springs"
    }
  },
  {
    "slug": "pinewood",
    "name": "Pinewood",
    "county": "Sumter County",
    "zip": ["29125"],
    "neighborhoods": [
      "Downtown Pinewood",
      "Greater Pinewood"
    ],
    "landmarks": [
      {
        "name": "Pinewood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0701,
      "lng": -81.0685
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pinewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Pinewood"
    }
  },
  {
    "slug": "east-sumter",
    "name": "East Sumter",
    "county": "South Carolina",
    "zip": ["29305"],
    "neighborhoods": [
      "Downtown East Sumter",
      "Greater East Sumter"
    ],
    "landmarks": [
      {
        "name": "East Sumter Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.8715,
      "lng": -80.3658
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In East Sumter, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "East Sumter"
    }
  },
  {
    "slug": "warrenville",
    "name": "Warrenville",
    "county": "Aiken County",
    "zip": ["29851"],
    "neighborhoods": [
      "Downtown Warrenville",
      "Greater Warrenville"
    ],
    "landmarks": [
      {
        "name": "Warrenville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9888,
      "lng": -81.1203
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Warrenville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Warrenville!",
      "location": "Warrenville"
    }
  },
  {
    "slug": "gray-court",
    "name": "Gray court",
    "county": "Laurens County",
    "zip": ["29645"],
    "neighborhoods": [
      "Downtown Gray court",
      "Greater Gray court"
    ],
    "landmarks": [
      {
        "name": "Gray Court Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9193,
      "lng": -80.9473
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gray court, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Gray court!",
      "location": "Gray court"
    }
  },
  {
    "slug": "mcclellanville",
    "name": "Mcclellanville",
    "county": "South Carolina",
    "zip": ["29487"],
    "neighborhoods": [
      "Downtown Mcclellanville",
      "Greater Mcclellanville"
    ],
    "landmarks": [
      {
        "name": "Mcclellanville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0332,
      "lng": -80.9449
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mcclellanville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Mcclellanville"
    }
  },
  {
    "slug": "newtown",
    "name": "Newtown",
    "county": "South Carolina",
    "zip": ["29319"],
    "neighborhoods": [
      "Downtown Newtown",
      "Greater Newtown"
    ],
    "landmarks": [
      {
        "name": "Newtown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9603,
      "lng": -81.0178
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newtown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Newtown"
    }
  },
  {
    "slug": "fripp-island",
    "name": "Fripp Island",
    "county": "South Carolina",
    "zip": ["29250"],
    "neighborhoods": [
      "Downtown Fripp Island",
      "Greater Fripp Island"
    ],
    "landmarks": [
      {
        "name": "Fripp Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0966,
      "lng": -81.0204
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fripp Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Fripp Island"
    }
  },
  {
    "slug": "hamer",
    "name": "Hamer",
    "county": "Dillon County",
    "zip": ["29547"],
    "neighborhoods": [
      "Downtown Hamer",
      "Greater Hamer"
    ],
    "landmarks": [
      {
        "name": "Hamer Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0494,
      "lng": -81.0756
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hamer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Hamer"
    }
  },
  {
    "slug": "bucksport",
    "name": "Bucksport",
    "county": "South Carolina",
    "zip": ["29725"],
    "neighborhoods": [
      "Downtown Bucksport",
      "Greater Bucksport"
    ],
    "landmarks": [
      {
        "name": "Bucksport Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9358,
      "lng": -80.9988
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bucksport, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Bucksport"
    }
  },
  {
    "slug": "swansea",
    "name": "Swansea",
    "county": "Lexington County",
    "zip": ["29160"],
    "neighborhoods": [
      "Downtown Swansea",
      "Greater Swansea"
    ],
    "landmarks": [
      {
        "name": "Swansea Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0537,
      "lng": -80.9749
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Swansea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Swansea"
    }
  },
  {
    "slug": "norris",
    "name": "Norris",
    "county": "Pickens County",
    "zip": ["29667"],
    "neighborhoods": [
      "Downtown Norris",
      "Greater Norris"
    ],
    "landmarks": [
      {
        "name": "Norris Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9585,
      "lng": -81.0382
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Norris, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Norris"
    }
  },
  {
    "slug": "ridge-spring",
    "name": "Ridge Spring",
    "county": "Saluda County",
    "zip": ["29129"],
    "neighborhoods": [
      "Downtown Ridge Spring",
      "Greater Ridge Spring"
    ],
    "landmarks": [
      {
        "name": "Ridge Spring Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9513,
      "lng": -81.0716
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridge Spring, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Ridge Spring"
    }
  },
  {
    "slug": "summerton",
    "name": "Summerton",
    "county": "Clarendon County",
    "zip": ["29148"],
    "neighborhoods": [
      "Downtown Summerton",
      "Greater Summerton"
    ],
    "landmarks": [
      {
        "name": "Summerton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9025,
      "lng": -80.9870
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Summerton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Summerton"
    }
  },
  {
    "slug": "turbeville",
    "name": "Turbeville",
    "county": "Clarendon County",
    "zip": ["29162"],
    "neighborhoods": [
      "Downtown Turbeville",
      "Greater Turbeville"
    ],
    "landmarks": [
      {
        "name": "Turbeville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9403,
      "lng": -81.0085
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Turbeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Turbeville!",
      "location": "Turbeville"
    }
  },
  {
    "slug": "lake-view",
    "name": "Lake View",
    "county": "Dillon County",
    "zip": ["29563"],
    "neighborhoods": [
      "Downtown Lake View",
      "Greater Lake View"
    ],
    "landmarks": [
      {
        "name": "Lake View Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0068,
      "lng": -81.0719
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake View, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Lake View"
    }
  },
  {
    "slug": "debordieu-colony",
    "name": "DeBordieu colony",
    "county": "South Carolina",
    "zip": ["29105"],
    "neighborhoods": [
      "Downtown DeBordieu colony",
      "Greater DeBordieu colony"
    ],
    "landmarks": [
      {
        "name": "Debordieu Colony Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9156,
      "lng": -81.0297
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In DeBordieu colony, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "DeBordieu colony"
    }
  },
  {
    "slug": "clio",
    "name": "Clio",
    "county": "Marlboro County",
    "zip": ["29525"],
    "neighborhoods": [
      "Downtown Clio",
      "Greater Clio"
    ],
    "landmarks": [
      {
        "name": "Clio Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0649,
      "lng": -81.1277
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clio, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Clio"
    }
  },
  {
    "slug": "mayesville",
    "name": "Mayesville",
    "county": "Lee County",
    "zip": ["29104"],
    "neighborhoods": [
      "Downtown Mayesville",
      "Greater Mayesville"
    ],
    "landmarks": [
      {
        "name": "Mayesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0594,
      "lng": -80.9459
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mayesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Mayesville"
    }
  },
  {
    "slug": "wallace",
    "name": "Wallace",
    "county": "Marlboro County",
    "zip": ["29596"],
    "neighborhoods": [
      "Downtown Wallace",
      "Greater Wallace"
    ],
    "landmarks": [
      {
        "name": "Wallace Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0386,
      "lng": -81.0071
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wallace, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Wallace"
    }
  },
  {
    "slug": "manville",
    "name": "Manville",
    "county": "South Carolina",
    "zip": ["29290"],
    "neighborhoods": [
      "Downtown Manville",
      "Greater Manville"
    ],
    "landmarks": [
      {
        "name": "Manville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9234,
      "lng": -81.0858
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Manville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Manville"
    }
  },
  {
    "slug": "bowman",
    "name": "Bowman",
    "county": "Orangeburg County",
    "zip": ["29018"],
    "neighborhoods": [
      "Downtown Bowman",
      "Greater Bowman"
    ],
    "landmarks": [
      {
        "name": "Bowman Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0526,
      "lng": -81.0659
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bowman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Bowman"
    }
  },
  {
    "slug": "lincolnville",
    "name": "Lincolnville",
    "county": "South Carolina",
    "zip": ["29576"],
    "neighborhoods": [
      "Downtown Lincolnville",
      "Greater Lincolnville"
    ],
    "landmarks": [
      {
        "name": "Lincolnville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0101,
      "lng": -80.9785
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lincolnville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lincolnville!",
      "location": "Lincolnville"
    }
  },
  {
    "slug": "pine-ridge-cdp",
    "name": "Pine Ridge cDP",
    "county": "South Carolina",
    "zip": ["29149"],
    "neighborhoods": [
      "Downtown Pine Ridge cDP",
      "Greater Pine Ridge cDP"
    ],
    "landmarks": [
      {
        "name": "Pine Ridge Cdp Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9111,
      "lng": -81.1340
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pine Ridge cDP, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Pine Ridge cDP"
    }
  },
  {
    "slug": "unity",
    "name": "Unity",
    "county": "South Carolina",
    "zip": ["29643"],
    "neighborhoods": [
      "Downtown Unity",
      "Greater Unity"
    ],
    "landmarks": [
      {
        "name": "Unity Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0313,
      "lng": -81.0723
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Unity, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Unity"
    }
  },
  {
    "slug": "eastover",
    "name": "Eastover",
    "county": "Richland County",
    "zip": ["29044"],
    "neighborhoods": [
      "Downtown Eastover",
      "Greater Eastover"
    ],
    "landmarks": [
      {
        "name": "Eastover Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0700,
      "lng": -81.0533
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Eastover, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Eastover"
    }
  },
  {
    "slug": "chickasaw-point",
    "name": "Chickasaw Point",
    "county": "South Carolina",
    "zip": ["29733"],
    "neighborhoods": [
      "Downtown chickasaw Point",
      "Greater chickasaw Point"
    ],
    "landmarks": [
      {
        "name": "Chickasaw Point Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9639,
      "lng": -80.9634
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In chickasaw Point, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "chickasaw Point"
    }
  },
  {
    "slug": "modoc",
    "name": "Modoc",
    "county": "McCormick County",
    "zip": ["29838"],
    "neighborhoods": [
      "Downtown Modoc",
      "Greater Modoc"
    ],
    "landmarks": [
      {
        "name": "Modoc Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0078,
      "lng": -81.1028
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Modoc, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Modoc"
    }
  },
  {
    "slug": "chesnee",
    "name": "Chesnee",
    "county": "Spartanburg County",
    "zip": ["29323"],
    "neighborhoods": [
      "Downtown Chesnee",
      "Greater Chesnee"
    ],
    "landmarks": [
      {
        "name": "Chesnee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9757,
      "lng": -81.0842
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Chesnee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Chesnee!",
      "location": "Chesnee"
    }
  },
  {
    "slug": "olanta",
    "name": "Olanta",
    "county": "Florence County",
    "zip": ["29114"],
    "neighborhoods": [
      "Downtown Olanta",
      "Greater Olanta"
    ],
    "landmarks": [
      {
        "name": "Olanta Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0051,
      "lng": -81.0526
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Olanta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Olanta"
    }
  },
  {
    "slug": "fairview-crossroads",
    "name": "Fairview crossroads",
    "county": "South Carolina",
    "zip": ["29590"],
    "neighborhoods": [
      "Downtown Fairview crossroads",
      "Greater Fairview crossroads"
    ],
    "landmarks": [
      {
        "name": "Fairview Crossroads Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0500,
      "lng": -81.0593
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fairview crossroads, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Fairview crossroads"
    }
  },
  {
    "slug": "centenary",
    "name": "Centenary",
    "county": "Marion County",
    "zip": ["29519"],
    "neighborhoods": [
      "Downtown Centenary",
      "Greater Centenary"
    ],
    "landmarks": [
      {
        "name": "Centenary Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9063,
      "lng": -81.1149
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Centenary, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Centenary"
    }
  },
  {
    "slug": "bonneau",
    "name": "Bonneau",
    "county": "Berkeley County",
    "zip": ["29431"],
    "neighborhoods": [
      "Downtown Bonneau",
      "Greater Bonneau"
    ],
    "landmarks": [
      {
        "name": "Bonneau Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0595,
      "lng": -80.9390
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bonneau, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Bonneau"
    }
  },
  {
    "slug": "fair-play",
    "name": "Fair Play",
    "county": "Oconee County",
    "zip": ["29643"],
    "neighborhoods": [
      "Downtown Fair Play",
      "Greater Fair Play"
    ],
    "landmarks": [
      {
        "name": "Fair Play Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9138,
      "lng": -80.9386
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fair Play, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Fair Play"
    }
  },
  {
    "slug": "daufuskie-island",
    "name": "Daufuskie Island",
    "county": "Beaufort County",
    "zip": ["29915"],
    "neighborhoods": [
      "Downtown Daufuskie Island",
      "Greater Daufuskie Island"
    ],
    "landmarks": [
      {
        "name": "Daufuskie Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0859,
      "lng": -81.0059
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Daufuskie Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Daufuskie Island"
    }
  },
  {
    "slug": "briarcliffe-acres",
    "name": "Briarcliffe Acres",
    "county": "South Carolina",
    "zip": ["29878"],
    "neighborhoods": [
      "Downtown Briarcliffe Acres",
      "Greater Briarcliffe Acres"
    ],
    "landmarks": [
      {
        "name": "Briarcliffe Acres Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9851,
      "lng": -81.0003
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Briarcliffe Acres, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Briarcliffe Acres"
    }
  },
  {
    "slug": "coward",
    "name": "Coward",
    "county": "Florence County",
    "zip": ["29530"],
    "neighborhoods": [
      "Downtown Coward",
      "Greater Coward"
    ],
    "landmarks": [
      {
        "name": "Coward Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0807,
      "lng": -81.0296
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Coward, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Coward"
    }
  },
  {
    "slug": "gilbert",
    "name": "Gilbert",
    "county": "Lexington County",
    "zip": ["29054"],
    "neighborhoods": [
      "Downtown Gilbert",
      "Greater Gilbert"
    ],
    "landmarks": [
      {
        "name": "Gilbert Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9247,
      "lng": -81.1123
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gilbert, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Gilbert"
    }
  },
  {
    "slug": "furman",
    "name": "Furman",
    "county": "Hampton County",
    "zip": ["29921"],
    "neighborhoods": [
      "Downtown Furman",
      "Greater Furman"
    ],
    "landmarks": [
      {
        "name": "Furman Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0245,
      "lng": -81.0374
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Furman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Furman!",
      "location": "Furman"
    }
  },
  {
    "slug": "elliott",
    "name": "Elliott",
    "county": "Lee County",
    "zip": ["29046"],
    "neighborhoods": [
      "Downtown Elliott",
      "Greater Elliott"
    ],
    "landmarks": [
      {
        "name": "Elliott Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9523,
      "lng": -81.1324
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elliott, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Elliott!",
      "location": "Elliott"
    }
  },
  {
    "slug": "startex",
    "name": "Startex",
    "county": "Spartanburg County",
    "zip": ["29377"],
    "neighborhoods": [
      "Downtown Startex",
      "Greater Startex"
    ],
    "landmarks": [
      {
        "name": "Startex Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9805,
      "lng": -81.0155
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Startex, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Startex!",
      "location": "Startex"
    }
  },
  {
    "slug": "hickory-grove",
    "name": "Hickory Grove",
    "county": "York County",
    "zip": ["29717"],
    "neighborhoods": [
      "Downtown Hickory Grove",
      "Greater Hickory Grove"
    ],
    "landmarks": [
      {
        "name": "Hickory Grove Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0711,
      "lng": -80.9922
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hickory Grove, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Hickory Grove!",
      "location": "Hickory Grove"
    }
  },
  {
    "slug": "lane",
    "name": "Lane",
    "county": "Williamsburg County",
    "zip": ["29564"],
    "neighborhoods": [
      "Downtown Lane",
      "Greater Lane"
    ],
    "landmarks": [
      {
        "name": "Lane Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0256,
      "lng": -80.9881
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lane, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Lane"
    }
  },
  {
    "slug": "summit",
    "name": "Summit",
    "county": "South Carolina",
    "zip": ["29318"],
    "neighborhoods": [
      "Downtown Summit",
      "Greater Summit"
    ],
    "landmarks": [
      {
        "name": "Summit Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9775,
      "lng": -80.9359
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Summit, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Summit"
    }
  },
  {
    "slug": "carlisle",
    "name": "Carlisle",
    "county": "Union County",
    "zip": ["29031"],
    "neighborhoods": [
      "Downtown Carlisle",
      "Greater Carlisle"
    ],
    "landmarks": [
      {
        "name": "Carlisle Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0511,
      "lng": -81.1221
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Carlisle, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Carlisle"
    }
  },
  {
    "slug": "brunson",
    "name": "Brunson",
    "county": "Hampton County",
    "zip": ["29911"],
    "neighborhoods": [
      "Downtown Brunson",
      "Greater Brunson"
    ],
    "landmarks": [
      {
        "name": "Brunson Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0232,
      "lng": -80.9625
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Brunson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Brunson"
    }
  },
  {
    "slug": "little-rock",
    "name": "Little Rock",
    "county": "Dillon County",
    "zip": ["29567"],
    "neighborhoods": [
      "Downtown Little Rock",
      "Greater Little Rock"
    ],
    "landmarks": [
      {
        "name": "Little Rock Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9902,
      "lng": -81.0908
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Little Rock, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Little Rock"
    }
  },
  {
    "slug": "buford",
    "name": "Buford",
    "county": "South Carolina",
    "zip": ["29133"],
    "neighborhoods": [
      "Downtown Buford",
      "Greater Buford"
    ],
    "landmarks": [
      {
        "name": "Buford Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0962,
      "lng": -81.0366
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Buford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Buford"
    }
  },
  {
    "slug": "cross-hill",
    "name": "Cross Hill",
    "county": "Laurens County",
    "zip": ["29332"],
    "neighborhoods": [
      "Downtown cross Hill",
      "Greater cross Hill"
    ],
    "landmarks": [
      {
        "name": "Cross Hill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9053,
      "lng": -81.0375
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cross Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in cross Hill!",
      "location": "cross Hill"
    }
  },
  {
    "slug": "finklea",
    "name": "Finklea",
    "county": "South Carolina",
    "zip": ["29392"],
    "neighborhoods": [
      "Downtown Finklea",
      "Greater Finklea"
    ],
    "landmarks": [
      {
        "name": "Finklea Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9858,
      "lng": -81.0883
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Finklea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Finklea"
    }
  },
  {
    "slug": "patrick",
    "name": "Patrick",
    "county": "Chesterfield County",
    "zip": ["29584"],
    "neighborhoods": [
      "Downtown Patrick",
      "Greater Patrick"
    ],
    "landmarks": [
      {
        "name": "Patrick Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0198,
      "lng": -81.0186
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Patrick, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Patrick"
    }
  },
  {
    "slug": "cameron",
    "name": "Cameron",
    "county": "South Carolina",
    "zip": ["29937"],
    "neighborhoods": [
      "Downtown Cameron",
      "Greater Cameron"
    ],
    "landmarks": [
      {
        "name": "Cameron Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0481,
      "lng": -80.9557
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cameron, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Cameron"
    }
  },
  {
    "slug": "helena",
    "name": "Helena",
    "county": "South Carolina",
    "zip": ["29733"],
    "neighborhoods": [
      "Downtown Helena",
      "Greater Helena"
    ],
    "landmarks": [
      {
        "name": "Helena Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9968,
      "lng": -81.1089
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Helena, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Helena"
    }
  },
  {
    "slug": "springfield",
    "name": "Springfield",
    "county": "Orangeburg County",
    "zip": ["29146"],
    "neighborhoods": [
      "Downtown Springfield",
      "Greater Springfield"
    ],
    "landmarks": [
      {
        "name": "Springfield Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0638,
      "lng": -80.9529
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Springfield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Springfield"
    }
  },
  {
    "slug": "north-santee",
    "name": "North Santee",
    "county": "South Carolina",
    "zip": ["29584"],
    "neighborhoods": [
      "Downtown North Santee",
      "Greater North Santee"
    ],
    "landmarks": [
      {
        "name": "North Santee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0874,
      "lng": -81.0941
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Santee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in North Santee!",
      "location": "North Santee"
    }
  },
  {
    "slug": "danwood",
    "name": "Danwood",
    "county": "South Carolina",
    "zip": ["29215"],
    "neighborhoods": [
      "Downtown Danwood",
      "Greater Danwood"
    ],
    "landmarks": [
      {
        "name": "Danwood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0748,
      "lng": -81.0981
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Danwood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Danwood"
    }
  },
  {
    "slug": "ehrhardt",
    "name": "Ehrhardt",
    "county": "Bamberg County",
    "zip": ["29081"],
    "neighborhoods": [
      "Downtown Ehrhardt",
      "Greater Ehrhardt"
    ],
    "landmarks": [
      {
        "name": "Ehrhardt Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9327,
      "lng": -81.0099
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ehrhardt, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Ehrhardt"
    }
  },
  {
    "slug": "lockhart",
    "name": "Lockhart",
    "county": "Union County",
    "zip": ["29364"],
    "neighborhoods": [
      "Downtown Lockhart",
      "Greater Lockhart"
    ],
    "landmarks": [
      {
        "name": "Lockhart Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9418,
      "lng": -81.0032
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lockhart, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Lockhart"
    }
  },
  {
    "slug": "little-mountain",
    "name": "Little Mountain",
    "county": "Newberry County",
    "zip": ["29075"],
    "neighborhoods": [
      "Downtown Little Mountain",
      "Greater Little Mountain"
    ],
    "landmarks": [
      {
        "name": "Little Mountain Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0197,
      "lng": -81.0640
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Little Mountain, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Little Mountain"
    }
  },
  {
    "slug": "bethune",
    "name": "Bethune",
    "county": "Kershaw County",
    "zip": ["29009"],
    "neighborhoods": [
      "Downtown Bethune",
      "Greater Bethune"
    ],
    "landmarks": [
      {
        "name": "Bethune Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9992,
      "lng": -80.9681
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bethune, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Bethune"
    }
  },
  {
    "slug": "adams-run",
    "name": "Adams Run",
    "county": "Charleston County",
    "zip": ["29426"],
    "neighborhoods": [
      "Downtown Adams Run",
      "Greater Adams Run"
    ],
    "landmarks": [
      {
        "name": "Adams Run Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0277,
      "lng": -81.1306
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Adams Run, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Adams Run"
    }
  },
  {
    "slug": "enoree",
    "name": "Enoree",
    "county": "Spartanburg County",
    "zip": ["29335"],
    "neighborhoods": [
      "Downtown Enoree",
      "Greater Enoree"
    ],
    "landmarks": [
      {
        "name": "Enoree Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9474,
      "lng": -81.0912
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Enoree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Enoree"
    }
  },
  {
    "slug": "sheldon",
    "name": "Sheldon",
    "county": "Beaufort County",
    "zip": ["29941"],
    "neighborhoods": [
      "Downtown Sheldon",
      "Greater Sheldon"
    ],
    "landmarks": [
      {
        "name": "Sheldon Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9191,
      "lng": -81.0115
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sheldon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Sheldon"
    }
  },
  {
    "slug": "hilda",
    "name": "Hilda",
    "county": "Barnwell County",
    "zip": ["29813"],
    "neighborhoods": [
      "Downtown Hilda",
      "Greater Hilda"
    ],
    "landmarks": [
      {
        "name": "Hilda Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9858,
      "lng": -81.0994
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hilda, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Hilda!",
      "location": "Hilda"
    }
  },
  {
    "slug": "west-union",
    "name": "West Union",
    "county": "Oconee County",
    "zip": ["29696"],
    "neighborhoods": [
      "Downtown West Union",
      "Greater West Union"
    ],
    "landmarks": [
      {
        "name": "West Union Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9413,
      "lng": -81.0457
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In West Union, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "West Union"
    }
  },
  {
    "slug": "hemingway",
    "name": "Hemingway",
    "county": "Williamsburg County",
    "zip": ["29554"],
    "neighborhoods": [
      "Downtown Hemingway",
      "Greater Hemingway"
    ],
    "landmarks": [
      {
        "name": "Hemingway Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9280,
      "lng": -81.1015
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hemingway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Hemingway"
    }
  },
  {
    "slug": "grover",
    "name": "Grover",
    "county": "Dorchester County",
    "zip": ["29447"],
    "neighborhoods": [
      "Downtown Grover",
      "Greater Grover"
    ],
    "landmarks": [
      {
        "name": "Grover Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0028,
      "lng": -80.9860
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Grover, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Grover"
    }
  },
  {
    "slug": "greeleyville",
    "name": "Greeleyville",
    "county": "Williamsburg County",
    "zip": ["29056"],
    "neighborhoods": [
      "Downtown Greeleyville",
      "Greater Greeleyville"
    ],
    "landmarks": [
      {
        "name": "Greeleyville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0341,
      "lng": -80.9442
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greeleyville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Greeleyville"
    }
  },
  {
    "slug": "cash",
    "name": "Cash",
    "county": "South Carolina",
    "zip": ["29221"],
    "neighborhoods": [
      "Downtown Cash",
      "Greater Cash"
    ],
    "landmarks": [
      {
        "name": "Cash Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0756,
      "lng": -81.0595
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cash, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Cash"
    }
  },
  {
    "slug": "society-hill",
    "name": "Society Hill",
    "county": "Darlington County",
    "zip": ["29593"],
    "neighborhoods": [
      "Downtown Society Hill",
      "Greater Society Hill"
    ],
    "landmarks": [
      {
        "name": "Society Hill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9077,
      "lng": -80.9751
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Society Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Society Hill"
    }
  },
  {
    "slug": "sharon",
    "name": "Sharon",
    "county": "York County",
    "zip": ["29742"],
    "neighborhoods": [
      "Downtown Sharon",
      "Greater Sharon"
    ],
    "landmarks": [
      {
        "name": "Sharon Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9049,
      "lng": -81.0847
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sharon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Sharon"
    }
  },
  {
    "slug": "eutawville",
    "name": "Eutawville",
    "county": "Orangeburg County",
    "zip": ["29048"],
    "neighborhoods": [
      "Downtown Eutawville",
      "Greater Eutawville"
    ],
    "landmarks": [
      {
        "name": "Eutawville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9502,
      "lng": -80.9648
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Eutawville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Eutawville"
    }
  },
  {
    "slug": "rowesville",
    "name": "Rowesville",
    "county": "Orangeburg County",
    "zip": ["29133"],
    "neighborhoods": [
      "Downtown Rowesville",
      "Greater Rowesville"
    ],
    "landmarks": [
      {
        "name": "Rowesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9036,
      "lng": -81.0480
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rowesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Rowesville"
    }
  },
  {
    "slug": "alcolu",
    "name": "Alcolu",
    "county": "Clarendon County",
    "zip": ["29001"],
    "neighborhoods": [
      "Downtown Alcolu",
      "Greater Alcolu"
    ],
    "landmarks": [
      {
        "name": "Alcolu Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9926,
      "lng": -81.0722
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Alcolu, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Alcolu!",
      "location": "Alcolu"
    }
  },
  {
    "slug": "south-union",
    "name": "South Union",
    "county": "South Carolina",
    "zip": ["29493"],
    "neighborhoods": [
      "Downtown South Union",
      "Greater South Union"
    ],
    "landmarks": [
      {
        "name": "South Union Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0396,
      "lng": -81.0909
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In South Union, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "South Union"
    }
  },
  {
    "slug": "mount-carmel",
    "name": "Mount carmel",
    "county": "McCormick County",
    "zip": ["29840"],
    "neighborhoods": [
      "Downtown Mount carmel",
      "Greater Mount carmel"
    ],
    "landmarks": [
      {
        "name": "Mount Carmel Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0291,
      "lng": -81.0703
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mount carmel, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Mount carmel"
    }
  },
  {
    "slug": "cokesbury",
    "name": "Cokesbury",
    "county": "South Carolina",
    "zip": ["29745"],
    "neighborhoods": [
      "Downtown Cokesbury",
      "Greater Cokesbury"
    ],
    "landmarks": [
      {
        "name": "Cokesbury Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9521,
      "lng": -80.9363
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cokesbury, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Cokesbury"
    }
  },
  {
    "slug": "donalds",
    "name": "Donalds",
    "county": "Abbeville County",
    "zip": ["29638"],
    "neighborhoods": [
      "Downtown Donalds",
      "Greater Donalds"
    ],
    "landmarks": [
      {
        "name": "Donalds Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0673,
      "lng": -81.0402
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Donalds, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Donalds"
    }
  },
  {
    "slug": "neeses",
    "name": "Neeses",
    "county": "Orangeburg County",
    "zip": ["29107"],
    "neighborhoods": [
      "Downtown Neeses",
      "Greater Neeses"
    ],
    "landmarks": [
      {
        "name": "Neeses Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9560,
      "lng": -80.9360
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Neeses, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Neeses!",
      "location": "Neeses"
    }
  },
  {
    "slug": "ruby",
    "name": "Ruby",
    "county": "Chesterfield County",
    "zip": ["29741"],
    "neighborhoods": [
      "Downtown Ruby",
      "Greater Ruby"
    ],
    "landmarks": [
      {
        "name": "Ruby Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0305,
      "lng": -81.1103
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ruby, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Ruby!",
      "location": "Ruby"
    }
  },
  {
    "slug": "richburg",
    "name": "Richburg",
    "county": "Chester County",
    "zip": ["29729"],
    "neighborhoods": [
      "Downtown Richburg",
      "Greater Richburg"
    ],
    "landmarks": [
      {
        "name": "Richburg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0702,
      "lng": -81.0223
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Richburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Richburg"
    }
  },
  {
    "slug": "oswego",
    "name": "Oswego",
    "county": "South Carolina",
    "zip": ["29109"],
    "neighborhoods": [
      "Downtown Oswego",
      "Greater Oswego"
    ],
    "landmarks": [
      {
        "name": "Oswego Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9170,
      "lng": -81.0182
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Oswego, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Oswego"
    }
  },
  {
    "slug": "paxville",
    "name": "Paxville",
    "county": "South Carolina",
    "zip": ["29909"],
    "neighborhoods": [
      "Downtown Paxville",
      "Greater Paxville"
    ],
    "landmarks": [
      {
        "name": "Paxville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9037,
      "lng": -80.9359
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Paxville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Paxville"
    }
  },
  {
    "slug": "newry",
    "name": "Newry",
    "county": "Oconee County",
    "zip": ["29665"],
    "neighborhoods": [
      "Downtown Newry",
      "Greater Newry"
    ],
    "landmarks": [
      {
        "name": "Newry Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9978,
      "lng": -80.9646
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Newry"
    }
  },
  {
    "slug": "promised-land",
    "name": "Promised Land",
    "county": "South Carolina",
    "zip": ["29128"],
    "neighborhoods": [
      "Downtown Promised Land",
      "Greater Promised Land"
    ],
    "landmarks": [
      {
        "name": "Promised Land Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9929,
      "lng": -81.0744
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Promised Land, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Promised Land"
    }
  },
  {
    "slug": "atlantic-beach",
    "name": "Atlantic Beach",
    "county": "South Carolina",
    "zip": ["29544"],
    "neighborhoods": [
      "Downtown Atlantic Beach",
      "Greater Atlantic Beach"
    ],
    "landmarks": [
      {
        "name": "Atlantic Beach Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0778,
      "lng": -80.9394
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Atlantic Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Atlantic Beach"
    }
  },
  {
    "slug": "norway",
    "name": "Norway",
    "county": "Orangeburg County",
    "zip": ["29113"],
    "neighborhoods": [
      "Downtown Norway",
      "Greater Norway"
    ],
    "landmarks": [
      {
        "name": "Norway Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9490,
      "lng": -81.0068
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Norway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Norway"
    }
  },
  {
    "slug": "mcconnells",
    "name": "Mcconnells",
    "county": "South Carolina",
    "zip": ["29171"],
    "neighborhoods": [
      "Downtown Mcconnells",
      "Greater Mcconnells"
    ],
    "landmarks": [
      {
        "name": "Mcconnells Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9985,
      "lng": -81.0618
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mcconnells, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Mcconnells!",
      "location": "Mcconnells"
    }
  },
  {
    "slug": "gillisonville",
    "name": "Gillisonville",
    "county": "South Carolina",
    "zip": ["29123"],
    "neighborhoods": [
      "Downtown Gillisonville",
      "Greater Gillisonville"
    ],
    "landmarks": [
      {
        "name": "Gillisonville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0473,
      "lng": -80.9436
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gillisonville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Gillisonville"
    }
  },
  {
    "slug": "trenton",
    "name": "Trenton",
    "county": "Edgefield County",
    "zip": ["29847"],
    "neighborhoods": [
      "Downtown Trenton",
      "Greater Trenton"
    ],
    "landmarks": [
      {
        "name": "Trenton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0492,
      "lng": -80.9465
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Trenton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Trenton!",
      "location": "Trenton"
    }
  },
  {
    "slug": "lowrys",
    "name": "Lowrys",
    "county": "South Carolina",
    "zip": ["29325"],
    "neighborhoods": [
      "Downtown Lowrys",
      "Greater Lowrys"
    ],
    "landmarks": [
      {
        "name": "Lowrys Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0858,
      "lng": -81.0272
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lowrys, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Lowrys"
    }
  },
  {
    "slug": "salley",
    "name": "Salley",
    "county": "Aiken County",
    "zip": ["29137"],
    "neighborhoods": [
      "Downtown Salley",
      "Greater Salley"
    ],
    "landmarks": [
      {
        "name": "Salley Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9173,
      "lng": -80.9735
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Salley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Salley"
    }
  },
  {
    "slug": "windsor",
    "name": "Windsor",
    "county": "Aiken County",
    "zip": ["29856"],
    "neighborhoods": [
      "Downtown Windsor",
      "Greater Windsor"
    ],
    "landmarks": [
      {
        "name": "Windsor Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0832,
      "lng": -81.0619
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Windsor, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Windsor"
    }
  },
  {
    "slug": "perry",
    "name": "Perry",
    "county": "South Carolina",
    "zip": ["29399"],
    "neighborhoods": [
      "Downtown Perry",
      "Greater Perry"
    ],
    "landmarks": [
      {
        "name": "Perry Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9225,
      "lng": -80.9867
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Perry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Perry!",
      "location": "Perry"
    }
  },
  {
    "slug": "antreville",
    "name": "Antreville",
    "county": "South Carolina",
    "zip": ["29800"],
    "neighborhoods": [
      "Downtown Antreville",
      "Greater Antreville"
    ],
    "landmarks": [
      {
        "name": "Antreville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9334,
      "lng": -81.0227
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Antreville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Antreville"
    }
  },
  {
    "slug": "russellville",
    "name": "Russellville",
    "county": "Berkeley County",
    "zip": ["29476"],
    "neighborhoods": [
      "Downtown Russellville",
      "Greater Russellville"
    ],
    "landmarks": [
      {
        "name": "Russellville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0170,
      "lng": -81.0155
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Russellville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Russellville"
    }
  },
  {
    "slug": "harbor-island",
    "name": "Harbor Island",
    "county": "South Carolina",
    "zip": ["29323"],
    "neighborhoods": [
      "Downtown Harbor Island",
      "Greater Harbor Island"
    ],
    "landmarks": [
      {
        "name": "Harbor Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0183,
      "lng": -81.0529
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Harbor Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Harbor Island"
    }
  },
  {
    "slug": "reevesville",
    "name": "Reevesville",
    "county": "Dorchester County",
    "zip": ["29471"],
    "neighborhoods": [
      "Downtown Reevesville",
      "Greater Reevesville"
    ],
    "landmarks": [
      {
        "name": "Reevesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0667,
      "lng": -81.1274
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Reevesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Reevesville!",
      "location": "Reevesville"
    }
  },
  {
    "slug": "jacksonboro",
    "name": "Jacksonboro",
    "county": "Colleton County",
    "zip": ["29452"],
    "neighborhoods": [
      "Downtown Jacksonboro",
      "Greater Jacksonboro"
    ],
    "landmarks": [
      {
        "name": "Jacksonboro Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0408,
      "lng": -81.0506
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jacksonboro, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Jacksonboro"
    }
  },
  {
    "slug": "snelling",
    "name": "Snelling",
    "county": "South Carolina",
    "zip": ["29555"],
    "neighborhoods": [
      "Downtown Snelling",
      "Greater Snelling"
    ],
    "landmarks": [
      {
        "name": "Snelling Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9736,
      "lng": -80.9348
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Snelling, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Snelling!",
      "location": "Snelling"
    }
  },
  {
    "slug": "rembert",
    "name": "Rembert",
    "county": "Sumter County",
    "zip": ["29128"],
    "neighborhoods": [
      "Downtown Rembert",
      "Greater Rembert"
    ],
    "landmarks": [
      {
        "name": "Rembert Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9324,
      "lng": -81.0060
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rembert, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Rembert!",
      "location": "Rembert"
    }
  },
  {
    "slug": "glendale",
    "name": "Glendale",
    "county": "Spartanburg County",
    "zip": ["29346"],
    "neighborhoods": [
      "Downtown Glendale",
      "Greater Glendale"
    ],
    "landmarks": [
      {
        "name": "Glendale Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9579,
      "lng": -81.1175
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Glendale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Glendale!",
      "location": "Glendale"
    }
  },
  {
    "slug": "ward",
    "name": "Ward",
    "county": "Saluda County",
    "zip": ["29166"],
    "neighborhoods": [
      "Downtown Ward",
      "Greater Ward"
    ],
    "landmarks": [
      {
        "name": "Ward Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9506,
      "lng": -81.1185
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ward, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Ward"
    }
  },
  {
    "slug": "ridgeway",
    "name": "Ridgeway",
    "county": "Fairfield County",
    "zip": ["29130"],
    "neighborhoods": [
      "Downtown Ridgeway",
      "Greater Ridgeway"
    ],
    "landmarks": [
      {
        "name": "Ridgeway Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9621,
      "lng": -80.9631
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridgeway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Ridgeway"
    }
  },
  {
    "slug": "lynchburg",
    "name": "Lynchburg",
    "county": "Lee County",
    "zip": ["29080"],
    "neighborhoods": [
      "Downtown Lynchburg",
      "Greater Lynchburg"
    ],
    "landmarks": [
      {
        "name": "Lynchburg Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9857,
      "lng": -81.0598
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lynchburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Lynchburg"
    }
  },
  {
    "slug": "daviston",
    "name": "Daviston",
    "county": "South Carolina",
    "zip": ["29667"],
    "neighborhoods": [
      "Downtown Daviston",
      "Greater Daviston"
    ],
    "landmarks": [
      {
        "name": "Daviston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0944,
      "lng": -81.1292
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Daviston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Daviston"
    }
  },
  {
    "slug": "waterloo",
    "name": "Waterloo",
    "county": "Laurens County",
    "zip": ["29384"],
    "neighborhoods": [
      "Downtown Waterloo",
      "Greater Waterloo"
    ],
    "landmarks": [
      {
        "name": "Waterloo Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0146,
      "lng": -80.9972
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Waterloo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Waterloo!",
      "location": "Waterloo"
    }
  },
  {
    "slug": "stuckey",
    "name": "Stuckey",
    "county": "South Carolina",
    "zip": ["29559"],
    "neighborhoods": [
      "Downtown Stuckey",
      "Greater Stuckey"
    ],
    "landmarks": [
      {
        "name": "Stuckey Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9460,
      "lng": -81.0124
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Stuckey, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Stuckey"
    }
  },
  {
    "slug": "converse",
    "name": "Converse",
    "county": "Spartanburg County",
    "zip": ["29329"],
    "neighborhoods": [
      "Downtown Converse",
      "Greater Converse"
    ],
    "landmarks": [
      {
        "name": "Converse Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9757,
      "lng": -80.9837
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Converse, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Converse"
    }
  },
  {
    "slug": "pauline",
    "name": "Pauline",
    "county": "Spartanburg County",
    "zip": ["29374"],
    "neighborhoods": [
      "Downtown Pauline",
      "Greater Pauline"
    ],
    "landmarks": [
      {
        "name": "Pauline Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9097,
      "lng": -81.1071
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pauline, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Pauline"
    }
  },
  {
    "slug": "lydia",
    "name": "Lydia",
    "county": "Darlington County",
    "zip": ["29079"],
    "neighborhoods": [
      "Downtown Lydia",
      "Greater Lydia"
    ],
    "landmarks": [
      {
        "name": "Lydia Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0753,
      "lng": -81.0714
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lydia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lydia!",
      "location": "Lydia"
    }
  },
  {
    "slug": "dacusville",
    "name": "Dacusville",
    "county": "South Carolina",
    "zip": ["29576"],
    "neighborhoods": [
      "Downtown Dacusville",
      "Greater Dacusville"
    ],
    "landmarks": [
      {
        "name": "Dacusville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9189,
      "lng": -81.0559
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dacusville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Dacusville"
    }
  },
  {
    "slug": "cordova",
    "name": "Cordova",
    "county": "Orangeburg County",
    "zip": ["29039"],
    "neighborhoods": [
      "Downtown Cordova",
      "Greater Cordova"
    ],
    "landmarks": [
      {
        "name": "Cordova Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0509,
      "lng": -81.1144
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cordova, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Cordova"
    }
  },
  {
    "slug": "elko",
    "name": "Elko",
    "county": "Barnwell County",
    "zip": ["29826"],
    "neighborhoods": [
      "Downtown Elko",
      "Greater Elko"
    ],
    "landmarks": [
      {
        "name": "Elko Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9844,
      "lng": -80.9778
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elko, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Elko"
    }
  },
  {
    "slug": "wisacky",
    "name": "Wisacky",
    "county": "South Carolina",
    "zip": ["29984"],
    "neighborhoods": [
      "Downtown Wisacky",
      "Greater Wisacky"
    ],
    "landmarks": [
      {
        "name": "Wisacky Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0697,
      "lng": -80.9706
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wisacky, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Wisacky"
    }
  },
  {
    "slug": "williams",
    "name": "Williams",
    "county": "Colleton County",
    "zip": ["29493"],
    "neighborhoods": [
      "Downtown Williams",
      "Greater Williams"
    ],
    "landmarks": [
      {
        "name": "Williams Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9455,
      "lng": -81.0980
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Williams, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Williams"
    }
  },
  {
    "slug": "gifford",
    "name": "Gifford",
    "county": "Hampton County",
    "zip": ["29923"],
    "neighborhoods": [
      "Downtown Gifford",
      "Greater Gifford"
    ],
    "landmarks": [
      {
        "name": "Gifford Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9707,
      "lng": -81.1042
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gifford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Gifford"
    }
  },
  {
    "slug": "lobeco",
    "name": "Lobeco",
    "county": "Beaufort County",
    "zip": ["29931"],
    "neighborhoods": [
      "Downtown Lobeco",
      "Greater Lobeco"
    ],
    "landmarks": [
      {
        "name": "Lobeco Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0155,
      "lng": -81.0514
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lobeco, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Lobeco!",
      "location": "Lobeco"
    }
  },
  {
    "slug": "shiloh",
    "name": "Shiloh",
    "county": "South Carolina",
    "zip": ["29447"],
    "neighborhoods": [
      "Downtown Shiloh",
      "Greater Shiloh"
    ],
    "landmarks": [
      {
        "name": "Shiloh Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9422,
      "lng": -81.0248
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Shiloh, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Shiloh"
    }
  },
  {
    "slug": "kline",
    "name": "Kline",
    "county": "South Carolina",
    "zip": ["29373"],
    "neighborhoods": [
      "Downtown Kline",
      "Greater Kline"
    ],
    "landmarks": [
      {
        "name": "Kline Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0369,
      "lng": -81.0253
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kline, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Kline"
    }
  },
  {
    "slug": "starr",
    "name": "Starr",
    "county": "Anderson County",
    "zip": ["29684"],
    "neighborhoods": [
      "Downtown Starr",
      "Greater Starr"
    ],
    "landmarks": [
      {
        "name": "Starr Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0320,
      "lng": -81.0589
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Starr, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Starr"
    }
  },
  {
    "slug": "central-pacolet",
    "name": "Central Pacolet",
    "county": "South Carolina",
    "zip": ["29728"],
    "neighborhoods": [
      "Downtown Central Pacolet",
      "Greater Central Pacolet"
    ],
    "landmarks": [
      {
        "name": "Central Pacolet Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0028,
      "lng": -81.1187
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Central Pacolet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Central Pacolet"
    }
  },
  {
    "slug": "glenn-springs",
    "name": "Glenn Springs",
    "county": "South Carolina",
    "zip": ["29767"],
    "neighborhoods": [
      "Downtown Glenn Springs",
      "Greater Glenn Springs"
    ],
    "landmarks": [
      {
        "name": "Glenn Springs Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9316,
      "lng": -81.0837
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Glenn Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Glenn Springs"
    }
  },
  {
    "slug": "mulberry",
    "name": "Mulberry",
    "county": "South Carolina",
    "zip": ["29694"],
    "neighborhoods": [
      "Downtown Mulberry",
      "Greater Mulberry"
    ],
    "landmarks": [
      {
        "name": "Mulberry Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9208,
      "lng": -81.1238
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mulberry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Mulberry"
    }
  },
  {
    "slug": "monetta",
    "name": "Monetta",
    "county": "Aiken County",
    "zip": ["29105"],
    "neighborhoods": [
      "Downtown Monetta",
      "Greater Monetta"
    ],
    "landmarks": [
      {
        "name": "Monetta Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9640,
      "lng": -81.0128
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Monetta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Monetta"
    }
  },
  {
    "slug": "lowndesville",
    "name": "Lowndesville",
    "county": "Abbeville County",
    "zip": ["29659"],
    "neighborhoods": [
      "Downtown Lowndesville",
      "Greater Lowndesville"
    ],
    "landmarks": [
      {
        "name": "Lowndesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9898,
      "lng": -81.0734
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lowndesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Lowndesville"
    }
  },
  {
    "slug": "olar",
    "name": "Olar",
    "county": "Bamberg County",
    "zip": ["29843"],
    "neighborhoods": [
      "Downtown Olar",
      "Greater Olar"
    ],
    "landmarks": [
      {
        "name": "Olar Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9215,
      "lng": -81.0645
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Olar, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Olar"
    }
  },
  {
    "slug": "mount-croghan",
    "name": "Mount croghan",
    "county": "Chesterfield County",
    "zip": ["29727"],
    "neighborhoods": [
      "Downtown Mount croghan",
      "Greater Mount croghan"
    ],
    "landmarks": [
      {
        "name": "Mount Croghan Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9570,
      "lng": -81.1193
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mount croghan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Mount croghan"
    }
  },
  {
    "slug": "luray",
    "name": "Luray",
    "county": "Hampton County",
    "zip": ["29932"],
    "neighborhoods": [
      "Downtown Luray",
      "Greater Luray"
    ],
    "landmarks": [
      {
        "name": "Luray Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9233,
      "lng": -80.9997
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Luray, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Luray"
    }
  },
  {
    "slug": "hodges",
    "name": "Hodges",
    "county": "Greenwood County",
    "zip": ["29653"],
    "neighborhoods": [
      "Downtown Hodges",
      "Greater Hodges"
    ],
    "landmarks": [
      {
        "name": "Hodges Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0254,
      "lng": -80.9755
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hodges, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Hodges"
    }
  },
  {
    "slug": "lodge",
    "name": "Lodge",
    "county": "Colleton County",
    "zip": ["29082"],
    "neighborhoods": [
      "Downtown Lodge",
      "Greater Lodge"
    ],
    "landmarks": [
      {
        "name": "Lodge Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9378,
      "lng": -81.0871
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lodge, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Lodge"
    }
  },
  {
    "slug": "troy",
    "name": "Troy",
    "county": "Greenwood County",
    "zip": ["29848"],
    "neighborhoods": [
      "Downtown Troy",
      "Greater Troy"
    ],
    "landmarks": [
      {
        "name": "Troy Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9796,
      "lng": -80.9722
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Troy, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Troy!",
      "location": "Troy"
    }
  },
  {
    "slug": "woodford",
    "name": "Woodford",
    "county": "South Carolina",
    "zip": ["29561"],
    "neighborhoods": [
      "Downtown Woodford",
      "Greater Woodford"
    ],
    "landmarks": [
      {
        "name": "Woodford Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9669,
      "lng": -81.1269
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Woodford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Woodford"
    }
  },
  {
    "slug": "bradley",
    "name": "Bradley",
    "county": "Greenwood County",
    "zip": ["29819"],
    "neighborhoods": [
      "Downtown Bradley",
      "Greater Bradley"
    ],
    "landmarks": [
      {
        "name": "Bradley Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9299,
      "lng": -81.0880
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bradley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Bradley"
    }
  },
  {
    "slug": "nichols",
    "name": "Nichols",
    "county": "Horry County",
    "zip": ["29581"],
    "neighborhoods": [
      "Downtown Nichols",
      "Greater Nichols"
    ],
    "landmarks": [
      {
        "name": "Nichols Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9461,
      "lng": -81.0986
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Nichols, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Nichols"
    }
  },
  {
    "slug": "livingston",
    "name": "Livingston",
    "county": "South Carolina",
    "zip": ["29630"],
    "neighborhoods": [
      "Downtown Livingston",
      "Greater Livingston"
    ],
    "landmarks": [
      {
        "name": "Livingston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0308,
      "lng": -81.1009
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Livingston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Livingston"
    }
  },
  {
    "slug": "silverstreet",
    "name": "Silverstreet",
    "county": "Newberry County",
    "zip": ["29145"],
    "neighborhoods": [
      "Downtown Silverstreet",
      "Greater Silverstreet"
    ],
    "landmarks": [
      {
        "name": "Silverstreet Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9221,
      "lng": -80.9367
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Silverstreet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Silverstreet"
    }
  },
  {
    "slug": "salem",
    "name": "Salem",
    "county": "Oconee County",
    "zip": ["29676"],
    "neighborhoods": [
      "Downtown Salem",
      "Greater Salem"
    ],
    "landmarks": [
      {
        "name": "Salem Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0514,
      "lng": -81.0494
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Salem, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Salem"
    }
  },
  {
    "slug": "floydale",
    "name": "Floydale",
    "county": "South Carolina",
    "zip": ["29526"],
    "neighborhoods": [
      "Downtown Floydale",
      "Greater Floydale"
    ],
    "landmarks": [
      {
        "name": "Floydale Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0500,
      "lng": -81.0169
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Floydale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Floydale"
    }
  },
  {
    "slug": "mountville",
    "name": "Mountville",
    "county": "Laurens County",
    "zip": ["29370"],
    "neighborhoods": [
      "Downtown Mountville",
      "Greater Mountville"
    ],
    "landmarks": [
      {
        "name": "Mountville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9022,
      "lng": -80.9553
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mountville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Mountville"
    }
  },
  {
    "slug": "foreston",
    "name": "Foreston",
    "county": "South Carolina",
    "zip": ["29588"],
    "neighborhoods": [
      "Downtown Foreston",
      "Greater Foreston"
    ],
    "landmarks": [
      {
        "name": "Foreston Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0687,
      "lng": -80.9616
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Foreston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Foreston"
    }
  },
  {
    "slug": "sellers",
    "name": "Sellers",
    "county": "Dillon County",
    "zip": ["29592"],
    "neighborhoods": [
      "Downtown Sellers",
      "Greater Sellers"
    ],
    "landmarks": [
      {
        "name": "Sellers Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9546,
      "lng": -81.0970
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sellers, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Sellers"
    }
  },
  {
    "slug": "smoaks",
    "name": "Smoaks",
    "county": "Colleton County",
    "zip": ["29481"],
    "neighborhoods": [
      "Downtown Smoaks",
      "Greater Smoaks"
    ],
    "landmarks": [
      {
        "name": "Smoaks Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0623,
      "lng": -81.1163
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Smoaks, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Smoaks!",
      "location": "Smoaks"
    }
  },
  {
    "slug": "rockville",
    "name": "Rockville",
    "county": "South Carolina",
    "zip": ["29316"],
    "neighborhoods": [
      "Downtown Rockville",
      "Greater Rockville"
    ],
    "landmarks": [
      {
        "name": "Rockville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0237,
      "lng": -81.1141
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rockville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Rockville!",
      "location": "Rockville"
    }
  },
  {
    "slug": "scotia",
    "name": "Scotia",
    "county": "Hampton County",
    "zip": ["29939"],
    "neighborhoods": [
      "Downtown Scotia",
      "Greater Scotia"
    ],
    "landmarks": [
      {
        "name": "Scotia Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0551,
      "lng": -80.9816
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Scotia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Scotia"
    }
  },
  {
    "slug": "boykin",
    "name": "Boykin",
    "county": "South Carolina",
    "zip": ["29326"],
    "neighborhoods": [
      "Downtown Boykin",
      "Greater Boykin"
    ],
    "landmarks": [
      {
        "name": "Boykin Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9370,
      "lng": -81.0474
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Boykin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Boykin"
    }
  },
  {
    "slug": "parksville",
    "name": "Parksville",
    "county": "McCormick County",
    "zip": ["29844"],
    "neighborhoods": [
      "Downtown Parksville",
      "Greater Parksville"
    ],
    "landmarks": [
      {
        "name": "Parksville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9121,
      "lng": -81.0632
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Parksville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Parksville!",
      "location": "Parksville"
    }
  },
  {
    "slug": "pawleys-island",
    "name": "Pawleys Island",
    "county": "Georgetown County",
    "zip": ["29585"],
    "neighborhoods": [
      "Downtown Pawleys Island",
      "Greater Pawleys Island"
    ],
    "landmarks": [
      {
        "name": "Pawleys Island Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9014,
      "lng": -80.9379
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pawleys Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Pawleys Island"
    }
  },
  {
    "slug": "zion",
    "name": "Zion",
    "county": "South Carolina",
    "zip": ["29853"],
    "neighborhoods": [
      "Downtown Zion",
      "Greater Zion"
    ],
    "landmarks": [
      {
        "name": "Zion Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0946,
      "lng": -81.0957
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Zion, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Zion"
    }
  },
  {
    "slug": "fingerville",
    "name": "Fingerville",
    "county": "Spartanburg County",
    "zip": ["29338"],
    "neighborhoods": [
      "Downtown Fingerville",
      "Greater Fingerville"
    ],
    "landmarks": [
      {
        "name": "Fingerville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0252,
      "lng": -81.1290
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fingerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Fingerville"
    }
  },
  {
    "slug": "rains",
    "name": "Rains",
    "county": "Marion County",
    "zip": ["29589"],
    "neighborhoods": [
      "Downtown Rains",
      "Greater Rains"
    ],
    "landmarks": [
      {
        "name": "Rains Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0696,
      "lng": -81.0835
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rains, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Rains"
    }
  },
  {
    "slug": "ware-place",
    "name": "Ware Place",
    "county": "South Carolina",
    "zip": ["29433"],
    "neighborhoods": [
      "Downtown Ware Place",
      "Greater Ware Place"
    ],
    "landmarks": [
      {
        "name": "Ware Place Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0659,
      "lng": -81.0411
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ware Place, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Ware Place"
    }
  },
  {
    "slug": "sycamore",
    "name": "Sycamore",
    "county": "Allendale County",
    "zip": ["29846"],
    "neighborhoods": [
      "Downtown Sycamore",
      "Greater Sycamore"
    ],
    "landmarks": [
      {
        "name": "Sycamore Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9450,
      "lng": -81.0195
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sycamore, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Sycamore!",
      "location": "Sycamore"
    }
  },
  {
    "slug": "ulmer",
    "name": "Ulmer",
    "county": "Allendale County",
    "zip": ["29849"],
    "neighborhoods": [
      "Downtown Ulmer",
      "Greater Ulmer"
    ],
    "landmarks": [
      {
        "name": "Ulmer Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0769,
      "lng": -81.1152
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ulmer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Ulmer"
    }
  },
  {
    "slug": "vance",
    "name": "Vance",
    "county": "Orangeburg County",
    "zip": ["29163"],
    "neighborhoods": [
      "Downtown Vance",
      "Greater Vance"
    ],
    "landmarks": [
      {
        "name": "Vance Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9882,
      "lng": -81.0148
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Vance, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Vance"
    }
  },
  {
    "slug": "pomaria",
    "name": "Pomaria",
    "county": "Newberry County",
    "zip": ["29126"],
    "neighborhoods": [
      "Downtown Pomaria",
      "Greater Pomaria"
    ],
    "landmarks": [
      {
        "name": "Pomaria Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9108,
      "lng": -81.0259
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pomaria, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Pomaria"
    }
  },
  {
    "slug": "browntown",
    "name": "Browntown",
    "county": "South Carolina",
    "zip": ["29605"],
    "neighborhoods": [
      "Downtown Browntown",
      "Greater Browntown"
    ],
    "landmarks": [
      {
        "name": "Browntown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9388,
      "lng": -81.0810
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Browntown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Browntown"
    }
  },
  {
    "slug": "tamassee",
    "name": "Tamassee",
    "county": "Oconee County",
    "zip": ["29686"],
    "neighborhoods": [
      "Downtown Tamassee",
      "Greater Tamassee"
    ],
    "landmarks": [
      {
        "name": "Tamassee Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9543,
      "lng": -81.0391
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tamassee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Tamassee"
    }
  },
  {
    "slug": "willington",
    "name": "Willington",
    "county": "South Carolina",
    "zip": ["29894"],
    "neighborhoods": [
      "Downtown Willington",
      "Greater Willington"
    ],
    "landmarks": [
      {
        "name": "Willington Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9742,
      "lng": -81.0503
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Willington, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Willington!",
      "location": "Willington"
    }
  },
  {
    "slug": "peak",
    "name": "Peak",
    "county": "Newberry County",
    "zip": ["29122"],
    "neighborhoods": [
      "Downtown Peak",
      "Greater Peak"
    ],
    "landmarks": [
      {
        "name": "Peak Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0909,
      "lng": -80.9722
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Peak, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Peak"
    }
  },
  {
    "slug": "gramling",
    "name": "Gramling",
    "county": "Spartanburg County",
    "zip": ["29348"],
    "neighborhoods": [
      "Downtown Gramling",
      "Greater Gramling"
    ],
    "landmarks": [
      {
        "name": "Gramling Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0290,
      "lng": -81.0552
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gramling, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1448375002481-4625883395ee?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Gramling"
    }
  },
  {
    "slug": "clarks-hill",
    "name": "clarks Hill",
    "county": "McCormick County",
    "zip": ["29821"],
    "neighborhoods": [
      "Downtown clarks Hill",
      "Greater clarks Hill"
    ],
    "landmarks": [
      {
        "name": "Clarks Hill Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9656,
      "lng": -81.1184
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In clarks Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in clarks Hill!",
      "location": "clarks Hill"
    }
  },
  {
    "slug": "jamestown",
    "name": "Jamestown",
    "county": "Berkeley County",
    "zip": ["29453"],
    "neighborhoods": [
      "Downtown Jamestown",
      "Greater Jamestown"
    ],
    "landmarks": [
      {
        "name": "Jamestown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0779,
      "lng": -81.0061
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jamestown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Jamestown"
    }
  },
  {
    "slug": "princeton",
    "name": "Princeton",
    "county": "South Carolina",
    "zip": ["29939"],
    "neighborhoods": [
      "Downtown Princeton",
      "Greater Princeton"
    ],
    "landmarks": [
      {
        "name": "Princeton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9930,
      "lng": -80.9460
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Princeton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Princeton"
    }
  },
  {
    "slug": "plum-branch",
    "name": "Plum Branch",
    "county": "McCormick County",
    "zip": ["29845"],
    "neighborhoods": [
      "Downtown Plum Branch",
      "Greater Plum Branch"
    ],
    "landmarks": [
      {
        "name": "Plum Branch Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0186,
      "lng": -81.0727
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Plum Branch, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Plum Branch"
    }
  },
  {
    "slug": "st.-charles",
    "name": "St. charles",
    "county": "South Carolina",
    "zip": ["29394"],
    "neighborhoods": [
      "Downtown St. charles",
      "Greater St. charles"
    ],
    "landmarks": [
      {
        "name": "St. Charles Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0176,
      "lng": -81.0186
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. charles, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "St. charles"
    }
  },
  {
    "slug": "tatum",
    "name": "Tatum",
    "county": "Marlboro County",
    "zip": ["29594"],
    "neighborhoods": [
      "Downtown Tatum",
      "Greater Tatum"
    ],
    "landmarks": [
      {
        "name": "Tatum Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9713,
      "lng": -81.0117
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tatum, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Tatum"
    }
  },
  {
    "slug": "tradesville",
    "name": "Tradesville",
    "county": "South Carolina",
    "zip": ["29693"],
    "neighborhoods": [
      "Downtown Tradesville",
      "Greater Tradesville"
    ],
    "landmarks": [
      {
        "name": "Tradesville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0676,
      "lng": -81.0083
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tradesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Tradesville"
    }
  },
  {
    "slug": "green-sea",
    "name": "Green Sea",
    "county": "Horry County",
    "zip": ["29545"],
    "neighborhoods": [
      "Downtown Green Sea",
      "Greater Green Sea"
    ],
    "landmarks": [
      {
        "name": "Green Sea Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9697,
      "lng": -81.0552
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Green Sea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Green Sea"
    }
  },
  {
    "slug": "ashwood",
    "name": "Ashwood",
    "county": "South Carolina",
    "zip": ["29721"],
    "neighborhoods": [
      "Downtown Ashwood",
      "Greater Ashwood"
    ],
    "landmarks": [
      {
        "name": "Ashwood Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0470,
      "lng": -81.1277
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ashwood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Ashwood!",
      "location": "Ashwood"
    }
  },
  {
    "slug": "blenheim",
    "name": "Blenheim",
    "county": "Marlboro County",
    "zip": ["29516"],
    "neighborhoods": [
      "Downtown Blenheim",
      "Greater Blenheim"
    ],
    "landmarks": [
      {
        "name": "Blenheim Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9146,
      "lng": -80.9701
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blenheim, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Blenheim!",
      "location": "Blenheim"
    }
  },
  {
    "slug": "govan",
    "name": "Govan",
    "county": "South Carolina",
    "zip": ["29144"],
    "neighborhoods": [
      "Downtown Govan",
      "Greater Govan"
    ],
    "landmarks": [
      {
        "name": "Govan Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0954,
      "lng": -81.1122
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Govan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Govan"
    }
  },
  {
    "slug": "jenkinsville",
    "name": "Jenkinsville",
    "county": "Fairfield County",
    "zip": ["29065"],
    "neighborhoods": [
      "Downtown Jenkinsville",
      "Greater Jenkinsville"
    ],
    "landmarks": [
      {
        "name": "Jenkinsville Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0638,
      "lng": -81.0589
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jenkinsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "Jenkinsville"
    }
  },
  {
    "slug": "caesars-head",
    "name": "caesars Head",
    "county": "South Carolina",
    "zip": ["29366"],
    "neighborhoods": [
      "Downtown caesars Head",
      "Greater caesars Head"
    ],
    "landmarks": [
      {
        "name": "Caesars Head Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9608,
      "lng": -81.0582
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In caesars Head, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "caesars Head"
    }
  },
  {
    "slug": "islandton",
    "name": "Islandton",
    "county": "Colleton County",
    "zip": ["29929"],
    "neighborhoods": [
      "Downtown Islandton",
      "Greater Islandton"
    ],
    "landmarks": [
      {
        "name": "Islandton Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9430,
      "lng": -81.0926
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Islandton, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Islandton"
    }
  },
  {
    "slug": "coronaca",
    "name": "coronaca",
    "county": "South Carolina",
    "zip": ["29808"],
    "neighborhoods": [
      "Downtown coronaca",
      "Greater coronaca"
    ],
    "landmarks": [
      {
        "name": "Coronaca Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9236,
      "lng": -81.0639
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In coronaca, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "coronaca"
    }
  },
  {
    "slug": "cherokee-falls",
    "name": "cherokee Falls",
    "county": "South Carolina",
    "zip": ["29581"],
    "neighborhoods": [
      "Downtown cherokee Falls",
      "Greater cherokee Falls"
    ],
    "landmarks": [
      {
        "name": "Cherokee Falls Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0538,
      "lng": -81.0081
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cherokee Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "cherokee Falls"
    }
  },
  {
    "slug": "longcreek",
    "name": "Longcreek",
    "county": "South Carolina",
    "zip": ["29995"],
    "neighborhoods": [
      "Downtown Longcreek",
      "Greater Longcreek"
    ],
    "landmarks": [
      {
        "name": "Longcreek Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0737,
      "lng": -81.0924
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Longcreek, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Longcreek"
    }
  },
  {
    "slug": "smyrna",
    "name": "Smyrna",
    "county": "York County",
    "zip": ["29743"],
    "neighborhoods": [
      "Downtown Smyrna",
      "Greater Smyrna"
    ],
    "landmarks": [
      {
        "name": "Smyrna Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0480,
      "lng": -81.0138
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Smyrna, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "Smyrna"
    }
  },
  {
    "slug": "cope",
    "name": "cope",
    "county": "Orangeburg County",
    "zip": ["29038"],
    "neighborhoods": [
      "Downtown cope",
      "Greater cope"
    ],
    "landmarks": [
      {
        "name": "Cope Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9060,
      "lng": -80.9998
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cope, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "cope"
    }
  },
  {
    "slug": "cross-anchor",
    "name": "cross Anchor",
    "county": "Union County",
    "zip": ["29331"],
    "neighborhoods": [
      "Downtown cross Anchor",
      "Greater cross Anchor"
    ],
    "landmarks": [
      {
        "name": "Cross Anchor Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 33.9905,
      "lng": -81.0223
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cross Anchor, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Best tree service in this area. They explained the whole process and gave a very fair estimate.",
      "location": "cross Anchor"
    }
  },
  {
    "slug": "abney-crossroads",
    "name": "Abney crossroads",
    "county": "South Carolina",
    "zip": ["29644"],
    "neighborhoods": [
      "Downtown Abney crossroads",
      "Greater Abney crossroads"
    ],
    "landmarks": [
      {
        "name": "Abney Crossroads Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0184,
      "lng": -81.0171
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Abney crossroads, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "24/7 storm response was a lifesaver. They were on-site within 3 hours of my call.",
      "location": "Abney crossroads"
    }
  },
  {
    "slug": "coosawhatchie",
    "name": "coosawhatchie",
    "county": "Jasper County",
    "zip": ["29912"],
    "neighborhoods": [
      "Downtown coosawhatchie",
      "Greater coosawhatchie"
    ],
    "landmarks": [
      {
        "name": "Coosawhatchie Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0022,
      "lng": -80.9369
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In coosawhatchie, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Our oak tree was in a tight spot, but the arborist team handled it with zero damage to our house.",
      "location": "coosawhatchie"
    }
  },
  {
    "slug": "live-oak",
    "name": "Live Oak",
    "county": "South Carolina",
    "zip": ["29674"],
    "neighborhoods": [
      "Downtown Live Oak",
      "Greater Live Oak"
    ],
    "landmarks": [
      {
        "name": "Live Oak Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0614,
      "lng": -80.9615
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Live Oak, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Expert service and incredibly safe removal. Highly recommend for any property in Live Oak!",
      "location": "Live Oak"
    }
  },
  {
    "slug": "ketchuptown",
    "name": "Ketchuptown",
    "county": "South Carolina",
    "zip": ["29238"],
    "neighborhoods": [
      "Downtown Ketchuptown",
      "Greater Ketchuptown"
    ],
    "landmarks": [
      {
        "name": "Ketchuptown Center",
        "type": "Hub",
        "description": "Local community center"
      }
    ],
    "geo": {
      "lat": 34.0298,
      "lng": -81.0158
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ketchuptown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Prompt, professional, and very clean work. They left our yard looking better than before.",
      "location": "Ketchuptown"
    }
  }
];