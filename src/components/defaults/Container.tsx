import { FC, ReactNode } from "react";
import PageTransition from "./PageTransition";
import Header from "./Header";
import Footer from "./Footer";
interface ContainerProps {
  children: ReactNode;
  active: string;
}
const Container: FC<ContainerProps> = ({ children, active }) => {
  return (
    <div className="overflow-x-hidden">
      <Header active={active} />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  );
};

export default Container;
