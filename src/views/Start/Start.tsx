import React, { useCallback, useEffect, useState, useRef } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  Spacer,
} from "react-neu";
import styled from "styled-components";

import StartPage from "components/StartPage";
import StartPageHeader from "components/StartPageHeader";
import StartSplit from "components/StartSplit";
import ReactTooltip from "react-tooltip";
import ReactGA from "react-ga4";
import "./style.css";

const ASTRONAUTS = ["🕛", "🏛️", "⏳", "🌀", "👾"];

const Start: React.FC = () => {
  const [astronaut, setAstronaut] = useState("🌀");
  const btnAppToolTipPRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)];
    setAstronaut(newAstro);
  }, [setAstronaut]);

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000);
    return () => clearInterval(refresh);
  }, [updateAstronaut]);

  return (
    <StartPage>
      <ReactTooltip />
      <StyledHero>
        <StartPageHeader
          icon={`${astronaut}`}
          title="DeFi 2.0 tools to grow your crypto assets"
          subtitle="EvoVerses DAO is the OlympusDAO + Tomb.finance fork on Harmony ONE. EvoVerses DAO has an objetive: build an entire DeFi ecosystem and we are starting by building a community owned protocol for decentralized reserve currency."
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Open App" onClick={()=> {
              ReactGA.event({
                category: "conversion",
                action: "not_yet_app",
                label: "hero"
              });
              ReactTooltip.show(btnAppToolTipPRef.current);
            }} />
            <p ref={btnAppToolTipPRef} data-effect="float" data-offset="{'left':60, 'bottom':20}" data-place="bottom" data-tip='We are working on it, check our Discord for news!'></p>
            <Spacer />
            <Button
              text="Join 🌀 Discord"
              href="https://discord.gg/jEg5phcWmw"
              variant="secondary"
              onClick={()=>{
                ReactGA.event({
                  category: "conversion",
                  action: "open_discord",
                  label: "hero"
                });
              }}
            />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        <StyledSectionIcon>⚖️</StyledSectionIcon>
        <Spacer size="lg" />
        <StyledSectionTitle>Fair finance for everyone.</StyledSectionTitle>
        <StyledSectionDescription>
          EvoVerses DAO is owned and controlled by our community of 🌀 token holders.<br/> Yes, we are a DAO with community votes and <b>multisig wallet</b>, as every project should be!
        </StyledSectionDescription>
        <Spacer size="lg" />
        <StyledSectionH2>Which DeFi services do we currently have?</StyledSectionH2>
        <Spacer size="md" />
        <Spacer size="md" />
        <Spacer size="md" />
        <StyledSectionH3>Our OHM Fork: <span style={{color:"#DE961A"}}>🌀 Portal</span></StyledSectionH3>
        <StyledSectionH4>A real DAO, with community governance and multisig wallet</StyledSectionH4>
        <Spacer size="md" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>🏛️</CardIcon>
            <CardContent>
              <StyledCardName>Protocol Owned Liquidity</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                No more predatory farmers. Lock-in liquidity also help regulate PTL supply.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Start farming" variant="secondary" to="/farm" />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>💸</CardIcon>
            <CardContent>
              <StyledCardName>Growing Treasury</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                In our OHM fork, bond sales and liquidity fees increase Treasury values, which back outstanding PTL tokens with intrinsic value.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button
                  text="View treasury"
                  variant="secondary"
                  to="/dashboard"
                />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>🗣️</CardIcon>
            <CardContent>
              <StyledCardName>Decentralized Governance</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
              🌀 holders decide Evoverses DAO's future via on-chain voting.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Go vote" variant="secondary" to="/governance" />
              </Box>
            </CardActions> */}
          </Card>
        </StartSplit>
        <Spacer size="md" />
        <Spacer size="md" />
        <Spacer size="md" />
        <StyledSectionH3>Our Tomb.finance Fork: <span style={{color:"#DE961A"}}>🧬 DNA</span></StyledSectionH3>
        <StyledSectionH4>Note: This one will launch after Portal, since we are still working in the Oracla solution. Check our Discord for the latest updates!</StyledSectionH4>
        <Spacer size="md" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>₿</CardIcon>
            <CardContent>
              <StyledCardName>Algocoin pegged to BTC</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                Enjoy high yields normally only found on high risk assets, but with exposure to BTC instead and minimal fees!
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button
                  text="View treasury"
                  variant="secondary"
                  to="/dashboard"
                />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>🧰</CardIcon>
            <CardContent>
              <StyledCardName>Use Cases</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                A coin with no uses has no value. That is why 🌀 $PTL and 🧬 $DNA will be a core part of all our ecosystem, including our upcoming game: EvoVerses.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Start farming" variant="secondary" to="/farm" />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>📈</CardIcon>
            <CardContent>
              <StyledCardName>10,000:1 Ratio</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
              Because of BTCs high per coin price,<br/>🧬 $DNA is pegged to $WBTC at a 10,000:1 ratio
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Go vote" variant="secondary" to="/governance" />
              </Box>
            </CardActions> */}
          </Card>
        </StartSplit>
        <Spacer size="md" />
        <Spacer size="md" />
        <Spacer size="md" />
        <StyledSectionH3>And much more to come!</StyledSectionH3>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
      </Container>
    </StartPage>
  );
};

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`;

const StyledCardName = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const StyledCardDescription = styled.div`
  color: ${(props) => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`;
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`;

const StyledSectionTitle = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionH2 = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionH3 = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionH4 = styled.div`
  color: ${(props) => props.theme.colors.grey[400]};
  font-size: 16px;
  max-width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  padding: 0;
  text-align: center;
`;

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`;

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`;

export default Start;
