import { CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CardContents = () => {
  return (
    <div>
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
    </div>
  );
};

export default CardContents;
