import styled from 'styled-components';
import { NAVIGATION_ITEMS } from '../../constants/constants';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useEffect, useState } from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    if (isDrawerOpen === true) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isDrawerOpen]);

  return (
    <LayoutWrapper>
      <Nav isMobile={isMobile}>
        {isMobile ? (
          <>
            <HamburgerButton onClick={toggleDrawer} src="/svg/hamburger.svg" />
            <Drawer isOpen={isDrawerOpen}>
              <DrawerContent>
                <DrawerButton onClick={toggleDrawer} src="/svg/left-arrow.svg" />
                <NavLinkContainer isMobile={isMobile}>
                  {NAVIGATION_ITEMS.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      isActive={location.pathname === item.path}
                      onClick={toggleDrawer}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </NavLinkContainer>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <NavLinkContainer isMobile={isMobile}>
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink key={item.name} to={item.path} isActive={location.pathname === item.path}>
                {item.name}
              </NavLink>
            ))}
          </NavLinkContainer>
        )}
      </Nav>
      {children}
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface NavProps {
  isMobile: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  height: ${({ isMobile }) => (isMobile ? '44px' : '64px')};
  justify-content: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
  align-items: center;
  padding-left: 16px;
`;

interface NavLinkContainerProps {
  isMobile: boolean;
}

const NavLinkContainer = styled.div<NavLinkContainerProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? '60px' : '200px')};
`;

interface NavLinkProps {
  isActive: boolean;
}
const NavLink = styled(Link)<NavLinkProps>`
  font-size: 20px;
  font-weight: 900;
  line-height: 120%;
  transition: opacity 0.3s ease, color 0.3s ease;
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#7CA2B0')};
`;

const HamburgerButton = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const Drawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 150px;
  height: 100%;
  background-color: #000000;
  transition: left 0.3s ease-in-out;
  z-index: 10000000;
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const DrawerButton = styled.img`
  cursor: pointer;
  margin: 50px 0px;
  width: 24px;
  height: 24px;
`;
