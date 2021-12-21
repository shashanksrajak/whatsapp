import API from "./index";
import { useMutation } from "react-query";

export function authSignUp(payload) {
    return API({
        method: "POST",
        url: `/v1/auth/sign-up`,
        data: JSON.stringify(payload),
        // withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export function authSignIn(payload) {
    return useMutation(
        async (payload) => {
            const response = await API({
                method: "POST",
                url: `/v1/auth/sign-in`,
                data: JSON.stringify(payload),
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            })

            return response;
        }
    );
}


// const { mutate, isLoading, isError, data, error } = 


export function authSignOut() {
    return API({
        method: "POST",
        url: `/v1/auth/sign-out`,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
}

