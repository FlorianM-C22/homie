import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";
import HomieLogo from './HomieLogo.jsx';
import WavyBackgroundDemo from "@/components/wavybackground";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

export default function Home() {
  return (
      <>
          <Navbar>
            <NavbarBrand>
            <HomieLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="#">
                  Features
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page">
                  Documentation
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Integrations
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="/signup" variant="solid">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <WavyBackgroundDemo />
          </div>
      </>
    );
}
