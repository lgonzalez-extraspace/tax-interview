import * as React from 'react';
import TaxFilters from './TaxFilters';
import TaxTable from './TaxTable';
import '../styles/style.css';
import '../styles/tax-manager.css';

export default function TaxManager() {
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCity, setSelectedCity] = React.useState(null);

  const usStateChanged: (state: string) => void = (state: string) => {
    setSelectedState(state);
  };

  return (
    <div className="tax-manager">
      <div className="title">Tax Manager</div>
      <TaxFilters usStateChanged={usStateChanged}></TaxFilters>
      <TaxTable selectedState={selectedState}></TaxTable>
    </div>
  );
}
