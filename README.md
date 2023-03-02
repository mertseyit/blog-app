# Simple Blog Apllication for beginner

This blog application will help you understand react 

Also, it includes React Router Dom

## Used libraries
1. React
2. React router dom
3. React icons
4. Json server (for simple backand)

## How do you start the App 

First, clone this project to your device
```
git clone https://github.com/mertseyit/blog-app.git
```

Secondly open the project on your any IDE. Then open the terminal screen install npm packages. ( I'm using VS Code IDE ): 
```
npm install
```

After that, type this command for start the server. (If you are using 3001 port, change this)

```
npx json-server -p 3001 -w data/db.json
```


And finally , open the another terminal screen and type this command: 
```
npm start
```

The project will start


If you want update the db.js, you can use this data :

``` json
    {
        "posts": [
            {
            "name": "John ",
            "lastname": "Cremer",
            "title": "How the use react icons ?",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam ipsum architecto ipsa reprehenderit cumque velit quidem odit adipisci fuga, ratione laboriosam pariatur aliquid in, corrupti repellat accusantium maxime. Ipsam recusandae excepturi porro facere quaerat corporis quo a sunt molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse recusandae maiores natus assumenda pariatur molestiae ipsam eaque eligendi, delectus porro ipsum quod facilis, autem suscipit corporis! Rerum fugit iusto eius consequuntur? Quidem quas repellendus alias autem aliquam ipsa iure.",
            "like": 0,
            "id": 1
            },
            {
            "name": "Jason ",
            "lastname": "Xia",
            "title": "How to use JSON Server to mock REST API in local environment",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam ipsum architecto ipsa reprehenderit cumque velit quidem odit adipisci fuga, ratione laboriosam pariatur aliquid in, corrupti repellat accusantium maxime. Ipsam recusandae excepturi porro facere quaerat corporis quo a sunt molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse recusandae maiores natus assumenda pariatur molestiae ipsam eaque eligendi, delectus porro ipsum quod facilis, autem suscipit corporis! Rerum fugit iusto eius consequuntur? Quidem quas repellendus alias autem aliquam ipsa iure.",
            "like": 0,
            "id": 2
            },
            {
            "name": "Ant",
            "lastname": "Man",
            "title": "Updating Firmware for Toast Flex",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam ipsum architecto ipsa reprehenderit cumque velit quidem odit adipisci fuga, ratione laboriosam pariatur aliquid in, corrupti repellat accusantium maxime. Ipsam recusandae excepturi porro facere quaerat corporis quo a sunt molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse recusandae maiores natus assumenda pariatur molestiae ipsam eaque eligendi, delectus porro ipsum quod facilis, autem suscipit corporis! Rerum fugit iusto eius consequuntur? Quidem quas repellendus alias autem aliquam ipsa iure.",
            "like": 0,
            "id": 3
            }
        ]
}

```

