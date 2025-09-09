import Navigation from "@/components/Navigation";
import ScrollArea from "@/components/ScrollArea";
import Sort from "@/components/topPage/Sort";

const TopPage = () => {
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
          style={{ height: "calc(100vh - 160px - 64px)" }}
        >
          <div className="flex-3  mr-8 overflow-y-hidden ">
            <ScrollArea />
          </div>
          <div className="flex-1 ">
            <Sort />
          </div>
        </main>
        <div className="h-16 bg-gray-300 flex items-center justify-center">
          フッター
        </div>
      </div>
    </>
  );
};

export default TopPage;
