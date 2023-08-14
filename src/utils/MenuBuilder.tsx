import Link from "next/link";
import React from "react";
import { TbLogout2 } from "react-icons/tb";

interface SubMenuProps {
  level: number;
  item: string;
  link: string;
  icon: React.ReactNode;
}

interface MenuProps {
  level: number;
  item: string;
  link: string;
  icon: React.ReactNode;
  submenu?: SubMenuProps[];
}

const MenuBuilder = ({
  menu,
  submenu,
  open,
  logout,
  dynamic,
}: {
  menu: MenuProps[];
  submenu?: boolean;
  open?: boolean;
  logout?: boolean;
  dynamic?: number;
}) => {
  return (
    <>
      {menu.length > 0 && (
        <ul className={`${open ? "open" : ""}`}>
          {menu.map((menu, menuIndex) => (
            <li key={menuIndex}>
              <Link href={`${menu.link}/${dynamic}`}>
                {menu.icon} {!submenu && menu.item}
              </Link>
              {menu.submenu && menu.submenu.length > 0 && (
                <ul>
                  <li>
                    <span>{menu.item}</span>
                  </li>
                  {menu.submenu.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link href={`${submenu.link}/${dynamic}`}>
                        {submenu.icon} {submenu.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {logout && (
            <li>
              <Link href="logout">
                <TbLogout2 /> Sair
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default MenuBuilder;
