import React, { useState, useCallback } from "react";

import { Container, Spacer, Button } from "react-neu";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Logo from "components/Logo";
import MenuIcon from "components/icons/Menu";

import DarkModeSwitch from "../DarkModeSwitch";
import Nav from "./components/Nav";
import WalletButton from "../WallletButton";
import ReactGA from "react-ga4";

interface TopBarProps { }

const TopBar: React.FC<TopBarProps> = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false);
  }, [setMobileMenu]);

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true);
  }, [setMobileMenu]);

  return (
    <StyledTopBar>
      <Container size="lg">
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          {/* {location.pathname !== "/" && (
            <>
              {mobileMenu ? (
                <StyledMobileMenuWrapper>
                  <Nav
                    onDismiss={handleDismissMobileMenu}
                    mobileMenu={mobileMenu}
                  />
                </StyledMobileMenuWrapper>
              ) : (
                <StyledNavWrapper>
                  <Nav
                    onDismiss={handleDismissMobileMenu}
                    mobileMenu={mobileMenu}
                  />
                </StyledNavWrapper>
              )}
            </>
          )} */}
          <StyledLeftMenuBalancesWrapper>
            <StyledAccountButtonWrapper>
              {/*
             <StyledLangSwitch>
                <LanguageSwitcher/>
              </StyledLangSwitch>
              <Spacer />*/}
              <StyledTopBarDarkModeSwitch>
                <DarkModeSwitch />
              </StyledTopBarDarkModeSwitch>
              <Spacer />
              {/* {location.pathname !== "/" ? (
                <WalletButton />
              ) : (*/}
                <Button size="sm" text="Join 🌀 Discord"
              href="https://discord.gg/jEg5phcWmw"
              onClick={()=>{
                ReactGA.event({
                  category: "conversion",
                  action: "open_discord",
                  label: "top_bar"
                });
              }}
              variant="secondary" />
              {/* })} */}
            </StyledAccountButtonWrapper>
            {location.pathname !== "/" && (
              <>
                <Spacer />
                <StyledMenuButton onClick={handlePresentMobileMenu}>
                  <MenuIcon />
                </StyledMenuButton>
              </>
            )}
          </StyledLeftMenuBalancesWrapper>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  );
};

const StyledLogoWrapper = styled.div`
  width: 190px;
  @media (max-width: 400px) {
    width: auto;
  }
`;

const StyledTopBar = styled.div``;

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`;
// width: 280px;

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 770px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`;

const StyledLeftMenuBalancesWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;
`;

const StyledTopBarDarkModeSwitch = styled.div`
  @media (max-width: 1130px) {
    display: none;
  }
`;
const StyledLangSwitch = styled.div`
  @media (max-width: 1130px) {
    display: none;
  }
`;
export default TopBar;
