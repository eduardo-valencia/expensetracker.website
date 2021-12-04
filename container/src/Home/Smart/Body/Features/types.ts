import React from 'react'

interface IconProps {
  className: string
}

export interface FeatureInfo {
  title: string
  description: string
  Icon:
    | React.FunctionComponent<IconProps>
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
