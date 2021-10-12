import React from 'react'
import '../assets/styles.css'


interface Data {
    [k:string]:any
}
export interface PropsSimpleList<T> {
    title:string,
    items:T[],
    iconA:JSX.Element ,
}
interface Item{
    id:string | number
    name: string
    date:string,
}
// Aqui hago una resetriccion que mi componente el tipo de objeto que se le pasara deberia tener 
// por lo menos las propiedades de Item para funcinar
//ref: https://www.benmvp.com/blog/generic-react-components-typescript/
const SimpleList = <T extends Item>({title,iconA,items}:PropsSimpleList<T>) => {
    
    return (
        <div className="dashboard__list-container">
            <div className="dashboard__list-section-title">
                <h4>{title}</h4>
                <hr className="base__hr-right-ease" />
            </div>
            <div className="dashboard__list-section-items">
                {
                items.map((item,index) => (
                    <div key={index}>
                        <div className="dashboard__list-item">
                            <div className="dashboard__list-name">
                                {iconA}<p>{item.name}</p>
                            </div>
                            <div className="dashboard__list-date">
                                <p>Creado el {item.date}</p>
                            </div>
                        </div>
                        <hr className="base__hr-right-left-ease" />
                    </div>
                ))
            }
            </div>
        </div>
    )
}


export default SimpleList;