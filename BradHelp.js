// USING OBJECT LITERAL
/*const book1 = {
    name: "Book One",
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.name} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book1.getSummary());
*/

/*
// CREATING OBJECT CONSTRUCTORS
// USED TO BE ABLE TO CREATE OBJECTS OF DIFFERENT 
// INSTANCES FROM SAME OBJECT
function Book(title, author, year){
    //console.log("Book Initialized...");
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = summary;
}

function summary(){
    return `${this.title} was written by ${this.author} in year ${this.year}`;
}

const book2 = new Book('Book Two', 'Jane Doe', '2016');
console.log(book2.title);
console.log(book2.getSummary());

const book1 = new Book('Book One','John Doe','2013');
*/

// CRETING OBJECT PROTOTYPES 
// TO MAKE OBJECTS PROPERTIES/METHODS UNIQUE
/*
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `The  book named \'${this.title}\' was created by \'${this.author}\' just about the year \'${this.year}\'`;

};
*/


//ANOTHER PROTOTYPE
/*
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Manipulate the data of the object
// Revise/Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

let book2 = new Book('Book two','John Doe','2015');
let book1 = new Book("WereWolf",'Janet Adeyemi','2016');
*/

//console.log(book1);
//book1.revise('2019');
//console.log(book1);

//INHERITANCE OF PROPERTIES
//INHERITANCE OF PROPERTIES
//INHERITANCE OF PROPERTIES
//INHERITANCE OF PROPERTIES
/*
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}

// INHERITANCE OF PROTOTYPES 
// DECLARE YOUR INHERITANCE BEFORE INSTANTIATING THE OBJECTS
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Create New Instance of Magazine
const mag1 = new Magazine('Mag One','John Ben', '2000','Jan');
console.log(mag1);
*/


//DIFFERENT WAYS TO CREATE OBJECTS
// USING OBJECT.CREATE

// Object of Protos
/*
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
};

// Create Object

const Book1 = Object.create(bookProtos,{
    title: {value: 'Book OneMe'},
    author: {value: 'John Doe2'},
    year: {value: '1990'}
});

console.log(Book1);
*/



//USING ES6 SYNTAX INFORM OF CLASS
//USING ES6 SYNTAX INFORM OF CLASS
//USING ES6 SYNTAX INFORM OF CLASS
//USING ES6 SYNTAX INFORM OF CLASS
/*
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Noble';
    }
    
}

// Instantiate Class Object
const book1 = new Book('Book One', 'John Dowen', '2011');
console.log(book1);
book1.revise("2018");
console.log(book1);

console.log(Book.topBookStore());
*/




// CREATING SUBCLASSES
// CREATING SUBCLASSES
// CREATING SUBCLASSES

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    };
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

//SUBCLASS MAGAZINE
class Magazine extends Book{
    constructor(title, author, year, month){
        // to pass the properties of the Main Class
        super(title, author, year);
        this.month;
    }
};

const mag1 = new Magazine('Mag One', 'John Dowe', '2018', 'Feb');
console.log(mag1);