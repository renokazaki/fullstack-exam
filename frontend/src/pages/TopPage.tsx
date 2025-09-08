import Navigation from "@/components/Navigation";

const TopPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navigation />
        <main className="flex w-full bg-amber-300 flex-7 px-12 pt-16">
          <div className="flex-3 bg-blue-300 mr-8">タイトル</div>
          <div className="flex-1 bg-green-300">ソート</div>
        </main>
        <div className="h-16 bg-gray-300 flex items-center justify-center">
          フッター
        </div>
      </div>
    </>
  );
};

export default TopPage;
