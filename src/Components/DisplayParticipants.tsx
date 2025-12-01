interface IDisplayParticipants {
  allParticipants: string[];
  onFindPairs: () => void;
}

export default function DisplayParticipants(props: IDisplayParticipants) {
  return (
    <>
      <h1>Teilnehmer</h1>
      <div className="participantList">
        {props.allParticipants.map((p, i) => (
          <label key={i} className="participantLabel">
            {p}
          </label>
        ))}
      </div>
      {/* Generate pairs */}
      {props.allParticipants.length > 3 && (
        <button className="getPairsButton" onClick={props.onFindPairs}>
          Paare bilden
        </button>
      )}
    </>
  );
}
