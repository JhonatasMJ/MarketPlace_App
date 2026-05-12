import { useState } from "react";

export const useRegisterViewModel = () => { 
    const [userData, setUserData] = useState({});
    return {
        userData,
        setUserData,
    }
}