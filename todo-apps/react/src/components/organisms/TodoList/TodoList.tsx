import styles from './styles.module.css'
import {ListTitle} from "@/components/molecules/ListTitle";
import {useId} from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Textarea from "@/components/atoms/textarea/textarea";

type Values = {
    title: string;
};

type Props = {
    title: string;
    initialValues?: Partial<Values>;
    onValid: (values: Values) => Promise<void>;
};

const defaultValues: Values = {
    title: "",
};

export const TodoList = ({ initialValues, onValid }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { ...defaultValues, ...initialValues },
        resolver: zodResolver(UserInputSchema),
    });
    const headingId = useId();

    return (
        <div className={styles.list}>
            <form aria-labelledby={headingId} onSubmit={handleSubmit(onValid)}>
                <ListTitle
                    className={styles.textbox}
                    labelProps={{ children: "リストのタイトルを追加" }}
                    buttonProps={{ children: "リストを追加", onClick: () => {} }}
                    textboxProps={{
                        ...register("name"),
                        placeholder: "TODO",
                    }}
                    error={errors.title?.message}
                />
                <TextboxWithTitle
                    className={styles.textbox}
                    labelProps={{ children: "メールアドレス" }}
                    textboxProps={{
                        ...register("email"),
                        placeholder: "example@gmail.com",
                    }}
                    error={errors.email?.message}
                />
                <Button className={styles.button}>送信する</Button>
            </form>
            <ul>
                <li>Card1</li>
            </ul>
        </div>
    )
}