import { useState } from "react";
import Header from "./Header";
import "./App.css";
import { Modal, TodoModal, AlertModal } from "./Modal";
import TodoBox from "./TodoBox";

const App = function () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toggleAlert, setToggleAlert] = useState(false);
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("yet");
    const filterTodos =
        filter === "all" ? [...todos] : todos.filter((todo) => todo.status === filter);
    const handleModal = function () {
        setIsModalOpen((isModalOpen) => !isModalOpen);
    };
    const handleAlert = function () {
        setToggleAlert((toggleAlert) => !toggleAlert);
    };

    return (
        <div className="App">
            <Header filter={filter} setFilter={setFilter} />
            <TodoBox
                handleModal={handleModal}
                todos={todos}
                setTodos={setTodos}
                filterTodos={filterTodos}
            />
            {isModalOpen && (
                <Modal handle={isModalOpen} cl={"todo-modal"}>
                    <TodoModal handleModal={handleModal} todos={todos} setTodos={setTodos} />
                </Modal>
            )}
            {toggleAlert && (
                <Modal handle={toggleAlert} cl={"alert-modal"}>
                    <AlertModal handleAlert={handleAlert} />
                </Modal>
            )}
        </div>
    );
};
export default App;
