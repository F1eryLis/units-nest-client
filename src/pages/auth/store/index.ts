import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserDef {
    id: number;
    email: string;
    fullName: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthStateDef {
    user: UserDef | null;
    setUser: (data: UserDef) => void;
    removeUser: () => void;
}

export const useAuthState = create(
    persist<AuthStateDef>(
        (set, get) => ({
            user: null,
            setUser: (user: UserDef) => {
                set({ user: user });
            },
            removeUser: () => {
                set({ user: null });
            },
        }),
        {
            name: 'user',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);