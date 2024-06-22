import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/next-auth/options";
import prisma from "@/lib/prisma/db";

const POST = async (req: NextRequest) => {
    const { lastScore, selectedTechs } = await req.json()
    const session = await getServerSession(authOptions)

    if (!session) {
        throw Error("ユーザーが存在しません。")
    }

    const { user } = session

    await prisma.games.create({
        data: {
            score: lastScore,
            techs: selectedTechs,
            userId: user.uid
        }
    })

    return NextResponse.json({ status: 200 })
}

export { POST }