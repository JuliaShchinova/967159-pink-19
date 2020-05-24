var objectFit = ('objectFit' in document.documentElement.style === false) ? false : true;

var makeObjectFit = function (img, type) {
    var src = img.src;
    img.removeAttribute('srcset');
    img.style.backgroundImage = 'url(' + src + ')';
    if (type === 'cover' || type === 'contain') {
        img.classList.add('object-fit-' + type);
    }
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
}

if (!objectFit) {
    var image = document.querySelector('.photos__link-image--panorama');
    makeObjectFit(image, 'cover');
}
