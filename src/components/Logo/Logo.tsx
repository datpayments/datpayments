import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export function Logo() {
    return (
        <Flex>
            <Heading
                userSelect="none"
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(270deg, #DB2777 0%, #6D28D9 100%)"
                bgClip="text"
            >
                DatPayments
            </Heading>
        </Flex>
    );
}
