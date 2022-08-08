//* ///////////////////////////////////////////////////////////////////////////
//* CharactersPagination
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
interface ButtonPrevProps {
  prev: string | null;
}

interface ButtonNextProps {
  next: string | null;
}
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
const Button = styled.button`
  width: 4rem;
  padding: 0.2rem 0;

  font-size: 0.8rem;
  font-weight: bold;
  color: ${COLORS.white};
  letter-spacing: 1px;
  outline: none;

  transition: all 0.5s ease-in-out;

  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  background-color: ${COLORS.backgroundSecondary};

  &:hover {
    cursor: pointer;
    color: ${COLORS.backgroundSecondary};
    background-color: ${COLORS.success};
  }
`;
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- ButtonPrev
//* ---------------------------------------------------------------------------
const ButtonPrev = styled(Button)<ButtonPrevProps>`
  color: ${({ prev }) => prev === null && COLORS.error};
  border-color: ${({ prev }) => prev === null && COLORS.error};
  background-color: ${({ prev }) => prev === null && COLORS.black};

  &:hover {
    cursor: ${({ prev }) => (prev === null ? 'not-allowed' : 'pointer')};
    color: ${({ prev }) => prev === null && COLORS.error};
    border-color: ${({ prev }) => prev === null && COLORS.error};
    background-color: ${({ prev }) => prev === null && COLORS.black};
  }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.3.- ButtonNext
//* ---------------------------------------------------------------------------
const ButtonNext = styled(Button)<ButtonNextProps>`
  color: ${({ next }) => next === null && COLORS.error};
  border-color: ${({ next }) => next === null && COLORS.error};
  background-color: ${({ next }) => next === null && COLORS.black};

  &:hover {
    cursor: ${({ next }) => (next === null ? 'not-allowed' : 'pointer')};
    color: ${({ next }) => next === null && COLORS.error};
    border-color: ${({ next }) => next === null && COLORS.error};
    background-color: ${({ next }) => next === null && COLORS.black};
  }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.4.- SpanStyled
//* ---------------------------------------------------------------------------
const SpanStyled = styled.span`
  text-align: center;
  color: ${COLORS.white};
  font-weight: bold;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { Container, ButtonPrev, ButtonNext, SpanStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
