import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";
import statesList from "./us-statesList";
import reasons from "./reasons";
import AutoCompleteTxt from "../components/Form/AutoCompleteTxt";



class StateSearch extends Component {
    // Initialize this.state.books as an empty array
    state = {
        stateres: [],
        statesearch: "",
        reason: ""
    };


    // Add code here to get all books from the database and save them to this.state.books
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ stateres: res.data, statesearch: "", reason: "" })
            )
            .catch(err => console.log(err));


    }

    getBook = id => {
        API.getBook()
            .then(res => this.setState({ stateres: res.data }))
            .catch(err => console.log(err));

    }


    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));


    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        event.preventDefault();
        if (statesList && reasons) {
            API.saveBook({
                statesearch: statesList,
                reason: reasons
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };



    render() {
        console.log(this.props)
        // const { text } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search By State or Province</h1>
                        </Jumbotron>
                        <form>
                            <AutoCompleteTxt
                                items={statesList}
                                placeholder="Search by US state"
                            />
                            <AutoCompleteTxt
                                items={reasons}
                                placeholder="Reason For Search: Curious, Concerned, Fearful, Other?"
                            />
                            <FormBtn
                                // disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Book</FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>My Searches</h1>
                        </Jumbotron>
                        {this.state.stateres.length ? (
                            <List>
                                {this.state.stateres.map(stateres => {
                                    return (
                                        <ListItem key={stateres._id}>
                                            <Link to={"/statesearch/" + stateres._id}>
                                                <strong>
                                                    {stateres.statesearch} by {stateres.reason}
                                                </strong>
                                            </Link>
                                            <DeleteBtn onClick={() => this.deleteBook(stateres._id)} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StateSearch;
