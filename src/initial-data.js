const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'create drag and drop app' },
    'task-2': { id: 'task-2', content: 'play the guitar' },
    'task-3': { id: 'task-3', content: 'read book' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'today',
      taskIds: ['task-2', 'task-1', 'task-3'],
    },
  },
  columnOrder: ['column-1'],
};

export default initialData;
