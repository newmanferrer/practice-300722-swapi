//* ///////////////////////////////////////////////////////////////////////////
//* GlobalStyled
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- GlobalStyled
//* ---------------------------------------------------------------------------
const GlobalStyled = createGlobalStyle`
 *,
 *::before,
 *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   overflow-x: hidden;
   overflow-y: hidden;
  }
  
  html {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
 }

 body {
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: center;
   align-items: center;
   scroll-behavior: smooth;
   background-color: ${COLORS.backgroundPrimary};
 }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { GlobalStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
