import prisma from "@/lib/prisma/db"

type users = {
    id: number,
    name: string,
    experiencePoint: number,
    HighScore: number
  }

export const getUser = async (id: string) => {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    return user
}
