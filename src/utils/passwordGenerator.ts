export default function passwordGenerator(
  length: number,
  upperCase: boolean,
  specialChars: boolean,
  numbers: boolean
): string {
  let password = "";
  let possibleChars = "abcdefghijklmnopqrstuvwxyz";

  if (upperCase) {
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbers) {
    possibleChars += "0123456789";
  }

  if (specialChars) {
    possibleChars += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  for (let i = 0; i < length; i++) {
    password += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

  return password;
}
