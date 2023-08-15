import React from "react";

const FormattedText = ({ content }) => {
  // Split the content by the placeholder token
  const parts = content.split("[italic]");

  return (
    <div>
      {parts.map((part, index) =>
        index % 2 === 0 ? (
          <span key={index}>{part}</span>
        ) : (
          <span key={index} style={{ fontStyle: "italic" }}>
            {part}
          </span>
        )
      )}
    </div>
  );
};

export default FormattedText;