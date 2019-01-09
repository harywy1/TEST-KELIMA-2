describe('Test Favorites', function() {
    it('Menuju Favorites', function() {
      cy.visit('http://localhost:3000/src/component/Favorites.js')
      cy.get('.favorit')
      cy.get(':nth-child(1) > .MuiGridListTile-tile-247 > .MuiGridListTile-imgFullHeight-248')
      cy.get(':nth-child(3) > .MuiGridListTile-tile-247 > .MuiGridListTileBar-root-250')
      cy.get(':nth-child(2) > .MuiGridListTile-tile-247 > .MuiGridListTileBar-root-250')


    })
})