describe('validate and CN Traveler UI Pages', () => {
    before(() => {
            cy.fixture('example').then(function(data){
                this.data = data
            })
    })

    // it('Launch the Conde Nast URL', () => {
    //     cy.visit("https://www.cntraveler.com/?us_site=y");
    // })
    it('API tests', () => {

        cy.request('GET', 'https://www.cntraveler.com/?us_site=y').then(function(response)
        {
            cy.log(response);
            const res = JSON.parse(response).items;
            cy.log(res);
            const item1 = res.find(items => items.copilotID === this.data.copilotID1)
            expect(item1.dangerousHed).to.equal(this.data.dangerousHed);
            expect(items1.dangerousDek).to.equal(this.data.dangerousDek);
        })
    })
})