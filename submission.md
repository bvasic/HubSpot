# Submission Notes 

These notes will be read by HubSpot developers. Drop us a line!

Technologies that I will be using in the project are as following:

1. TECHNOLOGIES USED:<br>
	#NodeJS v11.7.0 LTS<br>
	#HTML 5<br>
	#Sass precompiler<br>
	#Koala v.2.3.0 for autocompiling .scss to .css<br>
	#jQuery library<br>
	#PM2 process manager for NodeJS<br>
	#DATA SOURCES : data.json for movies and free API for random quotes
<br>
2. VPS cloud instance running:<br>
	#Ubuntu 18.04 Server<br>
	#NodeJS v11.7.0 LTS<br>
	#Nginx 1.14.0<br>
	#PM2 process manager for NodeJS<br>
<br>
Application link: http://vps621397.ovh.net:7777/<br>

#################################
INSTRUCTIONS FOR RUNNING AN APP:
#################################
1. Backend code is located inside /src/js/index.js
2. Install pm2 : "npm install pm2 -g"
3. Update packages defined in package.json with "npm install update"
4. In shell enter folder "HubSpot/src/js/"
5. Run command "pm2 start index.js --watch"
6. Open URL: "localhost:7777" or hosted app on "http://vps621397.ovh.net:7777"
#################################

## Given more time, what would you have done differently?

_your answer here_
1. In that case I would use ReactJS or other javascript framework and I would use some UI framework to get responsiveness faster and nicer than in pure css and to make look and feel properly for all possible devices and orientation, I would also use database API instead of fixed json file. Also if I had more time I would refactor frontend javascript code for performance reasons.
I would also like to learn more and become more proficient in Angular because of realtime data binding which is very usefull for single page applications.
2. For dropdown menu where are categories for "Genre" and "Year" I would like to do it dynamic from the json categories provided so that its not only 4 of them harcoded if I was given more time
3. I would also include search input[text] based on keywords of genre, titles, or year published, and make better user experience for results based on multiple selections
4. I didn't use gulp or webpack now (had some issues with npm packages locally) because I need to learn it better first, so for NodeJS apps im just using manually package.json for dependency modules and manually entering libraries like javascript, css etc..

## Is there anything else you'd like to let us know?

_your answer here_
I had some issues while configuring gulp and webpack so I focused on app functionality and manually adding dependencies,
but at the time being while I already sent code and live link to Ashley, Im troubleshooting it and doing my best to integrate it in solution. I will be happy if I can send you with gulp or webpack at later stage if that is ok with you.
Thank you.

I recommend using pm2 process manager for running an app with --watch attribute.




Thank you very much for your time and consideration.

Looking forward to your feedback.

Kind regards,
Bojan Vasic