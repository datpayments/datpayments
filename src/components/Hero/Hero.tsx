import { Container, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import example from "./example.svg";

export function Hero() {
    return (
        <Container
            maxW="container.xl"
            h="calc(100vh - 72px - 32px)"
            padding="4"
        >
            <Grid
                templateColumns={["", "", "repeat(2, 1fr)"]}
                templateRows={["repeat(2, 1fr)", "auto", "auto"]}
                gap={6}
                height="100%"
            >
                <GridItem
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        as="h1"
                        fontSize={["2xl", "3xl", "4xl"]}
                        lineHeight={["", "", "50px"]}
                        textAlign={["center", "center", "initial"]}
                    >
                        Accept crypto payments
                        <br />
                        for your products right now
                    </Heading>
                </GridItem>
                <GridItem display="flex" alignItems="center">
                    <Image src={example} width="125%" />
                </GridItem>
            </Grid>
        </Container>
    );
}
