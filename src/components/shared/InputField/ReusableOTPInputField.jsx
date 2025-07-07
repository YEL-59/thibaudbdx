import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";

const ReusableOTPInputField = ({ control, name, label, length = 6 }) => {
  return control ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <InputOTP
              maxLength={length}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup className="gap-3 flex-wrap">
                {Array.from({ length }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    pattern="\d*"
                    className="!bg-white !rounded-[8px] !text-lg !h-[40px] md:!h-[56px] !w-[40px] md:!w-[56px] !shadow-inner"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <InputOTP maxLength={length}>
      <InputOTPGroup className="gap-3 flex-wrap">
        {Array.from({ length }).map((_, index) => (
          <InputOTPSlot
            key={index}
            index={index}
            pattern="\d*"
            className="!bg-white !rounded-[8px] !text-lg !h-[40px] md:!h-[56px] !w-[40px] md:!w-[56px] !shadow-none"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};

export default ReusableOTPInputField;
