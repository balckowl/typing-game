import { User } from "@prisma/client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserOverview = async ({ user }: { user: User }) => {

  const { name, photoURL  } = user

  return (
    <div className="pb-[40px] pt-[100px] lg:border-b-2">
      <div>
        <Avatar className="mx-auto size-24">
          <AvatarImage src={photoURL} className="size-24" />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <p className="py-4 text-center text-2xl font-bold">{name}</p>
      </div>
    </div>
  )
}

export default UserOverview