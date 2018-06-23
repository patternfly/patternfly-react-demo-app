import React from 'react';
import PropTypes from 'prop-types';
import { Button, EmptyState } from 'patternfly-react';

export const EmptyStateComponent = ({ title }) => (
  <div className="row">
    <div className="col-md-12">
      {title && (
        <div className="page-header">
          <h1>{title}</h1>
        </div>
      )}
      <EmptyState>
        <EmptyState.Icon />
        <EmptyState.Title>Empty State Title</EmptyState.Title>
        <EmptyState.Info>
          This is the Empty State component. The goal of a empty state pattern
          is to provide a good first impression that helps users to achieve
          their goals. It should be used when a view is empty because no objects
          exists and you want to guide the user to perform specific actions.
        </EmptyState.Info>
        <EmptyState.Help onClick={() => {}}>
          For more information please see the {` `}
          <a
            href="http://www.patternfly.org/pattern-library/communication/empty-state/"
            onClick={() => {}}
          >
            design documentation.
          </a>
        </EmptyState.Help>
        <EmptyState.Action>
          <Button bsStyle="primary" bsSize="large" onClick={() => {}}>
            Main Action
          </Button>
        </EmptyState.Action>
        <EmptyState.Action secondary>
          <Button onClick={() => {}} title="Perform an action">
            Secondary Action 1
          </Button>
          <Button onClick={() => {}} title="Perform an action">
            Secondary Action 2
          </Button>
          <Button onClick={() => {}} title="Perform an action">
            Secondary Action 3
          </Button>
        </EmptyState.Action>
      </EmptyState>
    </div>
  </div>
);

EmptyStateComponent.propTypes = {
  title: PropTypes.string
};
EmptyStateComponent.defaultProps = {
  title: ''
};

export default EmptyStateComponent;
