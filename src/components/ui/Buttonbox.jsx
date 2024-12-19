import { Button } from "@nextui-org/react";
import { cn } from "../../../public/lib/cn";


export const Buttonbox = ({ className,onClick, children,onPress }) => {
  return (
    <>
      <Button
        onClick={onClick}
        onPress={onPress}
        className={cn(
          "text-white text-lg font-lexend hover:!opacity-100 capitalize tracking-[.5px]  bg-primary rounded-full py-2 px-5 lg:px-10",
          className
        )}
      >
        {children}
      </Button>
    </>
  );
};
