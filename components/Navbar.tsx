"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button, Link } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Services", href: "/services" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background-300 shadow-md "
    >
      {/* Left Side: Brand + Mobile Menu Toggle */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/logo-transparent-horizontal.svg"
            alt="Company Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Center Links (Desktop) */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavbarItem key={link.href} isActive={isActive}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive ? "text-secondary font-semibold" : "text-primary"
                }
              >
                {link.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Right Side (Optional Buttons) */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/contact" color="primary" variant="flat">
            Request a Quote
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <NavbarMenuItem key={link.href} isActive={isActive}>
              <Link
                href={link.href}
                size="lg"
                className={isActive ? "font-semibold" : ""}
              >
                {link.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
