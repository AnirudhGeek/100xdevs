// npm install react@18 react-dom@18
import {atom} from "recoil"

export const counterAtom = atom({
    default : 0,
    key : "counter"
})