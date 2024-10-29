import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../utils/axios";
import { USER_INFO } from "./constants";
import { User } from "./api.types";
import { BasePaginatedResponse, BaseResponse } from "../../../types/server";

const getUsersInfo = async ({
  page,
  per_page,
}: {
  page: number;
  per_page: number;
}) => {
  const response: BaseResponse<BasePaginatedResponse<User>> =
    await axiosInstance.get(USER_INFO, {
      params: {
        page: page,
        per_page: per_page,
      },
    });
  return response.data;
};

export const useGetUsersInfo = ({
  page,
  per_page,
}: {
  page: number;
  per_page: number;
}) => {
  return useQuery({
    queryKey: [USER_INFO,page,per_page],
    queryFn: () => getUsersInfo({ page, per_page }),
  });
};
