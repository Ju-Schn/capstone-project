import styled from 'styled-components';
import StyledButton from '../StyledButton';
import { ReactComponent as HomeIcon } from '../../svgs/home.svg';
import { ReactComponent as CreateIcon } from '../../svgs/erstellen.svg';
import { ReactComponent as PinnedIcon } from '../../svgs/pinned.svg';
import { ReactComponent as DecksIcon } from '../../svgs/decks.svg';

export default function FormNavigation({ onNavClick }) {
  return (
    <StyledNav>
      <StyledButton onClick={() => onNavClick('/')} variant="navigation">
        <HomeIcon />
        Alle Karten
      </StyledButton>
      <StyledButton
        onClick={() => onNavClick('/create-card')}
        variant="navigationActive"
      >
        <CreateIcon />
        Erstellen
      </StyledButton>
      <StyledButton variant="navigation" onClick={() => onNavClick('/pinned')}>
        <PinnedIcon />
        Pinnwand
      </StyledButton>

      <StyledButton onClick={() => onNavClick('/decks')} variant="navigation">
        <DecksIcon />
        Stapel
      </StyledButton>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  z-index: 1;
  position: fixed;
  bottom: 0;
`;
