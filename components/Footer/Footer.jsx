import React from "react";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="p-4 flex flex-col justify-center items-center">
        <div className={`${styles.lnkcls} space-x-2`}>
          <Link href="https://www.instagram.com/gdsc_adgitm/">
            <a target="blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@gdscadgitm">
            <a target="blank">
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/dscadgitm/">
            <a target="blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="mailto:ideathonadgitm@gmail.com">
            <a target="blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="https://discord.gg/7K4kHAYCHg">
            <a target="blank">
              <FontAwesomeIcon
                icon={faDiscord}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
        </div>
        <hr className={`${styles.hr}`} />
        <div className="flex items-center justify-center flex-nowrap font-bold pt-2">
          <div className="font-gilroy tracking-wider space-x-4 sm:space-x-8 ">
            <Link href="/">
              <a className={`${styles.nav_link}`}>HOME</a>
            </Link>
            <Link href="/#about">
              <a className={`${styles.nav_link}`}>ABOUT</a>
            </Link>
            <Link href="/#timeline">
              <a className={`${styles.nav_link}`}>TIMELINE</a>
            </Link>

            {/* <a href="/#speakers" className={`${styles.nav_link}`}>
              SPEAKERS
            </a> */}
            <Link href="/#faqs">
              <a className={`${styles.nav_link}`}>FAQS</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={`mt-5 font-gilroy tracking-wider p-2 ${styles.btm}`}>
        © E-Cell / GDSC / CC ADGITM, DELHI | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
