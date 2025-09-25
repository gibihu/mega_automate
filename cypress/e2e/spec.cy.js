// cypress/e2e/main.spec.js
import { loginCheckName } from './login'
import { GotoStartCreateOrder } from './order'
import { importOrder } from './order_import'

const setting_order = {
  order_id: null,
  start_at: 1,
  go_to: 14,
  steps: {
    st1: {
      f1: 'MG048',
      f2: null
    },
    st2: null,
    st3: {
      f1: null,
      f2: null
    },
    st4: null,
    st5: {
      f1: null,
      f2: null,
      f3: null,
      f4: null,
      f5: null,
      f7: null,
      f8: null,
      f9: null,
    },
    st6: {
      f1: null,
      f2: null,
      f3: null,
    },
    st7: null,
    st8: {
      f1: null,
      f2: null,
      f3: null,
      f4: null,
    },
    st9: {
      f1: null,
    },
    st10: {
      f1: null,
      f2: null,
      f3: null,
      f4: null,
      f5: null,
      f6: null,
      f7: null,
      f8: null,
    },
    st11: {
      f1: null,
      f2: null,
      f3: null,
      f4: null,
    },
    st12: {
      f1: null,
      f2: null,
      f3: null,
      f4: null,
      f5: null,
    },
    st13: {
      f1: null,
      f2: null,
      f3: null,
    },
    st12: {
      f1: null,
      f2: null,
      f3: null,
      f4: null,
      f5: null,
      f6: null,
      f7: null,
      f8: null,
      f9: null,
      f10: null,
      f11: null,
      f12: null,
      f13: null,
      f14: null,
      f15: null,
      f16: null,
      f17: null,
      f18: null,
      f19: null,
    },
  }
}

describe('Automation Test', () => {
  it('Login + Order Flow', () => {
    // cy.viewport(1440, 900);
    cy.viewport(1920, 1080)
    loginCheckName("test1-3_1-7-25")

    // ไปที่หน้า order
    GotoStartCreateOrder(setting_order);
    // importOrder(setting_order);

    // ดึง orderId จาก URL
  })
})
