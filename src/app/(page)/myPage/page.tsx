import Profile from "@/app/components/myPage/profile/profile";
import StartBtn from "@/app/components/myPage/startBtn";
import TechsSelection from "@/app/components/myPage/techsSelection/techsSelection";
import UserOverview from "@/app/components/myPage/userOverview";

const currentTechsNum = 0;
const techsList = [
  { name: "フロントエンド", techs: ["HTML/CSS", "JavaScript", "React", "Vue", "Svelte"] },
  { name: "バックエンド", techs: ["Node.js", "Express", "Django", "Ruby on Rails"] },
];

const myPage = () => {
  return (
    <div className="mx-auto w-4/5 max-w-[1200px]">
      <div className="mt-20 flex flex-col justify-between gap-20 lg:flex-row">
        <div className="hidden w-3/12 lg:block lg:pl-[100px]"></div>
        <div className="mx-auto size-max lg:fixed lg:w-3/12 lg:pl-[100px]">
          <UserOverview />
          <div className="hidden lg:block">
            <StartBtn />
          </div>
        </div>
        <div className="xl:mr-[100px]">
          <Profile displayName="くしらくしら" highScore={[25000, 3.0]} rank="B" progress={50} />
          <TechsSelection techsList={techsList} currentTechsNum={currentTechsNum} />
        </div>
      </div>

      <div className="block lg:hidden">
        <StartBtn />
      </div>
    </div>
  )
}

export default myPage