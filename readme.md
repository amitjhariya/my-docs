# Personal Documents

A Personal Documents project is a collection of important and personal files such as contracts, certificates, financial documents, etc. that are stored in a secure and organized manner for easy access and reference. This project can help individuals to keep track of their important information and documents in one place, reducing the risk of losing important data. The project can be stored locally or on a cloud-based platform for added security and accessibility from anywhere.


## Getting Started

Instructions on how to get a copy of the project up and running on your local machine for development and testing purposes.




### Prerequisites

You'll need the following tools installed in your system:

- Node.js
- npm
- MongoDB
- git



### Clone the Repository

1. Clone the repository from https://github.com/amitjhariya/my-docs.git using the following command:


### Setting up the Frontend

Change the directory to `frontend`:

2. Change the current directory to the "frontend" directory by using the following command


```

cd frontend

```

3 Create an `.env` file in the `frontend` directory and add the following configuration:

```

REACT_APP_GOOGLE_CLIENT_ID = Your_GOOGLE_CLIENT_ID_here
REACT_APP_API_ENDPOINT = http://localhost:8000

```

4. Install the required dependencies:

```

npm i

```

5. Start the development server:

```

npm start

```

### Setting up the Backend

1 Change the directory to `backend`:

```

cd backend  

```

2 Create an `.env` file in the `backend` directory and add the following configuration:

```

PORT = 8000
MONGO_URL = // mongo db srv url
DB_NAME = // database name
JWT_SECRET =AEAD3D94C1CBADFC9F2361DBBFA6D // put your JWT SECRET
GOOGLE_CLIENT_ID =// Your GOOGLE_CLIENT_ID here
GOOGLE_CLIENT_SECRET = // Your GOOGLE_CLIENT_SECRET here

```

4. Install the required dependencies:

```

npm i

```

5. Start the development server:

```

npm start

```



# Creating the OAuth Web Client ID in Google Cloud

Note: If you are creating an OAuth web client after August 7, 2022, you need to use Google Workspace Migrate version 2.3.4.0 or later.

1. In Google Cloud, open the project you created earlier. If you manually created a service account, the project was created in Step 1 of the Google Workspace Migrate setup. If you created the project using a script, the project name is listed in the Cloud Shell Editor after the script runs.

2. Go to APIs & Services and then OAuth consent screen. You might have to click on the menu icon first.

3. For User Type, select Internal.

4. Click Create.

5. Enter the App name, a User support email for users to contact with questions, and Developer contact information for Google to contact you about changes to your project.

6. Click Save and Continue, then Save and Continue, and then Back to Dashboard.

7. Go to APIs & Services and then Credentials. You might have to click on the menu icon first.

8. Click Create Credentials and then OAuth client ID.

9. For Application type, select Web application.

10. Enter a name for the OAuth web client for Name.

11. For Authorized JavaScript origins, click Add URI and enter the HTTP origins that host the Google Workspace Migrate platform. Example: http://localhost:3000 and http://localhost:8000

12. Click Create.

13. Copy the Your Client ID, as you will need it when setting up the Google Workspace Migrate platform. You can also access the client ID from APIs & Services and then Credentials.
