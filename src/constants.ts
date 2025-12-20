export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL0FQK9i9p-ll6Os2Sykp2XXmzks4lHJUY5YswWW6p6n4NkoJ6giLc0lgpJWyOo-_N67bcqR9GU-Syia4bG13VWOQq0jnDiwwK4yDlnntiL9LDNTsBfc05-i4TlzIGjzFjIe2bPb8zb3K7t48DkZqEenPB5glEYDe7E6-M1jzEfeCqwuv-ia49_-eiTW_cqLe5RUSiLXsrpvdHWZF59HPQEbyU5llq0_arYdCVQSMWaEdn2vL25BdAyRu9JvYsM0VkyrN-nYPTALcK',
  khmeliSuneli:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDEUd2pR8BlJ3YQlvBmZpapdQ4d490Q71S79UIeR4Y11rFbBMEUBFaMBzR9PTwdr0gOJgphVbwZ7cebkUrari3zXmKfhHxtVx5BS_1R7_Y0XgfqTZHbwYZmFp2PiqmsCTXAbFNG2F6ejWTj40qqIgSZubPvB7vuQgZu1wNXDxbo2qrhSj8qXqfWQ8ATXzzLXt372X1MAFUOlwNco47L_rfWAXMJk2mTShRIstjdJo9-P7GWcBpoRSAKv4WJO2i7b648ZxzW-_hgqDMN',
  svanetiSalt:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDxI2VjAR1LUOW4EbD00Qhh_kIybmHe0fnZF4vKrK6809hj37ZLlDzwQ6Uj30GmMbnBeES6KJvmIGuJWfXbIDPkuHlZ1OeI1D0JxUMsKyH2zvGIPhqCU63un3zQaZO1MRHt6IFskCsqAnNn5AI64Q-YxSrIVDgoquM_EI75TISnoTOv6baCjg8c1kz3QgxWPy7ANmuHfor5y4xudnIq5knDNNDL8TCQr0tST1ua2cLzlgfyzJkDlzjjVhi4QiKx2BH5NFB4fKLblIp8',
  adjika:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA_v9wnbrTmtjTlpky0BlZq4MDjCYh1u9WKkTiaS1PX_AJi-GjBsxzkj1lcyy4IZPMVNrnRvmhwxT0Q-g5BxOMs9T6eaPUmXi2rsmk05-1Y1AB_8eX7M2Mq3fF256ogFxiX64Pu02ZR3N3jeU5JpeifyLbs_AnOOsJlotZJsS8qb99YUKdFzkTNBreS-oHtRC0ortsE4AyxSPMG9yvpIbZ_b-uX3HFgVynIRnigiI2rZ3UFC0VYyRz4avyQExML1GKiwWumnUyX__57',
  imeretianSaffron:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDpZsEL_oJ6K8X7OUm6ZQdUbOUh6mV3sNfcxmYGYHVzEmjs0t1rXZ7eB501M3S6a6EckTsgbOkCX_NjFWJStMbIktzUh5mUI2vFPAuBY25L8Lj6qSCb8DJ6fqVd2n0niZRwJHF0WYrCZawpEHzd9BPQJ7_inj5PZZhYIu9lllqJaEzovsSXhmYrJ_zfl4ixCKKCLFzzsk8YzpHElbFfsXEzLIRNCxfHN-Joizr7Kg6JBCeXGOxjnyUHiRO0E8hVshCOGgPSsy8ZtRPH',
  blueFenugreek:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDDgQKMLF_knNw6DSTKlJu55sgdM4QP4KwOjhfekrdO0XgEMURS6GmSf00k5kw2kpsIKxAocMkBPa3Et58X-9O_Ly2j6VbeNGSAyh-HgylDLD0BY_RpUL8dSIeD4563DD2TdotE5HwRSRtFiK0QfN-SD3CC6RKbkt_VCIwJD71w0Zjr-MvpGP3p2EOwc_2gTzJjB4-jZH-08bvQkTXuKwande_DR789qx3n9tRPx_b45ZcK6yQ4pweUdQdzFTAgh5WxhSbncLGQcMB1',
  georgianCoriander:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBUTQxHYdCYH0WeXB4_S5U0tDhUF6-kvcigBV_7ZJQWuVQdu0m9DFtiHQoICh8-NDPaVIDYNCf-Lud7EASq-J13dX2Stn50I92p7Dauphc2HPlt3ZyTtfw3-PsfHS820aNXgvPj5msoego_s2EJ_3kLsKmJfinqWQ4swQSlG5uki15FGtpEcaCYFeSzL_cydmHBKg7K5wyq4Upov09drM1dlbZENl7yVF3qQ6OEhYk6drMeg4etf2rg0949jbrc-AVWjnMG3SQOd1_l',
};

import { Product } from './types';

export const SIGNATURE_BLENDS: Product[] = [
  {
    id: 'blend-1',
    name: 'Khmeli Suneli',
    description: 'The iconic Georgian 13-spice blend, perfect for stews and meats.',
    price: 12.99,
    image: IMAGES.khmeliSuneli,
    category: 'blend',
  },
  {
    id: 'blend-2',
    name: 'Svaneti Salt',
    description: 'A unique, aromatic salt from the Svaneti mountain region.',
    price: 9.49,
    image: '/img/salt.jpg',
    category: 'blend',
  },
  {
    id: 'blend-3',
    name: 'Adjika',
    description: 'A spicy, flavorful dip made from red peppers, garlic, and herbs.',
    price: 10.99,
    image: IMAGES.adjika,
    category: 'blend',
  },
  // {
  //   id: 'blend-4',
  //   name: 'Khachapuri',
  //   description: 'A spicy, flavorful dip made from red peppers, garlic, and herbs.',
  //   price: 10.99,
  //   image: IMAGES.adjika,
  //   category: 'blend',
  // },
  // {
  //   id: 'blend-2',
  //   name: 'Svaneti Salt',
  //   description: 'A unique, aromatic salt from the Svaneti mountain region.',
  //   price: 9.49,
  //   image: '/img/salt.jpg',
  //   category: 'blend',
  // },
];

export const POPULAR_SPICES: Product[] = [
  {
    id: 'spice-1',
    name: 'Imeretian Saffron',
    description: 'Rich and floral marigold.',
    price: 8.99,
    image: IMAGES.imeretianSaffron,
    category: 'single',
  },
  {
    id: 'spice-2',
    name: 'Blue Fenugreek',
    description: 'Mildly nutty and aromatic.',
    price: 7.49,
    image: IMAGES.blueFenugreek,
    category: 'single',
  },
  {
    id: 'spice-3',
    name: 'Georgian Coriander',
    description: 'Earthy, citrusy, and essential.',
    price: 6.99,
    image: IMAGES.georgianCoriander,
    category: 'single',
  },
];
