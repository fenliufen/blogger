<template>
    <div class="dome">


        <div class="head">
            <div class="article">


                <div class="biaoti">
                    <h3>linux监控常用命令</h3>
                    <p>
                        <span>作者：从小就疯了</span>
                        <span>观看人数：20</span>
                        <span>分类：操作系统</span>
                        <span>更新时间：2020-08-08</span>
                    </p>
                </div>


            </div>


            <div class="content">

                <p class="qianyan">
                    在日常的工作中，相信大家也会常常接到项目中的各种性能需求，每每接到性能需求的时候，由于对服务器的操作不熟悉
                    ，因为大多数服务器都是linux系统，没有界面的，所以需要掌握一些基本的linux监控命令，对你在进行性能测试才能
                    更好的定位问题，发现问题，现在小编将自己在日常工作中常用的linux常用的命令做一个汇总，方便学习和随时可以进行查看翻阅。
                </p>

                <ul class="list">
                    <li>
                        <strong>一、查看端口号占用情况：</strong><br>
                        <p>1、lsof -i，用于查看某一端口的占用情况，比如查看22号端口使用情况，lsof -i:22</p>
                        <p>2、netstat -tunlp|grep 端口号，用于查看指定端口号的进程情况，如查看22端口的情况，netstat -tunlp|grep 22</p>
                    </li>

                    <li>
                        <strong>二、ps命令查看某个进程的使用情况</strong>
                        <p>ps auxw --sort=%cpu  查看进程cpu的使用率，倒序排序</p>
                        <p>ps auxw --sort=%MEM</p>
                        <p>ps -aux | sort -k4,4n</p>
                        <p>ps auxw --sort=rss</p>
                        <p>ps auxw --sort=%cpu</p>
                        <p>linux 下的ps命令</p>
                        <p>%CPU 进程的cpu占用率</p>
                        <p>%MEM 进程的内存占用率</p>
                        <p>VSZ 进程所使用的虚存的大小</p>
                        <p>RSS 进程使用的驻留集大小或者是实际内存的大小</p>
                    </li>


                    <li>
                        <strong>三、ps命令查看进程的状态：</strong><br>
                        <p>ps aux | grep amoeba  查看进程状态</p>
                        <p>linux上进程有5种状态</p>
                        <p>1. 运行(正在运行或在运行队列中等待)</p>
                        <p>2. 中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号)</p>
                        <p>3. 不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)</p>
                        <p>4. 僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)</p>
                        <p>5. 停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)</p>

                    </li>


                    <li>
                        <strong>四、查看进程号被占用情况：</strong><br>
                        <p>1、kill -s 9 进程号</p>
                        <p>2、 ps -ef | grep java    查看java进程也可以查看进程号</p>
                    </li>


                </ul>

            </div>


        </div>

        <div class="title">
            <p>
                <a href="javascript:history.go(-1)">返回上一步</a> >
                <a href="/journal">日志文章</a>
            </p>

        </div>


        <message/>

    </div>
    
</template>

<script>
    import message from "../../../components/message";
    export default {
        name: "index",
        components:{
            message
        }
    }
</script>

<style scoped>

    .dome{

        max-width: 1280px;
        margin:90px auto;
        padding-bottom: 30px;
        background-color: #fff;
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

    .head{
        max-width: 1280px;
        margin: 10px auto 0;
        overflow: hidden;
        min-height: 560px;
        background-color: rgba(255,255,255,.5);
        /*box-shadow: 1px 2px 6px rgba(63,74,105,.16);*/
        /*border-radius: 3px;*/

    }

    .article{
        padding: 20px;
        /*box-sizing: border-box;*/
        line-height: 30px;
        font-size: 16px;
        padding-bottom: 10px;
    }


    .biaoti{
        /*box-sizing: inherit;*/
    }

    .biaoti h3{
        font-size: 22px;
        font-weight: 700;
        text-align: center;
        color: #444444;
    }

    .biaoti p{
        text-align: center;
        color: #444444;

    }

    .biaoti p span{
        padding-left: 1em;
    }

    .content{
        margin: auto;
        height: auto;
        max-width: 900px;
        padding: 1em;


    }

    .content .qianyan {
        margin-top: 10px;
        text-indent: 1em;
    }

    .list{
        padding-top:20px ;
        width: 100%;
    }

    .list li{
        padding-top:20px ;
    }

    .list li p{
        padding-top: 10px;
        text-indent: 1em;
    }








</style>