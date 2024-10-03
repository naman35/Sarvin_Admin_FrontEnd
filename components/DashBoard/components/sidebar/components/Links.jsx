/* eslint-disable */
import React from "react";
import DashIcon from "../../../components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode

  const {
    routes,
    selectedComponent = {},
    setSelectedComponent = () => {},
  } = props;
  const handleRouteClick = (component) => {
    setSelectedComponent(component);
  };
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (true) {
        return (
          <div key={index}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
                onClick={() => handleRouteClick(route.component)}
              >
                <span
                  className={`${
                    selectedComponent == route.component
                      ? "font-bold text-brand-500 text-[#e65c55]"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    selectedComponent == route.component
                      ? "font-bold text-navy-700 text-black underline"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {selectedComponent == route.component ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </div>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
