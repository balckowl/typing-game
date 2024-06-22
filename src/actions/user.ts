"use server"

import prisma from "@/lib/prisma/db"

export const createUser = async (id: string, name: string, email: string, photoURL: string) => {
    const user = await prisma.user.create({
        data: {
            id: id,
            name: name,
            email: email,
            photoURL: photoURL
        }
    })

    return user
}



