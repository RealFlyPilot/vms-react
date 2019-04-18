import Airtable from 'airtable'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
})

class PlusMinusAirtable {
  constructor () {
    this.UserStoryBase = Airtable.base('app5urNEIXdhPfZuj')
    this.VmsTestBase = Airtable.base('app92Gdy65dMbAjGy')
  }
}

class UserModelTable extends PlusMinusAirtable {
  constructor () {
    super()
    this.fields = {
      name: '',
      email: '',
      password: '',
      schema: ''
    }
    this.init()
  }

  async init () {
    this.table = await this.UserStoryBase('User Model')
  }

  async addUserModel (args) {
    const newUserModel = await this.table.create({}, function (err, record) {
      if (err) {
        console.error(err)
        return
      }
      console.log(record.getId())
    })
    console.log(
      'TCL: UserModelTable -> addUserModel -> newUserModel',
      newUserModel
    )
    return newUserModel
  }
}

class VmsJobRequestorTable extends PlusMinusAirtable {
  constructor () {
    super()
    this.fields = {
      jobRequestor: '',
      requestingOrganization: '',
      reasonforRequest: '',
      comments: ''
    }
    this.init()
  }

  async init () {
    this.table = await this.VmsTestBase('Requestor')
  }

  async addJobRequest (args) {}
}

export { UserModelTable, VmsJobRequestorTable }
