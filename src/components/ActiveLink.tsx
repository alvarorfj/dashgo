import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}
export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive =
    (shouldMatchExactHref && asPath === rest.href) ||
    asPath === rest.as ||
    (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as));

  return (
    <Link {...rest} passHref>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.400",
      })}
    </Link>
  );
}
