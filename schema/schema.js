const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            args: {},
            resolve(parent, args){
                // return books;
                return Book.find({})
            }
		},

		book: {
			type: BookType,
			args: {id: {type: GraphQLID}},
			resolve(parent, args) {
				return _.find(books, {id: args.id})
			}
		}
    }
    
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})