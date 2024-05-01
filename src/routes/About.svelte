<script>
    import lawyericon from "../lib/images/ps.jpg"
    import gavelIcon from "../lib/images/gavel.png"
    
    $: outerWidth = 0
</script>

<svelte:window bind:outerWidth />
<div class="h-full">
    <div class="flex w-full h-1/6 items-center title">
        <!-- <p class="ml-4 w-16 text-4xl md:text-5xl font-bold font-sedan point">II.</p> -->
        <img class="ml-4 w-12" alt="gavel" src={gavelIcon}>
        <p class="ml-4 text-3xl md:text-4xl font-black font-noto"> 主持律師</p>
    </div>
    <div class="w-full h-5/6 info text-base font-noto">
        <div class="lg:flex items-center h-full">
            <img class="pl-4 lg:pl-20 w-5/6 md:w-4/6 lg:w-2/6 pt-8 lg:pt-0" src={lawyericon} alt="lawyer"/>
            <div class="w-full pl-4 lg:pl-36">
                <p class="text-2xl mt-4 font-bold">沈柏亘律師</p>
                {#if outerWidth > 1024}
                    <p class="mt-6 underline underline-offset-4 font-bold degree">學歷</p>
                    <p class="mt-2 desc text-sm md:text-base">國立政治大學法律系學士&emsp;&emsp;&emsp;&emsp;&emsp;L.L.B. National Chengchi University</p>
                    <p class="mt-3 desc text-sm md:text-base">國立政治大學法律學系研究所碩士&emsp;L.L.M. National Chengchi University</p>
                    <p class="mt-6 underline underline-offset-4 font-bold degree">國家考試與專業證照</p>
                    <p class="mt-2 desc text-sm md:text-base">高等考試律師&ensp;(110臺檢證字第16342號)</p>
                    <p class="mt-3 desc text-sm md:text-base">司法人員考試法院書記官及格&ensp;(分發法務部行政執行署)</p>
                    <p class="mt-3 desc text-sm md:text-base">勞動部工作場所性騷擾調查專業人&ensp;(勞動條5字第1130147759-016號)</p>
                {:else}
                    <p class="mt-6 underline underline-offset-4 font-bold degree">學歷</p>
                    <p class="mt-2 desc text-sm md:text-base">國立政治大學法律系學士<br>L.L.B. National Chengchi University</p>
                    <p class="mt-3 desc text-sm md:text-base">國立政治大學法律學系研究所碩士<br>L.L.M. National Chengchi University</p>
                    <p class="mt-6 underline underline-offset-4 font-bold degree">國家考試與專業證照</p>
                    <p class="mt-2 desc text-sm md:text-base">高等考試律師<br>(110臺檢證字第16342號)</p>
                    <p class="mt-3 desc text-sm md:text-base">司法人員考試法院書記官及格<br>(分發法務部行政執行署)</p>
                    <p class="mt-3 desc text-sm md:text-base">勞動部工作場所性騷擾調查專業人<br>(勞動條5字第1130147759-016號)</p>
                {/if}
                <p class="mt-6 underline underline-offset-4 font-bold degree">經歷</p>
                <p class="mt-2 desc text-sm md:text-base">志遠法律事務所律師</p>
                <p class="mt-3 desc text-sm md:text-base">中央研究院研究助理</p>
                <p class="mt-3 desc text-sm md:text-base">台北市政府法律諮詢律師</p>
                <p class="mt-3 desc text-sm md:text-base">台北地方法院偵查中羈押審查程序義務辯護律師</p>
                <p class="mt-3 desc text-sm md:text-base">台電工會第九分會講師</p>
                <p class="mt-3 desc text-sm md:text-base">新北市智障者家長協會講師</p>
                <p class="mt-3 desc text-sm md:text-base">桃園市桃園區羅浮高中講師</p>
            </div>
        </div>
    </div>
</div>

<style>
    .point {
        color: #487B9E;
    }

    .title {
        padding-top: 5%;
        height: 15%;
        color: #20313C;
    }

    .info {
        height: 85%;
    }
    
    .degree {
        color: #487B9E;
    }
    
    .desc {
        line-height: 1.5;
        color: #20313C;
    }
    
    .info1 {
        height: 100%;
    }

</style>