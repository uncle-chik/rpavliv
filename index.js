$('#btn-send').click(function() {
    $.ajax({
        url:"https://formspree.io/chicilinus@ukr.net",
        method: "POST",
        data: {
            name: name.value,
            email: email.value,
            message: msg.value
        },
        dataType: "json"
    }).done(function() {
        $('#forms').html('<h1>thank you!</h1>')
    });
});