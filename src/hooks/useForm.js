import { useState } from "react";

export const useForm = (form={}) => {
  const [valueForm, setvalueForm] = useState(form);


  const onChangeForm = ({ target }) => {
    const { name, value } = target;
    setvalueForm({
      ...valueForm,
      [name]: value,
    });
  };
  const onResetForm = () => {
    setvalueForm(form);
  };

  return {
    valueForm,
    ...valueForm,
    onChangeForm,
    onResetForm,
  };
};
