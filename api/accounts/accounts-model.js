const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  // select * from accounts where id = 3;
  return db('accounts').where('id', id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  // insert into accounts (name, budget)
  // values ('account-14', '1000000')
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  // update accounts
  //    set budget = 500000
  // where id = 14
  return db('accounts').where('id', id).update(account)
}

const deleteById = id => {
  // DO YOUR MAGIC
  // delete from accounts where id = 14;
  return db('accounts').where('id', id).delete()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
