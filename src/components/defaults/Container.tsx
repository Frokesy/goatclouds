import { FC, ReactNode } from "react";
import PageTransition from "./PageTransition";
import Header from "./Header";
interface ContainerProps {
  children: ReactNode;
  active: string;
}
const Container: FC<ContainerProps> = ({ children, active }) => {
  return (
    <div>
      <Header active={active} />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};

export default Container;
