import { Body, Controller, Post, Get } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationsService } from './services/locations.service';
import { LocationResponse } from './interfaces/location.models';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @Post()
  async create(
    @Body() locationDto: LocationDto,
  ): Promise<{ locationId: string }> {
    return {
      locationId: (await this.locationService.create(locationDto)).locationId,
    };
  }

  @Get()
  async getAllLocations(): Promise<Array<LocationResponse>> {
    return (await this.locationService.getAllLocations()).map<LocationResponse>(
      (location) => ({
        id: location.locationId,
        coordinates: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      }),
    );
  }
}
