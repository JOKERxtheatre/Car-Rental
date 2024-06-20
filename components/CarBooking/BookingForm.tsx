import React, { useEffect, useState } from "react";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
interface form {
  name:string
}
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdAccessTime } from "react-icons/md";
import { Input } from "../ui/input";
import { createBooking, getStoreLocations } from "@/services";
import { useToast } from "../ui/use-toast";
import { Close } from "@radix-ui/react-dialog";

function BookingForm({ car }: any) {
  const [date, setDate] = React.useState<Date>();
  const [dateOff, setDateOff] = React.useState<Date>();
  const [time, setTime] = React.useState<string>();
  const [time2, setTime2] = React.useState<string>();
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const { toast } = useToast();

  const [storeLocation, setStoreLocation] = useState<any>([]);
  useEffect(() => {
    getStoreLocation_();
  }, []);
  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocations();
    setStoreLocation(resp?.storesLocations);
  };
  const [formValue, setFormValue] = useState({
    userName: "Xumoyun",
    contactNumber: "",
    pickUpDate: "",
    dropOffDate: "",
    dropOffTime: "",
    pickUpTime: "",
    carId: "",
  });

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id,
      });
    }
  }, [car]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const errors: string[] = [];
    if (!formValue.userName) {
      errors.push("User Name is required.");
    }
    if (!formValue.contactNumber) {
      errors.push("Contact Number is required.");
    }
    if (!formValue.pickUpDate) {
      errors.push("Pick Up Date is required.");
    }
    if (!formValue.dropOffDate) {
      errors.push("Drop Off Date is required.");
    }
    if (!formValue.pickUpTime) {
      errors.push("Pick Up Time is required.");
    }
    if (!formValue.dropOffTime) {
      errors.push("Drop Off Time is required.");
    }
    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent) => {
    if (!validateForm()) {
      // Form validation failed, display error toast
      toast({
        title: "Error, required fields are not filled.",
        description: formErrors.map((error, index) => (
          <div key={index} className="mb-1">
            {error}
          </div>
        )),
        variant: "destructive",
      });
      return;
    }
    try {
      const response = await createBooking(formValue);
      console.log("Booking created successfully:", response);
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      toast({
        title: "Car rental completed successfully",
        description: `The lease was successfully completed on ${formattedDate}`,
        variant: "success",
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      toast({
        title: "Error",
        description: `There was a problem renting a car on ${formattedDate}. Please try again later.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <h1 className="text-gray-500 font-normal mb-1">Pick Up Location</h1>
      <Select
        required
        name="location"
        onValueChange={(value) => handleSelectChange("location", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pick Up Location?" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {storeLocation &&
              storeLocation.map((loc: any, index: number) => (
                <SelectItem value={loc?.adress} key={index} className="w-full">
                  {loc?.adress}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex items-center justify-between gap-2 md:gap-5 w-full mt-2 md:mt-5 flex-col md:flex-row">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-gray-500 font-normal mb-1">Pick Up Date</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full lg:w-[220px] justify-start text-left font-normal md:text-base",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                required
                mode="single"
                selected={date}
                onSelect={(selectedDate: any) => {
                  setDate(selectedDate);
                  handleSelectChange(
                    "pickUpDate",
                    format(selectedDate, "yyyy-MM-dd")
                  );
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col items-start w-full">
          <h1 className="text-gray-500 font-normal mb-1">Drop Off Date</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full  lg:w-[220px] justify-start text-left font-normal md:text-base",
                  !dateOff && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {dateOff ? format(dateOff, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                required
                mode="single"
                selected={dateOff}
                onSelect={(selectedDateOff: any) => {
                  setDateOff(selectedDateOff);
                  handleSelectChange(
                    "dropOffDate",
                    format(selectedDateOff, "yyyy-MM-dd")
                  );
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 md:gap-5 w-full mt-2 md:mt-5 flex-col md:flex-row">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-gray-500 font-normal mb-1">Pick Up Time</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full lg:w-[220px] justify-start text-left font-normal md:text-base",
                  !time && "text-muted-foreground"
                )}
              >
                <MdAccessTime className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {time ? time : <span>Pick Up Time</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <input
                required
                type="time"
                value={time}
                name="pickUpTime"
                onChange={(e) => {
                  setTime(e.target.value);
                  handleChange(e);
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col items-start w-full">
          <h1 className="text-gray-500 font-normal mb-1">Drop Off Time</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full lg:w-[220px] justify-start text-left font-normal md:text-base",
                  !time2 && "text-muted-foreground"
                )}
              >
                <MdAccessTime className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {time2 ? time2 : <span>Drop Off Time</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <input
                required
                type="time"
                value={time2}
                name="dropOffTime"
                onChange={(e) => {
                  setTime2(e.target.value);
                  handleChange(e);
                }}
                className="p-2 border border-gray-300 rounded-md"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-2 md:mt-5 flex flex-col items-start">
        <h1 className="text-gray-500 font-normal mb-1">Contact Number</h1>
        <Input
          required
          onChange={handleChange}
          placeholder="Type here..."
          className=" focus-visible:ring-blue-500"
          name="contactNumber"
        ></Input>
      </div>
      <div className="flex items-center justify-end gap-5">
        <DialogClose asChild>
          <Button type="button" variant="destructive" className="mt-3">
            Close
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            type="button"
            variant="outline"
            className="mt-3 bg-cyan-500 text-white"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogClose>
      </div>
    </div>
  );
}

export default BookingForm;
