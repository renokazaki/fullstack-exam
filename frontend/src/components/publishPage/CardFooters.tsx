import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

const CardFooters = () => {
  return (
    <div>
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
    </div>
  );
};

export default CardFooters;
