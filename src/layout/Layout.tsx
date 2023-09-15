import { ReactElement } from "react";


export default function Layout({children} :{ children: ReactElement | ReactElement[];}) {
  return <div>{children}</div>;
}
