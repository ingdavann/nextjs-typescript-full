'use client'
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {MenuList} from "./menu";
import { useAppSelector } from "@/redux/hooks";
import { selectAvatar, selectBio } from "@/redux/features/userProfile/userProfileSlice";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
}

export default function NavbarComponent() {
  const count = useAppSelector((state) => state.counter.value);
  const avatar = useAppSelector(selectAvatar);
  const bio = useAppSelector(selectBio);
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  // handle update menu items on active
  const updateMenu = (path: string) => {
    const newMenu = MenuList.map((item) => {
      if (path === item.path) {
        return {
          ...item,
          active: true 
        };
      }
      else{
        return {
          ...item,
          active: false
        };
      }
    });
    setMenu(newMenu);
  };
  return (
    <Navbar fluid rounded className="w-full">
      <NavbarBrand as={Link} href="#">
        <img src={avatar} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span>
          {bio} {count}
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {
          menu.map((item, index) => (
            <NavbarLink key={index} onClick={()=>updateMenu(item.path)} as={Link} href={item.path} active={item.active}>
              {item.name}
            </NavbarLink>
          ))
        }
      </NavbarCollapse>
    </Navbar>
  );
}
