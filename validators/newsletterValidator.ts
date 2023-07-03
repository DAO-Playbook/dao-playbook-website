import { object, string } from 'yup';

export const newsletterValidator = object({
  email: string().email().required('Please enter a valid email'),
});
