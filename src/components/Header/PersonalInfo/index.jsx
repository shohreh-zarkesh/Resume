export function PersonalInfo(props){
    console.log(props);
    return (
        <>
         <img src={props.image} alt="profileImage" width="50" height="60" />
        <h2>{props.name}</h2>
        </>
    );
}