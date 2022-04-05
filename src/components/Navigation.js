import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink to="/">
        <svg
          fill="#820D03"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="40px"
          height="40px"
        >
          <path
            fill="none"
            stroke="#820D03"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M3 17L16 4 29 17"
          />
          <path
            fill="none"
            stroke="#820D03"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M6 14L6 27 13 27 13 17 19 17 19 27 26 27 26 14"
          />
        </svg>
        Alle Karten
      </StyledLink>
      <StyledLink to="/create-card">
        <svg
          fill="#820D03"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          width="40px"
          height="40px"
        >
          <path d="M19,12h60c1.7,0,3-1.3,3-3s-1.3-3-3-3H19C11.8,6,6,11.8,6,19v90c0,7.2,5.8,13,13,13h50c1.7,0,3-1.3,3-3s-1.3-3-3-3H19c-3.9,0-7-3.1-7-7V19C12,15.1,15.1,12,19,12z" />
          <path d="M115.8 1.9c-1.2-1.2-3.1-1.2-4.2 0l-2.7 2.7c-.1.1-.3.3-.4.5-.8 1.1-.7 2.7.3 3.7l4.9 5.1c1.1 1.2 1.1 3.1 0 4.2L93.4 38.4c-1.2 1.2-3.1 1.2-4.2 0 0 0 0 0 0 0-1.2-1.2-1.2-3.1 0-4.2l16.1-16.1c1.2-1.2 1.2-3 0-4.2l-.7-.7c-1-1-2.6-1.2-3.8-.4-.2.1-.3.2-.5.4L70 43.4c-.6.6-.9 1.3-.9 2.1 0 .8.3 1.6.9 2.1l3.7 3.7 1.9 1.9c1 1 1.3 2.7.5 3.9-1.1 1.6-3.3 1.8-4.6.5L70 56l-4.1-4.1c-.7-.7-1.7-1-2.7-.8-1 .2-1.8.9-2.2 1.8l-7 16.9c-.5 1.1-.2 2.5.6 3.4l0 0c.8.9 2.1 1.1 3.2.7l17-7.2c0 0 0 0 0 0 .3-.1.7-.4 1-.6l8.5-8.5 41.6-41.5c.6-.6.9-1.3.9-2.1 0-.8-.3-1.6-.9-2.1L115.8 1.9zM89 122c.8 0 1.5-.3 2.1-.9l30-30c.6-.6.9-1.3.9-2.1h0V39c0-1.7-1.3-3-3-3s-3 1.3-3 3v47H99c-7.2 0-13 5.8-13 13v20c0 1.2.7 2.3 1.9 2.8C88.2 121.9 88.6 122 89 122zM92 99c0-3.9 3.1-7 7-7h12.8L92 111.8V99z" />
        </svg>
        Erstellen
      </StyledLink>
      <StyledLink to="/pinned">
        <svg
          width="40"
          height="40"
          viewBox="0 0 45 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.043 1.62499C30.7891 1.6328 30.5508 1.73437 30.3711 1.91015C30.1758 2.09374 30.0664 2.35155 30.0703 2.62109C30.0703 2.8828 30.1719 3.1328 30.3594 3.3203L41.6797 14.6406C42.0703 15.0273 42.6992 15.0273 43.0898 14.6406C43.4805 14.2461 43.4805 13.6133 43.0898 13.2226L31.7773 1.91015C31.582 1.71874 31.3164 1.61718 31.043 1.62499ZM30.3594 6.14843L21.8828 14.6406L30.3594 23.1172L38.8477 14.6406L30.3594 6.14843ZM3 11C2.44922 11 2 11.4492 2 12V48C2 48.5508 2.44922 49 3 49H27C27.5508 49 28 48.5508 28 48V29.1601C27.8359 29.0469 27.6797 28.918 27.5391 28.7773L24.0117 25.25L14.7109 34.6992C14.5234 34.8906 14.2695 35 14 35H8C7.59766 35 7.23047 34.7539 7.08203 34.3828C6.91797 34.0078 7.00781 33.5703 7.30078 33.2891L19.75 21L16.2227 17.4609C15.1172 16.2812 15.1484 14.4336 16.2891 13.2891C17.4336 12.1484 19.2812 12.1172 20.4609 13.2226H20.4688L22.6875 11H12V20C12 20.4062 11.7578 20.7695 11.3828 20.9219C11.2617 20.9766 11.1328 21.0039 11 21C10.7344 21 10.4805 20.8984 10.2891 20.7109L8 18.4101L5.71094 20.7109C5.42187 20.9961 4.99219 21.0781 4.62109 20.9219C4.24219 20.7695 4 20.4062 4 20V11H3ZM6 11V17.5898L7.28906 16.2891C7.68359 15.8984 8.31641 15.8984 8.71094 16.2891L10 17.5898V11H6ZM18.2539 14.293C17.8438 14.3047 17.4805 14.5703 17.3477 14.9609C17.2109 15.3516 17.3281 15.7812 17.6406 16.0508L28.9492 27.3594C29.1953 27.6445 29.5781 27.7695 29.9414 27.6797C30.3086 27.5937 30.5937 27.3086 30.6797 26.9414C30.7695 26.5781 30.6445 26.1953 30.3594 25.9492L19.0508 14.6406C18.8516 14.4101 18.5586 14.2812 18.2539 14.2891V14.293ZM-12 20C-12.5508 20 -13 20.4492 -13 21V57C-13 57.5508 -12.5508 58 -12 58H12C12.5508 58 13 57.5508 13 57V51H11V52H-5V50H0.777344C0.28125 49.4531 0 48.7422 0 48H-11V46H0V44H-10C-10.5508 44 -11 43.5508 -11 43V35C-11 34.4492 -10.5508 34 -10 34H0V20H-3V29C-3 29.4062 -3.24219 29.7695 -3.61719 29.918C-3.73828 29.9766 -3.86719 30.0039 -4 30C-4.26562 30 -4.51953 29.8984 -4.71094 29.7109L-7 27.4101L-9.28906 29.7109C-9.57813 29.9961 -10.0078 30.0781 -10.3828 29.918C-10.7578 29.7695 -11 29.4062 -11 29V20H-12ZM-9 20V26.5898L-7.71094 25.2891C-7.31641 24.8984 -6.68359 24.8984 -6.28906 25.2891L-5 26.5898V20H-9ZM21.1719 22.4101L10.4375 33H13.582L22.5898 23.8281L21.1719 22.4101ZM-9 36V42H0V36H-9ZM4 37H19V39H4V37ZM21 37H26V39H21V37ZM4 41H8V43H4V41ZM10 41H26V43H10V41ZM4 45H14V47H4V45ZM16 45H26V47H16V45ZM-11 50H-7V52H-11V50ZM-11 54H-1V56H-11V54ZM1 54H11V56H1V54Z"
            fill="#820D03"
          />
        </svg>
        Pinnwand
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
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
