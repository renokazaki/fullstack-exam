import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectBox from "./SelectBox";
import BadgeComponent from "../common/BadgeComponent";

const Sort = () => {
  return (
    <Card className="w-full max-w-sm ">
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>ソート</Label>
              <SelectBox />
              <Label>フィルター</Label>
              <SelectBox title="ステータス" />
              <Label htmlFor="タグ">タグ</Label>
              <Input type="text" id="タグ" placeholder="タグ" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-between">
        <BadgeComponent text="カテゴリtag" />
      </CardFooter>
    </Card>
  );
};

export default Sort;
