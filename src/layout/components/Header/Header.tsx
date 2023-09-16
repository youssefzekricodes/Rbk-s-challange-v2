import * as React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../../../Routes/paths.routes";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg";
import { ReactComponent as LinkLogoIcon } from "../../../assets/icons/linkLogo.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";
import { useWindowSize } from "@uidotdev/usehooks";
export default function Header() {
  const { width } = useWindowSize();
  return (
    <div className="Header">
      {width > 1000 ? (
        <div className="Header__title">
          <LinkLogoIcon />
          devLinks
        </div>
      ) : null}

      <div className="Header__links">
        <NavLink
          to={PATH.LINKS}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "Header__links__btn Header__links__btn--active"
              : "Header__links__btn"
          }
        >
          <LinkIcon />
          <p>Links</p>
        </NavLink>
        <NavLink
          to={PATH.PROFILE}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "Header__links__btn Header__links__btn--active"
              : "Header__links__btn"
          }
        >
          <ProfileIcon />
          <p> Profile Details</p>
        </NavLink>
      </div>
      <NavLink to={PATH.Preview} className="Header__preview">
        <p> Preview</p>
      </NavLink>
    </div>
  );
}
