import { useAppSelector } from '../../hooks';
import { AsideStyled, H3Styled, UlStyled, LiStyled } from './StyledComponents';

export const CharacterDetails = () => {
  const characterDetails = useAppSelector(state => state.characterDetails);

  return (
    <AsideStyled>
      {characterDetails ? (
        <>
          <H3Styled>{characterDetails.name}</H3Styled>
          <UlStyled>
            <LiStyled>{`Gender: ${characterDetails.gender}`}</LiStyled>
            <LiStyled>{`Birth year: ${characterDetails.birth_year}`}</LiStyled>
            <LiStyled>{`Mass: ${characterDetails.mass}`}</LiStyled>
            <LiStyled>{`Eye Color: ${characterDetails.eye_color}`}</LiStyled>
          </UlStyled>
        </>
      ) : (
        <H3Styled>No Details yet</H3Styled>
      )}
    </AsideStyled>
  );
};
