//readable (Opretter en store som ikke kan ændres). Kun ændring et sted
//writeable (Vi må opdatere )
import { writable } from "svelte/store"

export let fridgeMessageStore = writable("Write message..");