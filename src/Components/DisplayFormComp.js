import React from "react";
import { useForm } from "../Context/FormContext";

const DisplayFormComp = ({ data }) => {
  const { deleteForm } = useForm();
  return (
    <div>
      <h3>Form : {data.metadata.formId} </h3>
      <h3>Created By : {data.metadata.creatorName} </h3>
      <h3>Created At : {data.metadata.createTime} </h3>
      {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}
      <div>
        {Object.keys(data.data).map((item, index) => {
          return (
            <div key={index}>
              <h3>
                {data.data[item].title} : {data.data[item].name}
              </h3>
              <br />
            </div>
          );
        })}
      </div>
      <button onClick={() => deleteForm(data.metadata.formId)}>
        Delete Form
      </button>
    </div>
  );
};

export default DisplayFormComp;
