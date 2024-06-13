<script lang="ts">

    export let srcset = "";
    export let src = "";
    export let alt = "";
    export let type = "";
    export let load = "lazy"
</script>

<picture>
    <source srcset={srcset} {type} loading="{load}"/>
    <img {src} {alt} />
</picture>