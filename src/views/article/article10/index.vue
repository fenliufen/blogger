<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>jmeter函数助手常用函数（一）</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：32</span>
                    <span>分类：网站测试</span>
                    <span>更新时间：2020年10月13日</span>

                </p>


                <div class="tome">
                    <span>13</span>
                    <span>10</span>
                    <span>2020</span>
                </div>



            </div>


            <div class="zhanshi-01">


                <h1>jmeter常用函数介绍</h1>

                <h3>一、_Random   随机生成数字</h3>
                <ul class="list-01">
                    <li>
                        分别填写最小值和最大值；变量名（可选），可以实现多处传递同一个随机值。
                        <p><img src="./1.png"></p>
                    </li>
                </ul>


                <h3>二、__RandomString() 函数</h3>
                <ul class="list-01">
                    <li>
                        名称介绍：<br>
                        Random string length：字符串随机数长度；<br>
                        Chars to use for random string generation：生成字符串随机数的字符集，生成的字符串中的字符从这个字段中选取；<br>
                        将生成函数字符串复制到请求参数中，执行请求查看结果。<br>
                        <p><img src="./2.png"></p>
                    </li>
                </ul>

                <h3>三、__RandomFromMultipleVars() 函数</h3>
                <ul class="list-01">
                    <li>
                        可以将多个变量作为另一个参数的随机数；例如接口需要使用手机号，手机号的开头131，130，136，180…，可以将手机号头设为用户变量；<br>
                        传参时从这几个值中任意取，这时随机变量就很有必要了。
                        <p><img src="./3.png"></p>
                    </li>
                    <li>
                        Source Variable(s) (use | as separator)：源变量集合，写规则各变量名之用“|”隔开；可以使用任何变量，例如用户定义变量（a1,a2,a3），随机数中定义的变量（n）;<br>
                        Target Variable：目标变量名，可以实现多处传递同一个随机值。<br>
                        使用如下：<br>
                        <p><img src="./4.png"></p>
                    </li>

                    <li>
                        效果图：<br>
                        <p><img src="./5.png"></p>
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
        width: 100%;
        height: 100%;
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