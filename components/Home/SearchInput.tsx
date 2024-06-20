import React from "react";
import { Input } from "../ui/input";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
function SearchInput() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="mt-10">
      <h2 className="text-center text-[20px] text-gray-400">
        Lets search what you need
      </h2>
      <div className="md:flex items-center justify-center mt-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="size-6 stroke-blue-500 absolute translate-x-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <Input
            type="text"
            placeholder="Location"
            className="focus-visible:ring-background ring-0 border-0 hover:bg-accent pl-10 md:text-lg md:bg-gray-200 md:rounded-none md:rounded-tl-2xl md:rounded-bl-2xl md:py-7"
          />
        </div>
        <div className="flex items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal border-0 md:text-lg md:bg-gray-200 md:rounded-none md:rounded-tr-2xl md:rounded-br-2xl md:border-l md:border-gray-500  md:py-7",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
