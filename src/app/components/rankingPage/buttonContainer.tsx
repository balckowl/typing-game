import Link from "next/link";

import { Button } from "@/components/ui/button";

const ButtonContainer = () => {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      <Link href="/myPage" className="block">
        <Button className="rounded-md bg-red-500 px-6 py-2 text-lg text-white">
          マイページへ
        </Button>
      </Link>
      <Button className="rounded-md bg-black px-6 py-2 text-lg text-white">
        Xで共有
      </Button>
    </div>
  );
};

export default ButtonContainer;
