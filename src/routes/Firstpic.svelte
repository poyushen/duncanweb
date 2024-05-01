<script>
    import firstpic from "../lib/images/office.png"
    $: outerWidth = 0
</script>

<svelte:window bind:outerWidth />
<img class="h-full" src={firstpic} alt="firstpic"/>
