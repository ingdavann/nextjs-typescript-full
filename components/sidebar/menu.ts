import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
} from "react-icons/hi";

export const MenuList = [
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: HiChartPie,
	},
	{
		name: "Setting",
		path: "/setting",
		icon: HiViewBoards,
	},
	{
		name: "Inbox",
		path: "#",
		icon: HiInbox,

	},
	{
		name: "Users",
		path: "#",
		icon: HiUser,
	},
	{
		name: "Products",
		path: "#",
		icon: HiShoppingBag,
	},
	{
		name: "Sign In",
		path: "#",
		icon: HiArrowSmRight,
	},
	{
		name: "Sign Up",
		path: "#",
		icon: HiTable,
	},
];
