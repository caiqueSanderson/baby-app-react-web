function getStoredDataLocalStorage() {
    const storedEmail = localStorage.getItem("@email");
    const storedPassword = localStorage.getItem("@password");

    return { storedEmail, storedPassword }
}

function checkConsistencyRegistrationData(email, password, repeatPassword, setError, setSuccess) {
    const { storedEmail } = getStoredDataLocalStorage();

    if (password !== repeatPassword) {
        setError("As senhas diferem!");
        setSuccess(false);
        return false;
    }

    if (email === storedEmail) {
        setError("E-mail já registrado");
        setSuccess(false);
        return false;
    }

    setError("");
    setSuccess(true);
    return true;
}

function saveUserData(email, password) {
    localStorage.setItem("@email", email);
    localStorage.setItem("@password", password);
}
export { getStoredDataLocalStorage, checkConsistencyRegistrationData, saveUserData }