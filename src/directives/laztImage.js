import { onMounted,  } from 'vue';

const observerOptions = {
    rootMargin: '50% 0%',
    threshold: 0
};

const observerCallback = (entries, observer, image) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(image);
            image.src = image.dataset.src;
        }
    });
};

export default {
    name: 'LazyImage',
    directive: {
        inserted (el, binding, vnode) {
            onMounted(() => {
                console.log(el);
                const image = el;
                const observer = new IntersectionObserver(entries => observerCallback(entries, observer, image), observerOptions);
                observer.observe(image);
            });
        }
    }
};
