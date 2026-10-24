/**
 * PixelGallery - Production Interactive JavaScript
 * Based on Google Stitch UI/UX Design System
 */

// ==========================================================================
// 1. Curated Photography Dataset (Stitch Architecture & Editorial Visuals)
// ==========================================================================
const GALLERY_DATA = [
  {
    id: 'photo-1',
    title: 'Alpine Dawn Awakening',
    category: 'Nature',
    location: 'Ama Dablam Valley, Himalayas',
    photographer: 'Elena Rostova',
    photographerHandle: '@elenarostova',
    camera: 'Sony A7R V',
    lens: '24-70mm f/2.8 GM',
    shutter: '1/250s',
    iso: 'ISO 100',
    likes: 342,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_mWN0mVIC2D4-uVpwjUzwtH8NHVZt3fucuBFc9yEHxDqAblLA0iaYHIUbKbXJm44U1OB0sy4CUWl5XALFz9tQ1OO5YLCtaw-k7f5URQvNlaTSybtGm5mU360I7yBYC4HqnkyJdWJvLhPKLG19Hz20Gmha3p6Hq9sX2XQefxLfzmoYRj55p8wh8PxTb3M2cidWUb6RY1vNi-DiE1DFH3_Lo05XM3JCHMI6BedyFe3W4GJ9FT2VVP2Dtg',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_mWN0mVIC2D4-uVpwjUzwtH8NHVZt3fucuBFc9yEHxDqAblLA0iaYHIUbKbXJm44U1OB0sy4CUWl5XALFz9tQ1OO5YLCtaw-k7f5URQvNlaTSybtGm5mU360I7yBYC4HqnkyJdWJvLhPKLG19Hz20Gmha3p6Hq9sX2XQefxLfzmoYRj55p8wh8PxTb3M2cidWUb6RY1vNi-DiE1DFH3_Lo05XM3JCHMI6BedyFe3W4GJ9FT2VVP2Dtg',
    tags: ['mountain', 'himalayas', 'sunrise', 'golden hour', 'nature', 'peaks', 'into the wild']
  },
  {
    id: 'photo-2',
    title: 'Arctic Silence',
    category: 'Animals',
    location: 'Svalbard, Norway',
    photographer: 'Astrid Lind',
    photographerHandle: '@astrid_arctic',
    camera: 'Sony A1',
    lens: '400mm f/2.8 GM',
    shutter: '1/2000s',
    iso: 'ISO 160',
    likes: 528,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjMbouA_5pKgYbi0HJlv08mYvccVGZT0NmapddoXLt5pkrjhdkaNgyr5VECh38aqqfmn-GdI9-gfd4d18cFx_jI6n78YOnbTSUoFcVfEfN_bKyROzOs4cOdiZ7ClLdvaPwPurwBI8F_L8NjY-HakhU5ySstODCSXcMyJ0oDBqdzGRA48-3gDQoRnat1d42ck5wLNWYWyaHH2SulfMZgY2uBAGa_2JLzba5zlaAoCVpIIGPntRDtVx7w',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjMbouA_5pKgYbi0HJlv08mYvccVGZT0NmapddoXLt5pkrjhdkaNgyr5VECh38aqqfmn-GdI9-gfd4d18cFx_jI6n78YOnbTSUoFcVfEfN_bKyROzOs4cOdiZ7ClLdvaPwPurwBI8F_L8NjY-HakhU5ySstODCSXcMyJ0oDBqdzGRA48-3gDQoRnat1d42ck5wLNWYWyaHH2SulfMZgY2uBAGa_2JLzba5zlaAoCVpIIGPntRDtVx7w',
    tags: ['animals', 'arctic', 'fox', 'snow', 'wildlife', 'winter', 'into the wild']
  },
  {
    id: 'photo-3',
    title: 'Metropolis Twilight',
    category: 'Architecture',
    location: 'Marina Bay, Singapore',
    photographer: 'Sarah Tan',
    photographerHandle: '@sarahtan_arch',
    camera: 'Hasselblad X2D 100C',
    lens: '38mm f/2.5',
    shutter: '1/60s',
    iso: 'ISO 200',
    likes: 412,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Pnts0HVEN28JGg3-JJdg9OwwFZDbGZZNtiQh-3pV_Z9JGJMu0J268rAt3i7LJUsQGOKagCd8F9Chb4eLrzPAW1qP_EFRXHsGfwbyaArkV5qP0s0djUdHxhKqBc2tW_snfFCyc8N5veo3Ml588avkX0xgoQQpLfebA0753v38Bn1a3R8xSTsAcbwS2LEAID-RnDZb3B_iHiztwTd1o5NlO3emzs4KDdPockkPIemSXh0-5-Ynr63vHA',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Pnts0HVEN28JGg3-JJdg9OwwFZDbGZZNtiQh-3pV_Z9JGJMu0J268rAt3i7LJUsQGOKagCd8F9Chb4eLrzPAW1qP_EFRXHsGfwbyaArkV5qP0s0djUdHxhKqBc2tW_snfFCyc8N5veo3Ml588avkX0xgoQQpLfebA0753v38Bn1a3R8xSTsAcbwS2LEAID-RnDZb3B_iHiztwTd1o5NlO3emzs4KDdPockkPIemSXh0-5-Ynr63vHA',
    tags: ['architecture', 'city', 'night', 'skyline', 'singapore', 'lines', 'urban perspectives']
  },
  {
    id: 'photo-4',
    title: 'Golden Dunes of Sahara',
    category: 'Travel',
    location: 'Sossusvlei, Namibia',
    photographer: 'Tariq Al-Mansoor',
    photographerHandle: '@tariqphoto',
    camera: 'Fujifilm GFX 100S',
    lens: '110mm f/2 R WR',
    shutter: '1/500s',
    iso: 'ISO 100',
    likes: 289,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYh881ssj1Rzgb5tn81p072SgyUQohiye-6iDFHkpkLQ8IzxyrWspoW5DSve2dUuSXOTT9YBtmDbQA1JyVAPHINP5bEZe6HOemx8pM-ljrJme_6UFdMqpT6dmgGl63HrFdwzS2rHVj0KXpGkIH6TxFcMF_bGsp48LEaPfj0OAC5MixrdvUoM1nBBuhcoWMwbUBR6kJ_1fU_vpnBJxW9V2Fq_a78PU-ZSRuILGOtqLGYLq2np39jGoCg',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYh881ssj1Rzgb5tn81p072SgyUQohiye-6iDFHkpkLQ8IzxyrWspoW5DSve2dUuSXOTT9YBtmDbQA1JyVAPHINP5bEZe6HOemx8pM-ljrJme_6UFdMqpT6dmgGl63HrFdwzS2rHVj0KXpGkIH6TxFcMF_bGsp48LEaPfj0OAC5MixrdvUoM1nBBuhcoWMwbUBR6kJ_1fU_vpnBJxW9V2Fq_a78PU-ZSRuILGOtqLGYLq2np39jGoCg',
    tags: ['travel', 'desert', 'dunes', 'sand', 'golden hour', 'warm', 'sunset']
  },
  {
    id: 'photo-5',
    title: 'Misty Pine Forest',
    category: 'Nature',
    location: 'Black Forest, Germany',
    photographer: 'Lukas Meyer',
    photographerHandle: '@lukasmeyer',
    camera: 'Nikon Z7 II',
    lens: '24-70mm f/2.8 S',
    shutter: '1/250s',
    iso: 'ISO 64',
    likes: 367,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCil6D4oriUBnS73BTHbnd1h9mznoWAERkA7BbE_YZDUFORQaYaWe6LGpRMIza_O6K4OqRADy-PJye2p-Rr7qQ4HjkugoS6E5qRJX-RuYE9JkKFnKOFuFTh5Ng5VI_NANqej0GvxoMFSxXgb8GJpPiJMbT1EfX4HdCMRMCvHCIgn5iUYcpFkaoY52048GcH0JnEtJyCwIHJLV8WFC109_jEi50w1rIeMnEtru5ZQukc8mFAUpMYb2n6EA',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCil6D4oriUBnS73BTHbnd1h9mznoWAERkA7BbE_YZDUFORQaYaWe6LGpRMIza_O6K4OqRADy-PJye2p-Rr7qQ4HjkugoS6E5qRJX-RuYE9JkKFnKOFuFTh5Ng5VI_NANqej0GvxoMFSxXgb8GJpPiJMbT1EfX4HdCMRMCvHCIgn5iUYcpFkaoY52048GcH0JnEtJyCwIHJLV8WFC109_jEi50w1rIeMnEtru5ZQukc8mFAUpMYb2n6EA',
    tags: ['nature', 'forest', 'trees', 'mist', 'fog', 'into the wild', 'green']
  },
  {
    id: 'photo-6',
    title: 'Venetian Canal Whispers',
    category: 'Travel',
    location: 'Venice, Italy',
    photographer: 'Matteo Rossi',
    photographerHandle: '@matteorossi',
    camera: 'Leica Q2',
    lens: '28mm f/1.7 Summilux',
    shutter: '1/320s',
    iso: 'ISO 100',
    likes: 495,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFl0ntY1nv4aplrN87QoN429lCWe2rvRs0OxeMLAtZAZ82E2ZIq1lQ0SvNyOkwArrXIwVaVSQLFIdbvBvAUUJobsSY6CpJrNNoCp44NBNw4o41mkUKmAwMII5DJRbL7Mz9YAbOX4pAwE9j3wpfisIT26FClj0miYqKUFUTAkOttqFOjmvPzVNJ-JMx1XAYhI5-4Rv3BcXeDYRS-LgjqfAB2Ltz_rPBls9Cpm8Ot04d0_V9MiGw6OkPgg',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFl0ntY1nv4aplrN87QoN429lCWe2rvRs0OxeMLAtZAZ82E2ZIq1lQ0SvNyOkwArrXIwVaVSQLFIdbvBvAUUJobsSY6CpJrNNoCp44NBNw4o41mkUKmAwMII5DJRbL7Mz9YAbOX4pAwE9j3wpfisIT26FClj0miYqKUFUTAkOttqFOjmvPzVNJ-JMx1XAYhI5-4Rv3BcXeDYRS-LgjqfAB2Ltz_rPBls9Cpm8Ot04d0_V9MiGw6OkPgg',
    tags: ['travel', 'venice', 'italy', 'canal', 'gondola', 'water', 'historic']
  },
  {
    id: 'photo-7',
    title: 'Serengeti Leopard Stare',
    category: 'Animals',
    location: 'Serengeti National Park, Tanzania',
    photographer: 'Arjun Singhania',
    photographerHandle: '@arjunsingh_wild',
    camera: 'Sony A1',
    lens: 'FE 600mm f/4 GM OSS',
    shutter: '1/2500s',
    iso: 'ISO 400',
    likes: 612,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHI5v3Cedcb7sciuV8KIcwncDAqt3vdXMM_AwG_9dKM7e8KHEbAxP21m-CuC1TntJM49RB78eek3al_tTNtE9YyN3CFziWOUsTN3XuYKSt1_hsa3dD_IhlKB_Ac20oNQkC7mNGUH-hxIYxI3YACGhNO8JxqAvXi4x0b4A-hkM6ZMiYB_wg51pgmILb18XJwSzNSE9dw2OROLXzQ_BXlhyQ_VvwrscX2hJgWTNOqi2oHGp_mIw94gkd-Q',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHI5v3Cedcb7sciuV8KIcwncDAqt3vdXMM_AwG_9dKM7e8KHEbAxP21m-CuC1TntJM49RB78eek3al_tTNtE9YyN3CFziWOUsTN3XuYKSt1_hsa3dD_IhlKB_Ac20oNQkC7mNGUH-hxIYxI3YACGhNO8JxqAvXi4x0b4A-hkM6ZMiYB_wg51pgmILb18XJwSzNSE9dw2OROLXzQ_BXlhyQ_VvwrscX2hJgWTNOqi2oHGp_mIw94gkd-Q',
    tags: ['animals', 'leopard', 'wildlife', 'safari', 'cat', 'predator', 'into the wild']
  },
  {
    id: 'photo-8',
    title: 'Nordic Fjord Reflections',
    category: 'Nature',
    location: 'Geirangerfjord, Norway',
    photographer: 'Astrid Lind',
    photographerHandle: '@astrid_arctic',
    camera: 'Canon EOS R5',
    lens: 'RF 15-35mm f/2.8 L',
    shutter: '1/400s',
    iso: 'ISO 100',
    likes: 389,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2cmWsDqFd2FnR9fxk16_RHZfObGHOHS7zELX2Ty2IJf_F3zS4l3R7Lr5fWHVz2AREevLdSG4wA1edI_De5uCCF_3CCYCqPFmdvXZ6qcC2BUSMbJkhyyMyN8c7R_IKImBb27DzmhRGl_ZY9ppjT3lMrS4zI_hGgvNQN_jIorQbbHyRwlSutcvjqE0BcRW9Lgh62m5xcymm45wfKFdJFN3UdFBVD4w_ZgvXsfR30xGxPAJUK9hb_hTScQ',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2cmWsDqFd2FnR9fxk16_RHZfObGHOHS7zELX2Ty2IJf_F3zS4l3R7Lr5fWHVz2AREevLdSG4wA1edI_De5uCCF_3CCYCqPFmdvXZ6qcC2BUSMbJkhyyMyN8c7R_IKImBb27DzmhRGl_ZY9ppjT3lMrS4zI_hGgvNQN_jIorQbbHyRwlSutcvjqE0BcRW9Lgh62m5xcymm45wfKFdJFN3UdFBVD4w_ZgvXsfR30xGxPAJUK9hb_hTScQ',
    tags: ['nature', 'fjord', 'norway', 'water', 'reflection', 'into the wild']
  },
  {
    id: 'photo-9',
    title: 'Geometric Spiral Staircase',
    category: 'Architecture',
    location: 'Munich, Germany',
    photographer: 'Felix Bauer',
    photographerHandle: '@felixbauer',
    camera: 'Leica SL2',
    lens: 'Super-Vario-Elmar-SL 16-35mm',
    shutter: '1/125s',
    iso: 'ISO 200',
    likes: 421,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBloQ86UJyQ5Y1tiyu-uI8xv4co5vnED1tOn6GJ2tTWcIAanXERwqUc5hgvFGffNGz9QQgQfJ3-fDxr4yzIudy9lB3vl2ZUNMJy7RPcXDiwQ4RwfHLXVU_Lg_rOGXA5ua0YGcPSBs_n4D9-U1a3sg5JXeM1YcnCVAgmk_wiD0B9yG-bZ1_B6240PlffK0OKc5GxkyJQ0qU-hFsgxUEoghNT6Z2cRhrPC_o0tjs_bI3S-YCGS83chVTXdg',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBloQ86UJyQ5Y1tiyu-uI8xv4co5vnED1tOn6GJ2tTWcIAanXERwqUc5hgvFGffNGz9QQgQfJ3-fDxr4yzIudy9lB3vl2ZUNMJy7RPcXDiwQ4RwfHLXVU_Lg_rOGXA5ua0YGcPSBs_n4D9-U1a3sg5JXeM1YcnCVAgmk_wiD0B9yG-bZ1_B6240PlffK0OKc5GxkyJQ0qU-hFsgxUEoghNT6Z2cRhrPC_o0tjs_bI3S-YCGS83chVTXdg',
    tags: ['architecture', 'spiral', 'staircase', 'minimalist', 'white', 'urban perspectives']
  },
  {
    id: 'photo-10',
    title: 'Expressions in Shadow',
    category: 'Portraits',
    location: 'SoHo, New York, USA',
    photographer: 'Julian Vance',
    photographerHandle: '@julianvance',
    camera: 'Hasselblad 907X 50C',
    lens: 'XCD 80mm f/1.9',
    shutter: '1/200s',
    iso: 'ISO 100',
    likes: 512,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9QK0Z6R-Yin_nQJp0AMlqwDUsrYBqFjmvi8SgmkYpwf0fMuH2nTPeuSJjODYkJ4xkKigAsNa8jGqMh4q3XxgfYoWrA73MFa5pJeNxeCO_xp-1Luqp9pIFIcxs1FZT8cAXZ-qzGHu06lSom-GfbvoiGsdl1e1VJ9eWXEwaVZkBxncImFvRLMZiYoC0-Z0zUhJJoEmi-uoZwGzrKbRz4gyg6gns-Gu-iSBd-MYLBgcm6_W3XKp7mnDtcg',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9QK0Z6R-Yin_nQJp0AMlqwDUsrYBqFjmvi8SgmkYpwf0fMuH2nTPeuSJjODYkJ4xkKigAsNa8jGqMh4q3XxgfYoWrA73MFa5pJeNxeCO_xp-1Luqp9pIFIcxs1FZT8cAXZ-qzGHu06lSom-GfbvoiGsdl1e1VJ9eWXEwaVZkBxncImFvRLMZiYoC0-Z0zUhJJoEmi-uoZwGzrKbRz4gyg6gns-Gu-iSBd-MYLBgcm6_W3XKp7mnDtcg',
    tags: ['portraits', 'studio', 'shadow', 'lighting', 'face', 'dramatic', 'editorial']
  },
  {
    id: 'photo-11',
    title: 'Kyoto Bamboo Serenity',
    category: 'Travel',
    location: 'Arashiyama, Kyoto, Japan',
    photographer: 'Kenji Takahashi',
    photographerHandle: '@kenjitakahashi',
    camera: 'Sony A7 IV',
    lens: 'FE 35mm f/1.4 GM',
    shutter: '1/160s',
    iso: 'ISO 250',
    likes: 478,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl-dNgksx_n37NbW5vdqFej3JL-so5E1fKNy1J54CxLo2bfBAVcS9iuh4WEsev49FSuATB5OOgFWVjYwiagCEOm_w1rs-CRVSrD5KtSiC0jO7ANYyw-W7eYU_wUesOzSTIYEWtldZ8Y4AfFwbrNAfvjXCTEM7vDwSb4RANjp-8C4UubifpOxTWYNg6TsPWWoZA2yo45nYHbLQZFEzW9Y8Z21HTEWXc3h2FcOubKJQXe2JLeGeo5MHaSw',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl-dNgksx_n37NbW5vdqFej3JL-so5E1fKNy1J54CxLo2bfBAVcS9iuh4WEsev49FSuATB5OOgFWVjYwiagCEOm_w1rs-CRVSrD5KtSiC0jO7ANYyw-W7eYU_wUesOzSTIYEWtldZ8Y4AfFwbrNAfvjXCTEM7vDwSb4RANjp-8C4UubifpOxTWYNg6TsPWWoZA2yo45nYHbLQZFEzW9Y8Z21HTEWXc3h2FcOubKJQXe2JLeGeo5MHaSw',
    tags: ['travel', 'kyoto', 'japan', 'bamboo', 'serenity', 'green', 'golden hour']
  },
  {
    id: 'photo-12',
    title: 'Elders of Omo Valley',
    category: 'Portraits',
    location: 'Omo Valley, Ethiopia',
    photographer: 'Amélie Laurent',
    photographerHandle: '@amelie_laurent',
    camera: 'Canon EOS R3',
    lens: 'RF 85mm f/1.2 L USM',
    shutter: '1/500s',
    iso: 'ISO 100',
    likes: 335,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNwll5KR_YxVqgiy5STaLwL7V1Ub_9GDp6hxEIobd0fej-FkjwV8Y64yjBwAwlT6j-429p78VlI7mtIdPslVo_ERRD2w89bnxrIgBNgvQkY3bbNyfcOeAVajYfymMVdAK5v2jUnnTwIS5BS41pp847qgECeyuOvzdIiMf4P0iwATwYkmuTR3jgY-o6TD3sWx-nx_z5nLwAsuYCVsa0NjokFUknLZaR9vYGqFuaIJphnvUrTlj-_2fW1w',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNwll5KR_YxVqgiy5STaLwL7V1Ub_9GDp6hxEIobd0fej-FkjwV8Y64yjBwAwlT6j-429p78VlI7mtIdPslVo_ERRD2w89bnxrIgBNgvQkY3bbNyfcOeAVajYfymMVdAK5v2jUnnTwIS5BS41pp847qgECeyuOvzdIiMf4P0iwATwYkmuTR3jgY-o6TD3sWx-nx_z5nLwAsuYCVsa0NjokFUknLZaR9vYGqFuaIJphnvUrTlj-_2fW1w',
    tags: ['portraits', 'elder', 'culture', 'ethiopia', 'tribal', 'story', 'wisdom']
  },
  {
    id: 'photo-13',
    title: 'Positano Pastel Cliffs',
    category: 'Travel',
    location: 'Amalfi Coast, Italy',
    photographer: 'Matteo Rossi',
    photographerHandle: '@matteorossi',
    camera: 'Leica Q2',
    lens: '28mm f/1.7',
    shutter: '1/800s',
    iso: 'ISO 100',
    likes: 472,
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    thumb: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    tags: ['travel', 'italy', 'amalfi', 'positano', 'cliffs', 'sea', 'golden hour']
  },
  {
    id: 'photo-14',
    title: 'Ghost of the High Peaks',
    category: 'Animals',
    location: 'Ladakh, Himalayas',
    photographer: 'Arjun Singhania',
    photographerHandle: '@arjunsingh_wild',
    camera: 'Nikon Z9',
    lens: '400mm f/2.8 TC',
    shutter: '1/1600s',
    iso: 'ISO 250',
    likes: 648,
    url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85',
    thumb: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    tags: ['animals', 'snow leopard', 'leopard', 'cat', 'mountain', 'wildlife', 'into the wild']
  },
  {
    id: 'photo-15',
    title: 'Concrete Serenity Arch',
    category: 'Architecture',
    location: 'Tokyo, Japan',
    photographer: 'Hiroshi Sato',
    photographerHandle: '@satohiroshi',
    camera: 'Leica SL2',
    lens: '35mm f/2 APO',
    shutter: '1/400s',
    iso: 'ISO 100',
    likes: 384,
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['architecture', 'concrete', 'minimal', 'museum', 'modern', 'urban perspectives']
  },
  {
    id: 'photo-16',
    title: 'Golden Hour Serenade',
    category: 'Portraits',
    location: 'Provence, France',
    photographer: 'Amélie Laurent',
    photographerHandle: '@amelie_laurent',
    camera: 'Canon EOS R5',
    lens: 'RF 85mm f/1.2 L',
    shutter: '1/1250s',
    iso: 'ISO 100',
    likes: 561,
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85',
    thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    tags: ['portraits', 'golden hour', 'woman', 'warm', 'sunlit', 'freckles', 'natural']
  }
];

// ==========================================================================
// 2. Application State
// ==========================================================================
const appState = {
  activeCategory: 'all',
  searchQuery: '',
  favoritesOnly: false,
  favorites: new Set(),
  filteredPhotos: [...GALLERY_DATA],
  lightboxIndex: 0,
  isLightboxOpen: false,
  isZoomed: false
};

// ==========================================================================
// 3. LocalStorage Persistence
// ==========================================================================
function loadFavorites() {
  try {
    const saved = localStorage.getItem('pixelgallery_favorites');
    if (saved) {
      const arr = JSON.parse(saved);
      appState.favorites = new Set(arr);
    }
  } catch (e) {
    console.warn('Could not read favorites from localStorage:', e);
  }
  updateFavoritesUI();
}

function saveFavorites() {
  try {
    const arr = Array.from(appState.favorites);
    localStorage.setItem('pixelgallery_favorites', JSON.stringify(arr));
  } catch (e) {
    console.warn('Could not save favorites to localStorage:', e);
  }
  updateFavoritesUI();
}

function updateFavoritesUI() {
  const count = appState.favorites.size;
  const badge = document.getElementById('favCountNav');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}

// ==========================================================================
// 4. Toast Notifications
// ==========================================================================
function showToast(message, icon = 'auto_awesome') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[18px] text-primary-fixed">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('active'));

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// ==========================================================================
// 5. Gallery Rendering & Filtering
// ==========================================================================
function applyFilters() {
  const query = appState.searchQuery.trim().toLowerCase();
  const category = appState.activeCategory;

  appState.filteredPhotos = GALLERY_DATA.filter((photo) => {
    // Category match
    const matchesCategory =
      category === 'all' || photo.category.toLowerCase() === category.toLowerCase();

    // Favorites only match
    const matchesFavorites = !appState.favoritesOnly || appState.favorites.has(photo.id);

    // Search query match
    let matchesSearch = true;
    if (query) {
      const titleMatch = photo.title.toLowerCase().includes(query);
      const catMatch = photo.category.toLowerCase().includes(query);
      const locMatch = photo.location.toLowerCase().includes(query);
      const photoMatch = photo.photographer.toLowerCase().includes(query);
      const tagMatch = photo.tags.some((tag) => tag.toLowerCase().includes(query));

      matchesSearch = titleMatch || catMatch || locMatch || photoMatch || tagMatch;
    }

    return matchesCategory && matchesFavorites && matchesSearch;
  });

  renderGalleryGrid();
}

function renderGalleryGrid() {
  const container = document.getElementById('photo-cards-container');
  const counterEl = document.getElementById('items-counter');
  const emptyState = document.getElementById('no-results');

  if (!container) return;

  const total = appState.filteredPhotos.length;
  if (counterEl) {
    counterEl.textContent = `${total} ${total === 1 ? 'item' : 'items'}`;
  }

  if (total === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  const fragment = document.createDocumentFragment();

  appState.filteredPhotos.forEach((photo, index) => {
    const isFav = appState.favorites.has(photo.id);
    const liveLikes = photo.likes + (isFav ? 1 : 0);

    const card = document.createElement('article');
    card.className =
      'photo-card group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_16px_-2px_rgba(22,26,48,0.05)] flex flex-col cursor-pointer';
    card.setAttribute('data-id', photo.id);
    card.setAttribute('data-index', index);
    card.setAttribute('data-category', photo.category);
    card.setAttribute('data-title', photo.title);
    card.setAttribute('tabindex', '0');
    card.setAttribute(
      'aria-label',
      `${photo.title} by ${photo.photographer}, ${photo.category} photography. Click to open full view.`
    );

    card.innerHTML = `
      <div class="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
        <img
          alt="${photo.title} - ${photo.category} photography by ${photo.photographer}"
          class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src="${photo.thumb}"
          loading="lazy"
        />
        <div class="card-skeleton" aria-hidden="true"></div>
        <div class="card-overlay-scrim absolute inset-0 opacity-80 group-hover:opacity-95"></div>

        <!-- Top Right Favorite Action -->
        <button
          type="button"
          aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
          class="favorite-btn ${isFav ? 'is-favorited' : ''} absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface z-10"
          data-id="${photo.id}"
        >
          <span class="material-symbols-outlined text-[17px] ${isFav ? 'text-primary fill-1' : ''}" style="${isFav ? "font-variation-settings: 'FILL' 1;" : ''}">favorite</span>
        </button>

        <!-- Bottom Curatorial Card Scrim -->
        <div class="absolute bottom-2.5 left-2.5 right-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          <span class="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">${photo.category}</span>
          <h3 class="font-title-lg text-[14px] leading-tight text-surface font-semibold truncate">${photo.title}</h3>
          <div class="flex items-center justify-between text-inverse-on-surface/85 text-[11px] mt-0.5">
            <span class="flex items-center gap-1 font-medium">
              <span class="material-symbols-outlined text-[13px] text-tertiary-fixed fill-1" style="font-variation-settings: 'FILL' 1;">favorite</span>
              <span class="like-count">${liveLikes}</span>
            </span>
            <span class="flex items-center gap-1 text-surface/90">
              <span class="material-symbols-outlined text-[16px]">fullscreen</span>
            </span>
          </div>
        </div>
      </div>
    `;

    // Skeleton dismiss on image load
    const img = card.querySelector('img');
    const skeleton = card.querySelector('.card-skeleton');
    if (img.complete) {
      if (skeleton) skeleton.classList.add('hidden');
    } else {
      img.addEventListener('load', () => skeleton && skeleton.classList.add('hidden'));
      img.addEventListener('error', () => {
        if (skeleton) skeleton.classList.add('hidden');
        img.src =
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
      });
    }

    // Favorite click
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(photo.id);
    });

    // Card click -> Open Lightbox
    card.addEventListener('click', () => {
      openLightbox(index);
    });

    // Keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    fragment.appendChild(card);
  });

  container.innerHTML = '';
  container.appendChild(fragment);
}

// ==========================================
// 6. Favorite Action & Like Counter
// ==========================================
function toggleFavorite(photoId) {
  const photo = GALLERY_DATA.find((p) => p.id === photoId);
  if (!photo) return;

  const isFav = appState.favorites.has(photoId);

  if (isFav) {
    appState.favorites.delete(photoId);
    showToast(`Removed "${photo.title}" from favorites`, 'heart_broken');
  } else {
    appState.favorites.add(photoId);
    showToast(`Saved "${photo.title}" to favorites`, 'favorite');
  }

  saveFavorites();

  // Update card buttons in DOM
  const cardBtns = document.querySelectorAll(`.favorite-btn[data-id="${photoId}"]`);
  cardBtns.forEach((btn) => {
    const isNowFav = appState.favorites.has(photoId);
    btn.classList.toggle('is-favorited', isNowFav);
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
      if (isNowFav) {
        icon.classList.add('text-primary', 'fill-1');
        icon.style.fontVariationSettings = "'FILL' 1";
      } else {
        icon.classList.remove('text-primary', 'fill-1');
        icon.style.fontVariationSettings = "'FILL' 0";
      }
    }

    // Update live likes count in card
    const card = btn.closest('.photo-card');
    if (card) {
      const likeCountEl = card.querySelector('.like-count');
      if (likeCountEl) {
        likeCountEl.textContent = photo.likes + (isNowFav ? 1 : 0);
      }
    }
  });

  // Update Lightbox if active
  if (appState.isLightboxOpen) {
    updateLightboxFavState();
  }

  // If in favorites-only view and item removed, refresh
  if (appState.favoritesOnly) {
    applyFilters();
  }
}

// ==========================================
// 7. Fullscreen Lightbox Modal (Stitch Screen 1)
// ==========================================
function openLightbox(index) {
  if (index < 0 || index >= appState.filteredPhotos.length) return;

  appState.lightboxIndex = index;
  appState.isLightboxOpen = true;
  appState.isZoomed = false;

  const lightbox = document.getElementById('imageLightbox');
  if (!lightbox) return;

  document.body.classList.add('lightbox-active');
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');

  updateLightboxContent();
  renderLightboxThumbnails();

  const closeBtn = document.getElementById('lightboxCloseBtn');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  if (!lightbox) return;

  appState.isLightboxOpen = false;
  appState.isZoomed = false;

  const img = document.getElementById('lightboxMainImg');
  if (img) img.classList.remove('zoomed');

  document.body.classList.remove('lightbox-active');
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');

  // Return focus to active card
  const activeCard = document.querySelector(`.photo-card[data-index="${appState.lightboxIndex}"]`);
  if (activeCard) activeCard.focus();
}

function lightboxNext() {
  if (appState.filteredPhotos.length <= 1) return;
  appState.lightboxIndex = (appState.lightboxIndex + 1) % appState.filteredPhotos.length;
  appState.isZoomed = false;
  updateLightboxContent();
  scrollActiveThumbnailIntoView();
}

function lightboxPrev() {
  if (appState.filteredPhotos.length <= 1) return;
  appState.lightboxIndex =
    (appState.lightboxIndex - 1 + appState.filteredPhotos.length) % appState.filteredPhotos.length;
  appState.isZoomed = false;
  updateLightboxContent();
  scrollActiveThumbnailIntoView();
}

function updateLightboxContent() {
  const photo = appState.filteredPhotos[appState.lightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightboxMainImg');
  const counter = document.getElementById('lightboxCounter');
  const title = document.getElementById('lightboxTitle');
  const category = document.getElementById('lightboxCategory');
  const photographer = document.getElementById('lightboxPhotographer');
  const camera = document.getElementById('lightboxCamera');
  const lens = document.getElementById('lightboxLens');
  const shutter = document.getElementById('lightboxShutter');
  const iso = document.getElementById('lightboxIso');
  const likesCount = document.getElementById('lightboxLikesCount');

  if (img) {
    img.classList.remove('zoomed');
    img.src = photo.url;
    img.alt = `${photo.title} by ${photo.photographer}`;
  }

  if (counter) {
    const cur = String(appState.lightboxIndex + 1).padStart(2, '0');
    const tot = String(appState.filteredPhotos.length).padStart(2, '0');
    counter.textContent = `${cur} / ${tot}`;
  }

  if (title) title.textContent = photo.title;
  if (category) category.textContent = photo.category;
  if (photographer) photographer.textContent = photo.photographer;
  if (camera) camera.textContent = photo.camera;
  if (lens) lens.textContent = photo.lens;
  if (shutter) shutter.textContent = photo.shutter;
  if (iso) iso.textContent = photo.iso;

  if (likesCount) {
    const isFav = appState.favorites.has(photo.id);
    likesCount.textContent = (photo.likes + (isFav ? 1 : 0)).toLocaleString();
  }

  updateLightboxFavState();
  updateActiveThumbnailUI();
}

function updateLightboxFavState() {
  const photo = appState.filteredPhotos[appState.lightboxIndex];
  if (!photo) return;

  const favBtn = document.getElementById('lightboxFavBtn');
  if (!favBtn) return;

  const isFav = appState.favorites.has(photo.id);
  const icon = favBtn.querySelector('.material-symbols-outlined');

  if (icon) {
    if (isFav) {
      icon.style.fontVariationSettings = "'FILL' 1";
      icon.classList.remove('text-inverse-on-surface');
      icon.classList.add('text-primary');
    } else {
      icon.style.fontVariationSettings = "'FILL' 0";
      icon.classList.remove('text-primary');
      icon.classList.add('text-inverse-on-surface');
    }
  }

  const likesCount = document.getElementById('lightboxLikesCount');
  if (likesCount) {
    likesCount.textContent = (photo.likes + (isFav ? 1 : 0)).toLocaleString();
  }
}

function renderLightboxThumbnails() {
  const strip = document.getElementById('lightboxThumbStrip');
  if (!strip) return;

  strip.innerHTML = '';
  const fragment = document.createDocumentFragment();

  appState.filteredPhotos.forEach((photo, idx) => {
    const thumbBtn = document.createElement('button');
    thumbBtn.type = 'button';
    thumbBtn.className = `thumb-item shrink-0 relative w-14 h-14 rounded-xl overflow-hidden opacity-60 hover:opacity-90 active:scale-95 transition-all duration-200 ${
      idx === appState.lightboxIndex ? 'active opacity-100' : ''
    }`;
    thumbBtn.setAttribute('data-index', idx);
    thumbBtn.setAttribute('aria-label', `View photo ${idx + 1}: ${photo.title}`);

    thumbBtn.innerHTML = `
      <img src="${photo.thumb}" alt="${photo.title} thumbnail" class="w-full h-full object-cover pointer-events-none" loading="lazy" />
      <div class="thumb-highlight-bar absolute bottom-0 inset-x-0 h-1 bg-primary ${
        idx === appState.lightboxIndex ? '' : 'hidden'
      }"></div>
    `;

    thumbBtn.addEventListener('click', () => {
      appState.lightboxIndex = idx;
      appState.isZoomed = false;
      updateLightboxContent();
      scrollActiveThumbnailIntoView();
    });

    fragment.appendChild(thumbBtn);
  });

  strip.appendChild(fragment);
  scrollActiveThumbnailIntoView();
}

function updateActiveThumbnailUI() {
  const thumbs = document.querySelectorAll('.thumb-item');
  thumbs.forEach((thumb, idx) => {
    const isActive = idx === appState.lightboxIndex;
    thumb.classList.toggle('active', isActive);
    thumb.classList.toggle('opacity-100', isActive);
    thumb.classList.toggle('opacity-60', !isActive);

    const bar = thumb.querySelector('.thumb-highlight-bar');
    if (bar) bar.classList.toggle('hidden', !isActive);
  });
}

function scrollActiveThumbnailIntoView() {
  const activeThumb = document.querySelector(`.thumb-item[data-index="${appState.lightboxIndex}"]`);
  if (activeThumb) {
    activeThumb.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }
}

// Download Active Image
function downloadCurrentImage() {
  const photo = appState.filteredPhotos[appState.lightboxIndex];
  if (!photo) return;

  showToast(`Preparing download: "${photo.title}"...`, 'download');

  fetch(photo.url)
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `PixelGallery-${photo.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      showToast(`Downloaded "${photo.title}"!`, 'check_circle');
    })
    .catch(() => {
      window.open(photo.url, '_blank');
      showToast('Opening high-res photograph in new window', 'open_in_new');
    });
}

// Share Active Image
function shareCurrentImage() {
  const photo = appState.filteredPhotos[appState.lightboxIndex];
  if (!photo) return;

  if (navigator.share) {
    navigator
      .share({
        title: `PixelGallery — ${photo.title}`,
        text: `Explore "${photo.title}" by ${photo.photographer} on PixelGallery`,
        url: photo.url
      })
      .catch(() => {});
  } else {
    navigator.clipboard
      .writeText(photo.url)
      .then(() => {
        showToast('Direct image link copied to clipboard!', 'content_copy');
      })
      .catch(() => {
        showToast('Link ready to share', 'share');
      });
  }
}

// ==========================================
// 8. Touch Swipe Gestures
// ==========================================
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) lightboxPrev();
    else lightboxNext();
  }
}

// ==========================================
// 9. Navigation, Sticky Header & Scroll Spy
// ==========================================
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTopBtn');

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (header) {
        header.classList.toggle('scrolled', y > 40);
      }
      if (backToTop) {
        backToTop.classList.toggle('visible', y > 350);
      }
      updateActiveNavLink();
    },
    { passive: true }
  );
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id], div[id="gallery-grid"]');
  const scrollPos = window.scrollY + 140;

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

function initMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const hamburger = document.getElementById('hamburgerBtn');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const links = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('overflow-hidden');
  };

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  links.forEach((l) => l.addEventListener('click', closeDrawer));
}

// ==========================================
// 10. Featured Collections Interactive Filtering
// ==========================================
function initCollections() {
  const cards = document.querySelectorAll('.collection-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const tag = card.dataset.collectionTag;
      const title = card.dataset.collectionTitle;

      const gallerySection = document.getElementById('gallery-grid');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        appState.searchQuery = tag;
        const searchInput = document.getElementById('gallery-search');
        const clearBtn = document.getElementById('clear-search');
        if (searchInput) searchInput.value = tag;
        if (clearBtn) clearBtn.classList.remove('hidden');

        // Set pills to all
        document.querySelectorAll('.category-btn').forEach((b) => {
          b.classList.toggle('active', b.dataset.category === 'all');
        });

        applyFilters();
        showToast(`Filtered collection: ${title}`, 'collections_bookmark');
      }, 400);
    });
  });
}

// ==========================================
// 11. Global Keyboard Listeners
// ==========================================
function initKeyboardNav() {
  window.addEventListener('keydown', (e) => {
    if (!appState.isLightboxOpen) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      lightboxPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      lightboxNext();
    } else if (e.key === 'f' || e.key === 'F') {
      const photo = appState.filteredPhotos[appState.lightboxIndex];
      if (photo) toggleFavorite(photo.id);
    } else if (e.key === 'd' || e.key === 'D') {
      downloadCurrentImage();
    }
  });
}

// ==========================================
// 12. Main App Initialization
// ==========================================
function initPixelGallery() {
  loadFavorites();

  // Category filter pills
  const categoryPills = document.querySelectorAll('.category-btn');
  categoryPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      appState.activeCategory = cat;
      appState.favoritesOnly = false;

      categoryPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      applyFilters();
    });
  });

  // Search input and clear button
  const searchInput = document.getElementById('gallery-search');
  const clearSearchBtn = document.getElementById('clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', e.target.value.length === 0);
      }
      applyFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      appState.searchQuery = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearSearchBtn.classList.add('hidden');
      applyFilters();
    });
  }

  // Reset Filters Button in empty state
  const resetBtn = document.getElementById('reset-filter-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      appState.searchQuery = '';
      appState.activeCategory = 'all';
      appState.favoritesOnly = false;

      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');

      categoryPills.forEach((b) => {
        b.classList.toggle('active', b.dataset.category === 'all');
      });

      applyFilters();
      showToast('Filters reset to default view', 'refresh');
    });
  }

  // Favorites Nav shortcut
  const navFavBtn = document.getElementById('navFavoritesBtn');
  if (navFavBtn) {
    navFavBtn.addEventListener('click', () => {
      appState.favoritesOnly = !appState.favoritesOnly;
      const gallerySec = document.getElementById('gallery-grid');
      if (gallerySec) gallerySec.scrollIntoView({ behavior: 'smooth' });

      categoryPills.forEach((b) => b.classList.remove('active'));

      if (appState.favoritesOnly) {
        showToast(`Showing ${appState.favorites.size} saved favorites`, 'favorite');
      } else {
        const allBtn = document.querySelector('.category-btn[data-category="all"]');
        if (allBtn) allBtn.classList.add('active');
        appState.activeCategory = 'all';
      }

      applyFilters();
    });
  }

  // Lightbox Controls
  const lightboxModal = document.getElementById('imageLightbox');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxFavBtn = document.getElementById('lightboxFavBtn');
  const lightboxDownloadBtn = document.getElementById('lightboxDownloadBtn');
  const lightboxShareBtn = document.getElementById('lightboxShareBtn');
  const lightboxImg = document.getElementById('lightboxMainImg');

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', lightboxPrev);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', lightboxNext);

  if (lightboxFavBtn) {
    lightboxFavBtn.addEventListener('click', () => {
      const photo = appState.filteredPhotos[appState.lightboxIndex];
      if (photo) toggleFavorite(photo.id);
    });
  }

  if (lightboxDownloadBtn) lightboxDownloadBtn.addEventListener('click', downloadCurrentImage);
  if (lightboxShareBtn) lightboxShareBtn.addEventListener('click', shareCurrentImage);

  // Zoom / Pinch toggle on Lightbox Image
  if (lightboxImg) {
    lightboxImg.addEventListener('click', () => {
      appState.isZoomed = !appState.isZoomed;
      lightboxImg.classList.toggle('zoomed', appState.isZoomed);
    });
  }

  // Backdrop click to close
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop-close')) {
        closeLightbox();
      }
    });

    // Touch swipe gestures
    lightboxModal.addEventListener('touchstart', handleTouchStart, { passive: true });
    lightboxModal.addEventListener('touchend', handleTouchEnd, { passive: true });
  }

  // Back to Top button
  const backToTop = document.getElementById('backToTopBtn');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]');
      if (email && email.value) {
        showToast(`Subscribed ${email.value} to weekly highlights!`, 'mark_email_read');
        email.value = '';
      }
    });
  }

  // Initialize other modules
  initHeaderScroll();
  initMobileMenu();
  initCollections();
  initKeyboardNav();

  // Render initial gallery
  renderGalleryGrid();
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', initPixelGallery);
