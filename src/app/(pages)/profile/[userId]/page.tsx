import React from "react";
import Header from "../../components/Header/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import styles from "./profilePage.module.css";
import UserCard from "./components/UserCard";

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BreadCrumbs
          items={[
            { name: "TOP画面", path: "/top" },
            { name: "質問詳細画面", path: "back" },
            { name: "プロフィール画面", path: "" },
          ]}
        />
        <UserCard userID={userId} />
      </main>
    </>
  );
};

export default ProfilePage;
