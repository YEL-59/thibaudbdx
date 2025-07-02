import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Eye, EyeClosed } from "lucide-react";

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
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

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
                {isPassword ? (
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder={placeholder}
                      disabled={disabled}
                      className={`px-5 py-8 border-none bg-transparent text-foreground ${inputClassName}`}
                      {...props}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-[35%] text-muted-foreground"
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </button>
                  </div>
                ) : (
                  <Input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`px-5 py-8 border-none bg-transparent text-foreground ${inputClassName}`}
                    {...props}
                  />
                )}
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
      {isPassword ? (
        <div className="relative">
          <Input
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
            className={`px-5 py-6 border border-[#D6D6D6] bg-transparent rounded-lg text-foreground ${inputClassName}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[35%] text-muted-foreground"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ReusableInputField;
