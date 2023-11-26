
import technoImg from "./dataTechno";

export const createCard = (data) => {
    const container__card = document.querySelector('.main__container');
    for (let index = 0; index < data.length; index++) {
        const card = document.createElement('div');
        card.className = 'main__container--card card';
        container__card.appendChild(card);

        const containerImg = document.createElement('div')
        containerImg.classList.add('main__container--card--containerImg');
        const img = document.createElement('img');
        img.src = data[index].imgUrl;
        containerImg.appendChild(img);
        card.append(containerImg);

        const containerDesc = document.createElement('div');
        containerDesc.classList.add('main__container--card--containerDesc');
        const title = document.createElement('h3');
        title.textContent = data[index].title;

        const description = document.createElement('p');
        description.textContent = data[index].description;
        description.innerHTML += data[index].desc;

        containerDesc.append(title, description);
        // Create box img techno
        const technoBox =  document.createElement('div')
        technoBox.classList.add('main__container--card--containerDesc--techno')

        technoImg.forEach(technoImgElement => {
            if (data[index].techno[technoImgElement.name]) {
                for (let i = 0; i < 10; i++) {
                    
                }
                const imgTechnoContainer = document.createElement('div')
                imgTechnoContainer.classList.add('main__container--card--containerDesc--techno--boxImgTechno')
                technoBox.append(imgTechnoContainer)
                const img = document.createElement('img')
                img.src = data[index].techno[technoImgElement.name]
                imgTechnoContainer.append(img)
                imgTechnoContainer.style.setProperty('--after-content', "'" + technoImgElement.nameFull + "'")
                imgTechnoContainer.style.color = technoImgElement.color
                containerDesc.append(technoBox)
            }
        })
        card.append(containerDesc);
    }
    let heightScreen = window.innerHeight;
    let topTriggerScreen = heightScreen - ((heightScreen / 3) * 2);
    let bottomTriggerScreen = heightScreen - ((heightScreen / 4));
    let sizeScreen = window.innerWidth;

    const c = document.querySelectorAll('.card');
    for (let index = 0; index < c.length; index++) {
        addEventListener('scroll', () => {
            const middleCard = c[index].getBoundingClientRect().top + (c[index].getBoundingClientRect().height / 2);
            const boxImage = c[index].querySelector('.main__container--card--containerImg');
            const boxDesc = c[index].querySelector('.main__container--card--containerDesc');
            const img = boxImage.querySelector('img');

            c[index].style.perspective = '1000px';
            boxImage.style.transformStyle = 'preserve-3d';
            boxImage.style.transitionDuration = '0.5s';
            
            if (sizeScreen >= 800) {
                if (middleCard >= topTriggerScreen && middleCard <= bottomTriggerScreen) {
                    boxDesc.style.transitionDelay = '0.2s'
                    boxDesc.style.transitionDuration = '0.5s'
                    boxDesc.style.backgroundColor = '#3d3c3c'
                    boxDesc.style.boxShadow = `0px 0px 15px 20px rgba(61 ,60 ,60 , 1)`;
                    img.style.borderRadius = '2rem';
                    if (index % 2 === 0) {
                        img.style.backgroundColor = 'transparent'
                        boxImage.style.transform = 'rotateY(-20deg)';
                        img.style.boxShadow = `10px 0px 0px 0px rgba(61 ,60 ,60 , 1)`;
                    } else {
                        img.style.backgroundColor = 'transparent'
                        boxImage.style.transform = 'rotateY(20deg)';
                        img.style.boxShadow = `-10px 0px 0px 0px rgba(61 ,60 ,60 , 1)`;
                    }
                } else {
                    boxDesc.style.transitionDelay = '0'
                    boxDesc.style.transitionDuration = '0.2s'
                    boxDesc.style.backgroundColor = 'transparent'
                    img.style.borderRadius = '0.5rem';
                    boxImage.style.transform = 'rotateY(0)';
                    boxDesc.style.boxShadow = `0 0 0 0 rgba(61 ,60 ,60, 0)`;
                    img.style.boxShadow = `0 0 0 0 rgba(61 ,60 ,60 , 0)`;
                }
                
                addEventListener('resize', () => {
                    sizeScreen = window.innerWidth;
                    heightScreen = window.innerHeight;
                    topTriggerScreen = heightScreen - ((heightScreen / 3) * 2);
                    bottomTriggerScreen = heightScreen - ((heightScreen / 3));
                    if (sizeScreen >= 800) {
                        if (middleCard >= topTriggerScreen && middleCard <= bottomTriggerScreen) {
                            boxDesc.style.transitionDelay = '0.2s'
                            boxDesc.style.transitionDuration = '0.5s'
                            boxDesc.style.backgroundColor = '#3d3c3c'
                            boxDesc.style.boxShadow = `0px 0px 15px 20px rgba(61 ,60 ,60 , 1)`;
                            img.style.borderRadius = '2rem';
                            if (index % 2 === 0) {
                                img.style.backgroundColor = 'transparent'
                                boxImage.style.transform = 'rotateY(-20deg)';
                                img.style.boxShadow = `10px 0px 0px 0px rgba(61 ,60 ,60 , 1)`;
                            } else {
                                img.style.backgroundColor = 'transparent'
                                boxImage.style.transform = 'rotateY(20deg)';
                                img.style.boxShadow = `-10px 0px 0px 0px rgba(61 ,60 ,60 , 1)`;
                            }
                        } else {
                            boxDesc.style.transitionDelay = '0'
                            boxDesc.style.transitionDuration = '0.2s'
                            boxDesc.style.backgroundColor = 'transparent'
                            img.style.borderRadius = '0.5rem';
                            boxImage.style.transform = 'rotateY(0)';
                            boxDesc.style.boxShadow = `0 0 0 0 rgba(61 ,60 ,60, 0)`;
                            img.style.boxShadow = `0 0 0 0 rgba(61 ,60 ,60 , 0)`;
                        }
                    } else {
                        boxDesc.style.transitionDelay = '0'
                        boxDesc.style.transitionDuration = '0.2s'
                        boxDesc.style.backgroundColor = 'transparent'
                        img.style.borderRadius = '0.5rem';
                        boxImage.style.transform = 'rotateY(0)';
                        boxDesc.style.boxShadow = `0 0 0 0 rgba(61 ,60 ,60, 0)`;
                        img.style.boxShadow = `0 0 0 0 rgba(61 ,60 ,60 , 0)`;
                    }
                })
            } else {
                boxDesc.style.transitionDelay = '0'
                boxDesc.style.transitionDuration = '0.2s'
                boxDesc.style.backgroundColor = 'transparent'
                img.style.borderRadius = '0.5rem';
                boxImage.style.transform = 'rotateY(0)';
            }
        })
        const containerDesc = c[index].querySelector('.main__container--card--containerDesc');
        if (index % 2 === 0) {
            c[index].style.flexDirection = 'row-reverse';
            containerDesc.style.paddingRight = '1rem';
        } else {
            containerDesc.style.paddingLeft = '1rem';
        }
    }
}