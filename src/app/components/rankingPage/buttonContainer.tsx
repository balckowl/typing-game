import { Button } from "@/components/ui/button";

const ButtonContainer = () => {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      <Button className="rounded-md bg-red-500 px-6 py-2 text-lg text-white">
        マイページへ
      </Button>
      <Button className="rounded-md bg-black px-6 py-2 text-lg text-white">
        で共有
      </Button>
    </div>
  );
};

export default ButtonContainer;
