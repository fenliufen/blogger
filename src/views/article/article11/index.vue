<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>oracle常用函数介绍（一）</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：40</span>
                    <span>分类：网站开发</span>
                    <span>更新时间：2020年10月18日</span>

                </p>


                <div class="tome">
                    <span>18</span>
                    <span>10</span>
                    <span>2020</span>
                </div>



            </div>


            <div class="zhanshi-01">

                <h1>oracle常用函数介绍（一）</h1>

                <h3>一、LAST_DAY()</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        LAST_DAY函数返回指定日期对应月份的最后一天。<br>
                        试例：SELECT last_day(SYSDATE) FROM dual;<br>

                    </li>
                </ul>


                <h3>二、add_months()</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        add_months 函数主要是对日期函数进行操作，举例子进行说明<br>
                        add_months 有两个参数，第一个参数是日期，第二个参数是对日期进行加减的数字(以月为单位的)<br>
                    </li>
                    <li>
                        如：3个月以后的时间，可以用下列语句
                        <p><img src="./1.png"></p>
                    </li>

                    <li>
                        如：3个月以前的时间，可以用下列语句
                        <p><img src="./2.png"></p>
                    </li>

                    <li>
                        有时需要用to_date()函数进行转换
                        <p><img src="./3.png"></p>
                    </li>

                </ul>

                <h3>三、sysdate</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        获取当前时间<br>
                        试例：
                        SELECT SYSDATE FROM dual;
                        <p><img src="./4.png"></p>
                    </li>
                    <li>
                        to_date试例如下<br>
                        to_date('2002-02-28','yyyy-mm-dd')<br>
                        to_date('2004-05-07 13:23:44','yyyy-mm-dd hh24:mi:ss')
                    </li>

                </ul>


                <h3>四、trunc()</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：对时间进行自定义处理返回结果</strong><br>
                        1.select trunc(sysdate) from dual --2013-01-06 今天的日期为2013-01-06<br>
                        2.select trunc(sysdate, 'mm') from dual --2013-01-01 返回当月第一天.<br>
                        3.select trunc(sysdate,'yy') from dual --2013-01-01 返回当年第一天<br>
                        4.select trunc(sysdate,'dd') from dual --2013-01-06 返回当前年月日<br>
                        5.select trunc(sysdate,'yyyy') from dual --2013-01-01 返回当年第一天<br>
                        6.select trunc(sysdate,'d') from dual --2013-01-06 (星期天)返回当前星期的第一天<br>
                        7.select trunc(sysdate, 'hh') from dual --2013-01-06 17:00:00 当前时间为17:35<br>
                        8.select trunc(sysdate, 'mi') from dual --2013-01-06 17:35:00 TRUNC()函数没有秒的精确

                    </li>

                </ul>

                <h3>五、rownum()</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：oracle中一张表中查询指定条数数据记录</strong><br>
                        如：select * from 表名 where rownum ＜ 101
                    </li>

                </ul>

                <h3>六、sys_guid()</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong><br>
                        在oracle8i以后提供了一个生成不重复的数据的一个函数sys_guid()一共32位，生成的依据主要是时间和机器码，具有世界唯一性<br>
                    </li>
                </ul>

                <h3>七、round()</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：指定的值进行四舍5入，接受两个参数  ，一个是指定值，一个是精度</strong><br>
                        试例：select round(3.4232424,2) from dual ;  保留两位小数
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