import { object, string, ref, date } from "yup";

const number = /^[ 0-9]*$/;
const name = /^[ a-zA-Z]*$/;

export const addUserSchema = object({
  firstname: string().matches(name, "Invalid first name format"),
  lastname: string().matches(name, "Invalid last name format"),
  sex: string(),
  dateOfBirth: date(),
  email: string().email("Wrong email format").required("Email is required"),
  phone: string().matches(number, "Invalid phone number"),
  address: string(),
  username: string()
    .min(4, "Username must be at least 4 characters")
    .max(16, "Username must be less than 16 characters")
    .required("Username is required"),
  password: string()
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be less than 20 characters")
    .required("Password is required"),
});

export const createEventSchema = object({
  name: string().matches(name, "Invalid event name format"),
  timeEvent: date(),
  address: string(),
  linkImg: string(),
  field: string(),
  description: string(),
  guestInformation: string(),
  contact: string(),
  number: string().matches(number, "Invalid number format"),
  guest: string(),
});

export const usernameValidation = {
  required: {
    value: true,
    message: "Username required",
  },
  minLength: {
    value: 4,
    message: "Username must be at least 4 characters",
  },
  maxLength: {
    value: 16,
    message: "Username must be at most 16 characters",
  },
};

export const passwordValidation = {
  required: {
    message: "Password required",
  },
  minLength: {
    value: 4,
    message: "Password must be at least 4 characters",
  },
  maxLength: {
    value: 20,
    message: "Password must be at most 20 characters",
  },
};

export const confirmValidation = {
  required: {
    value: true,
    message: "Confirm password required",
  },
  minLength: {
    value: 4,
    message: "Confirm password must be at least 4 characters",
  },
  maxLength: {
    value: 20,
    message: "Confirm password must be at most 20 characters",
  },
};

export const firstNameValidation = {
  required: {
    value: true,
    message: "Firstname required",
  },
  pattern: {
    value: name,
    message: "Only characters are allowed",
  },
};

export const lastNameValidation = {
  required: {
    value: true,
    message: "Lastname required",
  },
  pattern: {
    value: name,
    message: "Only characters are allowed",
  },
};

export const fullNameValidation = {
  required: {
    value: true,
    message: "Fullname required",
  },
  pattern: {
    value: name,
    message: "Only characters are allowed",
  },
};

export const birthdayValidation = {
  required: {
    value: true,
    message: "Date of birth required",
  },
};

export const emailValidation = {
  required: {
    value: true,
    message: "Email required",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email format",
  },
};

export const phoneNumberValidation = {
  required: {
    value: true,
    message: "Phone number required",
  },
  pattern: {
    value: number,
    message: "Only numbers are allowed",
  },
};

export const addressValidation = {
  required: {
    message: "Address required",
  },
};

export const policyValidation = {
  required: {
    value: true,
    message: "You need to accept our Policy and Term of Use",
  },
};
