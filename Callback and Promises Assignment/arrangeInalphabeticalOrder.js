const books = [
    {
        title: "The India Story",
        author: "Bimal Jalal",
        year: 1870
    },
    {
        title: "Listen to Your Heart: The London Adventure",
        author: "Ruskin Bond",
        year: 1988
    },
    {
        title: "Pilgrim's Progress",
        author: "John Bunyan",
        year: 1999
    },
    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        year: 1942
    },
    {
        title: "Emma",
        author: "Jane Austen",
        year: 1919
    },
]

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
}

extractTitles(books, logTitles);