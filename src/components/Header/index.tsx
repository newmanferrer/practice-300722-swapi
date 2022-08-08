import { Title, Navbar } from '../';
import { HeaderStyled } from './StyledComponents';

export const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <Title text='The Star Wars API' size='1.5rem' />
    </HeaderStyled>
  );
};
