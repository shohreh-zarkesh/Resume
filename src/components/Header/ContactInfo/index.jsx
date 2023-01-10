export function ContactInfo(props){
    return (
        <>
        <div className="contact-info">						
			<h3><a href={props.email}>{props.info.email}</a></h3>
			<h3>tel: {props.info.mobile}</h3>
		</div>
        </>
    );
}