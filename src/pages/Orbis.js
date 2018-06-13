import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ListView } from 'patternfly-react';
import classNames from 'classnames';
import { compoundExpansionListItems } from './mocks/orbis-list-data';
import { renderActions } from './util/listViewUtils';

const action1 = rowNum => alert('Action 1 executed on Row ' + rowNum);
const rowActions = [{ label: 'Action 1', fn: action1 }];

class OrbisPage extends React.Component<RouteComponentProps<any>, {}> {
  state = {
    listItems: compoundExpansionListItems
  };

  closeExpand(item) {
    item.expanded = false;
    this.setState({ listItems: compoundExpansionListItems });
  }

  toggleExpand = (item, expandProp) => {
    if (expandProp === item.expandType) {
      item.expanded = !item.expanded;
    } else {
      item.expanded = true;
      item.expandType = expandProp;
    }
    this.setState({ listItems: compoundExpansionListItems });
  };

  renderAdditionalInfoExpandItems(item) {
    return (
      item.properties &&
      Object.keys(item.properties).map(prop => {
        const cssClassNames = classNames('pficon', {
          'pficon-flavor': prop === 'hosts',
          'pficon-cluster': prop === 'clusters',
          'pficon-container-node': prop === 'nodes',
          'pficon-image': prop === 'images'
        });
        return (
          <ListView.InfoItem key={prop}>
            <ListView.Expand
              expanded={item.expanded && prop === item.expandType}
              toggleExpanded={() => {
                this.toggleExpand(item, prop);
              }}
            >
              <span className={cssClassNames} />
              <strong>{item.properties[prop]}</strong> {prop}
            </ListView.Expand>
          </ListView.InfoItem>
        );
      })
    );
  }

  renderItem = (item, index) => {
    const expandText = item.compoundExpandText[item.expandType];
    return (
      <ListView.Item
        key={index}
        actions={renderActions(rowActions, index)}
        checkboxInput={<input type="checkbox" />}
        leftContent={<ListView.Icon name={item.icon} />}
        additionalInfo={this.renderAdditionalInfoExpandItems(item)}
        heading={item.title}
        description={item.description}
        compoundExpand
        compoundExpanded={item.expanded}
        onCloseCompoundExpand={() => this.closeExpand(item)}
      >
        <div className="row">
          <div className="col-md-12">{expandText}</div>
        </div>
      </ListView.Item>
    );
  };

  render() {
    const { listItems } = this.state;
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>Orbis Page</h1>
              <h3>Compound Expansion</h3>
            </div>
          </div>
        </div>
        <ListView>{listItems.map(this.renderItem)}</ListView>;
      </div>
    );
  }
}

export default withRouter(OrbisPage);
