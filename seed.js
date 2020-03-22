// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models/recipe');

const recipe_list = [
    { 
        title: 'Bone Broth',
        category: 'Soup',
        ingredients: '2 lbs of bones: I used 1 lb beef bones (marrow, knuckle, and misc.) and 1 lb of lamb chop bones (because we had them laying around), 1/2 tbsp pink Himalayan sea salt, 2 tbsp apple cider vinegar, 3 - 3.5 quarts of waterString',
        instructions: 'Roast the bones for 45 min @ 400 F.',
        tags: ['keto'],
    }
] 

// const users_list = [
//   {
//     name: "Harper Lee",
//     alive: false
//   },

// // remove all records that match {} -- which means remove ALL records
db.deleteMany({}, function(err, books){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all recipes');

    // create new records based on the array books_list
    db.create(recipe_list, function(err, books){
      if (err) { return console.log('err', err); }
      console.log("created", recipe.length, "books");
      process.exit();
    });
  }
});

// db.Author.deleteMany({}, (err, authors)=> {
//   console.log('removed all authors');
//   db.Author.create(authors_list, (err, authors)=>{
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all authors');
//     console.log(`created ${authors.length} authors`);


//     db.Book.deleteMany({}, (err, books)=>{
//       console.log('removed all books');
//       books_list.forEach((bookData)=> {
//         const book = new db.Book({
//           title: bookData.title,
//           image: bookData.image,
//           releaseDate: bookData.releaseDate
//         });
//         db.Author.findOne({name: bookData.author}, (err, foundAuthor)=> {
//           console.log(`found author ${foundAuthor.name} for book ${book.title}`);
//           if (err) {
//             console.log(err);
//             return;
//           }
//           book.author = foundAuthor;
//           book.save((err, savedBook)=>{
//             if (err) {
//               console.log(err);
//             }
//             console.log(`saved ${savedBook.title} by ${foundAuthor.name}`);
//           });
//         });
//       });
//     });
//   });
// });

