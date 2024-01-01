import * as yup from "yup";

export const PetSchema = yup.object({
  id: yup.string().max(10, "Id must be at most 10 characters").required("ID is required"),
  petName: yup.string().required("Pet name is required"),
  status: yup.string().required("Status is required"),
  gender: yup.string().required("Gender is required"),
  pawrent: yup.string().required("Pawrent is required"),
  breed: yup.string().required("Breed is required"),
  dob: yup.string().nullable().required("Date of Birth is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Phone must be only digits")
    .min(8, "Phone must be at least 8 digits")
    .max(11, "Phone must be at most 11 digits"),
  postalCode: yup
    .string()
    .required("Postal code is required")
    .matches(/^[0-9]+$/, "Postal code must be only digits")
    .max(12, "Postal code must be smaller than 12 digits")
    .nullable()
    .optional(),
  address: yup.string().max(80).required("Address is required"),
});
