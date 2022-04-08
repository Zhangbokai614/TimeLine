import Get from "../../util/get";
import timeFormat from "../../util/timeFormat";


const result = Get('http://192.168.0.109:8081/queryDust?startTime=2022-04-01&endTime=' + timeFormat(new Date().toDateString()))

let tempDust = []
let avgDust = result.then((data) => {
    data[0].forEach(item => {
        const ind = tempDust.findIndex(t => { return t.date === timeFormat(item.QueryTime) })
        if (ind === -1) {
            tempDust.push({ date: timeFormat(item.QueryTime), dust: item.Dust, count: 1 })
        } else {
            tempDust[ind].dust += item.Dust
            tempDust[ind].count++
        }
    })

    return tempDust.map(item => {
        return { tag: 'PM2.5', title: '2-2122-Avg-PM2.5', content: (item.dust / item.count).toFixed(2), date: item.date, }
    })
})

export { avgDust }