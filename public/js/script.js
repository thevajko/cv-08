class Slide {
    constructor(imageUrl, description) {
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

class Slideshow {
    static interval = 5000;

    constructor(slides) {
        this.slides = slides;
        this.currentIndex = 0;
        this.lightbox = null;
        this.image = null;
        this.description = null;
        this.timer = null;
        this.previousBodyOverflow = '';
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    open() {
        if (this.slides.length === 0 || this.lightbox !== null) {
            return;
        }

        this.createLightbox();

        document.body.appendChild(this.lightbox);
        this.previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeyDown);

        this.showSlide(0);
        this.timer = window.setInterval(() => this.showNext(), Slideshow.interval);
    }

    createLightbox() {
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'slideshow-lightbox';
        this.lightbox.setAttribute('role', 'dialog');
        this.lightbox.setAttribute('aria-modal', 'true');
        this.lightbox.setAttribute('aria-label', 'Prezentácia obrázkov');

        this.image = document.createElement('img');
        this.image.className = 'slideshow-image';

        const previousButton = document.createElement('button');
        previousButton.className = 'slideshow-button slideshow-previous';
        previousButton.type = 'button';
        previousButton.setAttribute('aria-label', 'Predchádzajúci obrázok');
        previousButton.textContent = '\u276E';
        previousButton.addEventListener('click', () => this.showPrevious());

        const nextButton = document.createElement('button');
        nextButton.className = 'slideshow-button slideshow-next';
        nextButton.type = 'button';
        nextButton.setAttribute('aria-label', 'Nasledujúci obrázok');
        nextButton.textContent = '\u276F';
        nextButton.addEventListener('click', () => this.showNext());

        this.description = document.createElement('p');
        this.description.className = 'slideshow-description';

        this.lightbox.append(this.image, previousButton, nextButton, this.description);
    }

    close() {
        if (this.lightbox === null) {
            return;
        }

        window.clearInterval(this.timer);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = this.previousBodyOverflow;
        this.lightbox.remove();
        this.lightbox = null;
        this.timer = null;
    }

    showNext() {
        this.showSlide((this.currentIndex + 1) % this.slides.length);
    }

    showPrevious() {
        this.showSlide((this.currentIndex - 1 + this.slides.length) % this.slides.length);
    }

    showSlide(index) {
        this.currentIndex = index;
        const slide = this.slides[this.currentIndex];
        this.image.src = slide.imageUrl;
        this.image.alt = slide.description;
        this.description.textContent = slide.description;
    }

    handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.showPrevious();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.showNext();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            this.close();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.slideshow-open');
    if (openButton === null) {
        return;
    }

    let slideshow = null;
    openButton.addEventListener('click', () => {
        if (slideshow !== null && slideshow.lightbox !== null) {
            return;
        }

        const slides = Array.from(document.querySelectorAll('.post'))
            .map((post) => {
                const image = post.querySelector('.card-img-top');
                const description = post.querySelector('.card-text');
                return new Slide(image.src, description.textContent.trim());
            });
        slideshow = new Slideshow(slides);
        slideshow.open();
    });
});