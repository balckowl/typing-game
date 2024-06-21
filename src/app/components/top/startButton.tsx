"use client"
import Link from "next/link";

import { Button } from "@/components/ui/button";

const StartButton = () => {
  return (
    <Link href="/myPage">
      <Button>はじめる</Button>
    </Link>
  );
};

export default StartButton;
