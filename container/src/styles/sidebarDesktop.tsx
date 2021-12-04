import { withStyles, createStyles, Theme } from '@material-ui/core'
import { showAppSidebarBreakpoint } from '../components/Sidebar/styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  const showSidebarUp = up(showAppSidebarBreakpoint)
  return createStyles({
    root: {
      display: 'none',
      [showSidebarUp]: {
        display: 'flex',
        marginRight: '15.1875rem',
      },
    },
  })
}

const addDesktopSidebarHideStyles = withStyles(styles)

export default addDesktopSidebarHideStyles
