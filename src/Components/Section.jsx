export default function Section({title, text}) {
    const fillerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi quis nam magni ipsa unde sed nobis aut, ducimus at voluptatibus a sit non delectus tempore tenetur, iure ut odit?"
    return (
        <div className="section">
            <h2 className="section--title">{title}</h2>
            <p className="section--text">{text || fillerText}</p>
        </div>
    )
}