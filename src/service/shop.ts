import { RegisterReviewRequest } from 'models/review/request';
import { ShopRegisterRequest } from 'models/shop/request';
import {
  ShopResponse,
  FetchShopReviewListResponse,
  FetchShopResponse,
} from 'models/shop/response';
import { ShopService } from 'service';

export const fetchShopList = (
  maxLat: number,
  minLat: number,
  maxLng: number,
  minLng: number
) => {
  return ShopService.get<ShopResponse>('/v1/shops', {
    params: {
      maxLat,
      minLat,
      maxLng,
      minLng,
    },
  });
};

export const registerShop = (shopRegisterRequest: ShopRegisterRequest) => {
  return ShopService.post('/v1/shops/shop', shopRegisterRequest);
};

export const getShopById = (id: number) => {
  return ShopService.get<FetchShopResponse>('/v1/shops/shop', {
    params: { id },
  });
};

export const fetchShopReviewList = async (id: number) => {
  const { data } = await ShopService.get<FetchShopReviewListResponse>(
    '/v1/shops/shop/review',
    {
      params: {
        id,
      },
    }
  );

  return data;
};

export const registerReview = async (
  shopId: number,
  registerReviewRequest: RegisterReviewRequest
) => {
  const { content, images } = registerReviewRequest;

  // TODO: Service need to support form data
  const formData = new FormData();

  formData.append('content', content);

  images.forEach((image) => formData.append('image', image));

  return ShopService.post(`/v1/shops/${shopId}/review`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
