import {TodoList} from "../todo-list";

export const Board = () => {
    const [todoList, setTodoList] = useState<[]>([]);
    return (
      <TodoList />
    )
}