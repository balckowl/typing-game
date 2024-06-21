import UserButton from "./userButton";

const Header = () => {
  return (
    <div>
      <header className="h-[80px] border-b p-4">
        <div className="container flex h-full items-center justify-between">
          <h1 className="text-3xl font-semibold">Tech Type</h1>
          <UserButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
