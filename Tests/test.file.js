var newRecipe = "new Recipe";
var updatedRecipe = "updated recipe"
    module.exports = {
        'Add New Recipe' : function (browser) {
          browser
             .windowMaximize()
            .url("https://codepen.io/SedatUygur/pen/jWgJdv")
            .click("#view-switcher-button")
            .click("#full-link")
            .frame('result',function(result){
                console.log
            })
            .click('#show')
            .setValue('#title' , 'new Recipe')
            .setValue('#ingredients', 'ingred 1 , ingred 2')
            .click('#addButton')
            .assert.containsText('body', newRecipe)      
      },
        'Edit On Recipe (Pumpkin Puree)' (browser){
        browser
        .click('#container > div > div > div:nth-child(1) > div.panel-heading > h4 > a')
        .pause(3000)
        .click('#btn-edit0')
        .clearValue('#title')
        .setValue('#title','updated recipe')
        .click('#addButton')
    .assert.containsText('body',updatedRecipe)
 },
    'Delete Recipe(Spaghetti)'(browser){
     browser
     .waitForElementVisible('#btn-del0',2000)
    .click('#btn-del0') 
    
    }
      
}
