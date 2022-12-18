import { Body, Controller, Post, Get } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationsService } from './services/locations.service';
import { LocationResponse } from './interfaces/location.models';
import { Location } from './schemas/location.schema';

type LocationBd = Location & { _id: string };

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @Post()
  async create(
    @Body() locationDto: LocationDto,
  ): Promise<{ locationId: string }> {
    return {
      locationId: (
        (await this.locationService.create(locationDto)) as LocationBd
      )._id,
    };
  }

  @Get()
  async getAllLocations(): Promise<Array<LocationResponse>> {
    return (await this.locationService.getAllLocations()).map<LocationResponse>(
      (location: LocationBd) => ({
        id: location._id,
        coordinates: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      }),
    );
  }
}
