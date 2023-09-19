

export function Stats({items}){

    if(!items.length)
    {
        return <footer className="stats">
            Start adding some items to your packing list .
        </footer>
    }
    const numItems=items.length;
    const numPacked=items.filter((item)=>item.packed).length;
    const percent=Math.round(numPacked/numItems*100);
    return <footer className="stats">
      { 
        (numItems!==numPacked)?
       <p> You have {numItems} item in your list, and you already packed {numPacked} ({percent}%)</p>:<p style={{color:'green'}}>You get everything ready to go .</p>
      }
    </footer>
}