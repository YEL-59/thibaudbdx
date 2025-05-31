import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";

const ReusableInputField = ({
  name,
  control = null,
  label = "",
  placeholder = "",
  type = "text",
  defaultValue = "",
  validation = false,
  rules = {},
  disabled = false,
  value = "",
  className = "",
  inputClassName = "",
  labelClassName = "",
  ...props
}) => {
  if (control) {
    return (
      <FormField
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={validation ? rules : {}}
        render={({ field }) => (
          <FormItem className={`flex flex-col ${className}`}>
            {label && (
              <FormLabel
                className={`text-lg text-[#3F3B3B] font-medium ${labelClassName}`}
              >
                {label}
              </FormLabel>
            )}
            <FormControl>
              <Card className="p-0 gap-0 border-none rounded-sm bg-[#FAFAFA]">
                <Input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={`px-5 py-8 border-none bg-transparent text-foreground ${inputClassName}`}
                  {...props}
                />
              </Card>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-xs font-medium ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
        className={`px-5 py-6 border border-[#D6D6D6] bg-transparent rounded-lg text-foreground ${inputClassName}`}
      />
    </div>
  );
};

export default ReusableInputField;
