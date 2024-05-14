//* Function to update the image based on the selected category
function updateImage(category, value) {
    var imagePath = '';
    switch (category) {
        case 'dizi-turu':
            imagePath = getImagePathForSeriesType(value);
            break;
        case 'oyuncu-adi':
            imagePath = getImagePathForActorsType(value);
            break;
        case 'yonetmen-adi':
            imagePath = getImagePathForDirectorsType(value);
            break;
        // case 'yapim-yili':
        //     imagePath = getImagePathForProductionYearType(value);
        //     break;

        // Daha fazla kategori gelmesi durumunda ilgili js kodu buraya yazılacaktır. Yukarıda bir adet örnek yorum satırı içerisinde bulunmaktadır.
    }
    document.getElementById(category + '-image').src = imagePath;
}

//* Dizi Türleri kategorisi için tanımlanmış fonksiyon
function getImagePathForSeriesType(type) {
    var images = {

        //Dizi Türü Kategorisi Resimleri
        'aile' : './Images/KategoriResim/k-aile.jpeg',
        'aksiyon' : './Images/KategoriResim/k-aksiyon.jpeg',
        'belgesel' : './Images/KategoriResim/k-belgesel.jpeg',
        'drama' : './Images/KategoriResim/k-drama.jpeg',
        'gerilim' : './Images/KategoriResim/k-gerilim.jpeg',
        'komedi' : './Images/KategoriResim/k-komedi.jpeg',
        'korku': './Images/KategoriResim/k-korku.jpeg',
        'romantik': './Images/KategoriResim/k-romantik.jpeg',
        'savas': './Images/KategoriResim/k-savas.jpeg',
        'suc': './Images/KategoriResim/k-suc.jpeg',
        'tarih': './Images/KategoriResim/k-tarih.jpeg',

        // Kategorilere resim eklenmesi durumunda kategorinin yolu burada gösterilecektir. 

    };
    return images[type] || './Images/KategoriResim/dizituru.jpeg';
}

//* Oyuncu Adı kategorisi için tanımlanmış fonksiyon
function getImagePathForActorsType(type) {
    var images = {

        // Oyuncu Adı Kategorisi Resimleri
        'ahmetkural': './Images/OyuncuResim/ahmet-kural.jpeg',
        'arasbulutiynemli': './Images/OyuncuResim/aras-bulut-iynemli.jpeg',
        'aslienver': './Images/OyuncuResim/asli-enver.jpeg',
        'asumandabak': './Images/OyuncuResim/asuman-dabak.jpeg',
        'atademirer': './Images/OyuncuResim/ata-demirer.jpeg',
        'aycabingol': './Images/OyuncuResim/ayca-bingol.jpeg',
        'berensaat': './Images/OyuncuResim/beren-saat.jpeg',
        'berkhakman': './Images/OyuncuResim/berk-hakman.jpeg',
        'berkansal': './Images/OyuncuResim/berkan-sal.jpeg',
        'bugragulsoy': './Images/OyuncuResim/bugra-gulsoy.jpeg',
        'emrealtug': './Images/OyuncuResim/emre-altug.jpeg',
        'erdalbesikcioglu': './Images/OyuncuResim/erdal-besikcioglu.jpeg',
        'erdalozyagcilar': './Images/OyuncuResim/erdal-ozyagcilar.jpeg',
        'erkanpetekkaya': './Images/OyuncuResim/erkan-petekkaya.jpeg',
        'farahzeynepabdullah': './Images/OyuncuResim/farah-zeynep-abdullah.jpeg',
        'fatihartman': './Images/OyuncuResim/fatih-artman.jpeg',
        'gamzeozcelik': './Images/OyuncuResim/gamze-ozcelik.jpeg',
        'gazanferozcan': './Images/OyuncuResim/gazanfer-ozcan.jpeg',
        'gokhanmete': './Images/OyuncuResim/gokhan-mete.jpeg',
        'gulcinsantircioglu': './Images/OyuncuResim/gulcin-santircioglu.jpeg',
        'gulsebirsel': './Images/OyuncuResim/gulse-birsel.jpeg',
        'hakangercek': './Images/OyuncuResim/hakan-gercek.jpeg',
        'halukbilginer': './Images/OyuncuResim/haluk-bilginer.jpeg',
        'hazalkaya': './Images/OyuncuResim/hazal-kaya.jpeg',
        'humeyraakbay': './Images/OyuncuResim/humeyra-akbay.jpeg',
        'inanckonukcu': './Images/OyuncuResim/inanc-konukcu.jpeg',
        'ipekbilgin': './Images/OyuncuResim/ipek-bilgin.jpeg',
        'kenanimirzalioglu': './Images/OyuncuResim/kenan-imirzalioglu.jpeg',
        'kivanctatlitug': './Images/OyuncuResim/kivanc-tatlitug.jpeg',
        'leventcan': './Images/OyuncuResim/levent-can.jpeg',
        'mehmetalinuroglu': './Images/OyuncuResim/mehmet-ali-nuroglu.jpeg',
        'mehmetozgur': './Images/OyuncuResim/mehmet-ozgur.jpeg',
        'melisasozen': './Images/OyuncuResim/melisa-sozen.jpeg',
        'metehorozoglu': './Images/OyuncuResim/mete-horozoglu.jpeg',
        'muratakkoyunlu': './Images/OyuncuResim/murat-akkoyunlu.jpeg',
        'muratcemci': './Images/OyuncuResim/murat-cemci.jpeg',
        'muratozdemir': './Images/OyuncuResim/murat-ozdemir.jpeg',
        'muratyildirim': './Images/OyuncuResim/murat-yildirim.jpeg',
        'mustafaavkiran': './Images/OyuncuResim/mustafa-avkiran.jpeg',
        'mugeulusoy': './Images/OyuncuResim/muge-ulusoy.jpeg',
        'nebahatcehre': './Images/OyuncuResim/nebahat-cehre.jpeg',
        'necatisasmaz': './Images/OyuncuResim/necati-sasmaz.jpeg',
        'nejatisler': './Images/OyuncuResim/nejat-isler.jpeg',
        'oykukarayel': './Images/OyuncuResim/oyku-karayel.jpeg',
        'ozgunamal': './Images/OyuncuResim/ozgu-namal.jpeg',
        'sadicelilcengiz': './Images/OyuncuResim/sadi-celil-cengiz.jpeg',
        'sefazengin': './Images/OyuncuResim/sefa-zengin.jpeg',
        'selcukyontem': './Images/OyuncuResim/selcuk-yontem.jpeg',
        'semradincer': './Images/OyuncuResim/semra-dincer.jpeg',
        'serdaryegin': './Images/OyuncuResim/serdar-yegin.jpeg',
        'sebnemsonmez': './Images/OyuncuResim/sebnem-sonmez.jpeg',
        'senaygurler': './Images/OyuncuResim/senay-gurler.jpeg',
        'tunaorhan': './Images/OyuncuResim/tuna-orhan.jpeg',
        'tuncelkurtiz': './Images/OyuncuResim/tuncel-kurtiz.jpeg',
        'turkansoray': './Images/OyuncuResim/turkan-soray.jpeg',
        'umitcirak': './Images/OyuncuResim/umit-cirak.jpeg',
        'vildanatasever': './Images/OyuncuResim/vildan-atasever.jpeg',
        'yelizsar': './Images/OyuncuResim/yeliz-sar.jpeg',
        'yigitozsener': './Images/OyuncuResim/yigit-ozsener.jpeg',

        // Kategorilere resim eklenmesi durumunda kategorinin yolu burada gösterilecektir. 
    
    };
    return images[type] || './Images/KategoriResim/oyuncuadi.jpeg';
}

//* Yönetmen Adı kategorisi için tanımlanmış fonksiyon
function getImagePathForDirectorsType(type) {
    var images = {

        // Yonetmen Adı Kategorisi Resimleri
        'ulucbayraktar': './Images/YonetmenResim/uluc-bayraktar.jpg',
        'gulsebirsel': './Images/YonetmenResim/gulse-birsel.jpeg',
        'serdarakar': './Images/YonetmenResim/serdar-akar.jpeg',
        'doganumitkaraca': './Images/YonetmenResim/dogan-umit-karaca.jpeg',
        'sadullahsenturk': './Images/YonetmenResim/sadullah-senturk.jpeg',
        'zeynepgunaytan': './Images/YonetmenResim/zeynep-gunay-tan.jpeg',
        'selcukaydemir': './Images/YonetmenResim/selcuk-aydemir.jpeg',
        'caganirmak': './Images/YonetmenResim/cagan-irmak.jpeg',
        'zeyneptor': './Images/YonetmenResim/zeynep-tor.jpeg',
        'boratekay': './Images/YonetmenResim/bora-tekay.jpeg',
        'birkanuz': './Images/YonetmenResim/birkan-uz.jpeg',
        'umurturagay': './Images/YonetmenResim/umur-turagay.jpeg',
        'cagataytosun': './Images/YonetmenResim/cagatay-tosun.jpeg',
        'cagrilostuvali': './Images/YonetmenResim/cagri-lostuvali.jpeg',
        'haticememis': './Images/YonetmenResim/hatice-memis.jpeg',
        'mustafasevkidogan': './Images/YonetmenResim/mustafa-sevki-dogan.jpeg',
        'osmansinav': './Images/YonetmenResim/osman-sinav.jpeg',
        'hilalsaral': './Images/YonetmenResim/hilal-saral.jpeg',
        'serdarakar': './Images/YonetmenResim/serdar-akar.jpeg',
        'mehmetkarahafiz': './Images/YonetmenResim/mehmet-karahafiz.jpeg',
        'tarkankarlidag': './Images/YonetmenResim/tarkan-karlidag.jpeg',
        'mehmetadaoztekin': './Images/YonetmenResim/mehmet-ada-oztekin.jpeg',
        'hilalsaral': './Images/YonetmenResim/hilal-saral.jpeg',

        // Kategorilere resim eklenmesi durumunda kategorinin yolu burada gösterilecektir. 

    };
    return images[type] || './Images/KategoriResim/yonetmenadi.jpeg';
}

//* Slider
var slideIndex = 1;
showSlides(slideIndex);

//* Sağ-Sol kontrolü
function changeSlide(n) {
    showSlides(slideIndex += n);
}

//* Thumbnail image kontrolü
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
