//write code here

const db = require('../data/dbConfig');

function find () {
    return db('schemes')
}

function findById (id) {
    return db('schemes').where({ id }).first()
}

function add(scheme){
    return db('schemes').insert(scheme)  .then(ids => ({ id: ids[0] }));

}

module.exports = {
    find,
    findById,
    add
}