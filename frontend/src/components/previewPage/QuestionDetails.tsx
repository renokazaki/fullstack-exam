import Question from "../common/Question";
import { Card, CardContent } from "@/components/ui/card";

const QuestionDetails = () => {
  return (
    <>
      <div>
        <Question />
        <Card className="h-1/2">
          <CardContent>
            <div className="">
              <p className=" text-sm">
                文章がここに入ります。文章がここに入りま。。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default QuestionDetails;
