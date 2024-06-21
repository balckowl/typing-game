import { CodeXml, Gamepad2, LogInIcon } from "lucide-react";

import Section from "../section";
import HowToSection from "./howToSection";

const HowToPlay = () => {
  return (
    <Section title="How To Play">
      <div className="mx-auto w-4/5">
        <div className="flex flex-col items-start space-y-12">
          <HowToSection title="1.ログイン" content="ログインしてください。">
            <LogInIcon className="size-[40px]"/>
          </HowToSection>
          <HowToSection title="2.技術を選択" content="好きな技術を5つ選ぼう。選んだものに応じて、タイピングする文章が変わるよ！">
            <CodeXml className="size-[40px]"/>
          </HowToSection>
          <HowToSection title="3.ゲームプレイ" content="タイピングをプレイして、ランキングで競おう！">
            <Gamepad2 className="size-[40px]"/>
          </HowToSection>
        </div>
      </div>
    </Section>
  );
};

export default HowToPlay;
