import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"

import Profile from "@/app/components/myPage/profile/profile";
import StartBtn from "@/app/components/myPage/startBtn";
import UserOverview from "@/app/components/myPage/userOverview";
import Footer from "@/app/layout/footer/footer";
import Header from "@/app/layout/header/header";
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
    <div>
      <Header />
      <div className="mx-auto min-h-[calc(100vh-80px-80px)] w-4/5">
        {user && (
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="hidden w-3/12 lg:block lg:pl-[100px]"></div>
            <div className="mx-auto mt-20 size-max lg:fixed lg:w-3/12 lg:pl-[100px]">
              <UserOverview user={user} />
              <div className="hidden lg:block">
                <StartBtn />
              </div>
            </div>
            <div className="mt-20 xl:mr-[100px]">
              <Profile user={user} />
            </div>
          </div>
        )}

        <div className="block lg:hidden">
          <StartBtn />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default myPage