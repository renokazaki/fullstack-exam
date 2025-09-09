import Navigation from "@/components/Navigation";
import ScrollArea from "@/components/ScrollArea";
import Sort from "@/components/topPage/Sort";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen flex flex-col overflow-y-hidden">
        <Navigation />
        <div className="py-4">
          <p className="w-full gap-4 flex border-b-2 border-gray-300 pb-2">
            <a href="#">リンクのタイトル</a>
            <a href="#">リンクのタイトル</a>
          </p>
        </div>
        <main
          className="flex w-full px-12 mt-12"
          style={{ height: "calc(100vh - 144px - 112px)" }}
        >
          <div className="flex-3  mr-8 overflow-y-hidden ">
            <ScrollArea />
          </div>
          <div className="flex-1 ">
            <Sort />
          </div>
        </main>
        <div className="h-28 bg-gray-300 flex items-center justify-between px-8">
          <div className="flex-1 flex justify-center items-center">
            ページネーション
          </div>
          <div className="flex items-center">
            <Button
              className="ml-8 rounded-full bg-amber-400 hover:bg-amber-500"
              onClick={() => navigate("/PublishQuestionPage")}
            >
              質問を投稿
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
