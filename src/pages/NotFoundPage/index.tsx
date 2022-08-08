import { Header, Footer, FlexContainer, Message } from '../../components';

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <FlexContainer>
        <Message type='error' text='Page Not Found' />
      </FlexContainer>
      <Footer />
    </>
  );
};
