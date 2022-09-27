import React, { useContext, useState } from "react";

const FormContext = React.createContext();

export const useForm = () => {
  return useContext(FormContext);
};

function FormProvider({ children }) {
  const [list, setList] = useState([]);
  function addToList(item) {
    setList((prev) => [...prev, item]);
  }
  function deleteForm(id) {
    setList((prev) => prev.filter((item) => item.metadata.formId !== id));
  }

  const value = {
    addToList,
    list,
    setList,
    deleteForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormProvider;
