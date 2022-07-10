import { Text, Icon, Link, LinkProps as ChackraLinkProps } from '@chakra-ui/react'
import { ElementType } from 'react';

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType;
  children: String;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}
