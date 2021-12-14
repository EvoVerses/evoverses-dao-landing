import React, {useRef} from "react";
import styled from "styled-components";
import { Container, Spacer, useTheme } from "react-neu";
import { NavLink } from "react-router-dom";

import Split from "components/Split";
import footers from "constants/Footers.json";
import ReactGA from "react-ga4";
import DarkModeSwitch from "../DarkModeSwitch";
import ReactTooltip from "react-tooltip";

const StartFooter: React.FC = () => {
  const footerItems = footers;
  const refArray = useRef([]) as React.MutableRefObject<HTMLInputElement[]>;

  const { darkMode } = useTheme();
  return (
    <StyledFooter darkMode={darkMode}>
      <ReactTooltip />
      <Spacer size="lg" />
      <Container>
        <Split>
          {footerItems.map((footer: any, index: any) => (
            <StyledDivContainer key={index}>
              {footer.router || !footer.homeDisplay ? (
                <StyledRouterLink exact to={!footer.homeDisplay ? '' : footer.url} onClick={()=>{
                  if(!footer.homeDisplay)
                  {
                    ReactGA.event({
                      category: "conversion",
                      action: `not_yet_${footer.name.toLowerCase()}`,
                      label: "footer_bar"
                    });
                    for(let i=0;i<footerItems.length;i++)
                    {
                      ReactTooltip.hide(refArray.current[i]);
                    }
                    ReactTooltip.show(refArray.current[index]);
                  }else{
                    ReactGA.send({
                      hitType: "pageview",
                      page: footer.url
                    });
                  }
                }}>
                  {footer.name}
                </StyledRouterLink>
              ) : (
                <StyledLink onClick={()=>{
                  ReactGA.event({
                    category: "conversion",
                    action: `open_${footer.name.toLowerCase()}`,
                    label: "footer_bar"
                  });
                }} href={footer.url} target="_blank">
                  {footer.name}
                </StyledLink>
              )}
              <p ref={ref => {
                    refArray.current[index] = ref as HTMLInputElement;
                  }} data-effect="float" data-offset="{'left':50, 'top':10}" data-place="top" data-tip='We are working on it, check our Discord for news!'></p>
            </StyledDivContainer>
          ))}
        </Split>
      </Container>
      <Spacer size="lg" />
      <StyledFooterText>
        <span style={{ opacity: 0.5 }}>Built with </span>
        <span role="img"> ❤️ </span>
        <span style={{ opacity: 0.5 }}>by the EvoVerses community.</span>
        <br />
        <span style={{ opacity: 0.5 }}>All rights reserved. © {new Date().getFullYear()} EvoVerses</span>
      </StyledFooterText>
      <Spacer />
      <StyledFooterDarkModeSwitch>
        <br />
        <DarkModeSwitch />
        <br />
      </StyledFooterDarkModeSwitch>
      <Spacer size="md" />
    </StyledFooter>
  );
};

interface StyledFooterProps {
  darkMode?: boolean;
}

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledFooter = styled.div<StyledFooterProps>`
  background-color: ${(props) =>
    props.darkMode
      ? props.theme.colors.grey[800]
      : props.theme.colors.grey[300]};
`;

const StyledFooterText = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.grey[500]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.grey[600]};
  }
`;

const StyledRouterLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey[500]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.grey[600]};
  }
`;

const StyledFooterDarkModeSwitch = styled.div`
  display: none;
  @media (max-width: 1130px) {
    display: flex;
    justify-content: center;
  }
`;

export default StartFooter;
