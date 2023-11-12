import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserRole(token: string) {
const payload = token.split('.')[1];
const decodedPayload = atob(payload);
const payloadObj = JSON.parse(decodedPayload);

return payloadObj.role;
}