import QuestionDetails from "@/components/previewPage/QuestionDetails";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <Card className="h-[650px] w-[700px] p-4 border-0 shadow-none">
          <CardContent className="w-full h-3/4 flex">
            <div className="flex flex-col">
              <h2 className=" text-gray-600 mb-2">プレビュー</h2>
              <QuestionDetails />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4 w-full h-1/4">
            <div className="flex w-2/3 justify-center">
              <Button
                size="default"
                className="w-1/2 mr-4"
                onClick={() => navigate("/publish")}
              >
                戻る
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
export default PreviewPage;
