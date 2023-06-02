import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import TaskList from './TaskList';
import App from './index';



describe('Header component', () => {
  it('renders the header text', () => {
    render(<Header />);
    const headerText = screen.getByText('Task List');
    expect(headerText).toBeInTheDocument();
  });
});

// testing tasklist return statement

describe('TaskList component', () => {
  it('renders a list of tasks', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
      { id: 3, title: 'Task 3', completed: false }
    ];

    render(<TaskList tasks={tasks} />);

    const taskListContainer = screen.getByTestId('taskListContainer');
    expect(taskListContainer).toBeInTheDocument();

    const taskListItems = screen.getAllByRole('listitem');
    expect(taskListItems).toHaveLength(tasks.length);
  });
});


// testing testing index return statement

describe('App component', () => {
  it('renders the App correctly', () => {
    render(<App />);

    const appWrapper = screen.getByTestId('appWrapper');
    expect(appWrapper).toBeInTheDocument();

    const header = screen.getByText('Task List');
    expect(header).toBeInTheDocument();

    const formContainer = screen.getByTestId('taskFormContainer');
    expect(formContainer).toBeInTheDocument();

    const taskList = screen.getByTestId('taskList');
    expect(taskList).toBeInTheDocument();
  });
});
