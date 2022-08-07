import React, { useEffect } from "react";
import type { HeadFC } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Hero } from "../components/Hero/Hero";
import { useColorMode } from "@chakra-ui/react";

const IndexPage = () => {
    const { setColorMode } = useColorMode();
    useEffect(() => {
        setColorMode("dark");
    }, []);

    return (
        <>
            <Navigation />
            <Hero />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>DatPayments</title>;
