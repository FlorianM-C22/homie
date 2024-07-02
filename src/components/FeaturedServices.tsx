"use client";

import React from "react";

export default function FeaturedServices() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center">
        <div className="space-y-3">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-4xl">Featuring the best</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-md pb-8">
            A wide selection of Docker images, just for you !
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="mx-auto flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/504499/jellyfin.svg"
              width="140"
              height="70"
              alt="Jellyfin Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/331543/plex.svg"
              width="140"
              height="70"
              alt="Plex Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/518792/qbittorrent-remote.svg"
              width="140"
              height="70"
              alt="Qbittorrent Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/330638/homeassistant.svg"
              width="140"
              height="70"
              alt="Home Assistant Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/378478/vscode-fill.svg"
              width="140"
              height="70"
              alt="VSCode Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/305650/adguard.svg"
              width="140"
              height="70"
              alt="AdGuard Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
