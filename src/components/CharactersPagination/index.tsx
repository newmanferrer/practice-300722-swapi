import { useAppSelector } from '../../hooks';
import { Container, ButtonPrev, ButtonNext, SpanStyled } from './StyledComponents';

interface ICharactersPaginationProps {
  handlePeoplePage: (page: string | null) => void;
}

export const CharactersPagination = ({ handlePeoplePage }: ICharactersPaginationProps) => {
  const people = useAppSelector(state => state.people);
  const totalPage = Math.ceil(people.count / 10);
  const prev = people.previous;
  const next = people.next;
  let currentPage = Number(people.next?.split('=').pop());

  if (currentPage <= totalPage) currentPage--;
  else currentPage = totalPage;

  return (
    <Container>
      <ButtonPrev prev={prev} onClick={() => handlePeoplePage(people.previous)}>
        Prev
      </ButtonPrev>
      <SpanStyled>{`${currentPage} of ${totalPage}`}</SpanStyled>
      <ButtonNext next={next} onClick={() => handlePeoplePage(people.next)}>
        Next
      </ButtonNext>
    </Container>
  );
};
