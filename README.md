Name: Nadezhda Krylova
Private email: nadezhda.krylov@gmail.com.  

These exercises were given by ITC (itc.tech);  
The solutions are mine.  

# NodeJs Exercises

For the following exercises there will be multiple solutions that will work for any given problem you encounter.  
Any solution that solves the problem is a correct solution.  
There will likely be a few functions you will need to look up in order to complete the exercises.  
Good luck!

## Ex 1

Create a file called square.js that takes a number between 1 - 10 as an argument in the command line.

The file should log out a square based on the number passed in.

- Input: `1`  
  Output: \#

- Input: `2`  
Output:  
	\#\#  
	\#\#  

- Input: `3`  
  Output: <br>
  \#\#\# <br>
  \#\#\# <br>
  \#\#\# <br>

Be sure to handle cases where anything between 1-10 is not passed in and print an appropriate message.

## Ex 2

Build a function that creates a log file:
**myLog(msg, relativePath)**:

_msg_ - is the text that will be saved in the log file;  
_relativePath_ - the path where the file should be saved;

- If path doesn’t exist create it (This includes directories)
- Log entry should be in the following format: **dd/mm/yyyy hh:mm:ss: msg**
- Every entry starts at a new line
- Catches any errors

## Ex 3

**The task from ITC:** Create a **.txt** file that will represent a blog post, you can use *Lorem Ipsum* text.  
Create a simple server that when you visit the home page it will return the contents of a txt file.       

**What I did:** I  created .txt file (using fs.writeFileSync), but I didn't use it the next steps.   
Also I created index1.html with some HTML code.  
I made the server to return the index.html page.  

## Ex 4

Create a web server that has 3 html pages: **index**, **about** and **404**.

When a user attempts to go to the **home** page they should get the **index.html**, same with **about.html**.

If they go to any route that doesn’t exist they should get a **404** page.

---

## Ninja Exercises

## 1

Create a function the copies all the content from a directory into another directory

1. function signature: copyDir(sourceDir, destDir)

2. If destination path doesn’t exist create it

3. Catch relevant errors

## 2

Create a function printContents that receives a directory path as string, and prints into a text file named contents.txt the names of all the files and directories within the path

1. create the file if doesn't exist
2. the file should be located in the parent folder of the path given
3. Catch relevant errors

## 3

Create a function that receives a directory path as string, and deletes that path including all files and directories within it.

## 4

Create a function which will read the a text file and replace each whitespace within the file with a new line and save it using the same file name.

## 5

Create a function that receives a path to a file, and the function will convert every fourth word within the file to be uppercase.

The function will return the count of all the words that were modified.

## 6

Create a function that receives a dir path, and verifies it exists (raise an error if it doesn’t)
Afterwards it loops through all the files and directories and prints the names of all the directories.

## 7

Create a function that receives 2 paths of 2 text files
And the function returns a list containing all the words that exists in both text files

## 8

Create a function that receives a directory path as string, splits the path to a list and writes them in a new text file (called dirs.txt) each directory alongside with its index from the list
Example:
Path = C:\john\smith\lib\folders
dirs.txt:
john 1
smith 2
lib 3
folders 4
