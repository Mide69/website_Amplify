"use client";
import dynamic from "next/dynamic";

const ClientSideOnlyLazy = dynamic(() => import("./external"), {
    ssr: false,
});

const Client = () => {
    return <ClientSideOnlyLazy />;
};

export default Client;
