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
                        if (typeof row[key] === "object") {
                            return <Table
                                Title={Title(key)}
                                Array={row[key]}
                            />
                        } else if (typeof row[key] === "array") {
                            return <td key={i}>{row[key].join(" ")}</td>
                        } else if (typeof row[key] === "string") {
                            return <td key={i}>{row[key]}</td>
                        }
                    })}
                </tr>
            })}
        </tbody>
    </table>
}

function Title(key) {
    let title = key.charAt(0).toUpperCase() + key.slice(1);
    return title.replace(/([A-Z])/g, ' $1').trim()
}

export default Table