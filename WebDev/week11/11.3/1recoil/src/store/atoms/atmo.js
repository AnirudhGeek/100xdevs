import {atom} from "recoil"

export const networkAtom=  atom({
    key : "networkAtom",
    default : 102
})

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
})

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 5
})

export const notificationAtom = atom({
    key : "notficationAtom",
    default : 125
})