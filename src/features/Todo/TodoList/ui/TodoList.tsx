import { Dropdown } from '@/shared';

import { AddTodo } from '../../AddTodo';

export const TodoList = () => {
  return (
    <div>
      <Dropdown title='Add todo'>
        <AddTodo />
      </Dropdown>
    </div>
  );
};
