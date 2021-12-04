import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  List,
  Divider,
  Theme,
} from '@material-ui/core'
import {
  Dashboard,
  DonutLarge,
  InsertChart,
  Category,
  ExitToApp,
  Receipt,
} from '@material-ui/icons'

import Drawer, { Props as DrawerProps } from '../Layout/Nav/Drawer'
import Logo from './Logo'
import ToggleNav from '../ToggleNav'
import { getPaddingX } from '../../utils/styles'
import { linkPaddingX } from './styles'
import Item from './ResponsiveItem'
import { links, apiLinks } from '../../constants/links'

const styles = ({ breakpoints: { up } }: Theme) => {
  const xl = up('xl')
  return createStyles({
    root: {
      padding: '1.5rem 0.75rem',
      width: '15.1875rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [xl]: {
        width: '17.875rem',
      },
    },
    header: {
      marginBottom: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...getPaddingX(linkPaddingX),
    },
    list: {
      padding: 0,
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<DrawerProps, 'classes' | 'children'> {}

const Sidebar = ({ classes, ...other }: Props) => {
  return (
    <Drawer classes={{ paper: classes.root }} anchor="left" {...other}>
      <div>
        <div className={classes.header}>
          <Logo />
          <ToggleNav />
        </div>
        <List className={classes.list}>
          <Item
            icon={<Dashboard />}
            text="Transactions"
            href={links.transactions}
          />
          <Item icon={<DonutLarge />} text="Budgets" href={links.budgets} />
          <Item icon={<Receipt />} text="Bills" href={links.bills} />
          <Item
            icon={<InsertChart />}
            text="Statistics"
            href={links.statistics}
          />
          <Item icon={<Category />} text="Categories" href={links.categories} />
        </List>
      </div>
      <div>
        <Divider />
        <List>
          <Item icon={<ExitToApp />} text="Log Out" href={apiLinks.logOut} />
        </List>
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
