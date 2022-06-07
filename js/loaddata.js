const portfolio = [
    {
        title : "Dhaka Blood Bank",
        thumbnail : "../img/dhaka_blood_bank.png",
        liveLink : "https://dhakablood.000webhostapp.com/",
        ripoLink : "https://github.com/rameem2003/dhaka-blood-php-test",
    },


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

    {
        title : "Personal Jakat Calculator",
        thumbnail : "./img/jakat-calculator-en.png",
        liveLink : "https://rameem2003.github.io/jakat_calculator/",
        ripoLink : "https://github.com/rameem2003/jakat_calculator",
    },


    {
        title : "Surokkha Covid Vaccine website Clone",
        thumbnail : "./img/surokkhaweb-clone.png",
        liveLink : "https://rameem2003.github.io/surokkha_web/",
        ripoLink : "https://github.com/rameem2003/surokkha_web",
    },

    {
        title : "Web Hosting Site",
        thumbnail : "./img/web-hosting-site.png",
        liveLink : "https://rameem2003.github.io/demo_site/",
        ripoLink : "https://github.com/rameem2003/demo_site",
    },

    {
        title : "JavaScript Translator App",
        thumbnail : "./img/js_translator_app.png",
        liveLink : "https://rameem2003.github.io/js_translator/",
        ripoLink : "https://github.com/rameem2003/js_translator",
    },


    {
        title : "Calculator App",
        thumbnail : "./img/calculator.png",
        liveLink : "https://rameem2003.github.io/calculator/",
        ripoLink : "https://github.com/rameem2003/calculator",
    },


    {
        title : "ISTT Batch Website",
        thumbnail : "./img/istt_batch.png",
        liveLink : "https://rameem2003.github.io/oursite/",
        ripoLink : "https://github.com/rameem2003/oursite",
    },


    {
        title : "Unit Converter App",
        thumbnail : "./img/unit_converter.png",
        liveLink : "https://rameem2003.github.io/unit_converter/",
        ripoLink : "https://github.com/rameem2003/unit_converter",
    },


    {
        title : "Music App",
        thumbnail : "./img/music_app.png",
        liveLink : "https://rameem2003.github.io/music_player/",
        ripoLink : "https://github.com/rameem2003/music_player",
    },

    {
        title : "WebPad Text Editor",
        thumbnail : "./img/web_text_editor.png",
        liveLink : "https://rameem2003.github.io/text_editor/",
        ripoLink : "https://github.com/rameem2003/text_editor",
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