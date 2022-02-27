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
import ReactPlayer from "react-player/lazy";
import "./style.css";

const ASTRONAUTS = ["🏛️", "👾", "🌀", "🦄", "🧬"];

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
          title="DeFi + Crypto Game to grow your crypto assets"
          subtitle="EvoVerses is a crosschain DeFi game. We will be available at the beginning in several chains, like Polygon and Harmony ONE. EvoVerses DAO has an objetive: build an entire DeFi ecosystem and we are starting by building a Pokemon-like DEX game. Sounds good? Join us now!"
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
            <p ref={btnAppToolTipPRef} data-effect="float" data-offset="{'left':60, 'bottom':20}" data-place="bottom" data-tip='We are working on it, check our Telegram Channel for news!'></p>
            <Spacer />
            <Button
              text="Join 🌀 Telegram Channel"
              href="https://t.me/evoversesOfficial"
              variant="secondary"
              onClick={()=>{
                ReactGA.event({
                  category: "conversion",
                  action: "open_telegram",
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
        <StyledSectionH2>Which DeFi and Game projects are we developing?</StyledSectionH2>
        <Spacer size="md" />
        <Spacer size="md" />
        <Spacer size="md" />
        <StyledSectionH3>1. Our Decentralized Game-Exchange: <span style={{color:"#DE961A"}}>🌀 EvoDEX</span></StyledSectionH3>
        <StyledSectionH4>A Pokemon-like game, but with its own Exchange, with community governance and multisig wallet</StyledSectionH4>
        <Spacer size="md" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>🏛️</CardIcon>
            <CardContent>
              <StyledCardName>Secure</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                Forked from UniSwap code, audited by the most popular companies
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
              <StyledCardName>Fun and Original</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                A real game but with a complete DeFi integration, your in-game assets now are useful in your real life!
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
              🌀 holders decide EvoVerses DAO's future via on-chain voting.
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
        <StyledSectionH3>2. Our Play-to-Earn Pokemon-like Game: <span style={{color:"#DE961A"}}>🦄 EvoVerses</span></StyledSectionH3>
        <StyledSectionH4>Note: This one will launch after the EvoDEX. Check our Telegram Channel for the latest updates!</StyledSectionH4>
        <Spacer size="md" />
        <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=tw7QJRhkwRs" height='auto' controls={false} muted={true} loop={true} playing={true} />
        <StyledSectionCaption>A little sneak peak of what is coming to EvoVerses, if you want more... you know, come to pur Telegram Channel 😏</StyledSectionCaption>
        <Spacer size="md" />
        <Spacer size="md" />
        <Spacer size="md" />
        <StyledSectionH3>And much more to come!</StyledSectionH3>
        <StyledSectionCaption>And the best part? Every service is connected to each other, building a huge and profitable ecosystem!</StyledSectionCaption>
        <Spacer size="md" />
        <StyledSectionH4CTA>Are you ready?</StyledSectionH4CTA>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
        <Button
              text="🦄 Start Now!"
              href="https://t.me/evoversesOfficial"
              variant="secondary"
              onClick={()=>{
                ReactGA.event({
                  category: "conversion",
                  action: "open_telegram",
                  label: "bottom_cta"
                });
              }}
            />
        </div>
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

const StyledSectionH4CTA = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  padding: 0;
  text-align: center;
`;

const StyledSectionCaption = styled.div`
  color: ${(props) => props.theme.colors.grey[400]};
  font-size: 14px;
  font-style: italic;
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
