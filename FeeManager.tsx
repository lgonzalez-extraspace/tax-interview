import * as React from 'react';
import FeeFilters from './FeeFilters';
import FeeTable from './FeeTable';
import './styles/style.css';

export default function FeeManager() {
  return (
    <div>
      <FeeFilters></FeeFilters>
      <FeeTable></FeeTable>
    </div>
  );
}
