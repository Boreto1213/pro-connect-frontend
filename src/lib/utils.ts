import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

type JwtPayloadField = 'sub' | 'iat' | 'exp' | 'role'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPayloadData(token: string, field: JwtPayloadField) {
const payload = token.split('.')[1];
const decodedPayload = atob(payload);
const payloadObj = JSON.parse(decodedPayload);

return payloadObj[field];
}

export function isNumerical(string: string) {
  return string && !isNaN(parseFloat(string))
}