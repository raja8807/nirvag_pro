"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Header.module.scss";
import { NAV_LINKS } from "@/constants/Navigation";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import { Image } from "react-bootstrap";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <CustomContainer lg>
        <div className={`${styles.headerInner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src={"/logo/logo_h.png"}
              // src={
              //   isSticky
              //     ? "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6607cb05449188ec73b9e87f_Colored%20Logo.svg"
              //     : "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6607bc9b9d59d5c624804b9d_WhiteLogo.svg"
              // }
              alt="My Desk Logo"
              className={styles.logoImg}
              // priority
            />
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link, idx) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={idx}
                    className={styles.navDropdownContainer}
                    onMouseEnter={() => setActiveDropdown(true)}
                    onMouseLeave={() => setActiveDropdown(false)}
                  >
                    <div className={styles.navDropdown}>
                      <span>
                        {link.label}{" "}
                        <span className={styles.dropdownIcon}>▼</span>
                      </span>
                    </div>

                    {activeDropdown && (
                      <div className={styles.dropdownList}>
                        <div className={styles.dropdownLinksWrapper}>
                          {link.dropdownItems.map((sub, sIdx) => (
                            <React.Fragment key={sIdx}>
                              {sIdx > 0 && (
                                <div className={styles.dropdownDivider}></div>
                              )}
                              <Link
                                href={sub.href}
                                className={styles.dropdownLink}
                              >
                                {sub.label}
                              </Link>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`${styles.navLink} ${link.tag === "new" ? styles.newTag : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link href="/login" className={styles.navLink}>
              Login
            </Link>
            <CustomButton href="/signup" variant="small">
              Signup
            </CustomButton>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
}
