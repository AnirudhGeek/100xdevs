import {atom, selector} from "recoil"

export const currentAtom = atom({
  key: "currentCounter",
  default: 0,
});

export const evenSelector = selector({
  key: "isEvenSelector",
  get: function ({ get }) {
    const currentCount = get(currentAtom);
    const isEven = currentCount % 2 === 0;
    return isEven;
  },
});
