import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../utils/axios";
import { USER_INFO } from "./constants";
import { User } from "./api.types";
import { BasePaginatedResponse, BaseResponse } from "../../../types/server";
import { toast } from "react-toastify";

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
  //Tanstack removes OnError in the latest update

  if (response.status === 404) {
    toast.error("Not Found");
    return;
  } else if (response.status !== 200) {
    toast.error("Something went wrong");
  }
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
    queryKey: [USER_INFO, page, per_page], //the api will be refetch when any of these changes
    queryFn: () => getUsersInfo({ page, per_page }),
  });
};
