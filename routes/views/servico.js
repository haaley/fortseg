var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set Locals
    locals.section = 'servico';
    locals.filters = {
		servico: req.params.servico
	}
	locals.data = {
		servico: []
	}
    //load Servicos
    //carrega os serviços
	view.query('servico', keystone.list('Servico').model.find());

    view.render('servico');
}