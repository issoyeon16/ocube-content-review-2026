"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavigation } from "@/config/navigation";
import { useSiteHeader } from "@/hooks/use-site-header";

export function SiteHeader() {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen, scrolled, gnbOpen, openGnb, holdGnb, scheduleCloseGnb } =
    useSiteHeader();

  const headerClassName = ["site-header", scrolled && "scrolled", gnbOpen && "gnb-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header
        className={headerClassName}
        onMouseEnter={holdGnb}
        onMouseLeave={scheduleCloseGnb}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) scheduleCloseGnb();
        }}
      >
        <div className="site-header-inner">
          <Link className="logo image-logo" href="/" aria-label="오큐브 홈">
            <Image
              src="/ocube-content-review-2026/assets/images/brand/ocube-logo-horizontal.avif"
              alt="OCUBE"
              width={132}
              height={40}
              priority
            />
          </Link>

          <nav
            className="desktop-nav"
            aria-label="주요 메뉴"
            onMouseEnter={openGnb}
            onFocus={openGnb}
          >
            {headerNavigation.map((item, itemIndex) => {
              const active = item.activePaths.some(
                (path) => pathname === path || pathname.startsWith(`${path}/`),
              );

              return (
                <div className={`desktop-nav-item${active ? " is-active" : ""}`} key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup="true"
                    aria-expanded={gnbOpen}
                    aria-controls={`desktop-submenu-${itemIndex + 1}`}
                  >
                    {item.label}
                  </Link>
                  <div className="desktop-submenu" id={`desktop-submenu-${itemIndex + 1}`}>
                    {item.groups.map((group) => (
                      <section className="desktop-submenu-group" key={group.title}>
                        <p>{group.title}</p>
                        <ul>
                          {group.links.map((link) => (
                            <li key={`${group.title}-${link.label}`}>
                              <Link href={link.href}>
                                <span>{link.label}</span>
                                <small>{link.description}</small>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <Link className="header-contact" href="/#contact">
            문의하기
          </Link>

          <button
            className="sitemap-button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="전체 메뉴 열기"
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <i key={index} />
            ))}
          </button>
        </div>
      </header>

      <aside className={`sitemap ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button
          className="sitemap-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="전체 메뉴 닫기"
        />
        <div className="sitemap-panel">
          <div className="sitemap-top">
            <Link className="logo image-logo" href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/ocube-content-review-2026/assets/images/brand/ocube-logo-horizontal.avif"
                alt="OCUBE"
                width={150}
                height={46}
              />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="전체 메뉴 닫기">
              <i />
              <i />
            </button>
          </div>

          <div className="sitemap-groups">
            {headerNavigation.map((item) => (
              <div className="sitemap-row" key={item.label}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
                <div>
                  {item.groups.map((group) =>
                    group.links.map((link) => (
                      <Link
                        key={`${group.title}-${link.label}`}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
