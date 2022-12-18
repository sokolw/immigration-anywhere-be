import { IsString } from 'class-validator';

export class LocationDto {
  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  locationName: string;

  @IsString()
  countryId: string;
}
