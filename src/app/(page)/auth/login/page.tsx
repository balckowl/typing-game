import Image from "next/image"

import SiginInWithGoogleBtn from "@/app/components/auth/siginInWithGoogleBtn"

const Login = async() => {

    return (
        <div className="container mx-auto">
            <div className="mt-[70px]">
                <h2 className="mb-7 text-center text-[30px] font-bold">さあ、タイピングをはじめよう</h2>
                <div className="mb-[50px] flex justify-center">
                    <SiginInWithGoogleBtn />
                </div>
                <div className="flex justify-center">
                    <Image src="/images/auth/pc-boy.png" width="300" height="300" alt="pc-boy" />
                </div>
            </div>
        </div>
    )
}

export default Login