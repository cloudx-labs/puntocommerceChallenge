# PuntocommersChallenge
## Install
Do `npm i`

***

## Create Database
First, create the MySql server and configure the credentials in `./config.js`. Then download the dump in `./dump/puntocommerschallenge_dump.sql` and import it in MySql Database for create the Database, the User table and the mock data from the user table.

***

## Run
Do `npm start`
Server running at http://localhost:3000

***
## Routes

1. `/api/user` _Get users list._

Ex:   
```
[
    {
        "id":2,
        "name":"Carlos",
        "email":"jonh.doe@ibm.com",
        "username":"cviera",
        "status":"NUEVO"
    },
    {
        "id":3,
        "name":"Joe",
        "email":"jon-doe@ibm.com",
        "username":"jdoe",
        "status":"NUEVO"
    },
    {
        "id":4,
        "name":"Homer",
        "email":"homero@simpsons.mx",
        "username":"hsimpsons",
        "status":"NUEVO"
    }
]
```
2. `/api/user/email/duplicated` _Get potencially duplicated emails_ 

Ex:
```
[
    {
        "email":"jondoe@ibm.com",
        "duplicated":[
            "jonh.doe@ibm.com",
            "jon-doe@ibm.com"
        ]
    },
    {
        "email":"jonh.doe@ibm.com",
        "duplicated":[
            "jondoe@ibm.com",
            "jon-doe@ibm.com"
        ]
    },
    {
        "email":"jon-doe@ibm.com",
        "duplicated":[
            "jondoe@ibm.com",
            "jonh.doe@ibm.com"
        ]
    }
]
```

3. `/api/user/email/char_count` _Count occurrences of a char in all emails_

Ex:
```
[
    {
        "char":"o",
        "count":12
    },
    {
        "char":"m",
        "count":9
    },
    {
        "char":"n",
        "count":4
    },
    {
        "char":"e",
        "count":4
    },
    {
        "char":"i",
        "count":4
    },
    {
        "char":"j",
        "count":3
    },
    {
        "char":"d",
        "count":3
    },
    {
        "char":"b",
        "count":3
    },
    {
        "char":"c",
        "count":3
    },
    {
        "char":"s",
        "count":3
    },
    {
        "char":"h",
        "count":2
    },
    {
        "char":"r",
        "count":1
    },
    {
        "char":"p",
        "count":1
    },
    {
        "char":"x",
        "count":1
    }
]
```

