// model/Produto.js


/**
 * Produto Model
 * ==========
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Produto = new keystone.List('Produto', {
    map: {name: 'produto'},
    autokey: {path: 'slug', from: 'produto', unique: true}
});

Produto.add({
    produto: {type: String, required: true},
    modelo: {type: String},
    marca: {type: String},
    ativo: {type: Types.Boolean, initial: true, required: true},
    descricao: {type: Types.Textarea, height: 150, label: "Breve descrição"},
    criadoEm: {type: Types.Date, index: true, default: new Date() },
    imagens: {type: Types.CloudinaryImages},
    heroImage: { type: Types.CloudinaryImage },

});



Produto.defaultColumns = 'produto, modelo, marca, criadoEm';

Produto.register();