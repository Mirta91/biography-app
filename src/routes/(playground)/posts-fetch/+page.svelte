<!-- <script lang="ts">
    import { onMount } from "svelte";

    const endpoint = "https://jsonplaceholder.typicode.com/posts";
    let posts = [];

    console.time();
    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
    }).catch(error => {
        console.log(error);
        return "something went wrong";
    });;
    console.timeEnd();

</script> -->

<!-- {#each posts as post}

{/each} -->