import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { auth } from "../../../../auth";
import { SignIn, SignOut } from "../../components/auth/authComponent";

const UserButton = async () => {
  const session = await auth();
  // ユーザーが存在しない場合サインインを表示する
  if (!session?.user) return <SignIn provider="github" />

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm sm:inline-flex"></span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative size-8 rounded-full">
            <Avatar className="size-8">
              { session.user.image &&
                <AvatarImage src={session.user.image} alt={session.user.image ?? ""}></AvatarImage>
              }
              <AvatarFallback>{session.user.email}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session.user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserButton