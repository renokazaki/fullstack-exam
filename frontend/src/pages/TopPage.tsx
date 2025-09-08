import Navigation from "@/components/Navigation";
import ScrollArea from "@/components/ScrollArea";
import Sort from "@/components/topPage/Sort";

const TopPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col overflow-y-hidden">
        <Navigation />
        <main
          className="flex w-full px-12 pt-16"
          style={{ height: "calc(100vh - 64px - 64px)" }} // NavigationとFooter分を引く
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
