import { RefObject } from 'react'

export type ImageProps = {
  src: string
  alt: string
  className?: string
  'data-scroll'?: boolean
  'data-scroll-speed'?: string
  index?: number
}

export type ImageHeadingBlockProps = {
  img: string
  headingOne: string
  headingTwo: string
  className?: string
  classNameTwo?: string
  classNameThree?: string
  classNameFour?: string
  sec4?: boolean
}

export type AccordionItemProps = {
  header: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export type LocomotiveScrollProps = {
  locoScrollRef: RefObject<HTMLElement>
  children: React.ReactNode
}

export type AccordionKeys = 'Peace of mind' | 'Flexibility' | 'Options'
