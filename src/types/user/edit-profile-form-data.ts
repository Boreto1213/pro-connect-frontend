import { z } from 'zod'

const MAX_FILE_SIZE = 1048576 // 1MB in bytes
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export const schema = z.object({
  firstName: z.string().nonempty().max(50),
  lastName: z.string().nonempty().max(50),
  profession: z.string().nonempty().max(50),
  yearsOfExperience: z.number().min(1).max(50),
  email: z.string().email().max(150),
  // password: z.string().refine((val) => {
  //   return (
  //     val === '' ||
  //     val === undefined ||
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/.test(
  //       val
  //     )
  //   )
  // }),
  phone: z.string().regex(/\+[\d]{1,3}[\d]{9}$/),
  city: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  profileImage: z
    .any()
    .refine(
      (files) => files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 1MB.`
    )
    .refine(
      (files) =>
        files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  bio: z.string().nonempty().max(500),
})

type EditProfileFormData = z.infer<typeof schema>

export default EditProfileFormData
