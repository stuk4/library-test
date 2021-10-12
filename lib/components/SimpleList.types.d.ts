/// <reference types="react" />
export interface PropsSimpleList<T> {
    title: string;
    items: T[];
    iconA: JSX.Element;
}
export interface Item {
    id: string | number;
    name: string;
    date: string;
}
