import { ReactElement } from "react";
import Header from "./components/Header/Header";


export default function Layout({children} :{ children: ReactElement | ReactElement[];}) {
  return <div className="Layout">
    <Header/>
    {children}
    </div>;
}
