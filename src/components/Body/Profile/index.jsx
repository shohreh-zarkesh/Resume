export function Profile(props){
    return (
        <>
            <div className="yui-u first">
                <h2>Profile</h2>
            </div>
            <div className="yui-u">
                <p className="enlarge">
                    {props.profile}
                </p>
            </div>
        </>
    );
}