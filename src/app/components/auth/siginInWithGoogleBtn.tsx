"use client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import Image from "next/image"
import { signIn } from "next-auth/react"

import { createUser } from "@/actions/user"
import { Button } from "@/components/ui/button"
import { auth, db } from "@/lib/firebase/client"

const SiginInWithGoogleBtn = () => {

    const googleProvider = new GoogleAuthProvider

    const signInWithGoogle = async () => {

        await signInWithPopup(auth, googleProvider).then(async (credential) => {

            const idToken = await credential.user.getIdToken(true)

            //ここにuserを作るdb送信処理を書く。
            const { displayName, email, photoURL, uid } = credential.user

            const userDocRef = doc(db, "users", uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists() && displayName && email && photoURL) {
                await createUser(uid, displayName, email, photoURL)
                await setDoc(userDocRef, {
                    name: displayName,
                    email: email,
                    photoURL: photoURL,
                });
            }

            signIn("credentials", { callbackUrl: '/myPage', idToken })

        }).catch((err) => {
            //エラー情報をクライアントに伝える処理を書く。
            throw Error(err)

        })
    }

    return (
        <Button onClick={signInWithGoogle} className="flex gap-3" variant="outline">
            <div>
                <Image src="/images/auth/google-icon.svg" width={20} height={20} alt="google-icon" />
            </div>
            <p>Sign In with Google</p>
        </Button>
    )
}

export default SiginInWithGoogleBtn