import { Container } from './StyledComponents';

interface IFlexContainerProps {
  children?: React.ReactNode;
  border?: boolean;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  bgc?: string;
}

export const FlexContainer = ({
  children,
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  bgc
}: IFlexContainerProps) => {
  return (
    <Container
      border={border}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderRadius={borderRadius}
      bgc={bgc}
    >
      {children}
    </Container>
  );
};
