
function Card({image, title, text, className}){
    return(
        <div className={`card ${className || ""}`}>
        <img className="card-image" src={image} alt="profile picture" style={{width:'150px', borderRadius: '50%'}} />
        <h2 className="card-title">{title}</h2>
        <p className="class-text">{text}</p>

        </div>
    );

}
export default Card