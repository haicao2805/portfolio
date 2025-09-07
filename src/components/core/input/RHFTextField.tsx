'use client';

import React from 'react';

import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { ITextFieldProps, TextField } from './TextField';

export type TRHFTextFieldProps<TFormValue extends FieldValues> = Required<
  Pick<UseControllerProps<TFormValue>, 'control' | 'name'>
> &
  Omit<ITextFieldProps, 'name'>;

export const RHFTextField = <TFormValue extends FieldValues>(
  props: TRHFTextFieldProps<TFormValue>,
) => {
  const { control, name, ...restInputProps } = props;

  // --------------------------------------------------
  const id = React.useId();

  // --------------------------------------------------
  const { field, fieldState } = useController({ control, name });

  return (
    <TextField
      id={`${field.name}-${id}`}
      inputRef={field.ref}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isError={!!fieldState.invalid}
      helperText={fieldState.error?.message}
      {...restInputProps}
    />
  );
};
