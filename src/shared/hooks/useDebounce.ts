import { useEffect, useState } from "react";

// Hook para debounce de um valor, espera parar de digitar por um determinado tempo para atualizar o valor
export const useDebounce = <T>(value: T, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const timeoutId = setInterval(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearInterval(timeoutId);
    }, [value, delay]);


    return debouncedValue;
}