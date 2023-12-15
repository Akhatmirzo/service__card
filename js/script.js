const serviceData = [
    {
        imgIcon: './assets/lupa.png',
        imgAlt: 'search',
        title: 'Online pharmacy',
        paragraph: 'Buy  your medicines with our mobile application with a simple delivery system'
    },
    {
        imgIcon: './assets/Group.png',
        imgAlt: 'search',
        title: 'Online pharmacy',
        paragraph: 'Buy  your medicines with our mobile application with a simple delivery system'
    },
    {
        imgIcon: './assets/Frame.png',
        imgAlt: 'consultant',
        title: 'Consultation',
        paragraph: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
        imgIcon: './assets/Frame.svg',
        imgAlt: 'details',
        title: 'Details info',
        paragraph: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
        imgIcon: './assets/Frame (1).png',
        imgAlt: 'Emergency',
        title: 'Emergency care',
        paragraph: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
        imgIcon: './assets/Group (1).png',
        imgAlt: 'Tracking',
        title: 'Tracking',
        paragraph: 'Track and save your medical history and health data'
    }
]

let services = document.querySelector('.services');
for (let i = 0; i < serviceData.length; i++) {
    const serviceBox = document.createElement('div');
    const serviceBoxImg = document.createElement('img');
    const serviceBoxTitle = document.createElement('h3');
    const serviceBoxParagraph = document.createElement('p');

    serviceBox.classList.add('service-box');
    services.appendChild(serviceBox);
    serviceBox.appendChild(serviceBoxImg);
    serviceBox.appendChild(serviceBoxTitle);
    serviceBox.appendChild(serviceBoxParagraph);
}

const serviceBoxImg = document.querySelectorAll('.service-box img');
const serviceBoxTitle = document.querySelectorAll('.service-box h3');
const serviceBoxInfo = document.querySelectorAll('.service-box p');

serviceBoxImg.forEach((item, index) => {
    item.src = serviceData[index].imgIcon;
    item.alt = serviceData[index].imgAlt;
})

serviceBoxTitle.forEach((item, index) => {
    item.textContent = serviceData[index].title;
})

serviceBoxInfo.forEach((item, index) => {
    item.textContent = serviceData[index].paragraph;
})
