``` bash
mkdir my-test-project
cd my-test-project
npm init -y
```

`Cypress` GUI
``` bash
npx cypress open
```
ครั้งแรก `Cypress` จะสร้างโฟลเดอร์ `cypress/` และไฟล์ `config` ให้
เลือก E2E Testing หรือ Component Testing ได้


5. Run แบบ Headless (CI/CD ใช้บ่อย)
``` bash
npx cypress run

git rm -r --cached .
```