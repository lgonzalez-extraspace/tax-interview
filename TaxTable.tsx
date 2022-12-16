import * as React from 'react';
import './styles/style.css';
import { data } from './data/data';
import { uniq } from 'lodash';

export default function TaxTable({ selectedState }: { selectedState: string }) {
  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    if (selectedState) {
      setTableData(data.filter((item) => item.state === selectedState));
    } else {
      setTableData(data);
    }
  }, [selectedState]);

  return (
    <div className="tax-table">
      <table>
        <thead>
          <th>State</th>
          <th>City</th>
          <th>Postal</th>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr>
                <td>{item.state}</td>
                <td>{item.city}</td>
                <td>{item.postal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
