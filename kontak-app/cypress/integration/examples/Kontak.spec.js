describe("Kontak", () => {
    it('Kontak Saya', () => {
        cy.visit('http://localhost:3000')
    })

    it('Menuju Link Kontak', () => {
        cy.get('h1').contains('Aplikasi Kontak')
        cy.get('h3').contains('Tambah Kontak')


        cy.get('#root > div > div > form > input.form-control')
        .type('Susi Similikiti')
        cy.get('form > .btn').click()

        cy.get('#root > div > div > form > input.form-control')
        .type('Tukul Arwana')
        cy.get('form > .btn').click()

        cy.get('#root > div > div > form > input.form-control')
        .type('Super Dede')
        cy.get('form > .btn').click()

        cy.get('#root > div > div > form > input.form-control')
        .type('durian montong')
        cy.get('form > .btn').click()
        

    })
    it('Hapus Kontak', () => {
        cy.get('button').contains('Hapus').click()
        

        
    })
})