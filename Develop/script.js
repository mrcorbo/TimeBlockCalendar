$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        // grabs value of description for corresponding id on button click
        let value = $(this).siblings('.description').val()
        let time = $(this).parent().attr('id')
        // saves to localStorage
        localStorage.setItem(time, value)
        // adds the "show" class to display a notification telling user item was saved to localStorage
        $('.notification').addClass('show')
    })

    function hourGrabber() {
        // grabs the current hour
        let currentHour = moment().hours()

        // for each block, sets the hour accordingly
        $('.time-block').each(function () {
            let blockHour = parseInt($(this).attr('id').split('-')[1])

            // update style based on currentHour vs blockHour
            if (blockHour < currentHour) {
                $(this).addClass('past')
            } else if (blockHour === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
        })

    }
    hourGrabber()
    
    // pull all hours from 8-5 from localStorage
    $('#hour-8 .description').val(localStorage.getItem('hour-8'))
    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-13 .description').val(localStorage.getItem('hour-13'))
    $('#hour-14 .description').val(localStorage.getItem('hour-14'))
    $('#hour-15 .description').val(localStorage.getItem('hour-15'))
    $('#hour-16 .description').val(localStorage.getItem('hour-16'))
    $('#hour-17 .description').val(localStorage.getItem('hour-17'))
    // displays today on the page
    $('#currentDay').text(moment().format('dddd, MMMM, Do'))
})