//Hooks
import { useState } from "react"; 

// Components
import { Header } from "../components/Header";
import {Body} from "../components/Body"
import { Footer } from "../components/Footer";


export function App() {

  const [resumeInformaiton, setInformation] = useState(
    {
      id: "1",
      fullName: "Shohreh Zarkesh",
      image: "../utilies/me.jpg",
      jobTitle: "Front-end developer",
      contactInfo : {email: "shohreh.zarkesh@gmail.com", mobile : "(+98) 9127241815"},
      profile: "I am a passionate developer and product owner and analyzer with more than 10 years working experience with a desire to learn and grow in a collaboration team environment. ",
      certs :[{title:"JavaScript Algorithms and Data Structures", src:"freeCodeCamp" , link: "https://www.freecodecamp.org/certification/ShohrehZarkesh/javascript-algorithms-and-data-structures" }, 
      {title:"HTML, CSS, and JavaScript for Web Developers", src:"The Johns Hopkins University" , link: "https://www.coursera.org/account/accomplishments/certificate/N9T2ME7A6JVQ"}, 
      {title:"Responsive Web Design", src:"freeCodeCamp", link: "https://www.freecodecamp.org/certification/ShohrehZarkesh/responsive-web-design" }],
      techs : [["HTML", "CSS", "JavaScript"], ["SQL", "T-SQL", "Oracle"], ["Agile", "Rad", "Waterfall Methodology"]],
      experiences : [{companyName: "IranEit", jobTitle:"Product Owner", startDate:"2017", endDate:"present", jobDes:"Prepare (product| sprint) backlog, communicate with stockholders & development team. Manage projects plans while providing status updates to management"},
                     {companyName: "SilverPath", jobTitle:"Full-stack developer", startDate:"2016", endDate:"2017", jobDes:"Developed and implemented front-end code using JavaScript, html, CSS and back-end code using C# with MVC framework in Agile to meet business requirement."},
                     {companyName: "Parstel telecom", jobTitle:"Technical expert", startDate:"2014", endDate:"2016", jobDes:"Designed telecom embedded systems for 10K Switching System."},
                     {companyName: "Nasir Driving simulator", jobTitle:"Simulation Developer", startDate:"2012", endDate:"2014", jobDes:"Software programming to construct smart driving simulators for driver training and driver behavior analysis."}],
      educations : [{university : "Khajeh Nasir Toosi University", major:"Computer Engineering – B.S.", date : "2007-2011"},
                    {university : "Allameh Tabatabai University", major:"Financial Management – M.S.", date : "2014-2016"},],              
    },
  );
  return (
    <div id="doc2" className="yui-t7">      
      <div id="inner">
        <Header 
          name={resumeInformaiton.fullName} 
          image={resumeInformaiton.image}
          jobTitle={resumeInformaiton.jobTitle}
          contactInfo = {resumeInformaiton.contactInfo} >
        </Header>
        <Body 
        profile = {resumeInformaiton.profile}
        certs = {resumeInformaiton.certs}
        techs = {resumeInformaiton.techs}
        experiences ={resumeInformaiton.experiences}
        educations = {resumeInformaiton.educations}
        >
        </Body>
        <Footer name={resumeInformaiton.fullName}>
        </Footer>
      </div>
    </div>
  );
};

App.displayName = "RootApp";
