import { Button, Container, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "gatsby";
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
                <Button as={Link} to="/auth" disabled>
                    Log In
                </Button>
            </Tooltip>
        </Container>
    );
}
