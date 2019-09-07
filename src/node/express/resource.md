# 资源

# mongoDB

- [MongoDB Download Center](https://www.mongodb.com/download-center/community)
- [Express](http://www.expressjs.com.cn/)
- [MongoDB 中文手册](http://www.mongodb.org.cn/manual/)
- [Windows MongoDB安装配置](https://www.cnblogs.com/shaosks/p/6589867.html)
- [MongoDB4.0.0 远程连接及用户名密码认证登陆配置——windows](https://blog.csdn.net/qq_26896281/article/details/81206492)

## mongoose

- [github](https://github.com/Automattic/mongoose/)
- [mongoosejs.com](https://mongoosejs.com/)
- [mongoose-doc-cn](https://cn.mongoosedoc.top/docs/)


### 安装（zip）


1. 解压到目录下
2. 新建data 和 log
3. 新建mongod.cfg，配置
```
storage:
    dbPath: "D:\\softwares\\mongodb\\data"
systemLog:
    destination: "file"
    # 错误日志采用追加模式
    logappend=true
    path: "D:\\softwares\\mongodb\\log\\mongo.log"

# 注意缩进，参照其他的值来改，若是缩进不对可能导致后面服务不能重启
security：
    authorization: enabled

```

4. 打开cmd，在解压的bin目录下，目录根据具体路径改
```
mongod --logpath "D:\\softwares\\mongodb\\log\\mongo.log" --logappend --dbpath "D:\\softwares\\mongodb\\data" --directoryperdb --serviceName "MongoDB" --serviceDisplayName "MongoDB" --install

```




```
storage:
    dbPath: "D:\\softwares\\mongodb\\data"
systemLog:
    destination: "file"
    # 错误日志采用追加模式
    logappend=true
    path: "D:\\softwares\\mongodb\\log\\mongo.log"

# 注意缩进，参照其他的值来改，若是缩进不对可能导致后面服务不能重启
security：
    authorization: enabled


```



```

use admin #进入admin数据库
switched to db admin
> db.createUser(
   {user:"admin",
    pwd:"admin",
    roles:[{role:"root", db:"admin"}]
    }
)

user:”用户名“，

pwd:"密码”，

roles:[{role:"角色名“， db:"角色所属数据库”}， {role:"角色名2“， db:"角色所属数据库2”}，.....]
```




### 遇到的问题

`net start mongodb`
- MongoDB服务无法启动,windows提示发生服务特定错误:100

> 删掉data 和 log 文件夹，再输入一次命令


```
net start MongoDB    //启动服务
net stop MongoDB   //停止服务
mongod --remove    //移除服务
```