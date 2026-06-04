import { useState } from "react";

const Modal = function ({ cl, children }) {
    return (
        <>
            <div className={cl}>{children}</div>
        </>
    );
};
const TodoModal = function ({ handleModal, setTodos, onToggleAlert }) {
    const [main, setMain] = useState("");
    const [sub, setSub] = useState("");
    const [start, setStart] = useState("");
    const [deadline, setDeadLine] = useState("");

    const handleNewTodo = function () {
        if (!main) {
            onToggleAlert();
            return;
        }
        const id = crypto.randomUUID();
        const status = "yet";
        const newTodo = { id, main, sub, start, deadline, status };

        setTodos((todos) => [...todos, newTodo]);
    };

    return (
        <>
            <button type="button" className="todo-modal--close" onClick={handleModal}>
                &times;
            </button>
            <div className="input">
                <input
                    type="text"
                    className="input--main"
                    placeholder="main"
                    onChange={(e) => setMain(e.target.value)}
                />
                <input
                    type="text"
                    className="input--sub"
                    placeholder="sub"
                    onChange={(e) => setSub(e.target.value)}
                />
                <input
                    type="date"
                    className="input--start"
                    placeholder="start"
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    type="date"
                    className="input--deadline"
                    placeholder="deadline"
                    onChange={(e) => setDeadLine(e.target.value)}
                />
            </div>
            <button type="button" className="add-new-todo-btn" onClick={handleNewTodo}>
                追加
            </button>
        </>
    );
};
const UpdateForm = function ({ todos, setTodos, upDateID, setUpdateForm }) {
    const todo = todos.find((todo) => todo.id === upDateID);
    const [main, setMain] = useState(todo.main);
    const [sub, setSub] = useState(todo.sub);
    const [start, setStart] = useState(todo.start);
    const [deadline, setDeadLine] = useState(todo.deadline);

    const handleUpdateTodo = function (id) {
        const updateTodo = {
            id: todo.id,
            main: main,
            sub: sub,
            start: start,
            deadline: deadline,
            status: todo.status,
        };
        setTodos((todos) => todos.map((todo) => (todo.id === id ? updateTodo : todo)));
    };

    return (
        <>
            <button
                type="button"
                className="todo-modal--close"
                onClick={() => setUpdateForm(false)}
            >
                &times;
            </button>
            <div className="input">
                <input
                    type="text"
                    className="input--main"
                    placeholder="main"
                    value={main}
                    onChange={(e) => setMain(e.target.value)}
                />
                <input
                    type="text"
                    className="input--sub"
                    placeholder="sub"
                    value={sub}
                    onChange={(e) => setSub(e.target.value)}
                />
                <input
                    type="date"
                    className="input--start"
                    placeholder="start"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    type="date"
                    className="input--deadline"
                    placeholder="deadline"
                    value={deadline}
                    onChange={(e) => setDeadLine(e.target.value)}
                />
            </div>
            <button
                type="button"
                className="add-new-todo-btn"
                onClick={() => handleUpdateTodo(todo.id)}
            >
                更新
            </button>
        </>
    );
};
const AlertModal = function ({ handleAlert }) {
    return (
        <>
            <button type="button" className="alert-modal--close" onClick={handleAlert}>
                &times;
            </button>
            <p>mainは必ず入力してください</p>
        </>
    );
};

export { Modal, TodoModal, AlertModal, UpdateForm };
