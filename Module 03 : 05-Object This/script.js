// TODO: What is `this` referring to here?
console.log(this);

// TODO: What is `this` referring to here?
// ANS: this refer to window(browser)
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
// ans:this refer to child Object
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here?
console.log(this);

// TODO: What is `this` referring to here?
// ANS: this refer to window(browser)
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
// ans:this refer to child Object
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};
