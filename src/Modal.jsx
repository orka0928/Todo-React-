import { useState } from "react";

const Modal = function ({ handle: isModalOpen, cl, children }) {
    if (!isModalOpen) return;
    return (
        <>
            <div className={isModalOpen ? `${cl}` : "hidden"}>{children}</div>
        </>
    );
};
const TodoModal = function ({ handleModal, setTodos }) {
    const [main, setMain] = useState("");
    const [sub, setSub] = useState("");
    const [start, setStart] = useState("");
    const [deadline, setDeadLine] = useState("");

    const handleNewTodo = function () {
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
const AlertModal = function ({ handleAlert }) {
    return (
        <>
            <button type="button" className="alert-modal--close" onClick={handleAlert}>
                &times;
            </button>
        </>
    );
};

export { Modal, TodoModal, AlertModal };
