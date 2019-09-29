export default class User {
  static myInstance = null;

  _userID = "";
  _userEmail = "";
  _userName = "";

  /**
   * @returns {User}
   */
  static getInstance() {
    if (User.myInstance == null) {
      User.myInstance = new User();
    }

    return this.myInstance;
  }

  getUserID() {
    return this._userID;
  }

  setUserID(id) {
    this._userID = id;
  }

  getUserEmail() {
    return this._userEmail;
  }

  setUserEmail(email) {
    this._userEmail = email;
  }

  getUserName() {
    return this._userName;
  }

  setSelectedUserName(name) {
    this._userName = name;
  }
}
