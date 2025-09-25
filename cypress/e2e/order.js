// cypress/e2e/order.js
import { keepNetwork } from './network'

import { RandomName, RandomNumbers } from '../functios/random';
import 'cypress-file-upload';



export function GotoStartCreateOrder(set) {

    // cy.url().should('include', '/manage-user/administrator');
    // createOrderFlow(1);
    if(set.order_id !== null){
        cy.visit(`/manage-order/sale/order/${set.order_id}?type=1`);
        cy.url().should('include', `/manage-order/sale/order/${set.order_id}?type=1`);
    }else{
        cy.visit('/manage-order/sale/order/create?type=1');
        cy.url().should('include', '/manage-order/sale/order/create?type=1');
    }
    
    // if(set.start_at == 1) step1(set.steps.st1);
    // else if(set.start_at == 2) step2(set.steps.st2);
    // else if(set.start_at == 3) step3(set.steps.st3);
    // else if(set.start_at == 4) step4(set.steps.st4);
    // else if(set.start_at == 5) step5(set.steps.st5);
    // else if(set.start_at == 6) step6(set.steps.st6);
    // else if(set.start_at == 7) step7(set.steps.st7);
    // else if(set.start_at == 8) step8(set.steps.st8);
    // else if(set.start_at == 9) step9(set.steps.st9);
    // else if(set.start_at == 10) step10(set.steps.st10);
    // else if(set.start_at == 11) step11(set.steps.st11);
    // else if(set.start_at == 12) step12(set.steps.st12);
    // else if(set.start_at == 13) step13(set.steps.st13);
    // else if(set.start_at == 14) step14(set.steps.st14);
    for (let i = set.start_at; i <= set.go_to; i++) {
        switch(i) {
            case 1: step1(set.steps.st1); break;
            case 2: step2(set.steps.st2); break;
            case 3: step3(set.steps.st3); break;
            case 4: step4(set.steps.st4); break;
            case 5: step5(set.steps.st5); break;
            case 6: step6(set.steps.st6); break;
            case 7: step7(set.steps.st7); break;
            case 8: step8(set.steps.st8); break;
            case 9: step9(set.steps.st9); break;
            case 10: step10(set.steps.st10); break;
            case 11: step11(set.steps.st11); break;
            case 12: step12(set.steps.st12); break;
            case 13: step13(set.steps.st13); break;
            case 14: step14(set.steps.st14); break;
        }
    }

    // step2();
    // step3();
    // step4();
    // step5();
    // step6();
    // step7();
    // step8();
    // step9();
    // step10();
    // step11();
    // step12();
    // step13();
    // step14();



    // cy.url().then((url) => {
    //   const match = url.match(/\/order\/(\d+)/)
    //   const orderId = match ? match[1] : 'unknown'

    //   createOrderFlow(orderId)
    // })
}

function createOrderFlow() {
    const steps = [
        { id: 1, action: () => step1() },
        { id: 2, action: () => step2() },
        // ...เพิ่ม step จนครบ 14
    ]

    steps.forEach((step, index) => {
        cy.log(`▶️ เริ่ม Step ${step.id}`)
        step.action()

        // ตรวจสอบว่าไปต่อได้จริงไหม
        cy.get('body').then(($body) => {
            const nextStepDisabled = $body.find(`[data-step="${step.id + 1}"] button.finish:disabled`).length > 0
            if (nextStepDisabled) {
                cy.log(`⚠️ ยังอยู่ Step ${step.id} -> กดจบใหม่`)
                cy.get(`[data-step="${step.id}"] button.finish`).click()
            }
        })

        // ตรวจสอบ loading
        cy.get('body', { timeout: 10000 }).should(($body) => {
            if ($body.find('.loading-indicator').length > 0) {
                throw new Error('ยังมี loading ค้างอยู่')
            }
        })


    })
}

function step1(item) {
    cy.log(item);
    cy.wait(5000);
    cy.get('[name="customer_code"] > .MuiFormControl-root > .MuiInputBase-root').click();
    cy.get('[name="customer_code"] > .MuiFormControl-root > .MuiInputBase-root').type(item.f1+'{downarrow}{enter}',{ scrollBehavior: 'center' });
    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > [name="note"]').type('ทดสอบอัตโนมัติ',{ scrollBehavior: 'center' });
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ force: true });
}

function step2(orderId) {
    cy.wait(5000);
    cy.get('[name="responsible_sales"] > .MuiFormControl-root > .MuiInputBase-root').click({ force: true });
    cy.get('[name="responsible_sales"] > .MuiFormControl-root > .MuiInputBase-root').type('{downarrow}{enter}',{ scrollBehavior: 'center' });
    cy.get('[name="responsible_purchase"] > .MuiFormControl-root > .MuiInputBase-root').click({ force: true });
    cy.get('[name="responsible_purchase"] > .MuiFormControl-root > .MuiInputBase-root').type('{downarrow}{enter}',{ scrollBehavior: 'center' });
    cy.get('[name="responsible_data_entry"] > .MuiFormControl-root > .MuiInputBase-root').click({ force: true })
    cy.get('[name="responsible_data_entry"] > .MuiFormControl-root > .MuiInputBase-root').type('{downarrow}{enter}',{ scrollBehavior: 'center' });
    cy.get('[name="responsible_accounting"] > .MuiFormControl-root > .MuiInputBase-root').click({ force: true })
    cy.get('[name="responsible_accounting"] > .MuiFormControl-root > .MuiInputBase-root').type('{downarrow}{enter}',{ scrollBehavior: 'center' });
    cy.get('form > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ force: true });
}

function step3() {
    
    try{
        cy.wait(5000);
        // cy.get('.').click();
        // cy.get('.').type('{downarrow}{enter}',{ scrollBehavior: 'nearest' });
        // cy.contains('div', 'เลือก').click();
        // cy.contains('div', 'เลือก').type('{downarrow}{enter}',{ scrollBehavior: 'nearest' });
        
        // cy.get('#«r15s»').click();
        // cy.get('#«r15s»').type('{downarrow}{enter}',{ scrollBehavior: 'center' });
        cy.get('[name="order_customer_contact_name"]').click({ scrollBehavior: 'center' });
        cy.get('[name="order_customer_contact_name"]').type(RandomName(),{ scrollBehavior: 'center' });

        cy.get('[name="insurance_amount"]').click({ scrollBehavior: 'center' })
        cy.get('[name="insurance_amount"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });

        getOrderId().then((orderId) => {
            cy.get('[name="order_note"]').click({ scrollBehavior: 'center' });
            cy.get('[name="order_note"]').type('AUTO_M_' + orderId,{ scrollBehavior: 'center' });
        });
        
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้ !!!!!!! 👈');
        cy.log('👉 ช่องทางการสั่ง');
        cy.log('👉 ช่องทางที่ลูกค้าติดต่อ ');
        cy.wait(10000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({focus:true});
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({focus: true});
    }
}


function getOrderId() {
    return cy.url().then((url) => {
        const match = url.match(/\/order\/(\d+)/);
        if (match) return cy.wrap(match[1]); // wrap ให้เป็น Cypress chain

        // fallback: หา orderId จาก element data-attribute
        return cy.get('[data-order-id]').then(($el) => {
            const id = $el.data('order-id');
            return cy.wrap(id || 'unknown');  // wrap อีกที
        });
    });
}

function step4(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('button.MuiButton-root.MuiButton-outlinedPrimary').contains('เพิ่มสินค้า').click({ scrollBehavior: 'center' });
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click({ scrollBehavior: 'center' });
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(1000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step5(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="total_order_price"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="total_company_cost"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="discount_at_a"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="discount_at_b"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="total_customer_paid"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="total_shipping_customer_paid"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="total_product_company_paid"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="total_shipping_company_paid"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get(':nth-child(10) > .MuiFormControl-root > .MuiInputBase-root > [name="note"]').type(RandomName(),{ scrollBehavior: 'center' });
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้ !!!!!!! 👈');
        cy.log('👉 อัปโหลดใบเสนอราคาเต็มรูปแบบ');
        cy.wait(15000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step6(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="containerItems.0.payment_channel"] > .MuiFormControl-root > .MuiInputBase-root').type('{downarrow}{enter}',{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.paid_percent"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.amount_paid_a"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.amount_paid_b"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้ !!!!!!! 👈');
        cy.log('👉 อัปโหลดหลักฐานการชำระเงิน (ครั้งที่1) ');
        cy.log('👉 โกดังจีน (ที่จัดส่งสินค้าเข้า)');
        cy.wait(15000);
        // cy.log('👉 เลือโกดัง !!!!!!! 👈');
        // cy.get(':nth-child(2) > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click({ scrollBehavior: 'center', focus: true });
        // cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step7(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้ !!!!!!! 👈');
        cy.log('👉 อัปโหลดเอกสารพร้อมลายเซ็น 9 แบบ');
        cy.wait(15000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step8(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="containerItems.0.company_payment_amount"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.company_discount_percent"]').click().type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.amount_paid"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.amount_transferred"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้ !!!!!!! 👈');
        cy.log('👉 อัปโหลดหลักฐานการสั่งซื้อ');
        cy.log('👉 อัปโหลดหลักฐานการสั่งซื้อ/จ่ายร้านค้าโรงงาน');
        cy.wait(20000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step9(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="containerItems.0.shipping_code"]').type(RandomNumbers(12),{ scrollBehavior: 'center' });
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้ !!!!!!! 👈');
        cy.log('👉 อัปโหลดหลักฐานการจัดส่งขนส่งจีน ');
        cy.wait(15000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step10(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get(':nth-child(1) > .MuiButtonBase-root > [name="qc_check"]').click({ scrollBehavior: 'center', focus: true });
        cy.get('.css-1c7botj > .MuiFormControlLabel-root > .MuiButtonBase-root > [name="qc_progress"]').click({ scrollBehavior: 'center', focus: true });
        cy.get(':nth-child(5) > :nth-child(2) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.sku"]').type(RandomNumbers(12),{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.product_width"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.product_length"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.product_height"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.quantity"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.product_weight"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > [name="note"]').type(RandomName(),{ scrollBehavior: 'center' });
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้!!! 👈');
        cy.log('👉 รูปสินค้า/ใบ PO รับเข้า');
        cy.log('👉 อัปโหลดใบปะหน้าพัสดุ ');
        cy.log('👉 อัปโหลดหลักฐานการ QC');
        cy.log('👉 อัปโหลดหลักฐานการ QC');
        cy.wait(30000);

        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step11(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="containerItems.0.container_number"]').type(RandomNumbers(12),{ scrollBehavior: 'center' });
        cy.get('.css-zv7ju9 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });
        cy.get('[name="containerItems.0.note"]').type(RandomName(),{ scrollBehavior: 'center' });
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(30092025,{ scrollBehavior: 'center' });
        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้!!! 👈');
        cy.log('👉 อัปโหลดรูปจัดส่งออกจากโกดังจีน');
        cy.wait(15000);

        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step12(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });
        cy.get('[name="shipping_fee_customer"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="wood_crate_fee"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="additional_service_fee"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="shipping_note"]').type(RandomName(),{ scrollBehavior: 'center' });

        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้!!! 👈');
        cy.log('👉 โกดังไทย');
        cy.log('👉 อัปโหลดใบแจ้งหนี้ขนส่ง');
        cy.log('👉 อัปโหลดหลักฐานการชำระเงินจีน - ไทย');
        cy.wait(30000);

        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step13(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="shipping_cost"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="tracking_number"]').type(RandomNumbers(12),{ scrollBehavior: 'center' });
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });

        cy.log('👉 เพิ่มสิ่งที่ AUTOMATE กดไม่ได้!!! 👈');
        cy.log('👉 ชื่อขนส่งเอกชน');
        cy.log('👉 อัปโหลดหลักฐานการจัดส่งในไทย');
        cy.wait(20000);

        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(2)').click({ scrollBehavior: 'center', focus: true });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}

function step14(){
    try{
        cy.wait(5000);
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
        cy.wait(5000);
        cy.get('[name="product_cost_customer"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="product_cost_cost"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="product_profit"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="other_profit_china"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="other_expenses_cost_china"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(6) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });

        cy.get('[name="shipping_cost_customer"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="shipping_cost_cost"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="shipping_profit"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="other_profit_thailand"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="other_expenses_cost_thailand"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(6) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });

        cy.get('[name="refund_yuan"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="refund_baht"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });
        

        cy.get('[name="customer_refund"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiPickersInputBase-root > .MuiPickersSectionList-root').type(14092025,{ scrollBehavior: 'center' });
        cy.get('[name="total_net_profit"]').type(RandomNumbers(1)*100,{ scrollBehavior: 'center' });
        cy.get('[name="notes"]').type(RandomName(),{ scrollBehavior: 'center' });
    }catch{
        cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionActions-root > .MuiStack-root > :nth-child(1)').click({ scrollBehavior: 'center', focus: true });
    }
}