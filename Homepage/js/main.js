/*********HEADER-TIME******** */
function updateClockPane() {
    var mainTime = new Date();
    var hours = mainTime.getHours();
    var minutes = mainTime.getMinutes();
    var seconds = mainTime.getSeconds();
    
    hours12 = hours % 12;
    hours12 == hours ? hours : 12;

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;    

    var formattedMainTime = hours12 + ":" + minutes + ":" + seconds + " ";
    var formattedAuxTime =  "(" + hours + ":" + minutes + ")";
    
    document.getElementById("main-time").textContent = formattedMainTime;
    document.getElementById("aux-time").textContent = formattedAuxTime;
};

/*********HEADER-DATE******** */
function updateDatePane(){
    
    var currentDate = new Date();

    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekday = weekdays[currentDate.getDay()];

    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"   ];
    var month = months[currentDate.getMonth()];

    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var formattedDate = weekday + ", " + day + " " + month + ", " + year;

    document.getElementById("date-pane").textContent = formattedDate;
};

/************Search-Bar******** */
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById("search-input").value;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
    //window.open(url, "_blank");
    window.open(url, "_blank");
});

/************Icon-control
 * ******** */
  
function iconPaneControl() {
  const btn1_Regular = document.getElementById('buttonControl-regular');
  const btn2_Social = document.getElementById('buttonControl-social');
  const btn3_Test = document.getElementById('buttonControl-test');

  const regularIcons= document.getElementById('regularIcons');
  const socialIcons = document.getElementById('socialIcons');
  const aiIcons = document.getElementById('aiIcons');
  
  const iconSet = [regularIcons, socialIcons, aiIcons];

  btn1_Regular.addEventListener('click', function() {
    iconSet.forEach(x => x.style.display = 'none');
    regularIcons.style.display = 'block';
  });
  btn2_Social.addEventListener('click', function() {
    iconSet.forEach(x => x.style.display = 'none');
    socialIcons.style.display = 'block';
  });
  btn3_Test.addEventListener('click', function() {
    iconSet.forEach(x => x.style.display = 'none');
    aiIcons.style.display = 'block';
  });


};
//----MAIN Callout----//

setInterval(updateClockPane, 1);
setInterval(updateDatePane, 1);
iconPaneControl();

