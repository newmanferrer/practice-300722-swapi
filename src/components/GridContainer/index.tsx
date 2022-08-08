import { GridContainerStyled } from './StyledComponents';

type TGridContainer = {
  children?: React.ReactNode;
};

export const GridContainer: React.FC<TGridContainer> = ({ children }) => {
  return <GridContainerStyled>{children}</GridContainerStyled>;
};
