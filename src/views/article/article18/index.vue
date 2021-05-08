<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>selenium复用浏览器</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：17</span>
                    <span>分类：测试</span>
                    <span>更新时间：2021年5月08日</span>

                </p>

                <!--                <div class="tome">-->
                <!--                    <span>17</span>-->
                <!--                    <span>11</span>-->
                <!--                    <span>2020</span>-->
                <!--                </div>-->

            </div>


            <div class="zhanshi-01">
                <h1>selenium 复用游览器 </h1>
                <p class="has-line-data" data-line-start="2" data-line-end="3"></p>
                <div class="content">
                <pre><code>
                        class Base:

                            base_url=''

                            def __init__(self,webdrive: WebDriver=None):
                                #如果webdrive为空就创建个webdrive  不为空则复用一个webwebdrive
                                #复用复用同一个游览器
                                if  webdrive is None:
                                    home = webdriver.ChromeOptions()
                                    home.debugger_address = '127.0.0.1:9222'
                                    self.webdriver = webdriver.Chrome(options=home)
                                    self.webdriver.maximize_window()
                                    self.webdriver.implicitly_wait(10)

                                else:

                                    self.webdriver=webdrive

                                if self.base_url!='':

                                    self.webdriver.get(self.base_url)



                            def close(self):
                                self.webdriver.quit()

                </code></pre>
                </div>

                <p class="has-line-data" data-line-start="32" data-line-end="34">创建一个
                    Base的类，作为父类，类里边放一些公共方法，包括断言，创建webdrive，每个子类集成父类的方法，<br>
                    优点：把一下公共类的方法进行二次封装，每次都调用这个方法，以后如果框架变动的时候只需要改动一个地方，，也方便自己后续使用，让框架变的更简单使用</p>
                <p class="has-line-data" data-line-start="37" data-line-end="41">方法详解<br>
                    home = webdriver.ChromeOptions()<br>
                    home.debugger_address = ‘127.0.0.1:9222’<br>
                    开启开发者debugger模式，使用本地端口9222，需要注意，必须开启这个端口，否则会报错</p>
                <p class="has-line-data" data-line-start="42" data-line-end="47">开启本地端口<br>
                    windows 启动：（谷歌目录下启动以下命令）<br>
                    chrome --remote-debugging-port=9222<br>
                    mac 启动：<br>
                    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222</p>
                <p class="has-line-data" data-line-start="48" data-line-end="49">注意：在谷歌目录下运行命令即可，不然无法启动本地端口</p>
                <p class="has-line-data" data-line-start="51" data-line-end="53">使用 webdriver<br>
                    self.webdriver = webdriver.Chrome(options=home)</p>




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


    .content{
        width: 100%;
        margin: auto;
    }






    .title p a{
        color: #555;
        text-decoration: none;

    }




    code {
        color: #c7254e;
        background-color: #f9f2f4;
        border-radius: 4px
    }

    code,
    kbd {
        padding: 2px 4px
    }

    kbd {
        color: #fff;
        background-color: #333;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25)
    }

    kbd kbd {
        padding: 0;
        font-size: 100%;
        box-shadow: none
    }

    pre {
        display: block;
        margin: 0 0 10px;
        word-break: break-all;
        word-wrap: break-word;
        color: #333;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 4px
    }

    pre code {
        padding: 0;
        font-size: inherit;
        color: inherit;
        white-space: pre-wrap;
        background-color: transparent;
        border-radius: 0
    }

    table {
        background-color: transparent
    }

    th {
        text-align: left
    }



    .table>thead>tr>th {
        padding: 8px;
        line-height: 1.4285714;
        border-top: 1px solid #ddd
    }

    .table>thead>tr>td,
    .table>tbody>tr>th,
    .table>tbody>tr>td,
    .table>tfoot>tr>th,
    .table>tfoot>tr>td {
        padding: 8px;
        line-height: 1.4285714;
        vertical-align: top;
        border-top: 1px solid #ddd
    }

    .table>thead>tr>th {
        vertical-align: bottom;
        border-bottom: 2px solid #ddd
    }

    .table>caption+thead>tr:first-child>th,
    .table>caption+thead>tr:first-child>td,
    .table>colgroup+thead>tr:first-child>th,
    .table>colgroup+thead>tr:first-child>td,
    .table>thead:first-child>tr:first-child>th,
    .table>thead:first-child>tr:first-child>td {
        border-top: 0
    }

    .table>tbody+tbody {
        border-top: 2px solid #ddd
    }

    .table .table {
        background-color: #fff
    }

    .table-condensed>thead>tr>th,
    .table-condensed>thead>tr>td,
    .table-condensed>tbody>tr>th,
    .table-condensed>tbody>tr>td,
    .table-condensed>tfoot>tr>th,
    .table-condensed>tfoot>tr>td {
        padding: 5px
    }

    .table-bordered,
    .table-bordered>thead>tr>th,
    .table-bordered>thead>tr>td,
    .table-bordered>tbody>tr>th,
    .table-bordered>tbody>tr>td,
    .table-bordered>tfoot>tr>th,
    .table-bordered>tfoot>tr>td {
        border: 1px solid #ddd
    }

    .table-bordered>thead>tr>th,
    .table-bordered>thead>tr>td {
        border-bottom-width: 2px
    }

    .table-striped>tbody>tr:nth-child(odd)>td,
    .table-striped>tbody>tr:nth-child(odd)>th {
        background-color: #f9f9f9
    }

    .table-hover>tbody>tr:hover>td,
    .table-hover>tbody>tr:hover>th {
        background-color: #f5f5f5
    }

    table col[class*="col-"] {
        position: static;
        float: none;
        display: table-column
    }

    table td[class*="col-"],
    table th[class*="col-"] {
        position: static;
        float: none;
        display: table-cell
    }

    .table>thead>tr>td.active,
    .table>thead>tr>th.active,
    .table>thead>tr.active>td,
    .table>thead>tr.active>th,
    .table>tbody>tr>td.active,
    .table>tbody>tr>th.active,
    .table>tbody>tr.active>td,
    .table>tbody>tr.active>th,
    .table>tfoot>tr>td.active,
    .table>tfoot>tr>th.active,
    .table>tfoot>tr.active>td,
    .table>tfoot>tr.active>th {
        background-color: #f5f5f5
    }

    .table-hover>tbody>tr>td.active:hover,
    .table-hover>tbody>tr>th.active:hover,
    .table-hover>tbody>tr.active:hover>td,
    .table-hover>tbody>tr:hover>.active,
    .table-hover>tbody>tr.active:hover>th {
        background-color: #e8e8e8
    }

    .table>thead>tr>td.success,
    .table>thead>tr>th.success,
    .table>thead>tr.success>td,
    .table>thead>tr.success>th,
    .table>tbody>tr>td.success,
    .table>tbody>tr>th.success,
    .table>tbody>tr.success>td,
    .table>tbody>tr.success>th,
    .table>tfoot>tr>td.success,
    .table>tfoot>tr>th.success,
    .table>tfoot>tr.success>td,
    .table>tfoot>tr.success>th {
        background-color: #dff0d8
    }

    .table-hover>tbody>tr>td.success:hover,
    .table-hover>tbody>tr>th.success:hover,
    .table-hover>tbody>tr.success:hover>td,
    .table-hover>tbody>tr:hover>.success,
    .table-hover>tbody>tr.success:hover>th {
        background-color: #d0e9c6
    }

    .table>thead>tr>td.info,
    .table>thead>tr>th.info,
    .table>thead>tr.info>td,
    .table>thead>tr.info>th,
    .table>tbody>tr>td.info,
    .table>tbody>tr>th.info,
    .table>tbody>tr.info>td,
    .table>tbody>tr.info>th,
    .table>tfoot>tr>td.info,
    .table>tfoot>tr>th.info,
    .table>tfoot>tr.info>td,
    .table>tfoot>tr.info>th {
        background-color: #d9edf7
    }

    .table-hover>tbody>tr>td.info:hover,
    .table-hover>tbody>tr>th.info:hover,
    .table-hover>tbody>tr.info:hover>td,
    .table-hover>tbody>tr:hover>.info,
    .table-hover>tbody>tr.info:hover>th {
        background-color: #c4e3f3
    }

    .table>thead>tr>td.warning,
    .table>thead>tr>th.warning,
    .table>thead>tr.warning>td,
    .table>thead>tr.warning>th,
    .table>tbody>tr>td.warning,
    .table>tbody>tr>th.warning,
    .table>tbody>tr.warning>td,
    .table>tbody>tr.warning>th,
    .table>tfoot>tr>td.warning,
    .table>tfoot>tr>th.warning,
    .table>tfoot>tr.warning>td,
    .table>tfoot>tr.warning>th {
        background-color: #fcf8e3
    }

    .table-hover>tbody>tr>td.warning:hover,
    .table-hover>tbody>tr>th.warning:hover,
    .table-hover>tbody>tr.warning:hover>td,
    .table-hover>tbody>tr:hover>.warning,
    .table-hover>tbody>tr.warning:hover>th {
        background-color: #faf2cc
    }

    .table>thead>tr>td.danger,
    .table>thead>tr>th.danger,
    .table>thead>tr.danger>td,
    .table>thead>tr.danger>th,
    .table>tbody>tr>td.danger,
    .table>tbody>tr>th.danger,
    .table>tbody>tr.danger>td,
    .table>tbody>tr.danger>th,
    .table>tfoot>tr>td.danger,
    .table>tfoot>tr>th.danger,
    .table>tfoot>tr.danger>td,
    .table>tfoot>tr.danger>th {
        background-color: #f2dede
    }

    .table-hover>tbody>tr>td.danger:hover,
    .table-hover>tbody>tr>th.danger:hover,
    .table-hover>tbody>tr.danger:hover>td,
    .table-hover>tbody>tr:hover>.danger,
    .table-hover>tbody>tr.danger:hover>th {
        background-color: #ebcccc
    }

    fieldset {
        border: 0;
        min-width: 0
    }

    legend {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        font-size: 21px;
        line-height: inherit;
        color: #333;
        border-bottom: 1px solid #e5e5e5
    }

    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700
    }

    input[type="radio"],
    input[type="checkbox"] {
        margin: 4px 0 0;
        margin-top: 1px \9;
        line-height: normal
    }

    input[type="file"] {
        display: block
    }

    input[type="range"] {
        display: block;
        width: 100%
    }

    select[multiple],
    select[size] {
        height: auto
    }

    input[type="file"]:focus,
    input[type="radio"]:focus,
    input[type="checkbox"]:focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px
    }

    output {
        padding-top: 7px
    }

    output,
    .form-control {
        display: block;
        font-size: 14px;
        line-height: 1.4285714;
        color: #555
    }



    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
        line-height: 34px;
        line-height: 1.4285714 \0
    }

    input[type="date"].input-sm,
    .form-horizontal .form-group-sm input.form-control[type="date"],
    .input-group-sm>input.form-control[type="date"],
    .input-group-sm>input.input-group-addon[type="date"],
    .input-group-sm>.input-group-btn>input.btn[type="date"],
    input[type="time"].input-sm,
    .form-horizontal .form-group-sm input.form-control[type="time"],
    .input-group-sm>input.form-control[type="time"],
    .input-group-sm>input.input-group-addon[type="time"],
    .input-group-sm>.input-group-btn>input.btn[type="time"],
    input[type="datetime-local"].input-sm,
    .form-horizontal .form-group-sm input.form-control[type="datetime-local"],
    .input-group-sm>input.form-control[type="datetime-local"],
    .input-group-sm>input.input-group-addon[type="datetime-local"],
    .input-group-sm>.input-group-btn>input.btn[type="datetime-local"],
    input[type="month"].input-sm,
    .form-horizontal .form-group-sm input.form-control[type="month"],
    .input-group-sm>input.form-control[type="month"],
    .input-group-sm>input.input-group-addon[type="month"],
    .input-group-sm>.input-group-btn>input.btn[type="month"] {
        line-height: 30px
    }

    input[type="date"].input-lg,
    .form-horizontal .form-group-lg input.form-control[type="date"],
    .input-group-lg>input.form-control[type="date"],
    .input-group-lg>input.input-group-addon[type="date"],
    .input-group-lg>.input-group-btn>input.btn[type="date"],
    input[type="time"].input-lg,
    .form-horizontal .form-group-lg input.form-control[type="time"],
    .input-group-lg>input.form-control[type="time"],
    .input-group-lg>input.input-group-addon[type="time"],
    .input-group-lg>.input-group-btn>input.btn[type="time"],
    input[type="datetime-local"].input-lg,
    .form-horizontal .form-group-lg input.form-control[type="datetime-local"],
    .input-group-lg>input.form-control[type="datetime-local"],
    .input-group-lg>input.input-group-addon[type="datetime-local"],
    .input-group-lg>.input-group-btn>input.btn[type="datetime-local"],
    input[type="month"].input-lg,
    .form-horizontal .form-group-lg input.form-control[type="month"],
    .input-group-lg>input.form-control[type="month"],
    .input-group-lg>input.input-group-addon[type="month"],
    .input-group-lg>.input-group-btn>input.btn[type="month"] {
        line-height: 46px
    }


    .radio label,
    .checkbox label {
        padding-left: 20px;
        margin-bottom: 0;
        font-weight: 400;
        cursor: pointer
    }

    .radio input[type="radio"],
    .radio-inline input[type="radio"],
    .checkbox input[type="checkbox"],
    .checkbox-inline input[type="checkbox"] {
        position: absolute;
        margin-left: -20px;
        margin-top: 4px \9
    }


    input[type="radio"][disabled],
    input[type="radio"].disabled,
    fieldset[disabled] input[type="radio"],
    input[type="checkbox"][disabled],
    input[type="checkbox"].disabled,
    fieldset[disabled] input[type="checkbox"],
    .radio-inline.disabled,
    fieldset[disabled] .radio-inline,
    .checkbox-inline.disabled,
    fieldset[disabled] .checkbox-inline,
    .radio.disabled label,
    fieldset[disabled] .radio label,
    .checkbox.disabled label,
    fieldset[disabled] .checkbox label {
        cursor: not-allowed
    }




    .input-group-addon input[type="radio"],
    .input-group-addon input[type="checkbox"] {
        margin-top: 0
    }

    .input-group .form-control:first-child,
    .input-group-addon:first-child,
    .input-group-btn:first-child>.btn,
    .input-group-btn:first-child>.btn-group>.btn,
    .input-group-btn:first-child>.dropdown-toggle,
    .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),
    .input-group-btn:last-child>.btn-group:not(:last-child)>.btn {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0
    }

    .input-group-addon:first-child {
        border-right: 0
    }

    .input-group .form-control:last-child,
    .input-group-addon:last-child,
    .input-group-btn:last-child>.btn,
    .input-group-btn:last-child>.btn-group>.btn,
    .input-group-btn:last-child>.dropdown-toggle,
    .input-group-btn:first-child>.btn:not(:first-child),
    .input-group-btn:first-child>.btn-group:not(:first-child)>.btn {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0
    }

    .input-group-addon:last-child {
        border-left: 0
    }

    .input-group-btn {
        font-size: 0;
        white-space: nowrap
    }

    .input-group-btn,
    .input-group-btn>.btn {
        position: relative
    }

    .input-group-btn>.btn+.btn {
        margin-left: -1px
    }

    .input-group-btn>.btn:hover,
    .input-group-btn>.btn:focus,
    .input-group-btn>.btn:active {
        z-index: 2
    }

    .input-group-btn:first-child>.btn,
    .input-group-btn:first-child>.btn-group {
        margin-right: -1px
    }

    .input-group-btn:last-child>.btn,
    .input-group-btn:last-child>.btn-group {
        margin-left: -1px
    }

    .pagination {
        display: inline-block;
        padding-left: 0;
        margin: 20px 0;
        border-radius: 4px
    }

    .pagination>li {
        display: inline
    }

    .pagination>li>a,
    .pagination>li>span {
        position: relative;
        float: left;
        padding: 6px 12px;
        line-height: 1.4285714;
        text-decoration: none;
        color: #428bca;
        background-color: #fff;
        border: 1px solid #ddd;
        margin-left: -1px
    }

    .pagination>li:first-child>a,
    .pagination>li:first-child>span {
        margin-left: 0;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px
    }

    .pagination>li:last-child>a,
    .pagination>li:last-child>span {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px
    }

    .pagination>li>a:hover,
    .pagination>li>a:focus,
    .pagination>li>span:hover,
    .pagination>li>span:focus {
        color: #2a6496;
        background-color: #eee;
        border-color: #ddd
    }

    .pagination>.active>a,
    .pagination>.active>a:hover,
    .pagination>.active>a:focus,
    .pagination>.active>span,
    .pagination>.active>span:hover,
    .pagination>.active>span:focus {
        z-index: 2;
        color: #fff;
        background-color: #428bca;
        border-color: #428bca;
        cursor: default
    }

    .pagination>.disabled>span,
    .pagination>.disabled>span:hover,
    .pagination>.disabled>span:focus,
    .pagination>.disabled>a,
    .pagination>.disabled>a:hover,
    .pagination>.disabled>a:focus {
        color: #777;
        background-color: #fff;
        border-color: #ddd;
        cursor: not-allowed
    }

    .pagination-lg>li>a,
    .pagination-lg>li>span {
        padding: 10px 16px;
        font-size: 18px
    }

    .pagination-lg>li:first-child>a,
    .pagination-lg>li:first-child>span {
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px
    }

    .pagination-lg>li:last-child>a,
    .pagination-lg>li:last-child>span {
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px
    }

    .pagination-sm>li>a,
    .pagination-sm>li>span {
        padding: 5px 10px;
        font-size: 12px
    }

    .pagination-sm>li:first-child>a,
    .pagination-sm>li:first-child>span {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px
    }

    .pagination-sm>li:last-child>a,
    .pagination-sm>li:last-child>span {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px
    }


    .modal.fade .modal-dialog {
        transform: translate3d(0, -25%, 0);
        transition: transform .3s ease-out
    }

    .modal.in .modal-dialog {
        transform: translate3d(0, 0, 0)
    }

    .modal-open .modal {
        overflow-x: hidden;
        overflow-y: auto
    }





    *,
    *:before,
    *:after {
        box-sizing: border-box
    }

    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section,
    summary {
        display: block
    }

    audio,
    canvas,
    progress,
    video {
        display: inline-block;
        vertical-align: baseline
    }

    audio:not([controls]) {
        display: none;
        height: 0
    }

    [hidden],
    template {
        display: none
    }

    a {
        background: 0 0
    }

    a:active,
    a:hover {
        outline: 0
    }

    abbr[title] {
        border-bottom: 1px dotted
    }

    b,
    strong {
        font-weight: 700
    }

    dfn {
        font-style: italic
    }

    h1 {
        margin: .67em 0
    }

    mark {
        background: #ff0;
        color: #000
    }

    small {
        font-size: 80%
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline
    }

    sup {
        top: -.5em
    }

    sub {
        bottom: -.25em
    }

    images {
        border: 0
    }

    svg:not(:root) {
        overflow: hidden
    }

    figure {
        margin: 1em 40px
    }

    hr {
        box-sizing: content-box;
        height: 0
    }

    pre {
        overflow: auto
    }

    code,
    kbd {
        font-size: 1em
    }

    code,
    kbd,
    pre,
    samp {
        font-family: monospace, monospace
    }

    samp {
        font-size: 1em
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font: inherit;
        margin: 0
    }

    button {
        overflow: visible
    }

    button,
    select {
        text-transform: none
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button;
        cursor: pointer
    }

    button[disabled],
    html input[disabled] {
        cursor: default
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0
    }

    input {
        line-height: normal
    }

    input[type="checkbox"],
    input[type="radio"] {
        box-sizing: border-box;
        padding: 0;
        margin-right: 5px
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        height: auto
    }

    input[type="search"] {
        -webkit-appearance: textfield;
        box-sizing: content-box
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none
    }

    fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: .35em .625em .75em
    }

    legend {
        border: 0;
        padding: 0
    }

    textarea {
        overflow: auto
    }

    optgroup {
        font-weight: 700
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }



    html {
        font-size: .875em;
        background: #fff;
        color: #373D49
    }

    html,
    body {
        font-family: Georgia, Cambria, serif;
        height: 100%
    }

    body {
        font-size: 1rem;
        font-weight: 400;
        line-height: 2rem
    }

    ul,
    ol {
        margin-bottom: .83999rem;
        padding-top: .16001rem
    }

    li {
        font-feature-settings: 'kern'1, 'onum'1, 'liga'1;
        margin-left: 1rem
    }

    li>ul,
    li>ol {
        margin-bottom: 0
    }

    p {
        padding-top: .66001rem;
        font-feature-settings: 'kern'1, 'onum'1, 'liga'1;
        margin-top: 0
    }

    p,
    pre {
        margin-bottom: 1.33999rem
    }

    pre {
        font-size: 1rem;
        padding: .66001rem 9.5px 9.5px;
        line-height: 2rem;
        background: linear-gradient(to bottom, #fff 0, #fff .75rem, #f5f7fa .75rem, #f5f7fa 2.75rem, #fff 2.75rem, #fff 4rem);
        background-size: 100% 4rem;
        border-color: #D3DAEA
    }

    blockquote {
        margin: 0
    }

    blockquote p {
        font-size: 1rem;
        margin-bottom: .33999rem;
        font-style: italic;
        padding: .66001rem 1rem 1rem;
        border-left: 3px solid #A0AABF
    }

    th,
    td {
        padding: 12px
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-feature-settings: 'dlig'1, 'liga'1, 'lnum'1, 'kern'1;
        font-style: normal;
        font-weight: 600;
        margin-top: 0
    }

    h1 {
        line-height: 3rem;
        font-size: 2.0571429rem;
        margin-bottom: .21999rem;
        padding-top: .78001rem
    }

    h2 {
        font-size: 1.953125rem;
        margin-bottom: .1835837rem;
        padding-top: .8164163rem
    }

    h2,
    h3 {
        line-height: 3rem
    }

    h3 {
        font-size: 1.6457143rem;
        margin-bottom: .07599rem;
        padding-top: .92401rem
    }

    h4 {
        font-size: 1.5625rem;
        margin-bottom: .546865rem;
        padding-top: .453135rem
    }

    h5 {
        font-size: 1.25rem;
        margin-bottom: -.56251rem;
        padding-top: .56251rem
    }

    h6 {
        font-size: 1rem;
        margin-bottom: -.65001rem;
        padding-top: .65001rem
    }

    a {
        cursor: pointer;
        color: #35D7BB;
        text-decoration: none
    }

    a:hover,
    a:focus {
        border-bottom-color: #35D7BB;
        color: #dff9f4
    }

    img {
        height: auto;
        max-width: 100%
    }

    dt {
        font-style: italic;
        font-weight: 600
    }





    .splashscreen p {
        font-size: 1.25rem;
        padding-top: .56251rem;
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
        color: #FFF
    }


    .open-menu .page {
        left: 270px
    }

    .title {
        line-height: 1rem;
        font-size: .8rem;
        margin-bottom: .77999rem;
        padding-top: .22001rem;
        font-weight: 500;
        color: #A0AABF;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 1rem
    }

    .split-preview .title {
        padding-left: 0
    }




    .icon svg {
        display: inline-block;
        margin-left: auto;
        margin-right: auto
    }



    .icon-settings svg {
        width: 18px;
        height: 18px
    }




    .navbar-brand svg {
        width: 85px;
        height: 11px
    }


    .menu a {
        border: 0;
        color: #A0AABF;
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        outline: none;
        text-transform: uppercase
    }

    .menu a:hover {
        color: #35D7BB
    }

    .menu .menu-item {
        border: 0;
        display: none;
        float: left;
        margin: 0;
        position: relative
    }

    .menu .menu-item>a {
        display: block;
        font-size: 12px;
        height: 51px;
        letter-spacing: 1px;
        line-height: 51px;
        padding: 0 24px
    }

    .menu .menu-item--settings,
    .menu .menu-item--preview,
    .menu .menu-item--save-to.in-sidebar,
    .menu .menu-item--import-from.in-sidebar,
    .menu .menu-item--link-unlink.in-sidebar,
    .menu .menu-item--documents.in-sidebar {
        display: block
    }

    .menu .menu-item--documents {
        padding-bottom: 1rem
    }

    .menu .menu-item.open>a {
        background-color: #1D212A
    }

    .menu .menu-item-icon>a {
        height: auto;
        padding: 0
    }

    .menu .menu-item-icon:hover>a {
        background-color: transparent
    }

    .menu .menu-link.open i {
        background-color: #1D212A
    }

    .menu .menu-link.open g {
        fill: #35D7BB
    }

    .menu .menu-link-preview,
    .menu .menu-link-settings {
        margin-top: 8px;
        width: 51px
    }


    .menu-sidebar .menu-item {
        float: none;
        margin-bottom: 1px;
        width: 100%
    }

    .menu-sidebar .menu-item.open>a {
        background-color: #373D49
    }

    .menu-sidebar .open .caret {
        transform: rotate(180deg)
    }

    .menu-sidebar>.menu-item:hover .dropdown a,
    .menu-sidebar>.menu-item:hover .settings a {
        background-color: transparent
    }

    .menu-sidebar .menu-link {
        background-color: #373D49;
        font-weight: 600
    }

    .menu-sidebar .menu-link:after {
        content: "";
        display: table;
        clear: both
    }

    .menu-sidebar .menu-link>span {
        float: left
    }

    .menu-sidebar .menu-link>.caret {
        float: right;
        text-align: right;
        top: 22px
    }

    .menu-sidebar .dropdown,
    .menu-sidebar .settings {
        background-color: transparent;
        position: static;
        width: 100%
    }


    .dropdown li {
        margin: 32px 0;
        padding: 0 0 0 32px
    }

    .dropdown li,
    .settings li {
        line-height: 1
    }

    .sidebar-list li {
        line-height: 1;
        margin: 32px 0;
        padding: 0 0 0 32px
    }

    .dropdown a {
        color: #D0D6E2
    }

    .dropdown a,
    .settings a,
    .sidebar-list a {
        display: block;
        text-transform: none
    }

    .sidebar-list a {
        color: #D0D6E2
    }

    .dropdown a:after,
    .settings a:after,
    .sidebar-list a:after {
        content: "";
        display: table;
        clear: both
    }

    .dropdown .icon,
    .settings .icon,
    .sidebar-list .icon {
        float: right
    }

    .open .dropdown,
    .open .settings,
    .open .sidebar-list {
        display: block
    }

    .open .dropdown.collapse,
    .open .collapse.settings,
    .open .sidebar-list.collapse {
        display: none
    }

    .open .dropdown.collapse.in,
    .open .collapse.in.settings,
    .open .sidebar-list.collapse.in {
        display: block
    }

    .dropdown .unlinked .icon,
    .settings .unlinked .icon,
    .sidebar-list .unlinked .icon {
        opacity: .3
    }

    .dropdown.documents li,
    .documents.settings li,
    .sidebar-list.documents li {

        background-position: 240px center;
        background-repeat: no-repeat;
        background-size: 14px 16px;
        padding: 3px 32px
    }

    .dropdown.documents li.octocat,
    .documents.settings li.octocat,
    .sidebar-list.documents li.octocat {

        background-position: 234px center;
        background-size: 24px 24px
    }

    .dropdown.documents li:last-child,
    .documents.settings li:last-child,
    .sidebar-list.documents li:last-child {
        margin-bottom: 1rem
    }

    .dropdown.documents li.active a,
    .documents.settings li.active a,
    .sidebar-list.documents li.active a {
        color: #35D7BB
    }


    .show-settings .settings {
        display: block
    }

    .settings .has-checkbox {
        float: left
    }

    .settings form {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .settings input {
        width: 20%
    }

    .settings a {
        font-size: 1.25rem;
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 28px;
        color: #D0D6E2
    }

    .settings a:after {
        content: "";
        display: table;
        clear: both
    }

    .settings a:hover {
        color: #35D7BB
    }

    .settings li {
        border-bottom: 1px solid #4F535B;
        margin: 0;
        padding: 16px 0
    }

    .settings li:last-child {
        border-bottom: none
    }


    .brand:hover g {
        fill: #35D7BB
    }


    .toggle span:after,
    .toggle span:before {
        content: '';
        left: 0;
        position: absolute;
        top: -6px
    }

    .toggle span:after {
        top: 6px
    }

    .toggle span {
        display: block;
        position: relative
    }

    .toggle span,
    .toggle span:after,
    .toggle span:before {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: #D3DAEA;
        height: 2px;
        transition: all .3s;
        width: 20px
    }

    .open-menu .toggle span {
        background-color: transparent
    }

    .open-menu .toggle span:before {
        transform: rotate(45deg) translate(3px, 3px)
    }

    .open-menu .toggle span:after {
        transform: rotate(-45deg) translate(5px, -6px)
    }


    .words span,
    .characters span {
        color: #A0AABF
    }

    .words .counter,
    .characters .counter {
        color: #000
    }

    .words+.characters {
        top: 22px
    }





    .show-settings .overlay {
        visibility: visible;
        opacity: 1
    }



    .switch input {
        display: none
    }

    .switch small {
        display: inline-block;
        cursor: pointer;
        padding: 0 24px 0 0;
        transition: all ease .2s;
        background-color: #2B2F36;
        border-color: #2B2F36
    }

    .switch small,
    .switch small:before {
        border-radius: 30px;
        box-shadow: inset 0 0 2px 0 #14171F
    }

    .switch small:before {
        display: block;
        content: '';
        width: 28px;
        height: 28px;
        background: #fff
    }

    .switch.checked small {
        padding-right: 0;
        padding-left: 24px;
        background-color: #35D7BB;
        box-shadow: none
    }

    .modal--dillinger.about .modal-dialog {
        font-size: 1.25rem;
        max-width: 500px
    }

    .modal--dillinger.scope .modal-dialog {
        max-width: 300px;
        margin: 5rem auto
    }

    .modal--dillinger .modal-dialog {
        max-width: 600px;
        width: auto;
        margin: 5rem auto
    }

    .modal--dillinger .modal-content {
        background: #373D49;
        border-radius: 3px;
        box-shadow: 0 2px 5px 0 #2C3B59;
        color: #fff;
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        padding: 2rem
    }

    .modal--dillinger ul {
        list-style-type: disc;
        margin: 1rem 0;
        padding: 0 0 0 1rem
    }

    .modal--dillinger li {
        padding: 0;
        margin: 0
    }

    .modal--dillinger .modal-header {
        border: 0;
        padding: 0
    }

    .modal--dillinger .modal-body {
        padding: 0
    }

    .modal--dillinger .modal-footer {
        border: 0;
        padding: 0
    }

    .modal--dillinger .close {
        color: #fff;
        opacity: 1
    }


    .pagination--dillinger li {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-align: center
    }

    .pagination--dillinger li:first-child>a,
    .pagination--dillinger li.disabled>a,
    .pagination--dillinger li.disabled>a:hover,
    .pagination--dillinger li.disabled>a:focus,
    .pagination--dillinger li>a {
        background-color: transparent;
        border-color: #4F535B;
        border-right-color: transparent
    }

    .pagination--dillinger li.active>a,
    .pagination--dillinger li.active>a:hover,
    .pagination--dillinger li.active>a:focus {
        border-color: #4A5261;
        background-color: #4A5261;
        color: #fff
    }

    .pagination--dillinger li>a {
        float: none;
        color: #fff;
        width: 100%;
        display: block;
        text-align: center;
        margin: 0;
        border-right-color: transparent;
        padding: 6px
    }

    .pagination--dillinger li>a:hover,
    .pagination--dillinger li>a:focus {
        border-color: #35D7BB;
        background-color: #35D7BB;
        color: #fff
    }

    .pagination--dillinger li:last-child a {
        border-color: #4F535B
    }

    .pagination--dillinger li:first-child a {
        border-right-color: transparent
    }



    #_default_ a::before {
        color: #A0AABF
    }

    #_default_ img {
        display: none
    }

    #_default_ #_default_ {
        display: block;
        float: left;
        max-width: 38%;
        word-wrap: break-word
    }

    #_default_ .default-ad {
        display: none
    }

    #_default_ ._default_ {
        display: block
    }

    #_default_ a {
        color: #35d7bb;
        text-decoration: none
    }

    #_default_ a:hover {
        color: #8ae8d8
    }

    #_default_ .default-image {
        display: none
    }

    #_default_ .default-title:after {
        content: " — "
    }

    #_default_ .default-title,
    #_default_ .default-text,
    #_default_ .default-description {
        display: inline
    }

    #_default_ .default-title {
        position: relative;
        font-weight: 600;
        display: none
    }

    #_default_ a:before {
        position: relative;
        top: 0;
        padding: 5px;
        color: #a0aabf;
        content: "Ad";
        text-transform: uppercase;
        font-size: 8px;
        font-family: Verdana, sans-serif
    }

    #_default_ {
        display: block;
        float: left;
        max-width: 38%;
        word-wrap: break-word
    }

    #_default_ ._default_ {
        display: block;
        font-size: .75rem;
        height: 51px;
        letter-spacing: 1px;
        line-height: 1rem;
        padding: 18px 24px
    }

    body {
        max-width: 1024px;
        margin: 0 auto;
        overflow: auto;
        padding: 2%
    }


    .show-preview .split-editor {
        display: none
    }



    .show-preview .split-preview {
        display: block
    }



    #editor .ace_gutter {
        -webkit-font-smoothing: antialiased
    }



    .editor-header .title {
        display: inline-block
    }



    .preview-html a {
        color: #A0AABF;
        text-decoration: underline
    }






    @media screen and (min-width:27.5em) {
        html {
            font-size: .875em
        }

        body {
            font-size: 1rem
        }

        ul,
        ol {
            margin-bottom: .83999rem;
            padding-top: .16001rem
        }

        p {
            padding-top: .66001rem
        }

        p,
        pre {
            margin-bottom: 1.33999rem
        }

        pre,
        blockquote p {
            font-size: 1rem;
            padding-top: .66001rem
        }

        blockquote p {
            margin-bottom: .33999rem
        }

        h1 {
            font-size: 2.0571429rem;
            margin-bottom: .21999rem;
            padding-top: .78001rem
        }

        h2 {
            font-size: 1.953125rem;
            margin-bottom: .1835837rem;
            padding-top: .8164163rem
        }

        h3 {
            font-size: 1.6457143rem;
            margin-bottom: .07599rem;
            padding-top: .92401rem
        }

        h4 {
            font-size: 1.5625rem;
            margin-bottom: .546865rem;
            padding-top: .453135rem
        }

        h5 {
            font-size: 1.25rem;
            margin-bottom: -.56251rem;
            padding-top: .56251rem
        }

        h6 {
            font-size: 1rem;
            margin-bottom: -.65001rem;
            padding-top: .65001rem
        }



        .splashscreen p {
            font-size: 1.25rem;
            margin-bottom: 1.43749rem;
            padding-top: .56251rem
        }

        .title {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }



        .modal--dillinger.about .modal-dialog,
        #zen {
            font-size: 1.25rem
        }

        #zen {
            width: 400px
        }

        #editor {
            font-size: 1rem
        }
    }

    @media screen and (min-width:46.25em) {
        html {
            font-size: .875em
        }

        body {
            font-size: 1rem
        }

        ul,
        ol {
            margin-bottom: .83999rem;
            padding-top: .16001rem
        }

        p {
            padding-top: .66001rem
        }

        p,
        pre {
            margin-bottom: 1.33999rem
        }

        pre,
        blockquote p {
            font-size: 1rem;
            padding-top: .66001rem
        }

        blockquote p {
            margin-bottom: .33999rem
        }

        h1 {
            font-size: 2.0571429rem;
            margin-bottom: .21999rem;
            padding-top: .78001rem
        }

        h2 {
            font-size: 1.953125rem;
            margin-bottom: .1835837rem;
            padding-top: .8164163rem
        }

        h3 {
            font-size: 1.6457143rem;
            margin-bottom: .07599rem;
            padding-top: .92401rem
        }

        h4 {
            font-size: 1.5625rem;
            margin-bottom: .546865rem;
            padding-top: .453135rem
        }

        h5 {
            font-size: 1.25rem;
            margin-bottom: -.56251rem;
            padding-top: .56251rem
        }

        h6 {
            font-size: 1rem;
            margin-bottom: -.65001rem;
            padding-top: .65001rem
        }

        .g {
            margin-left: -16px;
            margin-right: -16px
        }

        .g-b {
            padding-left: 16px;
            padding-right: 16px
        }

        .g-b--t1of1 {
            width: 100%
        }

        .g-b--t1of2,
        .g-b--t2of4,
        .g-b--t3of6,
        .g-b--t4of8,
        .g-b--t5of10,
        .g-b--t6of12 {
            width: 50%
        }

        .g-b--t1of3,
        .g-b--t2of6,
        .g-b--t4of12 {
            width: 33.333%
        }

        .g-b--t2of3,
        .g-b--t4of6,
        .g-b--t8of12 {
            width: 66.666%
        }

        .g-b--t1of4,
        .g-b--t2of8,
        .g-b--t3of12 {
            width: 25%
        }

        .g-b--t3of4,
        .g-b--t6of8,
        .g-b--t9of12 {
            width: 75%
        }

        .g-b--t1of5,
        .g-b--t2of10 {
            width: 20%
        }

        .g-b--t2of5,
        .g-b--t4of10 {
            width: 40%
        }

        .g-b--t3of5,
        .g-b--t6of10 {
            width: 60%
        }

        .g-b--t4of5,
        .g-b--t8of10 {
            width: 80%
        }

        .g-b--t1of6,
        .g-b--t2of12 {
            width: 16.666%
        }

        .g-b--t5of6,
        .g-b--t10of12 {
            width: 83.333%
        }

        .g-b--t1of8 {
            width: 12.5%
        }

        .g-b--t3of8 {
            width: 37.5%
        }

        .g-b--t5of8 {
            width: 62.5%
        }

        .g-b--t7of8 {
            width: 87.5%
        }

        .g-b--t1of10 {
            width: 10%
        }

        .g-b--t3of10 {
            width: 30%
        }

        .g-b--t7of10 {
            width: 70%
        }

        .g-b--t9of10 {
            width: 90%
        }

        .g-b--t1of12 {
            width: 8.333%
        }

        .g-b--t5of12 {
            width: 41.666%
        }

        .g-b--t7of12 {
            width: 58.333%
        }

        .g-b--t11of12 {
            width: 91.666%
        }

        .g-b--push--t1of1 {
            margin-left: 100%
        }

        .g-b--push--t1of2,
        .g-b--push--t2of4,
        .g-b--push--t3of6,
        .g-b--push--t4of8,
        .g-b--push--t5of10,
        .g-b--push--t6of12 {
            margin-left: 50%
        }

        .g-b--push--t1of3,
        .g-b--push--t2of6,
        .g-b--push--t4of12 {
            margin-left: 33.333%
        }

        .g-b--push--t2of3,
        .g-b--push--t4of6,
        .g-b--push--t8of12 {
            margin-left: 66.666%
        }

        .g-b--push--t1of4,
        .g-b--push--t2of8,
        .g-b--push--t3of12 {
            margin-left: 25%
        }

        .g-b--push--t3of4,
        .g-b--push--t6of8,
        .g-b--push--t9of12 {
            margin-left: 75%
        }

        .g-b--push--t1of5,
        .g-b--push--t2of10 {
            margin-left: 20%
        }

        .g-b--push--t2of5,
        .g-b--push--t4of10 {
            margin-left: 40%
        }

        .g-b--push--t3of5,
        .g-b--push--t6of10 {
            margin-left: 60%
        }

        .g-b--push--t4of5,
        .g-b--push--t8of10 {
            margin-left: 80%
        }

        .g-b--push--t1of6,
        .g-b--push--t2of12 {
            margin-left: 16.666%
        }

        .g-b--push--t5of6,
        .g-b--push--t10of12 {
            margin-left: 83.333%
        }

        .g-b--push--t1of8 {
            margin-left: 12.5%
        }

        .g-b--push--t3of8 {
            margin-left: 37.5%
        }

        .g-b--push--t5of8 {
            margin-left: 62.5%
        }

        .g-b--push--t7of8 {
            margin-left: 87.5%
        }

        .g-b--push--t1of10 {
            margin-left: 10%
        }

        .g-b--push--t3of10 {
            margin-left: 30%
        }

        .g-b--push--t7of10 {
            margin-left: 70%
        }

        .g-b--push--t9of10 {
            margin-left: 90%
        }

        .g-b--push--t1of12 {
            margin-left: 8.333%
        }

        .g-b--push--t5of12 {
            margin-left: 41.666%
        }

        .g-b--push--t7of12 {
            margin-left: 58.333%
        }

        .g-b--push--t11of12 {
            margin-left: 91.666%
        }

        .g-b--pull--t1of1 {
            margin-right: 100%
        }

        .g-b--pull--t1of2,
        .g-b--pull--t2of4,
        .g-b--pull--t3of6,
        .g-b--pull--t4of8,
        .g-b--pull--t5of10,
        .g-b--pull--t6of12 {
            margin-right: 50%
        }

        .g-b--pull--t1of3,
        .g-b--pull--t2of6,
        .g-b--pull--t4of12 {
            margin-right: 33.333%
        }

        .g-b--pull--t2of3,
        .g-b--pull--t4of6,
        .g-b--pull--t8of12 {
            margin-right: 66.666%
        }

        .g-b--pull--t1of4,
        .g-b--pull--t2of8,
        .g-b--pull--t3of12 {
            margin-right: 25%
        }

        .g-b--pull--t3of4,
        .g-b--pull--t6of8,
        .g-b--pull--t9of12 {
            margin-right: 75%
        }

        .g-b--pull--t1of5,
        .g-b--pull--t2of10 {
            margin-right: 20%
        }

        .g-b--pull--t2of5,
        .g-b--pull--t4of10 {
            margin-right: 40%
        }

        .g-b--pull--t3of5,
        .g-b--pull--t6of10 {
            margin-right: 60%
        }

        .g-b--pull--t4of5,
        .g-b--pull--t8of10 {
            margin-right: 80%
        }

        .g-b--pull--t1of6,
        .g-b--pull--t2of12 {
            margin-right: 16.666%
        }

        .g-b--pull--t5of6,
        .g-b--pull--t10of12 {
            margin-right: 83.333%
        }

        .g-b--pull--t1of8 {
            margin-right: 12.5%
        }

        .g-b--pull--t3of8 {
            margin-right: 37.5%
        }

        .g-b--pull--t5of8 {
            margin-right: 62.5%
        }

        .g-b--pull--t7of8 {
            margin-right: 87.5%
        }

        .g-b--pull--t1of10 {
            margin-right: 10%
        }

        .g-b--pull--t3of10 {
            margin-right: 30%
        }

        .g-b--pull--t7of10 {
            margin-right: 70%
        }

        .g-b--pull--t9of10 {
            margin-right: 90%
        }

        .g-b--pull--t1of12 {
            margin-right: 8.333%
        }

        .g-b--pull--t5of12 {
            margin-right: 41.666%
        }

        .g-b--pull--t7of12 {
            margin-right: 58.333%
        }

        .g-b--pull--t11of12 {
            margin-right: 91.666%
        }

        .splashscreen-dillinger {
            width: 500px
        }

        .splashscreen p {
            font-size: 1.25rem;
            margin-bottom: 1.43749rem;
            padding-top: .56251rem
        }

        .title {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }

        .title-document {
            font-size: 1.25rem;
            margin-bottom: .89999rem;
            padding-top: .10001rem
        }

        .menu .menu-item--save-to,
        .menu .menu-item--import-from {
            display: block
        }

        .menu .menu-item--preview,
        .menu .menu-item--save-to.in-sidebar,
        .menu .menu-item--import-from.in-sidebar {
            display: none
        }

        .settings a {
            font-size: 1.25rem
        }

        .words,
        .characters {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }

        .modal--dillinger.about .modal-dialog {
            font-size: 1.25rem
        }

        .enter-zen-mode {
            display: block
        }

        .close-zen-mode {
            right: 3rem;
            top: 3rem
        }

        #zen {
            font-size: 1.25rem;
            width: 500px
        }

        .split-editor {
            border-right: 1px solid #E8E8E8;
            float: left;
            padding-right: 16px;
            width: 50%
        }

        .show-preview .split-editor {
            display: block
        }

        .split-preview {
            display: block;
            float: right;
            position: relative;
            top: 0;
            width: 50%
        }

        #editor {
            font-size: 1rem
        }

        .preview-mode-toggle-src,
        .preview-mode-toggle-html {
            display: block
        }
    }

    @media screen and (min-width:62.5em) {
        html {
            font-size: .875em
        }

        body {
            font-size: 1rem
        }

        ul,
        ol {
            margin-bottom: .83999rem;
            padding-top: .16001rem
        }

        p {
            padding-top: .66001rem
        }

        p,
        pre {
            margin-bottom: 1.33999rem
        }

        pre,
        blockquote p {
            font-size: 1rem;
            padding-top: .66001rem
        }

        blockquote p {
            margin-bottom: .33999rem
        }

        h1 {
            font-size: 2.0571429rem;
            margin-bottom: .21999rem;
            padding-top: .78001rem
        }

        h2 {
            font-size: 1.953125rem;
            margin-bottom: .1835837rem;
            padding-top: .8164163rem
        }

        h3 {
            font-size: 1.6457143rem;
            margin-bottom: .07599rem;
            padding-top: .92401rem
        }

        h4 {
            font-size: 1.5625rem;
            margin-bottom: .546865rem;
            padding-top: .453135rem
        }

        h5 {
            font-size: 1.25rem;
            margin-bottom: -.56251rem;
            padding-top: .56251rem
        }

        h6 {
            font-size: 1rem;
            margin-bottom: -.65001rem;
            padding-top: .65001rem
        }

        .g {
            margin-left: -16px;
            margin-right: -16px
        }

        .g-b {
            padding-left: 16px;
            padding-right: 16px
        }

        .g-b--d1of1 {
            width: 100%
        }

        .g-b--d1of2,
        .g-b--d2of4,
        .g-b--d3of6,
        .g-b--d4of8,
        .g-b--d5of10,
        .g-b--d6of12 {
            width: 50%
        }

        .g-b--d1of3,
        .g-b--d2of6,
        .g-b--d4of12 {
            width: 33.333%
        }

        .g-b--d2of3,
        .g-b--d4of6,
        .g-b--d8of12 {
            width: 66.666%
        }

        .g-b--d1of4,
        .g-b--d2of8,
        .g-b--d3of12 {
            width: 25%
        }

        .g-b--d3of4,
        .g-b--d6of8,
        .g-b--d9of12 {
            width: 75%
        }

        .g-b--d1of5,
        .g-b--d2of10 {
            width: 20%
        }

        .g-b--d2of5,
        .g-b--d4of10 {
            width: 40%
        }

        .g-b--d3of5,
        .g-b--d6of10 {
            width: 60%
        }

        .g-b--d4of5,
        .g-b--d8of10 {
            width: 80%
        }

        .g-b--d1of6,
        .g-b--d2of12 {
            width: 16.666%
        }

        .g-b--d5of6,
        .g-b--d10of12 {
            width: 83.333%
        }

        .g-b--d1of8 {
            width: 12.5%
        }

        .g-b--d3of8 {
            width: 37.5%
        }

        .g-b--d5of8 {
            width: 62.5%
        }

        .g-b--d7of8 {
            width: 87.5%
        }

        .g-b--d1of10 {
            width: 10%
        }

        .g-b--d3of10 {
            width: 30%
        }

        .g-b--d7of10 {
            width: 70%
        }

        .g-b--d9of10 {
            width: 90%
        }

        .g-b--d1of12 {
            width: 8.333%
        }

        .g-b--d5of12 {
            width: 41.666%
        }

        .g-b--d7of12 {
            width: 58.333%
        }

        .g-b--d11of12 {
            width: 91.666%
        }

        .g-b--push--d1of1 {
            margin-left: 100%
        }

        .g-b--push--d1of2,
        .g-b--push--d2of4,
        .g-b--push--d3of6,
        .g-b--push--d4of8,
        .g-b--push--d5of10,
        .g-b--push--d6of12 {
            margin-left: 50%
        }

        .g-b--push--d1of3,
        .g-b--push--d2of6,
        .g-b--push--d4of12 {
            margin-left: 33.333%
        }

        .g-b--push--d2of3,
        .g-b--push--d4of6,
        .g-b--push--d8of12 {
            margin-left: 66.666%
        }

        .g-b--push--d1of4,
        .g-b--push--d2of8,
        .g-b--push--d3of12 {
            margin-left: 25%
        }

        .g-b--push--d3of4,
        .g-b--push--d6of8,
        .g-b--push--d9of12 {
            margin-left: 75%
        }

        .g-b--push--d1of5,
        .g-b--push--d2of10 {
            margin-left: 20%
        }

        .g-b--push--d2of5,
        .g-b--push--d4of10 {
            margin-left: 40%
        }

        .g-b--push--d3of5,
        .g-b--push--d6of10 {
            margin-left: 60%
        }

        .g-b--push--d4of5,
        .g-b--push--d8of10 {
            margin-left: 80%
        }

        .g-b--push--d1of6,
        .g-b--push--d2of12 {
            margin-left: 16.666%
        }

        .g-b--push--d5of6,
        .g-b--push--d10of12 {
            margin-left: 83.333%
        }

        .g-b--push--d1of8 {
            margin-left: 12.5%
        }

        .g-b--push--d3of8 {
            margin-left: 37.5%
        }

        .g-b--push--d5of8 {
            margin-left: 62.5%
        }

        .g-b--push--d7of8 {
            margin-left: 87.5%
        }

        .g-b--push--d1of10 {
            margin-left: 10%
        }

        .g-b--push--d3of10 {
            margin-left: 30%
        }

        .g-b--push--d7of10 {
            margin-left: 70%
        }

        .g-b--push--d9of10 {
            margin-left: 90%
        }

        .g-b--push--d1of12 {
            margin-left: 8.333%
        }

        .g-b--push--d5of12 {
            margin-left: 41.666%
        }

        .g-b--push--d7of12 {
            margin-left: 58.333%
        }

        .g-b--push--d11of12 {
            margin-left: 91.666%
        }

        .g-b--pull--d1of1 {
            margin-right: 100%
        }

        .g-b--pull--d1of2,
        .g-b--pull--d2of4,
        .g-b--pull--d3of6,
        .g-b--pull--d4of8,
        .g-b--pull--d5of10,
        .g-b--pull--d6of12 {
            margin-right: 50%
        }

        .g-b--pull--d1of3,
        .g-b--pull--d2of6,
        .g-b--pull--d4of12 {
            margin-right: 33.333%
        }

        .g-b--pull--d2of3,
        .g-b--pull--d4of6,
        .g-b--pull--d8of12 {
            margin-right: 66.666%
        }

        .g-b--pull--d1of4,
        .g-b--pull--d2of8,
        .g-b--pull--d3of12 {
            margin-right: 25%
        }

        .g-b--pull--d3of4,
        .g-b--pull--d6of8,
        .g-b--pull--d9of12 {
            margin-right: 75%
        }

        .g-b--pull--d1of5,
        .g-b--pull--d2of10 {
            margin-right: 20%
        }

        .g-b--pull--d2of5,
        .g-b--pull--d4of10 {
            margin-right: 40%
        }

        .g-b--pull--d3of5,
        .g-b--pull--d6of10 {
            margin-right: 60%
        }

        .g-b--pull--d4of5,
        .g-b--pull--d8of10 {
            margin-right: 80%
        }

        .g-b--pull--d1of6,
        .g-b--pull--d2of12 {
            margin-right: 16.666%
        }

        .g-b--pull--d5of6,
        .g-b--pull--d10of12 {
            margin-right: 83.333%
        }

        .g-b--pull--d1of8 {
            margin-right: 12.5%
        }

        .g-b--pull--d3of8 {
            margin-right: 37.5%
        }

        .g-b--pull--d5of8 {
            margin-right: 62.5%
        }

        .g-b--pull--d7of8 {
            margin-right: 87.5%
        }

        .g-b--pull--d1of10 {
            margin-right: 10%
        }

        .g-b--pull--d3of10 {
            margin-right: 30%
        }

        .g-b--pull--d7of10 {
            margin-right: 70%
        }

        .g-b--pull--d9of10 {
            margin-right: 90%
        }

        .g-b--pull--d1of12 {
            margin-right: 8.333%
        }

        .g-b--pull--d5of12 {
            margin-right: 41.666%
        }

        .g-b--pull--d7of12 {
            margin-right: 58.333%
        }

        .g-b--pull--d11of12 {
            margin-right: 91.666%
        }

        .splashscreen-dillinger {
            width: 700px
        }

        .splashscreen p {
            font-size: 1.25rem;
            margin-bottom: 1.43749rem;
            padding-top: .56251rem
        }

        .title {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }

        .title-document {
            font-size: 1.25rem;
            margin-bottom: .89999rem;
            padding-top: .10001rem
        }

        .menu .menu-item--export-as {
            display: block
        }

        .menu .menu-item--preview {
            display: none
        }

        .settings a {
            font-size: 1.25rem
        }

        .words,
        .characters {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }

        .modal--dillinger.about .modal-dialog,
        #zen {
            font-size: 1.25rem
        }

        #zen {
            width: 700px
        }

        #editor {
            font-size: 1rem
        }
    }

    @media screen and (min-width:87.5em) {
        html {
            font-size: .875em
        }

        body {
            font-size: 1rem
        }

        ul,
        ol {
            margin-bottom: .83999rem;
            padding-top: .16001rem
        }

        p {
            padding-top: .66001rem
        }

        p,
        pre {
            margin-bottom: 1.33999rem
        }

        pre,
        blockquote p {
            font-size: 1rem;
            padding-top: .66001rem
        }

        blockquote p {
            margin-bottom: .33999rem
        }

        h1 {
            font-size: 2.0571429rem;
            margin-bottom: .21999rem;
            padding-top: .78001rem
        }

        h2 {
            font-size: 1.953125rem;
            margin-bottom: .1835837rem;
            padding-top: .8164163rem
        }

        h3 {
            font-size: 1.6457143rem;
            margin-bottom: .07599rem;
            padding-top: .92401rem
        }

        h4 {
            font-size: 1.5625rem;
            margin-bottom: .546865rem;
            padding-top: .453135rem
        }

        h5 {
            font-size: 1.25rem;
            margin-bottom: -.56251rem;
            padding-top: .56251rem
        }

        h6 {
            font-size: 1rem;
            margin-bottom: -.65001rem;
            padding-top: .65001rem
        }

        .splashscreen-dillinger {
            width: 800px
        }

        .splashscreen p {
            font-size: 1.25rem;
            margin-bottom: 1.43749rem;
            padding-top: .56251rem
        }

        .title {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }

        .title-document {
            margin-bottom: .89999rem;
            padding-top: .10001rem
        }

        .title-document,
        .settings a {
            font-size: 1.25rem
        }

        .words,
        .characters {
            font-size: .8rem;
            margin-bottom: .77999rem;
            padding-top: .22001rem
        }

        .modal--dillinger.about .modal-dialog,
        #zen {
            font-size: 1.25rem
        }

        #editor {
            font-size: 1rem
        }
    }

    @media (min-width:768px) {
        .form-inline .form-group {
            display: inline-block;
            margin-bottom: 0;
            vertical-align: middle
        }

        .form-inline .form-control {
            display: inline-block;
            width: auto;
            vertical-align: middle
        }

        .form-inline .input-group {
            display: inline-table;
            vertical-align: middle
        }

        .form-inline .input-group .input-group-addon,
        .form-inline .input-group .input-group-btn,
        .form-inline .input-group .form-control {
            width: auto
        }

        .form-inline .input-group>.form-control {
            width: 100%
        }

        .form-inline .control-label {
            margin-bottom: 0;
            vertical-align: middle
        }

        .form-inline .radio,
        .form-inline .checkbox {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 0;
            vertical-align: middle
        }

        .form-inline .radio label,
        .form-inline .checkbox label {
            padding-left: 0
        }

        .form-inline .radio input[type="radio"],
        .form-inline .checkbox input[type="checkbox"] {
            position: relative;
            margin-left: 0
        }

        .form-inline .has-feedback .form-control-feedback {
            top: 0
        }

        .form-horizontal .control-label {
            text-align: right;
            margin-bottom: 0;
            padding-top: 7px
        }

        .form-horizontal .form-group-lg .control-label {
            padding-top: 14.3px
        }

        .form-horizontal .form-group-sm .control-label {
            padding-top: 6px
        }

        .modal-dialog {
            width: 600px;
            margin: 30px auto
        }

        .modal-content {
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5)
        }

        .modal-sm {
            width: 300px
        }
    }

    @media (min-width:992px) {
        .modal-lg {
            width: 900px
        }
    }

    @media screen and (max-width:1200px) {
        #_default_ {
            max-width: 30%
        }

        #_default_ ._default_ {
            font-size: .825rem;
            line-height: .875rem;
            padding: 12px 12px 6px 24px;
            text-align: justify
        }
    }

    @media screen and (max-width:1100px) {
        #_default_ {
            max-width: 27%
        }

        #_default_ ._default_ {
            font-size: .8rem;
            line-height: .85rem;
            padding: 12px 6px 6px 24px;
            text-align: justify
        }
    }

    @media screen and (max-width:1000px) {
        #_default_ {
            max-width: 24%
        }

        #_default_ ._default_ {
            font-size: .775rem;
            line-height: .8rem;
            padding: 12px 6px 6px 24px;
            text-align: justify
        }
    }

    @media screen and (max-width:900px) {
        #_default_ {
            max-width: 30%
        }
    }

    @media screen and (max-width:767px) {
        .table-responsive {
            width: 100%;
            margin-bottom: 15px;
            overflow-y: hidden;
            overflow-x: auto;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            border: 1px solid #ddd;
            -webkit-overflow-scrolling: touch
        }

        .table-responsive>.table {
            margin-bottom: 0
        }

        .table-responsive>.table>thead>tr>th,
        .table-responsive>.table>thead>tr>td,
        .table-responsive>.table>tbody>tr>th,
        .table-responsive>.table>tbody>tr>td,
        .table-responsive>.table>tfoot>tr>th,
        .table-responsive>.table>tfoot>tr>td {
            white-space: nowrap
        }

        .table-responsive>.table-bordered {
            border: 0
        }

        .table-responsive>.table-bordered>thead>tr>th:first-child,
        .table-responsive>.table-bordered>thead>tr>td:first-child,
        .table-responsive>.table-bordered>tbody>tr>th:first-child,
        .table-responsive>.table-bordered>tbody>tr>td:first-child,
        .table-responsive>.table-bordered>tfoot>tr>th:first-child,
        .table-responsive>.table-bordered>tfoot>tr>td:first-child {
            border-left: 0
        }

        .table-responsive>.table-bordered>thead>tr>th:last-child,
        .table-responsive>.table-bordered>thead>tr>td:last-child,
        .table-responsive>.table-bordered>tbody>tr>th:last-child,
        .table-responsive>.table-bordered>tbody>tr>td:last-child,
        .table-responsive>.table-bordered>tfoot>tr>th:last-child,
        .table-responsive>.table-bordered>tfoot>tr>td:last-child {
            border-right: 0
        }

        .table-responsive>.table-bordered>tbody>tr:last-child>th,
        .table-responsive>.table-bordered>tbody>tr:last-child>td,
        .table-responsive>.table-bordered>tfoot>tr:last-child>th,
        .table-responsive>.table-bordered>tfoot>tr:last-child>td {
            border-bottom: 0
        }
    }

    @media screen and (max-width:720px) {
        #_default_ {
            max-width: 60%
        }

        #_default_ ._default_ {
            font-size: .75rem;
            line-height: 1rem;
            padding: 12px 24px
        }
    }

    @media screen and (max-width:620px) {
        #_default_ {
            max-width: 50%
        }

        #_default_ ._default_ {
            font-size: .66rem;
            letter-spacing: 1px;
            line-height: 1rem;
            padding: 10px 24px
        }
    }

    @media screen and (max-width:520px) {
        #_default_ ._default_ {
            font-size: .4rem;
            line-height: .875rem;
            padding: 6px 12px 6px 24px;
            text-align: justify
        }
    }

    @media screen and (max-width:460px) {
        #_default_ {
            display: none
        }
    }

    @media screen and (max-width:46.1875em) {
        .editor-header {
            display: none
        }

        .editor-header--first {
            display: block;
            width: 100%
        }
    }





</style>