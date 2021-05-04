import React from "react";

export default class Table extends React.Component {

    FormatTitle = (string) => {
        const title = string.charAt(0).toUpperCase() + string.slice(1);
        return title.replace(/([A-Z])/g, ' $1').trim();
    }

    render() {
        const {
            Data
        } = this.props,
            keyNames = [];

        console.log(Data);

        Data.map((row) => {
            console.log(row);
            const allKeys = Object.keys(row);
            allKeys.forEach(key => {
                switch(true) {
                    case (key === "given"):
                    case (key === "family"):
                    case (key === "period"):
                    case (key === "reference"):
                    case (key === "gender"):
                    case (keyNames.includes(key)):
                        return 
                    default:
                        return keyNames.push(key);
                }
            });
        });

        return <table className="MiniTable">
            <thead className="MiniTable-Head">
                <tr className="MiniTable-Head-Row">
                    {keyNames.map((key, i) => {
                        switch(true) {
                            case (!isNaN(key)):
                                return <th key={i}>{`${parseInt(key) + 1}.)`}</th>
                            default:
                                return <th key={i}>{this.FormatTitle(key)}</th>
                        }
                    })}
                </tr>
            </thead>
            <tbody className="MiniTable-Body">
                {Data.map((row, index) => {
                    return <tr key={index} className="MiniTable-Body-Row">
                        {keyNames.map((key, i) => {
                            switch(true) {
                                case (key === "relationship"):
                                    return <td key={i}>{row[key][0].text}</td>
                                case (key === "name"):
                                case (key === "address"):
                                    return <td key={i}>{row[key].text}</td>
                                case (typeof row[key] === "string"):
                                    return <td key={i}>{row[key]}</td>
                                default:
                                    return
                            }
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    }
}