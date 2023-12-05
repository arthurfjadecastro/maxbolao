// BasicCard.jsx
import React from 'react';
import "./basicCard.css";

function BasicCard({ title, isFifthCard, isFourthCard, index }) {
  const titleWithLineBreaks = title.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const containerClass = isFifthCard ? 'FifthCard' : (isFourthCard ? 'FourthCard' : '');

  return (
    <div className={`Container ${containerClass}`}>
      <div className="Step">
        <div className="tipografiaIcon">{index}</div>
      </div>
      <div className="Tipografia">
        <p className="textCard">
          {titleWithLineBreaks}
        </p>
      </div>
    </div>
  );
}

export default BasicCard;
