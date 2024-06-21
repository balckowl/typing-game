"use client"

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { auth } from "@/lib/firebase/client"


const Login = () => {

    const { data: session, status } = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const googleProvider = new GoogleAuthProvider

    const signInWithGoogle = async() => {

        setIsLoading(true)

        await signInWithPopup(auth, googleProvider).then(async (credential) => {

            const idToken = await credential.user.getIdToken(true)

            // const userDocRef = doc(db, "users", credential.user.uid);
            // const userDoc = await getDoc(userDocRef);

            // if (!userDoc.exists()) {
            //     await setDoc(userDocRef, {
            //         clearLampList: { level1: Array(5).fill("0"), level2: Array(5).fill("0"), level3: Array(5).fill("0") },
            //         badges: ["0", "0", "0"],
            //         currentBadge: -1,
            //     });
            // }

            signIn("credentials", { callbackUrl: '/myPage', idToken })

        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })

    }

    return (
        <div className="relative h-screen">
            <div className="mt-[70px]">
                <h2 className="mb-7 text-center text-[30px] font-bold">Login to karakuri-web</h2>
                <div className="flex justify-center">
                    <Button onClick={signInWithGoogle} className="flex gap-2 border border-black bg-white text-black hover:text-white">
                        <Image src="/images/auth/google-icon.svg" width={20} height={20} alt="google-icon" />
                        <p>Sign In with Google</p>
                    </Button>
                </div>
            </div>
            <div className="mx-auto w-[400px]">
                <p className="mt-20">利用規約</p>
                <div className=" mx-auto h-[300px] overflow-hidden overflow-y-scroll border border-black p-4">
                    <h4 className="mb-4 text-2xl font-bold">お客様から取得する情報</h4>
                    <ul className="ml-8 list-disc">
                        <li>氏名(ニックネームやペンネームも含む)</li>
                        <li>メールアドレス</li>
                        <li>Cookie(クッキー)を用いて生成された識別情報</li>
                    </ul>

                    <p className="mt-4 text-2xl font-bold">お客様の情報を利用する目的</p>
                    <p className="mt-4">当ウェブサイトは、お客様から取得した情報を、以下の目的のために利用します。</p>
                    <ul className="ml-8 list-disc">
                        <li>当ウェブサイトサービスの提供、維持、保護及び改善のため</li>
                    </ul>

                    <p className="mt-4 text-2xl font-bold">第三者提供</p>
                    <p className="mt-4">当ウェブサイトは、お客様から取得する情報のうち、個人データ（個人情報保護法第１６条第３項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。</p>
                    <ul className="ml-8 list-disc">
                        <li>個人データの取扱いを外部に委託する場合</li>
                        <li>当ウェブサイトや当ウェブサイトサービスが買収された場合</li>
                        <li>事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）</li>
                        <li>その他、法律によって合法的に第三者提供が許されている場合</li>
                    </ul>

                    <p className="mt-4 text-2xl font-bold">アクセス解析ツール</p>
                    <p className="mt-4">当ウェブサイトは、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。</p>
                    <p>Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
                    <p>Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。</p>
                    <p>Googleアナリティクスについて、詳しくは以下からご確認ください。<a className="text-blue-500" href="https://marketingplatform.google.com/about/analytics/terms/jp/">https://marketingplatform.google.com/about/analytics/terms/jp/</a></p>

                    <p className="mt-4 text-2xl font-bold">プライバシーポリシーの変更</p>
                    <p className="mt-4">当ウェブサイトは、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。</p>

                    <p className="mt-4">ハッカソン名: からくリンゴ</p>
                    <p>2024年02月20日 制定</p>

                </div>
            </div>
        </div>
    )
}

export default Login