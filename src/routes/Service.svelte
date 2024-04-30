<script>
    import lawyericon from "../lib/images/ps.jpg"
    import phoneicon from "../lib/images/phone.jpeg"
    import serviceDescs from "../lib/statics/service.json"
    
    $: outerWidth = 0
</script>

<svelte:window bind:outerWidth />

<div class="h-full">
    <div class="flex w-full h-1/6 items-center title">
        <p class="ml-4 w-16 text-4xl lg:text-5xl font-bold font-sedan point">III.</p>
        <p class="ml-4 text-3xl lg:text-4xl font-black font-noto">服務項目</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 h-5/6 py-2 lg:py-10 lg:px-20">
        {#each serviceDescs as service, i}
            {#if outerWidth > 1024}
                <div class="border rounded-xl m-4 p-6 shadow-md {(i<4 && i%2==0) || (i>3 && i%2==1) ? 'card-contrast' : 'card'}">
                    <p class="font-bold underline underline-offset-4 card-title text-xl">{service["title"]}</p>
                    <p class="mt-4 lg:mt-8 lg:text-base">{service["desc"]}</p>
                </div>
            {:else}
                <div class="border rounded-xl m-2 p-6 shadow-md {(i%2==0) ? 'card-contrast' : 'card'}">
                    <p class="font-bold underline underline-offset-4 card-title text-base">{service["title"]}</p>
                    <p class="mt-4 lg:mt-8 text-sm">{service["desc"]}</p>
                </div>

            {/if}
        {/each}

    </div>
</div>

<style>
    .point {
        color: #487B9E;
    }

    .title {
        padding-top: 2%;
        height: 15%;
        color: #20313C;
    }

    .card {
        background-color: rgba(155, 199, 223, 0.2);
    }

    .card-contrast {
        background-color: rgba(155, 199, 223, 0.5);
    }

    .card-title {
        color: #487B9E;
    }

</style>