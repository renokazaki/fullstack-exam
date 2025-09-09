import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BadgeComponent from "./BadgeComponent";
const Question = () => {
  return (
    <>
      <div className="mb-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>タイトル</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <BadgeComponent text="カテゴリtag" />
            </div>
            <div className="flex flex-row mt-4 items-center">
              <img
                src="path/to/image.jpg"
                alt="Question Image"
                width={60}
                height={60}
                className="bg-amber-300"
              />
              <div className="flex flex-col ml-4">
                <p className="mt-2">user name</p>
                <p className="mt-2">2024/01/01</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Question;
