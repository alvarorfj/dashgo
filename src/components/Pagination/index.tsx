import { Box, Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import { PageDetails } from "./PageDetails";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Stack
      direction={isWideVersion ? "row" : "column"}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <PageDetails/>
      <Stack direction="row">
        <PaginationItem pageNumber={1} isCurrent/>
        <PaginationItem pageNumber={2}/>
        <PaginationItem pageNumber={3}/>
        <PaginationItem pageNumber={4}/>
        <PaginationItem pageNumber={5}/>
      </Stack>
    </Stack>
  );
}
