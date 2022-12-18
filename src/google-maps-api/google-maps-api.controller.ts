import { Controller, Get, Query } from '@nestjs/common';
import { GoogleMapsApiService } from './google-maps-api.service';

@Controller('google-maps-api')
export class GoogleMapsApiController {
  constructor(private readonly googleMapsApiService: GoogleMapsApiService) {}

  @Get()
  async getDataFromGoogleApi(@Query() query: any) {
    return this.googleMapsApiService.getDataFromGoogleApi(query);
  }
}
