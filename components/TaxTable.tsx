import * as React from 'react';
import '../styles/style.css';
import '../styles/tax-table.css';
import { locationService } from '../services/location-service';

export default function TaxTable({
  selectedState,
  selectedCity,
}: {
  selectedState: string;
  selectedCity: string;
}) {
  const data = locationService.getLocations();
  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    console.log({
      selectedState,
      selectedCity,
    });
    if (!selectedCity && !selectedState) {
      setTableData(data);
    } else if (selectedState && selectedCity) {
      setTableData(
        data.filter(
          (item) => item.state === selectedState && item.city === selectedCity
        )
      );
    } else if (!selectedCity) {
      setTableData(data.filter((item) => item.state === selectedState));
    }
  }, [selectedState, selectedCity]);

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
