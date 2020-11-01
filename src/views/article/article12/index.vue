<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>jmeter常用组件</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：22</span>
                    <span>分类：测试</span>
                    <span>更新时间：2020年11月01日</span>

                </p>

                <div class="tome">
                    <span>01</span>
                    <span>11</span>
                    <span>2020</span>
                </div>

            </div>


            <div class="zhanshi-01">




                <h1>jmeter常用组件介绍（一）</h1>

                <h3>一、事务控制器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        1、Generate parent sample：如果事务控制器下有多个取样器，勾选它，那么在“擦看结果树”中我们不仅可以看到事务控制器，还可以看到每个取样器，<br>
                        并且事务控制器定义的事务是否成功取决于子事 务是否都成功，子事务其中任何一个失败即代表整个事务失败。<br>
                        2、Include duration of timer and pre-post processors in generated sample：是否包括定时器、预处理和后期处理延迟的时间<br>
                        <p><img src="./1.png"></p>
                    </li>
                </ul>


                <h3>二、循环控制器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        正如名字一样，用于事务的循环<br>
                    </li>
                </ul>



                <h3>三、仅一次控制器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        在进行压测时，往往登录只需要一次，其他的接口需要循环测试。这里就会用到控制器中的仅一次控制器。只要放置在控制器的请求，不管在哪种情况下， 都只执行一次。
                        <p><img src="./4.png"></p>
                    </li>
                </ul>


                <h3>四、if控制器的使用</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        作用：直接输入我们需要判断的表达式即可，判断表达式为真时，执行if控制器下的请求，例如“1!=2”为真，则一定会执行下面的http请求
                    </li>
                </ul>


                <h3>五、测试活动</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        1、此取样器也可以与事务控制器结合使用，因为它允许包含暂停而无需生成样本。对于可变延迟，将暂停时间设置为零，并将定时器添加为子级<br>
                        2、完成正在进行的任何样本后 ，“stop”操作将停止线程或测试。“Stop Now”操作将停止测试，而无需等待样本完成; 它会中断任何活动样本。<br>
                        如果某些线程未能在5秒的时间限制内停止，则将在GUI模式下显示一条消息。您可以使用Stop命令尝试停止线程，如果不能停止，可以手动退出JMeter。<br>
                        在CLI模式下，如果某些线程未能在5秒的时间限制内停止，JMeter将退出。<br>
                        <br>
                        <strong>选项有以下：</strong><br>
                        Target：目标，选择是当前线程还是所有线程<br>
                        Action：Pause（暂停）/Stop（停止）/Stop Now（立即停止）/Go to next loop iteration（转到下一个循环迭代）<br>
                        Duration：暂停多长时间（毫秒）

                        <p><img src="./5.png"></p>
                    </li>
                </ul>


                <h3>六、http缓存管理器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        1、HTTP缓存管理器用于在其范围内向HTTP请求添加缓存功能，用于模拟浏览器缓存功能。每个虚拟用户线程都有自己的缓存。 默认情况下，<br>
                        缓存管理器在每个虚拟用户线程的缓存中最多存储5000个项目。使用属性“ maxSize ”可以修改此值。 此值增加得越多，HTTP缓存管理器将消耗更多的内存，<br>
                        因此需要调整Jmeter运行内存以支持缓存管理器运<br>
                        <br>
                        2、如果选择了“Use Cache-Control/Expires header when processing GET request ”选项，则会对照当前时间检查“Cache-Control/Expires”值。<br>
                        如果请求是GET请求，并且时间戳记在缓存之后，则取样器将立即返回，而无需从远程服务器请求URL。这旨在模拟浏览器的行为。如果Cache-Control标头为<br>
                        “ no-cache ”，则响应将在过期时存储在缓存中，再次进行GET请求时将重新请求远程服务器<br>

                        <p><img src="./6.png"></p>
                    </li>
                </ul>


                <h3>七、http授权管理器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        1、HTTP授权管理器使可以为使用服务器身份验证限制的网页指定一个或多个用户登录名。当使用浏览器访问受限页面时，可以看到这种身份验证，<br>
                        并且浏览器将显示一个登录对话框。当遇到此类页面时，JMeter可通过HTTP授权管理器发送登录信息。<br>
                        <p><img src="./7.png"></p>
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