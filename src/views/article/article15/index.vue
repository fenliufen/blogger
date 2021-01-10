<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>python yml文件的读写操作</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：13</span>
                    <span>分类：测试</span>
                    <span>更新时间：2020年12月30日</span>

                </p>

                <!--                <div class="tome">-->
                <!--                    <span>17</span>-->
                <!--                    <span>11</span>-->
                <!--                    <span>2020</span>-->
                <!--                </div>-->

            </div>


            <div class="zhanshi-01">
                <h1>python yml文件的读写操作 </h1>
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
                'import  yaml\n' +
                '\n' +
                '读取yml单个文件单条数据 赋值给a\n' +
                'a=yaml.safe_load(open(\'test.yml\',\'r\', encoding=\'utf-8\'))    \n' +
                'print(a[\'date\'])\n' +
                '\n' +
                '\n' +
                'yml文件数据如下：\n' +
                'data:\n' +
                '- a: 小梦\n' +
                '  b: 小0\n' +
                '  c: 阿飞\n' +
                '- a: 小梦\n' +
                '  b: 小A\n' +
                '  c: 阿飞\n' +
                '- a: 小梦\n' +
                '  b: 小A\n' +
                '  c: 阿飞\n' +
                'mydata:\n' +
                '- a: 小梦\n' +
                '  b: 小A\n' +
                '  c: 阿飞\n' +
                '\n' +
                '打印结果：\n' +
                '\n' +
                '{\'data\': [{\'a\': \'小梦\', \'b\': \'小A\', \'c\': \'阿飞\'}, {\'a\': \'小梦\', \'b\': \'小0\', \'c\': \'阿飞\'}], \'mydata\': [{\'a\': \'小梦\', \'b\': \'小A\', \'c\': \'阿飞\'}]}\n' +
                '\n' +
                '\n' +
                '写入 yml文件\n' +
                '数据如下：\n' +
                'student={"data":[{"a":"小梦","b":"小A","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小0","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小A","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小A","c":"阿飞"},\n' +
                '         {"a":"小梦","b":"小A","c":"阿飞"}],\n' +
                '         "mydata":[\n' +
                '        {"a":"小梦","b":"小A","c":"阿飞"}\n' +
                '         ]\n' +
                '         }\n' +
                '\n' +
                '\n' +
                '#写入数据\n' +
                'with open("test.yml", "w") as yaml_file:\n' +
                '    yaml.dump(student, yaml_file, default_flow_style=False, encoding=\'utf-8\', allow_unicode=True)\n' +
                '\n' +
                '\n' +
                '\n' +
                '\n' +
                '注意事项：在写入元祖的时候，可以写入，但是读不出来，读的时候会报错'

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
        height: 900px;
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