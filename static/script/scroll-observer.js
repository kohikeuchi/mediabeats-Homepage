class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: false
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function (entries, observer, ) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        

        this.io = new IntersectionObserver(callback.bind(this), this.options);

        // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
        this.io.POLL_INTERVAL = 100;
        
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}



const vision = document.querySelector('.vision-main');
const service = document.querySelector('.service-container');
const recruit = document.querySelector('.recruit');
// const child = document.querySelector('.child');
// const child = document.querySelector('.child');

const addclass = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('inview');
        }
    });
    // alert('intersecting');
}

const options = {
    root: null,
    // rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(addclass, options);

// io.observe(vision);
io.observe(service);
io.observe(recruit);