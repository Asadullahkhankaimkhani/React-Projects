import { produce } from "immer";
const book = {
	author: "Robert Kiyosaki",
	books: {
		name: "Rich Dad Poor Dad",
		price: "$8",
		rating: 4.7,
	},
};

const arrayOfBooks = [
	"Rich Dad Poor Dad",
	"Rich Dad Poor Dad 2",
	"Rich Dad Poor Dad 3",
];

const newBook = produce(book, (draft) => {
	draft.books.price = "$10";
	draft.books.rating = 4.8;
});

console.log(newBook);

const newArrayOfBooks = produce(arrayOfBooks, (draft) => {
	arrayOfBooks[1] = "Rich Dad Poor Dad 4";
});

console.log(newArrayOfBooks);
