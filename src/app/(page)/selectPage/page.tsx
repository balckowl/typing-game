import AllTechsList from "@/app/components/selectPage/allTechListSection";
import PresetListSection from "@/app/components/selectPage/presetListSection";
import SubmitButton from "@/app/components/selectPage/submitButton";

const selectPage = () => {
  const presetSection = [
    { name: "フロントエンド", techs: ["HTML/CSS", "JavaScript", "React"] },
    { name: "バックエンド", techs: ["HTML/CSS", "JavaScript", "React"] },
  ];
  const allSections = [
    {
      name: "web",
      techs: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Next",
        "Vue",
        "Nuxt",
        "Firebase",
        "Framer motion",
      ],
    },
    { name: "プログラミング言語", techs: ["C", "C++", "C#", "Python", "Rust"] },
    { name: "インフラ", techs: ["Docker", "AWS"] },
    { name: "その他", techs: ["Git", "Unity", "競プロ"] },
  ];

  return (
    <div className="mt-8">
      <div className="mx-[20%] mb-8 rounded-2xl bg-white p-4 shadow-md">
        <h2 className="mb-4 text-2xl">
          好きな技術<span>(5つまで)</span>
        </h2>
        <AllTechsList
          allSections={allSections}
        />
      </div>
      <div className="mx-[20%] mb-8 rounded-2xl bg-[#E8FBFF] p-4 shadow-md">
        <h2 className="mb-4 text-2xl">あなたの技術プリセット</h2>
        <PresetListSection
          presetSection={presetSection}
        />
      </div>
      <div className="mb-8 text-center">
      <SubmitButton />
      </div>
    </div>
  );
}

export default selectPage;
