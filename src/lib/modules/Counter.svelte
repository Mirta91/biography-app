<script>
	import { count } from "../../stores/store.counter";
    import { increment, decrement, reset } from "../../utilities/utility.counter";

    let countVal;
    
    count.subscribe((value) => {
        countVal = value;
    }); 

</script>


<div class="flex gap-4">
    <button on:click={decrement} 
        class="bg-transparent hover:bg-svOrange font-semibold hover:text-white py-2 px-4 border border-svOrange hover:border-transparent rounded transition-all">
        -
    </button>
    <p class="text-3xl min-w-10 text-svOrange text-center flex items-center justify-center">{countVal}</p>
    <button 
        class="bg-transparent hover:bg-svOrange font-semibold hover:text-white py-2 px-4 border border-svOrange hover:border-transparent rounded transition-all"
        on:click={increment}>+</button>
</div>


<button
 on:click={reset}
 class="min-w-40 mt-3 bg-svOrange hover:bg-white hover:text-svOrange font-semibold text-white py-2 px-4 border border-svOrange hover:border-svOrange rounded transition-all">
    Reset
</button>

