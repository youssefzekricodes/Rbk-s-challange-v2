import * as React from "react";
import { useSelector } from "react-redux";
import frame from "../../../assets/images/phoneframe.jpg";
import { RootState } from "../../../data/store/index";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";
import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
import { ReactComponent as Youtube } from "../../../assets/icons/youtube.svg";
import { ReactComponent as LinkedIn } from "../../../assets/icons/linkdn.svg";
import { spawn } from "child_process";
export default function Side() {
  const { user } = useSelector<RootState, any>((state) => state.user);
  return (
    <div className="Side">
      <div
        className="Side__PhoneFrame"
        style={{ backgroundImage: `url(${frame})` }}
      >
        <div
          className={`Side__avatar ${user.avatar !== "" ? "" : "emptyavatar"}`}
        >
          {user.avatar ? <img src={user.avatar} alt="" /> : null}
        </div>
        <div className="Side__Cordinate">
          {user.firstName ? (
            <p>{user.firstName + "  " + user.lastName}</p>
          ) : <span className="Side__Cordinate--empty"></span>}
        { user.email ?  <p>{user.email}</p> : <span className="Side__Cordinate--empty"></span>}
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
