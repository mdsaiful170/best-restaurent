import { cn } from "../../../public/lib/cn";


export const Headingbox = ({ className, children }) => {
  return (
    <>
      <h2
        className={cn(`text-2xl sm:text-3xl font-bold text-heading font-lexend`, className)}
      >
        {children}
      </h2>
    </>
  );
};


