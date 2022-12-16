# Tax and Fee Display Exercise

The Goal of this excersice is to finalize the Tax Manager page which displays a table with the values mathing the selection of the dropdowns

- Example Video: [Example Video](https://watch.screencastify.com/v/SKHfIRqNUVOvEmkg3tSs)
- Reference Images: './reference-images'

## PART 1

- Add Header: Tax Manager (refer to image and video for reference on styles)
- Add Header: Set Location (refer to image and video for reference on styles)
- Create 3 select, the data for each select should be the States, Cities and Stores
  - The data is retrieved from the locationService found in "./services/location-service"
  - The default value for each select should be “No state“, “No City“ and “No Store“ respectively
- Add the Create Fee Button

## PART 2

- When the State dropdown is selected, the Cities dropdown should only show the cities for that State
- Whene the Cities dropdown is selected, the Stores dropdown should only show the stores for that City

## PART 3

- Create a Table to display the store data from the location service
- Filter the values in the table using the selection from the dropdowns
