
$(document).ready(function () {


    /**
     * 将前端选中的文件传输到后端
     */
    $("#btn_getFilePath").change(function(){

  
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
                // $.ajax({
                //     type: 'post',
                //     contentType: "application/json", //后端Jersey采用相应的接受参数即可
                //     url: 'http://localhost:8899/bcgis/storage/cooperativeStorage/test',
                //     data: JSON.stringify(postData),
                //     success: function (data) {
                //         // console.log('data: ' + JSON.stringify(data));
                //         console.log(data);
                //     },
                //     error: function (err) {
                //         console.log('err: ');
                //         console.log(JSON.stringify(err));
                //     }
                // });

            }
        }
    });

    //arraybuffer to hex
    function buf2hex(buffer) { // buffer is an ArrayBuffer
        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    }



});