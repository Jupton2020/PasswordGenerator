# PasswordGenerator

## Description

I have been tasked with creating a random password generator based on user-selected criteria. 
This password should be:

* 8-128 characters long
* Ability to include special characters, numbers, lower case letters, and upper case letters.
* One character type must be selected. 
* The application should fit multiple screen sizes.
* The application should give the option to copy the password to the clipboard.

## Details of my page

I combined aspects of HTML, CSS, JS, and Bootstrap to make a fully functioning password generator. I was provided with starting elements to my HTML and JS documents. I used Bootstrap  with rows and columns, combined with CSS to help style and center my application and also make it responsive.

My main focus was JavaScript. I set variables in order to capture all types of text (characters, numbers, symbols) for generating a password. Instead of having the user answer questions about what characters they wanted in their random password, I installed input 'checkboxes' to allow the user to customize as they wish. To ensure that one character type was selected, the default character type would be all lower case letters. The user also could interect with a 'number' box to select a password length from 8-128 characters. 

With the "generate" and "copy to clipboard" buttons  already written into the JS, I was able to make the random password populate in the textbox and also allow the user to copy the password to the clipboard. The user is alerted when the password is copied succesfully.

Because I did not have the user answer questions and had them use 'checkboxes' I was able to use the "generate" button and my "checkboxes" to have and Event Listener on my application. 






