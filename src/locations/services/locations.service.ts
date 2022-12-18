import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location, LocationDocument } from '../schemas/location.schema';
import { LocationDto } from './../dto/location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
  ) {}

  async create(locationDto: LocationDto): Promise<Location> {
    const createdCat = new this.locationModel(locationDto);
    return createdCat.save();
  }

  async getAllLocations(): Promise<Array<Location>> {
    const all = {};
    return this.locationModel.find(all).exec();
  }

  async getByLocationId(locationId: string): Promise<Location | null> {
    return this.locationModel
      .findOne({
        locationId,
      })
      .exec();
  }

  async getByLocationName(name: string): Promise<Location | null> {
    return this.locationModel
      .findOne({
        locationName: name,
      })
      .exec();
  }

  async getByLocationNameAndCountryId(
    locationName: string,
    countryId: string,
  ): Promise<Location | null> {
    return this.locationModel
      .findOne({
        locationName,
        countryId,
      })
      .exec();
  }
}
