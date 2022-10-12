export default function footer({linkes}) {
    return (
        <footer>
            <a href={linkes.linkedIn} className="footer--link">LinkedIn</a>
            <a href={linkes.github} className="footer--link">Github</a>
        </footer>
    )
}