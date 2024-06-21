import Link from "next/link";

import { Button } from "@/components/ui/button";

const SubmitButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Link href="/game">
    <Button onClick={onClick} className="h-20 w-[10%] rounded-xl bg-[#6AE88D] text-4xl text-white shadow-md">
      決定
    </Button>
    </Link>
  );
}

export default SubmitButton;
