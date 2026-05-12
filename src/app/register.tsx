import { RegisterView } from "../viewModels/Register/Register.view";
import { useRegisterViewModel } from "../viewModels/Register/userRegister.viewModel";

export function Register() {
    const props = useRegisterViewModel();
    return (
        <RegisterView {...props} />
    )
}