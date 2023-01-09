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

    
})