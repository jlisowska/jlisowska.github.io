class Book {
    constructor(bookTitle, author, read) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.read = read;
    }
    
    bookDescription() {
        var str;
        if (this.read == true) {
            str = "Książka ma tytuł " + this.bookTitle + ", autorem jest " + this.author + " i została przeczytana.";
        } else {
            str = "Książka ma tytuł " + this.bookTitle + ", autorem jest " + this.author + " i nie została przeczytana.";
        }
        return str;
    }
}

function numberOfRead(booksArray) {
    var sum = 0;

    for (i = 0; i < booksArray.length; i++) {
        if (booksArray[i].read == true) {
            sum+=1;
        }
        console.log(booksArray[i].bookDescription());
    }
    console.log("Liczba przeczytanych książek: " + sum);
}

var lolita = new Book("Lolita", "Vladimir Nabokov", true);
var beksinscy = new Book("Beksińscy. Portret podwójny", "Magdalena Grzebałkowska", false);
var nowySwiat = new Book("Nowy wspaniały świat", "Aldous Huxley", false);


var booksCollection = [];
booksCollection.push(lolita);
booksCollection.push(beksinscy);
booksCollection.push(nowySwiat);

numberOfRead(booksCollection);
