import page from "//unpkg.com/page/page.mjs";

const pages = {
    '/home': '<h2>Home Page</h2><p>Home page content</p>',
    '/catalog': '<h2>Catalog</h2><p>List of articles</p>',
    '/about': '<h2>About Us</h2><p>Contact information</p>',
};
const defaultPage = '<h2>404</h2><p>Page Not Found!</p>';

const main = document.querySelector('main');

page('/home', updateContent);
page('/catalog', updateContent);
page('/about', updateContent);

page.redirect('/', '/home');

page.start();

function updateContent(context) {
    // console.log(context);
    main.innerHTML = pages[context.pathname] || defaultPage;
};