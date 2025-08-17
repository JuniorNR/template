import { useState } from 'react';

import { DropdownField, Form, TextField } from '@/shared';

import styles from './addTodo.module.scss';

export const AddTodo = () => {
  // 'description' => 'nullable|string|min:10',
  // 'status' => 'required|in:back_log,pending,is_progress,completed',
  // 'priority' => 'required|in:low,medium,high',
  // 'deadline' => 'nullable|date|after_or_equal:today',
  const [priority, setPriority] = useState('medium');
  return (
    <div className={styles.addTodo}>
      <div>
        <Form
          title='Add todo'
          onSubmit={() => {
            console.log('submit');
          }}
        >
          <TextField
            type='text'
            label='Title'
          />
          <TextField
            type='text'
            label='Description'
          />
          <TextField
            type='text'
            label='Status'
          />
          <DropdownField
            options={[
              {
                label: 'Low',
                value: 'low',
              },
              {
                label: 'Medium',
                value: 'medium',
              },
              {
                label: 'High',
                value: 'high',
              },
            ]}
            label='Priority'
            value={priority}
            onChange={(value) => {
              setPriority(value);
            }}
          />
          <TextField
            type='text'
            label='Deadline'
          />
          <TextField
            type='text'
            label='Tags'
          />
        </Form>
      </div>
      <div>take todo</div>
    </div>
  );
};
