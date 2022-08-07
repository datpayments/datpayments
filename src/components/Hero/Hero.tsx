import { Container, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import example from "./example.svg";

export function Hero() {
    return (
        <Container maxW="container.xl" height="calc(100vh - 72px)">
            <Grid templateColumns="repeat(2, 1fr)" gap={6} height="100%">
                <GridItem display="flex" alignItems="center">
                    <Heading as="h1" fontSize="4xl" lineHeight="50px">
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
