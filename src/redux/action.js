
const handleSubmit = (id, task) => (
  {
    type: 'ADD_TODO',
    payload: {id, task},
  }
);

export default {handleSubmit};