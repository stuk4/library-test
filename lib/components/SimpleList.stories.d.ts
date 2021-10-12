import { Meta, Story } from "@storybook/react/types-6-0";
import { PropsSimpleList } from "./SimpleList.types";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
interface Item {
    id: number;
    name: string;
    date: string;
}
export declare const ListTest: Story<PropsSimpleList<Item>>;
export declare const ListTest2: Story<PropsSimpleList<Item>>;
