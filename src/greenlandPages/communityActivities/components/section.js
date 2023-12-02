export default function Section(props) {
    return (
      <div className="community-activity-section">
        <div className="row">
          <div className="col">
              <h3>{props.heading}</h3>
          </div>
          <div className="col">
          <p>{props.body}</p>
          </div>
        </div>
        
      </div>
    );
  }
  