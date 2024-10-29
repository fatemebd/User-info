import { Modal, Table } from "antd";
import { usersInfoColumns } from "./constants/UsersInfoColumns";
import { User } from "../../api/api.types";
import { useState } from "react";
import UserInfoCard from "../../../../components/UserInfo/UserInfo";

interface DesktopListProps {
  setCurrentPage: (arg: number) => void;
  setPageSize: (arg: number) => void;
  isLoading: boolean;
  usersInfo: User[];
  page: number;
  perPage: number;
  total: number;
}

const DesktopList = ({
  setCurrentPage,
  setPageSize,
  isLoading,
  usersInfo,
  page,
  perPage,
  total,
}: DesktopListProps) => {
  const [modalUser, setModalUser] = useState<User>();

  const columns = usersInfoColumns();
  const handleCloseModal = () => setModalUser(undefined);

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <div>
      <Modal
        open={!!modalUser}
        title={`${modalUser?.first_name}'s details`}
        onClose={handleCloseModal}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}
      >
        <UserInfoCard
          className="border-0"
          user={modalUser!}
          isLoading={isLoading}
        />
      </Modal>
      <Table
        onRow={(record) => ({
          onClick: () => setModalUser(record),
          className: "cursor-pointer",
        })}
        loading={isLoading}
        columns={columns}
        dataSource={usersInfo}
        onChange={handleTableChange}
        pagination={{
          current: page,
          pageSize: perPage,
          total: total,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15"],
        }}
      />
    </div>
  );
};

export default DesktopList;
