# Job Wizard Frontend

This repository contains the frontend source code for the Job Wizard application, built with HTML, CSS, and vanilla JavaScript.

## How to Run

Because this project uses the `fetch` API to dynamically load shared components (like the navbar and sidebar), you cannot view the pages by opening the HTML files directly in your browser (i.e., using the `file://` protocol). Doing so will result in security errors (CORS policy), and the components will not load.

To view the project correctly, you must serve the files from a local web server.

### Using Python's built-in server

The simplest way to do this is to use Python's built-in HTTP server.

1.  Navigate to the `job-wizard/frontend/` directory in your terminal.
2.  Run the following command:

    ```bash
    python3 -m http.server
    ```

3.  Open your web browser and go to `http://localhost:8000`.

You will now be able to navigate through the application and see all components loaded correctly.
