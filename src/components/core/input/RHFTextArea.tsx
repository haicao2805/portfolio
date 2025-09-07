'use client';

import React from 'react';

import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { ITextAreaProps, TextArea } from './TextArea';

export type TRHFTextAreaProps<TFormValue extends FieldValues> = Required<
  Pick<UseControllerProps<TFormValue>, 'control' | 'name'>
> &
  Omit<ITextAreaProps, 'name'>;

export const RHFTextArea = <TFormValue extends FieldValues>(
  props: TRHFTextAreaProps<TFormValue>,
) => {
  const { control, name, ...restInputProps } = props;

  // --------------------------------------------------
  const id = React.useId();

  // --------------------------------------------------
  const { field, fieldState } = useController({ control, name });

  return (
    <TextArea
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
