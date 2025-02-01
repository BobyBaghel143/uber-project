npm init -y
npm i express
npm i dotenv
npm i cors
npm i mongoose
npm i bcrypt
npm i jsonwebtoken
npm i express-validator
npm i cookie-parser
npm i axios

# Backend API Documentation

# USER
  ## `/users/register` Endpoint
  
  ### Description
  
  Registers a new user by creating a user account with the provided information.
  
  ### HTTP Method
  
  `POST`
  
  ### Request Body
  
  The request body should be in JSON format and include the follpwing fields:
  
  - `fullname` (object):
    - `firstname` (string, required): User's firstname (min 3 chars),
    - `lastname` (string, required): User's lastname (min 3 chars),
  - `email` (string, required): User's email address (must be a valid email),
  - `password` (string, required): User's password (min 6 chars),
  
  ### Example Response
  
  - `user` (object).
    - `fullname` (object).
      - `firstname` (string, required): User's firstname(min 3 chars).
      - `lastname` (string, required): User's lastname (min 3 chars).
    - `email` (string, required): User's email (must be a valid email).
    - `password` (string, required): User's password (min 6 chars).
  - `token` (String): JWT Token
  
  ## `/users/login` Endpoint
  
  ### Description
  
  Authenticates a user using their email and password, returining a JWT token upon successful login.
  
  ### HTTP Method
  
  `POST`
  
  ### Endpoint
  
  `/users/login`
  
  ### Request Body
  
  The request body should be in JSON format and include the following fields:
  
  - `email` (string, required): User's email address (must be a valid email).
  - `password` (string, required): User's password (min 6 chars),
  
  ### Example Response
  
  - `user` (object).
    - `fullname` (object).
      - `firstname` (string, required): User's firstname(min 3 chars).
      - `lastname` (string, required): User's lastname (min 3 chars).
    - `email` (string, required): User's email address (must be a valid email).
    - `password` (string, required): User's password (min 6 chars).
  - `token` (String): JWT Token
  
  ## `/users/profile` Endpoint
  
  ### Description
  
  Retrieves the profile information of the currently authenticated user.
  
  ### HTTP Method
  
  `GET`
  
  ### Authentication
  
  Requires a alid JWT token in the Authorization header: `Authorization: Bearer <token>`
  
  ### Example Response
  
  - `user` (object).
    - `fullname` (object).
      - `firstname` (string, required): User's firstname(min 3 chars).
      - `lastname` (string, required): User's lastname (min 3 chars).
    - `email` (string, required): User's email address (must be a valid email).
  
  ## `/users/logout` Endpoint
  
  ### Description
  
  Logout the current user and blacklist the token provided in cookie or headers
  
  ### HTTP Method
  
  `GET`
  
  ### Authentication
  
  Requires a valid JWT token in the Authorization header or cookie:
  
  ### Example Response
  
  - `user` (object).
    - `fullname` (object).
      - `firstname` (string, required): User's firstname(min 3 chars).
      - `lastname` (string, required): User's lastname (min 3 chars).
    - `email` (string, required): User's email address (must be a valid email).
    - `password` (string, required): User's password (min 6 chars).
  - `token` (String): JWT Token
  






# CAPTAIN
   
   ## `/captains/register` Endpoint
   
   ### Description
   
   Register a new captain by creating a captain account with the provided informatin.
   
   ### HTTP Method
   
   `POST`
   
   ### Request Body
   
   The request body should be in JSON format and include the following fields.
   
   - `fullname` (object).
     - `firstname` (string, required): Captain's firstname(min 3 chars)
     - `lastname` (string, required): Captain's lastname (min 3 chars)
   - `email` (string, required): Captain's email address (must be a valid email)
   - `password` (string, required): Captain's password (min 6 chars)
   - `vehicle` (object):
     - `color` (string, required): Vehicle color (min 3 chars)
     - `plate` (string, required): Vehicle plate number (min 3 chars)
     - `capacity` (number, required): Vehicle passenger capacity (min 1)
     - `vehicleType` (string, required): Type of vehicle (must be 'Car', 'Motorcycle', or 'Auto')
   
   ### Example Response
   
   - `captain` (object):
     - `fullname` (object).
     - `firstname` (string, required): Captain's firstname(min 3 chars)
     - `lastname` (string, required): Captain's lastname (min 3 chars)
   - `email` (string, required): Captain's email address (must be a valid email)
   - `password` (string, required): Captain's password (min 6 chars)
   - `vehicle` (object):
     - `color` (string, required): Vehicle color (min 3 chars)
     - `plate` (string, required): Vehicle plate number (min 3 chars)
     - `capacity` (number, required): Vehicle passenger capacity (min 1)
     - `vehicleType` (string, required): Type of vehicle (must be 'Car', 'Motorcycle', or 'Auto')
   - `token` (String): JWT Token
   
   ## `/captains/login` Endpoint
   
   ### Description
   
   Authenticates a captain using their email and password, returning a JWT Token upon succesfull login.
   
   ### HTTP Method
   
   `POST`
   
   ### Request Body
   
   The request body should be in JSON format and include the following the fields:
   
   - `email` (string, required): Captain's email address (must be a valid email),
   - `password` (string, required): Captain's password (min 6 chars)
   
   ### Example Response
   
   - `captain` (object):
     - `fullname` (object).
     - `firstname` (string, required): Captain's firstname(min 3 chars)
     - `lastname` (string, required): Captain's lastname (min 3 chars)
   - `email` (string, required): Captain's email address (must be a valid email)
   - `password` (string, required): Captain's password (min 6 chars)
   - `vehicle` (object):
     - `color` (string, required): Vehicle color (min 3 chars)
     - `plate` (string, required): Vehicle plate number (min 3 chars)
     - `capacity` (number, required): Vehicle passenger capacity (min 1)
     - `vehicleType` (string, required): Type of vehicle (must be 'Car', 'Motorcycle', or 'Auto')
   - `token` (String): JWT Token
   
   ## `/captain/profile` Endpoint
   
   ### Description
   
   Retrieves the profile information of the currently authenticated caption.
   
   ### HTTP Method
   
       `GET`
   
   ### Authentication
   
   Requires a valid JWT Token in the Authorization header:
   `Authorization: Bearer <token>`
   
   ### Example Response
   
   - `captain` (object):
     - `fullname` (object).
     - `firstname` (string, required): Captain's firstname(min 3 chars)
     - `lastname` (string, required): Captain's lastname (min 3 chars)
   - `email` (string, required): Captain's email address (must be a valid email)
   - `password` (string, required): Captain's password (min 6 chars)
   - `vehicle` (object):
     - `color` (string, required): Vehicle color (min 3 chars)
     - `plate` (string, required): Vehicle plate number (min 3 chars)
     - `capacity` (number, required): Vehicle passenger capacity (min 1)
     - `vehicleType` (string, required): Type of vehicle
   
   ## `/captains/logout` Endpoint
   
   ### Description
   
   Logout the current captain and blacklist the token provided in cookie or headers.
   
   ### HTTP Method
   
   `GET`
   
   ### Authentication
   
   Requires valid JWT token in the Authorization header or cookie.
   
   ### Example Response
   
   - `message` (string): Logout Successfullly.
   
# Map
   
   ## `/maps/get-coodinates` Endpoint
