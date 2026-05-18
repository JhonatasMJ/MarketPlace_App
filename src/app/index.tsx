
import { Redirect } from "expo-router";

export function App () {
  const userData = {
    token: '1234567890',
    name: 'John Doe',
  };

 if(userData) {
  return (
    <Redirect href="/login" />
  )
 }
   return (
    <Redirect href="/login" />
  )
}