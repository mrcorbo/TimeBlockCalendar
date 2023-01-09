$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        // grabs value of description for corresponding id on button click
        let value = $(this).siblings('.description').val()
        let time = $(this).parent().attr('id')

        localStorage.setItem(time, value)
    })  
})