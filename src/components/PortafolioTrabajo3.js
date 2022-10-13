import "../style.css";
import todoList from "../assets/todo-list.jpg";

function PortafolioTrabajo3() {


    return (
        <a href="https://robertomaz.github.io/todo-list/" target="_blank" rel="noopener noreferrer" className="portfolio-card">
            <img src={todoList} alt="todo-list" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Todo List</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure expedita omnis officia accusantium voluptate excepturi modi optio eligendi dolor, nesciunt aperiam explicabo enim delectus esse repudiandae adipisci eaque obcaecati?</p>
                </div>
            </aside>
        </a>
    );
}

export default PortafolioTrabajo3;