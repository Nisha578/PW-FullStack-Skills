// Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.



const books = [
    { title: "The Alchemist", author: "paulo coelho", year: 1988 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", year: 2007 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 },
    { title: "The Help", author: "Kathryn Stockett", year: 2009 },
    { title: "The Fault in Our Stars", author: "john Green", year: 2012 },
    { title: "Gone Girl", author: "gillian Flynn", year: 2012 },
  ];

  // Filter books published after 2010 and capitalize author names
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => {
    return {
          title: book.title,
          author: book.author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          year: book.year
    }
  });

  // Filter books published after 2010 and capitalize author names
  console.log(filteredBooks);
