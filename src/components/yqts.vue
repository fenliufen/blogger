<template>
    <div class="yqts">
        <div class="dsi">
            <div class="list1">
                <a><div class="iconfont">&#xe681;</div></a>
                <a><div class="iconfont">&#xe685;</div></a>
                <a><div class="iconfont">&#xe601;</div></a>
                <a href="https://github.com/fenliufen?tab=repositories"><div class="iconfont">&#xe732;</div></a>
            </div>
            <p>Copyright © 2019 - 赣ICP备9678122号, All Rights Reserved Powered By 从小就疯了 1.0.0</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "yqts"
    }
</script>

<style scoped>


    .yqts {
        display: block;
        width: 100%;
        min-height: 100px;
        background: #212220;
        color: #919290;
        font-size: 14px;
        padding: 20px 0 0 0;
        position: relative;
        clear: both;
        line-height: 20px;
        margin-top: 40px;
        overflow: hidden;
        zoom: 1;

    }



    .dsi {
        position: relative;
        max-width: 1280px;
        min-height: 100px;
        margin: auto;
        background: #212220;
        text-align: center;
    }

    .list1 {
        display: flex;
        background-color: #212220;
        justify-content: center;
        width: 250px;
        height: 50px;
        margin: 0 auto;
    }

    .dsi .list1 div {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 10px;
        font-size: 30px;
        text-align: center;
        line-height: 30px;
        color: #565755;
    }

    .dsi .list1 div a{
        width: 100%;
        height: 100%;
        font-size: 30px;
        text-align: center;
        line-height: 30px;
        color: #565755;
    }

    .dsi p {
        display: block;
        color: #565755;
    }

</style>