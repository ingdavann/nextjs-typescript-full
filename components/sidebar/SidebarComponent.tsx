"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
    name: string;
    path: string;
    icon: React.ElementType;
}

export default function SidebarComponent() {
    const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {
                        menuList.map((item, index) => (
                            <Sidebar.Item 
                            key={index}
                            as={Link} 
                            href={item.path}
                            icon={item.icon}
                            >
                                {item.name}
                            </Sidebar.Item>
                        ))
                    }
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
