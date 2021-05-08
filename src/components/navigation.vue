<template>
    <div class="titer">
        <div class="libiao">

            <div class="hang">
                <a>从小就疯了</a>
            </div>


            <div>
                <ul class="daohang">

                    <li v-for="(itme,index) in mydata" :key="(itme,index)" @click="dian(index)" :class="{'list_01':itme.name==name}" class="mylist-01">
                        <router-link :to="itme.path">{{itme.name}}</router-link>
                    </li>

                </ul>
            </div>


            <a class="dengru" href="tencent://message/?Menu=yes&uin=1607187254&Site=80fans&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45">
                <i class="iconfont">&#xe601;</i>
            </a>
        </div>





    </div>

</template>

<script>
    export default {
        name: "navigation",
        methods:{
            dian:function (index) {
                this.name = this.mydata[index].name

            },
        },

        mounted() {

        },


        data(){
            return{
                mydata:[
                    {
                        name:'首页',
                        path:'./home'
                    },
                    {
                        name:'日志文章',
                        path:'./journal'
                    },
                    {
                        name:'动态',
                        path:'./dynamic'
                    },
                    {
                        name:'关于我',
                        path:'./about'
                    },
                    {
                        name:'友情链接',
                        path:'./friendship'
                    },
                ],

                ispan:false,
                name:document.title
            }
        },





    }


</script>

<style scoped >
    .titer {
        width: 100%;
        min-height: 60px;
        opacity: 0.9;
        position: fixed;
        background-color: rgba(255, 255, 255, 1);
        z-index: 11002;
        top: 0;
        left: 0;
        border-bottom: 1px solid #e8e9e7;
        font-size: 14px;


    }

    .libiao {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        position: relative;

    }

    .hang {
        position: relative;
        display: block;
        width: 140px;
        margin-left: -200px;

    }

    .hang a:nth-of-type(1) {
        font-size: 200%;
        font-family: 'STXingkai';
        color: #444647;
        line-height: 60px;
        text-align: center;
        position: absolute;

    }

    .daohang li {
        display: block;
        float: left;
        margin: 10px 10px;
        position: relative;
    }

    .list_01{
        border-bottom:3px solid green ;
    }


    .daohang li a {
        display: block;
        line-height: 32px;
        padding: 4px 28px;
        color: #212220;
        font-weight: 400;
        font-size: 16px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, .2);
        -webkit-transition: all .2s;
        transition: all .2s;
        text-decoration: none;
        outline: none;

    }

    .daohang li a:hover{
        color: blue;
        font-weight: bold;
    }




    .dengru {
        right: 0;
        position: absolute;
        line-height: 60px;
        font-size: 24px;
    }

    .dengru i {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        text-rendering: auto;
        font-size: 30px;
    }

    .dengru i:hover {
        color: pink;
    }


    @media screen and (max-width: 800px){
        .dengru{
            display: none;
        }

    }







</style>