"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const currentPath = usePathname();

  return (
    <div className="flex space-x-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Menu;
