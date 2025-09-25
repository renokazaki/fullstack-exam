import { createClient } from "../../../utils/supabase/server";
const supabase = await createClient();

export const getAuth = async () => {
  const { data, error } = await supabase.auth.getUser();

  return { data, error };
};
