export interface Neighborhood {
  slug: string
  name: string
  city: 'Eugene' | 'Springfield'
  description: string
  priceRange: string
  homeTypes: string[]
  highlights: string[]
  lifestyle: string[]
  schools: string[]
  commute: string
  nearbyNeighborhoods: string[]
}

export const eugeneNeighborhoods: Neighborhood[] = [
  {
    slug: 'friendly-area',
    name: 'Friendly Area',
    city: 'Eugene',
    description:
      'The Friendly Area is one of Eugene\'s most beloved neighborhoods, known for its tree-lined streets, friendly community atmosphere, and proximity to the University of Oregon. This vibrant area offers a mix of charming older homes and newer construction, making it perfect for families, students, and professionals alike.',
    priceRange: '$350,000 - $650,000',
    homeTypes: ['Craftsman bungalows', 'Mid-century ranches', 'Newer construction', 'Condos'],
    highlights: [
      'Walking distance to University of Oregon',
      'Friendly Street Farmers Market',
      'Excellent schools in 4J district',
      'Strong sense of community',
      'Beautiful parks and green spaces',
    ],
    lifestyle: [
      'Close to downtown Eugene (5 minutes)',
      'Easy access to I-5',
      'Multiple parks including Friendly Park',
      'Local cafes and restaurants',
      'Active neighborhood association',
    ],
    schools: ['Friendly Elementary', 'Roosevelt Middle School', 'South Eugene High School'],
    commute: '10-15 minutes to downtown, 5 minutes to UO campus',
    nearbyNeighborhoods: ['south-eugene', 'southeast-eugene', 'amazon'],
  },
  {
    slug: 'south-eugene',
    name: 'South Eugene',
    city: 'Eugene',
    description:
      'South Eugene is an established, desirable neighborhood featuring beautiful homes, excellent schools, and easy access to both the University of Oregon and downtown. The area is known for its mature trees, well-maintained properties, and strong community values.',
    priceRange: '$400,000 - $800,000',
    homeTypes: ['Mid-century modern', 'Traditional family homes', 'Luxury properties', 'Ranch-style'],
    highlights: [
      'Top-rated schools in 4J district',
      'Close to Spencer Butte and Ridgeline Trail',
      'Quiet, family-friendly streets',
      'Mature landscaping and trees',
      'Strong property values',
    ],
    lifestyle: [
      '15 minutes to downtown',
      'Easy access to hiking trails',
      'Local shopping and dining',
      'Active community events',
      'Safe, walkable neighborhoods',
    ],
    schools: ['Roosevelt Middle School', 'South Eugene High School', 'Edgewood Elementary'],
    commute: '15-20 minutes to downtown, 10 minutes to UO',
    nearbyNeighborhoods: ['friendly-area', 'southeast-eugene', 'amazon'],
  },
  {
    slug: 'southeast-eugene',
    name: 'Southeast Eugene',
    city: 'Eugene',
    description:
      'Southeast Eugene offers a perfect blend of suburban comfort and urban convenience. This growing area features newer developments alongside established neighborhoods, with excellent schools and family-friendly amenities.',
    priceRange: '$300,000 - $600,000',
    homeTypes: ['New construction', 'Suburban family homes', 'Townhomes', 'Single-family'],
    highlights: [
      'Newer home developments',
      'Great schools and parks',
      'Family-oriented community',
      'Growing retail and services',
      'Good value for homebuyers',
    ],
    lifestyle: [
      '20 minutes to downtown',
      'Easy highway access',
      'Shopping centers nearby',
      'Community parks and recreation',
      'Growing dining scene',
    ],
    schools: ['Edgewood Elementary', 'Cal Young Middle School', 'Sheldon High School'],
    commute: '20-25 minutes to downtown',
    nearbyNeighborhoods: ['south-eugene', 'cal-young', 'bethel'],
  },
  {
    slug: 'bethel',
    name: 'Bethel',
    city: 'Eugene',
    description:
      'The Bethel area is one of Eugene\'s most affordable and family-friendly neighborhoods. Known for its strong community spirit and excellent schools, Bethel offers great value for first-time homebuyers and growing families.',
    priceRange: '$250,000 - $450,000',
    homeTypes: ['Affordable single-family', 'Ranch homes', 'Starter homes', 'Fixer-uppers'],
    highlights: [
      'Excellent value for homebuyers',
      'Strong Bethel School District',
      'Family-friendly atmosphere',
      'Community parks and facilities',
      'Growing area with new development',
    ],
    lifestyle: [
      '25 minutes to downtown',
      'Easy access to Beltline Highway',
      'Local shopping and services',
      'Community events and activities',
      'Parks and recreation facilities',
    ],
    schools: ['Bethel Elementary', 'Shasta Middle School', 'Willamette High School'],
    commute: '25-30 minutes to downtown',
    nearbyNeighborhoods: ['southeast-eugene', 'west-eugene', 'river-road'],
  },
  {
    slug: 'santa-clara',
    name: 'Santa Clara',
    city: 'Eugene',
    description:
      'Santa Clara is a well-established neighborhood in north Eugene, offering a mix of affordable homes and newer developments. The area is known for its convenient location and strong sense of community.',
    priceRange: '$280,000 - $500,000',
    homeTypes: ['Ranch homes', 'Split-level', 'Newer construction', 'Family homes'],
    highlights: [
      'Affordable housing options',
      'Convenient north Eugene location',
      'Good schools',
      'Community parks',
      'Growing area',
    ],
    lifestyle: [
      '20 minutes to downtown',
      'Close to I-5',
      'Local shopping centers',
      'Parks and recreation',
      'Family-friendly',
    ],
    schools: ['Santa Clara Elementary', 'North Eugene High School'],
    commute: '20-25 minutes to downtown',
    nearbyNeighborhoods: ['river-road', 'cal-young', 'coburg-area'],
  },
  {
    slug: 'river-road',
    name: 'River Road',
    city: 'Eugene',
    description:
      'River Road is a diverse neighborhood along the Willamette River, offering a mix of riverfront properties, affordable homes, and established communities. The area provides easy access to both Eugene and Springfield.',
    priceRange: '$250,000 - $550,000',
    homeTypes: ['Riverfront properties', 'Ranch homes', 'Affordable housing', 'Fixer-uppers'],
    highlights: [
      'River access and views',
      'Affordable housing',
      'Convenient location',
      'Diverse community',
      'Potential for renovation',
    ],
    lifestyle: [
      '15 minutes to downtown Eugene',
      '10 minutes to Springfield',
      'River recreation nearby',
      'Local businesses',
      'Easy highway access',
    ],
    schools: ['River Road Elementary', 'North Eugene High School'],
    commute: '15-20 minutes to downtown Eugene',
    nearbyNeighborhoods: ['santa-clara', 'cal-young', 'downtown-eugene'],
  },
  {
    slug: 'cal-young',
    name: 'Cal Young',
    city: 'Eugene',
    description:
      'Cal Young is a popular north Eugene neighborhood known for its excellent schools, family-friendly atmosphere, and convenient location. The area features a mix of established homes and newer developments.',
    priceRange: '$350,000 - $650,000',
    homeTypes: ['Family homes', 'Ranch-style', 'Newer construction', 'Traditional'],
    highlights: [
      'Top-rated Cal Young Middle School',
      'Family-friendly community',
      'Good property values',
      'Safe neighborhoods',
      'Established area',
    ],
    lifestyle: [
      '15 minutes to downtown',
      'Easy access to shopping',
      'Community parks',
      'Local dining options',
      'Active neighborhood',
    ],
    schools: ['Cal Young Middle School', 'Sheldon High School'],
    commute: '15-20 minutes to downtown',
    nearbyNeighborhoods: ['santa-clara', 'river-road', 'southeast-eugene'],
  },
  {
    slug: 'harlow',
    name: 'Harlow',
    city: 'Eugene',
    description:
      'Harlow is a well-established neighborhood in north Eugene, offering affordable homes and a strong community feel. The area is known for its convenience and family-friendly atmosphere.',
    priceRange: '$250,000 - $450,000',
    homeTypes: ['Affordable single-family', 'Ranch homes', 'Starter homes'],
    highlights: [
      'Affordable housing',
      'Good schools',
      'Community feel',
      'Convenient location',
      'Family-friendly',
    ],
    lifestyle: [
      '20 minutes to downtown',
      'Easy highway access',
      'Local shopping',
      'Parks nearby',
      'Growing area',
    ],
    schools: ['Harlow Elementary', 'North Eugene High School'],
    commute: '20-25 minutes to downtown',
    nearbyNeighborhoods: ['cal-young', 'santa-clara', 'river-road'],
  },
  {
    slug: 'ferry-street-bridge',
    name: 'Ferry Street Bridge',
    city: 'Eugene',
    description:
      'The Ferry Street Bridge area offers a unique location connecting Eugene and Springfield, with easy access to both cities. The neighborhood features a mix of residential and commercial properties.',
    priceRange: '$200,000 - $400,000',
    homeTypes: ['Affordable homes', 'Mixed-use', 'Starter homes'],
    highlights: [
      'Bridge between two cities',
      'Affordable options',
      'Convenient location',
      'Easy access to both downtowns',
      'Growing area',
    ],
    lifestyle: [
      '10 minutes to downtown Eugene',
      '5 minutes to Springfield',
      'Highway access',
      'Local businesses',
      'River nearby',
    ],
    schools: ['Various 4J and Springfield schools'],
    commute: '10-15 minutes to either downtown',
    nearbyNeighborhoods: ['downtown-eugene', 'downtown-springfield', 'river-road'],
  },
  {
    slug: 'downtown-eugene',
    name: 'Downtown Eugene',
    city: 'Eugene',
    description:
      'Downtown Eugene offers urban living with access to restaurants, shops, entertainment, and cultural attractions. The area features a mix of condos, lofts, and historic homes.',
    priceRange: '$200,000 - $600,000',
    homeTypes: ['Condos', 'Lofts', 'Historic homes', 'Townhomes'],
    highlights: [
      'Walkable urban lifestyle',
      'Restaurants and entertainment',
      'Cultural attractions',
      'Close to University of Oregon',
      'Vibrant community',
    ],
    lifestyle: [
      'In the heart of Eugene',
      'Walking distance to everything',
      'Public transportation',
      'Nightlife and dining',
      'Arts and culture',
    ],
    schools: ['Downtown area schools', '4J district'],
    commute: 'Walking distance to most amenities',
    nearbyNeighborhoods: ['friendly-area', 'amazon', 'ferry-street-bridge'],
  },
  {
    slug: 'laurel-hill',
    name: 'Laurel Hill',
    city: 'Eugene',
    description:
      'Laurel Hill is an upscale neighborhood in south Eugene, known for its beautiful homes, excellent schools, and proximity to natural areas. The area offers a premium living experience.',
    priceRange: '$500,000 - $1,200,000',
    homeTypes: ['Luxury homes', 'Custom builds', 'Estates', 'High-end properties'],
    highlights: [
      'Upscale neighborhood',
      'Excellent schools',
      'Beautiful homes',
      'Close to nature',
      'Strong property values',
    ],
    lifestyle: [
      '20 minutes to downtown',
      'Close to hiking trails',
      'Quiet, prestigious area',
      'Large lots',
      'Exclusive feel',
    ],
    schools: ['Top-rated 4J schools', 'South Eugene High School'],
    commute: '20-25 minutes to downtown',
    nearbyNeighborhoods: ['south-eugene', 'amazon', 'crest-drive'],
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    city: 'Eugene',
    description:
      'The Amazon neighborhood is one of Eugene\'s most desirable areas, featuring beautiful homes, excellent schools, and proximity to the University of Oregon. The area is known for its tree-lined streets and strong community.',
    priceRange: '$400,000 - $900,000',
    homeTypes: ['Traditional homes', 'Mid-century', 'Luxury properties', 'Family homes'],
    highlights: [
      'Top-rated schools',
      'Close to UO',
      'Beautiful tree-lined streets',
      'Strong community',
      'Excellent property values',
    ],
    lifestyle: [
      '10 minutes to downtown',
      '5 minutes to UO',
      'Amazon Park nearby',
      'Local dining and shopping',
      'Active neighborhood',
    ],
    schools: ['Amazon Elementary', 'Roosevelt Middle School', 'South Eugene High School'],
    commute: '10-15 minutes to downtown, 5 minutes to UO',
    nearbyNeighborhoods: ['friendly-area', 'south-eugene', 'downtown-eugene'],
  },
  {
    slug: 'west-eugene',
    name: 'West Eugene',
    city: 'Eugene',
    description:
      'West Eugene offers affordable housing options and a convenient location with easy access to shopping, services, and employment centers. The area is popular with first-time homebuyers and families.',
    priceRange: '$200,000 - $400,000',
    homeTypes: ['Affordable homes', 'Ranch-style', 'Starter homes', 'Fixer-uppers'],
    highlights: [
      'Most affordable area',
      'Convenient shopping',
      'Employment centers nearby',
      'Good value',
      'Growing community',
    ],
    lifestyle: [
      '15 minutes to downtown',
      'Major shopping centers',
      'Easy highway access',
      'Local services',
      'Family-friendly',
    ],
    schools: ['West Eugene schools', '4J district'],
    commute: '15-20 minutes to downtown',
    nearbyNeighborhoods: ['bethel', 'downtown-eugene', 'ferry-street-bridge'],
  },
  {
    slug: 'crest-drive',
    name: 'Crest Drive',
    city: 'Eugene',
    description:
      'Crest Drive is an established south Eugene neighborhood known for its beautiful homes, excellent schools, and proximity to natural areas. The area offers a premium living experience with strong community values.',
    priceRange: '$450,000 - $950,000',
    homeTypes: ['Upscale homes', 'Traditional', 'Luxury properties', 'Family estates'],
    highlights: [
      'Excellent schools',
      'Beautiful properties',
      'Close to nature',
      'Strong community',
      'Premium location',
    ],
    lifestyle: [
      '20 minutes to downtown',
      'Hiking trails nearby',
      'Quiet, established area',
      'Large lots',
      'Family-oriented',
    ],
    schools: ['Top-rated 4J schools', 'South Eugene High School'],
    commute: '20-25 minutes to downtown',
    nearbyNeighborhoods: ['south-eugene', 'laurel-hill', 'amazon'],
  },
  {
    slug: 'coburg-area',
    name: 'Coburg Area',
    city: 'Eugene',
    description:
      'The Coburg area, located north of Eugene, offers a more rural feel while still being close to city amenities. The area features larger lots, newer developments, and a growing community.',
    priceRange: '$350,000 - $700,000',
    homeTypes: ['Newer construction', 'Larger lots', 'Rural properties', 'Family homes'],
    highlights: [
      'More space and privacy',
      'Newer developments',
      'Growing area',
      'Good schools',
      'Rural feel, city access',
    ],
    lifestyle: [
      '25 minutes to downtown Eugene',
      'Easy I-5 access',
      'More space',
      'Growing community',
      'Country feel',
    ],
    schools: ['Coburg area schools', '4J district'],
    commute: '25-30 minutes to downtown',
    nearbyNeighborhoods: ['santa-clara', 'cal-young', 'river-road'],
  },
]

export const springfieldNeighborhoods: Neighborhood[] = [
  {
    slug: 'thurston',
    name: 'Thurston',
    city: 'Springfield',
    description:
      'Thurston is one of Springfield\'s most popular neighborhoods, known for its excellent schools, family-friendly atmosphere, and strong community spirit. The area offers a mix of affordable and mid-range homes.',
    priceRange: '$250,000 - $500,000',
    homeTypes: ['Family homes', 'Ranch-style', 'Newer construction', 'Starter homes'],
    highlights: [
      'Excellent Thurston High School',
      'Family-friendly community',
      'Good value for homebuyers',
      'Strong schools',
      'Active neighborhood',
    ],
    lifestyle: [
      '15 minutes to downtown Springfield',
      '20 minutes to Eugene',
      'Local shopping',
      'Community parks',
      'Family-oriented',
    ],
    schools: ['Thurston Elementary', 'Thurston Middle School', 'Thurston High School'],
    commute: '15-20 minutes to Springfield, 20-25 to Eugene',
    nearbyNeighborhoods: ['hayden-bridge', 'downtown-springfield', 'mohawk'],
  },
  {
    slug: 'hayden-bridge',
    name: 'Hayden Bridge',
    city: 'Springfield',
    description:
      'Hayden Bridge is a well-established Springfield neighborhood offering affordable homes and a convenient location. The area is known for its community feel and good value for homebuyers.',
    priceRange: '$220,000 - $450,000',
    homeTypes: ['Affordable homes', 'Ranch-style', 'Starter homes', 'Family homes'],
    highlights: [
      'Affordable housing',
      'Good schools',
      'Convenient location',
      'Community parks',
      'Family-friendly',
    ],
    lifestyle: [
      '10 minutes to downtown Springfield',
      '15 minutes to Eugene',
      'Easy highway access',
      'Local shopping',
      'Parks nearby',
    ],
    schools: ['Hayden Bridge Elementary', 'Springfield High School'],
    commute: '10-15 minutes to Springfield, 15-20 to Eugene',
    nearbyNeighborhoods: ['thurston', 'downtown-springfield', 'glenwood'],
  },
  {
    slug: 'glenwood',
    name: 'Glenwood',
    city: 'Springfield',
    description:
      'Glenwood is a unique area between Eugene and Springfield, offering a convenient location with access to both cities. The area features a mix of residential and commercial properties.',
    priceRange: '$200,000 - $400,000',
    homeTypes: ['Affordable homes', 'Mixed-use', 'Starter homes'],
    highlights: [
      'Between two cities',
      'Affordable options',
      'Convenient location',
      'Easy access to both downtowns',
      'Growing area',
    ],
    lifestyle: [
      '10 minutes to Springfield',
      '10 minutes to Eugene',
      'Highway access',
      'Local businesses',
      'River nearby',
    ],
    schools: ['Glenwood area schools'],
    commute: '10-15 minutes to either downtown',
    nearbyNeighborhoods: ['downtown-springfield', 'hayden-bridge', 'ferry-street-bridge'],
  },
  {
    slug: 'downtown-springfield',
    name: 'Downtown Springfield',
    city: 'Springfield',
    description:
      'Downtown Springfield offers urban living with access to restaurants, shops, and cultural attractions. The area is experiencing revitalization and features a mix of historic and newer properties.',
    priceRange: '$180,000 - $400,000',
    homeTypes: ['Historic homes', 'Condos', 'Fixer-uppers', 'Mixed-use'],
    highlights: [
      'Urban lifestyle',
      'Historic character',
      'Growing downtown',
      'Affordable options',
      'Cultural attractions',
    ],
    lifestyle: [
      'In the heart of Springfield',
      'Walking distance to amenities',
      'Local dining and shops',
      'Community events',
      'Revitalizing area',
    ],
    schools: ['Downtown area schools', 'Springfield district'],
    commute: 'Walking distance to downtown amenities',
    nearbyNeighborhoods: ['hayden-bridge', 'glenwood', 'thurston'],
  },
  {
    slug: 'mohawk',
    name: 'Mohawk',
    city: 'Springfield',
    description:
      'The Mohawk area offers a more rural feel while still being close to Springfield and Eugene. The area features larger lots, beautiful natural surroundings, and a peaceful atmosphere.',
    priceRange: '$300,000 - $600,000',
    homeTypes: ['Rural properties', 'Larger lots', 'Custom homes', 'Family estates'],
    highlights: [
      'Rural setting',
      'Larger lots',
      'Natural beauty',
      'Peaceful atmosphere',
      'Good schools',
    ],
    lifestyle: [
      '20 minutes to Springfield',
      '30 minutes to Eugene',
      'Country living',
      'Natural surroundings',
      'Privacy and space',
    ],
    schools: ['Mohawk area schools', 'Springfield district'],
    commute: '20-30 minutes to Springfield',
    nearbyNeighborhoods: ['thurston', 'gateway-area'],
  },
  {
    slug: 'gateway-area',
    name: 'Gateway Area',
    city: 'Springfield',
    description:
      'The Gateway area is a growing part of Springfield, offering newer developments and convenient access to shopping and services. The area is popular with families and first-time homebuyers.',
    priceRange: '$250,000 - $500,000',
    homeTypes: ['Newer construction', 'Family homes', 'Suburban', 'Starter homes'],
    highlights: [
      'Newer developments',
      'Growing area',
      'Good value',
      'Convenient shopping',
      'Family-friendly',
    ],
    lifestyle: [
      '15 minutes to downtown Springfield',
      '20 minutes to Eugene',
      'Shopping centers',
      'Newer amenities',
      'Community parks',
    ],
    schools: ['Gateway area schools', 'Springfield district'],
    commute: '15-20 minutes to Springfield',
    nearbyNeighborhoods: ['thurston', 'mohawk', 'downtown-springfield'],
  },
]

export const allNeighborhoods = [...eugeneNeighborhoods, ...springfieldNeighborhoods]

export function getNeighborhoodBySlug(
  slug: string,
  city: 'Eugene' | 'Springfield'
): Neighborhood | undefined {
  const neighborhoods = city === 'Eugene' ? eugeneNeighborhoods : springfieldNeighborhoods
  return neighborhoods.find((n) => n.slug === slug)
}

export function getNearbyNeighborhoods(
  currentSlug: string,
  city: 'Eugene' | 'Springfield'
): Neighborhood[] {
  const current = getNeighborhoodBySlug(currentSlug, city)
  if (!current) return []

  const neighborhoods = city === 'Eugene' ? eugeneNeighborhoods : springfieldNeighborhoods
  return current.nearbyNeighborhoods
    .map((slug) => neighborhoods.find((n) => n.slug === slug))
    .filter((n): n is Neighborhood => n !== undefined)
    .slice(0, 3)
}

