import { CodeXml, Gamepad2, LogInIcon } from "lucide-react";

import Section from "../section";
import HowToSection from "./howToSection";

const HowToPlay = () => {
  return (
    <Section title="How To Play">
      <div className="flex flex-col items-start space-y-8">
        <HowToSection title="1.ログイン" content="ログインしてください。">
          <LogInIcon />
        </HowToSection>
        <HowToSection title="2.技術を選択" content="好きな技術を5つ選ぼう。選んだものに応じて、タイピングする文章が変わるよ！">
          <CodeXml />
        </HowToSection>
        <HowToSection title="3.ゲームプレイ" content="タイピングをプレイして、ランキングで競おう！">
          <Gamepad2 />
        </HowToSection>
      </div>
    </Section>
  );
};

export default HowToPlay;
