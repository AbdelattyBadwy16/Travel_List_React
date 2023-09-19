import { useState } from "react";
import { Item } from "./Item";

export function PackingList({items , onDelete ,handelToggle , handelDeleteAll}){
    const [sortBy,setSortBy]=useState("input");

    let sortedItems;
    console.log(sortBy)
    if(sortBy==="input")sortedItems=items;
    if(sortBy==="description")sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
    if(sortBy==="packed")sortedItems=items.slice().sort((a,b)=>a.quantity-b.quantity);


    return (
        <div className="list">
            <ul>
                {
                sortedItems.map((item)=>{ return <Item onDelete={onDelete} item={item} key={item.id} handelToggle={handelToggle}/>})
                }
            </ul>

            <div className="actions" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                <select>
                    <option value="input">sort by input</option>
                    <option value="description">sort by description</option>
                    <option value="packed">sort by packed</option>
                </select>
            <button onClick={handelDeleteAll}>Clear ALL</button>
            </div>
        </div>
    )
}