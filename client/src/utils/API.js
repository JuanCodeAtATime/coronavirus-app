import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/statesearch");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/statesearch/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/statesearch/" + id);
  },
  // Saves a book to the database
  saveBook: function (stateData) {
    return axios.post("/api/statesearch", stateData);
  }
};
