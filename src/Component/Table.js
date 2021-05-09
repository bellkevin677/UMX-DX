const Table = (props) => {
    const Display = [],
        Pages = [],
        Keys = [],
        KeysUsed = ["subject", "issued", "status", "category", "code", "patient", "clinicalStatus", "verificationStatus", "abatementDateTime", "abatementBoolean", "onsetDateTime", "medicationCodeableConcept", "dosage", "wasNotTaken", "substance", "criticality", "name", "birthDate", "gender", "maritalStatus", "active"];

    props.Cerner.entry.map((entry, index) => {
        const AllKeys = Object.keys(entry.resource);
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

    for (let i = 0; i < props.Cerner.entry.length; i++) {
        if (i % props.DisplayCount === 0) Pages.push(Pages.length);
        if (i >= props.DisplayIndex && i < (props.DisplayIndex + props.DisplayCount)) Display.push(props.Cerner.entry[i]);
    }

    console.log("Pages:", Pages);
    console.log("DisplayCount:", props.DisplayCount);
    console.log("DisplayIndex:", props.DisplayIndex );

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
                            if (!entry.resource[key]) return <td key={i}></td>
                            let string = '';
                            switch (true) {
                                case (key === "name"):
                                    if (entry.resource.resourceType === "RelatedPerson") {
                                        return <td key={i}>{entry.resource[key].text}</td>
                                    } 
                                    entry.resource[key].forEach(name => {
                                        if (name.use === 'official') string = name.text;
                                    });
                                    return <td key={i}>{string}</td>
                                case (key === "dosage"):
                                    entry.resource[key].forEach((dose, num) => {
                                        if (num === entry.resource[key].length - 1) {
                                            string += dose.text;
                                        } else string += dose.text + '/n';
                                    });
                                    return <td key={i}>{string}</td>
                                case (key === "birthDate"):
                                case (key === "issued"):
                                    string = new Date(entry.resource[key]);
                                    return <td key={i}>{string.toDateString()}</td>
                                case (key === "subject"):
                                    if (!entry.resource[key].reference) return <td key={i}></td>
                                    return <td key={i}>{entry.resource[key].reference.split('/')[1]}</td>
                                case (key === "maritalStatus"):
                                case (key === "substance"):
                                case (key === "medicationCodeableConcept"):
                                case (key === "code"):
                                case (key === "category"):
                                    switch (true) {
                                        case (typeof entry.resource[key] === 'string'):
                                            return <td key={i}>{entry.resource[key]}</td>
                                        case (entry.resource.resourceType === "Patient" && entry.resource[key] !== undefined):
                                        case (entry.resource.resourceType === "AllergyIntolerance" && entry.resource[key] !== undefined):
                                        case (entry.resource.resourceType === "MedicationStatement" && entry.resource[key] !== undefined):
                                        case (entry.resource.resourceType === "Observation" && entry.resource[key] !== undefined):
                                            return <td key={i}>{entry.resource[key].text}</td>
                                        default:
                                            return <td key={i}></td>
                                    }
                                case (key === "patient"):
                                    if (!entry.resource[key].display) return <td key={i}></td>
                                    return <td key={i}>{entry.resource[key].display}</td>
                                case (key === "wasNotTaken"):
                                    if (entry.resource[key]) {
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
                                    if (typeof entry.resource[key] !== 'string') return <td key={i}>NonString</td>
                                    return <td key={i}>{entry.resource[key]}</td>
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