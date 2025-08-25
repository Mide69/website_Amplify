import React from "react";
import ScrollToTop from "@/components/ui/scroll-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/swiper.css";
import "@/assets/scss/style.scss";
import "aos/dist/aos.css";
import Client from "./client";

const Layout = ({ children }) => {
    return (
        <>
            <Client />
            {children}
            <ScrollToTop />
        </>
    );
};

export default Layout;
