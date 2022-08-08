import { MessageWrapper, MessageStyled } from './StyledComponents';

interface IMessageProps {
  type?: 'success' | 'warn' | 'error';
  text: string;
}

export const Message = ({ type, text }: IMessageProps) => {
  return (
    <MessageWrapper type={type}>
      <MessageStyled type={type}>{text}</MessageStyled>
    </MessageWrapper>
  );
};
