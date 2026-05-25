export type Category = 'street' | 'events' | 'college'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: Category
}

export const galleryImages: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/seed/street1/800/600', alt: 'Street photography 1', category: 'street' },
  { id: '2', src: 'https://picsum.photos/seed/street2/800/900', alt: 'Street photography 2', category: 'street' },
  { id: '3', src: 'https://picsum.photos/seed/street3/800/600', alt: 'Street photography 3', category: 'street' },
  { id: '4', src: 'https://picsum.photos/seed/street4/800/600', alt: 'Street photography 4', category: 'street' },
  { id: '5', src: 'https://picsum.photos/seed/events1/800/600', alt: 'Event photography 1', category: 'events' },
  { id: '6', src: 'https://picsum.photos/seed/events2/800/900', alt: 'Event photography 2', category: 'events' },
  { id: '7', src: 'https://picsum.photos/seed/events3/800/600', alt: 'Event photography 3', category: 'events' },
  { id: '8', src: 'https://picsum.photos/seed/events4/800/600', alt: 'Event photography 4', category: 'events' },
  { id: '9', src: 'https://picsum.photos/seed/college1/800/600', alt: 'College photography 1', category: 'college' },
  { id: '10', src: 'https://picsum.photos/seed/college2/800/900', alt: 'College photography 2', category: 'college' },
  { id: '11', src: 'https://picsum.photos/seed/college3/800/600', alt: 'College photography 3', category: 'college' },
  { id: '12', src: 'https://picsum.photos/seed/college4/800/600', alt: 'College photography 4', category: 'college' },
]

export const featuredImages: GalleryImage[] = [
  galleryImages[0],
  galleryImages[1],
  galleryImages[4],
  galleryImages[5],
  galleryImages[8],
  galleryImages[9],
]
