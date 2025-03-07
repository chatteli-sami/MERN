import express from 'express'
import {faker} from '@faker-js/faker'


const app = express()
const port = 8000

const createUser = () => {
    return{
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
    }
}

const createCompany = () => {
    return{
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
  });
  
  app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
  });
  
  app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
  });


app.listen(port, () => {
    console.log(`listening on port : ${port}`)
})

