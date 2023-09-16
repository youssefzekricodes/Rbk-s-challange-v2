import * as React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../../Routes/paths.routes";
import { RootState } from "../../../data/store/index";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkdn.svg";
import { useSelector } from "react-redux";
export default function Preview() {
  const { user } = useSelector<RootState, any>((state) => state.user);
  return (
    <div className="Preview">
      <div className="Preview__header">
        <div className="Preview__header__nav">
          <NavLink to={PATH.LINKS} className="Header__preview">
            <p> Back to Editor</p>
          </NavLink>
          <NavLink to={""} className="Header__preview shareBtn">
            <p> Share Link</p>
          </NavLink>
        </div>
      </div>
      <div className="Preview__content">
        <div
          className={`Side__avatar ${user.avatar !== "" ? "" : "emptyavatar"}`}
        >
          {user.avatar ? <img src={user.avatar} alt="" /> : null}
        </div>
        <div className="Side__Cordinate">
          <p>{user.firstName + "  " + user.lastName}</p>
          <p>{user.email}</p>
        </div>
        <div className="Side__links">
          {user.links.map((link: { origin: string; url: string }) => (
            <a
              className={`Side__links__link ${link.origin}`}
              href={link.url}
              target="_blank"
            >
              <div className="Side__links__link__type">
                {link.origin === "GitHub" ? (
                  <GitHub />
                ) : link.origin === "LinkedIn" ? (
                  <LinkedIn />
                ) : (
                  <Youtube />
                )}
                {link.origin}
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
