import * as React from 'react';
import './styles/style.css';

export default function FeeFilters() {
  return (
    <div>
      <select>
        <option>state</option>
      </select>
      <select>
        <option>county</option>
      </select>
      <select>
        <option>city</option>
      </select>
    </div>
  );
}
