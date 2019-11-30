/**
 *  方法名 creatTable()
 *  时间2019.11.30.23.54
 */
function creatTable() {
    var rows = 3; // 行数
    var clos = 2; // 列数

    var tab = '<table border=1 width="500" cellpadding="10" align="center">'
    tab += "<caption>定义表头</caption>";
    tab += "<tr><th>第一列名</th>\
                            <th>第二列名</th>"
    for (var i = 0; i < rows; i++) {
        tab += '<tr>'
        for (var j = 0; j < clos; j++) {
                // target 当点击时在另外的页面打开
                tab += "<td ><label style=\"color:blue; text-align: center;\" class=\"showclass\" id=\"show" + i + j + "\">" + i + "</label></td>"
                // 此处可采用 a 标签定义链接
        }
        tab += '</tr>';
    }
    tab += '</table>';
    // 显示表格
    div1.innerHTML=tab
}



