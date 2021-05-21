import Events from "../Events";

const Table = (props) => {
    const Display = [];
    let Type = null,
        Pages = Math.ceil(props.Cerner.length / props.DisplayCount);

    if (props.Cerner[0].resourceType) Type = props.Cerner[0].resourceType.toLowerCase();

    // For each entry, see if value has entered-in-error and if not add entry to display...
    // then set up pages to be viewed.
    for (let i = 0; i < props.Cerner.length && Display.length < props.DisplayCount; i++) {
        if (i >= props.DisplayIndex) Display.push(props.Cerner[i]);
    }

    if (Display.length > 0) console.log("Display: ", Display);
    if (Pages > 0) console.log(`Pages(Current/Total): ${props.CurrentPage}/${Pages}`);
    if (Pages > 0) console.log(`Index(Current/Total): ${props.DisplayIndex}/${props.Cerner.length}`);
    if (Pages > 0) console.log(`DisplayCount: ${props.DisplayCount}`);

    return <div className="App-Table">
        <table className="Table">
            <thead>
                {Events.thead[Type]()}
            </thead>
            <tbody>
                {Display.map((entry, index) => {
                    return Events.tbody[Type]({
                        index: index,
                        entry: entry
                    });
                })}
            </tbody>
        </table>
        {Pages > 1 ? (
            <TableFooter 
                Cerner={props.Cerner}
                Pages={Pages}
                DisplayCount={props.DisplayCount}
                DisplayIndex={props.DisplayIndex}
                CurrentPage={props.CurrentPage}
                SetAppState={props.SetAppState}
                SetParentState={props.SetParentState}
            />
        ) : null}
    </div>
}

function TableFooter(props) {
    return <div className="Footer-Nav">
        <div>
            <button
                className="Footer-Nav-Link"
                onClick={() => props.SetAppState({ CurrentPage: 1, DisplayIndex: 0 })}
                disabled={props.CurrentPage <= 1}
            >First</button>
            <button
                className="Footer-Nav-Link"
                onClick={() => props.SetAppState({ CurrentPage: props.CurrentPage - 1, DisplayIndex: props.DisplayIndex - props.DisplayCount })}
                disabled={props.CurrentPage <= 1}
            >Prev</button>
        </div>
        <div className="Footer-Nav-Link">
            <label className="Footer-Label">
                <input 
                    className="Footer-Input"
                    type="text" 
                    value={props.CurrentPage}
                    onChange={event => props.SetAppState({ CurrentPage: event.target.value })}
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            if (props.CurrentPage <= 1) {
                                props.SetAppState({ DisplayIndex: 0 });
                                return props.SetAppState({ CurrentPage: 1 });
                            }
                            if (props.CurrentPage >= props.Pages) {
                                props.SetAppState({ DisplayIndex: props.Cerner.length - props.DisplayCount });
                                return props.SetAppState({ CurrentPage: props.Pages });
                            }
                            props.SetAppState({ DisplayIndex: props.DisplayCount * (props.CurrentPage - 1) });
                        }
                    }}
                ></input>
                {`/${props.Pages}`}
            </label>
        </div>
        <div>
            <button
                className="Footer-Nav-Link"
                onClick={() => props.SetAppState({ CurrentPage: props.CurrentPage + 1, DisplayIndex: props.DisplayIndex + props.DisplayCount })}
                disabled={props.CurrentPage >= props.Pages}
            >Next</button>
            <button
                className="Footer-Nav-Link"
                onClick={() => props.SetAppState({ CurrentPage: props.Pages, DisplayIndex: props.DisplayCount * (props.Pages - 1) })}
                disabled={props.CurrentPage >= props.Pages}
            >Last</button>
        </div>
    </div>
}

export default Table;