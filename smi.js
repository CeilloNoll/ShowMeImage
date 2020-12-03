$.fn.ShowMeImage = function (param, max_count, callback) {
    $(this).on("change", function () {
        $("" + param + "").html('');
        let files = $(this)[0].files;
        let max = max_count ? max_count : 10 ;
        if (files.length > max) {
            alert('Выберите не больше ' + max + ' файлов');
            $(this).val('')
        } else {
            $.each(files, function (i, t) {
                var fileName = this.name,
                    newFile = new FileReader;
                newFile.readAsDataURL(this);
                newFile.onloadend = function () {
                    $("" + param + "").append('<div class="attach-file" data-file="' + fileName + '"><img src="' + newFile.result + '"><input type="file" style="display:none;" value="' + newFile.result + '"><div class="attach-file-delete">&times;</div></div>'),
                        $(".attach-file").each(function (i) {
                            $(this).find("input").attr("name", "file-" + i)
                        }),
                        $(".attach-file").on("click", function () {
                            $(this).remove()
                        })
                }
            })
        };
        if(callback){
            callback();
        }
    });
};