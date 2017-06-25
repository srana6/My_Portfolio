/**
 *Bio Object
 */

var bio={
  "name" : "Sumit Rana",
  "role" : "Software Developer",
  "contacts" : {
    "mobile" : "+1 312-608-7511",
    "email"  : "srana6@hawk.iit.edu",
    "github" : "https://github.com/srana6",
    "linkedin": "https://www.linkedin.com/in/ranasumit/",
    "location": "Chicago, IL"
  },
  "bioPic":"images/profilepic.jpg",
  "skills": ["Core Java", "J2EE", "HTML5", "CSS3", "JavaScript", "Python", "MySQL", "jQuery"],
  display: function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedAddress = HTMLlocation.replace("%data%",bio.contacts.location);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);

    var formattedImage= HTMLbioPic.replace("%data%",bio.bioPic);


    $("#header").prepend(formattedImage+" "+formattedName+" "+formattedRole+" "+formattedAddress);
    $("#topContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLinkedin);
    $("#footerContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLinkedin);

  }
};

/**
 *
 * Summary Object
 */

var summary={
  "description":"I am a new graduate with a Masters in Computer Science from Illinois Institute of Technology, Chicago"+
                " My Key Skills include Core Java, Java EE, Spring MVC, Hibernate, HTML, CSS, JavaScript, JSP, Servlet, Mobile Development, Python, Maven, SDLC, OO Programming, C++, MySQL, MongoDB, and Microsoft SQL 2012."+
                " I worked as a Java/Android Developer Intern at InterpreterTap. I previously worked at Horizon Blue Cross Blue Shields, NJ as a Software Engineering Summer Intern."+
                " Adapt & Improvise- that's what I believe in. Please scroll down to know more about me.",

  display: function(){
      $("#summary").append(HTMLsumStart);

      var formattedDescription = HTMLsumDescription.replace("%data%",summary.description);
      $(".sum-entry").append(formattedDescription);
  }
};

/**
 *
 * Work Experience Object
 */

var work={
  "job1":{
    "companyName":"Interpreter Tap",
    "title":"Java Developer Intern",
    "location": "Chicago, IL, USA",
    "dates" : "August, 2016 - May, 2017",
    "responsibilities":"Wrote efficient, maintainable code for the application. Individually, I have written 8000-9000 SLOC in Java.<br>"+
                        "Developed the full front end of the application and deployed first version of the app on Google Play Store- https://goo.gl/CwTSjc.<br>"+
                        "Worked with the back end team in deploying REST API over JSON and wrote SQL queries to perform CURD operations on database.<br>",
  },
  "job2":{
    "companyName":"Horizon BCBS NJ",
    "title":"Software Engineering Intern",
    "location": "Newark, NJ, USA",
    "dates" : "May, 2016 - August, 2016",
    "responsibilities":"Assisted Service Desk team in running software scripts on clients’ laptop which resulted in increased customer satisfaction.<br>Contributed to the design and maintenance of all SQL Server database systems.<br>Assisted in daily administrative activities including replication monitoring, transaction log shipping monitoring, database mirroring, and tuning.<br>"
  },
  display: function(){
    $("#workExperience").append(HTMLworkStart);

    var formattedCompanyName1 = HTMLworkEmployer1.replace("%data%",work.job1.companyName);
    var formattedTitle1= HTMLworkTitle1.replace("%data%",work.job1.title);
    var formattedLocation1= HTMLworkDates1.replace("%data%",work.job1.dates);
    var formattedDates1= HTMLworkLocation1.replace("%data%",work.job1.location);
    //var ar = work.job1.responsibilities;
    var formattedDescription1=HTMLworkDescription1.replace("%data%",work.job1.responsibilities);
    /*for(var i=0;i<ar.length;i++){
        formattedDescription+=HTMLworkDescription1.replace("%data%",ar[i]);
    }*/

    $(".work-entry").append(formattedCompanyName1+formattedTitle1);
    $(".work-entry").append(formattedLocation1);
    $(".work-entry").append(formattedDates1);
    $(".work-entry").append(formattedDescription1);

    var formattedCompanyName2 = HTMLworkEmployer2.replace("%data%",work.job2.companyName);
    var formattedTitle2 = HTMLworkTitle2.replace("%data%",work.job2.title);
    var formattedLocation2 = HTMLworkLocation2.replace("%data%",work.job2.location);
    var formattedDates2 = HTMLworkDates2.replace("%data%",work.job2.dates);
    var formattedDescription2= HTMLworkDescription2.replace("%data%",work.job2.responsibilities);

    $(".work-entry").append(formattedCompanyName2+formattedTitle2);
    $(".work-entry").append(formattedLocation2);
    $(".work-entry").append(formattedDates2);
    $(".work-entry").append(formattedDescription2);
  }
};

/**
 *
 * Projects Done Object
 */

var projects={
  "projectDetails":[{
    "projectName":"InterpreterTap App",
    "url":"https://github.com/srana6/InterpreterTapGit",
    "technologiesUsed":"Android Studio, Java, XML, HTML5, CSS, JavaScript, PHP, MySQL ",
    "projectDescription":"Developed an Android App for the language interpretation service so far I have implemented video call, audio call, and text interpretation features using Multithreading, Microsoft APIs, QuickBlox APIs and so on.",
    "projectImage":"images/tap.png"
  },{
    "projectName":"Best-Buy Website",
    "url":"https://github.com/srana6/Best-Deals-Website",
    "technologiesUsed":"JSP, Servlet, MySQL, Hibernate, AJAX, Spring, HTML, CSS, JavaScript, REST APIs over JSON, and Python",
    "projectDescription":"Developed an E-Commerce website where users can place orders for electronic gadgets. In addition, the user can give reviews and ratings and see trending products.Added functionality where Admin can add, update, and delete the product information and orders.",
    "projectImage":"images/bb.png"
  },{
    "projectName":"Chicago Car-Rental Website",
    "url":"https://github.com/srana6/ChicagoCars",
    "technologiesUsed":"JSP, Servlet, MySQL, Hibernate, AJAX, Spring, HTML, CSS, JavaScript, REST APIs over JSON, and Python",
    "projectDescription":"Developed a Car Rental website where customers can book a car depending upon their choice and budget.Implemented user reviews and order history features. In addition, Admin can add, update, modify and delete the cars’ information.",
    "projectImage":"images/cc.png"
  }],
  display:function(){
    $("#projects").append(HTMLprojectStart);

    for(var elements in projects.projectDetails){
      var formattedProjectName = HTMLprojectName.replace("%data%",projects.projectDetails[elements].projectName);
      var formattedProjectName = formattedProjectName.replace("%url%",projects.projectDetails[elements].url);
      var formattedProjectTechnologies = HTMLprojectTechnologies.replace("%data%",projects.projectDetails[elements].technologiesUsed);
      var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projectDetails[elements].projectDescription);
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projectDetails[elements].projectImage);

      $(".project-entry").append(formattedProjectName);
      $(".project-entry").append(formattedProjectTechnologies);
      $(".project-entry").append(formattedDescription);
      $(".project-entry").append(formattedImage);
    }
  }

};

/**
 *
 * Education Object
 */

var education={
  "educationDetails":[{
    "universityName":"Illinois Institute of Technology",
    "degree":"Masters of Science",
    "dates":"August, 2015 - May, 2017",
    "gpa":"3.5/4",
    "location":"Chicago, IL, USA",
    "major":"Computer Science"
    //"coursework":"COURSEWORK: Advance Database Organization, Information Security, Computer Networks, Intro to Algorithms, Mobile Application Developement, Software Project Management, Online Social Network Analysis, Software Testing, Enterprise Web Development and Theory of Computation"
  },{
    "universityName":"Kurukshetra University",
    "degree":"Bachelors of Technology",
    "dates":"August, 2010 - June, 2014",
    "gpa":"3.7/4",
    "location":"Kurukshetra, HR, India",
    "major":"Computer Science"
  }],

  display:function(){
    $("#education").append(HTMLeducationStart);

    for(var elements in education.educationDetails){

      //$("#education").append(HTMLeducationStart);

      var formattedUniversityName = HTMLeducationName.replace("%data%",education.educationDetails[elements].universityName);
      var formattedUniversityDegree = HTMLeducationDegree.replace("%data%",education.educationDetails[elements].degree);
      var formattedUniversityDates = HTMLeducationDate.replace("%data%",education.educationDetails[elements].dates);
      var formattedUniversityLocation = HTMLeducationLocation.replace("%data%",education.educationDetails[elements].location);
      var formattedUniversityMajor = HTMLeducationMajor.replace("%data%",education.educationDetails[elements].major);
      var formattedUniversityGpa = HTMLeducationGpa.replace("%data%",education.educationDetails[elements].gpa);

      $(".education-entry").append(formattedUniversityName+formattedUniversityDegree);
      $(".education-entry").append(formattedUniversityDates);
      $(".education-entry").append(formattedUniversityLocation);
      $(".education-entry").append(formattedUniversityMajor);
      $(".education-entry").append(formattedUniversityGpa);
    }
  }

};

/**
 * Calling of all the display functions
 */

bio.display();
summary.display();
work.display();
projects.display();
education.display();

/**
 * Array of Images
 * @type {Array}
 */
var arImages = ["images/profilepic.jpg",
                "images/profilepic1.jpg",
                "images/profilepic2.jpg"];
var profileImage = document.getElementById('profile-picture');
var x = 0;

/**
 * Changing of the profile image every 30 seconds
 */

setInterval(function () {
    profileImage.src = arImages[x];
    x+=1;
    if(x === arImages.length){
        x = 0;
    }



},4000);


/**
 * jQuery function whenever document is ready
 */

$(document).ready(function() {

    /**
     * Open github and linkedin in new window on click operation
     */

  $(".gitlink").click(function() {
    window.open("https://github.com/srana6","_blank");
  });

  $(".linkedinlink").click(function(event) {
    window.open("https://www.linkedin.com/in/ranasumit/","_blank");
  });

  $(".desc").css("font-size","14px");

  $(function (){
    var navPosition = $("#nav-bar").offset().top -10;
    var navBar = document.getElementById('nav-bar');
    var header = document.getElementById('header');

    function navControl(){
      var currentScroll =$(document).scrollTop();
      if(currentScroll >= navPosition){
        navBar.classList.add('fixed-nav');
        header.classList.add('expand-header');
      }else {
      navBar.classList.remove('fixed-nav');
      header.classList.remove('expand-header');
    }
    }
    $(window).scroll(navControl);
  });

});
