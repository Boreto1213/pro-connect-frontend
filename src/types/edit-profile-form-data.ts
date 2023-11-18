import { z } from 'zod'

export const schema = z.object({
  firstName: z.string().nonempty().max(50),
  lastName: z.string().nonempty().max(50),
  profession: z.string().nonempty().max(50),
  yearsOfExperience: z.number().min(1).max(50),
  email: z.string().email().max(150),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/
    ),
  phone: z.string().regex(/\+[\d]{1,3}[\d]{9}$/),
  city: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  website: z.string().max(100).optional(),
  photo: z.any().refine((files) => files?.length == 1, 'Image is required.'),
  // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // )
  cv: z.any().refine((files) => files?.length == 1, 'Image is required.'),
  bio: z.string().nonempty().max(500),
})

type EditProfileFormData = z.infer<typeof schema>

export default EditProfileFormData