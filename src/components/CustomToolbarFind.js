import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop, Button, Icon, FormControl } from 'patternfly-react';

/**
 * This is a custom toolbar find w/ limited functionality of Toolbar.Find
 * Note: does not implement the "findNext" and "findPrevious" functionality
 *
 * This should be added in a future demo.
 */
class CustomToolbarFind extends React.Component {
  state = {
    dropdownShown: false,
    currentValue: ''
  };

  onValueKeyPress = keyEvent => {
    const { onEnter } = this.props;
    const { currentValue } = this.state;

    if (keyEvent.key === 'Enter' && onEnter) {
      onEnter(currentValue);
    }
  };

  handleValueChange = event => {
    const { onChange } = this.props;

    this.setState({ currentValue: event.target.value });

    if (onChange) {
      onChange(event.target.value);
    }
  };

  hideDropdown = () => {
    const { onExit } = this.props;
    this.setState({ dropdownShown: false });
    onExit();
  };

  toggleDropdownShown = () => {
    this.setState(prevState => ({ dropdownShown: !prevState.dropdownShown }));
  };

  render() {
    const { dropdownShown, currentValue } = this.state;
    const { className, placeholder } = this.props;

    const classes = classNames('form-group toolbar-pf-find', className);

    const dropdownClasses = classNames('find-pf-dropdown-container', {
      show: dropdownShown
    });

    return (
      <div className={classes}>
        <Button
          bsStyle="link"
          className="btn-find"
          onClick={this.toggleDropdownShown}
        >
          <Icon type="fa" name="search" />
        </Button>
        <div className={dropdownClasses}>
          <FormControl
            type="text"
            id="find"
            value={currentValue}
            placeholder={placeholder}
            onKeyPress={e => this.onValueKeyPress(e)}
            onChange={this.handleValueChange}
          />
          <div className="find-pf-buttons">
            {/* {this.renderCounts()} */}
            <Button
              bsStyle="link"
              className="btn-find-close"
              onClick={this.hideDropdown}
            >
              <Icon type="pf" name="close" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

CustomToolbarFind.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Placeholder text when empty */
  placeholder: PropTypes.string,
  /** Callback function when user hits the enter key */
  onEnter: PropTypes.func,
  /** Callback function when the find value changes */
  onChange: PropTypes.func,
  /** Callback function when exit clicked */
  onExit: PropTypes.func
};

CustomToolbarFind.defaultProps = {
  className: '',
  placeholder: '',
  onEnter: noop,
  onChange: noop,
  onExit: noop
};

export default CustomToolbarFind;
