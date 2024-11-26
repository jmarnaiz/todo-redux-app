export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export function initializeTodo(text: string): Todo {
    return { id: Math.random(), text, completed: false };
}
