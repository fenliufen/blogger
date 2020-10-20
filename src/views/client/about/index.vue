<template>
    <div class="about_01">


        <div class="content">


            <div class="head-img">
                <div class="div_img">
                    <img src="../../../assets/liuyan-web.jpg" width="100%" height="100%">
               </div>
            </div>



            <div class="liuyan_01">

                    <div class="test_01">
                        <input type="text" placeholder="昵称(必填)"  v-model="name">
                        <input type="text" placeholder="邮箱(必填)"  v-model="mailbox">
                        <input type="text" placeholder="网址(选填)"  v-model="weburl">
                    </div>

                    <div class="test_show">
                        <textarea class="test_02" placeholder="写点什么..."  v-model="content"></textarea>
                        <button class="but" v-on:click="add">提交</button>
                    </div>

            </div>



            <div class="comment-list">
                <h3>
                    <i class="iconfont">&#xe619;</i>
                    已经有{{mydata.length}}个小伙伴参与留言
                </h3>
                <ul class="list_show">
                    <li v-for="(itme,index) in mydata" :key="(itme,index)">
                        <p>
                            <a class="username">
                                <i class="iconfont">&#xe689;</i>
                                {{itme.name}}
                            </a>
                            <span class="time">{{itme.time}}</span>
                        </p>

                        <div class="content-show">
                            <span>{{itme.content}}</span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>


        <div class="about_02">
            <div class="about_03">
                <img src="../../../assets/imgs/6.jpg">
                <h1>从小就疯了</h1>
                <div class="lx">

                    <span>邮箱</span>
                    <p>1607187254@qq.com</p>
                    <span>博客</span>
                    <p>http://112.74.38.68:8080/</p>

                </div>
                <div class="desc">
                    <p>一个90后青年站长！测试工程师、Web前端工程师。</p>
                    <p>欢迎您，来到我的个人博客，你，我生命中一个重要的过客，我们之所以是过客，因为你未曾会为我停留。</p>
                    <p>我不太知道这个博客最终会变成什么样。我只是想找一个地方，记录自己学习的痕迹。分享心得
                        希望这个博客越写越好~
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    export default {
        name: "index",

        created() {
            var tath=this;
            axios.get('/message/liuyan')
            .then(function (res) {
                tath.mydata=res.data.content;

            })
            .catch(function (err) {
                console.log(err)

            })

        },
        methods:{

            //添加函数
            add:function () {
                var t  = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
                var that=this;

                if (that.name==''||that.mailbox==''||that.content==''){
                   return  alert('昵称，邮箱，留言不能为空')
                }


                if (!t.test(that.mailbox)){
                    return alert('邮箱格式不正确')
                }


                axios.post('/message/liuyan',
                    qs.stringify({
                        'name': that.name,
                        'mailbox': that.mailbox,
                        'weburl': that.weburl,
                        'content': that.content
                    })

                )
                    .then(function (res) {
                        that.mydata=res.data.content

                    })
                    .catch(function (err) {
                        console.log(err)

                    });


                this.content='';


            }



        },
        data(){
            return{
                mydata:[],
                name:'',
                mailbox:'',
                weburl:'',
                content:'',
            }
        },

        //操作dom元素放置处
        mounted(){
            var zhanshi = document.querySelector('.content');
            var doahang = document.querySelector('.about_02');

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


        //放置计算逻辑的地方
        computed:{

        }
    }
</script>

<style scoped>

    .about_01{
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

    .content{
        max-width: 960px;
        min-height: 800px;
    }

    .content .head-img{
        position: relative;
        max-width: 960px;
        height: 284px;
        border: 1px dashed #ccc;
        background: #fff;
    }

    .div_img{
        margin: 20px auto;
        max-width: 900px;
        height: 240px;


    }




    /*输入框区*/

    .liuyan_01{
        max-width: 960px;
        min-height: 300px;
        border: 1px dashed #ccc;
        margin-top:30px ;
        background: #fff;


    }

    .liuyan_01 .test_01{
        display: flex;
        margin:20px auto;
        max-width: 730px;

    }

    .liuyan_01 .test_01 input{
        display:block;
        border: 1px solid rgba(0,0,0, .1);
        width: 34%;
        min-height: 40px;
        margin-left: 10px;
        text-indent: 1em;
        font-size: 15px;
        margin-right: 2px;

    }

    .liuyan_01 .test_01 input:focus{
        border: 1px solid red;

    }



    .test_show{
        max-width: 730px;
        margin: 0 auto;
        padding-right: 20px;
    }



    .test_02{
        width: 100%;
        min-height: 80px;
        text-indent: 1em;
        outline:none;
        resize:none;
        border: 1px solid rgba(0,0,0, .1);
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        padding-top: 50px;
        margin-left: 8px;

    }

    .test_02:focus{
        border: 1px solid red;
    }


    .but{
        display: block;
        width: 100px;
        height: 40px;
        background-color: #1e9fff;
        color: #fff;
        border-radius: 2px;
        text-transform: none;
        margin-top: 20px;
        float: right;
    }




    /*留言区内容区*/
    .comment-list{
        margin-top: 30px;
        max-width: 960px;
        background: #fff;
        border: 1px dashed #ccc;
        word-wrap:break-word;
        word-break:break-all;
    }

    .comment-list h3{
        font-size: 15px;
        border-bottom: 1px solid #eee;
        padding: 10px 0;
        color: #666;
        text-indent: 1em;
    }

    .comment-list h3 i{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2ea7e0;

    }

    .comment-list ul li{
        border-bottom: 1px dashed #ddd;
        padding: 20px 0;
    }

    .comment-list ul li p{
        text-indent: 1em;
        word-wrap:break-word;
        word-break:break-all;
    }

    .list_show li p a{
        font-size: 15px;
        color: #1e9fff;

    }

    .list_show li p a i{
        font-family: "iconfont" !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .list_show li p .time{
        color: #a9a9a9;
        font-size: 12px;
        margin-left: 10px;
    }

    .content-show{
        background-color: #f9f9f9;
        color: #555;
        margin-top: 5px;
        padding: 15px;
        text-indent: 1em;
    }

    /*关于我内容区*/

    .about_02{
        position: absolute;
        right: 0;
        top: 90px;
        max-width: 300px;
        float: right;
        background-color: #fff;
        border-radius: 3px;

    }

    .about_03 img{
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 20px auto;
    }

    .about_03 h1{
        font-size: 18px;
        text-align: center;
        margin-top: 15px;
        color: #1e9fff;
    }

    .about_03 .lx{
        padding: 10px 0;
        font-size:14px ;

    }
    .about_03 .lx span{
        color: #a9a9a9;
        display: inline-block;
        margin-top: 10px;
        text-indent: 1em;
    }

    .about_03 .lx p{
        color: #696969;
        font-weight: bold;
        text-indent: 1em;
    }

    .desc{
        border-top: 1px dashed #e6e6e6;
        padding: 20px 0;
        color: #a9a9a9;
        padding-left: 6px;
        padding-right: 6px;
        font-size: 14px;
    }

    .desc p{
        text-indent: 1em;
        padding-top:10px ;
    }



</style>