import React, { Component } from 'react';

import HeaderApp from '../Header';
import SectionApp from '../SectionApp';

export default class App extends Component {
  idItems = 0;

  state = {
    todoData: [],
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      editing: false,
      date: new Date(),
      id: this.idItems++,
      filter: '',
    };
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  //удаление выполненных
  clearCompleted = () => {
    this.setState(({ todoData }) => {
      let filtredTodo = todoData.filter((item) => !item.done);
      return { todoData: [...filtredTodo] };
    });
  };

  //удаление элементов
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      //получаем индекс элемента
      const index = todoData.findIndex((el) => el.id === id);
      //возвращаем новый массив без удаленного элемента
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)],
      };
    });
  };

  //отмечаем как выполненые
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  //редактирование задачи
  addEditing = (text, id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = {
        ...oldItem,
        label: text ? text : oldItem.label,
        editing: !oldItem.editing,
      };
      return {
        todoData: [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)],
      };
    });
  };

  onEditing = (label) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.label === label);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, editing: !oldItem.editing };
      return {
        todoData: [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)],
      };
    });
  };

  //добавление новых элементов
  addItems = (text) => {
    const newItem = this.createTodoItem(text);
    //создаем новый массив, добавляем к старому массиву новый элемент
    this.setState(({ todoData }) => {
      return { todoData: [...todoData, newItem] };
    });
  };

  //изменение фильтра
  filterSwich = (filter) => {
    this.setState({ filter });
  };

  //фильтрация элементов
  filterSelect = (todoData, filter) => {
    if (filter === 'active') {
      return todoData.filter((el) => !el.done);
    }
    if (filter === 'complited') {
      return todoData.filter((el) => el.done);
    }

    return todoData;
  };

  complitedFilterItem = () => {
    this.setState(({ todoData }) => {
      const filtredTodo = todoData.filter((item) => !item.done);

      return { todoData: [...filtredTodo] };
    });
  };

  render() {
    const { todoData, filter } = this.state;
    const filters = this.filterSelect(todoData, filter);

    return (
      <section>
        <HeaderApp onItemAdded={this.addItems} />
        <SectionApp
          todos={filters}
          filterSelect={this.filterSelect}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          addEditing={this.addEditing}
          onEditing={this.onEditing}
          onItemAdded={this.addItems}
          onFilters={filters}
          onFilterSwich={this.filterSwich}
          filter={filter}
          clearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}
