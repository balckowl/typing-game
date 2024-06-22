import Link from "next/link";

import { Button } from "@/components/ui/button";

const ButtonContainer = () => {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      <div className="w-1/5">
        <Link href="/myPage" className="block w-full">
          <Button className="mx-2 h-max w-full grow bg-red-400 shadow-md hover:bg-red-600">
            <p className="py-3 text-xl font-bold">マイページへ</p>
          </Button>
        </Link>
      </div>
      <div className="w-1/5">
        <Link href="/myPage" className="block w-full">
          <Button className="mx-2 h-max w-full grow shadow-md">
            <p className="py-3 text-xl font-bold">Xで共有</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonContainer;
