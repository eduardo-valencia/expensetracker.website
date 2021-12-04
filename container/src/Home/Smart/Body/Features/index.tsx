import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Feature from './Feature'
import { FeatureInfo } from './types'
import Budgeting from './budgeting.svg'
import Invoice from './invoice.svg'
import MoneyBag from './money-bag.svg'

const styles = () => {
  return createStyles({
    root: {
      padding: 0,
      margin: 0,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Features = ({ classes }: Props) => {
  const renderFeature = (feature: FeatureInfo, index: number): JSX.Element => {
    return <Feature {...feature} key={index} />
  }

  const features: FeatureInfo[] = [
    {
      Icon: MoneyBag,
      title: 'See your current balance',
      description:
        'See the total of your transactions and incomes for the current day, month, or year.',
    },
    {
      Icon: Invoice,
      title: 'View upcoming bills',
      description:
        'View upcoming bills and incomes so you can plan your spending.',
    },
    {
      Icon: Budgeting,
      title: 'Control your spending with budgets',
      description: 'Use the budgets page to keep track of income sources.',
    },
  ]

  const renderedFeatures: JSX.Element[] = features.map(renderFeature)

  return <ul className={classes.root}>{renderedFeatures}</ul>
}

export default withStyles(styles)(Features)
