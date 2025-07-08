// npm install react@18 react-dom@18
import {atom} from "recoil"

export const counter = atom({
    default : 0,
    key : "counter"
})