import { PropsWithChildren } from "react";

// type ErrorMessageProps = {
//   children: ReactNode;
// };

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="text-center bg-red-500 p-2 font-bold text-white text-sm ">
      {children}
    </p>
  );
}
