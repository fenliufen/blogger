<template>
    <div class="demo1">
        <div class="zhanshi">
            <div class="title-01">
                <h6><i class="iconfont">&#xe639;</i>所有链接</h6>
            </div>


            <div class="list-demo">
                <ul>
                    <li v-for="itme in mydata" :key="itme">
                        <a :href="itme.path" target="view_window">{{itme.name}}</a>
                    </li>
                </ul>
            </div>



            <div class="yqts">
                <h6><i class="iconfont">&#xe657;</i>申请说明</h6>
                <div class="apply-tip">
                    <p>1、在您申请本站友情链接之前请先做好本站链接，谢谢！</p>
                    <p>2、本站对PR、权重无要求，但淘宝、色情、反动、病毒、擦边球、纯商业、违法中华人民共和国法律的网站暂不交换</p>
                    <p>3、优先考虑收录原创个人博客，日记，技术类和生活类博客</p>
                    <p>4、申请成功后请勿随意撤下链接，否则本站也会删除对应链接并加入黑名单</p>
                    <p>5、建站时间小于半年的新站就不要申请了，谢谢！</p>
                    <p class="ti_01">说明：我会经常对成功的链接进行访问，对于长时间打不开的站点，会暂时撤下，正常后恢复。</p>
                </div>
            </div>

            <div class="yqts">
                <h6><i class="iconfont">&#xe657;</i>站点信息</h6>
                <div class="apply-tip">
                    <p>更新频率：每周1-3篇原创文章</p>
                    <p>博客名称：疯子博客</p>
                    <p>github地址：https://github.com/fenliufen</p>
                    <p>博客服务器：阿里云ECS服务器 <a href="https://www.aliyun.com/?utm_content=se_1000301881" target="view_window">点击进入官网购买</a></p>
                    <p>博客介绍：文章分享，技术分享</p>
                </div>
            </div>

            <div class="youlian">
                <h6><i class="iconfont">&#xe657;</i>申请友链</h6>

                <div class="apply-tip">

                    <input type="text" placeholder="站点名称(必填)" v-model="formdata.name">

                    <input type="text" placeholder="个人邮箱(必填)" v-model="formdata.mailbox">

                    <input type="text" placeholder="网站地址(必填)" v-model="formdata.path">

                    <div class="list_show">
                        <textarea class="test_02" placeholder="网站描述(必填)" v-model="formdata.miaosu" >
                        </textarea>
                    </div>

                    <button class="but" @click="add">点击提交申请</button>
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
            var that=this;
            that.$axios.get('/friendship/double')
           .then(function (res) {
               that.mydata=res.data.content;
           })
            .catch(function (err) {
                console.log(err)
            })

        },
        data(){
            return{
                mydata:[],
                formdata:{
                    name:'',
                    mailbox:'',
                    path:'',
                    miaosu:'',
                },
                ispan:false
            }
        },
        methods:{

            add:function () {
                var that=this;

                var t  = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
                if (that.formdata.name==''|| that.formdata.mailbox=='' || that.formdata.path=='' || that.miaosu==''){
                    return alert('名称，地址，邮箱，描述为必填项')
                }

                if (!t.test(that.formdata.mailbox)){
                    return alert('邮箱格式不正确')
                }


                that.$axios.post('/friendship/increased/pz',qs.stringify(that.formdata))
                .then(function (res) {
                    that.mydata=res.data.content;

                })
                .catch(function (err) {
                    console.log(err)

                });

                that.formdata.name='';
                that.formdata.path='';
                that.formdata.mailbox='';
                that.formdata.miaosu='';
                return alert('提交成功')

            }


        }
    }
</script>

<style scoped>

    .demo1{
        position: relative;
        max-width: 1280px;
        left: auto;
        right: auto;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0);
        overflow: auto;
        overflow-x: hidden;
        overflow-y: hidden;
        /*火狐去掉滚动条*/
        scrollbar-width: none;
        padding-top:60px ;



    }

    .zhanshi{
        width: 100%;
        min-height:1000px ;
        background: #fff;
        margin: auto;
        padding-right: 10px;
        padding-left: 10px;


    }

    .title-01{
        width: 100%;
        min-height: 50px;
        text-indent: 1em;
    }

    .title-01 h6{
        display: block;
        padding-top: 60px;
        font-size: 16px;
        text-indent: 1em;
        color: blue;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 1em;

    }
    .title-01 h6 i{
        padding-right: 4px;
    }

    .list-demo{
        width: 100%;
        height: 100%;
    }

    .list-demo ul{
        overflow: hidden;
        padding-top: 20px;

    }

    .list-demo ul li{
        float: left;
        display: block;
        margin-right: 8px;
        padding: 2px 15px;
        min-height: 20px;
        border-radius: 3px;
        margin-bottom: 10px;
        border: 1px solid #39f;
    }

    .yqts{
        position: relative;
        width: 100%;
        display: block;
    }

    .yqts h6{
        display: block;
        font-size: 16px;
        text-indent: 1em;
        color: blue;
        border-bottom: 1px solid #e6e6e6;;
        padding-bottom: 1em;

    }

    .yqts h6 i{
        padding-right: 4px;
    }

    .apply-tip{
        line-height: 30px;
    }

    .apply-tip p{
        padding-right: 20px;
        padding-left: 20px;
        text-indent: 1em;
        line-height: 32px;
        font-size: 16px;
        color: #444444;
    }

   .apply-tip .ti_01{
        color: red;
    }


   .youlian{
       /*max-width: 900px;*/
       min-height: 500px;
   }



   .youlian h6{
       font-size: 16px;
       text-indent: 1em;
       color: blue;
       border-bottom: 1px solid #e6e6e6;;
       padding-bottom: 1em;

   }

   .youlian h6 i{
       padding-right: 4px;

   }




    .youlian input{
        display: block;
        border: 1px solid rgba(0,0,0, .1);
        width: 300px;
        min-height: 40px;
        text-indent: 1em;
        font-size: 15px;
        margin-top: 1rem;
        border-radius: 2px;

    }

    .youlian input:focus{
        border: 1px solid red;
    }

    .list_show .test_02{
        display: block;
        width: 300px;
        border: 1px solid rgba(0,0,0, .1);
        outline: none;
        font-size: 15px;
        text-indent: 1em;
        height: 150px;
        resize:none;
        margin-top: 1rem;
        font-family: inherit;
        border-radius: 2px;


    }

    .list_show .test_02:focus{
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
        margin-top:1rem;


    }




</style>