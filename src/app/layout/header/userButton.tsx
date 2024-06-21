import Link from "next/link";
import { getServerSession } from "next-auth/next"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { authOptions } from "@/lib/next-auth/options";

import LogOutButton from "./logOutButton";

const UserButton = async () => {

  const session = await getServerSession(authOptions)

  return (
    <div>
      {session ?
        (<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session.user.photoURL} alt="@shadcn" />
              <AvatarFallback>{session.user.name}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="p-2">
              <div className="border-b pb-2">
                <p className="text-[12px] font-bold">{session.user.name}</p>
                <p className="text-[14px] text-[#aaa]">{session.user.email}</p>
              </div>
              <div className="pt-2">
                <LogOutButton />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>) :
        (<Button asChild>
          <Link href="/auth/login">
            はじめよう
          </Link>
        </Button>)}
    </div>
  )
}

export default UserButton