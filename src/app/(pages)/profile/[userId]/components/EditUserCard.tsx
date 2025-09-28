import React from "react";
import styles from "./editUserCard.module.css";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import Label from "@mui/material/InputLabel";
import { updateUserInfo } from "@/app/lib/action/user/action";
import {
  UpdateUserFormValues,
  updateUserSchema,
} from "@/app/lib/validation/updateUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type EditUserCardProps = {
  userInfo: User;
  setIsEdit: (isEdit: boolean) => void;
  formId: string;
  setIsSubmit: (isSubmit: boolean) => void;
};

export const EditUserCard = ({
  userInfo,
  setIsEdit,
  formId,
  setIsSubmit,
}: EditUserCardProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      userId: userInfo.id as string,
      email: userInfo.email as string,
      username: userInfo.username as string,
    },
  });
  const onSubmit = async (data: UpdateUserFormValues) => {
    await updateUserInfo(data);
    setIsSubmit(false);
    setIsEdit(false);
  };
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileIcon}>
        <div>プロフィール画像</div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.profileInfo}
        id={formId}
      >
        <div className={styles.profileEmail}>
          <Label htmlFor="email">メールアドレス:</Label>
          <input id="email" type="email" {...register("email")} />
        </div>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <div className={styles.profileName}>
          <Label htmlFor="username">名前:</Label>
          <input id="username" type="text" {...register("username")} />
        </div>
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
      </form>
    </div>
  );
};
