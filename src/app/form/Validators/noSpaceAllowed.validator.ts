import { FormControl } from '@angular/forms';

export function noSpaceAllowed(
  control: FormControl
): { [key: string]: any } | null {
  if (control.value != null && control.value.indexOf(' ') != -1) {
    return { noSpaceAllowed: true };
  }
  return null;
}

export function patternValidator(
  control: FormControl
): { [key: string]: any } | null {
  const pattern = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{3,3}$/i;
  if (!pattern.test(control.value)) {
    return { patternError: true };
  }
  return null;
}

export function maxChar(control: FormControl): { [key: string]: any } | null {
  const maxCharacter = 250;
  if (control.value.length > maxCharacter) {
    return { lengthError: true };
  }
  return null;
}

export function nameLengthError(control: FormControl): {
  [key: string]: any;
} | null {
  const maxCharacter = 15;
  if (control.value.length > maxCharacter) {
    return { nameLengthError: true };
  }
  return null;
}

export function surnameLengthError(
  control: FormControl
): { [key: string]: any } | null {
  const maxCharacter = 20;
  if (control.value.length > 20) {
    return { surnameLengthError: true };
  }
  return null;
}
