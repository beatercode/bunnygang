import React from "react";
import { Attributescontainer, Textattributes } from "./styles";

const Attribute = ({ meta, percent }) => {
  return (
    <div>
      <Attributescontainer>
        <Textattributes>
          {meta} : {percent}
        </Textattributes>
      </Attributescontainer>
    </div>
  );
};

export default Attribute;
