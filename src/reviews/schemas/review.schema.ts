import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  locationId: string;

  @Prop({ required: true })
  rating: string;

  @Prop({ required: true })
  reviewText: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
