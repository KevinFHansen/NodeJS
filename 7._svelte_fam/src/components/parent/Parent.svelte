<script>
    export let name;
    export let children;
    import Child from "../child/Child.svelte"
    import Pet from "../Pet/Pet.svelte";
    import {fridgeMessageStore} from "../../store/fridgeBulletinStore";

    function handleTellILoveYou(message){
        console.log(message);
    }

    function handleAlwaysSayHi(){
        console.log("Hi")
    }

    function handleEraseFridgeBuletin(){
        fridgeMessageStore.set("Write your message...")
        console.log("HANDLE ERASE")
    }
    
</script>
<div>
<h1>Hi im {name}</h1>
<p on:click={handleEraseFridgeBuletin} on:keydown={()=>{}}>Erase </p>
</div>

{#each children as child}
    <!--Get name-->
    <p>{child.name}</p>
    <!--Get full object-->
    <p>{JSON.stringify(child)}</p>

    <!--Vi parser en funktion til child, som child kan vælge at benytte -->
    <Child child={child} onTellILoveYou={handleTellILoveYou} onAlwaysSayHi={handleAlwaysSayHi} parentName={name}/>
    
{/each}