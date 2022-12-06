import create from "zustand";
import { persist, devtools, StateStorage } from "zustand/middleware";
import TempStorage from "./module/tempStorage";

export interface ITest {
    id: number;
    up: () => void;
    down: () => void;
    clearTest: () => void;
}

export const useTestStore = create<ITest>()(
    devtools(
        persist(
            (set, get) => ({
                id: 0,
                up: async () => {
                    set({
                        id: get().id + 1
                    })
                },
                down() {
                    set({
                        id: get().id - 1
                    })
                },
                clearTest: () => {
                    set({
                        id: 0,
                    });
                },
            }), 
            {
            name: "test",
            getStorage: () => TempStorage
        }
        )
    )
);

