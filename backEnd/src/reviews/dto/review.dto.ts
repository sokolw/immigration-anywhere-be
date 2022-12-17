import { IsString } from 'class-validator';

export class ReviewDto {
  @IsString()
  userName: string;

  @IsString()
  locationId: string;

  @IsString()
  rating: string;

  @IsString()
  reviewText: string;
}
