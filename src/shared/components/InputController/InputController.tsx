import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { Input, InputProps } from "../Input/Input";

/* Essa interface é responsável por definir as propriedades do InputController, omitindo as propriedades que são passadas para o Input */
interface InputControllerProps<T extends FieldValues> extends Omit<
  InputProps,
  "value" | "onChangeText" | "error"
> {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
}

export function InputController<T extends FieldValues>({
  control,
  name,
  errors,
  ...props
}: InputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <Input
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          error={error?.message}
          isDisabled={isSubmitting || props.isDisabled}
          {...props}
        />
      )}
    />
  );
}
