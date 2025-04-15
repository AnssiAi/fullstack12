const Todo = () => {
  const todo = {
    text: 'This is an extracted todo',
    done: false,
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <span>{todo.text}</span>
      <span>{todo.done.toString()}</span>
    </div>
  );
};

export default Todo;
