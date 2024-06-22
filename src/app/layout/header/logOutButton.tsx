"use client"
import { signOut as signOutFirebase } from "firebase/auth";
import { signOut as signOutNextAuth } from "next-auth/react";

import { Button } from "@/components/ui/button"
import { auth } from "@/lib/firebase/client";

const LogOutButton = () => {

    const logOut = async () => {
        //firebaseからのログアウト
        await signOutFirebase(auth)
        //nextauthからログアウト
        signOutNextAuth({ callbackUrl: '/' })
    }

    return (
        <Button onClick={logOut} className="w-full">ログアウト</Button>
    )
}

export default LogOutButton