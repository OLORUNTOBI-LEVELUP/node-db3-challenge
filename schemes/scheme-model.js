//write code here

const db = require('../data/dbConfig');

function find () {
    return db('schemes')
}

function findById (id) {
    return db('schemes').where({ id }).first()
}

function findSteps(schemeId) {
    return db('steps')
      .join('schemes', 'schemes.id', 'scheme_id')
      .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
      .where('scheme_id', schemeId);
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