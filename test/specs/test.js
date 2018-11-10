describe('MainLayout.vue', () => {
    it('should change language on item click', () => {
        browser.element('#q-app > div > header > div > button').click();
        browser.waitForVisible('body > div.q-popover.scroll.animate-popup-down > div > div');
        const langs = $$('body > div.q-popover.scroll.animate-popup-down > div > div');
        expect(langs.length).toBe(2);
        langs[1].click();
        const lang = browser.element('#q-app > div > header > div > button > div.q-btn-inner.row.col.items-center.justify-center > div').getText();
        expect(lang).toBe('FR');
    });
});

