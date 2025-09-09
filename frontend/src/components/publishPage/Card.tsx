import { Card } from "@/components/ui/card";
import CardHeader from "./CardHeader";
import CardContents from "./CardContents";
import CardFooters from "./CardFooters";

const CardComponent = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-black">
        <Card className="h-[650px] w-[700px] p-4">
          <CardHeader />
          <CardContents />
          <CardFooters />
        </Card>
      </div>
    </>
  );
};
export default CardComponent;
