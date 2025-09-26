"use client";

import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { createClient } from "../../../../utils/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/login");
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      ログアウト
    </Button>
  );
}
