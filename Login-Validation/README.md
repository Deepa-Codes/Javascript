Sign Up Form Validation (Vanilla JS)

A responsive Sign Up form built using HTML, CSS, and Vanilla JavaScript with client-side validation.
This project demonstrates proper form validation logic, error handling, and UI feedback without using any libraries or frameworks.

✨ Features

Required field validation for all inputs

Username validation (minimum 5 characters)

Email validation using regex

Strong password validation:

Minimum 6 characters

At least 1 uppercase letter

At least 1 number

At least 1 special character

Confirm password match validation

Show / hide password functionality (eye icon toggle)

Error messages displayed per field

Success message shown only when all validations pass

Success message auto-clears after 2 seconds

All inputs reset after successful submission

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

Font Awesome (for eye icon)

📂 Project Structure
signup-form-validation/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── index.js
└── README.md

🧪 Validation Rules
Field	Rules
Username	Minimum 5 characters
Email	Valid email format
Password	1 uppercase, 1 number, 1 special character, min 6 chars
Confirm Password	Must match password
🚀 How to Run

Clone the repository

git clone https://github.com/Deepa-Codes/Javascript.git


Open index.html in your browser

Fill the form and test validations

📸 Screenshot

🧠 What This Project Demonstrates

Proper form validation flow

Error-state management per field

DOM traversal and manipulation

Regex usage for email and password validation

Clean separation of concerns (HTML / CSS / JS)

Beginner-to-intermediate level JavaScript logic

📌 Future Improvements

Real-time validation while typing

Disable submit button until form is valid

Password strength indicator

Accessibility improvements

Mobile-first enhancements

👤 Author

Deepa K
Frontend Developer | React
GitHub: Deepa-Codes
