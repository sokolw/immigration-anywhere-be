import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class GoogleMapsApiService {
  constructor(private readonly httpService: HttpService) {}

  async getDataFromGoogleApi(query) {
    const req = await this.httpService
      .get('http://api.positionstack.com/v1/forward', {
        params: query,
      })
      .toPromise();
    return req.data;
  }
}
