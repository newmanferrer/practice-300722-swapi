import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { setPeople } from '../../state/features/people/peopleSlice';
import { setCharacterDetails } from '../../state/features/characterDetails/characterDetailsSlice';
import { getPeople, getCharacterById } from '../../services';
import { ICharacter } from '../../models';

import {
  Header,
  Footer,
  Message,
  Loader,
  SearchCharacterForm,
  GridContainer,
  FlexContainer,
  CharacterList,
  CharactersPagination,
  CharacterDetails
} from '../../components';

export const HomePage = () => {
  const [peoplePage, setPeoplePage] = useState<string>();
  const [currentCharacterId, SetCurrentCharacterId] = useState<number>(1);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);
  const [isLoadingCharacterDetails, setIsLoadingCharacterDetails] = useState(false);
  const [errorState, setErrorState] = useState({ hasError: false, message: '' });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoadingCharacters(true);
    getPeople(peoplePage)
      .then(data => dispatch(setPeople(data)))
      .catch(handleError)
      .finally(() => setIsLoadingCharacters(false));
  }, [peoplePage]);

  useEffect(() => {
    setIsLoadingCharacterDetails(true);
    getCharacterById(currentCharacterId)
      .then(data => dispatch(setCharacterDetails(data)))
      .catch(handleError)
      .finally(() => setIsLoadingCharacterDetails(false));
  }, [currentCharacterId]);

  const handleError = (error: any) => {
    setErrorState({ hasError: true, message: error.message });
  };

  const showDetails = (character: ICharacter) => {
    const characterId: number = Number(character.url.split('/').slice(-2)[0]);
    SetCurrentCharacterId(characterId);
  };

  const handlePeoplePage = (page: string | null) => {
    if (page === null) return;
    setPeoplePage(page);
  };

  return (
    <>
      <Header />
      {errorState.hasError ? (
        <Message type={'error'} text={errorState.message} />
      ) : (
        <>
          <SearchCharacterForm handleError={handleError} />

          <GridContainer>
            <FlexContainer
              border
              borderWidth='2px'
              borderStyle='solid'
              borderColor='white'
              borderRadius='5px'
              bgc='backgroundSecundary'
            >
              {!errorState.hasError && isLoadingCharacters ? (
                <Loader />
              ) : (
                <>
                  <CharacterList showDetails={showDetails} />
                  <CharactersPagination handlePeoplePage={handlePeoplePage} />
                </>
              )}
            </FlexContainer>
            <FlexContainer
              border
              borderWidth='2px'
              borderStyle='solid'
              borderColor='white'
              borderRadius='5px'
              bgc='backgroundSecundary'
            >
              {!errorState.hasError && isLoadingCharacterDetails ? (
                <Loader />
              ) : (
                <CharacterDetails />
              )}
            </FlexContainer>
          </GridContainer>
        </>
      )}
      <Footer />
    </>
  );
};
