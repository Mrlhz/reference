// 时间模块

class Time {
    /**
     * 倒计时
     * @param  {Number} end    截止时间
     * @param  {[type]} update 时间更新的回调
     * @param  {[type]} handle 结束回调
     * @return {[type]}        [description]
     */
    countDown(end, update, handle) {
        // now 1498917683022
        // end 1498917826710
        const now = new Date().getTime();
        const self = this;

        if (now - end > 0) {
            handle.call(self);
        } else {
            // 剩余时间
            let last_time = end - now;

            const d_to_ms = 24 * 60 * 60 * 1000;
            const h_to_ms = 60 * 60 * 1000;
            const m_to_ms = 60 * 1000;
            const s_to_ms = 1000;

            let d = Math.floor(last_time / d_to_ms);
            let h = Math.floor((last_time - d * d_to_ms) / h_to_ms);
            let m = Math.floor((last_time - d * d_to_ms - h * h_to_ms) / m_to_ms);
            let s = Math.floor((last_time - d * d_to_ms - h * h_to_ms - m * m_to_ms) / s_to_ms);

            let arr = [];

            if (d > 0) {
                arr.push(`${d}天`);
            }
            if (h > 0 || arr.length > 0) {
                arr.push(`${h}小时`);
            }
            if (m > 0 || arr.length > 0) {
                arr.push(`${m}分钟`);
            }
            if (s > 0 || arr.length > 0) {
                arr.push(`${s}秒`);
            }

            self.last_time = arr.join('');
            update.call(self, arr.join(''));

            setTimeout(function () {
                self.countDown(end, update, handle);
            }, 1000);
        }
    }
}

export default Time;

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(
        ':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

var d = new Date()
console.log(formatTime(d))


/**
 * @description 根据时区输出时区时间的函数
 *
 * @param {*} i
 * @returns
 */
function getLocalTime(i) {
    //参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
    if (typeof i !== 'number') return;
    var d = new Date();
    //得到1970年一月一日到现在的秒数
    var len = d.getTime();
    //本地时间与GMT时间的时间偏移差
    var offset = d.getTimezoneOffset() * 60000;
    //得到现在的格林尼治时间
    var utcTime = len + offset;
    return new Date(utcTime + 3600000 * i);
}
console.log("*******************东区时间************************************");
console.log("零时区-伦敦时间：" + getLocalTime(0));
console.log("东一区-柏林时间：" + getLocalTime(1));
console.log("东二区-雅典时间：" + getLocalTime(2));
console.log("东三区-莫斯科时间：" + getLocalTime(3));
console.log("东四区-时间：" + getLocalTime(4));
console.log("东五区-伊斯兰堡时间：" + getLocalTime(5));
console.log("东六区-科伦坡时间：" + getLocalTime(6));
console.log("东七区-曼谷时间：" + getLocalTime(7));
console.log("东八区-北京时间：" + getLocalTime(8));
console.log("东九区-东京时间：" + getLocalTime(9));
console.log("东十区-悉尼时间：" + getLocalTime(10));
console.log("东十二区-斐济时间：" + getLocalTime(12));
console.log("*******************西区时间************************************");
console.log("西十区-斐济时间：" + getLocalTime(-10));
console.log("西九区-阿拉斯加时间：" + getLocalTime(-9));
console.log("西八区-太平洋时间（美国和加拿大）：" + getLocalTime(-8));
console.log("西七区-山地时间（美国和加拿大）：" + getLocalTime(-7));
console.log("西六区-中部时间（美国和加拿大）：" + getLocalTime(-6));
console.log("西五区-东部时间（美国和加拿大）：" + getLocalTime(-5));
console.log("西四区-大西洋时间（加拿大）：" + getLocalTime(-4));
console.log("西三区-巴西利亚时间：" + getLocalTime(-3));