import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import BaseItem from './Item'
import { Testimonial } from '../../Home/Testimonials/types'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      marginBottom: '2.4375rem',
      [up('md')]: {
        marginBottom: '2.6875rem',
      },
    },
  })
}

export interface BaseProps {
  stars: Testimonial['stars']
  Item?: typeof BaseItem
}

interface Props extends WithStyles<typeof styles>, BaseProps {}

const Stars = ({ classes, stars, Item = BaseItem }: Props) => {
  const addStar = (renderedStars: JSX.Element[], index: number): void => {
    renderedStars.push(<Item key={index} />)
  }

  const renderStars = (): JSX.Element[] => {
    const renderedStars: JSX.Element[] = []
    for (let starIndex = 0; starIndex < stars; starIndex++) {
      addStar(renderedStars, starIndex)
    }
    return renderedStars
  }

  const renderedStars: JSX.Element[] = renderStars()

  return <ul className={classes.root}>{renderedStars}</ul>
}

export default withStyles(styles)(Stars)
