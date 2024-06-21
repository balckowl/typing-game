import { signOut as signOutFirebase } from "firebase/auth";
import { getServerSession } from "next-auth";
import { signOut as signOutNextAuth } from "next-auth/react";

import { auth } from "@/lib/firebase/client";

const UserButton = () => {
  const logOut = async () => {
    //firebaseからのログアウト
    await signOutFirebase(auth)
    //nextauthからログアウト
    signOutNextAuth({ callbackUrl: '/' })
  }

  const session = getServerSession()
  console.log(session)
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}

export default UserButton