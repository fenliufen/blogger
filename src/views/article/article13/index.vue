<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>jmeter常用组件</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：22</span>
                    <span>分类：测试</span>
                    <span>更新时间：2021年03月09日</span>

                </p>

                <div class="tome">
                    <span>09</span>
                    <span>03</span>
                    <span>2021</span>
                </div>

            </div>


            <div class="zhanshi-01">




                <h1>jmeter常用组件介绍（二）</h1>

                <h3>一、Cookie管理器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        1、自动管理cookie：<br>
                        就像浏览器一样能够自动存储和发送Cookie，如果一个http请求的响应中包含Cookie，那么Cookie Manager就会自动地保存这些Cookie并在所有后来发送到该站点的请求中使用这些Cookie的值。每个线程都自己存储cookie的区域。<br>
                        在cookie manager中看不到自动保存的cookie，我们可以在察看结果树View Results Tree中看到被发送请求的Cookie Data。<br>
                        要把Cookies保存到线程变量中，要定义属性"CookieManager.save.cookies=true"。线程变量名为COOKIE_ + Cookie名。属性CookieManager.name.prefix= 可以用来修改默认的COOKIE_的值。<br>
                        <br>
                        2、手动添加Cookie到Cookie Manager，这些Cookie的值会被所有线程共享。<br>
                        比较简单的做法是使用firefox的firebug导出cookies ，然后再导入到jmeter的cookie manager中，当然，这里也可以通过Add按钮手动添加cookies。<br>
                        <p><img src="./1.png"></p>
                    </li>
                </ul>


                <h3>二、json提取器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        此提取器用于提取请求返回结果中的某个值或者某一组值，用法比正则表达式要简单，标准写法为$.key，其中key为返回结果map中的一个键，如果是多层则继续用.key进行即可，如果遇到key的value值为一个List，<br>
                        则使用.key[n]，其中n为list中元素的编号，如下使用实例来说明下如何使用<br>
                        <br>
                        <strong>参数介绍：</strong><br>
                        1、Main sampleand sub-samples：应用于主sample及子sample<br>
                        2、Main sample only：默认的是这个，应用于主sample<br>
                        3、Sub-samples only：应用于子sample<br>
                        4、JMeterVariableName to use：应用于变量命名的内容<br>
                        5、Variable names : 名称 /6、JSONPath Expression：JSON表达式<br>
                        7、Match Numbers：0随机；n取第几个匹配值；-1匹配所有，后续引用用 变量名_N 取第N个值<br>
                        8、Default Value：未取到值的时候默认值<br>
                        <p><img src="./2.png"></p>
                    </li>
                </ul>



                <h3>三、json断言</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        针对响应内容为json，可以使用响应断言，但有时候使用json断言会更加准确，使用json断言，需要掌握jsonpath语法，掌握jsonpath语法后才能准确编写json提取表达式。<br>
                        <br>
                        <strong>参数介绍：</strong><br>
                        Addi tionally assert value：勾选后方可填写断言内容<br>
                        Match as regular expression：勾选后表示断言内容支持正则表达式<br>
                        Expected Value：断言内容<br>
                        Except null：勾选后表示断言内容为空<br>
                        Invert assertion(wiil fail if above condition met)：断言取反，即如果断言结果为true，则勾选后断言结果为false；如果断言结果为false，则勾选后断言结果为true
                        <p><img src="./3.png"></p>
                    </li>
                </ul>


                <h3>四、后置处理器</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        BeanShellPostProcessor 是一个轻量级的面向Java的脚本语言，借用了JMeter对于BeanShell支持的特性，允许使用标准的Java语法来处理Json数据。也可以用来定义全局变量等等
                        <p><img src="./4.png"></p>
                    </li>
                </ul>



                <h3>五、JSR223 预处理程序</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        相比于BeanShell 取样器，JSR223取样器具有可大大提高性能的功能（编译），同时支持更多的脚本语言，其中包括BeanShell脚本，<br>
                        所以在编写脚本时不建议使用BeanShell 取样器，也不再对BeanShell 取样器进行讲述，如果需要，使用JSR223取样器编写脚本是更好的选择<br>
                        <br>
                        <strong>常用参数：</strong><br>
                        1、log.info(“String”)打印日志，可自定义级别 <br>
                        2、vars.get(“VAR1”); 获取变量值并转为String，返回String<br>
                        3、vars.put(“VAR2”,“value”); 创建/更新一个String变量，无返回值 <br>
                        4、vars.remove(“VAR3”); 移除一个变量，返回Object<br>
                        5、vars.putObject(“OBJ1”,new Object()); 创建/更新一个Object变量 ，无返回值<br>
                        6、props.get(“START.HMS”); 获取变量值并转为String，与vars.get(“VAR1”)不同的是，props获取或更新的变量，可以跨线程使用 <br>
                        7、props.put(“PROP1”,“1234”); 创建/更新一个String变量<br>
                        <p><img src="./5.png"></p>
                    </li>
                </ul>


                <h3>六、同步定时器（Synchronizing Timer</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        阻塞线程，直到指定的线程数量到达后，再一起释放，可以瞬间产生很大的压力（人多力量大- -哈哈！）<br>
                        （1）Number of Simulated Users to Group by:模拟用户的数量，即指定同时释放的线程数数量<br>
                        （2）Timeout in milliseconds:超时时间，即超时多少毫秒后同时释放指定的线程数<br>
                        <p><img src="./6.png"></p>
                    </li>
                </ul>


                <h3>七、Debug Sampler （调试采样器）</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        使用Jmeter开发脚本时，难免需要调试，这时可以使用Jmeter的Debug Sampler，它有三个选项：JMeter properties，JMeter variables，System properties<br>
                        <br>
                        <strong>参数介绍：</strong><br>
                        1、JMeter properties和System properties：通常都选false，这两个就是JMeter和系统的属性，在Jmeter的bin的jmeter.properties中定义，一般都不会变。<br>
                        2、JMeter variables：这个是我们自已定义的变量，定义的方式有如下这些：<br>
                        选中测试计划(Test plan)，在右边的面板上添加User Defined Variables<br>
                        选中线程组，右键选择 配置元件( config element)-->User Defined Variables<br>
                        <p><img src="./7.png"></p>
                    </li>
                </ul>




                <h3>八、CSV 数据文件设置）</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        为了实现简单的数据存储，是一个纯文本的文件
                        最通用的一种文件格式，它可以非常容易地被导入各种PC表格及数据库中<br>
                        CSV 文件可以用记事本、excel打开；用记事本打开的话，每一列数据都用逗号隔开<br>
                        从外部导入测试数据，相当于数据参数化 通过从文件中导入大量的测试数据，来模拟大量真实用户发送并发请求<br>
                        <br>
                        <strong>参数介绍：</strong><br>
                        忽略首行 True：一般首行都是字段名字，比如mobile，一般都需要忽略除非没有字段名<br>
                        是否允许带引号 False：可以看到有引号的三条记录 8、9、10，都还是保留了引号<br>
                        再次循环 True：csv 文件共有 10 条记录，但线程数有 15 个，循环 10 次后，重头开始循环；可以看到 11-15的手机号和1-5的手机号<br>
                        停止线程 False：取了 10 次值之后就到了文件尾部，但并不会停止运行线程<br>

                        <p><img src="./8.png"></p>
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