<script>
	import AppButton from "$lib/components/AppButton.svelte";
	import { count } from "../../stores/store.counter";
    import { increment, decrement, reset } from "../../utilities/utility.counter";

    let countVal;
    
    count.subscribe((value) => {
        countVal = value;
    }); 

</script>


<div class="flex gap-4">
    <AppButton
		on:click={() => decrement()} 
        text="-"
		class="bg-transparent hover:bg-svOrange font-semibold hover:text-white py-2 px-4 border border-svOrange hover:border-transparent rounded transition-all">
	</AppButton>

    <p class="text-3xl min-w-10 text-svOrange text-center flex items-center justify-center">{countVal}</p>

    <AppButton
		on:click={() => increment()} 
        text="+"
		class="bg-transparent hover:bg-svOrange font-semibold hover:text-white py-2 px-4 border border-svOrange hover:border-transparent rounded transition-all">
	</AppButton>
</div>


<AppButton
    on:click={() => reset()} 
    text="Reset"
    class="bg-svOrange  font-semibold text-white py-2 px-4 border border-svOrange hover:border-svOrange rounded transition-all min-w-40 mt-3">
</AppButton>

