const yup = require('yup');
const Account = require('./accounts-model');

const accountsSchema = yup.object().shape({
  name: yup.string('name of account must be a string')
        .min(3,'name of account must be between 3 and 100')
        .max(100,'name of account must be between 3 and 100')
        .required('name and budget are required')
        .trim(),
  budget: yup.number('budget of account must be a number')
          .min(0, 'budget of account is too large or too small')
          .max(1000000, 'budget of account is too large or too small')
          .required('name and budget are required')
})

async function checkAccountPayload (req, res, next){
  // DO YOUR MAGIC
  try {
    const validated = await accountsSchema.validate(
        req.body, { strict: false, stripUnknown: true }
    )
    req.body = validated
    next()
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
    next()
  }
}


function checkAccountNameUnique (req, res, next){
  // DO YOUR MAGIC
}

async function checkAccountId (req, res, next){
  // DO YOUR MAGIC
  
  try {
    const { id } = req.params
    const possibleAccount = await Account.getById(id)
    if (!possibleAccount) {
      res.status(404).json({
        message:'account not found'
      })
      next()
    } else {
      req.account = possibleAccount
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
}