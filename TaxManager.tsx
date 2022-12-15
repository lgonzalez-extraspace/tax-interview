import * as React from 'react';
import TaxFilters from './TaxFilters';
import TaxTable from './TaxTable';
import './styles/style.css';
import './styles/tax-manager.css';

export default function TaxManager() {
  return (
    <div className="tax-manager">
      <div className="title">Tax Manager</div>
      <TaxFilters></TaxFilters>
      <TaxTable></TaxTable>
    </div>
  );
}
