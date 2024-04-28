<script>
    import lawyericon from "../lib/images/ps.jpg"
    import phoneicon from "../lib/images/phone.jpeg"
    import serviceDescs from "../lib/statics/service.json"
    console.log(serviceDescs)
</script>

<div class="h-full">
    <div class="mx-14 flex w-full h-1/6 items-center title">
        <p class="ml-4 w-16 text-5xl font-bold font-sedan point">III.</p>
        <p class="ml-4 text-4xl font-black font-noto">服務項目</p>
    </div>
    <div class="grid grid-cols-4 h-5/6 py-2 px-36">
        {#each serviceDescs as service}
            <div class="border rounded-xl m-2 p-4 shadow-md card">
                <h1 class="font-bold underline underline-offset-4">{service["title"]}</h1>
                <p class="mt-2 text-sm">{service["desc"]}</p>
            </div>
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
        background-color: rgba(155, 199, 223, 0.3);
    }

    .card h1 {
        color: #487B9E;
    }

</style>