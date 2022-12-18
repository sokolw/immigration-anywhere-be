import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  @Prop({ required: true })
  latitude: string;

  @Prop({ required: true })
  longitude: string;

  @Prop({ required: true })
  locationName: string;

  @Prop({ required: true })
  countryId: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
