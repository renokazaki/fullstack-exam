"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";

type BreadCrumbItem = {
  name: string;
  path: string;
};

export default function BreadCrumbs({ items }: { items: BreadCrumbItem[] }) {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    if (path === "back") {
      router.back();
    } else {
      router.push(path);
    }
  };
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* 動的に生成されるパンくずリスト */}
      {items?.map((item, index) => {
        const isLast = index === items.length - 1;
        return isLast ? (
          // 最後の項目は現在のページなのでリンクではなくテキストとして表示
          <Typography key={index} color="text.primary">
            {item.name}
          </Typography>
        ) : (
          // それ以外の項目はリンクとして表示
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate(item.path);
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
