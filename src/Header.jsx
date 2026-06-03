const Header = function ({ filter, setFilter }) {
    return (
        <>
            <header className="header">
                <h1>Todoアプリ</h1>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">全て</option>
                    <option value="yet">未完了</option>
                    <option value="in-progress">進行中</option>
                    <option value="done">完了</option>
                </select>
            </header>
        </>
    );
};
export default Header;
