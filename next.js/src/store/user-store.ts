import { create } from "zustand";

export interface UserType {
  thumbnail: string;
  name: string;
}

type UserStore = {
  userInfo: UserType;
  setUserInfo: (userInfo: UserType) => void;
};

const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    name: "test",
    thumbnail: "test",
  },
  setUserInfo: (userInfo) => set({ userInfo }),
}));

export default useUserStore;
