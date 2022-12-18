import { Body, Controller, Post, Get } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationsService } from './services/locations.service';
import { LocationResponse } from './interfaces/location.models';
import { Location } from './schemas/location.schema';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';

type LocationBd = Location & { _id: string };

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @Post()
  async create(
    @Body() locationDto: LocationDto,
  ): Promise<{ locationId: string }> {
    const locationExist = await this.locationService.getByLocationName(
      locationDto.locationName,
    );
    if (!locationExist) {
      return {
        locationId: (
          (await this.locationService.create(locationDto)) as LocationBd
        )._id,
      };
    } else {
      throw new HttpException('This location exist!', HttpStatus.CONFLICT);
    }
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
