import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"

import Profile from "@/app/components/myPage/profile/profile";
import StartBtn from "@/app/components/myPage/startBtn";
import UserOverview from "@/app/components/myPage/userOverview";
import { getUser } from "@/data/user";
import { authOptions } from "@/lib/next-auth/options";

const myPage = async () => {

  const session = await getServerSession(authOptions)

  //ログインしていないときはログインページに戻る
  if (!session) {
    redirect("/auth/login")
  }

  const user = await getUser(session.user.uid)

  console.log(user)

  return (
    <div className="mx-auto w-4/5 max-w-[1200px]">
      {user && (
        <div className="mt-20 flex flex-col justify-between gap-20 lg:flex-row">
          <div className="hidden w-3/12 lg:block lg:pl-[100px]"></div>
          <div className="mx-auto size-max lg:fixed lg:w-3/12 lg:pl-[100px]">
            <UserOverview user={user}/>
            <div className="hidden lg:block">
              <StartBtn />
            </div>
          </div>
          <div className="xl:mr-[100px]">
            <Profile user={user} />
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