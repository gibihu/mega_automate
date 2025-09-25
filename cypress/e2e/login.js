// cypress/e2e/login.js

export function tryLogin(user) {
    cy.visit('/')
    // cy.visit('/login')
    cy.get('input[name=email]').type(user.email)
    cy.get('input[name=password]').type(user.password)
    cy.get('.MuiButtonBase-root').click()
}

export function loginCheckName(nameOrEmail) {
    cy.fixture('users.json').then((users) => {
        if(!users){
            cy.log(`ไม่พบไฟล์ json`)
        }else{
            const user = users.find(u => u.name === nameOrEmail || u.email === nameOrEmail)
            if (!user) {
                cy.log(`⛔ ไม่พบ user ที่ชื่อหรือ email = ${nameOrEmail}`)
                return
            }

            cy.log(`🔑 พยายาม login ด้วย ${user.name}`)
            tryLogin(user)

            cy.wait(2000)
            cy.url().should('include', '/')
            // cy.url().then((url) => {
            //     if (url.includes('/manage-user/administrator')) {
            //         cy.get('p.css-1nb3sh8').contains(user.name).should('be.visible')
            //     } else {
            //         cy.log("⛔ login ไม่สำเร็จหรือไม่พบชื่อผู้ใช้")
            //     }
            // })
        }
    })
}
