import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewDto } from '../dto/review.dto';
import { Review, ReviewDocument } from '../schemas/review.schema';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async create(reviewDto: ReviewDto): Promise<Review> {
    const createdCat = new this.reviewModel(reviewDto);
    return createdCat.save();
  }

  async getReviewsByLocationId(locationId: string): Promise<Array<Review>> {
    const filter = { locationId };
    return this.reviewModel.find(filter).exec();
  }
}
