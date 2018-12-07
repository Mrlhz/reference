# 语法

- `use DATABASE_NAME`创建数据库
- `db.dropDatabase()`删除数据库
- `show dbs`查看所有数据库
- `db.createCollection(name, options)`创建集合
- `db.[collection name].drop()`删除集合
- `show collections`查看已存在的集合
- `db.COLLECTION_NAME.insert(document)`插入文档
- `db.[collection name].update()`更新文档,用于更新已存在的文档
- `db.[collection name].save()`更新文档,通过传入的文档来替换已有文档
- `db.[collection name].remove()`删除文档
- `db.[collection name].find(query, projection)[.pretty()]`查询文档


- [MongoDB创建数据库](#create)
- [MongoDB删除数据库](#drop)
- [MongoDB 创建集合](#createCollection)
- [MongoDB 删除集合](#dropCollection)
- [MongoDB 插入文档](#insert)
- [MongoDB 插入文档](#update)
- [MongoDB 插入文档](#remove)
- [MongoDB 插入文档](#find)
### create

```sql
use DATABASE_NAME
```
如果数据库不存在，则创建数据库，否则切换到指定数据库

```sql
实例
以下实例我们创建了数据库 mongo:

> use mongo  
switched to db mongo  
> db 
mongo 
>   
如果你想查看所有数据库，可以使用 show dbs 命令：

> show dbs  
local  0.078GB  
test   0.078GB  
>
```
  
可以看到，我们刚创建的数据库 mongo 并不在数据库的列表中， 要显示它，我们需要向 mongo 数据库插入一些数据。


```sql
> db.mongo.insert({"name":"mongodb中文网"})
WriteResult({ "nInserted" : 1 })  
> show dbs  
local   0.078GB  
mongo  0.078GB 
test    0.078GB  
>
```


### drop

### createCollection
```sql
> db.createCollection("mycol", { capped : true, autoIndexId : true, size : 
   6142800, max : 10000 } )
{ "ok" : 1 }
>
```

### dropCollection

### insert

### update

### remove

### find