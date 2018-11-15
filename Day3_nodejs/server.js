const express = require('express');
const axios = require('axios');


let app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
/**
 * {"success":1,"students":["Nguyễn Phú Tùng","Đào Đức Trung","Nguyễn Quang Huy","Bành Tuấn Anh","Trịnh Trọng Đỉnh","Nguyễn Đình Tiến","LÊ ĐỨC QUANG","Tiêu Trung Hòa","Bùi Anh Tú","Dinh Van Hoang","Nguyễn Thành Nam","Nguyễn Văn Duy","Nguyễn Tiến Hưng","Nguyễn Viết Hoàng","Vũ Việt Hưng","Trần Xuân Sơn"]}
 * 
 * 
 */
app.get('/web:id',(req,res)=>{
    const id = req.params.id;
    axios({
        method : 'get',
        url : `https://btvn-web16s.herokuapp.com/api/web${id}`
    }).then(({data})=>{
        let {students} = data;
        let studentHTML = "";
        students.forEach((item)=>{
            studentHTML = `${studentHTML}<li>${item}</li>`;

        })
        res.send(`<ul>${studentHTML}</ul>`);
    })
})

app.listen(6969, (err) => {
    if (err) console.log(err)
    else console.log('Start listening port 6969 successful');
})
