SKILL GAP ANALYZER - JAVA BACKEND
===================================

This is the beginner-friendly Java backend for the Skill Gap Analyzer project.

CURRENT FLOW
------------
HTML + CSS + JavaScript
          |
          v
Java Backend (Port 8080)
          |
          v
/login
          |
          v
Name + Email
          |
          v
JSON Response


REQUIREMENTS
------------
1. Java JDK 17 or newer
2. VS Code / Eclipse
3. Your existing Skill Gap Analyzer HTML + CSS files


FOLDER STRUCTURE
----------------
Skill-Gap-Analyzer-Java-Backend/
|
|-- src/
|   `-- SkillGapBackend.java
|
|-- frontend-connection/
|   `-- script.js
|
`-- README.txt


HOW TO RUN JAVA BACKEND
-----------------------

STEP 1:
Open the project folder in VS Code.

STEP 2:
Open Terminal.

STEP 3:
Compile:

javac -d out src/SkillGapBackend.java

STEP 4:
Run:

java -cp out SkillGapBackend

You should see:

Skill Gap Analyzer Java Backend started!
Server running at: http://localhost:8080


CONNECT FRONTEND
----------------
Replace your current script.js with:

frontend-connection/script.js

This JavaScript sends the login form data to:

http://localhost:8080/login


IMPORTANT
---------
Start the Java backend BEFORE submitting the Login form.

If the backend is not running, the browser will show a connection error.


CURRENT LIMITATION
------------------
At this stage, data is NOT permanently stored in MySQL.

The backend only receives Name and Email and sends a response.

NEXT DEVELOPMENT STEPS
----------------------
1. MySQL database connection
2. Save users in database
3. User dashboard
4. Skills input
5. Skill-gap calculation
6. Resume PDF upload
7. Apache PDFBox for resume text extraction
8. AI/API integration
9. Job/company skill requirements
10. Learning-resource recommendations
