import { Coordinate } from 'src/reviews/dto/user-review.dto';

export interface LocationResponse {
  id: string;
  coordinates: Coordinate;
}
