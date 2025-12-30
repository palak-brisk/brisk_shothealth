"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHouse,
  FaUserGear,
  FaAngleDown,
  FaUserNurse,
  FaFile,
  FaUserInjured,
  FaWallet,
  FaSackDollar,
  FaClipboardList,
  FaEnvelope,
  FaBuildingColumns,
  FaGear,
  FaUsers,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  //  PAtient navigation
  {
    icon: <FaHouse />,
    name: "Home",
    path: "/patient/dashboard",
  },
  // {
  //   icon: <FaUserGear />,
  //   name: "Manage Profile",
  //   path: "/profile",
  // },
  {
    icon: <FaClipboardList />,
    name: "My Service Request",
    subItems: [
      {
        name: "Pending Request",
        path: "/patient/serviceReq/pendingReq",
        pro: false,
      },
      {
        name: "Assigned Request",
        path: "/patient/serviceReq/assignedReq",
        pro: false,
      },
      {
        name: "Cancelled/Expired Request",
        path: "/patient/serviceReq/cancelledReq",
        pro: false,
      },

      {
        name: "Completed Request",
        path: "/patient/serviceReq/completedReq",
        pro: false,
      },
    ],
  },
  // nurse navigation
  {
    icon: <FaHouse />,
    name: "Home",
    path: "/provider/dashboard",
  },
  // {
  //   icon: <FaUserGear />,
  //   name: "Manage Profile",
  //   path: "/profile",
  // },
  {
    icon: <FaBuildingColumns />,
    name: "My Bank Details",
    path: "/provider/bankDetails",
  },
  {
    icon: <FaFile />,
    name: "My Document",
    path: "/provider/myDoc",
  },
  {
    icon: <FaWallet />,
    name: "My Wallet History",
    path: "/provider/walletHistory",
  },
  {
    icon: <FaSackDollar />,
    name: "Withdraw Request",
    path: "/provider/withdrawReq",
  },
  {
    icon: <FaClipboardList />,
    name: "Service Request",
    subItems: [
      {
        name: "Manage Service Request",
        path: "/provider/serviceReq/manageServiceReq",
        pro: false,
      },
      {
        name: "Assigned Request",
        path: "/provider/serviceReq/assignedReq",
        pro: false,
      },
      {
        name: "Completed Request",
        path: "/provider/serviceReq/completedReq",
        pro: false,
      },
    ],
  },
  // admin navigation
  {
    icon: <FaHouse />,
    name: "Home",
    path: "/admin/dashboard",
  },
  // {
  //   icon: <FaUserGear />,
  //   name: "Manage Profile",
  //   path: "/profile",
  // },
  {
    icon: <FaUsers />,
    name: "Users",
    path: "/admin/users",
  },
  {
    icon: <FaGear />,
    name: "Settings",
    path: "/admin/settings",
  },
  {
    icon: <FaEnvelope />,
    name: "Email Templates",
    path: "/admin/emailTemplates",
  },
  {
    icon: <FaClipboardList />,
    name: "Masters",
    subItems: [
      {
        name: "Service Request Type",
        path: "/admin/masters/serviceReqType",
        pro: false,
      },
      {
        name: "Document Type",
        path: "/admin/masters/docType",
        pro: false,
      },
    ],
  },

  {
    icon: <FaUserNurse />,
    name: "Provider Management",
    subItems: [
      {
        name: "View All",
        path: "/admin/providerManagement/viewAll",
        pro: false,
      },
      {
        name: "Newly Registered",
        path: "/admin/providerManagement/newlyRegistered",
        pro: false,
      },
      {
        name: "View Pending Provider",
        path: "/admin/providerManagement/viewPendingNurse",
        pro: false,
      },
    ],
  },
  {
    icon: <FaUserInjured />,
    name: "Patients",
    subItems: [
      { name: "View All", path: "/admin/patients/viewAllPatient", pro: false },
      {
        name: "Register New",
        path: "/admin/patients/registerNew",
        pro: false,
      },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (navItems: NavItem[], menuType: "main") => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <FaAngleDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-secondary-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main"].forEach((menuType) => {
      const items = navItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden ml-5"
                src="/images/logo/logo.png"
                alt="Logo"
                width={180}
                height={40}
              />
              <Image
                className="hidden dark:block ml-5"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={180}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>{renderMenuItems(navItems, "main")}</div>
          </div>
        </nav>
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;
