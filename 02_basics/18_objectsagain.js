//Ah shit, here we go again!

//Deconstructing Objects
const newObj = {
    name: "Omkar Sahay",
    age: 19
}

//Using Values from Objects:
console.log(newObj.name)
console.log(newObj["name"])
const {"name": userName} = newObj
console.log(userName)

//API's
const apiresult = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Naomi",
        "last": "Wood"
      },
      "location": {
        "street": {
          "number": 3788,
          "name": "Green Lane West"
        },
        "city": "Christchurch",
        "state": "Auckland",
        "country": "New Zealand",
        "postcode": 96183,
        "coordinates": {
          "latitude": "49.5952",
          "longitude": "132.8446"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "naomi.wood@example.com",
      "login": {
        "uuid": "bf356510-fe80-42fe-a268-af80b5181446",
        "username": "orangemouse970",
        "password": "great1",
        "salt": "4Haj94Ph",
        "md5": "b50abed46bcdfa745ddf51fe532ad60c",
        "sha1": "c2de6460154357cd45afecd454b89e94f6c7f9e6",
        "sha256": "23a8bc7f9ed0bff0e927ea7dcd208d9a92c61ccd102ea8ccf5aec505db879707"
      },
      "dob": {
        "date": "1976-04-14T03:42:19.464Z",
        "age": 49
      },
      "registered": {
        "date": "2003-01-31T18:05:09.568Z",
        "age": 22
      },
      "phone": "(305)-122-3561",
      "cell": "(463)-111-7188",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/68.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
      },
      "nat": "NZ"
    }
  ],
  "info": {
    "seed": "1c60cedfe4c5def8",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

console.log(`Hi, My Name is ${(apiresult.results[0]).name.first} 
and I am based out of ${(apiresult.results[0]).location.country}`)