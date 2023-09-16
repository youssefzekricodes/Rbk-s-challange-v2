import { ReactElement } from "react";
import Header from "./components/Header/Header";
import Side from "./components/Side/Side";

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div className="Layout">
      <Header />
      <div className="Layout__content">
        <Side />
        <div className="Layout__content__chield">{children}</div>
      </div>
    </div>
  );
}
