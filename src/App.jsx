import { useState } from "react";
import Header from "./Header";
import "./App.css";
import { Modal, TodoModal, AlertModal, UpdateForm } from "./Modal";
import TodoBox from "./TodoBox";

const App = function () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toggleAlert, setToggleAlert] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("yet");
    const filterTodos =
        filter === "all" ? [...todos] : todos.filter((todo) => todo.status === filter);
    const [upDateID, setUpdateID] = useState("");

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
                setUpdateForm={setUpdateForm}
                setUpdateID={setUpdateID}
                filterTodos={filterTodos}
            />
            {isModalOpen && (
                <Modal cl={"todo-modal"}>
                    <TodoModal handleModal={handleModal} todos={todos} setTodos={setTodos} />
                </Modal>
            )}
            {updateForm && (
                <Modal cl={"todo-modal"}>
                    <UpdateForm
                        setUpdateForm={setUpdateForm}
                        upDateID={upDateID}
                        todos={todos}
                        setTodos={setTodos}
                    />
                </Modal>
            )}
            {toggleAlert && (
                <Modal cl={"alert-modal"}>
                    <AlertModal handleAlert={handleAlert} />
                </Modal>
            )}
        </div>
    );
};
export default App;
