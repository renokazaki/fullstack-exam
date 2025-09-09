import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    bio: "test",
    email: "test@test.com",
    name: "test",
  });
  return (
    <>
      <div className="h-full flex flex-col overflow-y-hidden">
        <Navigation />
        <div className="py-4">
          <p className="w-full gap-4 flex border-b-2 border-gray-300 pb-2">
            <a href="#">リンクのタイトル</a>
            <a href="#">リンクのタイトル</a>
          </p>
        </div>
        <main className="flex w-full px-12 ">
          <Card className="w-full">
            <CardHeader>
              <div className="flex flex-row justify-between items-center ">
                <CardTitle className="text-2xl">プロフィール</CardTitle>
                <Button
                  className="bg-white text-blue-500 border border-black hover:bg-gray-200"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? "編集中" : "編集"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="gap-8 flex flex-col">
              {isEditing ? (
                <>
                  <div>
                    <label htmlFor="bio" className="block mb-2">
                      プロフィール
                    </label>
                    <Input
                      id="bio"
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      メールアドレス
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      名前
                    </label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-row gap-4 mx-auto">
                    <Button
                      className="mt-4 bg-blue-500 hover:bg-blue-600"
                      onClick={() => setIsEditing(false)}
                    >
                      保存せず戻る
                    </Button>
                    <Button
                      className="mt-4 bg-blue-500 hover:bg-blue-600"
                      onClick={() => setIsEditing(false)}
                    >
                      保存
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <p>プロフィール：{profile.bio}</p>
                  <p>メールアドレス：{profile.email}</p>
                  <p>名前：{profile.name}</p>
                </>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;
