//* ///////////////////////////////////////////////////////////////////////////
//* Header
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
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.-
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- HeaderStyled
//* ---------------------------------------------------------------------------
const HeaderStyled = styled.header`
  width: 100vw;
  height: 8vh;
  margin-bottom: 2rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 40% 40%;
  gap: 10%;
  justify-content: center;
  align-items: center;

  background-color: ${COLORS.black};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { HeaderStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
