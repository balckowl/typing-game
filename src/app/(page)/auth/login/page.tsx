"use client"

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import Image from "next/image"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { auth } from "@/lib/firebase/client"


const Login = () => {

    const googleProvider = new GoogleAuthProvider

    const signInWithGoogle = async () => {

        await signInWithPopup(auth, googleProvider).then(async (credential) => {

            const idToken = await credential.user.getIdToken(true)

            //ここにuserを作るdb送信処理を書く。

            signIn("credentials", { callbackUrl: '/myPage', idToken })

        }).catch((err) => {
            //エラー情報をクライアントに伝える処理を書く。
            throw Error(err)

        })
    }

    return (
        <div className="container mx-auto">
            <div className="mt-[70px]">
                <h2 className="mb-7 text-center text-[30px] font-bold">さあ、タイピングをはじめよう</h2>
                <div className="mb-[50px] flex justify-center">
                    <Button onClick={signInWithGoogle} className="flex gap-3" variant="outline">
                        <div>
                            <Image src="/images/auth/google-icon.svg" width={20} height={20} alt="google-icon" />
                        </div>
                        <p>Sign In with Google</p>
                    </Button>
                </div>
                <div className="flex justify-center">
                    <Image src="/images/auth/pc-boy.png" width="300" height="300" alt="pc-boy" />
                </div>
            </div>
        </div>
    )
}

export default Login