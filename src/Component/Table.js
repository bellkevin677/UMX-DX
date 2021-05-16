const Table = (props) => {
    const Display = [],
        Pages = [],
        Keys = [],
        KeysUsed = ["subject", "issued", "status", "category", "code", "patient", "clinicalStatus", "verificationStatus", "abatementDateTime", "abatementBoolean", "onsetDateTime", "medicationCodeableConcept", "dosage", "wasNotTaken", "substance", "criticality", "name", "birthDate", "gender", "maritalStatus", "active"];

    props.Cerner.map((entry, index) => {
        const AllKeys = Object.keys(entry);
        AllKeys.map(key => {
            switch(true) {
                case (Keys.includes(key)):
                    return
                case (!isNaN(key)):
                    return Keys.push(key);
                case (!KeysUsed.includes(key)):
                    return 
                default:
                    return Keys.push(key);
            }
        });
        // if (index < props.DisplayIndex || index > props.DisplayIndex + props.DisplayCount) return
        // return Display.push(entry);
    });

    for (let i = 0; i < props.Cerner.length; i++) {
        if (i % props.DisplayCount === 0) Pages.push(Pages.length);
        if (i >= props.DisplayIndex && i < (props.DisplayIndex + props.DisplayCount)) Display.push(props.Cerner[i]);
    }

    // console.log("Pages:", Pages);
    // console.log("DisplayCount:", props.DisplayCount);
    // console.log("DisplayIndex:", props.DisplayIndex );

    return <div className="Table">
        <table>
            <thead>
                <tr>
                    {Keys.map((key, index) => {
                        switch (key) {
                            case "wasNotTaken":
                                return <th key={index}>Taken</th>
                            default:
                                return <th key={index}>{key}</th>
                        }
                    })}
                </tr>
            </thead>
            <tbody>
                {Display.map((entry, index) => {
                    return <tr key={index}>
                        {Keys.map((key, i) => {
                            if (!entry[key]) return <td key={i}></td>
                            let string = '';
                            switch (true) {
                                // case (key === "name"):
                                //     if (entry.resourceType === "RelatedPerson") {
                                //         return <td key={i}>{entry[key].text}</td>
                                //     } 
                                //     entry[key].forEach(name => {
                                //         if (name.use === 'official') string = name.text;
                                //     });
                                //     return <td key={i}>{string}</td>
                                // case (key === "dosage"):
                                //     entry[key].forEach((dose, num) => {
                                //         if (num === entry[key].length - 1) {
                                //             string += dose.text;
                                //         } else string += dose.text + '/n';
                                //     });
                                //     return <td key={i}>{string}</td>
                                case (key === "birthDate"):
                                case (key === "issued"):
                                    string = new Date(entry[key]);
                                    return <td key={i}>{string.toDateString()}</td>
                                case (key === "subject"):
                                    if (!entry[key].reference) return <td key={i}></td>
                                    return <td key={i}>{entry[key].reference.split('/')[1]}</td>
                                case (key === "maritalStatus"):
                                case (key === "substance"):
                                case (key === "medicationCodeableConcept"):
                                case (key === "code"):
                                case (key === "category"):
                                    switch (true) {
                                        case (typeof entry[key] === 'string'):
                                            return <td key={i}>{entry[key]}</td>
                                        case (entry.resourceType === "Patient" && entry[key] !== undefined):
                                        case (entry.resourceType === "AllergyIntolerance" && entry[key] !== undefined):
                                        case (entry.resourceType === "MedicationStatement" && entry[key] !== undefined):
                                        case (entry.resourceType === "Observation" && entry[key] !== undefined):
                                            return <td key={i}>{entry[key].text}</td>
                                        default:
                                            return <td key={i}></td>
                                    }
                                case (key === "patient"):
                                    if (!entry[key].display) return <td key={i}></td>
                                    return <td key={i}>{entry[key].display}</td>
                                case (key === "wasNotTaken"):
                                    if (entry[key]) {
                                        string = "Not Taken";
                                    } else string = "Taken";
                                    return <td key={i}>{string}</td>
                                // case (key === "active"):
                                // case (key === "gender"):
                                // case (key === "criticality"):
                                // case (key === "onsetDateTime"):
                                // case (key === "abatementBoolean"):
                                // case (key === "abatementDateTime"):
                                // case (key === "verificationStatus"):
                                // case (key === "clinicalStatus"):
                                // case (key === "status"):
                                default:
                                    if (typeof entry[key] !== 'string') return <td key={i}>NonString</td>
                                    return <td key={i}>{entry[key]}</td>
                            }
                        })}
                    </tr>
                })}
            </tbody>
        </table>
        {Pages.length > 1 ? (
            <ul className="Footer-Nav">
                {Pages.map((page, index) => {
                    if (props.DisplayIndex === props.DisplayCount * page) return <li 
                        key={index}
                        className="Footer-Nav-Link Footer-Nav-Link-Active"
                        onClick={() => props.SetAppState({ DisplayIndex: props.DisplayCount * page })}
                    >{page + 1}</li>
                    return <li 
                        key={index}
                        className="Footer-Nav-Link"
                        onClick={() => props.SetAppState({ DisplayIndex: props.DisplayCount * page })}
                    >{page + 1}</li>
                })}
            </ul>
        ) : null}
    </div>
}

export default Table;