import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const ReusableCheckboxField = ({
  name,
  control = null,
  label = "",
  defaultValue = false,
  validation = false,
  rules = {},
  className = "",
  labelClassName = "",
  checkboxClassName = "",
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
          <FormItem className={`flex items-center gap-3 ${className}`}>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className={checkboxClassName}
                {...props}
              />
            </FormControl>
            <FormLabel className={labelClassName}>{label}</FormLabel>
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Checkbox className={checkboxClassName} {...props} />
      <Label className={labelClassName} htmlFor={name}>
        {label}
      </Label>
    </div>
  );
};

export default ReusableCheckboxField;
