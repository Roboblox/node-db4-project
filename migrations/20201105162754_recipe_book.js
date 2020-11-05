exports.up = function(knex) {
    return knex.schema
      .createTable('recipe', tbl => {
        tbl.increments()
        tbl.text('recipe_name', 128)
      })
      .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.text('ingredient_name', 128)
      })
      .createTable('ingredients_list', tbl => {
        tbl.increments()
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onUpdate('RESTRICT').onDelete('RESTRICT');
        tbl.integer('quantity').unsigned().notNullable();
        tbl.integer('recipe_id').unsigned().notNullable();
      })
      .createTable('steps', tbl=>{
        tbl.increments()
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('RESTRICT').onDelete('RESTRICT');
        tbl.integer('step_number').unsigned().notNullable();
        tbl.text('instructions', 128).notNullable();
    })
  };
  exports.down = function(knex, Promise) {
    // drop in the opposite order
    return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
  };
  
  