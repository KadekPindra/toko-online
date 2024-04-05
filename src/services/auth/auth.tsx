import bcrypt from "bcrypt";
import { addData, retrieveDataByField } from "@/lib/firebase/service";

export async function signUp(
    userData: {
      username: string;
      email: string;
      password: string;
      phone: string;
      created_at?: Date;
      updated_at?: Date;
    },
    callback: Function
  ) {
    const data = await retrieveDataByField('users', 'email', userData.email);
  
    if (data.length > 0) {
      callback(false);
    } else {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.created_at = new Date();
      userData.updated_at = new Date();
      await addData('users', userData, (result: boolean) => { 
        callback(result);
      });
      
    }
  }
  
  export async function signIn(email: string) {
    const data = await retrieveDataByField('users', 'email', email);
  
    if (data) {
      return data[0];
    } else {
      return null;
    }
  }
  
  export async function loginWithGoogle(data: {email: string, role?: string}, callback: Function){
    const user = await retrieveDataByField('users', 'email', data.email);
  
    if (user.length > 0) {
      callback(user[0]);
    } else {
      data.role = 'member';
      await addData('users', data, (result: boolean) => {
        if (result) {
          callback(data);
        }
      })
    }
  
  }