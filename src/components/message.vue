<template>
    <div class="mes_sage">
        <div class="liuyan_01">
            <div class="test_01">
                <input type="text" placeholder="昵称(必填)"  v-model="msgdata.name">
                <input type="text" placeholder="邮箱(必填)"  v-model="msgdata.mailbox">
                <input type="text" placeholder="网址(选填)"  v-model="msgdata.weburl">
            </div>

            <div class="test_show">
                <textarea class="test_02" placeholder="写点什么..."  v-model="msgdata.content"></textarea>
                <button class="but" v-on:click="add">提交</button>
            </div>

        </div>



        <div class="comment-list">
            <h3>
                <i class="iconfont">&#xe619;</i>
                已经有{{mydata.length}}小伙伴参与留言
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
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    export default {
        name: "index",
        created() {
            var thah=this;
            axios.post('/meswzpl/howliuyan',qs.stringify({
                'path':window.location.pathname
            })).then(function (res) {
                thah.mydata=res.data;
                // thah.msgdata.relevance = res.data[1].relevance



            }).catch(function (err) {
                console.log(err);
            });


            axios.post('/meswzpl/howliuyan/id',qs.stringify({
                'path':window.location.pathname
            })).then(function (res) {
                thah.msgdata.relevance = res.data[0].relevance



            }).catch(function (err) {
                console.log(err);
            });


        },

        methods:{

            //添加函数
            add:function () {
                var t  = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
                var that=this;

                if (that.msgdata.name==''||that.msgdata.mailbox==''||that.msgdata.content==''){
                    return  alert('昵称，邮箱，留言不能为空')
                }


                if (!t.test(that.msgdata.mailbox)){
                    return alert('邮箱格式不正确')
                }


                axios.post('/meswzpl/liuyan',
                    qs.stringify(that.msgdata)

                )
                    .then(function (res) {
                        that.mydata=res.data

                    })
                    .catch(function (err) {
                        console.log(err)

                    });


                this.msgdata.content='';


            },

        },


        data(){
            return{
                mydata:[],
                msgdata:{
                    name:'',
                    mailbox:'',
                    weburl:'',
                    content:'',
                    path:window.location.pathname,
                    relevance:'',
                },

            }


        },

        mounted() {

        },




        //放置计算逻辑的地方
        computed:{

        },


    }


</script>

<style scoped>

    .mes_sage{
        margin:auto;
        max-width: 100%;
        border-top: 1px solid #ccc;

    }

    .liuyan_01{
        max-width:960px;
        min-height: 300px;
        margin-top:50px;
        background: #fff;
        padding-right: 20px;



    }

    .liuyan_01 .test_01{
        display: flex;
        margin:20px auto;
        max-width: 730px;

    }

    .liuyan_01 .test_01 input{
        display:block;
        border: 1px solid #cccccc;
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
    }



    .test_02{
        width: 98%;
        min-height: 80px;
        text-indent: 1em;
        outline:none;
        resize:none;
        border: 1px solid #cccccc;
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
        max-width: 100%;
        background: #fff;
        word-wrap:break-word;
        word-break:break-all;
    }

    .comment-list h3{
        font-size: 15px;
        border-bottom: 1px solid #cccccc;
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


</style>