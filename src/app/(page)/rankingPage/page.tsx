import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import ButtonContainer from "@/app/components/rankingPage/buttonContainer";
import RankingTable from "@/app/components/rankingPage/rankingTable";
import { getAllGames } from "@/data/games";
import { getUser } from "@/data/user";
import { authOptions } from "@/lib/next-auth/options";

const RankingPage = async () => {

  const session = await getServerSession(authOptions)

  //セッションがなければ、ログインページにリダイレクト
  if (!session) {
    redirect("/auth/login")
  }

  const user = await getUser(session.user.uid)
  const games = await getAllGames()

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <div className="mt-8 w-full max-w-4xl px-6">
        <h2 className="mb-2 text-center text-2xl">あなたのハイスコア</h2>
        <p className="mb-6 text-center text-4xl">{user?.highScore}</p>
        <section className="rounded-xl bg-[#D0E8FF] px-8 py-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold">総合ランキング</h3>
          <div className="h-[500px] overflow-x-auto">
            {user && <RankingTable games={games} user={user}/>}
          </div>
        </section>
        <ButtonContainer />
      </div>
    </div>
  );
};

export default RankingPage;
