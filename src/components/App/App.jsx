import React, { useState } from 'react';

import HeaderApp from '../Header';
import SectionApp from '../SectionApp';

const App = () => {
  // let idItems = 0; //не понимаю, почему перестала работать айди, сделал рандомный
  const createTodoItem = (label, min, sec) => {
    return {
      label,
      min,
      sec,
      done: false,
      editing: false,
      date: new Date(),
      id: idItems,
      // id: idItems++,
    };
  };
  let idItems = Math.random();
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('all');
  const toggleProperty = (arr, id, propName) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  //удаление выполненных
  const clearCompleted = () => {
    setTodoData((todoData) => {
      let filtredTodo = todoData.filter((item) => !item.done);

      return [...filtredTodo];
    });
  };

  //удаление элементов
  const deleteItem = (id) => {
    setTodoData((todoData) => {
      const index = todoData.findIndex((el) => el.id === id);

      return [...todoData.slice(0, index), ...todoData.slice(index + 1)];
    });
  };

  //отмечаем как выполненые
  const onToggleDone = (id) => {
    setTodoData((todoData) => {
      return toggleProperty(todoData, id, 'done');
    });
  };

  //редактирование задачи
  const addEditing = (text, id) => {
    setTodoData((todoData) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = {
        ...oldItem,
        label: text ? text : oldItem.label,
        editing: !oldItem.editing,
      };
      return [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
    });
  };

  const onEditing = (label) => {
    setTodoData((todoData) => {
      const index = todoData.findIndex((el) => el.label === label);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, editing: !oldItem.editing };

      return [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
    });
  };

  //добавление новых элементов
  const addItems = (text, min, sec) => {
    if (text.length !== 0 && !text.match(/^\s/) && min.length !== 0 && sec.length !== 0) {
      const newItem = createTodoItem(text, Number(min), Number(sec));
      //создаем новый массив, добавляем к старому массиву новый элемент
      setTodoData((todoData) => [...todoData, newItem]);
    }
  };

  //изменение фильтра
  const filterSwich = (filter) => {
    setFilter(filter);
  };

  //фильтрация элементов
  const filterSelect = (todoData, filter) => {
    if (filter === 'active') {
      return todoData.filter((el) => !el.done);
    }
    if (filter === 'complited') {
      return todoData.filter((el) => el.done);
    }

    return todoData;
  };
  const filters = filterSelect(todoData, filter);

  return (
    <section>
      <HeaderApp onItemAdded={addItems} />
      <SectionApp
        todos={filters}
        filterSelect={filterSelect}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
        addEditing={addEditing}
        onEditing={onEditing}
        onItemAdded={addItems}
        onFilters={filters}
        onFilterSwich={filterSwich}
        filter={filter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};

export default App;
