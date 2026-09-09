import { marketPlaceApiClient } from "@/shared/api/market-place";
import {
  UpdateProfileParams,
  UpdateProfileResponse,
} from "@/shared/interfaces/http/update-profile";

export const updateProfile = async (userData: UpdateProfileParams) => {
  const { data } = await marketPlaceApiClient.put<UpdateProfileResponse>(
    "/user",
    userData,
  );
  return data;
};
