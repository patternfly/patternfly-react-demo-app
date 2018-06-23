/**
 * Simple client side row filter for VM table
 *
 * activeFilters: {
 *  label: 'VM Name: {value}',
 *  field: {id: "name", title: "VM Name", placeholder: "Filter by VM Name", filterType: "text"},
 *  value: '{value}'
 * }
 *
 * rows: [{
 *  name: 'cfmetest67',
 *  path: 'vCenter/Datacenter',
 *  cluster: 'Raleigh'
 *  ...
 * }]
 */
export default function rowFilter(activeFilters, rows) {
  if (activeFilters && activeFilters.length && rows && rows.length) {
    const filteredRows = [];
    rows.forEach(row => {
      const match = activeFilters.every(
        filter => `${row[filter.field.id] || ''}`.indexOf(filter.value) > -1
      );
      if (match) {
        filteredRows.push(row);
      }
    });
    return filteredRows;
  }
  return rows;
}
