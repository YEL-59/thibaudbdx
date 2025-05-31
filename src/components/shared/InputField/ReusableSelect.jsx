import { Card } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export default function ReusableSelect({
  name,
  control,
  placeholder = "Select an option",
  options = [],
  className = "",
  label,
  labelClassName = "",
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          {label && (
            <FormLabel
              className={cn(
                "text-lg text-[#3F3B3B] font-medium",
                labelClassName
              )}
            >
              {label}
            </FormLabel>
          )}
          <Card className="p-0 gap-0 border-none rounded-sm bg-[#FAFAFA]">
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger
                  className={cn(
                    "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                    "px-5 py-8 border-none bg-transparent text-gray-400",
                    className
                  )}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem
                      className="py-4"
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Card>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
