# Salic-be

## Description

This is a Salic Technical assessment project.

## Development

TypeScript, express 4.19, nodejs 20, npm 10.1.0.

## Instruction

### Running the project
assuming nodejs 20 is installed.

To install the necessary packages.

```shell
command npm ci
```

To run the project.

```shell
command npm start
```

-   The app will run in this port 3000.

## Routes

-   The endpoints is a mimic from the salic assessment endpoints.

### User Endpoint

1.  **Endpoint:** `/api/users`

    -   **Method:** `GET`

    -   **Description:** Retrieves a list of all users.

    -   **Response:**

        -   **200 OK:**
            -   Returns an array of user objects.

    -   **Example Response:**
        ```json
           "value": [
                      {
              "id": 1,
              "name": "John Doe",
              "email": "john.doe@example.com",
              "title": "Manager",
              "otherId": {
                "id": "A123",
                "issuerId": "Issuer1"
              },
              "partName": "Part A"
            },
          ]
        ```

1.  **Endpoint:** `/api/photo?email=${email}`

    -   **Query Parameters:**
        -   `email` (string): The email address of the user whose photo is to be retrieved.
            
    -   **Method:** `GET`

    -   **Description:** Retrieves a photo based on the provided email address. (for the purpose of the demo; only one photo is available)

    -   **Response:**

        -   **200 OK:**
            -    Returns the photo in base64 format.

    -   **Example Response:**
        ```json
        "/9j/4AAQSkZJRgABAQEAYABgAAD/RTsI//Z"
        ```

## Table of Contents
-   [salic-be](#salic-be)
-   [Description](#description)
-   [Development](#development)
-   [Instruction](#instruction)
-   [Running the project](#running-the-project)
-   [Table of Contents](#table-of-contents)
