import React, { useEffect, useState } from "react";
import { useForm } from "../Context/FormContext";
import "./Form.css";
import Header from "./Header";

function Form() {
  const { addToList, list } = useForm();
  const [selected, setSelected] = useState({});
  const [fields, setFields] = useState([]);
  const [inputType, setInputType] = useState("");
  const [data, setData] = useState({
    metadata: {},
    data: {},
  });

  useEffect(() => {
    if (list.length !== 0) {
      // console.log([...Object.values(list[list.length - 1].data)]);
      setFields([...Object.values(list[list.length - 1].data)]);
    }
  }, []);

  const [field, setField] = useState({
    title: "",
    type: "",
    name: "",
    placeholder: "",
  });

  const [metaData, setMetaData] = useState({
    formId: 0,
    creatorName: "",
    createTime: 0,
  });

  useEffect(() => {
    setField(selected);
  }, [selected]);

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        metadata: metaData,
      };
    });
  }, [metaData]);

  const handleMetaChange = (e) => {
    const { name, value } = e.target;
    setMetaData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    let obj = {};
    fields.forEach((item) => {
      obj[item.name] = {
        ...item,
        name: "",
      };
    });
    setData((prev) => {
      return {
        ...prev,
        data: obj,
      };
    });
  }, [fields]);

  const addField = () => {
    console.log(field);
    setFields((prev) => [...prev, field]);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setField((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        data: {
          ...prev.data,
          [name]: {
            ...prev.data[name],
            name: value,
          },
        },
      };
    });
  };

  const handleSubmit = () => {
    let dataToAdd = {
      ...data,
      metadata: {
        ...data.metadata,
        createTime: new Date().toLocaleDateString(),
      },
    };
    // setList((prev) => [...prev, dataToAdd]);
    addToList(dataToAdd);
    // setData(field);
  };

  const deleteField = (delItemName) => {
    setFields((prev) => prev.filter((item) => item.name !== delItemName));
  };

  const selectField = (updateItemName) => {
    setSelected({ ...data.data[updateItemName], name: updateItemName });
  };

  const updateField = () => {
    setFields((prev) =>
      prev.map((item) => {
        if (item.name === selected.name) return field;
        else return item;
      })
    );
  };

  const handleInputType = (e) => {
    const { value } = e.target;
    setInputType(value);
    setField((prev) => {
      return {
        ...prev,
        type: value,
      };
    });
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="Form">
      <div className="add_field">
        <h3 style={{ textAlign: "center" }}>Create New Form</h3>
        <h4>
          <label htmlFor="formId">Form Id : </label>
          <input
            type="text"
            name="formId"
            value={metaData.formId}
            onChange={(e) => handleMetaChange(e)}
          />
        </h4>
        <h4>
          <label htmlFor="creatorName">Create By : </label>
          <input
            type="text"
            name="creatorName"
            value={metaData.creatorName}
            onChange={(e) => handleMetaChange(e)}
          />
        </h4>

        <div>
          <h3> Add New Field</h3>
          <label htmlFor="title">Title: </label>

          <input
            type="text"
            name="title"
            value={field.title}
            placeholder="Add Field Title"
            onChange={(e) => handleFieldChange(e)}
          />
          <br />
          <label htmlFor="name">Name Attribute: </label>
          <input
            type="text"
            name="name"
            value={field.name}
            placeholder="Add Field Attribute (i.e, name for Name) "
            onChange={(e) => handleFieldChange(e)}
          />
          <br />
          {/* <label htmlFor="type">Type</label>
          <br />
          <input
            type="text"
            name="type"
            value={field.type}
            onChange={(e) => handleFieldChange(e)}
          />
          <br /> */}
          <span>Select Type: </span>

          <label htmlFor="inputType">String</label>
          <input
            type="radio"
            name="inputType"
            value="string"
            checked={inputType === "string"}
            onChange={(e) => handleInputType(e)}
          />
          <label htmlFor="inputType">Number</label>
          <input
            type="radio"
            name="inputType"
            value="number"
            checked={inputType === "number"}
            onChange={(e) => handleInputType(e)}
          />
          <br />
          <label htmlFor="type">Placeholder: </label>
          <input
            type="text"
            name="placeholder"
            value={field.placeholder}
            placeholder="Add Field Placeholder"
            onChange={(e) => handleFieldChange(e)}
          />
          <br />
          <button onClick={() => addField()}>Add Field</button>
          <button onClick={() => updateField()}>Update Field</button>
        </div>
      </div>
      <div className="show_form">
        <h3>Your Form will be Generated Here </h3>

        {Object.keys(data.data).map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={item}>{data.data[item].title}</label>
              <br />
              <input
                type={data.data[item].type}
                name={item}
                value={data.data[item].name}
                placeholder={data.data[item].placeholder}
                onChange={(e) => handleChange(e)}
              />
              <button onClick={() => deleteField(item)}>Delete</button>
              <button onClick={() => selectField(item)}>Update</button>
            </div>
          );
        })}

        <button onClick={() => handleSubmit()}> Save Form </button>
      </div>
    </div>
  );
}

export default Form;
