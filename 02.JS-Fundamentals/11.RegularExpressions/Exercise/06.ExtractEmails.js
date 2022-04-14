function email(input) {

    let pattern = / [A-Za-z0-9]+[^ ]*[\w+]@[\w+][^ ]*[\w+]\.[A-Za-z]+(?:\-)?[A-Za-z]+/g;
    let match = input.match(pattern);
    if (match !== null) {
        console.log(match.join('\n'));
    }
}
email('Please contact us at: support@github.com.');
email('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
email('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');