import { useState } from "react";
import { Logo } from "./Component/Logo";
import { Form } from "./Component/Form";
import {Stats} from "./Component/State"
import {PackingList }from "./Component/PackingList"
export default function App()
{
    const [items,setItems]= useState([]);
    function handelItem(newItem)
    {
      setItems((items)=>[...items,newItem]);
    }

    function handelDeleteAll()
    {
        if(!items.length)return;
        setItems((items=>[]));
    }

    function handelDelete(id)
    {
      setItems(items=>items.filter(item=>item.id!==id))
    }

    function handelToggle(id)
    {
        setItems(items=> items.map(item=> item.id===id ? {...item,packed: !item.packed} : item ));
    }

    return (
        <div className="app">
        <Logo/>
        <Form onAdd={handelItem} />
        <PackingList items={items} onDelete={handelDelete} handelToggle={handelToggle} handelDeleteAll={handelDeleteAll}/>
        <Stats items={items}/>
        </div>
    )
}


