let unitStep = 1024;

function fmtSize(s, acc){
    if (!acc) {
        acc = 2;
    }

    if (s < unitStep){
        return s + "B";
    }

    let ks = s/unitStep;
    if (ks < unitStep) {
        return ks.toFixed(acc) + "KB";
    }

    let ms = ks/unitStep;
    if (ms < unitStep) {
        return ms.toFixed(acc) + "MB";
    }

    let gs = ms/unitStep;
    if (gs < unitStep) {
        return gs.toFixed(acc) + "GB";
    }

    let ts = gs/unitStep;
    if (ts < unitStep) {
        return ts.toFixed(acc) + "TB";
    }

    let ps = ts/unitStep;
    return ps.toFixed(acc) + "PB";
}

// ks 是以 KB 为单位的大小
// acc 是保存精度，也就是小数点位数, 默认为 0
function fmtKBSize(ks, acc){
    if (ks == 0){
        return ks;
    }
    if (!acc) {
        acc = 0;
    }
    if (ks < unitStep) {
        return ks + "KB";
    }

    let ms = ks/unitStep;
    if (ms < unitStep) {
        return ms.toFixed(acc) + "MB";
    }

    let gs = ms/unitStep;
    if (gs < unitStep) {
        return gs.toFixed(acc) + "GB";
    }

    let ts = gs/unitStep;
    if (ts < unitStep) {
        return ts.toFixed(acc) + "TB";
    }

    let ps = ts/unitStep;
    return ps.toFixed(acc) + "PB";
}

// size 单位为 byte
// unit: B, KB, MB, GB, TB, PB
// 返回结果不带单位
function fmtSizeByUnit(size, unit){
    if (!unit){
        console.log("fmtSizeByUnit: invalid unit: " + unit);
        return 0;
    }
    switch (unit){
        case "B":
            return size;
            break;
        case "KB":
            return (size/unitStep);
            break;
        case "MB":
            return (size/unitStep/unitStep);
            break;
        case "GB":
            return (size/unitStep/unitStep/unitStep);
            break;
        case "TB":
            return (size/unitStep/unitStep/unitStep/unitStep);
            break;
        case "PB":
            return (size/unitStep/unitStep/unitStep/unitStep/unitStep);
            break;
        default:
            return 0;
    }

}

// size 单位为 byte
function sizeUnit(size){
    if (size < unitStep) {
        return "B";
    }

    let ks = size/unitStep;
    if (ks < unitStep){
        return "KB";
    }

    let ms = ks/unitStep;
    if (ms < unitStep) {
        return "MB";
    }

    let gs = ms/unitStep;
    if (gs < unitStep) {
        return "GB";
    }

    let ts = gs/unitStep;
    if (ts < unitStep) {
        return "TB";
    }

    let ps = ts/unitStep;
    if (ps < unitStep) {
        return "PB";
    }
    return "too large";
}

// str 为以 B/K/M/G/T/P 结尾的字符串
function str2GSize(str, unit) {
    let u = str.charAt(str.length-1);
    let num = parseFloat(str);
    let size = 0;
    switch(u) {
    case "B":
        size = num/unitStep/unitStep/unitStep;
        break;
    case "K":
        size = num/unitStep/unitStep;
        break;
    case "M":
        size = num/unitStep;
        break;
    case "G":
        size = num;
        break;
    case "T":
        size = num*unitStep;
        break;
    case "P":
        size = num*unitStep*unitStep;
        break;
    }

    return size;
}

exports.fmtSize = fmtSize;
exports.fmtKBSize = fmtKBSize;
exports.sizeUnit = sizeUnit;
exports.fmtSizeByUnit = fmtSizeByUnit;
exports.str2GSize = str2GSize;