// src/components/Layout/Layout.tsx
import styled from 'styled-components';
import { NAVIGATION_ITEMS } from '../../constants/constants';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  /* TO DO : 임시 설정 */
  const isMobile = useIsMobile();

  return (
    <LayoutWrapper>
      <Header
        style={{
          backgroundColor: location.pathname === '/' ? '#4E1006' : 'black',
        }}
      >
        <Nav isMobile={isMobile}>
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink key={item.name} to={item.path} isActive={location.pathname === item.path}>
              {item.name}
            </NavLink>
          ))}
        </Nav>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: center;
`;

interface NavProps {
  isMobile: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  /* TO DO : 임시 설정 */
  gap: ${({ isMobile }) => (isMobile ? '20px' : '200px')};
  font-size: ${({ isMobile }) => (isMobile ? '20px' : '32px')};
  font-weight: 900;
  line-height: 120%;
  letter-spacing: -0.736px;
`;

export interface NavLinkProps {
  isActive: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  transition: opacity 0.3s ease, color 0.3s ease;
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#966B6B')};
  &:hover {
    opacity: 1;
  }
`;

const Main = styled.main`
  flex: 1;
`;
