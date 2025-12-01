import "../App.css";

interface IDisplayPairs {
  pairs: Map<string, string>;
}

export default function DisplayPairs(props: IDisplayPairs) {
  const { pairs } = props;
  return (
    <div>
      <h1>Paare</h1>
      <div className="pairList">
        {[...pairs.entries()].map(([a, b]) => (
          <div key={a} className="pairListItem">
            <label className="participantLabel">{a}</label> -----
            <label className="participantLabel">{b}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
