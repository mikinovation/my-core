import styles from '@/components/organisms/todo-list/todo-list.module.scss'
// import Textarea from "@/components/atoms/textarea/textarea";
import {HiddenTextarea} from "@/components/molecules/list-title";

export const TodoList = () => {
    return (
        <div className={styles.list}>
            <div>
                <h2>test</h2>
                <HiddenTextarea labelProps="" textareaProps="" className={styles.list.textarea} />
            </div>
            <ul>
                <li>Card1</li>
            </ul>
        </div>
    )
}