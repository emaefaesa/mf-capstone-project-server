# CADDS!😺 Building (and assimilating) my first MERN app! (Mongo, Express, React.JS, Node)

Ok, ok... CADDS is is a MERN app that displays some...

     /\_/\
    ( o.o )
     > ^ <


## Installation

1. Clone the repository

```bash
git clone
```

2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root folder and add the following environment variables:

```bash
PORT=3001
DB_URI=your_mongoDB_URI
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the server to develop locally

```bash
npm run dev
```




# API Routes

## **Restaurants routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/cats/list       | GET               | [cats]                     | Get all cats     |
| /api/cats/getOne/:cat_id            | GET               | {cat}                | Get one Cat     |
| /api/cats/create            | POST               | {createdCat}                | CreateCat      |
| /api/cats/edit/:cat_id            | PUT               | {editedCat}                | Edit one restaurant     |
| /api/cats/delete/:cat_id           | DELETE               | {msg: "Cat successfully deleted!" }                | Delete one cat     |


## **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/getLoggedUser     | GET               | {loggedUser}                            | Get Logged User             |
| /api/auth/signup            | POST              | {createdUser}    | Create a new user             |
| /api/auth/login             | POST              | {authToken}                       | Log user in             |

## **Upload routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/upload     | POST               | CLOUDINARY_LINK                            | Upload Image to Cloudinary