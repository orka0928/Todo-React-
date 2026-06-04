const Card = function ({ cl, children, status }) {
    let backGroundColour;

    switch (status) {
        case "in-progress":
            backGroundColour = "#c3fae8";
            break;
        case "done":
            backGroundColour = "#d0ebff";
            break;
        default:
            backGroundColour = "#fff";
    }
    return (
        <div className={`${cl} card--layout`} style={{ backgroundColor: backGroundColour }}>
            {children}
        </div>
    );
};
const AddCard = function ({ handleModal }) {
    return (
        <div className="add-card__box">
            <p className="add-card--text">追加</p>
            <button type="button" className="add-card__btn" onClick={handleModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="add-card__icon"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};
const TodoCard = function ({ todo, setTodos, setUpdateForm, setUpdateID }) {
    const handleUpdateStatus = function (status, id) {
        setTodos((todos) =>
            todos.map((_todo) => (_todo.id === id ? { ...todo, status: status } : _todo)),
        );
    };
    const handledelete = function (id) {
        setTodos((todos) => todos.filter((_todo) => _todo.id !== id));
    };
    const handleUpdateForm = function (_id) {
        setUpdateID((id) => _id);
        setUpdateForm(true);
    };
    return (
        <>
            <select
                className="todo-card__select"
                value={todo.status}
                onChange={(e) => handleUpdateStatus(e.target.value, todo.id)}
            >
                <option value="yet">未着手</option>
                <option value="in-progress">進行中</option>
                <option value="done">完了</option>
            </select>
            <h3>{todo.main}</h3>
            <h5>{todo.sub}</h5>
            <p>{todo.start}</p>
            <p>{todo.deadline}</p>
            <button type="button" className="todo--delete" onClick={() => handledelete(todo.id)}>
                &times;
            </button>
            <button
                type="button"
                className="todo--delete"
                onClick={() => handleUpdateForm(todo.id)}
            >
                編集
            </button>
        </>
    );
};

export { Card, AddCard, TodoCard };
