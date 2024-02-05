export interface TodoModel{
    userId: number;
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface TodoArrayModel{
    all_todo: TodoModel[];
    particular_todo: TodoModel;
}