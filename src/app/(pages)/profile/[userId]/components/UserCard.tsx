import React, { Suspense } from "react";
import { getUserInfo } from "@/app/lib/action/user/action";
import { getUserId } from "@/app/lib/action/auth/auth";
import UserInfo from "./UserInfo";
import Loading from "@/app/(pages)/components/Loading";

type UserCardProps = {
  userID: string;
};

const UserCard = async ({ userID }: UserCardProps) => {
  const myUserID = await getUserId();
  const userInfo = await getUserInfo(userID);
  if (!userInfo) {
    return <div>User not found</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <UserInfo userInfo={userInfo} myUserID={myUserID} />
    </Suspense>
  );
};

export default UserCard;
