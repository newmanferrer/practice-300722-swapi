import { Header, Footer, FlexContainer, Message } from '../../components';

export const AboutPage = () => {
  return (
    <>
      <Header />
      <FlexContainer>
        <Message type='success' text='Hi, I am Newman Ferrer' />
      </FlexContainer>
      <Footer />
    </>
  );
};
