import {Model} from "@/models/model";
import {TodoModel} from "@/models/todo";

const defaultValue = {
  name: '',
  todos: []
}

class TodoList extends Model {
    #id: number;
    #title: string
    #todos: TodoModel[]
    constructor({id, title, todos}) {
        super();
        this.#id = id;
        this.#title = title
        this.#todos = todos.map(TodoModel)
    }

    get id() {
        return this.#id
    }

    get title() {
       return this.#title
    }

    get todos() {
        return this.#todos
    }
}

export const TodoListModel = (def: any) => new TodoList({
    ...defaultValue,
    ...def
})