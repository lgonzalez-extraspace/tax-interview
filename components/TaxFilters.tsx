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
  const allPostal = uniq(data.map((item) => item.postal));

  const [selectedState, setSelectedState] = React.useState(allStates[0]);
  const [selectedCity, setSelectedCity] = React.useState(allCities[0]);
  const [selectedPostal, setSelectedPostal] = React.useState(allPostal[0]);

  const [states, setStates] = React.useState(allStates);
  const [cities, setCities] = React.useState(allCities);
  const [postals, setPostals] = React.useState(allPostal);

  React.useEffect(() => {
    if (selectedState) {
      setCities(
        uniq(
          data
            .filter((item) => item.state === selectedState)
            .map((item) => item.city)
        )
      );

      setPostals(
        uniq(
          data
            .filter((item) => item.city === selectedCity)
            .map((item) => item.postal)
        )
      );
    }

    usStateChanged(selectedState);
  }, [selectedState, selectedPostal, selectedCity]);

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
        value={selectedPostal}
        onChange={(e) => setSelectedPostal(e.target.value)}
      >
        {postals.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
