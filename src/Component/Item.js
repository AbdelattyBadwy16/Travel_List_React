
export function Item({item , onDelete , handelToggle})
{
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={()=>{handelToggle(item.id)}}></input>
            <span style={item.packed?{textDecoration:'line-through'}:{}}>
                {item.quantity}{" "}{item.description}
            </span>
            <button onClick={()=>onDelete(item.id)}>❌</button>
        </li>
    )
}
