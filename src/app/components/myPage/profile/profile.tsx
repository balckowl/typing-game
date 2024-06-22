import { User } from "@prisma/client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const Profile = async ({ user }: { user: User }) => {

  const { name, highScore } = user
  const rankScore = [0, 5000, 10000, 15000, 20000, 25000, 30000]
  const rankName = ["E","D","C","B","A","S","SS"]
  const ranks = [
    ["SS", "30000~"],
    ["S", "25000~"],
    ["A", "20000~"],
    ["B", "15000~"],
    ["C", "10000~"],
    ["D", "5000~"],
    ["E", "0~"]
  ];

  const getRank = (score: number) => {
    for(let i=1; i<rankScore.length; i++){
      if(score < rankScore[i]){
        return rankName[i-1]
      } 
    }
    return rankName[rankName.length-1]
  }
  
  const getProgressWidth = (score :number) => {
    for(let i=1; i < rankScore.length; i++){
      if(score < rankScore[i]){
        return (score - rankScore[i-1]) / (rankScore[i] - rankScore[i-1]) * 100
      } 
    }
    return 100
  }

  return (
    <div className="mx-auto min-w-[400px] max-w-[600px]">
      <p className="mb-2 ml-2 text-xl font-bold">プロフィール</p>
      <div className="mb-[50px] rounded-lg bg-green-100 p-6 shadow-lg xl:w-full">

        {/* 表示名 */}
        <div className="flex justify-between border-b-2 border-[#929292] py-[40px]">
          <div className="w-1/2">
            <p>表示名</p>
          </div>
          <div className="w-1/2">
            <p>{name}</p>
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
            <p>{highScore}</p>
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
              <p className="text-[60px] font-bold">{getRank(highScore)}</p>
              <div className="relative">
                <Dialog>
                  <DialogTrigger>
                    <div className="mt-[36px] size-[34px] rounded-full bg-[#76CB70] shadow-md">
                      <p className="flex size-full items-center justify-center text-white">?</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-2">
                        <p className="text-xl">ランク表</p>
                      </DialogTitle>
                      <DialogDescription>
                        {ranks.map((rank, index) => (
                          <div className={cn("flex justify-between w-[60%] mx-auto p-4", index != ranks.length-1 && "border-b-[2px]")} key={index}>
                            <div className="w-[80px]">
                              <p className="text-lg">{rank[0]}</p>
                            </div>
                            <div className="w-[80px]">
                              <p className="text-lg">{rank[1]}</p>
                            </div>
                          </div>
                        ))}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* プログレスバー */}
            <Progress value={getProgressWidth(highScore)} className="h-[10px]"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
