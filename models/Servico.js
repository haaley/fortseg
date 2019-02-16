// model/Servico.js


/**
 * Servico Model
 * ==========
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Servico = new keystone.List('Servico', {
    map: {name: 'servico'},
    autokey: {path: 'slug', from: 'servico', unique: true}
});

Servico.add({
    servico: {type: String, required: true},
    ativo: {type: Types.Boolean, initial: true, required: true},
    descricao: {
        breve: {type: Types.Textarea, height: 150, label: "Breve descrição"},
        completa:{type: Types.Html, wysiwyg: true, height: 200, label: "Descricao completa"}
    },
    criadoEm: {type: Types.Date, index: true, default: new Date() },
    imagens: {type: Types.CloudinaryImages}

});



Servico.schema.virtual('descricao.full').get(function() {
    return this.descricao.completa || this.descricao.breve;
});

Servico.defaultColumns = 'servico, ativo, criadoEm';

Servico.register();