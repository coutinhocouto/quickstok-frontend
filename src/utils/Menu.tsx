import { BsBox2Fill, BsBoxSeam, BsFillCartFill, BsTools } from "react-icons/bs";
import { MdOutlineSell, MdSpaceDashboard } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { BiCategoryAlt, BiMoneyWithdraw, BiSolidChat } from "react-icons/bi";
import { FiUser, FiUsers } from "react-icons/fi";
import {
  AiOutlineGift,
  AiOutlineBarChart,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { PiGearLight } from "react-icons/pi";

export const mainMenuItems = [
  {
    level: 0,
    item: "Dashboard",
    link: "/dashboard",
    icon: <MdSpaceDashboard />,
    submenu: [],
  },
  {
    level: 0,
    item: "Cadastros",
    link: "/dashboard/register",
    icon: <FaListAlt />,
    submenu: [
      {
        level: 0,
        icon: <FiUsers />,
        item: "Clientes e fornecedores",
        link: "/dashboard/register/clients",
      },
      {
        level: 0,
        icon: <BsBoxSeam />,
        item: "Produtos",
        link: "/dashboard/register/products",
      },
      {
        level: 0,
        icon: <BsTools />,
        item: "Serviços",
        link: "/dashboard/register/services",
      },
      {
        level: 0,
        icon: <BiCategoryAlt />,
        item: "Categorias dos produtos",
        link: "/dashboard/register/categories",
      },
      {
        level: 0,
        icon: <MdOutlineSell />,
        item: "Vendedores",
        link: "/dashboard/register/sellers",
      },
      {
        level: 0,
        icon: <AiOutlineGift />,
        item: "Embalagens",
        link: "/dashboard/register/packaging",
      },
      {
        level: 0,
        icon: <AiOutlineBarChart />,
        item: "Relatórios",
        link: "/dashboard/register/reports",
      },
    ],
  },
  {
    level: 0,
    item: "Suprimentos",
    link: "/dashboard/supplies",
    icon: <BsBox2Fill />,
    submenu: [],
  },
  {
    level: 0,
    item: "Vendas",
    link: "/dashboard/sells",
    icon: <BsFillCartFill />,
    submenu: [],
  },
  {
    level: 0,
    item: "Finanças",
    link: "/dashboard/finance",
    icon: <BiMoneyWithdraw />,
    submenu: [],
  },
  {
    level: 0,
    item: "Suporte",
    link: "/dashboard/support",
    icon: <BiSolidChat />,
    last: 1,
    submenu: [
      {
        level: 0,
        icon: <AiOutlineBarChart />,
        item: "Relatórios",
        link: "/dashboard/support/reports",
      },
    ],
  },
];

export const userMenuItems = [
  {
    level: 0,
    item: "Perfil",
    link: "/dashboard/profile",
    icon: <FiUser />,
  },
  {
    level: 0,
    item: "Cobrança",
    link: "/dashboard/billing",
    icon: <AiOutlineCreditCard />,
  },
  {
    level: 0,
    item: "Configurações",
    link: "/dashboard/configurations",
    icon: <PiGearLight />,
  },
];
