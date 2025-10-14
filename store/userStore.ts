import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () => {
        set((state) => ({
          ...state,
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        }));
      },
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
