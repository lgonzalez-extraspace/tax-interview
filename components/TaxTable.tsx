import * as React from 'react';
import '../styles/style.css';
import '../styles/tax-table.css';
import { locationService } from '../services/location-service';

export default function TaxTable({ selectedState }: { selectedState: string }) {
  const data = locationService.getLocations();
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
          <th>Store</th>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr>
                <td>{item.state}</td>
                <td>{item.city}</td>
                <td>{item.store}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
