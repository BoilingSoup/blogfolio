import Link from "next/link";
// import GithubDark from "../public/icons/github-dark.png";
// import GithubLight from "../public/icons/github-light.png";
import TwitterDark from "../public/icons/twitter-dark.png";
import TwitterLight from "../public/icons/twitter-light.png";
import Moon from "../public/icons/moon.png";
import Sun from "../public/icons/sun.png";
import BSoupDark from "../public/icons/bsoup/bsoup-dark.svg";
import BSoupLight from "../public/icons/bsoup/bsoup.svg";
import { StaticImageData } from "next/image";
import { useDarkModeProvider } from "@/contexts/DarkModeProvider";
import { smallIcon } from "@/data/constants";
import { useEffect, useRef, useState } from "react";
import { useHoverLogo } from "./hooks/useHoverLogo";

type WrapperProps = {
  children?: JSX.Element;
};

const HeaderWrapper = (props: WrapperProps) => {
  return (
    <header className="header fixed z-10 flex h-14 w-full animate-fade-in-up items-center border-b border-dotted border-gray-500 transition ease-in-out dark:border-slate-400/20 md:justify-between">
      {props.children}
    </header>
  );
};

const BSoupIcon = () => {
  const { isDarkMode } = useDarkModeProvider();
  const { hoverAreaRef, hoverEffectRef } = useHoverLogo();

  return (
    <Link href="/" ref={hoverAreaRef}>
      <img
        className={"m-2 hidden h-[30px] w-[30px] animate-fade-in-up transition ease-in-out 2xs:inline md:m-2 lg:ml-8"}
        src={isDarkMode ? BSoupDark.src : BSoupLight.src}
        width={smallIcon}
        height={smallIcon}
        alt="www.boilingsoup.dev icon"
      />
      <div
        ref={hoverEffectRef}
        id="hover-effect"
        className="absolute bottom-0 left-7 h-6 w-[40px] before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:opacity-75 before:transition-all before:content-[''] before:dark:bg-slate-50"
      />
    </Link>
  );
};

const HeaderTitle = (props: WrapperProps) => {
  return (
    <p className="cursor-default pl-3 text-xl font-semibold transition ease-in-out dark:text-white 2xs:pl-0 2xs:text-2xl xs:text-3xl lg:mr-4">
      {props.children}
    </p>
  );
};

const LinksWrapper = (props: WrapperProps) => {
  return <div className="mr-2 hidden h-full transition ease-in-out dark:text-white sm:flex">{props.children}</div>;
};

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const hoverEffect =
    "before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:dark:bg-slate-50 before:opacity-75 before:transition-all before:content-[''] hover:before:h-[4px] hover:before:opacity-100";

  return (
    <Link
      href={href}
      className={
        "relative mx-5 flex h-full flex-wrap place-content-center px-0 text-lg font-bold md:text-xl lg:text-2xl xl:mx-10 " + hoverEffect
      }
    >
      {text}
    </Link>
  );
};

const ButtonsWrapper = (props: WrapperProps) => {
  return <div className="ml-auto flex animate-fade-in-up transition ease-in-out md:items-center ">{props.children}</div>;
};

type IconButtonProps = {
  image: StaticImageData;
  size: number;
  link?: boolean;
  href?: string;
  newTab?: boolean;
  class?: string;
  text?: string;
  alt?: string;
};

const IconButton = (props: IconButtonProps) => {
  if (props.link) {
    return (
      <a
        className="h-full items-center justify-center rounded p-2 text-lg hover:bg-slate-500 dark:hover:bg-gray-500 md:flex md:px-4 lg:px-8"
        href={props.href}
        target={props.newTab ? "_blank" : ""}
      >
        <b className="text-bold hidden px-2 dark:text-white lg:inline xl:text-2xl">{props.text}</b>
        <img src={props.image.src} width={`${props.size}`} height={`${props.size}`} alt={props.alt}></img>
      </a>
    );
  }

  return (
    <button>
      <img src={props.image.src} width={`${props.size}`} height={`${props.size}`} alt={props.alt}></img>
    </button>
  );
};

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeProvider();

  return (
    <button
      aria-label="Dark Mode Toggle"
      onClick={toggleDarkMode}
      className="rounded-3xl p-2 transition ease-in-out hover:bg-slate-500 dark:hover:bg-gray-500 lg:mx-8"
    >
      {isDarkMode ? (
        <img src={Sun.src} width={smallIcon} height={smallIcon} alt="dark mode icon" />
      ) : (
        <img src={Moon.src} width={smallIcon} height={smallIcon} alt="light mode icon" />
      )}
    </button>
  );
};

export const Header = () => {
  const { isDarkMode } = useDarkModeProvider();

  return (
    <HeaderWrapper>
      <>
        {/* <div className="flex h-full items-center"> */}
        <BSoupIcon />
        {/* <HeaderTitle /> */}
        <div className="flex h-full items-center">
          <LinksWrapper>
            <>
              {/* <NavLink href="/" text="Home" /> */}
              <NavLink href="/blog" text="Blog" />
              <NavLink href="/projects" text="Projects" />
              <NavLink href="/blog" text="Demos" />
              <NavLink href="/blog" text="Contact" />
            </>
          </LinksWrapper>
          {/* </div> */}
          {/* <ButtonsWrapper> */}
          {/*   <> */}
          {/*     <IconButton */}
          {/*       image={isDarkMode ? GithubDark : GithubLight} */}
          {/*       size={smallIcon} */}
          {/*       link */}
          {/*       href="https://github.com/boilingsoup" */}
          {/*       newTab */}
          {/*       text={"GitHub"} */}
          {/*       alt="Open my Github on a new tab" */}
          {/*     /> */}
          {/*     <IconButton */}
          {/*       image={isDarkMode ? TwitterDark : TwitterLight} */}
          {/*       size={smallIcon} */}
          {/*       link */}
          {/*       href="https://twitter.com/boilingsoupdev" */}
          {/*       newTab */}
          {/*       text={"Twitter"} */}
          {/*       alt="Open my Twitter on a new tab" */}
          {/*     /> */}
          {/*   </> */}
          {/* </ButtonsWrapper> */}
          <DarkModeButton />
        </div>
      </>
    </HeaderWrapper>
  );
};

export const FixedHeaderSpacer = () => {
  return <div className="h-14" />;
};
