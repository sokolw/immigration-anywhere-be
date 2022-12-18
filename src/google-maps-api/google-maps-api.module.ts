import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GoogleMapsApiController } from './google-maps-api.controller';
import { GoogleMapsApiService } from './google-maps-api.service';

@Module({
  imports: [HttpModule],
  controllers: [GoogleMapsApiController],
  providers: [GoogleMapsApiService],
})
export class GoogleMapsApiModule {}
