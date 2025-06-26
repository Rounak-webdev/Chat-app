import {create} from "zustand";
import {axiosInstance} from "../lib/axios.js";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggedaIng: false,
    isUpdateingProfile: false,

    isCheckingAuth: true,


    checkAuth: async() => {
        try{
            const res = await axiosInstance.get("auth/check");

            set({ authUser: res.data });
        }catch(error){
            console.error("Error in checkAuth:", error);
            set({ authUser : null });
        }finally{
                set({ isCheckingAuth: false});
            }

        
    }

}));

