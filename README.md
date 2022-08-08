# Docker + Nginx + Angular

This is a base starter docker configuration for an NGINX + Angular environment for simple
training projects.

## Install Angular App
To install a fresh Angular app, we will used the pre-installed `angular-cli` tool within the web container.

1. Make sure `docker compose` is running for the project. All you have to do is run the following script within the root directory of the project.

    ```
    docker compose up
    ```

2. Once docker as built the project and installed all of the required dependencies for the first time, you can install a fresh Angular project in the following way. Open a bash console within the running docker container.

    ```
    docker compose exec web bash -l
    ```

3. Once you have entered the container's bash console, run the following script using the pre-installed `angular-cli`.

    ```
    ng new <my-app-name>
    ```

    where `<my-app-name>` is the desired project name.

4. After you have installed the Angular project and filled out all of the script's prompts, you should be able to start serving your angular app within the container by running:

    ```
    ng serve
    ```

5. From there, you should be able to open your freshly installed Angular app by opening `http://localhost:8080` in your browser.