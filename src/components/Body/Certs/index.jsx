import { CertItem } from "./CertItem";

export function Certs(props){

    return (
       <>
        <div className="yui-gf">
                    <div className="yui-u first">
                        <h2>Professional Certs</h2>
                    </div>
                    <div className="yui-u">
                    {props.certs.map((cert) => {
                        return (
                        <CertItem
                            title={cert.title}
                            src = {cert.src}
                            link = {cert.link} 

                        />
                        );
                    })} 
                    </div>                   
                </div>
                </> 
    );
}