var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set Locals
    locals.section = 'produtos';
    locals.filters = {
		produtos: req.params.produtos
	}
	locals.data = {
		produtos: []
	}
    //load Produtos
    //carrega os produtos
	view.query('produtos', keystone.list('Produto').model.find());

    view.render('produtos');
}