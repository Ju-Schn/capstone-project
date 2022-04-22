import StyledButton from '../components/StyledButton';
import { ReactComponent as HomeIcon } from '../svgs/home.svg';
import { ReactComponent as CreateIcon } from '../svgs/erstellen.svg';
import { ReactComponent as PinnedIcon } from '../svgs/pinned.svg';
import { ReactComponent as DecksIcon } from '../svgs/decks.svg';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <FlexWrapper>
      <h2>Willkommen bei Cardify! 🤓</h2>
      <p>
        Möchste du direkt neue Karten erstellen oder vielleicht sogar deine
        erste Karte?
      </p>
      <StyledButton variant="yellow" onClick={() => navigate('/create')}>
        <CreateIcon />
        Erstellen
      </StyledButton>
      <p>Oder willst du dir deine bereits erstellten Karten ansehen?</p>
      <StyledButton variant="yellow" onClick={() => navigate('/cards')}>
        <HomeIcon />
        Karten
      </StyledButton>
      <p>Hast du Karten gepinnt, die du wiederholen möchtest?</p>
      <StyledButton variant="yellow" onClick={() => navigate('/pinned')}>
        <PinnedIcon />
        Pinnwand
      </StyledButton>
      <p>Oder hast du Lust direkt mit einem Lernstapel zu starten?</p>
      <StyledButton variant="yellow" onClick={() => navigate('/decks')}>
        <DecksIcon />
        Stapel
      </StyledButton>
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

  h2 {
    margin-bottom: 0;
  }
`;
