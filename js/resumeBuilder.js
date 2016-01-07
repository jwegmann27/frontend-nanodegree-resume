//Objects
var name = "Joseph Wegmann";
var bio = {
	"name": name,
	"role": "Front End Web Developer",
	"welcomeMessage": "Wubba Lubba Dub Dub!!!",
	"contacts": {
		"email": "josephwe27@gmail.com",
		"mobile": "(516) 650-2778",
		"git": "jwegmann27",
		"linked": "https://www.linkedin.com/in/joseph-wegmann-8001aab2"
	},
	"location": "Hicksville, NY",
	"skills": ["cleaning dishes", "HTML", "CSS", "Being a baller"],
	"image": "images/jwclean.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "JEMCO Electrical Contractors",
			"title": "Engineer",
			"location": "Sunset Park, Brooklyn, New York",
			"dates": "08/01/15 - 11/15/15",
			"description": "Responsible for managing sub-contractors during for active projects. Estimated various large scale projects for public agencies in New York City. Worked in both office and field locations."
		},
		{
			"employer" : "Queens Midtown Tunnel",
			"title" : "Engineering Intern",
			"location": "Long Island City, New York",
			"dates" : "05/30/13 - 08/15/13",
			"description" : "Assessed construction needs of the Queens Midtown Tunnel, attended meetings to discuss upcoming renovations, and organized project files to optimize accessibility."
		},
		{
			"employer" : "Old Westbury Golf and Country Club",
			"title" : "Banquet Server",
			"location" : "Old Westbury, New York",
			"dates" : "Summer of 2011 and Summer of 2012",
			"description" : "Setup and Served meals at formal and informal events. Functions varied in size from 20 - 400 guests. Lerned to multitask and work collaborativly in high pressure situations."
		}
	]
};

var education = {
	"schools": [{
		"name": "University at Buffalo",
		"location": "Buffalo, NY, USA",
		"degree": "Bachelors of Science",
		"major": "Electrical Engineering",
		"GPA": "3.37/4.0",
		"dates": "August 2011 to May 2015"
	}, {
		"name": "Ecole Nationale Supérieure de l'Electronique et de ses Applications",
		"location": "Cergy, France",
		"degree": "FAME Exchange Program",
		"major": "Electrical Engineering",
		"dates": "01/20/14 - 06/15/14"
	}],
	"onlineCourse": [{
		"title": "Front End Web Development",
		"school": "Udacity.com",
		"dates": "12/01/15",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};

var projects = {
	"projects" : [{
		"title": "Project 1: Online Portfolio",
		"dates": "11/15/15 - 12/15/15",
		"description": " Created a responsive web page to act as a platform for future work to be displayed.",
		"url": "https://github.com/jwegmann27/P1_Potrfolio.git"
	}]
};// end of obj 

//Header
function headerbio(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.git);
	$("#topContacts").append(formattedGit);
	var formattedLinked = HTMLtwitter.replace("%data%", bio.contacts.linked);
	$("#topContacts").append(formattedLinked);
	var formattedLocation = HTMLlocation.replace("%data%", bio.location);
	$("#topContacts").append(formattedLocation);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.image);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMSG);

	$("#header").append(HTMLskillsStart);
	for(var i =0; i < bio.skills.length; i++){
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
	}

} //end of bio function
headerbio();

function displaywork(){

for(job in work.jobs){ //cycles all jobs in the work object 
	$("#workExperience").append(HTMLworkStart); //The # followed by a title references the html div

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDescription);
}//end of for/in
}//end of displayWork

displaywork();

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDates.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
	}//end of for
}//end of func

projects.display();

function inName(name) {

	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();


	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

var x,y;
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//Map
$("#mapDiv").append(googleMap);
//function locationizer(work_obj)(){} 
