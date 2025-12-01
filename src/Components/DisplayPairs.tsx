import { useState } from "react";
import "../App.css";

interface IDisplayPairs {
  pairs: Map<string, string>;
}

export default function DisplayPairs(props: IDisplayPairs) {
  const { pairs } = props;
  const [pairToShow, setPairToShow] = useState<number>();

  return (
    <div>
      <h1>Paare</h1>
      <div className="pairList">
        {[...pairs.entries()].map(([a, b], i) => (
          <div key={a} className="pairListItem">
            <button onClick={() => setPairToShow(i)}>{a}</button>
            {pairToShow == i && (
              <>
                besorgt geschenk für <label className="button">{b}</label>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
