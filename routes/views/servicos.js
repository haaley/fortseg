var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set Locals
    locals.section = 'servicos';
    locals.filters = {
		servicos: req.params.servicos
	}
	locals.data = {
		servicos: []
	}
    //load Servicos
    //carrega os serviços
	view.query('servicos', keystone.list('Servico').model.find());

    view.render('servicos');
}