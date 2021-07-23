describe('Browser Actions', () => {
    it('Inputs', () => {  
              browser.url('https://devexpress.github.io/testcafe/example/')
              const input = $('#developer-name')
              input.waitForExist()
              input.addValue('Patricia') //adds value to the field
              browser.pause(5000)
              input.setValue('Bruna')   // override value to the field
              browser.pause(5000)
             // expect(input).toHaveValue('Wrong')
              input.clearValue()   //clear input value
              browser.pause(5000)
     })
     it('Clicks', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
        buttonPopulate.doubleClick()   
        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(5000)
     })

     it('Select Box', () => {
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        browser.pause(5000)
    })


})
    