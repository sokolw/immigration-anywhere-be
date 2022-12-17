import { Body, Controller, Post, Get } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationsService } from './services/locations.service';
import { LocationResponse } from './interfaces/location.models';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  // delete it
  @Post()
  async create(@Body() locationDto: LocationDto): Promise<LocationDto> {
    return this.locationService.create(locationDto);
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
