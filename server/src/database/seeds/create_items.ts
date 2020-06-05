import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'Lâmpadas', image: 'lampadas.sgv'},
        {title: 'Pilhas e baterias', image: 'baterias.sgv'},
        {title: 'Papeis e papelão', image: 'papeis-papelao.sgv'},
        {title: 'Resíduos Eletrônicos', image: 'eletronicos.sgv'},
        {title: 'Resíduos Orgânicos', image: 'organicos.sgv'},
        {title: 'óleo de cozinha', image: 'oleo.sgv'},
    ]);
}