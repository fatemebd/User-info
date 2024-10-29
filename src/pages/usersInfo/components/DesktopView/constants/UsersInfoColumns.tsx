import { Avatar, Typography } from "antd";
import { User } from "../../../api/api.types";

export const usersInfoColumns = () => {
  return [
    {
      dataIndex: "avatar",
      key: "avatar",
      render: (avatarUrl: string) => <Avatar src={avatarUrl} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: undefined, record: User) => (
        <Typography>{`${record.first_name} ${record.last_name}`}</Typography>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
};
