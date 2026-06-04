import { Card, AddCard, TodoCard } from "./Card";

const TodoBox = function ({
    handleModal,
    todos,
    setTodos,
    setUpdateForm,
    filterTodos,
    setUpdateID,
}) {
    return (
        <>
            <div className="todo-box">
                <Card cl={"add-card"}>
                    <AddCard handleModal={handleModal} />
                </Card>
                {filterTodos.map((todo) => {
                    return (
                        <Card cl={"todo-card"} status={todo.status} key={todo.id}>
                            <TodoCard
                                todo={todo}
                                setTodos={setTodos}
                                setUpdateForm={setUpdateForm}
                                setUpdateID={setUpdateID}
                            />
                        </Card>
                    );
                })}
            </div>
        </>
    );
};
export default TodoBox;
