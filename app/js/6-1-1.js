var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function(index) {
  return contacts[index];
}

var addContact = function(name) {
  contacts.push(name);
}

var updateLastContact = function(newName){
  contacts.pop;
  contacts.push(newName);
}
