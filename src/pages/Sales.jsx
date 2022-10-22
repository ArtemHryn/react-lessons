import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'components/Box';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

const Sales = () => {
  return(<Box as="main" display="flex" flexDirection="column">
    <Box as="header" borderBottom="1px solid black" p={4}>
      <Box as="ul" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
    <Outlet />
  </Box>)
};

export default Sales