import { uniq } from 'lodash';
import * as React from 'react';
import '../styles/style.css';
import { data } from '../data/data';

export default function FeeFilters({
  usStateChanged,
}: {
  usStateChanged: (state: string) => void;
}) {
  const allStates = uniq(data.map((item) => item.state));
  const allCities = uniq(data.map((item) => item.city));
  const allstore = uniq(data.map((item) => item.store));

  const [selectedState, setSelectedState] = React.useState(allStates[0]);
  const [selectedCity, setSelectedCity] = React.useState(allCities[0]);
  const [selectedstore, setSelectedstore] = React.useState(allstore[0]);

  const [states, setStates] = React.useState(allStates);
  const [cities, setCities] = React.useState(allCities);
  const [stores, setstores] = React.useState(allstore);

  React.useEffect(() => {
    if (selectedState) {
      setCities(
        uniq(
          data
            .filter((item) => item.state === selectedState)
            .map((item) => item.city)
        )
      );

      setstores(
        uniq(
          data
            .filter((item) => item.city === selectedCity)
            .map((item) => item.store)
        )
      );
    }

    usStateChanged(selectedState);
  }, [selectedState, selectedstore, selectedCity]);

  return (
    <div>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select
        value={selectedstore}
        onChange={(e) => setSelectedstore(e.target.value)}
      >
        {stores.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
