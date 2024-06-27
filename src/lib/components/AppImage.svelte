<script lang="ts">
    export let src = "";
    export let alt = "";
    export let style = "";
    let cssClass;
    export { cssClass as class };
</script>

<img src={src} alt="{alt}" style="{style}" class={cssClass}/>