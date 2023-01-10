import { ExperienceItem } from "./ExperienceItem";

export function Experiences(props){
    return (
        <>
<div className="yui-gf">
    <div className="yui-u first">
        <h2>Experience</h2>
    </div>
    <div className="yui-u">

    {props.experiences.map((exp) => {
        return (
        <ExperienceItem
            companyName={exp.companyName}
            jobTitle = {exp.jobTitle}                
            startDate ={exp.startDate}
            endDate = {exp.endDate}
            jobDes = {exp.jobDes}
        />
        );
    })}        
        </div>        
    </div>
        </>
    );
}