<template>

        <div class="div-list">
                <div class="title">
                        <h2>博主动态</h2>
                </div>

                <ul class="list_01">
                        <li v-for="itme in mydata" :key="itme">
                                <div>
                                        <span class="time">
                                                {{itme.time}}
                                                <i ></i>
                                        </span>

                                        <i class="logo">
                                                <a>{{itme.content}}</a>
                                                <span></span>
                                        </i>
                                </div>
                        </li>
                </ul>

        </div>


</template>

<script>

        import axios from 'axios'
    export default {

        name: "index",
            created() {
                    var that=this;
                    axios.get('/dynamic/content')
                    .then(function (res) {
                             that.mydata=res.data.content

                    })
                    .catch(function (err) {
                            console.log(err)

                    })

            },

            data(){
                return{
                        mydata:[],

                }
            },







    }
</script>

<style scoped>



        .div-list{

                max-width: 1280px;
                margin: 100px auto;
                overflow: auto;
                overflow-y: hidden;
                overflow-x: hidden;
                scrollbar-width: none;
                padding-bottom: 10px;
                background: #fff;



        }

        .title{
                background: url(../../../assets/imgs/9.png) no-repeat right top #fff;
                padding: 30px;
        }

        .title h2{
                font-size: 20px;
                line-height: 40px;
                border-bottom: 1px solid #eee;
                color: #484848;
                font-weight: normal;
                position: relative;
                margin-bottom: 10px;

        }


        .list_01{
                box-sizing: border-box;
                list-style-type: none;
                width: 100%;
                margin: 0 auto;
                min-height: 1000px;
                background: #fff;
                overflow: hidden;
        }

        .list_01 li{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
        }

        .list_01 li div{
                text-indent: 2em;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
        }


        .list_01 li div .time{
                position: relative;
                line-height: 32px;
                padding-right: 40px;
                color: #999;
        }

        .list_01 li div .time i{
                position: absolute;
                content: "";
                width: 2px;
                height: 40px;
                background: #e0dfdf;
                right: 18px;
        }

        .logo{
                position: relative;
                font-style: normal;
        }

        .logo span{
                height: 10px;
                width: 10px;
                border: 2px solid #cccaca;
                background: #fff;
                position: absolute;
                top: 4px;
                left: -26px;
                border-radius: 50%;
                -webkit-transition: all .5s ease;
                -moz-transition: all .5s ease;
                -ms-transition: all .5s ease;
                -o-transition: all .5s ease;
                transition: all .5s ease;
        }

        .logo a{
                text-decoration: none;
                color: #555;

        }

        li:hover .logo span{
                background: black;

        }




</style>