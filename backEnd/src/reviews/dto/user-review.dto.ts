import { IsObject, IsString } from 'class-validator';

export interface Coordinate {
  latitude: string;
  longitude: string;
}

export class UserReviewDto {
  @IsString()
  userName: string;

  @IsString()
  locationId: string;

  @IsString()
  locationName: string;

  @IsString()
  countryId: string;

  @IsObject()
  coordinates: Coordinate;

  @IsString()
  rating: string;

  @IsString()
  reviewText: string;
}
