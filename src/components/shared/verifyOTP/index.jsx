import React, { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import images from "@/constants/images";
import { useOTPSubmit, useResendOTP, useVerifyOTP } from "@/hooks/api/auth.hook";
import useQueryParam from "@/hooks/useQueryParam";
import ReusableOTPInputField from "../InputField/ReusableOTPInputField";

const VerifyOTP = () => {
  const { form, mutate, isPending } = useVerifyOTP();
  const { mutate: resendMutate, isPending: resendIsPending } = useResendOTP();

  // demo code for otp count down
  const [counter, setCounter] = useState(2);

  const onSubmit = (values) => {
    // handle sign up
    mutate(values);
  };

  //   Resend OTP
  const handleResendOTP = () => {
    resendMutate(undefined, {
      onSuccess: () => {
        setCounter(30);
      },
    });
  };

  useEffect(() => {
    if (counter === 0) return;
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7]">
      <div
        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {/* Left side illustration or info */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#fafbfc] w-1/2 p-10">
          {/* You can put an illustration or branding here */}
          <span className="rounded-full flex items-center justify-center text-4xl font-bold text-primary mb-6">
            <img
              src={images?.logo}
              alt=""
              className="h-full w-full rounded-full"
            />
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">CRM</h2>
          <p className="text-gray-500 text-center">
            Didn’t Receive Code? Resend Code
          </p>
          <p className="text-gray-500 text-center">
            Resend Code in 00:{counter.toString().padStart(2, "0")}
          </p>
        </div>
        {/* Right side form */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12">
          <Card className="w-full border-none shadow-none">
            <CardContent className="p-0">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                    Verify Account
                  </h3>
                  <div className="mx-auto w-fit">
                    <ReusableOTPInputField
                      length={4}
                      control={form.control}
                      name={"otp"}
                    />
                  </div>
                  <Button
                    disabled={isPending || resendIsPending}
                    type="submit"
                    className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10 w-full"
                  >
                    {isPending ? "Verifying...." : "Verify"}{" "}
                    <span className="ml-2">&rarr;</span>
                  </Button>
                </form>
              </Form>
              {counter === 0 && (
                <div
                  onClick={() => handleResendOTP()}
                  className="mt-2 w-fit ml-auto text-gray-400 hover:underline cursor-pointer select-none"
                >
                  {resendIsPending ? "Resending...." : "Resend"}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
