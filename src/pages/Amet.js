import * as React from 'react';
import { Grid } from 'patternfly-react';
import { ListView } from 'patternfly-react';
import { expandableListItems } from './mocks/amet-list-data';
import { renderAdditionalInfoItems, renderActions } from './util/listViewUtils';

const action1 = rowNum => alert('Action 1 executed on Row ' + rowNum);
const action2 = rowNum => alert('Action 2 executed on Row ' + rowNum);

const rowActions = [
  { label: 'Action 1', fn: action1 },
  { label: 'Action 2', fn: action2 }
];

class AmetPage extends React.Component {
  render() {
    return (
        <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>Amet Page</h1>
              <h3>Expandable List View Items</h3>
            </div>
          </div>
        </div>
        <ListView>
          {expandableListItems.map(
            (
              {
                icon,
                title,
                description,
                properties,
                actions,
                expandedContentText
              },
              index
            ) => (
              <ListView.Item
                key={index}
                checkboxInput={<input type="checkbox" />}
                leftContent={<ListView.Icon name={icon} />}
                additionalInfo={renderAdditionalInfoItems(properties)}
                actions={renderActions(rowActions, index)}
                heading={title}
                description={description}
              >
                <div className="row">
                  <div className="col-md-12">{expandedContentText}</div>
                </div>
              </ListView.Item>
            )
          )}
        </ListView>
      </div>
    );
  }
}

export default AmetPage;
