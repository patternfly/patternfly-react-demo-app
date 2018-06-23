import React from 'react';
import PropTypes from 'prop-types';
import { noop, Table } from 'patternfly-react';

/**
 * Extends PatternFly React selection header cell formatter
 * b/c if the CSV input has conflicting/invalid rows, we should disable select all
 */
const customSelectionHeaderCellFormatter = ({
  cellProps,
  column,
  rows,
  onSelectAllRows
}) => {
  const disabledRows = rows.filter(r => r.invalid || r.conflict).length > 0;
  const unselectedRows = rows.filter(r => !r.selected).length > 0;
  const id = cellProps.id || 'selectAll';
  return (
    <Table.SelectionHeading aria-label={column.header.label} {...cellProps}>
      <Table.Checkbox
        id={id}
        label={column.header.label}
        checked={!unselectedRows && !disabledRows}
        onChange={onSelectAllRows}
        disabled={disabledRows}
      />
    </Table.SelectionHeading>
  );
};
customSelectionHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: PropTypes.object,
  /** column definition */
  column: PropTypes.object,
  /** current table rows */
  rows: PropTypes.array,
  /** on select all rows callback */
  onSelectAllRows: PropTypes.func
};
customSelectionHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  rows: [],
  onSelectAllRows: noop
};
export default customSelectionHeaderCellFormatter;
