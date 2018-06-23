import React from 'react';
import PropTypes from 'prop-types';
import { noop, Table } from 'patternfly-react';

const customSelectionCellFormatter = (
  { rowData, rowIndex },
  onSelectRow,
  id,
  label
) => {
  const disabled = rowData.invalid;
  const checkboxId = id || `select${rowIndex}`;
  const checkboxLabel = label || `Select row ${rowIndex}`;
  return (
    <Table.SelectionCell>
      <Table.Checkbox
        id={checkboxId}
        label={checkboxLabel}
        checked={rowData.selected && !disabled}
        onChange={e => {
          onSelectRow(e, rowData);
        }}
        disabled={disabled}
      />
    </Table.SelectionCell>
  );
};
customSelectionCellFormatter.propTypes = {
  /** rowData for this row */
  rowData: PropTypes.object,
  /** rowIndex for this row */
  rowIndex: PropTypes.number.isRequired,
  /** row selected callback */
  onSelectRow: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /** checkbox id override */
  id: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /** checkbox label override */
  label: PropTypes.string // eslint-disable-line react/no-unused-prop-types
};
customSelectionCellFormatter.defaultProps = {
  rowData: {},
  onSelectRow: noop,
  id: '',
  label: ''
};
export default customSelectionCellFormatter;
