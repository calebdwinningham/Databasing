### Project Title: Soracle
### Team Members:
+ Team Member 1: Caleb Winningham
+ Team Member 2: Nick Harron

### Description
Soracle is a twitteresque platform that will enable users to create an account and post predictions of events that will take place at least a week into the future. This service will enable individuals to "call" events before they happen, as their soracle post from the past would post the day of the event. An example of this would be an individual saying that their football team would win the Superbowl months before the current season had even started. While many users would post predictions that would undoubtedly prove to hold false in reality, the ones that ended up being true would be interesting to say the least.

Our website will be using bootstrap to help make the front end look nicer. There will be three pages: the first is the sign in page which will allow users to sign in to their account, the second page will contain all of the posts which have been posted and the third page will be the profile page which will allow people to modify their account. 

The intended user would be anyone who wants to be cool and predict things with their friends, so basically anyone. The intended customer is corporations which want to harvest predictions in order to be able to tell the future.

### Installation Instructions
List here any specific installation instructions required to initialize the web application. If you followed the submission instructions it should be as simple as:

+ Requires MongoDB/MySQL Server to be running
+ `initialize.bat` to resolve dependencies and to seed the MongoDB/MySQL server
+ `npm start` to begin the application
+ localhost:3000 will bring you to the page you need for the tracer portion of the assignment

### Functionality Shortfalls
List here any functionality shortfalls in your program. Identify those specific areas that your submission doesn't meet the assignment requirements or your own design specification. This section will be updated for both Sprint 1 and the Final Submission

### Specification
1. The user will log in before being granted access to see or post on the soracle homepage
    1. The user will trigger an error if they submit only a username, only a password, or neither when submitting a login
    2. The user's entries will be parsed prior to checking with a database to ensure data security and to avoid malicious attacks
    3. If a login is invalid or fails to meet login requirements, the user will receive a visual error warning detailing what is invalid
    4. Malicious data will not be executed or displayed on the HTML page once detected
2. Any post submitted by a user will be limited to 140 characters
    1. The length will restrained via HTML code
    2. The length and content of a post will be tested once submitted to ensure that the post contains no malicious code and that the length limitation was adhered to
    3. The user will receive a visual error warning once the post is submitted if the post is invalid
    4. Invalid posts will not be added to the database following a user submission
3. When updating a user email or password, the data will be parsed to ensure that no malicious code is submitted and that valid information is required
    1. Email and password strings will be validated before being added to a database
    2. Emails will contain an '@' character and will not contain any invalid characters
    3. Passwords will meet a minimum length requirement
    4. Both email and password changes submitted by a user will trigger a visual error warning if they are invalid or contain malicious code
    5. Invalid or malicious submissions will not be added to the database or reflected within the HTML
4. Soracle posts will be ordered with the newest posts on top and the oldest posts on the bottom
    1. The date and time for each entry will be stored in the database with every soracle user submission
    2. If the date and time received from a user's system are found to be invalid, the user will trigger a visual error warning informing them of the problem
    3. If a date or time is found to be invalid, the post will not be added to the database

### Development Plan
#### Sprint 1:
+ Caleb Winningham: server-side data validation, client-side data validation, database query processing, insertion into a database, XSS defense
+ Nicholas Harron: SQL injection defense, create document with an embedded document, user authentication, page is inaccessible to unauthenticated user, CSS formatting and bootstrap
+ Requirements for Sprint 1:
    1. Requirement 1.1
    2. Requirement 1.2
    3. Requirement 1.4
    4. Requirement 2.1
    5. Requirement 2.3
    6. Requirement 3.1
    7. Requirement 3.3
    8. Requirement 4.0
    9. Requirement 4.1

#### Final:
+ Caleb: I will work primarily on the security of the site, polishing off how we are going to handle passwords and avoid attacks. On top of this, I will also be ensuring that the server works as needed.
+ Nick: I will work on polishing off the aesthetics of the site. A large part of this will be becoming familiar with bootstrap and really utilizing the full capability of CSS to make the site look complete and fully functional. I will also use a branch here to fulfill that requirement.
+ Requirements for Final Submission(All Remaining):
    1. Requirement 1.3
    2. Requirement 2.2
    3. Requirement 2.4
    4. Requirement 3.2
    5. Requirement 3.4
    6. Requirement 3.5
    7. Requirement 4.2
    8. Requirement 4.3

### Documentation:
#### Tracer Bullet Submission
 1. Caleb: None, besides the files Lt Col Watkinson authorized us to use
 1. Nick: None, besides the files Lt Col Watkinson authorized us to use

#### Design Specification Submission
 1. Caleb: We used the provided JSON link to make our schema, but none other than that
 2. Nick: Just the JSON site to make our schema; other than that, none.

#### Sprint 1 Submission
 1. Caleb and Nick: Used this website to find bootstrap components: http://getbootstrap.com/components/. We watched this video to aid with our understanding: https://www.youtube.com/watch?v=gqOEoUR5RHg. Also, we used the cs364_auth package to help implement the client and server validation.

#### Final Submission
 1. We did not add any other bootstrap elements so we have really nothing to document besides coming into you for EI and your provided AUTH package

### Reflections:
#### Design Specification Reflections:
+ Caleb:
  I learned a lot about the essential role that planning plays when it comes to developing a project with this amount of moving parts. Just thinking of requirements took me a lot longer than I would have initially anticipated, and that was just one of many areas that we had to consider when initially designing this site and database. For this phase, I worked a lot with the requirements and getting the schema to work on JSON, and my big concern for the next phase is converting our site plans to a reality. 
+ Nick:
  I learned about how to put together a Git repository, how to put together a sitemap as well as how to structure a database in Mongo.

#### Tracer Bullet Reflections:
+ Caleb:
  This portion of the assignment really helped me to truly understand how each piece actually worked with the other portions of code, for up till now that had never truly sunk in for me. After painfully trying to get this to work, I actually learned how to use it. In the future I know there will be a lot more data that I am trying to extract, but for now I feel prepared to handle it all.
+ Nick: 
  For this part of the project I learned what components will be needed for this site to become a reality.
  

#### Sprint 1 Reflections:
+ Caleb:
  During this sprint I learned how to effectively use bootstrap. By implementing the forms and html, I also learned how all of the pages work with each other and how the authentication actually works for the data inputs. For the future, I am a little bit worried about the complete functional use of angular.js but am confident that we can figure it out.
+ Nick: 
  In order to complete this sprint I had to learn how to use bootstrap. Then I had to make sure our website had client and server side data validation. Lastly, I was able to figure out how to embed a document in mongo.
  

#### Final Reflections:
+ Caleb:
  For the final reflection I feel like I can truly understand just how frustrating databases and database design can be! We spent a lot of time adding features and taking them away and debugging to get to the working(for the most part) model that we have today. In terms of functionality, we did not complete some of our more bold requirement projections, but by and large we have a product that met our original idea and are happy to stand by it. In the future, I feel like I could produce a database based off of the knowledge and tedious work-based enlightenment that spawned as a result of this project.

On this project alone, I put in close to 32 hours. Understanding what exactly the code was doing, how the components were interacting with each other, and how additional features like bootstrap was implemented took a lot of trial and error. While our database is not the best, especially after seeing presentations like Garrett's, I feel like we by and large took away a lot of what you intended for us to. Depending on what I got on the last GR, I feel like I'd deserve a grade between a B and A in the class. I've enjoyed the semester, and I can honestly say that I've learned a lot!  

+ Nick:
  After finishing the project, I feel like I learned a lot about the development process that occurs when people have to create large scale-able websites. I learned how to work with a partner and break up work accordingly. A large part of the project was figuring out what worked and what didn't and trying to align our vision for the website with what we were capable of doing. Services like bootstrap were invaluable but in the end it came down to making sure we understood how to work with mongo and making sure the website presented the info from the database correctly. I feel like I learned a lot from this project, even though it was confusing at times. 

  With this project I probably put in close to 15 hours of work. And even though I learned a lot I know that without Caleb's help this project would've been drastically undeveloped. He put in much more work then me outside of when we met to work on the project and when we met he was always working diligently. I think as far as this project goes I should probably get something in between a B- and a B. In the course I put in a lot of work and think I should get between an A and a B+.


Functionality Shortfalls:
In terms of functionality, we failed to complete our requirements 2.1, 2.2, 2.3 and 4.1, 4.2, 4.3, which both concerned code features that would have been nice to have in our code. Requirement 2 focused on characters in a tweet while 4 focused on the order in which posts would be displayed. In the end, these are more so features than demonstrations of our knowledge of databases, which we felt we exemplified through our CRUD demonstration pieces. All in all, this was a very frustratingly rewarding final project!

### Dependencies
 + JQuery 2.2.0
 + AngularJS 1.4.9
 + Express 4.13.4
 + Body-Parser 1.15.0
 + MongoDB 2.1.16
 + Path 0.12.7
 + Bootstrap 3.3.6
 + Mongoose 4.0.0
 + CSURF 1.6.1