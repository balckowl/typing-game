import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserOverview = () => {
  return (
    <div className="pb-[40px] pt-[100px] lg:border-b-2">
      <Avatar className="mx-auto size-24">
        <AvatarImage src="https://github.com/shadcn.png" className="size-24" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="py-4 text-center text-2xl font-bold">くしらくしら</p>
    </div>
  )
}

export default UserOverview