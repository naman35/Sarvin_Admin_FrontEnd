import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../DashBoard/components/navbar";
import Sidebar from "../DashBoard/components/sidebar";
import Footer from "../DashBoard/components/footer/Footer";

export default function DashBoard(props) {
  const { ...rest } = props;
  //   const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  return (
    <div className="flex h-full w-full bg-[#f6f7fd]">
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
              secondary={selectedComponent}
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
