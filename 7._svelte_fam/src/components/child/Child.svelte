<script>
    import Parent from "../parent/Parent.svelte";

    export let child;
    export let onTellILoveYou;
    export let onAlwaysSayHi;
    export let parentName;

    import {fridgeMessageStore} from "../../store/fridgeBulletinStore";
    let fridgeMessage ="";

    function handleWriteMessage() {
        fridgeMessageStore.update((currentMessage) => {
            return currentMessage + `${fridgeMessage}`; 
        });
    }

</script>


<!--Vi asigner class bright-kid til de elementer som er truthie-->
<div class:bright-kid={child.brightKid}>
<p>{child.name}</p>

<input placeholder="Write a message" bind:value={fridgeMessage}>
<button on:click={handleWriteMessage}>Write a message</button>
<br><br>


<button on:click={onAlwaysSayHi}>Greet</button>
<button on:click={onTellILoveYou(`I love you, ${parentName}`)}>Whisper in parent's ear</button>

</div>

<!-- too add a message
<button on:click={onTellILoveYou("I LOVE U")}>Whisper in parent's ear</button>
-->

<style>
    .bright-kid{
        border: solid 2px yellow;
    }

    .ultra-blacksheep{
        background-color: black;
    }

    .medium-blacksheep{
        background-color: grey;
    }

    .not-a-black-sheep{
        
    }
</style>