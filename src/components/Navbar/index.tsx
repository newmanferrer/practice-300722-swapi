import { NavStyled, LinkStyled } from './StyledComponents';

export const Navbar = () => {
  return (
    <NavStyled>
      <LinkStyled to='/'>Home</LinkStyled>
      <LinkStyled to='/about'>About</LinkStyled>
    </NavStyled>
  );
};
