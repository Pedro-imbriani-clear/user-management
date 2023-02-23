class User {
constructor(name, gender,birth, country, email,admin,photo,password){

    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._password = password;
    this._photo = photo;
    this._admin = admin;
    this._email = email;
    this._register = new Date();
}
get name(){
    return this._name;
}
get gender(){
    return this._gender;
}
get birth(){
    return this._birth;
}
get country(){
    return this._country;
}
get password(){
    return this._password;
}
get photo(){
    return this._photo;
}
get admin(){
    return this._admin;
}
get email(){
    return this._email;
}
get register(){
    return this._register;
}
set photo(value){
    this._photo = value;
}

}