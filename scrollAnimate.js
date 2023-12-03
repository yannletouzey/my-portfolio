export default scrollAnimate = () => {
    let middleScreen = window.innerHeight / 2;
    let sizeScreen = window.innerWidth;
    addEventListener('resize', () => {
        sizeScreen = window.innerWidth;
        middleScreen = window.innerHeight / 2;
    })
    const cards = document.querySelectorAll('.card');
    const footer = document.querySelector('.footer');

    for (let index = 0; index < cards.length; index++) {
        addEventListener('scroll', (e) => {
            if (window.scrollbars) {
                const middleCard = cards[index].getBoundingClientRect().top + (cards[index].getBoundingClientRect().height / 2);
                if (middleCard < (middleScreen + 200) && middleCard > (middleScreen - 200)) {
                    if (sizeScreen <= 800) {
                        cards[index].style.transform = `scale(1.05)`
                        cards[index].style.transitionDuration = '0.3s'
                        cards[index].style.boxShadow = `5px 5px 15px 5px #000000`;
                        cards[index].style.borderRadius = `10px`;
                        
                        const containerImg = cards[index].querySelector('.main__container--card--containerImg');
                        containerImg.style.transitionDuration = '0.2s'
                        containerImg.style.borderRadius = `7px 7px 0 0`;
                        setTimeout(() => {
                            cards[index].style.borderRadius = `2px`;
                            cards[index].style.transitionDuration = '0.5s'
                            cards[index].style.boxShadow = `0 0 0 0 transparent`;
                            cards[index].style.transform = `scale(1)`
                            containerImg.style.transitionDuration = '0.5s'
                            containerImg.style.borderRadius = 0;
                        }, 100);
                        addEventListener('resize', () => {
                            cards[index].style.transform = `scale(1.05)`
                            cards[index].style.transitionDuration = '0.3s'
                            cards[index].style.boxShadow = `5px 5px 15px 5px #000000`;
                            cards[index].style.borderRadius = `10px`;
                            
                            const containerImg = cards[index].querySelector('.main__container--card--containerImg');
                            containerImg.style.transitionDuration = '0.2s'
                            containerImg.style.borderRadius = `7px 7px 0 0`;
                            setTimeout(() => {
                                cards[index].style.borderRadius = `2px`;
                                cards[index].style.transitionDuration = '0.5s'
                                cards[index].style.boxShadow = `0 0 0 0 transparent`;
                                cards[index].style.transform = `scale(1)`
                                containerImg.style.transitionDuration = '0.5s'
                                containerImg.style.borderRadius = 0;
                            }, 100);
                        })
                    }
                }
                if (sizeScreen <= 1100) {
                    footer.style.transitionDuration = '0.4s'
                    footer.style.transform = `translateY(${footer.getBoundingClientRect().height + 30}px)`;
                    setTimeout(() => {
                        footer.style.transitionDuration = '0.2s'
                        footer.style.transform = 'translateY(0)';
                    }, 200);
                    addEventListener('resize', () => {
                        footer.style.transitionDuration = '0.4s'
                        footer.style.transform = `translateY(${footer.getBoundingClientRect().height + 30}px)`;
                        setTimeout(() => {
                            footer.style.transitionDuration = '0.2s'
                            footer.style.transform = 'translateY(0)';
                        }, 200);
                    })
                }
            }
        })
    }
}