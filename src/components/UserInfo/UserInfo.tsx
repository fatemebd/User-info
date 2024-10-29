import { Avatar, Card, Typography } from "antd";
import { User } from "../../pages/usersInfo/api/api.types";
import { twMerge } from "tailwind-merge";

//This is the user info card usinf in mobile view and table modal

interface UserInfoCardProps {
  user: User;
  isLoading: boolean;
  className?: string;
}
const UserInfoCard = ({ user, isLoading, className }: UserInfoCardProps) => {
  return (
    <Card
      loading={isLoading}
      className={twMerge("rounded-2xl p-[2%]", className)}
    >
      <div className="flex ">
        <Avatar size={48} src={user.avatar} alt={user.email} />
        <div className="ml-2">
          <Typography className="font-bold text-lg">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography className="text-gray-500">{user.email}</Typography>
        </div>
      </div>
    </Card>
  );
};

export default UserInfoCard;
