
import { cn } from "../../../public/lib/cn";


export const Containerbox = ({ className, children }) => {
  return (
    <>
      <div className={cn("max-w-[1300px] mx-auto", className)}>{children}</div>
    </>
  );
};