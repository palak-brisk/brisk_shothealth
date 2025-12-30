import CryptoJS from "crypto-js";

export const encryptPassword = (password: string) => {
  return CryptoJS.AES.encrypt(password, process.env.AES_SECRET!).toString();
};

export const decryptPassword = (password: string) => {
  return CryptoJS.AES.decrypt(password, process.env.AES_SECRET!).toString(CryptoJS.enc.Utf8);
};