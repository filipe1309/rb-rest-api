# <p align="center">RB Rest API :space_invader:</p>

<p align="center">
<img src="https://img.shields.io/badge/nodejs-12.13.0-black" />
<img src="https://img.shields.io/badge/express-4.17.1-orange"/>
<img src="https://img.shields.io/badge/jest-26.6.3-blue" />
</p>

## 💬 About

This project was developed following Rodrigo Branas youtube playlist "[API REST](https://www.youtube.com/playlist?list=PLQCmSnNFVYnQ28Gd7SmWiM-dChqaWiy8i)".

## :computer: Technologies

-   [Nodejs](https://nodejs.org/en/)
-   [Docker](https://www.docker.com/)
-   [Jest](https://jestjs.io/)

## :octocat: Setup

### Installation

```sh
# Clone this repo
git clone git@github.com:filipe1309/rb-rest-api.git

# Enter project folder
cd rb-rest-api
```

### 🏃 Runnning

```sh
docker-compose up -d
```

The app will run at: http://localhost:3000

#### API

##### Get All posts

`GET http://localhost:3000/posts`

##### Create a post

`POST http://localhost:3000/posts`

##### update a post

`PUT http://localhost:3000/posts/:id`

##### Delete a post

`DELETE http://localhost:3000/posts/:id`

### Tests

```sh
docker exec -t rest-api_blog_1 npm test
```

## About Me

<p align="center">
    <a style="font-weight: bold" href="https://www.linkedin.com/in/filipe1309/">
    <img style="border-radius:50%" width="100px; "src="https://avatars.githubusercontent.com/u/2081014?s=60&v=4"/>
    </a>
</p>

---

<p align="center">
Done with ♥ by <a style="font-weight: bold" href="https://www.linkedin.com/in/filipe1309/">Filipe Leuch Bonfim</a> 🖖

</p>
