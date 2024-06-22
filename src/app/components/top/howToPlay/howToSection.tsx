import { ReactNode } from "react";

const HowToSection = ({title,children,content}:{title:string,children:ReactNode,content:string}) => {
  return (
    <div className="flex space-x-6">
      <div className="flex size-[70px] items-center justify-center rounded-full bg-blue-200 p-4">
        {children}
      </div>
      <div className="text-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-base text-[#121212]">{content}</p>
      </div>
    </div>
  );
};

export default HowToSection;
