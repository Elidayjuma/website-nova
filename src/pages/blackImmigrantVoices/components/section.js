export default function Section(props) {
    return (
      <div className="community-activity-section">
        <h3>{props.heading}</h3>
        <p>{props.body}</p>
      </div>
    );
  }
  