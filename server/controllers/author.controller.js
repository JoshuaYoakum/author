const {Author} = require("./../models/author.model")

module.exports.allAuthor = (req, res) =>{
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.oneAuthor = (req, res) =>{
    const id = req.params.id
    Author.findOne({_id: id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) =>{
    Author.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) =>{
    const id = req.params.id
    Author.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}