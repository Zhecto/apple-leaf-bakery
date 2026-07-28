// Edit this file to update the site's flavours — no need to touch any
// component or layout code. The homepage reads directly from here.

export type Cookie = {
  name: string;
  description: string;
  tags: string[];
};

export const flavourOfTheMonth = {
  emoji: '🍑',
  name: 'Peach & Thyme Shortbread',
  description:
    'Brown-butter shortbread, roasted peach jam swirl, a whisper of fresh thyme, finished with raw sugar.',
  meta: ['Limited batch', 'Made fresh weekly'],
};

export const houseRegulars: Cookie[] = [
  {
    name: 'Brown Butter Apple Crumble',
    description:
      "Toasted brown butter dough, spiced apple filling, oat crumble top. The one we're named for.",
    tags: ['Contains nuts', 'Fan favourite'],
  },
  {
    name: 'Maple Leaf Snickerdoodle',
    description:
      'Classic cinnamon-sugar snickerdoodle finished with a maple glaze drizzle.',
    tags: ['Kid favourite'],
  },
  {
    name: 'Salted Honey Oat',
    description:
      'Chewy oat cookie, local honey, flaky sea salt. Not too sweet, always gone fast.',
    tags: ['Gluten-free option'],
  },
  {
    name: 'Chai Spice Sugar Cookie',
    description:
      'Soft sugar cookie base loaded with cardamom, clove, and ginger. A little cozy, year-round.',
    tags: ['Customer request'],
  },
  {
    name: 'Triple Chocolate Rye',
    description:
      'Dark rye flour, three kinds of chocolate, a crackled top. For the serious chocolate people.',
    tags: ['Contains nuts'],
  },
  {
    name: 'Lemon Poppyseed Shortbread',
    description:
      'Bright, buttery, and finished with a thin lemon glaze. The lighter one in the box.',
    tags: ['Vegan option'],
  },
];

export const siteInfo = {
  instagramHandle: 'appleleafbakery',
  instagramUrl: 'https://www.instagram.com/appleleafbakery',
  orderFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeo2SjQNXhy3aYu2vzGXAqPFwu6ks2invsv2DbEEQlQ41RWAA/closedform',
  pickupAddress: '67 Sherbrook Street, Winnipeg',
  // TODO: fill in the real pickup cadence (bio text was cut off after "every…")
  pickupSchedule:
    'Pickup days are announced with each monthly drop — watch the Instagram or the order form for dates.',
};
