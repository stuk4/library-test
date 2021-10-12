/// <reference types="react" />
import '../assets/styles.css';
import { Item, PropsSimpleList } from './SimpleList.types';
declare const SimpleList: <T extends Item>({ title, iconA, items }: PropsSimpleList<T>) => JSX.Element;
export default SimpleList;
