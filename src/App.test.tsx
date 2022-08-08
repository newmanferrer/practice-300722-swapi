import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { App } from './App';
import { CharactersPagination } from './components';

describe('the star wars api test', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks;
  });

  it('test #1: should the jest is working', () => {
    expect(true).toBe(true);
  });

  it('test #2: should render this component', () => {
    const title = <h1>TITLE</h1>;
    const component = render(title);

    component.debug();

    const c = component.getByText('TITLE');
    console.log(prettyDOM(c));

    expect(component.getByText('TITLE')).toBeInTheDocument();
    expect(component.container).toHaveTextContent('TITLE');
  });

  it('test #3: should show the title "The Star Wars API" in the document', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    waitFor(() => {
      expect(screen.getByText('The Star Wars API')).toBeInTheDocument();
    });
  });

  it('test #4: should show button "Next" in the document', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    waitFor(() => {
      expect(screen.getByText('Next')).toBeInTheDocument();
    });
  });

  it('test #5: should show button "Prev" in the document', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    waitFor(() => {
      expect(screen.getByRole('button', { name: 'Prev' })).toBeInTheDocument();
    });
  });

  it('test #6: should clicking the button "Next" handler twice', () => {
    const mockHandler = jest.fn();

    render(
      <Provider store={store}>
        <CharactersPagination handlePeoplePage={mockHandler} />
      </Provider>
    );

    const buttonNext = screen.getByText('Next');
    fireEvent.click(buttonNext);
    fireEvent.click(buttonNext);

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });

  it('test #7: should clicking the button "Prev" handler twice', async () => {
    const mockHandler = jest.fn();

    render(
      <Provider store={store}>
        <CharactersPagination handlePeoplePage={mockHandler} />
      </Provider>
    );

    const buttonNext = await screen.findByText('Next');
    fireEvent.click(buttonNext);
    fireEvent.click(buttonNext);

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
