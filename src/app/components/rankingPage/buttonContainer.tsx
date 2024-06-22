import Link from "next/link";

import { Button } from "@/components/ui/button";

const ButtonContainer = () => {
  return (
    <div className="mb-4 mt-5 flex justify-center space-x-4">
      <div className="w-1/5">
        <Link href="/myPage" className="block w-full">
          <Button className="mx-2 h-max w-full grow bg-red-400 shadow-md hover:bg-red-600">
            <p className="text-xl font-bold">マイページへ</p>
          </Button>
        </Link>
      </div>
      <div className="w-1/5">
        <Link href="/myPage" className="block w-full">
          <Button className="mx-2 h-max w-full grow shadow-md">
            <p className="text-xl font-bold">Xで共有</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonContainer;
