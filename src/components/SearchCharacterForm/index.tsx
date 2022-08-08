import { ChangeEvent } from 'react';
import { useForm, useAppDispatch } from '../../hooks';
import { getCharacterByName } from '../../services';
import { setPeople } from '../../state/features/people/peopleSlice';
import { FormStyled, InputStyled } from './StyledComponents';

const initialState = {
  search: ''
};

export const SearchCharacterForm = (handleError: any) => {
  const { form, handleChange } = useForm(initialState);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    //if (form.search === '') alert('Character name is required');

    getCharacterByName(form.search)
      .then(data => dispatch(setPeople(data)))
      .catch(handleError);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type='search'
        name='search'
        placeholder='search character for name'
        onChange={handleChange}
      />
    </FormStyled>
  );
};
