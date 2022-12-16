import { data } from '../data/data';
import { Location } from '../models/location-model';

export class LocationService {
  getLocations(): Location[] {
    return data;
  }
}

export const locationService = new LocationService();
