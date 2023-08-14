import { MenuDiv } from "./styles";
import Image from "next/image";

import { mainMenuItems } from "@/utils/Menu";
import MenuBuilder from "@/utils/MenuBuilder";

const Menu = () => {
  const menuItems = mainMenuItems.filter((items) => items.last !== 1);
  const lastMenuItems = mainMenuItems.filter((items) => items.last === 1);

  return (
    <MenuDiv>
      <ul>
        <li className="logo">
          <Image
            src="/box.webp"
            alt="Quick Stock Logo"
            className="mx-auto"
            width={30}
            height={30}
            priority
          />
        </li>
      </ul>
      <MenuBuilder menu={menuItems} submenu />
      <MenuBuilder menu={lastMenuItems} submenu />
    </MenuDiv>
  );
};

export default Menu;
