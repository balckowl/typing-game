import prisma from "@/lib/prisma/db"

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  return user
}