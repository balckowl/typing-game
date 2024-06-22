import { Button } from "@/components/ui/button";


const ChangeName = () => {

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          className="w-full rounded-md text-xl font-bold"
        />
        <input
          type="hidden"
          name="id"
        />
        <Button>送信</Button>
      </form>
    </div>
  )
}

export default ChangeName