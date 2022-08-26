# PasswordGenerator
A simple password generator written in javascript

## Purpose
This is a simple password generator which is able to build lexically complex passwords with minimal user inputs

## Built With 
- HTML 
- CSS
- Javascript

## Live site

https://auralise.github.io/PasswordGenerator/

![password-generator](https://user-images.githubusercontent.com/9697002/186840750-78e00fa1-3aa5-4075-9054-89c5b1d33072.png)

## Contribution 
- HTML and CSS were provided by 2U education services.
- Javascript by James Prince

## Challenges
The primary challenge for this task was user input validation. Because javascript is a weakly typed language, type checking can be somewhat frustrating. Thankfully, there was a simple solution, using isNaN with parseInt to check if it was a number or checking if the input string included a "." to check for floats. 

## Notes
As this program stands, it does not do anything to ensure the even distribution of different characters which can lead to wildly varying results. It is certainly possible to include some form of value weighting (i.e. if the last 5 characters have not been of a specific type, increase the chances of a specific type being input). I decided not to try to implement this as it was outside of the scope of the assessment criteria. 
