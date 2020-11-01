<template>
    <div class="titer">
        <div class="libiao">

            <div class="hang">
                <a></a>
            </div>


            <div>
                <ul class="daohang" v-if="ispan">
                    <li v-for="(itme,index) in mydata" :key="(itme,index)" @click="dian(index)" :class="{'list_01':itme.name==name}" class="mylist-01">
                        <router-link :to="itme.path">{{itme.name}}</router-link>
                    </li>
                </ul>
            </div>


            <div class="yeqiam">
                <a @click="display">☰</a>
            </div>



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

            display:function () {
                if(this.count==0){
                    this.count++
                    this.ispan=true
                    console.log(this.count)
                }else {
                    this.count--
                    console.log(this.count)
                    this.ispan=false
                }


            }
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
                count:0,
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
        display: block;
        max-width: 140px;
        text-indent: 1em;


    }

    .hang a:nth-of-type(1) {
        font-size: 150%;
        font-family: 'STXingkai';
        color: #444647;
        line-height: 60px;
        text-align: center;
        position: absolute;

    }
    .daohang{
        padding-top: 50px;
    }

    .daohang li {
        display: block;
        margin: 10px 10px;
        position: relative;
    }

    .list_01 a{
        border-bottom:3px solid green ;
    }


    .daohang li a {
        display: block;
        line-height: 32px;
        padding: 4px 28px;
        color: #212220;
        font-weight: 400;
        font-size: 16px;
        max-width:100px;
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

    .yeqiam{
         width: 50px;
         height: 30px;
         top:16px ;
         text-align: center;
         position: absolute;
         right: 0;


    }

    .yeqiam a{
        line-height: 30px;
        width: 50px;
        height: 30px;
        color: black;
        font-size: 25px;
    }












</style>