import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function getZodiacSign(birthDate: Date): string {
  const month = birthDate.getMonth() + 1
  const day = birthDate.getDate()

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Koç'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Boğa'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'İkizler'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Yengeç'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Aslan'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Başak'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Terazi'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Akrep'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Yay'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Oğlak'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Kova'
  return 'Balık'
}

export function calculateLifePath(birthDate: Date): number {
  const dateString = birthDate.toISOString().split('T')[0].replace(/-/g, '')
  let sum = 0
  for (const digit of dateString) {
    sum += parseInt(digit)
  }
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    const digits = sum.toString().split('')
    sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0)
  }
  
  return sum
} 