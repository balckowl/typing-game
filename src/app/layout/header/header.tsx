import UserButton from "./userButton";

const Header = () => {
  return (
    <div>
      <header className="w-full items-center justify-between border-b p-4">
        <div className="container flex justify-between">
          <h1 className="text-3xl font-semibold">Tech Type</h1>
          <UserButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
