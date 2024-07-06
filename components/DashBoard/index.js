import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../DashBoard/components/navbar";
import Sidebar from "../DashBoard/components/sidebar";
import Footer from "../DashBoard/components/footer/Footer";

import routes from "./routes.js";

export default function DashBoard(props) {
  const { ...rest } = props;
  //   const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  //   React.useEffect(() => {
  //     window.addEventListener("resize", () =>
  //       window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
  //     );
  //   }, []);
  //   React.useEffect(() => {
  //     getActiveRoute(routes);
  //   }, [location.pathname]);

  //   const getActiveRoute = (routes) => {
  //     let activeRoute = "Main Dashboard";
  //     for (let i = 0; i < routes.length; i++) {
  //       if (
  //         window.location.href.indexOf(
  //           routes[i].layout + "/" + routes[i].path
  //         ) !== -1
  //       ) {
  //         setCurrentRoute(routes[i].name);
  //       }
  //     }
  //     return activeRoute;
  //   };
  //   const getActiveNavbar = (routes) => {
  //     let activeNavbar = false;
  //     for (let i = 0; i < routes.length; i++) {
  //       if (
  //         window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
  //       ) {
  //         return routes[i].secondary;
  //       }
  //     }
  //     return activeNavbar;
  //   };
  //   const getRoutes = (routes) => {
  //     return routes.map((prop, key) => {
  //       if (prop.layout === "/admin") {
  //         return (
  //           <Route path={`/${prop.path}`} element={prop.component} key={key} />
  //         );
  //       } else {
  //         return null;
  //       }
  //     });
  //   };

  //   document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              //   secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              {selectedComponent ? (
                <div className="p-4">{selectedComponent}</div>
              ) : (
                <div className="p-4">
                  Please select a component from the sidebar.
                </div>
              )}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
