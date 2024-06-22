import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import GameClient from "@/app/components/game/gameClient"
import { getUser } from "@/data/user"
import { authOptions } from "@/lib/next-auth/options"

const Game = async () => {

  const session = await getServerSession(authOptions)

  //sessionがない場合は、ログインページにリダイレクト
  if (!session) {
    redirect("/auth/login")
  }

  const user = await getUser(session.user.uid)

  return (
    <div>
      {user && (
        <GameClient />
      )}
    </div>
  )
}

export default Game