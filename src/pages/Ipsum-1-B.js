import * as React from 'react';
import { Grid } from 'patternfly-react';
import { EmptyState } from '../components/EmptyState/EmptyState';

class Ipsum1BPage extends React.Component {
  render() {
    return (
      <Grid fluid className="container-pf-nav-pf-vertical">
        <EmptyState title="Ipsum 1B Page" />
      </Grid>
    );
  }
}

export default Ipsum1BPage;
