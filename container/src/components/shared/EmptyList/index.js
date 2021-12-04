import React from 'react'

export default function EmptyList({ title, description, Svg }) {
  return (
    <div>
      <Svg />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
