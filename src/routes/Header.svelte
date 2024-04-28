<script>
    import { browser } from '$app/environment';
    import logo from "../lib/images/SH.png"
    function scrollToHome(){
        if (browser) {
            // @ts-ignore
            document.getElementById('home').scrollIntoView({
                behavior: "smooth",
                block: "end",
            })
        };
    } 
    function scrollToAbout() {
        if (browser) {
            // @ts-ignore
            document.getElementById('about').scrollIntoView({
                behavior: "smooth",
                block: "end",
            })
        };
    }
    function scrollToService() {
        if (browser) {
            // @ts-ignore
            document.getElementById('service').scrollIntoView({
                behavior: "smooth",
                block: "end",
            })
        };
    }
    function scrollToContact() {
        if (browser) {
            // @ts-ignore
            document.getElementById('contact').scrollIntoView({
                behavior: "smooth",
                block: "end",
            })
        };
    }
</script>

<div class="flex h-full font-noto">
    <div class="flex h-full w-1/4 items-center">
        <img class="ml-20 h-2/5" src={logo} alt="logo"/>
        <div class="grid grid-cols-1 ml-4 items-center">
            <div class="flex w-full text-xl text-center" >
                <p class="flex-1">沈</p>
                <p class="flex-1">柏</p>
                <p class="flex-1">亘</p>
                <p class="flex-1">律</p>
                <p class="">師</p>

            </div>
            <p class="font-mono en_name" >SHEN ATTORNEY-AT-LAW</p>
        </div>
    </div>
    <div class="ml-12 w-6/12 h-full">
        <div class="grid grid-cols-1 h-full">
            <div class="flex text-sm items-center font-semibold menu">
                <button class="flex-1 btn" on:click={scrollToHome}>關於我們</button>
                <button class="flex-1 btn" on:click={scrollToAbout}>律師介紹</button>
                <button class="flex-1 btn" on:click={scrollToService}>服務項目</button>
                <button class="flex-1 btn">經驗分享</button>
                <button class="flex-1 btn">法普文章</button>
                <button class="flex-1 btn">最新消息</button>
                <button class="flex-1 btn" on:click={scrollToContact}>問題諮詢</button>
            </div>
        </div>
    </div>
</div>

<style>
    .menu {
        color: #86BBD8;
    }

    .en_name {
        font-size: 10px;
    }

    .btn {
        background: transparent;
        border: none;
        display: block;
        outline: none;
        position: relative;
        transition: 0.3s;
        padding: 10px;
    }

    .btn::before {
        content: '';
        border-bottom: 2px solid #487B9E;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 0;
        transition: 0.3s;
    }

    .btn:hover::before {
        width: 70%;
        padding: 0;
    }

    .btn:hover {
        color: #487B9E;
    }

</style>