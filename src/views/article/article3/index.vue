<template>

    <div class="demo1">
        <div class="titer-01">
            <h4>linux常用指令</h4>
            <p>
                <span>作者：从小就疯了</span>
                <span>观看群众：30</span>
                <span>分类：操作系统</span>
                <span>更新时间：2020年05月24日</span>
            </p>

<!--            <div class="tome">-->
<!--                <span>24</span>-->
<!--                <span>05</span>-->
<!--                <span>2020</span>-->
<!--            </div>-->

        </div>


        <div class="zhanshi-01">

            <h1>常用linux操作指令</h1>
            <ul class="list-02">
                <li>
                    <p><span class="test-01">文件和目录</span>
                        <br>cd /home 进入 '/ home' 目录'
                        <br>cd .. 返回上一级目录
                        <br>cd ../.. 返回上两级目录
                        <br> cd 进入个人的主目录
                        <br>cd ~user1 进入个人的主目录
                        <br>cd - 返回上次所在的目录
                        <br>pwd 显示工作路径
                        <br>ls 查看目录中的文件
                        <br>ls -F 查看目录中的文件
                        <br>ls -l 显示文件和目录的详细资料
                        <br>ls -a 显示隐藏文件
                        <br>ls *[0-9]* 显示包含数字的文件名和目录名
                        <br>tree 显示文件和目录由根目录开始的树形结构
                        <br>lstree 显示文件和目录由根目录开始的树形结构
                        <br>mkdir dir1 创建一个叫做 'dir1' 的目录'
                        <br>mkdir dir1 dir2 同时创建两个目录
                        <br> mkdir -p /tmp/dir1/dir2 创建一个目录树
                        <br>rm -f file1 删除一个叫做 'file1' 的文件'
                        <br>rmdir dir1 删除一个叫做 'dir1' 的目录'
                        <br>rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容
                        <br>rm -rf dir1 dir2 同时删除两个目录及它们的内容
                        <br>mv dir1 new_dir 重命名/移动 一个目录
                        <br>cp file1 file2 复制一个文件
                        <br>cp dir/* . 复制一个目录下的所有文件到当前工作目录
                        <br>cp -a /tmp/dir1 . 复制一个目录到当前工作目录
                        <br>cp -a dir1 dir2 复制一个目录
                    </p>
                </li>

                <li>
                    <p><span class="test-01">文件搜索 </span>
                        <br>find / -name file1 从 '/' 开始进入根文件系统搜索文件和目录
                        <br>find / -user user1 搜索属于用户 'user1' 的文件和目录
                        <br>find /home/user1 -name \*.bin 在目录 '/ home/user1' 中搜索带有'.bin' 结尾的文件
                        <br>find /usr/bin -type f -atime +100 搜索在过去100天内未被使用过的执行文件
                        <br>find /usr/bin -type f -mtime -10 搜索在10天内被创建或者修改过的文件
                        <br>find / -name \*.rpm -exec chmod 755 '{}' \; 搜索以 '.rpm' 结尾的文件并定义其权限
                        <br>find / -xdev -name \*.rpm 搜索以 '.rpm' 结尾的文件，忽略光驱、捷盘等可移动设备
                        <br>locate \*.ps 寻找以 '.ps' 结尾的文件 - 先运行 'updatedb' 命令
                        <br>whereis halt 显示一个二进制文件、源码或man的位置
                        <br>which halt 显示一个二进制文件或可执行文件的完整路径
                    </p>
                </li>

                <li>
                    <p><span class="test-01">查看文件内容</span>
                        <br>cat file1 从第一个字节开始正向查看文件的内容
                        <br>tac file1 从最后一行开始反向查看一个文件的内容
                        <br>more file1 查看一个长文件的内容
                        <br>less file1 类似于 'more' 命令，但是它允许在文件中和正向操作一样的反向操作
                        <br>head -2 file1 查看一个文件的前两行
                        <br>tail -2 file1 查看一个文件的最后两行
                        <br>tail -f /var/log/messages 实时查看被添加到一个文件中的内容
                    </p>
                </li>

                <li>
                    <p><span class="test-01">vim系列</span>
                        <br>vim find 编辑文件
                        <br>dd 删除当前行
                        <br>dnd 删除n行
                        <br>u撤销上一步
                        <br> x删除当前字母
                        <br> X 删除前一个字母
                        <br>yy 复制光标当前行
                        <br> p 粘贴
                        <br>dw 删除一个词
                        <br>yw 复制一个词
                        <br> shift+g 移动到页尾
                        <br>1+shift+g 移动到页头
                        <br>N+shift+g 移动到目标行
                        <br>shift+6 移动到行头
                        <br>shift+4 移动到行尾
                        <br>:w 保存
                        <br> :q 退出
                        <br>:! 强制


                    </p>
                </li>

                <li>
                    <p><span class="test-01">磁盘空间 </span>
                        <br>df -h 显示已经挂载的分区列表
                        <br>ls -lSr |more 以尺寸大小排列文件和目录
                        <br>du -sh dir1 估算目录 'dir1' 已经使用的磁盘空间'
                        <br>du -sk * | sort -rn 以容量大小为依据依次显示文件和目录的大小
                        <br>rpm -q -a --qf '%10{SIZE}t%{NAME}n' | sort -k1,1n 以大小为依据依次显示已安装的rpm包所使用的空间 (fedora, redhat类系统)
                        <br>dpkg-query -W -f='${Installed-Size;10}t${Package}n' | sort -k1,1n 以大小为依据显示已安装的deb包所使用的空间 (ubuntu, debian类系统)

                    </p>
                </li>


                <li>
                    <p><span class="test-01">用户与群组 </span>
                        <br>groupadd group_name 创建一个新用户组
                        <br>groupdel group_name 删除一个用户组
                        <br>groupmod -n new_group_name old_group_name 重命名一个用户组
                        <br>useradd -c "Name Surname " -g admin -d /home/user1 -s /bin/bash user1 创建一个属于 "admin" 用户组的用户
                        <br>useradd user1 创建一个新用户
                        <br>userdel -r user1 删除一个用户 ( '-r' 排除主目录)
                        <br>usermod -c "User FTP" -g system -d /ftp/user1 -s /bin/nologin user1 修改用户属性
                        <br>passwd 修改口令
                        <br>passwd user1 修改一个用户的口令 (只允许root执行)
                        <br>chage -E 2005-12-31 user1 设置用户口令的失效期限
                        <br>pwck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的用户
                        <br>grpck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的群组
                        <br>newgrp group_name 登陆进一个新的群组以改变新创建文件的预设群组

                    </p>
                </li>

                <li>
                    <p><span class="test-01">打包和压缩文件 </span>
                        <br> gunzip file1.gz 解压一个叫做 'file1.gz'的文件
                        <br>gzip file1 压缩一个叫做 'file1'的文件
                        <br>gzip -9 file1 最大程度压缩
                        <br>rar a file1.rar test_file 创建一个叫做 'file1.rar' 的包
                        <br>rar a file1.rar file1 file2 dir1 同时压缩 'file1', 'file2' 以及目录 'dir1'
                        <br>rar x file1.rar 解压rar包
                        <br>unrar x file1.rar 解压rar包
                        <br>tar -cvf archive.tar file1 创建一个非压缩的 tarball
                        <br>tar -cvf archive.tar file1 file2 dir1 创建一个包含了 'file1', 'file2' 以及 'dir1'的档案文件
                        <br>tar -tf archive.tar 显示一个包中的内容
                        <br>tar -xvf archive.tar 释放一个包
                        <br>tar -xvf archive.tar -C /tmp 将压缩包释放到 /tmp目录下
                        <br>tar -cvfj archive.tar.bz2 dir1 创建一个bzip2格式的压缩包
                        <br>tar -jxvf archive.tar.bz2 解压一个bzip2格式的压缩包
                        <br>tar -cvfz archive.tar.gz dir1 创建一个gzip格式的压缩包
                        <br>tar -zxvf archive.tar.gz 解压一个gzip格式的压缩包
                        <br>zip file1.zip file1 创建一个zip格式的压缩包
                        <br>zip -r file1.zip file1 file2 dir1 将几个文件和目录同时压缩成一个zip格式的压缩包
                        <br>unzip file1.zip 解压一个zip格式压缩包

                    </p>
                </li>

                <li>
                    <p><span class="test-01">yum安装命令</span>
                        <br>yum install package_name 下载并安装一个rpm包
                        <br>yum localinstall package_name.rpm 将安装一个rpm包，使用你自己的软件仓库为你解决所有依赖关系
                        <br>yum update package_name.rpm 更新当前系统中所有安装的rpm包
                        <br>yum update package_name 更新一个rpm包
                        <br>yum remove package_name 删除一个rpm包
                        <br>yum list 列出当前系统中安装的所有包
                        <br>yum search package_name 在rpm仓库中搜寻软件包
                        <br>yum clean packages 清理rpm缓存删除下载的包
                        <br>yum clean headers 删除所有头文件
                        <br>yum clean all 删除所有缓存的包和头文件
                    </p>
                </li>

                <li>
                    <p><span class="test-01">APT 软件工具 (Debian, Ubuntu 以及类似系统) </span>
                        <br>apt-get install package_name 安装/更新一个 deb 包
                        <br>apt-cdrom install package_name 从光盘安装/更新一个 deb 包
                        <br>apt-get update 升级列表中的软件包
                        <br>apt-get upgrade 升级所有已安装的软件
                        <br>apt-get remove package_name 从系统删除一个deb包
                        <br>apt-get check 确认依赖的软件仓库正确
                        <br>apt-get clean 从下载的软件包中清理缓存
                        <br>apt-cache search searched-package 返回包含所要搜索字符串的软件包名称


                    </p>
                </li>



                <li>
                    <p><span class="test-01">关机 (系统的关机、重启以及登出 ) </span>
                        <br>shutdown -h now 关闭系统
                        <br>init 0 关闭系统
                        <br>telinit 0 关闭系统
                        <br>shutdown -h hours:minutes & 按预定时间关闭系统
                        <br>shutdown -c 取消按预定时间关闭系统
                        <br>shutdown -r now 重启
                        <br>reboot 重启
                        <br>logout 注销

                    </p>
                </li>

            </ul>

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
        margin-left: auto;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: auto;
        margin-top: 90px;
        background: #fff;
        border: 1px solid #cccccc;
        height: 100%;
        overflow: auto;
        overflow-x: hidden;
        /*火狐去掉滚动条*/
        scrollbar-width: none;
    }

    .demo1::-webkit-scrollbar {
        display: none;
    }
    /*文章展示区*/

    .titer-01 {
        position: relative;
        max-width: 100%;
        min-height: 85px;
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

    .zhanshi-01 {
        max-width: 1280px;
        background: #fff;
        margin: 0;
    }

    .zhanshi-01 h1 {
        padding-bottom: .3em;
        border-bottom: 1px solid #eee;
        position: relative;
        margin-top: 1em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        font-size: 2.25em;
        padding-left: 1em;
    }

    .zhanshi-01 h3 {
        position: relative;
        margin-top: 1em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        color: #333333;
        font-size: 21px;
        padding-left: 1em;
    }

    .list-02 {
        font-size: 14px;
        color: #333333;
        padding-left: 2em;
        padding-bottom: 40px;
    }

    .list-02 li {
        display: block;
        position: relative;
        box-sizing: border-box;
        line-height: 30px;
        margin-top: 30px;
    }

    .test-01 {
        font-weight: bold;
        font-size: 20px;
    }

    .tsxi-01 {
        max-width: 1280px;
        min-height: 100px;
        border-top: 1px solid #cccccc;
        background: #fff;
        margin-top: 100px;
    }

    .tsxi-01 a {
        color: #333333;
        font-size: 18px;
        line-height: 100px;
        padding-left: 1em;
    }

    .tsxi-01 a:hover {
        font-weight: bold;
        color: red;
    }

    .list-03 li p {
        padding-left: 20px;
    }

    .list-03 li p img {
        width: 700px;
        height: 340px;
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