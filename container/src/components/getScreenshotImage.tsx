import React from 'react'

import { ImageProps } from './Screenshot'
import Image, { Props } from './Section/ImageContainer/Image'

export default function getScreenshotImage(
  props: Omit<Props, 'id' | 'classes'>
) {
  return ({ id }: ImageProps) => {
    return <Image id={id} {...props} />
  }
}
