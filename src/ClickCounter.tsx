import React, { Fragment, useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <button
        onClick={(e) => {
          setCount((count) => count + 1);
        }}
      >
        Count: {count}
      </button>
    </Fragment>
  );
};

export default ClickCounter;
