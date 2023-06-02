import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import TaskList from './TaskList';
import App from './index';
import Form from './Form'; 



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


// testing  index return statement

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

// testing form page 

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  it('renders the form and handles input change', () => {
    const setInput = jest.fn();
    const input = 'Task 1';

    render(
      <Form input={input} setInput={setInput} />
    );

    const inputElement = screen.getByPlaceholderText('Enter a task');

    // this should check if input element exists
    expect(inputElement).toBeInTheDocument();

   
    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    // this should Check if setInput function is called with the new value
    expect(setInput).toHaveBeenCalledWith('New Task');
  });

  it('handles form submission and adds a new task', () => {
    const setTasks = jest.fn();
    const setInput = jest.fn();
    const tasks = [];
    const input = 'New Task';

    render(
      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />
    );

    const formElement = screen.getByTestId('form');
    const inputElement = screen.getByPlaceholderText('Enter a task');
    const addButton = screen.getByText('Add');

    // not sure 
    fireEvent.submit(formElement);

    // this should Check if setTasks function is called with the new task- not sure though need to double check this one
    expect(setTasks).toHaveBeenCalledWith([{ id: expect.any(String), title: 'New Task', completed: false }]);

    // this should Check if setInput function is called to clear the input
    expect(setInput).toHaveBeenCalledWith('');

    // Check if the input element is cleared
    expect(inputElement.value).toBe('');

    // this should Check if addButton text changes to 'OK' when editTask prop is provided
    render(
      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
        editTask={{ id: '1', title: 'Task 1', completed: false }}
      />
    );

    const okButton = screen.getByText('OK');
    expect(okButton).toBeInTheDocument();
  });
});
