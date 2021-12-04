export interface Author {
  name: string
  title: string
  icon: string
}

export interface Testimonial {
  image: string
  stars: number
  content: string
  author: Author
}

type Navigate = () => void

export interface TestimonialsState {
  testimonialIndex: number
  goToNextSlide: Navigate
  goToPrevSlide: Navigate
}

export type TestimonialsAmount = number
