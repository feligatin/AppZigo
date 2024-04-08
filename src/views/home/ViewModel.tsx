import React, { useState } from "react";

export const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    ...values,
    onChange,
  };
};

export default HomeViewModel;
