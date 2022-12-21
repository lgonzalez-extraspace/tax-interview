import * as React from 'react';
import TaxFilters from './TaxFilters';
import TaxTable from './TaxTable';
import '../styles/style.css';
import '../styles/tax-manager.css';
import CreateTaxButton from './CreateTax';

export default function TaxManager() {
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCity, setSelectedCity] = React.useState(null);

  const usStateChanged: (state: string) => void = (state: string) => {
    setSelectedState(state);
  };

  const cityChanged: (city: string) => void = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="tax-manager">
      <div className="title">Tax Manager</div>
      <div className="sub-title">
        <TaxFilters
          usStateChanged={usStateChanged}
          cityChanged={cityChanged}
        ></TaxFilters>
        <CreateTaxButton></CreateTaxButton>
      </div>
      <TaxTable
        selectedState={selectedState}
        selectedCity={selectedCity}
      ></TaxTable>
    </div>
  );
}
