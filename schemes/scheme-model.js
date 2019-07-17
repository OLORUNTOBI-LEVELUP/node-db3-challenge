//write code here

const db = require('../data/dbConfig');

function find () {
    return db('schemes')
}

function findById (id) {
    return db('schemes').where({ id }).first()
}

function findSteps(id) {
    return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select('step_number', 'instructions')
    .where('scheme_id', schemeId)
    .orderBy('steps.step_number');
}

function add(scheme){
    return db('schemes').insert(scheme) .then(ids => {
        return findById(ids[0]);
     });

}
function update(changes, id) {
    return db('schemes')
       .where({ id })
       .update(changes)
       .then(() => {
          return findById(id)
       });
 }
 
 function remove(id) {
    return db('schemes')
       .where('id', id)
       .del()
 } 

module.exports = {
    find,
    findById,
    add,
    findSteps,
    remove,
    update
}