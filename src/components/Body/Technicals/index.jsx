import { TechnicalItem } from "./TechnicalItem";

export function Technicals(props){

    return (
        <>
        <div className="yui-gf">
                    <div className="yui-u first">
                        <h2>Technical</h2>
                    </div>
                    <div className="yui-u"> 

                    {props.techs.map((tech) => {
                        return (
                        <TechnicalItem
                            list={tech}                                          
                        />
                        );
                    })} 
                    </div>
                </div>
        </>
    );
}