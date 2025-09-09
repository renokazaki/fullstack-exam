import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PublishPage = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-black">
        <Card className="h-[650px] w-[700px] p-4">
          <a href="#" className="text-blue-500 underline flex justify-end mt-4">
            下書きリスト
          </a>
          <div className=" h-0.5/4 flex flex-row items-center justify-center ">
            <h2 className="text-xl text-gray-600">質問を投稿</h2>
          </div>
          <CardContent className="w-full h-3/4 flex">
            <form className="w-full">
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="タイトル">タイトル</Label>
                <Input
                  type="text"
                  id="タイトル"
                  placeholder="質問のタイトルを記入してください"
                  className="mb-8"
                />
                <Label htmlFor="本文">本文</Label>
                <Textarea
                  id="本文"
                  className="h-32 mb-8"
                  placeholder="質問の本文を入力して下さい"
                />
                <Label htmlFor="タグ">タグ</Label>
                <Input
                  type="text"
                  id="タグ"
                  placeholder="追加するタグを検索できます"
                  className="mb-4"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4 w-full h-1/4">
            <div className="flex w-2/3 justify-center">
              <Button size="default" className="w-1/2 mr-4">
                プレビュー
              </Button>
              <Button size="default" className="w-1/2 mr-4">
                下書きに保存
              </Button>
            </div>
            <div className="flex w-2/3 justify-center">
              <Button size="default" className="w-full mr-4">
                投稿
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default PublishPage;
