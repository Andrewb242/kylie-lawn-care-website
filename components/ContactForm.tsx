"use client";

import { useState } from "react";
import {
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@heroui/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import serviceData from "../Data/serviceData.json";

const { services } = serviceData;

// ✅ Zod schema
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(7, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  jobDescription: z.string().min(10, "Job description is required"),
  selectedServices: z
    .array(z.string())
    .min(1, "Please select at least one service"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const email = "salawncare31@gmail.com";
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      jobDescription: "",
      selectedServices: [],
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitting(true);

    const emailBody = `
Name: ${data.name}
Email: ${data.email}
Phone Number: ${data.phoneNumber}
Address: ${data.address}
Job Description: ${data.jobDescription}
Selected Services: ${data.selectedServices.join(", ")}
    `.trim();

    const mailtoLink = `mailto:${email}?subject=Service Request&body=${encodeURIComponent(
      emailBody
    )}`;

    window.location.href = mailtoLink;
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            color="primary"
            variant="underlined"
            label="Name"
            name="name``"
            placeholder="First and last name"
            errorMessage={errors.name?.message}
          />
        )}
      />

      {/* Email */}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            color="primary"
            variant="underlined"
            type="email"
            label="Email Address"
            placeholder="abc123@youremailprovider.com"
            errorMessage={errors.email?.message}
          />
        )}
      />

      {/* Phone */}
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            color="primary"
            variant="underlined"
            type="tel"
            label="Phone Number"
            placeholder="(555) 123-4567"
            errorMessage={errors.phoneNumber?.message}
          />
        )}
      />

      {/* Address */}
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            color="primary"
            variant="underlined"
            label="Address"
            placeholder="123 Main St, City, State 12345"
            errorMessage={errors.address?.message}
          />
        )}
      />

      {/* Job Description */}
      <Controller
        name="jobDescription"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            isRequired
            color="primary"
            variant="underlined"
            label="Job Description"
            placeholder="Please describe the work you need done..."
            minRows={4}
            errorMessage={errors.jobDescription?.message}
          />
        )}
      />

      {/* Services */}
      <Controller
        name="selectedServices"
        control={control}
        render={({ field }) => (
          <CheckboxGroup
            label="Services Needed * (Select all that apply)"
            value={field.value}
            onChange={field.onChange}
            isRequired
            errorMessage={errors.selectedServices?.message}
          >
            {services.map((service, index) => (
              <Checkbox key={index} value={service} color="primary">
                {service}
              </Checkbox>
            ))}
          </CheckboxGroup>
        )}
      />

      <Button
        type="submit"
        color="primary"
        isDisabled={!isValid || submitting}
        isLoading={submitting}
        fullWidth
      >
        Send Email Request
      </Button>
    </form>
  );
}
