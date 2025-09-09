import { Card, CardContent } from "@/components/ui/card";

const DraftPage = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-black">
        <Card className="h-[650px] w-[700px] p-4">
          <div className=" h-0.5/4 flex flex-row items-center justify-center ">
            <h2 className="text-xl text-gray-600">下書きリスト</h2>
          </div>
          <CardContent className="w-full h-3/4 flex"></CardContent>
        </Card>
      </div>
    </>
  );
};

export default DraftPage;
