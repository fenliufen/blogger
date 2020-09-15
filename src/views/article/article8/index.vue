<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>ui自动化po设计</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：220</span>
                    <span>分类：网站测试</span>
                    <span>更新时间：2020年09月13日</span>

                </p>


                <div class="tome">
                    <span>13</span>
                    <span>09</span>
                    <span>2020</span>
                </div>



            </div>


            <div class="zhanshi-01">


                <h1>Selenium自动化测试框架之PO设计模式</h1>

                <h3>一、PO的核心要素：</h3>
                <ul class="list-01">
                    <li>
                        <br>1、在PO模式中抽象封装成一个BasePage类，该基类应该拥有一个只实现webdriver实例的属性。
                        <br>2、每个一个page都继承Base，通过driver来管理本page中元素，将page中的操作封装成一个个的方法。
                        <br>3、TestCase依赖page类，从而实现相应的测试步骤。
                    </li>
                </ul>

                <h3>二、基础案例：</h3>
                <ul class="list-01">
                    <li>
                        <br><strong>通过对脚本的分析，可以提取到：</strong>
                        <br>不同的运行脚本环境，浏览器不同：驱动webdriver.Firefox()可以剥离，
                        <br>操作元素时，常常需要等待元素加载完毕后方可进行操作：是否可以把webdriver提供的findelement* 方法封装下，才操作元素前，先判断元素的是否可操作。
                        <br>实际测试场景中，可能有多个测试场景，如果每个测试场景都需要维护url、浏览器驱动、元素定位等，效率会非常低。
                        <br>因此基于对上面的分析，是否可以设计一个所有测试页面（selenium本身是对B/S系统开展测试）的基类，来维护一些公共的方法。此处先定义个名字哦base.py，用于存放页面公共方法及webdriver原有方法二次封装等。
                    </li>
                </ul>

                <h3>三、基本内容：</h3>
                <ul class="list-01">
                    <li>
                        <br><strong>base.py 内容如下</strong>
                        <br><p><img src="./1.png"></p>
                        <br><strong>用例编写如下</strong>
                        <br><p><img src="./2.png"></p>
                        <br><strong>执行用例如下</strong>
                        <br><p><img src="./3.png"></p>

                    </li>
                </ul>

                <h3>四、注意事项：</h3>
                <ul class="list-01">
                    <li>
                        <br>1、用例尽量不要有依赖关系，因为在执行用例的时候，都是用命令行去批量执行用例的，系统都是随机执行，而不是按照顺序执行的
                        <br>2、参数尽量不要写在执行文件里，尽量采用读取文件的形式去读取，小编因为功能简单，方便看，所以把数据写在用例里
                        <br>3、如果业务较为复杂，则断言方法，包括定位的一些方法，尽量自己写在公共方法里，做一个封装，以防框架变动而修改内容过多
                        <br>4、用例较多，或者业务复杂，则断言方法尽量不要写在用例里，尽量与用例抽离
                        <br>5、web自动化优先使用css定位，因为css定位是web页面的原生写法，速度快，且不容易报错，定位精准
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
        padding-left: 20px;
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