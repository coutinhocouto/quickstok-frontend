"use client";

import { HeaderSec, HeaderTitle, HeaderBreadcrumb, HeaderUser } from "./styles";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import { useContext, useState } from "react";
import React from "react";
import { userMenuItems } from "@/utils/Menu";
import MenuBuilder from "@/utils/MenuBuilder";
import { GlobalContext } from "@/store/Context";

interface BreadcrumbProps {
  link?: string;
  text: string;
}

const Header = ({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: Array<BreadcrumbProps>;
}) => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(GlobalContext);

  return (
    <HeaderSec data-testid="header-system">
      <div>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderBreadcrumb>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={item.text}>
              {index !== 0 && " / "}
              {item.link ? <a href={item.link}>{item.text}</a> : item.text}
            </React.Fragment>
          ))}
        </HeaderBreadcrumb>
      </div>
      <HeaderUser>
        <button type="button" onClick={() => setOpen(!open)}>
          <Image
            src="/avatar.jpg"
            alt="User Avatar"
            width={35}
            height={35}
            priority
          />
          {user && user[0] && user[0].name} <BiChevronDown />
        </button>
        <MenuBuilder menu={userMenuItems} open={open} dynamic={user && user[0] && user[0].user_id} logout />
      </HeaderUser>
    </HeaderSec>
  );
};

export default Header;
