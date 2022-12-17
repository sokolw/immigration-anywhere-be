import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsModule } from './locations/locations.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    LocationsModule,
    ReviewsModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
