import { NextRequest, NextResponse } from "next/server";

import { firebaseAdmin } from "@/lib/firebase/admin";
import prisma from "@/lib/prisma/db";

const POST = async (req: NextRequest) => {
    const { idToken } = await req.json()

    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)

    const { name, email, picture, uid } = decodedToken

    if (picture && email) {
        await prisma.user.create({
            data: {
                id: uid,
                name: name,
                email: email,
                photoURL: picture,

            }
        })
    }

    return NextResponse.json({ status: 200 })
}

export { POST }