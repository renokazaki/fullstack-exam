import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
const PublishAnswerPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-black">
        <Card className="h-[350px] w-[700px] p-4">
          <div className=" h-0.5/4 flex flex-row items-center justify-center ">
            <h2 className="text-xl text-gray-600">回答を投稿</h2>
          </div>
          <CardContent className="w-full h-3/4 flex">
            <form className="w-full">
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="本文">本文</Label>
                <Textarea
                  id="本文"
                  className="h-32 mb-8"
                  placeholder="質問の本文を入力して下さい"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4 w-full h-1/4">
            <div className="flex w-2/3 justify-center">
              <Button
                size="default"
                className="w-full mr-4"
                onClick={() => navigate("/question/top")}
              >
                投稿
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default PublishAnswerPage;
