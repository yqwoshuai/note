---
sidebar: 'auto'
---

# git基本操作

## 创建版本库

```shell
// 初始化
git init

// 添加文件到暂存区
git add <文件名>
// 添加所有变动过的文件
git add . 
// 提交已添加的修改到本地仓库
git commit -m "本次提交的注释信息"

// 查看当前仓库状态
git status
// 查看文件的修改内容（工作区和暂存区）
git diff 文件名
// 查看文件的修改内容（暂存区和当前版本库）
git diff 文件名 --cached
```

## 版本信息

```shell
// 查看提交历史记录，q退出查看
git log
// 历史记录单行显示，前面的一串数字为每次commit的id，版本号
git log --pretty=oneline

// 退回上一个版本，上上次版本为HEAD^^，前100个版本为HEAD~100
git reset --hard HEAD^
// 退回指定版本
git reset --hard commit的id前几位，一般5位左右就找得到

// 查看记录的每一次指令操作
git reflog

// 丢弃工作区的修改，本质是用版本库的版本替换工作区的版本，所以被删的文件会被恢复，同理新建的文件会被删除
git checkout -- 文件名
// 丢弃暂存区的修改，重新放回工作区
git reset HEAD 文件名
// 已经提交到版本库的话用版本退回

// 删除版本库中的文件
git rm 文件名
```

## 远程仓库

```shell
// 新建公钥，用户主目录里找到.ssh目录，下面有id_rsa和id_rsa.pub两个文件。
// id_rsa是私钥，id_rsa.pub是公钥，将id_rsa.pub里的内容添加到github的SSH Keys中
ssh-keygen -t rsa -C "邮箱地址"

// 关联远程仓库
git remote add origin git地址
// 提交代码到指定分支，master为新建仓库默认分支
// 第一次添加要增加 -u 参数关联远程的master和本地的master分支
git push -u origin master

// 克隆远程仓库
git clone git地址
```

## 分支管理

```shell
// 创建新分支并切换到新分支
git checkout -b 新分支名称
// 本职是执行下面两条命令
// 创建新分支
git branch 分支名称
// 切换分支
git checkout 分支名称

// 查看当前已有分支
git branch

// 将指定分支的代码合并到当前分支
git merge 指定分支名称
// 删除分支
git branch -d 分支名称
// 删除还未被合并的分支
git branch -D 分支名称

// 合并内容的时候可能会有冲突，需要手动修改，Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容
// 合并时git默认使用Fast forward模式，不会生成commit，使用 --no-ff 参数禁用Fast forward模式。同时要使用 -m 添加commit的内容
git merge --no-ff -m "本次提交的注释信息" 分支名称

// 暂存修改
git stash
// 查看暂存的修改
git stash list
// 恢复暂存的修改（不删除暂存的内容）
git stash apply
// 删除暂存的内容
git stash drop
// 恢复暂存的修改（删除暂存的内容）
git stash pop
// 恢复指定的暂存
git stash apply stash@{暂存的序号}

// 查看远程库信息，远程仓库默认名称为origin
git remote
// 查看远程库详细信息
git remote -v
// 创建远程仓库的指定分支到本地
git checkout -b 分支名称 origin/分支名称
// 关联本地指定分支与远程仓库指定分支
git branch --set-upstream-to 分支名称 origin/分支名称

// 整理分支为一条直线
// 优点是看上去更直观，查看历史提交的变化时更容易。缺点是本地的分叉提交已经被修改过了
git rebase
```

## 标签管理

```shell
// 创建新标签
git tag 标签名
// 查看所有标签
git tag
// 给指定的commit打标签
git tag 标签名 commit的id前几位
// 查看标签信息
git show 标签名
// 创建带说明的标签
git tag -a 标签名 -m "本次提交的注释信息" commit的id前几位

// 删除标签
git tag -d 标签名
// 推送标签
git push origin 标签名
// 删除远程标签（先删除本地标签）
git push origin :refs/tags/标签名
```

## 自定义git

```shell
// git显示不同的颜色
git config --global color.ui true

// 检查git忽略规则
git check-ignore -v 文件名

// 无视git忽略规则强制提交
git add -f 文件名

// 配置别名
// 仓库的Git配置文件都放在.git/config
// 当前用户的Git配置文件放在用户主目录下的一个隐藏文件.gitconfig
// 例如将checkout命令配置为co。以后git co 就相当于 git checkout
git config --global alias.co checkout
```
