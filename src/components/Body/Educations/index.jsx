import { EducationItem } from "./EducationsItem";

export function Educations(props){

    return (
        <>
        <div className="yui-gf last">
                    <div className="yui-u first">
                        <h2>Education</h2>
                    </div>
                    {props.educations.map((edu) => {
                        return (
                        <EducationItem
                            university={edu.university}
                            major = {edu.major}                
                            date = {edu.date}
                        />
                        );
                    })} 
                </div>
        </>
    );

}