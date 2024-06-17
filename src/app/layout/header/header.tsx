import UserButton from "./userButton";

const Header = () => {
  return (
    <div>
      <header className="flex w-full items-center justify-between border-b p-4">
        <h1 className="text-3xl font-semibold">Tech Type</h1>
        <UserButton />
      </header>
    </div>
  );
};

export default Header;
