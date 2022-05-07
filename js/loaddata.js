const portfolio = [
    {
        title : "Decimal to Binary Converte",
        thumbnail : "./img/dec-to-bin-converter.png",
        liveLink : "https://rameem2003.github.io/dec_to_bin_converter/",
        ripoLink : "https://github.com/rameem2003/dec_to_bin_converter",
    },

    {
        title : "QR Code Genarator",
        thumbnail : "./img/qr-genarator.png",
        liveLink : "https://rameem2003.github.io/qr_code_genarator/",
        ripoLink : "https://github.com/rameem2003/qr_code_genarator",
    },

    {
        title : "Random Color Picker",
        thumbnail : "./img/color-picker.png",
        liveLink : "https://rameem2003.github.io/color_picker/",
        ripoLink : "https://github.com/rameem2003/color_picker",
    },
]


const portfolioList = document.getElementById("portfolioList");

const loadData = () => {
    portfolio.map(card => {
        const element = document.createElement("div");
        element.classList.add("col-md-4");
        element.classList.add("col-sm-12");

        element.innerHTML = `
            <div class="portfolio-box p-2">
                <div class="imege-box">
                    <img src="${card.thumbnail}" alt="">
                </div>
                <h3>${card.title}</h3>

                <div class="link">
                    <ul>
                        <li><a href="${card.liveLink}" target="_blank"><i class="fa-solid fa-tower-broadcast"></i></a></li>
                        <li><a href="${card.ripoLink}" target="_blank"><i class="fa-solid fa-link"></i></a></li>
                    </ul>
                </div>
            </div>
        `;

        portfolioList.appendChild(element);
    });
}

loadData();