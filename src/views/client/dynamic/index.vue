<template>

        <div class="div-list">
                <ul class="list_01">
                        <li v-for="(itme,index) in mydata" :key="(itme,index)">
                                <div :class="index%2==0?myclass1:myclass2">
                                        <span class="time">{{itme.time}}</span>

                                        <div class="neir">
                                                <p>{{itme.content}}</p>
                                        </div>


                                </div>

                                <i class="iconfont"></i>
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
                             that.mydata=res.data
                              console.log(that.mydata)

                    })
                    .catch(function (err) {
                            console.log(err)

                    })

            },
            data(){
                return{
                        mydata:[],
                        myclass1:'liuyan',
                        myclass2:'liuyan1',

                }
            },

            //操作dom元素放置处
            mounted() {


            },

            methods:{




            },

            computed:{

            }

    }
</script>

<style scoped>

        .div-list{
                margin-top: 64px;
                overflow: auto;
                overflow-y: hidden;
                overflow-x: hidden;
                scrollbar-width: none;
                padding-bottom: 10px;

        }

        .list_01{

                box-sizing: border-box;
                list-style-type: none;
                position: relative;
                width: 6px;
                margin: 0 auto;
                padding-top: 50px;
                background: #fff;
                min-height: 1000px;
        }

        .list_01 li{

                box-sizing: border-box;
                list-style-type: none;
                position: relative;
                width: 6px;
                height: 200px;
                margin: 0 auto;
                padding-top: 50px;
                background: #fff;
        }

        .liuyan{

                position: absolute;
                width: 400px;
                height: 140px;
                box-shadow: 0 0 100px inset aliceblue;
                left: 20px;
                top: 15px;
                background: aliceblue;
                border-radius: 3px;
        }

        .liuyan1{
                position: absolute;
                width: 400px;
                height: 140px;
                box-shadow: 0 0 100px inset aliceblue;
                background: aliceblue;
                right: 20px;
                top: 15px;
                border-radius: 3px;
        }

        .time{
                position: absolute;
                background: #f5af10;
                width: 100px;
                height: 30px;
                border-radius: 5px;
                top: -20px;
                left: 10px;
                text-align: center;
                line-height: 30px;
        }

        .neir{
                text-align: center;
                width: 360px;
                height: 100px;
                box-shadow: 0 0 100px inset white;
                margin: 20px auto;
                background: palegreen;
                border-radius: 9px;
        }



        .neir p{
                padding-top: 20px;
                text-align: center;
        }


        .list_01 li i{
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%) rotate(45deg);
                width: 20px;
                height: 20px;
                z-index: 21;
                background: blue;
        }








</style>