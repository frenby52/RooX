class User {
  constructor(data) {
    this.id = data[`id`] || ``;
    this.name = data[`name`] || ``;
    this.username = data[`username`] || ``;
    this.email = data[`email`] || ``;
    this.street = data[`address`][`street`] || ``;
    this.suite = data[`address`][`suite`] || ``;
    this.city = data[`address`][`city`] || ``;
    this.zipcode = data[`address`][`zipcode`] || ``;
    this.lat = data[`address`][`geo`][`lat`] || ``;
    this.lng = data[`address`][`geo`][`lng`] || ``;
    this.phone = data[`phone`] || ``;
    this.website = data[`website`] || ``;
    this.companyName = data[`company`][`name`] || ``;
    this.catchPhrase = data[`company`][`catchPhrase`] || ``;
    this.bs = data[`company`][`bs`] || ``;
  }

  static parseUser(user) {
    return new User(user);
  }

  static parseUsers(users) {
    return users.map(User.parseUser);
  }
}

export default User;
