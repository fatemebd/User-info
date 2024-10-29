import { useGetUsersInfo } from "./api";
import { Grid, Typography } from "antd";
import DesktopList from "./components/DesktopView";
import MobileView from "./components/MobileView";
import { useState } from "react";

const UsersInfo = () => {
  const { useBreakpoint } = Grid;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data: usersInfo, isLoading: isUsersInfoLoading } = useGetUsersInfo({
    per_page: pageSize,
    page: currentPage,
  });
  const isDesktop = useBreakpoint().md;

  return (
    <div className="md:px-32 md:py-20 p-12 space-y-5">
        <Typography className="text-2xl font-extrabold">Users details</Typography>
       
      {isDesktop ? (
        <DesktopList
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
          isLoading={isUsersInfoLoading}
          usersInfo={usersInfo?.data!}
          page={currentPage}
          perPage={pageSize}
          total={usersInfo?.total!}
        />
      ) : (
        <MobileView
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
          isLoading={isUsersInfoLoading}
          usersInfo={usersInfo?.data!}
          page={currentPage}
          perPage={pageSize}
          total={usersInfo?.total!}
        />
      )}
    </div>
  );
};

export default UsersInfo;
