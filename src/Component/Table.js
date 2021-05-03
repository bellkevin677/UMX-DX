const Table = (props) => {
    let keyNames = null;

    props.Array.map((row) => {
        keyNames = Object.keys(row);
    });

    return <table>
        <thead>
            <tr>
                <th>{props.Title.name}</th>
            </tr>
            <tr>
                {keyNames.map((key, i) => {
                    return <th key={i}>{key}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {props.Array.map((row, index) => {
                return <tr key={index}>
                    {keyNames.map((key, i) => {
                        console.log(row[key]);
                        if (typeof row[key] === "string") return <td key={i}>{row[key]}</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
}

export default Table