import React from "react";
import type { HeadFC } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Hero } from "../components/Hero/Hero";

const IndexPage = () => {
    return (
        <>
            <Navigation />
            <Hero />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>DatPayments</title>;
