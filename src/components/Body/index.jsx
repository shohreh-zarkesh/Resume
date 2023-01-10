import { Certs } from "./Certs";
import { Educations } from "./Educations";
import { Experiences } from "./Expriences";
import { Profile } from "./Profile";
import { Technicals } from "./Technicals";
import { Certs } from "./Certs";

export function Body(props){

    return (    
        <div id="bd">
        <div id="yui-main">
            <div className="yui-b">
                <div className="yui-gf">
                    <Profile profile={props.profile}></Profile>
                </div>
                <Certs certs = {props.certs}></Certs>            
                <Technicals techs ={props.techs}></Technicals>  
                <Experiences experiences={props.experiences}></Experiences>
                <Educations educations = {props.educations}></Educations>
            </div>    
        </div>  
    </div>
    );
}