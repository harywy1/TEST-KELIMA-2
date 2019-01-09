describe('Test Favorites', function() {
    it('Menuju Favorites', function() {
      cy.visit('http://localhost:3000/src/component/Popular.js')
      cy.get('.populer')
      cy.get(':nth-child(4) > .MuiGridListTile-tile-246 > .MuiGridListTile-imgFullWidth-248')
      cy.get(':nth-child(4) > .MuiGridListTile-tile-246 > .MuiGridListTileBar-root-255')
      cy.get(':nth-child(4) > .MuiGridListTile-tile-246 > .MuiGridListTileBar-root-255 > .MuiGridListTileBar-actionIcon-264 > .MuiButtonBase-root-184')
      cy.get(':nth-child(3) > .MuiGridListTile-tile-246 > .MuiGridListTileBar-root-255 > .MuiGridListTileBar-titleWrap-259 > .MuiGridListTileBar-title-262')
      cy.get(':nth-child(3) > .MuiGridListTile-tile-246 > .MuiGridListTileBar-root-255 > .MuiGridListTileBar-titleWrap-259 > .MuiGridListTileBar-subtitle-263')
      cy.get(':nth-child(3) > .MuiGridListTile-tile-246 > .MuiGridListTileBar-root-255 > .MuiGridListTileBar-titleWrap-259 > .MuiGridListTileBar-subtitle-263 > span')
    })
})