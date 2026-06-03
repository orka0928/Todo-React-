import { useState } from "react";
import { Card, AddCard, TodoCard } from "./Card";

const TodoBox = function ({ handleModal, todos, setTodos }) {
    return (
        <>
            <div className="todo-box">
                <Card cl={"add-card"}>
                    <AddCard handleModal={handleModal} />
                </Card>
                {todos.map((todo) => {
                    return (
                        <Card cl={"todo-card"} status={todo.status} key={todo.id}>
                            <TodoCard todo={todo} setTodos={setTodos} />
                        </Card>
                    );
                })}
            </div>
        </>
    );
};
export default TodoBox;
