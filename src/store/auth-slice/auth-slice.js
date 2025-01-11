import { createUserWithEmailAndPassword } from "firebase/auth"
import { create } from "zustand";
import { auth } from "../../utils/firebase/firebase-config";

export const useAuth = create((set) => ({
    isFetch: false,
    async registerUser(email, password) {
        set({isFetch: true})
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
        } catch (error) {
            console.error(error);
        } finally {
            set({isFetch: false})
        }

    },
}))