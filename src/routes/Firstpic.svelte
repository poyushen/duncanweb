<script>
    import firstpic from "../lib/images/office2.png"
    import firstpicSmall from "../lib/images/firstpicSmall.png"
    $: outerWidth = 0
</script>

<svelte:window bind:outerWidth />
        
{#if outerWidth > 768}
    <img class="h-full" src={firstpic} alt="firstpic"/>
{:else}
    <img class="h-full" src={firstpic} alt="firstpic"/>
{/if}
