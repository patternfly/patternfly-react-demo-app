import * as React from 'react';
import { ListView, Grid } from 'patternfly-react';
import { expandableListItems } from './mocks/amet-list-data';
import { renderAdditionalInfoItems, renderActions } from './util/listViewUtils';

const action1 = rowNum => alert(`Action 1 executed on Row ${rowNum}`);
const action2 = rowNum => alert(`Action 2 executed on Row ${rowNum}`);

const rowActions = [
  { label: 'Action 1', fn: action1 },
  { label: 'Action 2', fn: action2 }
];

const AmetPage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <Grid.Row>
      <Grid.Col xs={12}>
        <div className="page-header">
          <h1>Amet Page</h1>
        </div>
      </Grid.Col>
      <Grid.Col xs={12}>
        <h3>Expandable List View Items</h3>
      </Grid.Col>
    </Grid.Row>
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
  </Grid>
);

export default AmetPage;
