import { Col, Pagination, Row, Spin } from "antd";
import UserInfoCard from "../../../../components/UserInfo/UserInfo";
import { User } from "../../api/api.types";

interface UsersInfoProps {
  setCurrentPage: (arg: number) => void;
  setPageSize: (arg: number) => void;
  isLoading: boolean;
  usersInfo: User[];
  page: number;
  perPage: number;
  total: number;
}
const MobileList = ({
  setCurrentPage,
  setPageSize,
  isLoading,
  usersInfo,
  page,
  perPage,
  total,
}: UsersInfoProps) => {
  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  //This spinner will show to user while the data is fetching
  return isLoading ? (
    <Spin />
  ) : (
    <div className="flex flex-col items-center">
      <Row gutter={[16, 16]}>
        {usersInfo.map((user) => (
          <Col key={user.email} sm={12} xs={24}>
            <UserInfoCard
              className="shadow-md"
              isLoading={isLoading}
              user={user}
            />
          </Col>
        ))}
      </Row>
      <Pagination
      className="mt-5"
        showSizeChanger
        current={page}
        pageSize={perPage}
        onChange={handlePageChange}
        total={total}
      />
    </div>
  );
};

export default MobileList;
