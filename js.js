
$(document).ready(function () {

    /**
     * 将前端选中的文件传输到后端
     * 时间：2019.12.02.16.44
     */
    $("#btn_getFilePath").change(function () {


        var objFiles = document.getElementById("btn_getFilePath");
        var fileSize = objFiles.files.length;

        for (var i = 0; i < fileSize; i++) {
            var isFileValide = true;    // 交互click和ajax之间的信息
            var reader = new FileReader();
            // reader.readAsBinaryString(objFiles.files[i]);//读取文件 
            // reader.readAsDataURL(objFiles.files[i]); // 读取为 base64 格式
            reader.readAsArrayBuffer(objFiles.files[i]); // 读取为字节数组

            var filename = objFiles.files[i].name;
            var index = filename.lastIndexOf(".");
            var suffix = filename.substr(index + 1);

            reader.onload = function (evt) {
                var temp = evt.target.result;
                console.log(temp);
                var params = buf2hex(temp);
                console.log(params);

                var postData = {
                    "data": params,
                    "fileNameExtream": suffix
                };
                //  添加ajax 请求，将数据返回到后端
                $.ajax({
                    type: 'post',
                    contentType: "application/json", //后端Jersey采用相应的接受参数即可
                    url: 'http://localhost:8899/bcgis/storage/cooperativeStorage/test',
                    data: JSON.stringify(postData),
                    success: function (data) {
                        // console.log('data: ' + JSON.stringify(data));
                        console.log(JSON.stringify(data));
                    },
                    error: function (err) {
                        console.log('err: ');
                        console.log(JSON.stringify(err));
                    }
                });

            }
        }
    });

    //arraybuffer to hex
    function buf2hex(buffer) { // buffer is an ArrayBuffer
        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    }

    $("#Submit").on('click', function submitForm() {
        var form = new FormData(document.getElementById("form_Form"));
        alert('姓名：' + form_Form.textfield.value + '\n密码：' + form_Form.password.value);

        // 采用 ajax 发送表单信息

        // $.ajax({
        //     url: "http://172.16.15.66:8081/server_war_exploded/webapi/blockchain",
        //     type: "post",
        //     data: form,
        //     processData:false,
        //     contentType:false,
        //     success:function(data){
        //         window.clearInterval(2);
        //         console.log(data);
        //     },
        //     error:function(e){
        //         alert("错误！！");
        //         window.clearInterval(2);
        //     }
        // });
    });

    $("#btn_submit").on('click', function submitForm() {
        var form = new FormData(document.getElementById("publish_form"));
        // $.ajax({
        //     url: "http://localhost:8081/server_war_exploded/webapi/blockchain",
        //     type: "post",
        //     data: form,
        //     processData: false,
        //     contentType: false,
        //     success: function (data) {
        //         alert(data);
        //         // console.log(data);
        //         // console.log('data: ' + JSON.stringify(data));
        //     },
        //     error: function (e) {
        //         // alert("错误！！");
        //     }
        // });
    });

});