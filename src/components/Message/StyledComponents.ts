//* ///////////////////////////////////////////////////////////////////////////
//* ErrorMessage
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
interface IProps {
  type?: 'success' | 'warn' | 'error';
}
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- MessageWrapper
//* ---------------------------------------------------------------------------
const MessageWrapper = styled(Container)<IProps>`
  width: 95vw;
  padding: 1rem;

  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${COLORS.white};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  border: 2px solid;
  border-color: ${({ type }) =>
    type === 'success'
      ? COLORS.success
      : type === 'warn'
      ? COLORS.warning
      : type === 'error'
      ? COLORS.error
      : COLORS.black};
  border-radius: 5px;
  background-color: ${COLORS.white};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- MessageStyled
//* ---------------------------------------------------------------------------
const MessageStyled = styled.p<IProps>`
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: ${({ type }) =>
    type === 'success'
      ? COLORS.success
      : type === 'warn'
      ? COLORS.warning
      : type === 'error'
      ? COLORS.error
      : COLORS.black};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { MessageWrapper, MessageStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
