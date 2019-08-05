var monthsOfTheYear = () => {
    let days = new Date();
    let month = days.getMonth();
    let displayMonth = "";
    switch(month) {
        case 0:
            displayMonth = "January";
            break;
        case 1:
            displayMonth = "February";
            break;
        case 2:
            displayMonth = "March";
            break;
        case 3:
            displayMonth = "April";
            break;
        case 4:
            displayMonth = "May";
            break;
        case 5:
            displayMonth = "June";
            break;
        case 6:
            displayMonth = "July";
            break;
        case 7:
            displayMonth = "August";
            break;
        case 8:
            displayMonth = "September";
            break;
        case 9:
            displayMonth = "October";
            break;
        case 10:
            displayMonth = "November";
            break;
        case 11:
            displayMonth = "December";
            break;
    }

    let dater = document.getElementById("dater");
    dater.innerHTML =  displayMonth;

}
setInterval(monthsOfTheYear, 1000);