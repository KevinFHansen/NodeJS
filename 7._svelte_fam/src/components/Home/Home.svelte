<script>
    import {fridgeMessageStore} from "../../store/fridgeBulletinStore";
    console.log(fridgeMessageStore)


</script>

<h3>Family Home</h3>

<h4>Fridge Bulletin</h4>
<p>{$fridgeMessageStore}</p>


<slot></slot>;