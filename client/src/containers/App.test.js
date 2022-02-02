import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App'

describe('Landing page', () => {
  it('renders landing page properly', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
    expect(screen.getByText(/countries/i)).toBeInTheDocument()
  });
});

describe('New activity page', () => {
  it('renders properly', () => {
    const history = createMemoryHistory()
    history.push('/activities/new')
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
      
    )
    // Expect new activity title to be present
    expect(screen.getByText(/new activity/i)).toBeInTheDocument();
  });

  it('shows validation errors for activity name', () => {
    const history = createMemoryHistory()
    history.push('/activities/new')
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
      
    )
    // Find activity name input field and fire change event with invalid input
    let activityNameInput = screen.getByLabelText(/activity name/i);
    expect(activityNameInput).toBeInTheDocument();
    userEvent.type(activityNameInput, '12345');
    expect(activityNameInput).toHaveValue('12345');
    // Expect error to be present
    expect(screen.getByText(/must be a string/i)).toBeInTheDocument();
  });

  it('allows valid activity name', () => {
    const history = createMemoryHistory()
    history.push('/activities/new')
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
      
    )
    // Find activity name input field and fire change event with invalid input
    let activityNameInput = screen.getByLabelText(/activity name/i);
    expect(activityNameInput).toBeInTheDocument();
    userEvent.type(activityNameInput, 'Valid input');
    expect(activityNameInput).toHaveValue('Valid input');
    // Expect error NOT to be present
    expect(screen.queryByText(/must be a string/i)).not.toBeInTheDocument();
  });
});

describe('Not found page', () => {
  it('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/undefinedRoute')
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
    expect(screen.getByText(/not found/i)).toBeInTheDocument()
  });
});