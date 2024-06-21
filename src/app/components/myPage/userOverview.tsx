import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserOverview = async ({ userName, userPhoto }: { userName: string, userPhoto: string }) => {

  return (
    <div className="pb-[40px] pt-[100px] lg:border-b-2">
      <div>
        <Avatar className="mx-auto size-24">
          <AvatarImage src={userPhoto} className="size-24" />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
        <p className="py-4 text-center text-2xl font-bold">{userName}</p>
      </div>
    </div>
  )
}

export default UserOverview