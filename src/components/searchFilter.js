/**
 * Simple client side search filter for VM table
 *
 * rows: [{
 *  name: 'cfmetest67',
 *  path: 'vCenter/Datacenter',
 *  cluster: 'Raleigh'
 *  ...
 * }]
 */
export default function searchFilter(searchFilterValue, rows) {
  if (searchFilterValue && rows && rows.length) {
    const filteredRows = [];
    rows.forEach(row => {
      const match = Object.values(row).some(
        value => `${value || ''}`.indexOf(searchFilterValue) > -1
      );
      if (match) {
        filteredRows.push(row);
      }
    });
    return filteredRows;
  }
  return rows;
}
