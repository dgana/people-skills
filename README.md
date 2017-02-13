# people-skills
Assgin People Skills with ODM mongo DB!

| Routes                                      | Method        | Description                              |
| -------------                               |:-------------:| ----------------------------------------:|
| http://localhost:3000/api/seed              | POST          | Headers : { key: auth, value: admin123 } |
| http://localhost:3000/api                   | POST          | Add User                                 |
| http://localhost:3000/api                   | GET           | Get All Users                            |
| http://localhost:3000/api/:id               | GET           | Get User by ID                           |
| http://localhost:3000/api/:id               | DELETE        | Delete User by ID                        |
| http://localhost:3000/api/:id               | PUT           | Update User by ID                        |
| http://localhost:3000/api/add_skill/:id     | PUT           | Add User skill by ID                     |
| http://localhost:3000/api/remove_skill/:id  | PUT           | Remove User skill by ID                  |


```
npm i
cd people-skills/public -> live-server
mongoose database
database = people_skills
```
