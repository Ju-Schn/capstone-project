import { ReactComponent as HomeIcon } from '../svgs/home.svg';
import { ReactComponent as CreateIcon } from '../svgs/erstellen.svg';
import { ReactComponent as PinnedIcon } from '../svgs/pinned.svg';
import { ReactComponent as DecksIcon } from '../svgs/decks.svg';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function LandingPage() {
  return (
    <FlexWrapper>
      <h2>Willkommen bei Cardify! 🤓</h2>
      <p>
        Möchtest du direkt neue Karten erstellen oder vielleicht sogar deine
        erste Karte?
      </p>
      <StyledNavLink to="/create">
        <CreateIcon />
        Erstellen
      </StyledNavLink>
      <p>Oder willst du dir deine bereits erstellten Karten ansehen?</p>
      <StyledNavLink to="/cards">
        <HomeIcon />
        Karten
      </StyledNavLink>
      <p>Hast du Karten gepinnt, die du wiederholen möchtest?</p>
      <StyledNavLink to="/pinned">
        <PinnedIcon />
        Pinnwand
      </StyledNavLink>
      <p>Oder hast du Lust direkt mit einem Lernstapel zu starten?</p>
      <StyledNavLink to="/decks">
        <DecksIcon />
        Stapel
      </StyledNavLink>
    </FlexWrapper>
  );
}

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 16px 0 16px 16px;

  p {
    margin: 0;
    margin-top: 32px;
    margin-bottom: 8px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  background-color: #f2b705;
  color: #8c0e03;
  border-radius: 30px;
  align-items: center;
  gap: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 8px 16px;
  align-self: center;
  border-radius: 30px;
  text-decoration: none;
`;
