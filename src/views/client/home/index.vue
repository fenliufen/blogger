<template>
    <div class="demo1">
        <div class="zhanshi">
            <div class="tixi" v-if=" filtrate=='' ">暂无数据！</div>
            <ul class="list">
                <li v-for="itme in filtrate" :key="itme">
                    <div class="content-1">

                        <h5 class="list-title">
                            <span>【{{itme.creation}}】</span>
                            <a :href="itme.path" :target="itme.creation=='转载'?'creation':''">{{itme.title}}</a>
                        </h5>

                        <div class="tome">
                            <span class="ri">{{itme.time.slice(8,10)}}</span>
                            <span class="yue">{{itme.time.slice(5,7)}}</span>
                            <span class="nian">{{itme.time.slice(0,4)}}</span>
                        </div>

                        <div class="content">
                            <a :href="itme.path" :target="itme.creation=='转载'?'creation':''">
                                <img :src="itme.img_path">
                            </a>
                            <span>
                            {{itme.content}}
                        </span>
                        </div>

                        <div class="read-more">
                            <div></div>
                            <a :href="itme.path" :target="itme.creation=='转载'?'creation':''">立即阅读</a>
                        </div>
                        <div class="yeqian">
                            <a class="iconfont1"><i class="iconfont">&#xe639;</i>{{itme.classify}}</a>
                            <a class="iconfont1"><i class="iconfont"></i></a>
                        </div>
                    </div>
                </li>
            </ul>


            <!--        右侧导航栏-->

            <div class="daohanglan">

                <div class="doahang1">

                    <div class="doahang-tlter">

                        <label>
                            <input type="text" placeholder="请输入搜索关键字" v-model="shou" @keyup.13="guolu">
                            <span class="iconfont" v-on:click=" guolu">&#xe600;</span>
                        </label>
                        <ul>

                        </ul>
                    </div>


                    <ul class="daohang-list">
                        <li v-for="(itme,index) in navigation " :key="(itme,index)" @click="screening(index)" :class="{'test':i===index}">
                            <a>{{itme}}</a>
                        </li>
                    </ul>



                    <div class="daohang2">
                        <h5>热门文章</h5>
                        <div>
                            <ul>
                                <li v-for="(itme,index) in hot" :key="(itme,ndex)">
                                    <a :href="itme.path" :target="itme.creation=='转载'?'creation':''"><span>{{index+1}}. </span>{{itme.title}}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>




</template>

<script>
    import axios from 'axios'
    export default {
        name: "index",
        created() {
            var that=this;
            axios.get('/home/article')
                .then(function (res) {
                    that.mydata=res.data;
                    that.filtrate=that.mydata

                })
                .catch(function (err) {
                    console.log(err)

                });


            axios.get('/home/article/hot')
                .then(function (res) {
                    that.hot=res.data;

                })
                .catch(function (err) {
                    console.log(err)

                })
        },

        methods:{
            guolu: function guolu() {
                var _this = this;

                // if (this.shou == '') {
                //     alert('请输入查询内容');
                // }

                this.filtrate = this.mydata.filter(function(item) {
                    return item.title.includes((_this.shou).trim()) || item.classify.includes((_this.shou).trim());
                });

                // this.shou = '';
            },

            screening:function screening(index){
                var arr=[];
                this.i=index;

                if(index==0){
                    return this.filtrate = this.mydata;
                }

                if (index==1){

                    this.mydata.forEach(function(itme) {
                        if (itme.classify === '网站测试') {
                            arr.push(itme);
                        }
                    });
                    return this.filtrate = arr;
                }

                if (index==2){
                    this.mydata.forEach(function(itme) {
                        if (itme.classify === '网站开发') {
                            arr.push(itme);
                        }
                    });
                    return this.filtrate = arr;

                }

                if (index==3){
                    this.mydata.forEach(function(itme) {
                        if (itme.classify === '操作系统') {
                            arr.push(itme);
                        }
                    });
                    return this.filtrate = arr;

                }

                if (index==4){
                    this.mydata.forEach(function(itme) {
                        if (itme.classify === '深度学习') {
                            arr.push(itme);
                        }
                    });
                    return this.filtrate = arr;
                }
                if (index==5){
                    this.mydata.forEach(function(itme) {
                        if (itme.classify === '程序算法') {
                            arr.push(itme);
                        }
                    });
                    return this.filtrate = arr;

                }

                if (index==6){
                    this.mydata.forEach(function(itme) {
                        if (itme.classify === '其他') {
                            arr.push(itme);
                        }
                    });
                    return this.filtrate = arr;

                }
            },

        },

        mounted(){
            var zhanshi = document.querySelector('.zhanshi');
            var doahang = document.querySelector('.daohanglan');

            function monitoring() {
                var width = window.innerWidth;
                if (width < 1300) {
                    doahang.style.display = 'none';
                    zhanshi.style.margin = 'auto';


                } else if (width >= 1300) {
                    doahang.style.display = 'block';
                    zhanshi.style.margin = '0'
                }

            }

            monitoring();
            window.onresize = function() {
                monitoring()
            }


        },

        data(){
            return{
                mydata:[],
                hot:[],
                shou:'',
                filtrate:[],
                navigation:[
                    '全部文章','网站测试','网站开发','操作系统','深度学习','程序算法','其他'
                ],
                i:'',


            }
        }

    }
</script>

<style scoped>

    .demo1{
        position: relative;
        max-width: 1290px;
        margin-left: auto;
        margin-right: auto;
        background: rgba(255, 255, 255, 0);
        overflow: auto;
        overflow-x: hidden;
        overflow-y: hidden;
        /*火狐去掉滚动条*/
        scrollbar-width: none;
        padding-top:90px ;



    }

    /*内容展示css样式*/
    .zhanshi {
        max-width: 960px;
        min-height: 800px;

    }

    .zhanshi .tisi {
        font-size: 25px;
        font-weight: bold;
        color: green;
        text-align: center;
    }

    .zhanshi .list {
        display: flex;
        justify-content: flex-end;
        flex-direction: column-reverse;
        align-items: center;
        max-width: 960px;
        height: 100%;
    }

    .zhanshi .list li {
        position: relative;
        margin-bottom: 20px;
        max-width: 960px;
        background-color: #fff;
        animation-duration: 3s;
        animation-name: donghua;
        border-radius: 3px;
    }



    .list li .content-1 .list-title {
        line-height: 30px;
        padding: 5px 130px 5px 0;
        border-bottom: 1px solid #e8e9e7;
        font-size: 18px;
        font-weight: 400;
    }

    .content-1 {
        padding-left: 30px;
    }

    .list li .content-1 .list-title span {
        font-size: 16px;
        font-weight: 400;
        display: inline-block;
        vertical-align: bottom;
        color: #2ea7e0;
    }

    .list li .content-1 .list-title a {
        color: #212220;
        text-decoration: none;
        outline: none;
    }


    .list li .content-1 .tome {
        font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
        position: absolute;
        right: 0px;
        top: 10px;
        background-color: #fff;
        padding: 0 20px 5px 20px;
        line-height: 32px;
    }

    .list li .content-1 .tome .ri {
        display: block;
        text-align: center;
        font-weight: 700;
        color: #6bc30d;
        font-size: 40px;
        position: relative;
        top: 2px;
    }

    .list li .content-1 .tome .yue {
        color: #989997;
        font-size: 18px;
        padding-right: 10px;
    }

    .list li .content-1 .tome .nian {
        color: #989997;
        font-size: 18px;
    }

    .list li .content-1 .content {
        margin: 20px 0 0 0;
        line-height: 28px;
        position: relative;
        min-height: 200px;
        font-size: 14px;
        color: #515250;
        text-align: justify;
        padding-right: 10px;
    }

    .list li .content-1 .content a {
        display: block;
        width: 300px;
        height: 180px;
        border: 1px solid #e8e9e7;
        overflow: hidden;
        float: left;
        margin-right: 20px;
        color: #3e8bc7;
        text-decoration: none;
        outline: none;
    }

    .list li .content-1 .content a img {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }

    .list li .content-1 .read-more {
        height: 40px;
        line-height: 40px;
        position: relative;
    }

    .list li .content-1 .read-more div {
        display: inline-block;
        height: 1px;
        top: 20px;
        left: 100px;
        right: 0;
        position: absolute;
        background-color: #d0d0d0;
    }

    .list li .content-1 .read-more a {
        font-weight: bold;
        font-size: 14px;
        color: #383937;
        padding-left: 6px;
        text-decoration: none;
        outline: none;
    }

    .list li .content-1 .read-more a:hover {
        font-weight: bold;
        color: red;
    }


    /*页签*/

   .yeqian{
       padding-top: 10px;
       padding-bottom: 10px;
   }

   .iconfont1{
       color: #279c63;
       font-size: 12px;
   }



    .iconfont1  i{
        color: #279c63;
        font-size: 12px;
        padding-right:6px;
    }



    /*导航栏样式*/



    .daohanglan {
        position: absolute;
        right: 0;
        top: 90px;
        width: 300px;
        float: right;
    }

    .doahang1 {
        width: 300px;
        height: 405px;
        background-color: #fff;
        border-radius: 3px;

    }

    @media all and (max-height:1200px) {
        .doahang1 {
            position: fixed;
        }
    }

    .doahang-tlter {
        position: relative;
        width: 300px;
        height: 85px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background-color: grey;
    }

    .doahang-tlter ul {
        width: 209px;
        z-index: 100;
        position: absolute;
        left: 44px;
        top: 65px;
        background: aliceblue;
    }

    .doahang-tlter label {
        position: absolute;
        display: block;
        height: 40px;
        padding: 0 20px;
        background-color: #fff;
        border-radius: 40px;
        left: 40px;
        top: 20px;
        z-index: 5;
    }

    .doahang-tlter label input {
        border: none;
        height: 40px;
        line-height: 40px;
        width: 100%;
        box-shadow: none;
        background-color: transparent;
        outline: none;
    }

    .doahang-tlter label span {
        font-size: 18px;
        position: absolute;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        right: 5px;
        top: 5px;
        color: #787977;
        -webkit-transition: all .3s;
        transition: all .3s;
        cursor: pointer;
    }

    .daohang-list {
        position: absolute;
        width: 300px;
        height: 300px;
        background-color: #fff;
        opacity: 0.9;
    }

    .daohang-list li {
        display: block;
        height: 40px;
        line-height: 40px;
        position: relative;
        z-index: 1;
    }

    .daohang-list li a {
        display: block;
        margin: 0 30px;
        padding: 0 20px;
        height: 39px;
        border-bottom: 1px solid #f8f9f7;
        transition: none;
        text-decoration: none;
        color: #787977;
        font-size: 14px;
        outline: none;

    }

    .test{
        border-left: 5px solid blue;
    }

    .daohang-list li a:hover {
        font-weight: bold;
        color: green;
    }

    .daohang2 {
        position: relative;
        width: 300px;
        background-color: #fff;
        top: 330px;
        border-radius: 3px;
    }

    .daohang2 h5 {
        margin: 10px 20px;
        padding: 5px;
        line-height: 30px;
        font-weight: 400;
        border-bottom: 1px solid #e8e9e7;
        color: #383937;
        position: relative;
        font-size: 18px;
    }

    .daohang2 div {
        margin: 0 20px;
        padding-bottom: 10px;
    }

    .daohang2 div ul {
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .daohang2 div ul li {
        height: 40px;
        width: 352px;
        line-height: 32px;
        position: relative;
        margin: 3px 0;
        overflow: hidden;
        word-wrap: normal !important;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #787977;
        font-size: 14px;
    }

    .daohang2 div ul li a {
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #f8f9f7;
        color: #787977;
        font-size: 14px;
        text-decoration: none;
        outline: none;
    }

    .daohang2 div ul li :hover {
        font-weight: bold;
        color: green;
    }

    .tixi{
        width: 100%;
        color: green;
        font-size: 30px;
        text-align: center;
        font-weight:bold ;
    }

</style>