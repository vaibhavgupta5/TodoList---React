function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 colus">{todoName}</div>
        <div className="col-4 colus">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;