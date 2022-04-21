import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../svgs/home.svg';
import { ReactComponent as CreateIcon } from '../../svgs/erstellen.svg';
import { ReactComponent as PinnedIcon } from '../../svgs/pinned.svg';
import { ReactComponent as DecksIcon } from '../../svgs/decks.svg';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink to="/">
        <HomeIcon />
        Alle Karten
      </StyledLink>
      <StyledLink to="/create-card">
        <CreateIcon />
        Erstellen
      </StyledLink>
      <StyledLink to="/pinned">
        <PinnedIcon />
        Pinnwand
      </StyledLink>
      <StyledLink to="/decks">
        <DecksIcon />
        Stapel
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 90%;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4e9c9;
  border-radius: 10px 10px 0 0;
  box-shadow: rgba(140, 14, 3, 0.3) 0px -15px 25px -5px,
    rgba(140, 14, 3, 0.1) 0px -10px 10px -5px;
  text-decoration: none;
  color: #820d03;
  font-family: inherit;
  width: 100%;
  padding: 5px;
  z-index: 1;

  &.active {
    background-color: #ff8f05;
    color: #820d03;
    padding-top: 16px;
  }
`;
