# gitlab-ci-cd-sample

This is a sample project to demo a ci cd flow

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.3

    $ npm --version
    6.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

    $ npm install -g yarn

---

## Install
    $ git clone https://gitlab.com/fast-demos/gitlab-ci-cd-sample.git
    $ cd gitlab-ci-cd-sample
    $ yarn install

## Configure app
    $ cp .env.example .env # Add or remove environment variables in .env file
 
## Running this project  
###
### Develop mode
    $ yarn dev

###
### Develop mode with docker

    $ docker build -t gitlab-ci-cd-sample .
    $ docker run -p 5000:5000 --env-file=.env --rm gitlab-ci-cd-sample
###
### Production mode
You might need to configure .env file

    $ yarn start
## Testing

    $ yarm test 


