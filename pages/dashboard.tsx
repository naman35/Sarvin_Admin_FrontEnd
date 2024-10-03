import { Center } from "@chakra-ui/react";
import { Auth } from "@saas-ui/auth";
import { Link } from "@saas-ui/react";
// import { BackgroundGradient } from "components/gradients/background-gradient";
// import { PageTransition } from "components/motion/page-transition";
// import { Section } from "components/section";
import Dashboard from "components/DashBoard";
import { NextPage } from "next";
import { FaGithub, FaGoogle } from "react-icons/fa";

const providers = {
  google: {
    name: "Google",
    icon: FaGoogle,
  },
  github: {
    name: "Github",
    icon: FaGithub,
    variant: "solid",
  },
};

const DashboardLayout: NextPage = () => {
  return (
    <div>
      {/* <BackgroundGradient height="100%" zIndex="-1" /> */}
      <Dashboard />
    </div>
  );
};

export default DashboardLayout;
