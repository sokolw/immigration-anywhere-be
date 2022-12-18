import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsModule } from './locations/locations.module';
import { ReviewsModule } from './reviews/reviews.module';
import { GoogleMapsApiModule } from './google-maps-api/google-maps-api.module';

@Module({
  imports: [
    LocationsModule,
    ReviewsModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    GoogleMapsApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
