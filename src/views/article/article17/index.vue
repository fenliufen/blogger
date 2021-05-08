<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>性能测试分析</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：100</span>
                    <span>分类：测试</span>
                    <span>更新时间：2021年03月12日</span>

                </p>

                <div class="tome">
                    <span>12</span>
                    <span>03</span>
                    <span>2021</span>
                </div>

            </div>


            <div class="zhanshi-01">




                <h1>性能测试分析介绍</h1>

                <h3>一、部署架构（需要了解）</h3>
                <ul class="list-01">
                    <li>
                        <strong>如下：集成部署示例（适用于高性能高并发）</strong><br>
                        <p><img src="./1.jpg"></p>
                    </li>
                </ul>


                <h3>二、db引发的性能问题</h3>
                <ul class="list-01">
                    <li>
                        <strong>如下：</strong><br>
                        1、表结构设计不合理（嵌套查询过多）<br>
                        2、没有建立索引<br>
                        3、表死锁<br>
                        <br>
                        注意：查询数据需要模拟在生产环境下数据多的情况，需要提前造好数据，测试数据过多的时候是否会引发性能问题。<br>

                    </li>
                </ul>


                <h3>三、提取场景</h3>
                <ul class="list-01">
                    <li>
                        1、同步(并发)<br>
                        2、异步（负载测试）<br>
                        3、强度测试 一般模拟生产环境<br>
                    </li>
                </ul>



                <h3>四、核心业务了解</h3>
                <ul class="list-01">
                    <li>
                        1、用户惯用性操作，核心功能，连贯操作<br>
                    </li>
                </ul>



                <h3>五、注意事项</h3>
                <ul class="list-01">
                    <li>
                        <strong>登录场景：</strong><br>
                        <br>
                        1、单点登录<br>
                        2、多点登录<br>
                        实操时需要注意，如果是单点登录，同一个账户重复登录会被挤下去，此时需要注意参数化，如50个用户就注册50个用户<br>
                    </li>
                </ul>




                <h3>六、其他</h3>
                <ul class="list-01">
                    <li>
                        <strong>监控方案：</strong><br>
                        <br>
                        1、node-exporter+prometheus+grafana<br>
                        搭建说明：https://www.cnblogs.com/xiao987334176/p/9930517.html<br>
                        <br>

                        <strong>服务器中间件配置参考：</strong><br>
                        博客：https://blog.csdn.net/zhusongziye/article/details/78359171?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&spm=1001.2101.3001.4242
                    </li>
                </ul>





















                <div class="title">
                    <p>
                        <a href="javascript:history.go(-1)">返回上一步</a> >
                        <a href="/journal">日志文章</a>
                    </p>

                </div>


            </div>

            <message></message>

        </div>
    </div>
</template>

<script>
    import message from "../../../components/message";
    export default {
        name: "index",
        components: {
            message
        },

    }
</script>

<style scoped>
    .demo1 {
        padding-top: 80px;
        max-width: 1280px;
        padding-right: 20px;
        padding-left: 10px;
        margin:90px auto;
        background: #fff;
        border: 1px solid #cccccc;
        height: 100%;
        overflow: auto;
        overflow-x:hidden;
        /*火狐去掉滚动条*/
        scrollbar-width: none;
    }

    .demo1::-webkit-scrollbar {
        display: none;
    }
    /*文章展示区*/

    .titer-01 {
        position: relative;
        display: block;
        max-width: 1280px;
        min-height: 85px;
        margin: auto;
        line-height: 30px;
        padding: 5px 130px 5px 0;
        border-bottom: 1px solid #e8e9e7;
        font-size: 18px;
        font-weight: 400;
        background: #fff;
    }

    .titer-01 h4 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: #333333;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        padding-left: 20px;
    }

    .titer-01 p {
        font-size: 14px;
        color: #787077;
        padding-left: 20px;
    }

    .titer-01 p span {
        padding-left: 10px;
    }

    .titer-01 .tome {
        font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
        position: absolute;
        right: 140px;
        top: 10px;
        background-color: #fff;
        padding: 0 20px 5px 20px;
        line-height: 32px;
    }

    .titer-01 .tome span:nth-of-type(1) {
        display: block;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
        position: relative;
        top: 2px;
    }

    .titer-01 .tome span:nth-of-type(2) {
        color: #989997;
        font-size: 18px;
    }

    .titer-01 .tome span:nth-of-type(3) {
        color: #989997;
        font-size: 18px;
        padding-left: 6px;
    }




    /*文章展示区*/

    .zhanshi-01 {
        max-width: 100%;
        background: #fff;
        margin: 0;
    }


    .titer-01 h4 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: #333333;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        padding-left: 20px;
    }

    .titer-01 p {
        font-size: 14px;
        color: #787077;
        padding-left: 20px;
    }

    .titer-01 p span {
        padding-left: 10px;
    }

    .titer-01 .tome {
        font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
        /*position: absolute;*/
        right: 0px;
        top: 10px;
        background-color: #fff;
        padding: 0 20px 5px 20px;
        line-height: 32px;
    }

    .titer-01 .tome span:nth-of-type(1) {
        display: block;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
        position: relative;
        top: 2px;
    }

    .titer-01 .tome span:nth-of-type(2) {
        color: #989997;
        font-size: 18px;
    }

    .titer-01 .tome span:nth-of-type(3) {
        color: #989997;
        font-size: 18px;
    }

    .zhanshi-01 {
        width: 1280px;
        background: #fff;
        margin: 0;
    }

    .zhanshi-01 h1 {
        padding-bottom: .3em;
        border-bottom: 1px solid #eee;
        margin-top: 1em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        font-size: 2.25em;
        padding-left: 1em;
    }

    .zhanshi-01 h3 {
        display: block;
        position: relative;
        margin-top: 2em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        color: #333333;
        font-size: 21px;
        padding-left: 1em;
    }

    .list-01 {
        font-size: 14px;
        color: #333333;
        padding-left: 2em;
        background: #fff;
    }

    .list-01 li {
        box-sizing: border-box;
        padding-top: 20px;
    }


    .list-01 li p{
        padding-top:20px ;
        width: 80%;
        height: 80%;
    }

    .list-01 li p img{
        display: block;
        width: 50%;
        height: 50%;
    }



    .title{
        padding: 10px;
        max-width: 1280px;
        margin: 10px auto 0;
        background-color:;
        /*box-shadow: 1px 2px 6px rgba(63,74,105,.16);*/
        /*border-radius: 3px;*/
    }

    .title p a{
        color: #555;
        text-decoration: none;

    }





</style>