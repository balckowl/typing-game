"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import ChangeName from "./changeName";

interface ProfileProps {
  displayName: string;
  highScore: number[];
  progress: number;
  rank: string;
}

const Profile: React.FC<ProfileProps> = ({ displayName, highScore, progress, rank }) => {

  return (
    <div className="mx-auto max-w-[600px]">
      <p className="mb-2 ml-2 text-xl font-bold">プロフィール</p>
        <div className="mb-[50px] rounded-lg bg-green-100 p-6 shadow-lg xl:w-full">

        {/* 表示名 */}
        <div className="flex justify-between border-b-2 border-[#929292] py-[40px]">
          <div className="w-1/2">
            <p>表示名</p>
          </div>
          <div className="w-1/2">
            <ChangeName displayName={displayName}/>
          </div>
        </div>

        {/* ハイスコア */}
        <div className="flex justify-between border-b-2 border-[#929292] py-[40px]">
          <div className="w-1/2 items-stretch">
            <div className="flex h-full items-center">
              <p>ハイスコア</p>
            </div>
          </div>
          <div className="w-1/2">
            <p>{highScore[0]}</p>
            <p>{`(${highScore[1].toFixed(1)} keys / s)`}</p>
          </div>
        </div>

        {/* ランク */}
        <div className="flex justify-between py-[40px]">
          <div className="w-1/2 items-stretch">
            <div className="flex h-full items-center">
              <p>ランク</p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-around">
              <p className="text-[60px] font-bold">{rank}</p>
              <div className="relative">
                <Dialog>
                  <DialogTrigger>
                    <div className="mt-[36px] size-[34px] rounded-full bg-[#76CB70] shadow-md">
                      <p className="flex size-full items-center justify-center text-white">?</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        現在の熟練度
                      </DialogTitle>
                      <DialogDescription>
                        次のランクアップまで: 100 / 100
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>

            </div>

            {/* プログレスバー */}
            <div className="relative ml-2 h-2 w-10/12 rounded-full bg-gray-300">
              <div
                className="absolute top-0 h-2 rounded-full bg-yellow-400"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
