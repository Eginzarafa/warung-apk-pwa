"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Drawer, Button, Image } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              preview={false}
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`transition ${
                isActive("/")
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`transition ${
                isActive("/menu")
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/tentang"
              className={`transition ${
                isActive("/tentang")
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Tentang
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <Button
              icon={<MenuOutlined />}
              type="text"
              onClick={showDrawer}
              className="text-gray-700 hover:text-orange-600"
            />
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        width={250}
        title={
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={80}
            preview={false}
          />
        }
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          onClick={closeDrawer}
          theme="light"
          style={{ fontWeight: 500 }}
        >
          <Menu.Item
            key="/"
            style={
              pathname === "/" ? { color: "#f97316", fontWeight: "bold" } : {}
            }
          >
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="/menu"
            style={
              pathname === "/menu"
                ? { color: "#f97316", fontWeight: "bold" }
                : {}
            }
          >
            <Link href="/menu">Menu</Link>
          </Menu.Item>
          <Menu.Item
            key="/tentang"
            style={
              pathname === "/tentang"
                ? { color: "#f97316", fontWeight: "bold" }
                : {}
            }
          >
            <Link href="/tentang">Tentang</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
}
