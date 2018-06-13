import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ListView } from 'patternfly-react';
import { basicListItems } from './mocks/dolor-list-data';
import { renderAdditionalInfoItems } from './util/listViewUtils';

class DolorPage extends React.Component<RouteComponentProps<any>, {}> {
  state = {
    listItems: basicListItems
  };

  toggleItemSelection(item) {
    item.selected = !item.selected;
    this.setState({ listItems: basicListItems });
  }

  render() {
    const { listItems } = this.state;
    const selectedItems = listItems.filter(item => item.selected);
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>Dolor Page</h1>
              <h3>Basic List View</h3>
            </div>
          </div>
        </div>
        <ListView>
          {listItems.map((item, index) => (
            <ListView.Item
              key={index}
              checkboxInput={
                <input
                  type="checkbox"
                  checked={item.selected}
                  onClick={() => this.toggleItemSelection(item)}
                />
              }
              leftContent={<ListView.Icon name={item.icon} />}
              additionalInfo={renderAdditionalInfoItems(item.properties)}
              heading={item.title}
              description={item.description}
            />
          ))}
        </ListView>
        <div className="row">
          <div className="col-md-12">
            <b>Selected Items:</b>
            <br />
            {selectedItems.map(item => <div>{item.title}</div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DolorPage);
