// @flow
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState/EmptyState'

class AmetPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <EmptyState title="Amet Page" />
      </div>
    )
  }
}

export default withRouter(AmetPage)
