import * as React from 'react'

export interface ImageProps {
  id: string
}

export interface Props
  extends Omit<React.SVGProps<SVGSVGElement>, 'id'>,
    ImageProps {
  Image: React.FC<ImageProps>
}

function Screenshot({ Image, id: imageId, ...other }: Props) {
  const prefixId = (id: string): string => `${imageId}-${id}`

  const mask = prefixId('mask')
  const pattern0 = prefixId('pattern-0')
  const shadow = prefixId('shadow')

  return (
    <svg
      viewBox="0 0 320 626"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...other}
    >
      <g opacity={0.62}>
        <rect
          opacity={0.12}
          x={0.177}
          width={276.953}
          height={600}
          rx={22.312}
          fill="#9EA1AB"
        />
      </g>
      <g filter={`url(#${shadow})`}>
        <rect
          x={28}
          y={26}
          width={291.139}
          height={600}
          rx={33.468}
          fill="#fff"
        />
      </g>
      <mask
        id={mask}
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={41}
        y={39}
        width={265}
        height={574}
      >
        <rect
          x={41.18}
          y={39.187}
          width={264.779}
          height={573.626}
          rx={22.312}
          fill="#fff"
        />
      </mask>
      <g mask={`url(#${mask})`}>
        <path
          fill={`url(#${pattern0})`}
          d="M41.046 39.187h265.046v573.626H41.046z"
        />
      </g>
      <defs>
        <pattern
          id={pattern0}
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref={`#${imageId}`} transform="scale(.00089 .00041)" />
        </pattern>
        <filter
          id={shadow}
          x={10}
          y={23}
          width={391.139}
          height={701}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={32} dy={51} />
          <feGaussianBlur stdDeviation={25} />
          <feColorMatrix values="0 0 0 0 0.435294 0 0 0 0 0.462745 0 0 0 0 0.541176 0 0 0 0.156863 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <Image id={imageId} />
      </defs>
    </svg>
  )
}

export default Screenshot
