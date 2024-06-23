import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import GameClient from "@/app/components/game/gameClient"
import { authOptions } from "@/lib/next-auth/options"

const Game = async () => {

  const session = await getServerSession(authOptions)

  //sessionがない場合は、ログインページにリダイレクト
  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div>
      <GameClient />
    </div>
  )
}

export default Game