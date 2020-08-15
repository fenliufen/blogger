<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>nginx常用命令行</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：201</span>
                    <span>分类：网站开发</span>
                    <span>更新时间：2020年06月04日</span>
                </p>

<!--                <div class="tome">-->
<!--                    <span>04</span>-->
<!--                    <span>06</span>-->
<!--                    <span>2020</span>-->
<!--                </div>-->

            </div>


            <div class="zhanshi-01">
                <ul class="list_01">

                    <li class="list_test">
                        <h3>centos系统</h3>
                        <p>nginx -s reopen #重启Nginx</p>
                        <p>nginx -s reload #重新加载Nginx配置文件，然后以优雅的方式重启Nginx</p>
                        <p>nginx -s stop #强制停止Nginx服务</p>
                        <p>nginx -s quit #优雅地停止Nginx服务（即处理完所有请求后再停止服务）</p>
                        <p>nginx -t #检测配置文件是否有语法错误，然后退出</p>
                        <p>nginx -?,-h #打开帮助信息</p>
                        <p>nginx -v #显示版本信息并退出</p>
                        <p>nginx -V #显示版本和配置选项信息，然后退出</p>
                        <p>nginx -t #检测配置文件是否有语法错误，然后退出</p>
                        <p>nginx -T #检测配置文件是否有语法错误，转储并退出</p>
                        <p>nginx -q #在检测配置文件期间屏蔽非错误信息</p>
                        <p>nginx -p prefix #设置前缀路径(默认是:/usr/share/nginx/)</p>
                        <p>nginx -c filename #设置配置文件(默认是:/etc/nginx/nginx.conf)</p>
                        <p>nginx -g directives #设置配置文件外的全局指令</p>
                        <p>killall nginx #杀死所有nginx进程</p>
                    </li>



                    <li class="list_test">
                        <h3>乌班图系统</h3>
                        <p>输入nginx可以直接启动</p>
                        <p>查询是否已经启动：ps aux | grep nginx</p>
                        <p>nginx -s stop 立即停止nginx</p>
                        <p>nginx -s quit 这种方法较stop相比就比较温和一些了，需要进程完成当前工作后再停止。</p>
                        <p>killall nginx 这种方法也是比较野蛮的，我们直接杀死进程，但是在上面使用没有效果时，我们用这种方法还是比较好的。</p>
                        <p>查询重启关闭指令  service nginx</p>
                        <p>start启动|stop关闭|restart重启|reload|force-reload|status|configtest|rotate|upgrade}</p>
                    </li>

                </ul>







            </div>

            <div class="title">
                <p>
                    <a href="javascript:history.go(-1)">返回上一步</a> >
                    <a href="/journal">日志文章</a>
                </p>

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
        position: relative;
        padding-top: 80px;
        max-width: 1280px;
        margin:90px auto;
        padding-right: 20px;
        padding-left: 20px;
        left: auto;
        right: auto;
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



    .list-01 li {
        position: relative;
        box-sizing: border-box;
        line-height: 30px;
    }



    /*文章内容样式*/
    .zhanshi-01{
        width: 100%;
        min-height: 500px;
    }

    .list_test{
        padding-top: 10px;
    }

    .list_test h3{
        padding-top: 10px;
        text-indent: 2em;
        color: blue;
        font-size: 18px;
        font-weight: bold;
    }

    .list_test p {
        text-indent: 2em;
        line-height: 40px;
        padding-top: 20px;


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