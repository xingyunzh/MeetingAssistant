function myfunction(){
    var x=document.getElementById("input1").val;
    $.ajax({
        type: "post",
        url: "/auto/autofun",
        data: { email: $input1.value() },
        dataType: "json",
        success: function (data) {
         $("#xiala").html(""); //删除原有数据

       if(data.length) {
         //遍历data.json，添加到自动完成区
         $.each(data, function(index,term) {
         $("#xiala").append('<div class="item" onclick="mousedown(this)">' + data.json[i]+ '</div>');
         $("xiala").slideDown();
         }
               )
                       }
                                 }
           }
        )
                       }

//显示光标内容函数
function mousedown(term){
    $("#input1").val(term);
       $("#tbcontent").fadeOut();
}


