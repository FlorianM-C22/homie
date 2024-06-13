"use client";

import { User, Blocks, Home, Settings } from "lucide-react";
import UserItem from "./UserItem";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import React from "react";


export default function Sidebar() {
  interface IMenuList {
    group: string;
    items: IMenuItem[];
  }

  interface IMenuItem {
    link: string;
    icon: JSX.Element;
    text: string;
  }

  const menuList:IMenuList[] = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <Home />,
          text: "Menu 1"
        },
        {
          link: "/",
          icon: <Blocks />,
          text: "Menu 2"
        },
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Menu 3"
        },
        {
          link: "/",
          icon: <Settings />,
          text: "Menu 4"
        },
      ]
    }
  ]

  return (
    <div className="fixed flex flex-col gap-2 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key ={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) =>
                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                    {option.icon}
                    {option.text}
                </CommandItem>
                  )}
                </CommandGroup>
          ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
}
