const buckets = [
    '#0356ef', /* <10 */
    '#83a8ed', /* 10 - 15 */
    '#16f1ea', /* 15 -20 */
    '#e1c36a', /* 20 - 25 */
    '#f1f116', /* 25 - 30 */
    '#ee905a', /* 30 - 35 */
    '#f14b05', /* 35 - 40 */
    '#e7071a', /* >40 */
]

const generateLineData = (data) => {
    if (data === null) {
        data = []
    }
    if (data.length === 0) {
        for (let i = 0; i < 31; i++) {
            let obj = {}
            obj.name = (i + 1).toString()
            obj.temperature = Math.floor((Math.random() * 55) + 1)
            data.push(obj)
        }
    } else {
        data.splice(0, 1)
        let obj = {}
        obj.name = (31).toString()
        obj.temperature = Math.floor((Math.random() * 55) + 1)
        data.push(obj)

    }
    return data
}


const generateBarData = () => {
    let data = []

    for (let i = 0; i < 20; i++) {
        let obj = {}
        obj.name = i.toString()
        let num = Math.floor((Math.random() * 35) + 1)
        num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1
        obj.pv = num
        num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1
        obj.uv = num
        data.push(obj)
    }

    return data
}

const generateSpiralData = () => {
    let data = []
    let j = 10;

    for (let i = 0; i < 8; i++) {
        let obj = {}
        if (i === 0) {
            obj.name = '< 10'
            obj.value = Math.floor((Math.random() * 35) + 1)
            obj.fill = buckets[i]
            data.push(obj)
        }
        if (i > 0 && i < 7) {
            obj.name = `${j}-${j + 5}`
            obj.value = Math.floor((Math.random() * 35) + 1)
            obj.fill = buckets[i]
            data.push(obj)
        }
        if (i === 7) {
            obj.name = '> 40'
            obj.value = Math.floor((Math.random() * 35) + 1)
            obj.fill = buckets[i]
            data.push(obj)
        }
        j = j + 5;

    }
    return data
}

export default {
    generateBarData,
    generateLineData,
    generateSpiralData
}