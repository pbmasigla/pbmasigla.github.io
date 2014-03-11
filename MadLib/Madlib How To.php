/*
How to Create a Madlib and Put it Online

PART 1: Seting Up Sublime
Any text editor can be use to write the code, such as Notepad, TextWrangler, Notepad++, XCode. Although, Sublime is the text editor that we will be using to write our code in throughout the guide. It is free, easy to look at, and easy to use.

1. Go to your Desktop and create a folder called "Madlib"
2. Go to http://www.sublimetext.com/3 and download and install the appropriate version. 

	ATTENTION: If you do not know your operating system type and bit-type:

		Mac Users: A. Go to the top-left Apple and press "About This Mac".
		       	   B. Press "More Info" and another window will appear. You can find your software type here.
		   	       C. Now press "Hardware" on the left menu. Check "Processor Name". 
		           D. This option will determine what you have. Check this table.

	ATTENTION: If your Mac is earlier than 10.7 (10.6 or earlier), you will have to download Sublime 2 at http://www.sublimetext.com/2 

	    Windows Users:

3. Installing Sublime 2/3

	Mac Users: A. To install Sublime 2/3, simply press the download file.
		       B. Drag the Sublime application to your "Applications" folder.

	Windows Users:

---------------------------------------------------------------------------------------------------------------------------------------------------------

PART 2: Setting Up GitHub
GitHub was created as a version control system for projects. As in, multiple can save their code in one system without overwriting each other's code. Although, GitHub also created a new feature called GitHub Pages, where we will be able to put our website for free.  First, we need to make a few installations.

1. Creating a GitHub Account
	   A. Go to https://github.com/ and sign up for a free account. 
	   B. Make sure to hit the FREE MEMBERSHIP option
	   C. Don't worry about the other details and continue signing up

2. Creating the Repository
	   A. The repository is where we'll be moving our files to later.  To create one, press "New Repository".
	   B. In the blank box shown type in "YOUR USERNAME.github.io". For instance, if your username is pbmasigla, you would enter "pbmasigla.github.io". This will be your website's URL.
	   C. You can leave the other options blank and press "Create Repository"
	   D. Now your page should look something like this:
	   E. Make sure to verify your email!

3. Installing GitHub
   	   A. GitHub has its own system that we will be using. You must install the "Git" language on your machine in order to continue at https://help.github.com/articles/set-up-git
 	   B. Press "Download and Install the Latest Version of Git".
       C. You should be brought to the following page. Press the appropriate download option.
	   D. You should be brought to this download page also. If the download doesn't automatically start, press the "If your download hasn't started, click here to download manually" option.
       E. You will be redirected to the following page and the download should automatically start.
	   F. Open the downloaded file

 	Mac Users: A. Press the yellow package file to start the installation.
 			   B. Continue through the installation steps til it is installed

 	Windows Users: A. WILL NEED GITBASH

 4. Setting Up Git on Your Computer

 	Mac Users: A. Look for the Terminal application on your Mac using the finder and open it.

 	Windows Users: A. Look up GitBash and open it

 	All: B. Type in "git config --global user.name "USERNAME HERE"" and press enter. Ex. If your username is testMadLib, you type in "git config --global user.name "pbmasigla""
 		 C. Type in "git config --global user.email "EMAIL HERE"" and press enter. Ex. If your email is pbmasigla@yahoo.com, you type in "git config --global user.email "pbmasigla@yahoo.com"

---------------------------------------------------------------------------------------------------------------------------------------------------------

PART 3: The Basic Structure and Changing the Title

1. Open up Sublime and you will see a blank page. Save this page in your Madlib folder as "index.html". MAKE SURE YOU SAVE IT AS HTML
2. Let's view our page. 
   A. Go to your Finder or Windows Explorer and look for your index.html file. 
   B. Right-click and press "OPEN WITH" and select your web browser of choice.
   C. The web browser will open and it should just be a blank white page, as shown.

3. The basic structure of a webpage comprises of layers. 

	A. The outer layer is the HTML tag layer. In Sublime, we will add our <html> opening. Next, we add the closing </html> tag. A closing tag will always have a "/" character
	   ATTENTION: Whenever you open a tag, you must always close that tag or it will not work

	B. The next layer is the <head> tag. Add it within the <html> tags and MAKE SURE TO CLOSE IT. You can press "tab" to indent to keep the layers organized.
	   The <head> of the page will have some header info that will add soon

	C. Let's add a title to our page using the <title> tag. Put that INSIDE the <head> tag. When adding the title, add the opening and closing tags and the title between them, like so  <title>My Title for My Madlib Page</title>

	D. The next layer we add won't go into the <head> or the <title> tags, but it will go AFTER them. The next tag is the <body> tag, and this is where the main content will be. This <body> tag will hold the body of our code. Make sure to indent and close the tags. 
	   ATTENTION: Make sure to not mix up the tags and make sure everything is spelled correctly! 	

SAVE BREAK: Save the file and refresh your webpage in your browser. The title of the page is now the title that you set!

---------------------------------------------------------------------------------------------------------------------------------------------------------

Part 4: Writing the Form

1. Within the <body> tag, you will be creating an element calld the <form>. A form is an element that a user can fill out or submit.  In our form, we will have text boxes and a button. First, put the <form> within the body tag.

2. Time ask our first question. You can simply type in the question. As such. Let's ask the user to enter and adjective.

3. A. Next, we will add a textbox. A textbox is an <input> element and its type is a text type. in addition, we will name this element so we can refer to it in the future.  Make sure the name is descriptive of the element.
   B. <input type="text" name="WHATEVER NAME YOU WANT"> For this element, you don't need to close the tag.
   C. In order to go to the next line, we will add the <br> element after the <input>. <br> stands for break, so we're adding a break.

4. Add the next couple of questions you would to ask your user. Make sure the name for each input is unique and descriptive of that question.

5. A. Next, we will add the button.  The button is also an <input>, but its type is a "submit" type because we want to submit our info.  We will also be adding a value to the button, and the value is the text that will be on the button. Make that whatever you want! 
   B. We will add one more part to the button called "onClick". This will tell the user what to do when the button is clicked. We'll get to this later but add it.
   C. <input type="submit" value="Submit My Form!" onClick="">

SAVE BREAK: Save the file and refresh your page to see your questions and button appear! When you type in data, nothing should happen just yet. Now you're done with the form!

---------------------------------------------------------------------------------------------------------------------------------------------------------

Part 5: Writing the Javascript
Javascript is a web development language that will allow us to define actions that we want to be done. For instance, we will be writing a function that will take whatever the user inputs and makes it into a sentence. 

1. A. Our Javascript will be added to the <head> tag right after our title. The <head> is loaded before the <body> so this ensures that our Javascript code will run.
   B. To add the Javascript, we must put it into <script></script> tags, which is primarily used for Javascript

2. A. Next, we will start creating our function. Whenever the function is called, as in when we use it, it will do the actions that we say within the function. 
   B. Create a function by adding the following. function "NAME OF FUNCTION THAT YOU WANT" (form){}
   C. The word "form" in the parentheses measn the function will be used for a form. Like our form that we created!

3. Grabbing the User Input
   A. Next part, we will take whatever the user put in the textboxes and save them. To save data, we will be using variables. In Javascript, you simply put var NAME OF VARIABLE = whatever data you wanna save!
   B. Create the variable, but make sure you use a descriptive name that you haven't used already. For instance:
   C. Now, remember the names that you gave each textbox? Well we're using them now to grab the data! Add this part after the variable you created.
      form.TEXTBOX NAME.value;

      ATTENTION: When you write Javascript code, you have to say whenever the line is done by denoting ';'. This will cause major problems if you don't.

   D. Create unique variables for each input box!

4. Constructing the sentence.  
   A. Next, we will combine the user input words into one sentence. Like before, we will be storing this into a variable. of course we need to fill in the gaps of the words. To add more words, they must be in quotes tags " "
   B. To combine the sentence together, you use the + sign because you're adding them together.
      Ex. "My name is " + firstName + " " + lastName; 
  	  If firstName = "Patricia"
  	  and lastName = "Masigla"
  	  output = "My name is Patricia Masigla"

  	  ATTENTION: The " " tags with a space adds a space between variables.

  	C. Combine the variables like so, and make sure your variables are spelled correctly.
  	D. To make the output (the sentence) display on the screen, copy this function:
  	   document.write(WHATEVER YOUR OUTPUT VARIABLE IS CALLED);

5. Calling the function
	A. now that we created the function, we have to call it so we can use it. In the form in the body, go to the button. Rememeber where we put onClick="" but didn't add anything? We're going to add something inside!
	B. Inside the onClick, put the name of the function followed by a parentheses and put "this.form" inside.
	   For instance, if my function is called "makeMadLib" it would like 
	   onClick = makeMadLib(this.form);

SAVE BREAK: Save your file and refresh! Now when you input data in the textboxes and press the button, the sentence should display!

---------------------------------------------------------------------------------------------------------------------------------------------------------

Part 6: Pushing to GitHub
We have already made an account to GitHub, so now we have to "push" or code to the account.

1. Go to GitHub at https://github.com/ and press the link for the repository that you made.

2. Copy the link here and open up your UNIX editor

	Mac Users: A. Open up the Terminal Application

	Windows Users: B. Open up GitBash

3. Find your Desktop in your unix 

	Mac Users: A. Type in "cd Desktop"

	Windows Users:


	Your UNIX should look something like this:

	If you type in "ls" as such, it will list all of the files in your desktop, such as your Madlib folder

4. Clone the Repository
   You must have a version of your online repository on your computer, so now type in "git clone " and the link that you copied from GitHub
   Ex. git clone https://github.com/pbmasigla/pbmasigla.github.io.git

   Now if you check your desktop, you should have a folder with your USERNAME.github.io. This is your GitHub Folder! Make sure to not rename it.

5. Copy the files
   Copy the index.html file in your Madlib folder into the GitHub folder on your desktop.
   Your GitHub folder should now just have the index.html file inside of it

6. Pusing to the Repository
   A. in your Unix editor, type in so we can get into the folder:
      cd GITHUB_USERNAME.github.io
   B. For the next part, TYPE IN EVERYTHING EXACTLY
   	  1. git add .
   	  2. git commit	-a -m "Add files to my website"
   	  3. git push origin master

   	These things will appear, and that means you "pushed" successfully to Github!

7. Check the site
   A. Give the site about 10 minutes. Then, check your website at USERNAME.github.io and your site is live!

*/