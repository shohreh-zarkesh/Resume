import { ContactInfo } from "./ContactInfo";
import { JobTitle } from "./JobTitle";
import { PersonalInfo } from "./PersonalInfo";

export function Header(props){
    console.log(`props info is ${props.key}`)
    return (
        <div id="hd">
			<div className="yui-gc">
				<div className="yui-u first">
					<PersonalInfo name = {props.name} image={props.image}></PersonalInfo>
                    <JobTitle title = {props.jobTitle}></JobTitle>					
				</div>

				<div className="yui-u">
					<ContactInfo info={props.contactInfo}></ContactInfo>
				</div>
			</div>
		</div>
    );
}