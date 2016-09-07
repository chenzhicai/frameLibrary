// 验证是否全部中文和字符数  chStr待验证字符串 minNum最少数maxNum最多数
function chNum(chStr, minNum, maxNum) {
    /^[\u4E00-\u9FA5\uf900-\ufa2d]{minNum,maxNum}$/.test(chStr);
}