import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { userFormFields } from "../config/formConfig";
import { userSchema } from "../utils/validationSchema";

function UserForm({ onSubmit, defaultValues }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  // Reset form when defaultValues change (for edit mode)
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userFormFields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: inputField, fieldState: { error } }) => (
            <TextField
              {...inputField}
              label={field.label}
              type={field.type}
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
}

export default UserForm;