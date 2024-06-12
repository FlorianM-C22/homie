"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <Avatar>
          <AvatarImage src="https://pbs.twimg.com/profile_images/1385888860022976513/1bc7D0o__400x400.jpg" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>
      <div className="grow">
        <p className="text-[16px] font-bold">Florian Meignan</p>
        <p className="text-[12px] text-neutral-500">florian.meignan@gmail.com</p>
      </div>
    </div>
  );
}
