<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>python json文件的读写操作</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：23</span>
                    <span>分类：测试</span>
                    <span>更新时间：2020年12月17日</span>

                </p>

<!--                <div class="tome">-->
<!--                    <span>17</span>-->
<!--                    <span>11</span>-->
<!--                    <span>2020</span>-->
<!--                </div>-->

            </div>


            <div class="zhanshi-01">
                <h1>python json文件的读写操作 </h1>
                <pre  class="test_div">
                    <textarea></textarea>
                </pre>





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
        mounted() {

            var div=document.querySelector( '.test_div textarea')

            div.value='' +
                'json的读写\n' +
                '\n' +
                '\n' +
                'import json\n' +
                '\n' +
                '\n' +
                '例子:\n' +
                'with open("test.json",\'r\',encoding=\'utf-8\') as load_f:  # load:把文件打开，并把字符串变换为数据类型\n' +
                '    load_dict = json.load(load_f)\n' +
                '    print(load_dict)\n' +
                '\n' +
                '\n' +
                '例子：\n' +
                'student=[{"a":"小梦","b":"小A","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小A","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小A","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小A","c":"阿飞"}]\n' +
                '\n' +
                'with open(\'student.json\', \'w\',encoding=\'utf-8\') as student_dumped:  # dump: 将数据写入json文件中\n' +
                ' json.dump(student,student_dumped,indent = 4,sort_keys =False,ensure_ascii=False)   #格式化json数据\n' +
                '\n' +
                '\n' +
                '\n' +
                'json.loads() 方法可以解析json字符串，结果将是Python字典。\n' +
                'json.dumps() 方法可以将Python对象转换为JSON字符串。'


        }

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


    .test_div{
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: black;
    }



    .test_div textarea{
        display: block;
        border: 1px solid #ffffff;
        outline: none;
        width: 100%;
        font-size: 16px;
        height: 500px;
        resize:none;
        margin-top: 1rem;
        font-family: inherit;
        border-radius: 2px;

    }



    /*返回上一步*/
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