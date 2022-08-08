import { useAppSelector } from '../../hooks';
import { ICharacter } from '../../models';
import { Container, UlStyled, LiStyled } from './StyledComponents';

interface ICharacterListProps {
  showDetails: (character: ICharacter) => void;
}

export const CharacterList = ({ showDetails }: ICharacterListProps) => {
  const people = useAppSelector(state => state.people);

  return (
    <Container>
      <UlStyled>
        {people &&
          people.results.map(character => (
            <LiStyled key={character.url} onClick={() => showDetails(character)}>
              {character.name}
            </LiStyled>
          ))}
      </UlStyled>
    </Container>
  );
};
