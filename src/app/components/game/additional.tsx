
const Additional = (
  {
    additionalPoint,
    item,
    text,
  }: {
    additionalPoint: number,
    item: string
    text: string,
  }
) => {
  return (
    <div>
      <div className="flex justify-between border-b-2 border-[#636363] p-[20px]">
        <div className="w-8/12 items-stretch">
          <div className="flex h-full items-center text-xl">{item}</div>
        </div>
        <div className="relative w-4/12">
          <p>{text}</p>
          <p className="absolute text-sm text-blue-500">+ {additionalPoint}</p>
        </div>
      </div>
    </div>
  )
}

export default Additional