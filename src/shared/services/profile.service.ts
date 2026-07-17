import { marketPlaceApiClient } from "../api/market-place";
import {
  UpdateProfileParams,
  UpdateProfileResponse,
} from "../interfaces/http/update-profile";

export const updateProfile = async (userData: UpdateProfileParams) => {
  const { data } = await marketPlaceApiClient.put<UpdateProfileResponse>(
    "/user",
    userData,
  );
  return data;
};
