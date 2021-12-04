import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'

import Footer from './Footer'
import { fetchAndSetUser } from '../../actions/user'
import User from '../../api/types/User'
import NotAuthenticatedError from '../NotAuthenticatedError'
import LoadingIndicator from '../LoadingIndicator'

interface MapStateToProps {
  user: User
}

const styles = () => {
  return createStyles({
    root: {},
  })
}

export interface LayoutProps
  extends MapStateToProps,
    WithStyles<typeof styles> {
  fetchAndSetUser: () => void | Promise<void>
  requireAuth?: boolean
  header?: React.ReactNode
  nav?: React.ReactNode
  className?: string
  children: React.ReactNode
  addPageContainer?: boolean
  footer?: React.ReactNode
  sidebar?: React.ReactNode
}

class Layout extends Component<LayoutProps> {
  componentDidMount() {
    const { fetchAndSetUser, user } = this.props
    if (!user) fetchAndSetUser()
  }

  renderContentChildren = () => {
    const { user, requireAuth, children } = this.props
    if (user || !requireAuth) {
      return children
    } else if (requireAuth && user === null) {
      return <LoadingIndicator />
    }
    return <NotAuthenticatedError />
  }

  renderNavAndContent = (): React.ReactNode => {
    const {
      addPageContainer,
      sidebar = null,
      className = '',
      classes,
    } = this.props
    const children: React.ReactNode = this.renderContentChildren()
    if (addPageContainer) {
      return (
        <div id="nav-and-content">
          {sidebar}
          <main id="main-content" className={className}>
            {children}
          </main>
        </div>
      )
    }
    return <div className={classes.root}>{children}</div>
  }

  render() {
    const { header = null, nav = null, footer = <Footer /> } = this.props
    return (
      <>
        {nav}
        {header}
        {this.renderNavAndContent()}
        {footer}
      </>
    )
  }
}

const mapStateToProps = ({ user }: MapStateToProps) => ({ user })

const ConnectedLayout = connect(mapStateToProps, { fetchAndSetUser })(Layout)

export default withStyles(styles)(ConnectedLayout)
