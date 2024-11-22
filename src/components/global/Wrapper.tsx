import { FC } from "react";

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col min-h-screen">
      {children}
    </div>
  );
};

export default Wrapper;
