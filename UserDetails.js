function UserDetails(userid, name, email, pairID) {
    this.userID = userid,
        this.dName = name,
        this.email = email,
        this.pairID = pairID
}

function UserDetails() {

}
// Sets the age
// 
UserDetails.prototype.pairId = function (pairID) {
    this.pairID = pairID
}
// Checks whether the Users is Adult based on the age
// 
UserDetails.prototype.isPaired = function () {
    return this.pairID == null ? false : true
}

module.exports = UserDetails