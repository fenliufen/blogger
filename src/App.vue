<template>

    <div id="app">

        <div id="nav">
            <navigation class="vav1"></navigation>
            <vavigation_yd class="vav2"></vavigation_yd>
        </div>

        <div class="demo1">

            <router-view></router-view>

            <div id="gotop" class="top">
                <img id="img" src="./assets/imgs/Top.jpg" />
            </div>
        </div>
        <yqts>
		</yqts>
    </div>

</template>


<script>
    import navigation from "./components/navigation";
    import vavigation_yd from "./components/vavigation_yd";
    import yqts from "./components/yqts";



    export default {

        name: "App",
        components: {
            navigation,
            yqts,
            vavigation_yd

        },

        data(){
            return{
                width:""

            }
        },

        mounted() {


        }


    }

</script>



<style>

    body {
        margin: 0;
        width: 100%;
        height: 100%;
    }

    ul,p{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    body a {
        text-decoration: none;
        outline: none;
    }

    input {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
    }

    button{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
    }

    #app{
        width: 100%;
        height: 100%;
        margin: 0;
    }

    #app:before {
        content: ' ';
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url("assets/imgs/1.jpg");
        background-size: cover;
        background-position: center;
    }



    @font-face {
        font-family: 'iconfont';
        src: url('./download/font/iconfont.eot');
        src: url('./download/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('./download/font/iconfont.woff2') format('woff2'),
        url('./download/font/iconfont.woff') format('woff'),
        url('./download/font/iconfont.ttf') format('truetype'),
        url('./download/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .top {
        position: fixed;
        right: 50px;
        bottom: 100px;
        z-index: 11;
    }

    .top:hover {
        cursor: pointer
    }

    a:hover {
        cursor: pointer
    }


    @media screen and (max-width: 800px) {
        .vav1{
            display: none;
        }
        .vav2{
            display: block;
        }

    }


    @media screen and (min-width: 800px) {

        .vav2{
            display:none;
        }
        .vav1{
            display: block;
        }

    }






</style>
