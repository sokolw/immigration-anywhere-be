import {
  Body,
  Controller,
  Post,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserReviewDto } from './dto/user-review.dto';
import { ReviewsService } from './services/reviews.service';
import { LocationsService } from './../locations/services/locations.service';
import { ReviewDto } from './dto/review.dto';
import { Param } from '@nestjs/common/decorators';
import { ReviewResponse } from './interfaces/review.models';
import { Review } from './schemas/review.schema';

@Controller('reviews')
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService,
    private locationsService: LocationsService,
  ) {}

  @Post()
  async create(@Body() review: ReviewDto): Promise<Review & { id: string }> {
    const createdReview = (await this.reviewsService.create(
      review,
    )) as Review & { _id: string };
    return {
      id: createdReview._id,
      locationId: createdReview.locationId,
      rating: createdReview.rating,
      reviewText: createdReview.reviewText,
      userName: createdReview.userName,
    };
  }

  @Get(':id')
  async getReviewsByLocationId(
    @Param('id') id: string,
  ): Promise<Array<ReviewResponse>> {
    const existLocation = await this.locationsService.getByLocationId(id);

    if (existLocation) {
      const reviews = await this.reviewsService.getReviewsByLocationId(id);
      return reviews.map((review: Review & { _id: string }) => ({
        id: review._id,
        userName: review.userName,
        rating: review.rating,
        reviewText: review.reviewText,
      }));
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  private createReviewDto(userReview: UserReviewDto): ReviewDto {
    return {
      userName: userReview.userName,
      locationId: userReview.locationId,
      rating: userReview.rating,
      reviewText: userReview.reviewText,
    };
  }
}
