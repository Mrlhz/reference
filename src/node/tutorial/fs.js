const fs = require('fs');

// 写入文件：fs.writeFile(path, fileData, cb);
// fs.writeFile('./text.txt', 'hello xr!', err => {
//   if (err) {
//     console.log('写入失败', err);
//   } else {
//     console.log('写入成功');
//   }
// });

// 读取文件：fs.readFile(path, cb);
fs.readFile('./text.txt', (err, fileData) => {
  if (err) {
    console.log('读取失败', err);
  } else {
    console.log('读取成功', fileData.toString()); // fileData 是二进制文件，非媒体文件可以用 toString 转换一下
  }
});


// http://nodejs.cn/api/fs.html
// http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback
// http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback
// 链接：https://juejin.im/post/5ccacfb96fb9a03201243cb9


const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

// readFile('movie.json').then((data) => {
//   let res = JSON.parse(data)
//   console.log(JSON.parse(res.total))
// })

const asyncReadFile = async function () {
  let res = null
  try {
    res = await readFile('movie.json')
    res = JSON.parse(res)
  } catch (error) {
    throw error
  }
  console.log(res.subjects[0])
}

asyncReadFile()
