import prisma from "@/lib/prisma/db"

export const getAllGames = async () => {
    const games = await prisma.games.findMany({
        include: {
            user: true
        },
        orderBy: {
            score: 'desc'
        }
    })

    return games
}