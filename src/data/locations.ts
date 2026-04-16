export interface Location {
  slug: string; name: string; county: string; zip: string[]; neighborhoods: string[];
  landmarks: { name: string; type: string; description: string }[];
  geo: { lat: number; lng: number }; soilType: string; waterRestrictions: string;
  localInsight: string; commonYardSize: string; hoaNotes: string; image: string;
  testimonial: { name: string; quote: string; location: string };
}

export const locations: Location[] = [
  {
    "slug": "Charleston",
    "name": "Charleston",
    "county": "Charleston County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Charleston, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Charleston!",
      "location": "Charleston"
    }
  },
  {
    "slug": "Columbia",
    "name": "Columbia",
    "county": "Richland County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Columbia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Columbia!",
      "location": "Columbia"
    }
  },
  {
    "slug": "north-Charleston",
    "name": "North Charleston",
    "county": "Charleston County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Charleston, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in North Charleston!",
      "location": "North Charleston"
    }
  },
  {
    "slug": "mount-pleasant",
    "name": "Mount Pleasant",
    "county": "Charleston County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mount Pleasant, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mount Pleasant!",
      "location": "Mount Pleasant"
    }
  },
  {
    "slug": "rock-hill",
    "name": "Rock Hill",
    "county": "York County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rock Hill, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/fdcf3c9ed6c14981996ce4e981ed1d8d_b55fc.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Rock Hill!",
      "location": "Rock Hill"
    }
  },
  {
    "slug": "greenville",
    "name": "Greenville",
    "county": "Greenville County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greenville, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/fdcf3c9ed6c14981996ce4e981ed1d8d_b55fc.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Greenville!",
      "location": "Greenville"
    }
  },
  {
    "slug": "summerville",
    "name": "Summerville",
    "county": "DorChester County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Summerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Summerville!",
      "location": "Summerville"
    }
  },
  {
    "slug": "goose-creek",
    "name": "Goose creek",
    "county": "Berkeley County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Goose creek, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Goose creek!",
      "location": "Goose creek"
    }
  },
  {
    "slug": "sumter",
    "name": "Sumter",
    "county": "Sumter County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sumter, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/41310ccc491b4763bdeea6ec7a21ba6c_b2247.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sumter!",
      "location": "Sumter"
    }
  },
  {
    "slug": "florence",
    "name": "Florence",
    "county": "Florence County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Florence, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/41310ccc491b4763bdeea6ec7a21ba6c_b2247.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Florence!",
      "location": "Florence"
    }
  },
  {
    "slug": "spartanburg",
    "name": "Spartanburg",
    "county": "Spartanburg County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Spartanburg, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/fdcf3c9ed6c14981996ce4e981ed1d8d_b55fc.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Spartanburg!",
      "location": "Spartanburg"
    }
  },
  {
    "slug": "hilton-head-island",
    "name": "Hilton Head Island",
    "county": "Beaufort County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hilton Head Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hilton Head Island!",
      "location": "Hilton Head Island"
    }
  },
  {
    "slug": "greer",
    "name": "Greer",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greer, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/fdcf3c9ed6c14981996ce4e981ed1d8d_b55fc.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Greer!",
      "location": "Greer"
    }
  },
  {
    "slug": "myrtle-beach",
    "name": "Myrtle Beach",
    "county": "Horry County",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Myrtle Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Myrtle Beach!",
      "location": "Myrtle Beach"
    }
  },
  {
    "slug": "aiken",
    "name": "Aiken",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Aiken, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Aiken!",
      "location": "Aiken"
    }
  },
  {
    "slug": "bluffton",
    "name": "Bluffton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bluffton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bluffton!",
      "location": "Bluffton"
    }
  },
  {
    "slug": "anderson",
    "name": "Anderson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Red clay and rocky foothills",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Anderson, we focus on the unique arborist needs dictated by Red clay and rocky foothills and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/fdcf3c9ed6c14981996ce4e981ed1d8d_b55fc.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Anderson!",
      "location": "Anderson"
    }
  },
  {
    "slug": "fort-mill",
    "name": "Fort Mill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fort Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fort Mill!",
      "location": "Fort Mill"
    }
  },
  {
    "slug": "mauldin",
    "name": "Mauldin",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mauldin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mauldin!",
      "location": "Mauldin"
    }
  },
  {
    "slug": "Conway",
    "name": "Conway",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Conway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Conway!",
      "location": "Conway"
    }
  },
  {
    "slug": "Carolina-forest",
    "name": "Carolina Forest",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Carolina Forest, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Carolina Forest!",
      "location": "Carolina Forest"
    }
  },
  {
    "slug": "socastee",
    "name": "Socastee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Socastee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Socastee!",
      "location": "Socastee"
    }
  },
  {
    "slug": "north-augusta",
    "name": "North Augusta",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Augusta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in North Augusta!",
      "location": "North Augusta"
    }
  },
  {
    "slug": "simpsonville",
    "name": "Simpsonville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Simpsonville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Simpsonville!",
      "location": "Simpsonville"
    }
  },
  {
    "slug": "lexington",
    "name": "Lexington",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lexington, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lexington!",
      "location": "Lexington"
    }
  },
  {
    "slug": "easley",
    "name": "Easley",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Easley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Easley!",
      "location": "Easley"
    }
  },
  {
    "slug": "taylors",
    "name": "Taylors",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Taylors, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Taylors!",
      "location": "Taylors"
    }
  },
  {
    "slug": "greenwood",
    "name": "Greenwood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greenwood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Greenwood!",
      "location": "Greenwood"
    }
  },
  {
    "slug": "st.-andrews",
    "name": "St. Andrews",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. Andrews, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in St. Andrews!",
      "location": "St. Andrews"
    }
  },
  {
    "slug": "wade-hampton",
    "name": "Wade Hampton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wade Hampton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wade Hampton!",
      "location": "Wade Hampton"
    }
  },
  {
    "slug": "hanahan",
    "name": "Hanahan",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hanahan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hanahan!",
      "location": "Hanahan"
    }
  },
  {
    "slug": "north-myrtle-beach",
    "name": "North Myrtle Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Myrtle Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in North Myrtle Beach!",
      "location": "North Myrtle Beach"
    }
  },
  {
    "slug": "five-forks",
    "name": "Five Forks",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Five Forks, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Five Forks!",
      "location": "Five Forks"
    }
  },
  {
    "slug": "Clemson",
    "name": "Clemson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clemson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Clemson!",
      "location": "Clemson"
    }
  },
  {
    "slug": "west-Columbia",
    "name": "West Columbia",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In West Columbia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in West Columbia!",
      "location": "West Columbia"
    }
  },
  {
    "slug": "dentsville",
    "name": "Dentsville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dentsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dentsville!",
      "location": "Dentsville"
    }
  },
  {
    "slug": "berea",
    "name": "Berea",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Berea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Berea!",
      "location": "Berea"
    }
  },
  {
    "slug": "seven-oaks",
    "name": "Seven Oaks",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seven Oaks, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Seven Oaks!",
      "location": "Seven Oaks"
    }
  },
  {
    "slug": "red-hill",
    "name": "Red Hill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Red Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Red Hill!",
      "location": "Red Hill"
    }
  },
  {
    "slug": "ladson",
    "name": "Ladson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ladson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ladson!",
      "location": "Ladson"
    }
  },
  {
    "slug": "port-royal",
    "name": "Port Royal",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Port Royal, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Port Royal!",
      "location": "Port Royal"
    }
  },
  {
    "slug": "lake-wylie",
    "name": "Lake Wylie",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake Wylie, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lake Wylie!",
      "location": "Lake Wylie"
    }
  },
  {
    "slug": "gantt",
    "name": "Gantt",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gantt, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gantt!",
      "location": "Gantt"
    }
  },
  {
    "slug": "Cayce",
    "name": "Cayce",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cayce, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cayce!",
      "location": "Cayce"
    }
  },
  {
    "slug": "beaufort",
    "name": "Beaufort",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Beaufort, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Beaufort!",
      "location": "Beaufort"
    }
  },
  {
    "slug": "moncks-corner",
    "name": "Moncks corner",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Moncks corner, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Moncks corner!",
      "location": "Moncks corner"
    }
  },
  {
    "slug": "orangeburg",
    "name": "Orangeburg",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Orangeburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Orangeburg!",
      "location": "Orangeburg"
    }
  },
  {
    "slug": "tega-cay",
    "name": "Tega cay",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tega cay, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Tega cay!",
      "location": "Tega cay"
    }
  },
  {
    "slug": "gaffney",
    "name": "Gaffney",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gaffney, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gaffney!",
      "location": "Gaffney"
    }
  },
  {
    "slug": "parker",
    "name": "Parker",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Parker, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Parker!",
      "location": "Parker"
    }
  },
  {
    "slug": "james-island",
    "name": "James Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In James Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in James Island!",
      "location": "James Island"
    }
  },
  {
    "slug": "irmo",
    "name": "Irmo",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Irmo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Irmo!",
      "location": "Irmo"
    }
  },
  {
    "slug": "oak-grove",
    "name": "Oak Grove",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Oak Grove, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Oak Grove!",
      "location": "Oak Grove"
    }
  },
  {
    "slug": "boiling-springs",
    "name": "Boiling Springs",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Boiling Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Boiling Springs!",
      "location": "Boiling Springs"
    }
  },
  {
    "slug": "garden-city",
    "name": "Garden city",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Garden city, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Garden city!",
      "location": "Garden city"
    }
  },
  {
    "slug": "newberry",
    "name": "Newberry",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newberry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Newberry!",
      "location": "Newberry"
    }
  },
  {
    "slug": "powdersville",
    "name": "Powdersville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Powdersville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Powdersville!",
      "location": "Powdersville"
    }
  },
  {
    "slug": "fountain-inn",
    "name": "Fountain Inn",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fountain Inn, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fountain Inn!",
      "location": "Fountain Inn"
    }
  },
  {
    "slug": "red-bank",
    "name": "Red Bank",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Red Bank, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Red Bank!",
      "location": "Red Bank"
    }
  },
  {
    "slug": "forest-acres",
    "name": "Forest Acres",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Forest Acres, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Forest Acres!",
      "location": "Forest Acres"
    }
  },
  {
    "slug": "murrells-inlet",
    "name": "Murrells Inlet",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Murrells Inlet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Murrells Inlet!",
      "location": "Murrells Inlet"
    }
  },
  {
    "slug": "little-river",
    "name": "Little River",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Little River, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Little River!",
      "location": "Little River"
    }
  },
  {
    "slug": "woodfield",
    "name": "Woodfield",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Woodfield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Woodfield!",
      "location": "Woodfield"
    }
  },
  {
    "slug": "lugoff",
    "name": "Lugoff",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lugoff, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lugoff!",
      "location": "Lugoff"
    }
  },
  {
    "slug": "laurens",
    "name": "Laurens",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Laurens, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Laurens!",
      "location": "Laurens"
    }
  },
  {
    "slug": "litchfield-beach",
    "name": "Litchfield Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Litchfield Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Litchfield Beach!",
      "location": "Litchfield Beach"
    }
  },
  {
    "slug": "seneca",
    "name": "Seneca",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seneca, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Seneca!",
      "location": "Seneca"
    }
  },
  {
    "slug": "sangaree",
    "name": "Sangaree",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sangaree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sangaree!",
      "location": "Sangaree"
    }
  },
  {
    "slug": "lancaster",
    "name": "Lancaster",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lancaster, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lancaster!",
      "location": "Lancaster"
    }
  },
  {
    "slug": "york",
    "name": "York",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In York, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in York!",
      "location": "York"
    }
  },
  {
    "slug": "georgetown",
    "name": "Georgetown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Georgetown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Georgetown!",
      "location": "Georgetown"
    }
  },
  {
    "slug": "union",
    "name": "Union",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Union, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Union!",
      "location": "Union"
    }
  },
  {
    "slug": "hardeeville",
    "name": "Hardeeville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hardeeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hardeeville!",
      "location": "Hardeeville"
    }
  },
  {
    "slug": "sans-souci",
    "name": "Sans Souci",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sans Souci, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sans Souci!",
      "location": "Sans Souci"
    }
  },
  {
    "slug": "travelers-rest",
    "name": "Travelers Rest",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Travelers Rest, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Travelers Rest!",
      "location": "Travelers Rest"
    }
  },
  {
    "slug": "Camden",
    "name": "Camden",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Camden, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Camden!",
      "location": "Camden"
    }
  },
  {
    "slug": "Clinton",
    "name": "Clinton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clinton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Clinton!",
      "location": "Clinton"
    }
  },
  {
    "slug": "burton",
    "name": "Burton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Burton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Burton!",
      "location": "Burton"
    }
  },
  {
    "slug": "homeland-park",
    "name": "Homeland Park",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Homeland Park, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Homeland Park!",
      "location": "Homeland Park"
    }
  },
  {
    "slug": "hartsville",
    "name": "Hartsville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hartsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hartsville!",
      "location": "Hartsville"
    }
  },
  {
    "slug": "forestbrook",
    "name": "Forestbrook",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Forestbrook, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Forestbrook!",
      "location": "Forestbrook"
    }
  },
  {
    "slug": "Centerville",
    "name": "Centerville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Centerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Centerville!",
      "location": "Centerville"
    }
  },
  {
    "slug": "white-knoll",
    "name": "White Knoll",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In White Knoll, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in White Knoll!",
      "location": "White Knoll"
    }
  },
  {
    "slug": "welcome",
    "name": "Welcome",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Welcome, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Welcome!",
      "location": "Welcome"
    }
  },
  {
    "slug": "valley-falls",
    "name": "Valley Falls",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Valley Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Valley Falls!",
      "location": "Valley Falls"
    }
  },
  {
    "slug": "bennettsville",
    "name": "Bennettsville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bennettsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bennettsville!",
      "location": "Bennettsville"
    }
  },
  {
    "slug": "lake-murray-of-richland",
    "name": "Lake Murray of Richland",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake Murray of Richland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lake Murray of Richland!",
      "location": "Lake Murray of Richland"
    }
  },
  {
    "slug": "Clover",
    "name": "Clover",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clover, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Clover!",
      "location": "Clover"
    }
  },
  {
    "slug": "dillon",
    "name": "Dillon",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dillon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dillon!",
      "location": "Dillon"
    }
  },
  {
    "slug": "marion",
    "name": "Marion",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Marion, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Marion!",
      "location": "Marion"
    }
  },
  {
    "slug": "Clemson-university",
    "name": "Clemson University",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clemson University, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Clemson University!",
      "location": "Clemson University"
    }
  },
  {
    "slug": "darlington",
    "name": "Darlington",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Darlington, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Darlington!",
      "location": "Darlington"
    }
  },
  {
    "slug": "lyman",
    "name": "Lyman",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lyman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lyman!",
      "location": "Lyman"
    }
  },
  {
    "slug": "lake-city",
    "name": "Lake city",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake city, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lake city!",
      "location": "Lake city"
    }
  },
  {
    "slug": "belvedere",
    "name": "Belvedere",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Belvedere, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Belvedere!",
      "location": "Belvedere"
    }
  },
  {
    "slug": "walterboro",
    "name": "Walterboro",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Walterboro, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Walterboro!",
      "location": "Walterboro"
    }
  },
  {
    "slug": "laurel-bay",
    "name": "Laurel Bay",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Laurel Bay, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Laurel Bay!",
      "location": "Laurel Bay"
    }
  },
  {
    "slug": "piedmont",
    "name": "Piedmont",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Piedmont, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Piedmont!",
      "location": "Piedmont"
    }
  },
  {
    "slug": "hollywood",
    "name": "Hollywood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hollywood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hollywood!",
      "location": "Hollywood"
    }
  },
  {
    "slug": "Central",
    "name": "Central",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Central, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Central!",
      "location": "Central"
    }
  },
  {
    "slug": "Chester",
    "name": "Chester",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Chester, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Chester!",
      "location": "Chester"
    }
  },
  {
    "slug": "Cheraw",
    "name": "Cheraw",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cheraw, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cheraw!",
      "location": "Cheraw"
    }
  },
  {
    "slug": "batesburg-leesville",
    "name": "Batesburg-Leesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Batesburg-Leesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Batesburg-Leesville!",
      "location": "Batesburg-Leesville"
    }
  },
  {
    "slug": "abbeville",
    "name": "Abbeville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Abbeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Abbeville!",
      "location": "Abbeville"
    }
  },
  {
    "slug": "blythewood",
    "name": "Blythewood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blythewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Blythewood!",
      "location": "Blythewood"
    }
  },
  {
    "slug": "barnwell",
    "name": "Barnwell",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Barnwell, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Barnwell!",
      "location": "Barnwell"
    }
  },
  {
    "slug": "baxter-village",
    "name": "Baxter Village",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Baxter Village, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Baxter Village!",
      "location": "Baxter Village"
    }
  },
  {
    "slug": "india-hook",
    "name": "India Hook",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In India Hook, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in India Hook!",
      "location": "India Hook"
    }
  },
  {
    "slug": "belton",
    "name": "Belton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Belton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Belton!",
      "location": "Belton"
    }
  },
  {
    "slug": "isle-of-palms",
    "name": "Isle of Palms",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Isle of Palms, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Isle of Palms!",
      "location": "Isle of Palms"
    }
  },
  {
    "slug": "woodruff",
    "name": "Woodruff",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Woodruff, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Woodruff!",
      "location": "Woodruff"
    }
  },
  {
    "slug": "newport",
    "name": "Newport",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newport, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Newport!",
      "location": "Newport"
    }
  },
  {
    "slug": "surfside-beach",
    "name": "Surfside Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Surfside Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Surfside Beach!",
      "location": "Surfside Beach"
    }
  },
  {
    "slug": "saxon",
    "name": "Saxon",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Saxon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Saxon!",
      "location": "Saxon"
    }
  },
  {
    "slug": "walhalla",
    "name": "Walhalla",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Walhalla, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Walhalla!",
      "location": "Walhalla"
    }
  },
  {
    "slug": "williamston",
    "name": "Williamston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Williamston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Williamston!",
      "location": "Williamston"
    }
  },
  {
    "slug": "brookdale",
    "name": "Brookdale",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Brookdale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Brookdale!",
      "location": "Brookdale"
    }
  },
  {
    "slug": "duncan",
    "name": "Duncan",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Duncan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Duncan!",
      "location": "Duncan"
    }
  },
  {
    "slug": "mullins",
    "name": "Mullins",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mullins, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mullins!",
      "location": "Mullins"
    }
  },
  {
    "slug": "northlake",
    "name": "Northlake",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Northlake, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Northlake!",
      "location": "Northlake"
    }
  },
  {
    "slug": "manning",
    "name": "Manning",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Manning, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Manning!",
      "location": "Manning"
    }
  },
  {
    "slug": "southern-shops",
    "name": "Southern Shops",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Southern Shops, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Southern Shops!",
      "location": "Southern Shops"
    }
  },
  {
    "slug": "roebuck",
    "name": "Roebuck",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Roebuck, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Roebuck!",
      "location": "Roebuck"
    }
  },
  {
    "slug": "wyboo",
    "name": "Wyboo",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wyboo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wyboo!",
      "location": "Wyboo"
    }
  },
  {
    "slug": "ridgeland",
    "name": "Ridgeland",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridgeland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ridgeland!",
      "location": "Ridgeland"
    }
  },
  {
    "slug": "whitney",
    "name": "Whitney",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Whitney, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Whitney!",
      "location": "Whitney"
    }
  },
  {
    "slug": "honea-path",
    "name": "Honea Path",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Honea Path, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Honea Path!",
      "location": "Honea Path"
    }
  },
  {
    "slug": "andrews",
    "name": "Andrews",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Andrews, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Andrews!",
      "location": "Andrews"
    }
  },
  {
    "slug": "east-Camden",
    "name": "East Camden",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In East Camden, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in East Camden!",
      "location": "East Camden"
    }
  },
  {
    "slug": "pendleton",
    "name": "Pendleton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pendleton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pendleton!",
      "location": "Pendleton"
    }
  },
  {
    "slug": "capitol-view",
    "name": "Capitol View",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Capitol View, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Capitol View!",
      "location": "Capitol View"
    }
  },
  {
    "slug": "dunean",
    "name": "Dunean",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dunean, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dunean!",
      "location": "Dunean"
    }
  },
  {
    "slug": "dalzell",
    "name": "Dalzell",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dalzell, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dalzell!",
      "location": "Dalzell"
    }
  },
  {
    "slug": "clearwater",
    "name": "Clearwater",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In clearwater, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in clearwater!",
      "location": "clearwater"
    }
  },
  {
    "slug": "pickens",
    "name": "Pickens",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pickens, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pickens!",
      "location": "Pickens"
    }
  },
  {
    "slug": "wellford",
    "name": "Wellford",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wellford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wellford!",
      "location": "Wellford"
    }
  },
  {
    "slug": "liberty",
    "name": "Liberty",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Liberty, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Liberty!",
      "location": "Liberty"
    }
  },
  {
    "slug": "golden-grove",
    "name": "Golden Grove",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Golden Grove, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Golden Grove!",
      "location": "Golden Grove"
    }
  },
  {
    "slug": "north-hartsville",
    "name": "North Hartsville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Hartsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in North Hartsville!",
      "location": "North Hartsville"
    }
  },
  {
    "slug": "hilltop",
    "name": "Hilltop",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hilltop, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hilltop!",
      "location": "Hilltop"
    }
  },
  {
    "slug": "winnsboro",
    "name": "Winnsboro",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Winnsboro, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Winnsboro!",
      "location": "Winnsboro"
    }
  },
  {
    "slug": "kingstree",
    "name": "Kingstree",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kingstree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Kingstree!",
      "location": "Kingstree"
    }
  },
  {
    "slug": "denmark",
    "name": "Denmark",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Denmark, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Denmark!",
      "location": "Denmark"
    }
  },
  {
    "slug": "lakewood",
    "name": "Lakewood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lakewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lakewood!",
      "location": "Lakewood"
    }
  },
  {
    "slug": "saluda",
    "name": "Saluda",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Saluda, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Saluda!",
      "location": "Saluda"
    }
  },
  {
    "slug": "lesslie",
    "name": "Lesslie",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lesslie, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lesslie!",
      "location": "Lesslie"
    }
  },
  {
    "slug": "gloverville",
    "name": "Gloverville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gloverville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gloverville!",
      "location": "Gloverville"
    }
  },
  {
    "slug": "bamberg",
    "name": "Bamberg",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bamberg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bamberg!",
      "location": "Bamberg"
    }
  },
  {
    "slug": "keowee-key",
    "name": "Keowee Key",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Keowee Key, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Keowee Key!",
      "location": "Keowee Key"
    }
  },
  {
    "slug": "burnettown",
    "name": "Burnettown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Burnettown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Burnettown!",
      "location": "Burnettown"
    }
  },
  {
    "slug": "arthurtown",
    "name": "Arthurtown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arthurtown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Arthurtown!",
      "location": "Arthurtown"
    }
  },
  {
    "slug": "inman",
    "name": "Inman",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Inman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Inman!",
      "location": "Inman"
    }
  },
  {
    "slug": "bishopville",
    "name": "Bishopville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bishopville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bishopville!",
      "location": "Bishopville"
    }
  },
  {
    "slug": "east-gaffney",
    "name": "East Gaffney",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In East Gaffney, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in East Gaffney!",
      "location": "East Gaffney"
    }
  },
  {
    "slug": "elgin-cdp",
    "name": "Elgin cDP",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elgin cDP, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Elgin cDP!",
      "location": "Elgin cDP"
    }
  },
  {
    "slug": "williston",
    "name": "Williston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Williston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Williston!",
      "location": "Williston"
    }
  },
  {
    "slug": "arcadia",
    "name": "Arcadia",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arcadia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Arcadia!",
      "location": "Arcadia"
    }
  },
  {
    "slug": "cherryvale",
    "name": "Cherryvale",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cherryvale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in cherryvale!",
      "location": "cherryvale"
    }
  },
  {
    "slug": "mccormick",
    "name": "Mccormick",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mccormick, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mccormick!",
      "location": "Mccormick"
    }
  },
  {
    "slug": "pageland",
    "name": "Pageland",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pageland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pageland!",
      "location": "Pageland"
    }
  },
  {
    "slug": "hampton",
    "name": "Hampton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hampton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hampton!",
      "location": "Hampton"
    }
  },
  {
    "slug": "springdale-town",
    "name": "Springdale town",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Springdale town, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Springdale town!",
      "location": "Springdale town"
    }
  },
  {
    "slug": "allendale",
    "name": "Allendale",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Allendale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Allendale!",
      "location": "Allendale"
    }
  },
  {
    "slug": "pine-ridge-town",
    "name": "Pine Ridge town",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pine Ridge town, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pine Ridge town!",
      "location": "Pine Ridge town"
    }
  },
  {
    "slug": "arkwright",
    "name": "Arkwright",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arkwright, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Arkwright!",
      "location": "Arkwright"
    }
  },
  {
    "slug": "springdale-cdp",
    "name": "Springdale cDP",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Springdale cDP, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Springdale cDP!",
      "location": "Springdale cDP"
    }
  },
  {
    "slug": "ninety-six",
    "name": "Ninety Six",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ninety Six, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ninety Six!",
      "location": "Ninety Six"
    }
  },
  {
    "slug": "ravenel",
    "name": "Ravenel",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ravenel, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ravenel!",
      "location": "Ravenel"
    }
  },
  {
    "slug": "loris",
    "name": "Loris",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Loris, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Loris!",
      "location": "Loris"
    }
  },
  {
    "slug": "new-ellenton",
    "name": "New Ellenton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In New Ellenton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in New Ellenton!",
      "location": "New Ellenton"
    }
  },
  {
    "slug": "edgefield",
    "name": "Edgefield",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edgefield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Edgefield!",
      "location": "Edgefield"
    }
  },
  {
    "slug": "landrum",
    "name": "Landrum",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Landrum, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Landrum!",
      "location": "Landrum"
    }
  },
  {
    "slug": "graniteville",
    "name": "Graniteville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Graniteville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Graniteville!",
      "location": "Graniteville"
    }
  },
  {
    "slug": "johnston",
    "name": "Johnston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Johnston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Johnston!",
      "location": "Johnston"
    }
  },
  {
    "slug": "sullivan's-island",
    "name": "Sullivan's Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sullivan's Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sullivan's Island!",
      "location": "Sullivan's Island"
    }
  },
  {
    "slug": "kershaw",
    "name": "Kershaw",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kershaw, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Kershaw!",
      "location": "Kershaw"
    }
  },
  {
    "slug": "mccoll",
    "name": "Mccoll",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mccoll, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mccoll!",
      "location": "Mccoll"
    }
  },
  {
    "slug": "south-congaree",
    "name": "South congaree",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In South congaree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in South congaree!",
      "location": "South congaree"
    }
  },
  {
    "slug": "pimlico",
    "name": "Pimlico",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pimlico, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pimlico!",
      "location": "Pimlico"
    }
  },
  {
    "slug": "estill",
    "name": "Estill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Estill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Estill!",
      "location": "Estill"
    }
  },
  {
    "slug": "westminster",
    "name": "Westminster",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Westminster, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Westminster!",
      "location": "Westminster"
    }
  },
  {
    "slug": "slater-marietta",
    "name": "Slater-Marietta",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Slater-Marietta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Slater-Marietta!",
      "location": "Slater-Marietta"
    }
  },
  {
    "slug": "privateer",
    "name": "Privateer",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Privateer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Privateer!",
      "location": "Privateer"
    }
  },
  {
    "slug": "varnville",
    "name": "Varnville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Varnville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Varnville!",
      "location": "Varnville"
    }
  },
  {
    "slug": "ben-avon",
    "name": "Ben Avon",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ben Avon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ben Avon!",
      "location": "Ben Avon"
    }
  },
  {
    "slug": "kiawah-island",
    "name": "Kiawah Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kiawah Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Kiawah Island!",
      "location": "Kiawah Island"
    }
  },
  {
    "slug": "tigerville",
    "name": "Tigerville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tigerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Tigerville!",
      "location": "Tigerville"
    }
  },
  {
    "slug": "timmonsville",
    "name": "Timmonsville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Timmonsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Timmonsville!",
      "location": "Timmonsville"
    }
  },
  {
    "slug": "blacksburg",
    "name": "Blacksburg",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blacksburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Blacksburg!",
      "location": "Blacksburg"
    }
  },
  {
    "slug": "elgin-town",
    "name": "Elgin town",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elgin town, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Elgin town!",
      "location": "Elgin town"
    }
  },
  {
    "slug": "seabrook-island",
    "name": "Seabrook Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seabrook Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Seabrook Island!",
      "location": "Seabrook Island"
    }
  },
  {
    "slug": "wedgefield",
    "name": "Wedgefield",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wedgefield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wedgefield!",
      "location": "Wedgefield"
    }
  },
  {
    "slug": "fairfax",
    "name": "Fairfax",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fairfax, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fairfax!",
      "location": "Fairfax"
    }
  },
  {
    "slug": "blackville",
    "name": "Blackville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blackville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Blackville!",
      "location": "Blackville"
    }
  },
  {
    "slug": "shell-point",
    "name": "Shell Point",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Shell Point, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Shell Point!",
      "location": "Shell Point"
    }
  },
  {
    "slug": "watts-mills",
    "name": "Watts Mills",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Watts Mills, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Watts Mills!",
      "location": "Watts Mills"
    }
  },
  {
    "slug": "riverview",
    "name": "Riverview",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Riverview, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Riverview!",
      "location": "Riverview"
    }
  },
  {
    "slug": "gaston",
    "name": "Gaston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gaston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gaston!",
      "location": "Gaston"
    }
  },
  {
    "slug": "pacolet",
    "name": "Pacolet",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pacolet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pacolet!",
      "location": "Pacolet"
    }
  },
  {
    "slug": "calhoun-falls",
    "name": "calhoun Falls",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In calhoun Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in calhoun Falls!",
      "location": "calhoun Falls"
    }
  },
  {
    "slug": "ware-shoals",
    "name": "Ware Shoals",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ware Shoals, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ware Shoals!",
      "location": "Ware Shoals"
    }
  },
  {
    "slug": "st.-matthews",
    "name": "St. Matthews",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. Matthews, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in St. Matthews!",
      "location": "St. Matthews"
    }
  },
  {
    "slug": "mayo",
    "name": "Mayo",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mayo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mayo!",
      "location": "Mayo"
    }
  },
  {
    "slug": "wilkinson-heights",
    "name": "Wilkinson Heights",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wilkinson Heights, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wilkinson Heights!",
      "location": "Wilkinson Heights"
    }
  },
  {
    "slug": "edisto",
    "name": "Edisto",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edisto, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Edisto!",
      "location": "Edisto"
    }
  },
  {
    "slug": "st.-george",
    "name": "St. George",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. George, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in St. George!",
      "location": "St. George"
    }
  },
  {
    "slug": "eureka-mill",
    "name": "Eureka Mill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Eureka Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Eureka Mill!",
      "location": "Eureka Mill"
    }
  },
  {
    "slug": "jackson",
    "name": "Jackson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jackson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Jackson!",
      "location": "Jackson"
    }
  },
  {
    "slug": "judson",
    "name": "Judson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Judson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Judson!",
      "location": "Judson"
    }
  },
  {
    "slug": "irwin",
    "name": "Irwin",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Irwin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Irwin!",
      "location": "Irwin"
    }
  },
  {
    "slug": "Cowpens",
    "name": "Cowpens",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cowpens, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cowpens!",
      "location": "Cowpens"
    }
  },
  {
    "slug": "langley",
    "name": "Langley",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Langley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Langley!",
      "location": "Langley"
    }
  },
  {
    "slug": "monarch-mill",
    "name": "Monarch Mill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Monarch Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Monarch Mill!",
      "location": "Monarch Mill"
    }
  },
  {
    "slug": "arial",
    "name": "Arial",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arial, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Arial!",
      "location": "Arial"
    }
  },
  {
    "slug": "stateburg",
    "name": "Stateburg",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Stateburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Stateburg!",
      "location": "Stateburg"
    }
  },
  {
    "slug": "hopkins",
    "name": "Hopkins",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hopkins, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hopkins!",
      "location": "Hopkins"
    }
  },
  {
    "slug": "reidville",
    "name": "Reidville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Reidville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Reidville!",
      "location": "Reidville"
    }
  },
  {
    "slug": "city-view",
    "name": "city View",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In city View, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in city View!",
      "location": "city View"
    }
  },
  {
    "slug": "camp-croft",
    "name": "Camp Croft",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Camp Croft, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Camp Croft!",
      "location": "Camp Croft"
    }
  },
  {
    "slug": "winnsboro-mills",
    "name": "Winnsboro Mills",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Winnsboro Mills, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Winnsboro Mills!",
      "location": "Winnsboro Mills"
    }
  },
  {
    "slug": "great-falls",
    "name": "Great Falls",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Great Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Great Falls!",
      "location": "Great Falls"
    }
  },
  {
    "slug": "utica",
    "name": "Utica",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Utica, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Utica!",
      "location": "Utica"
    }
  },
  {
    "slug": "fairforest",
    "name": "Fairforest",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fairforest, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fairforest!",
      "location": "Fairforest"
    }
  },
  {
    "slug": "south-sumter",
    "name": "South Sumter",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In South Sumter, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/41310ccc491b4763bdeea6ec7a21ba6c_b2247.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in South Sumter!",
      "location": "South Sumter"
    }
  },
  {
    "slug": "awendaw",
    "name": "Awendaw",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Awendaw, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Awendaw!",
      "location": "Awendaw"
    }
  },
  {
    "slug": "ridgeville",
    "name": "Ridgeville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridgeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ridgeville!",
      "location": "Ridgeville"
    }
  },
  {
    "slug": "chapin",
    "name": "Chapin",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In chapin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in chapin!",
      "location": "chapin"
    }
  },
  {
    "slug": "cane-savannah",
    "name": "Cane Savannah",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cane Savannah, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cane Savannah!",
      "location": "Cane Savannah"
    }
  },
  {
    "slug": "latta",
    "name": "Latta",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Latta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Latta!",
      "location": "Latta"
    }
  },
  {
    "slug": "bonneau-beach",
    "name": "Bonneau Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bonneau Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bonneau Beach!",
      "location": "Bonneau Beach"
    }
  },
  {
    "slug": "pelzer",
    "name": "Pelzer",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pelzer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pelzer!",
      "location": "Pelzer"
    }
  },
  {
    "slug": "murphys-estates",
    "name": "Murphys Estates",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Murphys Estates, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Murphys Estates!",
      "location": "Murphys Estates"
    }
  },
  {
    "slug": "catawba",
    "name": "Catawba",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In catawba, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in catawba!",
      "location": "catawba"
    }
  },
  {
    "slug": "Chesterfield",
    "name": "Chesterfield",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Chesterfield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Chesterfield!",
      "location": "Chesterfield"
    }
  },
  {
    "slug": "joanna",
    "name": "Joanna",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Joanna, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Joanna!",
      "location": "Joanna"
    }
  },
  {
    "slug": "st.-stephen",
    "name": "St. Stephen",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. Stephen, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in St. Stephen!",
      "location": "St. Stephen"
    }
  },
  {
    "slug": "holly-hill",
    "name": "Holly Hill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Holly Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Holly Hill!",
      "location": "Holly Hill"
    }
  },
  {
    "slug": "gadsden",
    "name": "Gadsden",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gadsden, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gadsden!",
      "location": "Gadsden"
    }
  },
  {
    "slug": "beech-island",
    "name": "Beech Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Beech Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Beech Island!",
      "location": "Beech Island"
    }
  },
  {
    "slug": "meggett",
    "name": "Meggett",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Meggett, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Meggett!",
      "location": "Meggett"
    }
  },
  {
    "slug": "branchville",
    "name": "Branchville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Branchville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Branchville!",
      "location": "Branchville"
    }
  },
  {
    "slug": "homewood",
    "name": "Homewood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Homewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Homewood!",
      "location": "Homewood"
    }
  },
  {
    "slug": "whitmire",
    "name": "Whitmire",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Whitmire, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Whitmire!",
      "location": "Whitmire"
    }
  },
  {
    "slug": "lake-secession",
    "name": "Lake Secession",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake Secession, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lake Secession!",
      "location": "Lake Secession"
    }
  },
  {
    "slug": "olympia",
    "name": "Olympia",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Olympia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Olympia!",
      "location": "Olympia"
    }
  },
  {
    "slug": "lamar",
    "name": "Lamar",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lamar, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lamar!",
      "location": "Lamar"
    }
  },
  {
    "slug": "Conestee",
    "name": "Conestee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Conestee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Conestee!",
      "location": "Conestee"
    }
  },
  {
    "slug": "santee",
    "name": "Santee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Santee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Santee!",
      "location": "Santee"
    }
  },
  {
    "slug": "buffalo",
    "name": "Buffalo",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Buffalo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Buffalo!",
      "location": "Buffalo"
    }
  },
  {
    "slug": "west-pelzer",
    "name": "West Pelzer",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In West Pelzer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in West Pelzer!",
      "location": "West Pelzer"
    }
  },
  {
    "slug": "fort-lawn",
    "name": "Fort Lawn",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fort Lawn, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fort Lawn!",
      "location": "Fort Lawn"
    }
  },
  {
    "slug": "edmund",
    "name": "Edmund",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edmund, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Edmund!",
      "location": "Edmund"
    }
  },
  {
    "slug": "due-west",
    "name": "Due West",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Due West, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Due West!",
      "location": "Due West"
    }
  },
  {
    "slug": "Cottageville",
    "name": "Cottageville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cottageville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cottageville!",
      "location": "Cottageville"
    }
  },
  {
    "slug": "prosperity",
    "name": "Prosperity",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Prosperity, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Prosperity!",
      "location": "Prosperity"
    }
  },
  {
    "slug": "johnsonville",
    "name": "Johnsonville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Johnsonville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Johnsonville!",
      "location": "Johnsonville"
    }
  },
  {
    "slug": "seabrook",
    "name": "Seabrook",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Seabrook, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Seabrook!",
      "location": "Seabrook"
    }
  },
  {
    "slug": "six-mile",
    "name": "Six Mile",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Six Mile, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Six Mile!",
      "location": "Six Mile"
    }
  },
  {
    "slug": "gayle-mill",
    "name": "Gayle Mill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gayle Mill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gayle Mill!",
      "location": "Gayle Mill"
    }
  },
  {
    "slug": "pamplico",
    "name": "Pamplico",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pamplico, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pamplico!",
      "location": "Pamplico"
    }
  },
  {
    "slug": "dunbar",
    "name": "Dunbar",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dunbar, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dunbar!",
      "location": "Dunbar"
    }
  },
  {
    "slug": "pelion",
    "name": "Pelion",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pelion, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pelion!",
      "location": "Pelion"
    }
  },
  {
    "slug": "mcbee",
    "name": "McBee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In McBee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in McBee!",
      "location": "McBee"
    }
  },
  {
    "slug": "wagener",
    "name": "Wagener",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wagener, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wagener!",
      "location": "Wagener"
    }
  },
  {
    "slug": "iva",
    "name": "Iva",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Iva, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Iva!",
      "location": "Iva"
    }
  },
  {
    "slug": "folly-beach",
    "name": "Folly Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Folly Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Folly Beach!",
      "location": "Folly Beach"
    }
  },
  {
    "slug": "drayton",
    "name": "Drayton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Drayton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Drayton!",
      "location": "Drayton"
    }
  },
  {
    "slug": "elloree",
    "name": "Elloree",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elloree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Elloree!",
      "location": "Elloree"
    }
  },
  {
    "slug": "la-france",
    "name": "La France",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In La France, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in La France!",
      "location": "La France"
    }
  },
  {
    "slug": "aynor",
    "name": "Aynor",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Aynor, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Aynor!",
      "location": "Aynor"
    }
  },
  {
    "slug": "yemassee",
    "name": "Yemassee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Yemassee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Yemassee!",
      "location": "Yemassee"
    }
  },
  {
    "slug": "Cateechee",
    "name": "Cateechee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cateechee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cateechee!",
      "location": "Cateechee"
    }
  },
  {
    "slug": "Clifton",
    "name": "Clifton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clifton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Clifton!",
      "location": "Clifton"
    }
  },
  {
    "slug": "oakland",
    "name": "Oakland",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Oakland, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Oakland!",
      "location": "Oakland"
    }
  },
  {
    "slug": "dale",
    "name": "Dale",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dale!",
      "location": "Dale"
    }
  },
  {
    "slug": "inman-mills",
    "name": "Inman Mills",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Inman Mills, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Inman Mills!",
      "location": "Inman Mills"
    }
  },
  {
    "slug": "dovesville",
    "name": "Dovesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dovesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dovesville!",
      "location": "Dovesville"
    }
  },
  {
    "slug": "pinopolis",
    "name": "Pinopolis",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pinopolis, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pinopolis!",
      "location": "Pinopolis"
    }
  },
  {
    "slug": "jonesville",
    "name": "Jonesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jonesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Jonesville!",
      "location": "Jonesville"
    }
  },
  {
    "slug": "north",
    "name": "North",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in North!",
      "location": "North"
    }
  },
  {
    "slug": "quinby",
    "name": "Quinby",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Quinby, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Quinby!",
      "location": "Quinby"
    }
  },
  {
    "slug": "scranton",
    "name": "Scranton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Scranton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Scranton!",
      "location": "Scranton"
    }
  },
  {
    "slug": "edisto-beach",
    "name": "Edisto Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Edisto Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Edisto Beach!",
      "location": "Edisto Beach"
    }
  },
  {
    "slug": "harleyville",
    "name": "Harleyville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Harleyville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Harleyville!",
      "location": "Harleyville"
    }
  },
  {
    "slug": "sandy-springs",
    "name": "Sandy Springs",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sandy Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sandy Springs!",
      "location": "Sandy Springs"
    }
  },
  {
    "slug": "van-wyck",
    "name": "Van Wyck",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Van Wyck, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Van Wyck!",
      "location": "Van Wyck"
    }
  },
  {
    "slug": "arcadia-lakes",
    "name": "Arcadia Lakes",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Arcadia Lakes, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Arcadia Lakes!",
      "location": "Arcadia Lakes"
    }
  },
  {
    "slug": "Campobello",
    "name": "Campobello",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Campobello, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Campobello!",
      "location": "Campobello"
    }
  },
  {
    "slug": "the-cliffs-valley",
    "name": "The cliffs Valley",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In The cliffs Valley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in The cliffs Valley!",
      "location": "The cliffs Valley"
    }
  },
  {
    "slug": "jefferson",
    "name": "Jefferson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jefferson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Jefferson!",
      "location": "Jefferson"
    }
  },
  {
    "slug": "heath-springs",
    "name": "Heath Springs",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Heath Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Heath Springs!",
      "location": "Heath Springs"
    }
  },
  {
    "slug": "pinewood",
    "name": "Pinewood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pinewood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pinewood!",
      "location": "Pinewood"
    }
  },
  {
    "slug": "east-sumter",
    "name": "East Sumter",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy loam and river basin deposits",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In East Sumter, we focus on the unique arborist needs dictated by Sandy loam and river basin deposits and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/41310ccc491b4763bdeea6ec7a21ba6c_b2247.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in East Sumter!",
      "location": "East Sumter"
    }
  },
  {
    "slug": "warrenville",
    "name": "Warrenville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Warrenville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Warrenville!",
      "location": "Warrenville"
    }
  },
  {
    "slug": "gray-court",
    "name": "Gray court",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gray court, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gray court!",
      "location": "Gray court"
    }
  },
  {
    "slug": "mcclellanville",
    "name": "Mcclellanville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mcclellanville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mcclellanville!",
      "location": "Mcclellanville"
    }
  },
  {
    "slug": "newtown",
    "name": "Newtown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newtown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Newtown!",
      "location": "Newtown"
    }
  },
  {
    "slug": "fripp-island",
    "name": "Fripp Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fripp Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fripp Island!",
      "location": "Fripp Island"
    }
  },
  {
    "slug": "hamer",
    "name": "Hamer",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hamer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hamer!",
      "location": "Hamer"
    }
  },
  {
    "slug": "bucksport",
    "name": "Bucksport",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bucksport, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bucksport!",
      "location": "Bucksport"
    }
  },
  {
    "slug": "swansea",
    "name": "Swansea",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Swansea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Swansea!",
      "location": "Swansea"
    }
  },
  {
    "slug": "norris",
    "name": "Norris",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Norris, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Norris!",
      "location": "Norris"
    }
  },
  {
    "slug": "ridge-spring",
    "name": "Ridge Spring",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridge Spring, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ridge Spring!",
      "location": "Ridge Spring"
    }
  },
  {
    "slug": "summerton",
    "name": "Summerton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Summerton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Summerton!",
      "location": "Summerton"
    }
  },
  {
    "slug": "turbeville",
    "name": "Turbeville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Turbeville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Turbeville!",
      "location": "Turbeville"
    }
  },
  {
    "slug": "lake-view",
    "name": "Lake View",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lake View, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lake View!",
      "location": "Lake View"
    }
  },
  {
    "slug": "debordieu-colony",
    "name": "DeBordieu colony",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In DeBordieu colony, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in DeBordieu colony!",
      "location": "DeBordieu colony"
    }
  },
  {
    "slug": "Clio",
    "name": "Clio",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Clio, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Clio!",
      "location": "Clio"
    }
  },
  {
    "slug": "mayesville",
    "name": "Mayesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mayesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mayesville!",
      "location": "Mayesville"
    }
  },
  {
    "slug": "wallace",
    "name": "Wallace",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wallace, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wallace!",
      "location": "Wallace"
    }
  },
  {
    "slug": "manville",
    "name": "Manville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Manville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Manville!",
      "location": "Manville"
    }
  },
  {
    "slug": "bowman",
    "name": "Bowman",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bowman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bowman!",
      "location": "Bowman"
    }
  },
  {
    "slug": "lincolnville",
    "name": "Lincolnville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lincolnville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lincolnville!",
      "location": "Lincolnville"
    }
  },
  {
    "slug": "pine-ridge-cdp",
    "name": "Pine Ridge cDP",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pine Ridge cDP, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pine Ridge cDP!",
      "location": "Pine Ridge cDP"
    }
  },
  {
    "slug": "unity",
    "name": "Unity",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Unity, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Unity!",
      "location": "Unity"
    }
  },
  {
    "slug": "eastover",
    "name": "Eastover",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Eastover, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Eastover!",
      "location": "Eastover"
    }
  },
  {
    "slug": "chickasaw-point",
    "name": "Chickasaw Point",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In chickasaw Point, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in chickasaw Point!",
      "location": "chickasaw Point"
    }
  },
  {
    "slug": "modoc",
    "name": "Modoc",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Modoc, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Modoc!",
      "location": "Modoc"
    }
  },
  {
    "slug": "Chesnee",
    "name": "Chesnee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Chesnee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Chesnee!",
      "location": "Chesnee"
    }
  },
  {
    "slug": "olanta",
    "name": "Olanta",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Olanta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Olanta!",
      "location": "Olanta"
    }
  },
  {
    "slug": "fairview-crossroads",
    "name": "Fairview crossroads",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fairview crossroads, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fairview crossroads!",
      "location": "Fairview crossroads"
    }
  },
  {
    "slug": "Centenary",
    "name": "Centenary",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Centenary, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Centenary!",
      "location": "Centenary"
    }
  },
  {
    "slug": "bonneau",
    "name": "Bonneau",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bonneau, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bonneau!",
      "location": "Bonneau"
    }
  },
  {
    "slug": "fair-play",
    "name": "Fair Play",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fair Play, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fair Play!",
      "location": "Fair Play"
    }
  },
  {
    "slug": "daufuskie-island",
    "name": "Daufuskie Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Daufuskie Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Daufuskie Island!",
      "location": "Daufuskie Island"
    }
  },
  {
    "slug": "briarcliffe-acres",
    "name": "Briarcliffe Acres",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Briarcliffe Acres, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Briarcliffe Acres!",
      "location": "Briarcliffe Acres"
    }
  },
  {
    "slug": "Coward",
    "name": "Coward",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Coward, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Coward!",
      "location": "Coward"
    }
  },
  {
    "slug": "gilbert",
    "name": "Gilbert",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gilbert, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gilbert!",
      "location": "Gilbert"
    }
  },
  {
    "slug": "furman",
    "name": "Furman",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Furman, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Furman!",
      "location": "Furman"
    }
  },
  {
    "slug": "elliott",
    "name": "Elliott",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elliott, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Elliott!",
      "location": "Elliott"
    }
  },
  {
    "slug": "startex",
    "name": "Startex",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Startex, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Startex!",
      "location": "Startex"
    }
  },
  {
    "slug": "hickory-grove",
    "name": "Hickory Grove",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hickory Grove, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hickory Grove!",
      "location": "Hickory Grove"
    }
  },
  {
    "slug": "lane",
    "name": "Lane",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lane, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lane!",
      "location": "Lane"
    }
  },
  {
    "slug": "summit",
    "name": "Summit",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Summit, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Summit!",
      "location": "Summit"
    }
  },
  {
    "slug": "Carlisle",
    "name": "Carlisle",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Carlisle, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Carlisle!",
      "location": "Carlisle"
    }
  },
  {
    "slug": "brunson",
    "name": "Brunson",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Brunson, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Brunson!",
      "location": "Brunson"
    }
  },
  {
    "slug": "little-rock",
    "name": "Little Rock",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Little Rock, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Little Rock!",
      "location": "Little Rock"
    }
  },
  {
    "slug": "buford",
    "name": "Buford",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Buford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Buford!",
      "location": "Buford"
    }
  },
  {
    "slug": "cross-hill",
    "name": "Cross Hill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cross Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in cross Hill!",
      "location": "cross Hill"
    }
  },
  {
    "slug": "finklea",
    "name": "Finklea",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Finklea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Finklea!",
      "location": "Finklea"
    }
  },
  {
    "slug": "patrick",
    "name": "Patrick",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Patrick, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Patrick!",
      "location": "Patrick"
    }
  },
  {
    "slug": "Cameron",
    "name": "Cameron",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cameron, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cameron!",
      "location": "Cameron"
    }
  },
  {
    "slug": "helena",
    "name": "Helena",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Helena, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Helena!",
      "location": "Helena"
    }
  },
  {
    "slug": "springfield",
    "name": "Springfield",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Springfield, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Springfield!",
      "location": "Springfield"
    }
  },
  {
    "slug": "north-santee",
    "name": "North Santee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In North Santee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in North Santee!",
      "location": "North Santee"
    }
  },
  {
    "slug": "danwood",
    "name": "Danwood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Danwood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Danwood!",
      "location": "Danwood"
    }
  },
  {
    "slug": "ehrhardt",
    "name": "Ehrhardt",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ehrhardt, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ehrhardt!",
      "location": "Ehrhardt"
    }
  },
  {
    "slug": "lockhart",
    "name": "Lockhart",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lockhart, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lockhart!",
      "location": "Lockhart"
    }
  },
  {
    "slug": "little-mountain",
    "name": "Little Mountain",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Little Mountain, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Little Mountain!",
      "location": "Little Mountain"
    }
  },
  {
    "slug": "bethune",
    "name": "Bethune",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bethune, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bethune!",
      "location": "Bethune"
    }
  },
  {
    "slug": "adams-run",
    "name": "Adams Run",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Adams Run, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Adams Run!",
      "location": "Adams Run"
    }
  },
  {
    "slug": "enoree",
    "name": "Enoree",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Enoree, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Enoree!",
      "location": "Enoree"
    }
  },
  {
    "slug": "sheldon",
    "name": "Sheldon",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sheldon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sheldon!",
      "location": "Sheldon"
    }
  },
  {
    "slug": "hilda",
    "name": "Hilda",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hilda, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hilda!",
      "location": "Hilda"
    }
  },
  {
    "slug": "west-union",
    "name": "West Union",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In West Union, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in West Union!",
      "location": "West Union"
    }
  },
  {
    "slug": "hemingway",
    "name": "Hemingway",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hemingway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hemingway!",
      "location": "Hemingway"
    }
  },
  {
    "slug": "grover",
    "name": "Grover",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Grover, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Grover!",
      "location": "Grover"
    }
  },
  {
    "slug": "greeleyville",
    "name": "Greeleyville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Greeleyville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Greeleyville!",
      "location": "Greeleyville"
    }
  },
  {
    "slug": "Cash",
    "name": "Cash",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cash, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cash!",
      "location": "Cash"
    }
  },
  {
    "slug": "society-hill",
    "name": "Society Hill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Society Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Society Hill!",
      "location": "Society Hill"
    }
  },
  {
    "slug": "sharon",
    "name": "Sharon",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sharon, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sharon!",
      "location": "Sharon"
    }
  },
  {
    "slug": "eutawville",
    "name": "Eutawville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Eutawville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Eutawville!",
      "location": "Eutawville"
    }
  },
  {
    "slug": "rowesville",
    "name": "Rowesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rowesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Rowesville!",
      "location": "Rowesville"
    }
  },
  {
    "slug": "alcolu",
    "name": "Alcolu",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Alcolu, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Alcolu!",
      "location": "Alcolu"
    }
  },
  {
    "slug": "south-union",
    "name": "South Union",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In South Union, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in South Union!",
      "location": "South Union"
    }
  },
  {
    "slug": "mount-carmel",
    "name": "Mount carmel",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mount carmel, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mount carmel!",
      "location": "Mount carmel"
    }
  },
  {
    "slug": "Cokesbury",
    "name": "Cokesbury",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cokesbury, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cokesbury!",
      "location": "Cokesbury"
    }
  },
  {
    "slug": "donalds",
    "name": "Donalds",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Donalds, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Donalds!",
      "location": "Donalds"
    }
  },
  {
    "slug": "neeses",
    "name": "Neeses",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Neeses, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Neeses!",
      "location": "Neeses"
    }
  },
  {
    "slug": "ruby",
    "name": "Ruby",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ruby, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ruby!",
      "location": "Ruby"
    }
  },
  {
    "slug": "richburg",
    "name": "Richburg",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Richburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Richburg!",
      "location": "Richburg"
    }
  },
  {
    "slug": "oswego",
    "name": "Oswego",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Oswego, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Oswego!",
      "location": "Oswego"
    }
  },
  {
    "slug": "paxville",
    "name": "Paxville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Paxville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Paxville!",
      "location": "Paxville"
    }
  },
  {
    "slug": "newry",
    "name": "Newry",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Newry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Newry!",
      "location": "Newry"
    }
  },
  {
    "slug": "promised-land",
    "name": "Promised Land",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Promised Land, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Promised Land!",
      "location": "Promised Land"
    }
  },
  {
    "slug": "atlantic-beach",
    "name": "Atlantic Beach",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Atlantic Beach, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Atlantic Beach!",
      "location": "Atlantic Beach"
    }
  },
  {
    "slug": "norway",
    "name": "Norway",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Norway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Norway!",
      "location": "Norway"
    }
  },
  {
    "slug": "mcconnells",
    "name": "Mcconnells",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mcconnells, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mcconnells!",
      "location": "Mcconnells"
    }
  },
  {
    "slug": "gillisonville",
    "name": "Gillisonville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gillisonville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gillisonville!",
      "location": "Gillisonville"
    }
  },
  {
    "slug": "trenton",
    "name": "Trenton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Trenton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Trenton!",
      "location": "Trenton"
    }
  },
  {
    "slug": "lowrys",
    "name": "Lowrys",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lowrys, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lowrys!",
      "location": "Lowrys"
    }
  },
  {
    "slug": "salley",
    "name": "Salley",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Salley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Salley!",
      "location": "Salley"
    }
  },
  {
    "slug": "windsor",
    "name": "Windsor",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Windsor, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Windsor!",
      "location": "Windsor"
    }
  },
  {
    "slug": "perry",
    "name": "Perry",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Perry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Perry!",
      "location": "Perry"
    }
  },
  {
    "slug": "antreville",
    "name": "Antreville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Antreville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Antreville!",
      "location": "Antreville"
    }
  },
  {
    "slug": "russellville",
    "name": "Russellville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Russellville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Russellville!",
      "location": "Russellville"
    }
  },
  {
    "slug": "harbor-island",
    "name": "Harbor Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Harbor Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Harbor Island!",
      "location": "Harbor Island"
    }
  },
  {
    "slug": "reevesville",
    "name": "Reevesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Reevesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Reevesville!",
      "location": "Reevesville"
    }
  },
  {
    "slug": "jacksonboro",
    "name": "Jacksonboro",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jacksonboro, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Jacksonboro!",
      "location": "Jacksonboro"
    }
  },
  {
    "slug": "snelling",
    "name": "Snelling",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Snelling, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Snelling!",
      "location": "Snelling"
    }
  },
  {
    "slug": "rembert",
    "name": "Rembert",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rembert, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Rembert!",
      "location": "Rembert"
    }
  },
  {
    "slug": "glendale",
    "name": "Glendale",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Glendale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Glendale!",
      "location": "Glendale"
    }
  },
  {
    "slug": "ward",
    "name": "Ward",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ward, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ward!",
      "location": "Ward"
    }
  },
  {
    "slug": "ridgeway",
    "name": "Ridgeway",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ridgeway, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ridgeway!",
      "location": "Ridgeway"
    }
  },
  {
    "slug": "lynchburg",
    "name": "Lynchburg",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lynchburg, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lynchburg!",
      "location": "Lynchburg"
    }
  },
  {
    "slug": "daviston",
    "name": "Daviston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Daviston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Daviston!",
      "location": "Daviston"
    }
  },
  {
    "slug": "waterloo",
    "name": "Waterloo",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Waterloo, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Waterloo!",
      "location": "Waterloo"
    }
  },
  {
    "slug": "stuckey",
    "name": "Stuckey",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Stuckey, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Stuckey!",
      "location": "Stuckey"
    }
  },
  {
    "slug": "Converse",
    "name": "Converse",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Converse, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Converse!",
      "location": "Converse"
    }
  },
  {
    "slug": "pauline",
    "name": "Pauline",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pauline, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pauline!",
      "location": "Pauline"
    }
  },
  {
    "slug": "lydia",
    "name": "Lydia",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lydia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lydia!",
      "location": "Lydia"
    }
  },
  {
    "slug": "dacusville",
    "name": "Dacusville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Dacusville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Dacusville!",
      "location": "Dacusville"
    }
  },
  {
    "slug": "Cordova",
    "name": "Cordova",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Cordova, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Cordova!",
      "location": "Cordova"
    }
  },
  {
    "slug": "elko",
    "name": "Elko",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Elko, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Elko!",
      "location": "Elko"
    }
  },
  {
    "slug": "wisacky",
    "name": "Wisacky",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Wisacky, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Wisacky!",
      "location": "Wisacky"
    }
  },
  {
    "slug": "williams",
    "name": "Williams",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Williams, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Williams!",
      "location": "Williams"
    }
  },
  {
    "slug": "gifford",
    "name": "Gifford",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gifford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gifford!",
      "location": "Gifford"
    }
  },
  {
    "slug": "lobeco",
    "name": "Lobeco",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lobeco, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lobeco!",
      "location": "Lobeco"
    }
  },
  {
    "slug": "shiloh",
    "name": "Shiloh",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Shiloh, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Shiloh!",
      "location": "Shiloh"
    }
  },
  {
    "slug": "kline",
    "name": "Kline",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Kline, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Kline!",
      "location": "Kline"
    }
  },
  {
    "slug": "starr",
    "name": "Starr",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Starr, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Starr!",
      "location": "Starr"
    }
  },
  {
    "slug": "Central-pacolet",
    "name": "Central Pacolet",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Central Pacolet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Central Pacolet!",
      "location": "Central Pacolet"
    }
  },
  {
    "slug": "glenn-springs",
    "name": "Glenn Springs",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Glenn Springs, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Glenn Springs!",
      "location": "Glenn Springs"
    }
  },
  {
    "slug": "mulberry",
    "name": "Mulberry",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mulberry, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mulberry!",
      "location": "Mulberry"
    }
  },
  {
    "slug": "monetta",
    "name": "Monetta",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Monetta, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Monetta!",
      "location": "Monetta"
    }
  },
  {
    "slug": "lowndesville",
    "name": "Lowndesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lowndesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lowndesville!",
      "location": "Lowndesville"
    }
  },
  {
    "slug": "olar",
    "name": "Olar",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Olar, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Olar!",
      "location": "Olar"
    }
  },
  {
    "slug": "mount-croghan",
    "name": "Mount croghan",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mount croghan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mount croghan!",
      "location": "Mount croghan"
    }
  },
  {
    "slug": "luray",
    "name": "Luray",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Luray, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Luray!",
      "location": "Luray"
    }
  },
  {
    "slug": "hodges",
    "name": "Hodges",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Hodges, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Hodges!",
      "location": "Hodges"
    }
  },
  {
    "slug": "lodge",
    "name": "Lodge",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Lodge, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Lodge!",
      "location": "Lodge"
    }
  },
  {
    "slug": "troy",
    "name": "Troy",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Troy, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Troy!",
      "location": "Troy"
    }
  },
  {
    "slug": "woodford",
    "name": "Woodford",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Woodford, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Woodford!",
      "location": "Woodford"
    }
  },
  {
    "slug": "bradley",
    "name": "Bradley",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Bradley, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Bradley!",
      "location": "Bradley"
    }
  },
  {
    "slug": "nichols",
    "name": "Nichols",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Nichols, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Nichols!",
      "location": "Nichols"
    }
  },
  {
    "slug": "livingston",
    "name": "Livingston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Livingston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Livingston!",
      "location": "Livingston"
    }
  },
  {
    "slug": "silverstreet",
    "name": "Silverstreet",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Silverstreet, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Silverstreet!",
      "location": "Silverstreet"
    }
  },
  {
    "slug": "salem",
    "name": "Salem",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Salem, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Salem!",
      "location": "Salem"
    }
  },
  {
    "slug": "floydale",
    "name": "Floydale",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Floydale, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Floydale!",
      "location": "Floydale"
    }
  },
  {
    "slug": "mountville",
    "name": "Mountville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Mountville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Mountville!",
      "location": "Mountville"
    }
  },
  {
    "slug": "foreston",
    "name": "Foreston",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Foreston, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Foreston!",
      "location": "Foreston"
    }
  },
  {
    "slug": "sellers",
    "name": "Sellers",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sellers, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sellers!",
      "location": "Sellers"
    }
  },
  {
    "slug": "smoaks",
    "name": "Smoaks",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Smoaks, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Smoaks!",
      "location": "Smoaks"
    }
  },
  {
    "slug": "rockville",
    "name": "Rockville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rockville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Rockville!",
      "location": "Rockville"
    }
  },
  {
    "slug": "scotia",
    "name": "Scotia",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Scotia, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Scotia!",
      "location": "Scotia"
    }
  },
  {
    "slug": "boykin",
    "name": "Boykin",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Boykin, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Boykin!",
      "location": "Boykin"
    }
  },
  {
    "slug": "parksville",
    "name": "Parksville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Parksville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Parksville!",
      "location": "Parksville"
    }
  },
  {
    "slug": "pawleys-island",
    "name": "Pawleys Island",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pawleys Island, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pawleys Island!",
      "location": "Pawleys Island"
    }
  },
  {
    "slug": "zion",
    "name": "Zion",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Zion, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Zion!",
      "location": "Zion"
    }
  },
  {
    "slug": "fingerville",
    "name": "Fingerville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Fingerville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Fingerville!",
      "location": "Fingerville"
    }
  },
  {
    "slug": "rains",
    "name": "Rains",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Rains, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Rains!",
      "location": "Rains"
    }
  },
  {
    "slug": "ware-place",
    "name": "Ware Place",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ware Place, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ware Place!",
      "location": "Ware Place"
    }
  },
  {
    "slug": "sycamore",
    "name": "Sycamore",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Sycamore, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Sycamore!",
      "location": "Sycamore"
    }
  },
  {
    "slug": "ulmer",
    "name": "Ulmer",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ulmer, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ulmer!",
      "location": "Ulmer"
    }
  },
  {
    "slug": "vance",
    "name": "Vance",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Vance, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Vance!",
      "location": "Vance"
    }
  },
  {
    "slug": "pomaria",
    "name": "Pomaria",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Pomaria, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Pomaria!",
      "location": "Pomaria"
    }
  },
  {
    "slug": "browntown",
    "name": "Browntown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Browntown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Browntown!",
      "location": "Browntown"
    }
  },
  {
    "slug": "tamassee",
    "name": "Tamassee",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tamassee, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Tamassee!",
      "location": "Tamassee"
    }
  },
  {
    "slug": "willington",
    "name": "Willington",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Willington, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Willington!",
      "location": "Willington"
    }
  },
  {
    "slug": "peak",
    "name": "Peak",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Peak, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Peak!",
      "location": "Peak"
    }
  },
  {
    "slug": "gramling",
    "name": "Gramling",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Gramling, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Gramling!",
      "location": "Gramling"
    }
  },
  {
    "slug": "clarks-hill",
    "name": "clarks Hill",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In clarks Hill, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in clarks Hill!",
      "location": "clarks Hill"
    }
  },
  {
    "slug": "jamestown",
    "name": "Jamestown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jamestown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Jamestown!",
      "location": "Jamestown"
    }
  },
  {
    "slug": "princeton",
    "name": "Princeton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Princeton, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Princeton!",
      "location": "Princeton"
    }
  },
  {
    "slug": "plum-branch",
    "name": "Plum Branch",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Plum Branch, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Plum Branch!",
      "location": "Plum Branch"
    }
  },
  {
    "slug": "st.-charles",
    "name": "St. charles",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In St. charles, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in St. charles!",
      "location": "St. charles"
    }
  },
  {
    "slug": "tatum",
    "name": "Tatum",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tatum, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Tatum!",
      "location": "Tatum"
    }
  },
  {
    "slug": "tradesville",
    "name": "Tradesville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Tradesville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Tradesville!",
      "location": "Tradesville"
    }
  },
  {
    "slug": "green-sea",
    "name": "Green Sea",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Green Sea, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Green Sea!",
      "location": "Green Sea"
    }
  },
  {
    "slug": "ashwood",
    "name": "Ashwood",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ashwood, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ashwood!",
      "location": "Ashwood"
    }
  },
  {
    "slug": "blenheim",
    "name": "Blenheim",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Blenheim, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Blenheim!",
      "location": "Blenheim"
    }
  },
  {
    "slug": "govan",
    "name": "Govan",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Govan, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Govan!",
      "location": "Govan"
    }
  },
  {
    "slug": "jenkinsville",
    "name": "Jenkinsville",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Jenkinsville, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Jenkinsville!",
      "location": "Jenkinsville"
    }
  },
  {
    "slug": "caesars-head",
    "name": "caesars Head",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In caesars Head, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in caesars Head!",
      "location": "caesars Head"
    }
  },
  {
    "slug": "islandton",
    "name": "Islandton",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Sandy coastal loam",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Islandton, we focus on the unique arborist needs dictated by Sandy coastal loam and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/2e0591b6f8d548e3922ef0c641103b4d_3f078.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Islandton!",
      "location": "Islandton"
    }
  },
  {
    "slug": "coronaca",
    "name": "coronaca",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In coronaca, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in coronaca!",
      "location": "coronaca"
    }
  },
  {
    "slug": "cherokee-falls",
    "name": "cherokee Falls",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cherokee Falls, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in cherokee Falls!",
      "location": "cherokee Falls"
    }
  },
  {
    "slug": "longcreek",
    "name": "Longcreek",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Longcreek, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Longcreek!",
      "location": "Longcreek"
    }
  },
  {
    "slug": "smyrna",
    "name": "Smyrna",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Smyrna, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Smyrna!",
      "location": "Smyrna"
    }
  },
  {
    "slug": "cope",
    "name": "cope",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cope, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in cope!",
      "location": "cope"
    }
  },
  {
    "slug": "cross-anchor",
    "name": "cross Anchor",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In cross Anchor, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in cross Anchor!",
      "location": "cross Anchor"
    }
  },
  {
    "slug": "abney-crossroads",
    "name": "Abney crossroads",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Abney crossroads, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Abney crossroads!",
      "location": "Abney crossroads"
    }
  },
  {
    "slug": "coosawhatchie",
    "name": "coosawhatchie",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In coosawhatchie, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in coosawhatchie!",
      "location": "coosawhatchie"
    }
  },
  {
    "slug": "live-oak",
    "name": "Live Oak",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Live Oak, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Live Oak!",
      "location": "Live Oak"
    }
  },
  {
    "slug": "ketchuptown",
    "name": "Ketchuptown",
    "county": "South Carolina",
    "zip": [
      "29000"
    ],
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
      "lat": 33.8,
      "lng": -81.0
    },
    "soilType": "Heavy Piedmont clay",
    "waterRestrictions": "Standard municipal guidelines",
    "localInsight": "In Ketchuptown, we focus on the unique arborist needs dictated by Heavy Piedmont clay and the local South Carolina climate.",
    "commonYardSize": "0.25 - 0.75 acres",
    "hoaNotes": "Varies by neighborhood; we ensure compliance with local arborist standards.",
    "image": "https://picture-search.skywork.ai/skills/upload/2026-04-16/3076b06256ea4869a1db7b88f8275f72_6fcde.png",
    "testimonial": {
      "name": "Local Resident",
      "quote": "Fast and professional tree service in Ketchuptown!",
      "location": "Ketchuptown"
    }
  }
];