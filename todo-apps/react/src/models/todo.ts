import {Model} from "@/models/model";

const defaultValue = {
  name: '',
  priority: 0,
}

class Todo extends Model {
    #id: number;
    #name: string
    #priority: number
    constructor({id, name, priority}) {
        super();
        this.#id = id;
        this.#name = name
        this.#priority = priority
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get priority() {
        return this.#priority
    }
}

export const TodoModel = (def: any) => new Todo({
    ...defaultValue,
    ...def
})