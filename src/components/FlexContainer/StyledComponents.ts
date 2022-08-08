//* ///////////////////////////////////////////////////////////////////////////
//* FlexContainer
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
interface IContainerProps {
  border?: boolean;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  bgc?: string;
}
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
//* 4.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  border-width: ${({ border, borderWidth }) => border && borderWidth && borderWidth};
  border-style: ${({ border, borderStyle }) => border && borderStyle && borderStyle};
  border-radius: ${({ border, borderRadius }) => border && borderRadius && borderRadius};
  border-color: ${({ border, borderColor }) =>
    border && borderColor && borderColor === 'white'
      ? COLORS.white
      : borderColor === 'black'
      ? COLORS.black
      : borderColor === 'gray'
      ? COLORS.gray
      : borderColor === 'error'
      ? COLORS.error
      : borderColor === 'success'
      ? COLORS.success
      : borderColor === 'warning'
      ? COLORS.warning
      : borderColor === 'backgroundPrimary'
      ? COLORS.backgroundPrimary
      : borderColor === 'backgroundSecundary'
      ? COLORS.backgroundSecondary
      : borderColor === 'hoverColor'
      ? COLORS.hoverColor
      : borderColor === 'hoverColor2'
      ? COLORS.hoverColor2
      : 'transparent'};

  background-color: ${({ bgc }) =>
    bgc && bgc === 'white'
      ? COLORS.white
      : bgc === 'black'
      ? COLORS.black
      : bgc === 'gray'
      ? COLORS.gray
      : bgc === 'error'
      ? COLORS.error
      : bgc === 'success'
      ? COLORS.success
      : bgc === 'warning'
      ? COLORS.warning
      : bgc === 'backgroundPrimary'
      ? COLORS.backgroundPrimary
      : bgc === 'backgroundSecundary'
      ? COLORS.backgroundSecondary
      : bgc === 'hoverColor'
      ? COLORS.hoverColor
      : bgc === 'hoverColor2'
      ? COLORS.hoverColor2
      : 'transparent'};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { Container };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
