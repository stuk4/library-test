import { Meta, Story } from "@storybook/react/types-6-0";
import SimpleList from "./SimpleList";
import React from "react";
import { faAd, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsSimpleList } from "./SimpleList.types";


export default {
  title: "Components/Lists",
  component: SimpleList,
} as Meta;

interface Item {
  id:number,
  name:string,
  date:string
}
const Template:Story<PropsSimpleList<Item>> = (args) => <SimpleList {...args} />;
export const ListTest = Template.bind({});
export const ListTest2 = Template.bind({});
const objects:Item[] =[
  {
    id:2,
    name:"Administrator SuperCopley Subio Mevacuno.Pdf",
    date:"13 de julio de 2021 21:01"
  },
  {
    id:3,
    name:"Administrator SuperCopley Subio Mevacuno.Pdf",
    date:"13 de julio de 2021 21:01"
  },
]

ListTest.args = {iconA:<FontAwesomeIcon icon={faFile}/>,items:objects,title:"TEST"}
// ListTest.args = {iconA:<FontAwesomeIcon icon={faFile}/>,dummy:[1,2,3,4],title:"TEST2"}
