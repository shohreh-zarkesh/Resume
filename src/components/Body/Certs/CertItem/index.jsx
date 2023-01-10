export function CertItem(props){

    return (
        <>
        
    <div className="talent">
        <h3>{props.title}</h3>
        <p>{props.src}</p>
        <a href={props.link}>Certificate</a>        
    </div>

{/* <div className="talent">
<h2>Web Design</h2>
<p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p>
</div>

<div className="talent">
<h2>Interface Design</h2>
<p>Credibly streamline mission-critical value with multifunctional functionalities.	 </p>
</div>

<div className="talent">
<h2>Project Direction</h2>
<p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
</div> */}

</>
    );
}