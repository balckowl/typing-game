import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"

import Profile from "@/app/components/myPage/profile/profile";
import StartBtn from "@/app/components/myPage/startBtn";
import UserOverview from "@/app/components/myPage/userOverview";
import { authOptions } from "@/lib/next-auth/options";

const myPage = async () => {

  const session = await getServerSession(authOptions)

  //ログインしていないときはログインページに戻る
  if(!session){
    redirect("/auth/login")
  }

  return (
    <div className="mx-auto w-4/5 max-w-[1200px]">
      {session && (
        <div className="mt-20 flex flex-col justify-between gap-20 lg:flex-row">
          <div className="hidden w-3/12 lg:block lg:pl-[100px]"></div>
          <div className="mx-auto size-max lg:fixed lg:w-3/12 lg:pl-[100px]">
            <UserOverview userName={session.user.name} userPhoto={session.user.photoURL} />
            <div className="hidden lg:block">
              <StartBtn />
            </div>
          </div>
          <div className="xl:mr-[100px]">
            <Profile displayName={session.user.name} highScore={[25000, 3.0]} rank="B" progress={50} />
          </div>
        </div>
      )}

      <div className="block lg:hidden">
        <StartBtn />
      </div>
    </div>
  )
}

export default myPage