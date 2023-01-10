export function ExperienceItem(props){
    return (
    <div className="job">
        <h2>{props.companyName}</h2>
        <h3>{props.jobTitle}</h3>
        <h4>{props.startDate}-{props.endDate}</h4>
        <p>{props.jobDes} </p>
    </div>
    );
}