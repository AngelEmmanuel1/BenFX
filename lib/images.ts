export type Category = 'street' | 'events' | 'college' | 'posters'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: Category
}

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/BenPhotos/IMG_6690.jpg', alt: 'Street photography 1', category: 'street' },
  { id: '2', src: '/BenPhotos/IMG_6719.jpg', alt: 'Street photography 2', category: 'street' },
  { id: '3', src: '/BenPhotos/IMG_6753.jpg', alt: 'Street photography 3', category: 'street' },
  { id: '4', src: '/BenPhotos/IMG_6770.jpg', alt: 'Street photography 4', category: 'street' },
  { id: '5', src: '/BenPhotos/IMG_6825.jpg', alt: 'Event photography 1', category: 'events' },
  { id: '6', src: '/BenPhotos/IMG_6828.jpg', alt: 'Event photography 2', category: 'events' },
  { id: '7', src: '/BenPhotos/IMG_7847.jpg', alt: 'Event photography 3', category: 'events' },
  { id: '8', src: '/BenPhotos/IMG_7883.jpg', alt: 'Event photography 4', category: 'events' },
  { id: '9', src: '/BenPhotos/IMG_7896.jpg', alt: 'College photography 1', category: 'college' },
  { id: '10', src: '/BenPhotos/597623575_901860382318058_4098307464239681833_n.jpg', alt: 'College photography 2', category: 'posters' },
  { id: '11', src: '/BenPhotos/597546880_1198384295838157_5522010790364693629_n.png', alt: 'College photography 3', category: 'posters' },
  { id: '12', src: '/BenPhotos/Famu Poster.png', alt: 'FAMU Poster', category: 'posters' },
  { id: '13', src: '/BenPhotos/Untitled-hessss.png', alt: 'College photography 4', category: 'posters' },
  { id: '14', src: '/BenPhotos/BCU COMMIT (Sammy).png', alt: 'BCU Commit Poster', category: 'posters' },
  { id: '15', src: '/BenPhotos/Revival Flyer 2.png', alt: 'Revival Flyer', category: 'posters' },
]

export const featuredImages: GalleryImage[] = [
  galleryImages[0],
  galleryImages[1],
  galleryImages[4],
  galleryImages[5],
  galleryImages[8],
  galleryImages[9],
]
