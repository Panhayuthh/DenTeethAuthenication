# Project overview :
Our project is called Denteeth. It’s an app that can help users do early diagnosis by scanning their teeth through our app, and our app will recommend a solution or help users make an appointment with a doctor nearby. 

## Authentication function : 
In our app, authentication plays a crucial role in ensuring the security and privacy of user data. The authentication system allows users to register an account, so their information will be stored in our database, and we will protect their privacy with our authentication system. And also log in to access the app’s features, including early diagnosis of dental issues and making an appointment with a doctor.

## Technology :
- React framework
- Spring framework including
- Spring Security
- Spring data JPA
- Spring mail sender
- Postgres Database

## Security Measures : 
- Hashing and Salting: By hashing and salting passwords, we enhance security by preventing unauthorized access to our users. 
- Input Validation : The input of user registration or log-in must meet the requirements, such as the minimum complexity requirement, to reduce the risk of password-related security breaches.
- Login and registration DTO: control the data being transferred from client to server, enabling users to include only the necessary information for authentication and registration. This can help prevent overexposure of sensitive user data, reducing the risk of security breaches. This is also a separation between registration and login operations.

## Registration process :

- **Input Validation:** The system verifies only the email in the correct form (i.e username@gmail.com). And the password must be a minimum length of 8 characters with a special character.
- **Hashing Password and Username:** The password is securely hashed using the bCryptencoder algorithm from spring security for each password, and the encoded password is stored in the database instead of the actual password.
- **Database storage:** User data, including username, email and hashed password, is stored in the postgres.
- A verification email is then sent to the user account for them to click. Once they do so their account will be activated. By doing so, they will be able to login and access our service.

- User registration workflow:
![image](https://github.com/Panhayuthh/DenTeethAuthenication/assets/131462899/e06d66aa-8765-479f-8364-a1e7a4720199)

- verification workflow:
![image](https://github.com/Panhayuthh/DenTeethAuthenication/assets/131462899/80f569b9-706d-4365-8859-8570337dfd50)

- Registration Interface :
  
![image](https://github.com/phanreach/rean/blob/main/login.png)
- It will show an error message if user input does not match the format.


## Login Process:
- First the user email and password is checked with the user data from our database
- If the input information is not matched or the user is not activated, they will not be able to access the application.
- Hashing input password: The input password is hashed using the same bCryptencoder algorithm and salt used during registration.
- Comparison: The hashed input is compared with the stored hashes associated with the user's email and password in the database; if the hashes match, the login is successful.
