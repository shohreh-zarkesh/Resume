export function TechnicalItem(props){

    return (
        <ul className="talent">
            {props.list.map((item, index, list) => {                                
                return (                    
                    (index == list.length -1) ? <li> {item}</li> :  <li className="last">{item}</li>
                );
            })}    
        </ul>
    );
}