import prisma from "@/lib/prisma/db"

type users = {
    id: number,
    name: string,
    currTechsNum: number,
    experiencePoint: number,
    HighScore: number
  }

export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    const rankingData = users.map((user: users) => (
        {
            name: user.name,
            HighScore: user.HighScore
        }
      ));
    console.log(rankingData)
    return rankingData;
}