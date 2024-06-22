import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { getUser } from "@/data/user";
import { authOptions } from "@/lib/next-auth/options";
import prisma from "@/lib/prisma/db";

const POST = async (req: NextRequest) => {
    const { lastScore, selectedTechs } = await req.json()
    const session = await getServerSession(authOptions)

    if (!session) {
        throw Error("ユーザーが存在しません。")
    }

    await prisma.games.create({
        data: {
            score: lastScore,
            techs: selectedTechs,
            userId: session.user.uid
        }
    })

    const user = await getUser(session.user.uid)

    if (!user) return

    if (lastScore > user.highScore) {

        await prisma.user.update({
            data: {
                highScore: lastScore,
            },
            where: {
                id: session.user.uid,
            },
        })
    }

    return NextResponse.json({ status: 200 })
}

export { POST }