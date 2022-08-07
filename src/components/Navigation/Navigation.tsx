import { Button, Container, Tooltip, Box } from "@chakra-ui/react";

import React from "react";
import { Logo } from "../Logo/Logo";

export function Navigation() {
    return (
        <Container
            maxW="container.xl"
            py="4"
            display="flex"
            justifyContent="space-between"
        >
            <Logo />
            <Tooltip label="Alpha testing">
                <Box>
                    <Button disabled>Log In</Button>
                </Box>
            </Tooltip>
        </Container>
    );
}
