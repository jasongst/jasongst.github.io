$(document).ready(function() {
    /*$('#send_email').click(function(e){
        e.preventDefault();
        var data = {
            name: $('#name').val(),
            tel: $('#tel').val(),
            email: $('#email').val(),
            message: $('#message').val(),
            verif: $('#verif').val()
        };
        $.ajax({
            url: "../../mail.php",
            type: 'POST',
            data: data,
            success: function(data) {
                $('.contact .formulaire .is-success').css({'display' : 'block'});
                setTimeout(function(){
                    $('.contact .formulaire .is-success').css({'display' : 'none'});
                    $('#name').val("");
                    $('#tel').val("");
                    $('#email').val("");
                    $('#message').val("");
                    $('#verif').val("");
                }, 3000);
            },
            error: function(data) {
                $('.contact .formulaire .is-danger').css({'display' : 'block'});
                setTimeout(function(){
                    $('.contact .formulaire .is-danger').css({'display' : 'none'});
                    $('#name').val("");
                    $('#tel').val("");
                    $('#email').val("");
                    $('#message').val("");
                    $('#verif').val("");
                }, 3000);
            }
        });
    });*/

    $("#ajaxForm").submit(function(e) {
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
            type: "POST",
            url: action,
            crossDomain: true,
            data: new FormData(this),
            dataType: "json",
            contentType: "multipart/form-data",
            processData: false,
            contentType: false,
            headers: {
                "Accept": "application/json"
            }
        }).done(function () {
            $('.contact .formulaire .is-success').css({'display': 'block'});
            setTimeout(function () {
                $('.contact .formulaire .is-success').css({'display': 'none'});
                $('#name').val("");
                $('#tel').val("");
                $('#email').val("");
                $('#message').val("");
                $('#verif').val("");
            }, 3000);
        }).fail(function () {
            $('.contact .formulaire .is-danger').css({'display': 'block'});
            setTimeout(function () {
                $('.contact .formulaire .is-danger').css({'display': 'none'});
                $('#name').val("");
                $('#tel').val("");
                $('#email').val("");
                $('#message').val("");
                $('#verif').val("");
            }, 3000);
        });
    });
});