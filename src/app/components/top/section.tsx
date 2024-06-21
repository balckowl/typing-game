import { ReactNode } from "react";

const Section = ({title,children}:{title:string,children:ReactNode}) => {
  return (
    <section className="my-12 w-full max-w-4xl bg-white p-8 text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="mx-auto mb-8 mt-4 h-1 w-20 bg-blue-500"></div>
      {children}
    </section>
  );
};

export default Section;
