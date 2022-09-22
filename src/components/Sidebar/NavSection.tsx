import { Stack, Icon, Text, Box, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
    sectionName: string;
    children: ReactNode;
}

export function NavSection({sectionName, children}: NavSectionProps) {
    return (
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            {sectionName}
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            {children}
          </Stack>
        </Box>
    );
}