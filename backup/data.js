const phones = [
  {
    Name: "Samsung Galaxy S21 Ultra",
    Memory: "12 GB RAM | 256 GB ROM",
    Display: "17.27 cm (6.8 inch) Quad HD+ Display",
    Camera: "108MP + 12MP + 10MP + 10MP | 40MP Front Camera",
    Battery: "5000 mAh Lithium-ion Battery",
    Processor: "Exynos 2100 Processor",
    Amazon:
      "https://www.amazon.in/Renewed-Samsung-Phantom-Storage-without/dp/B08ZLKG8F3/ref=sr_1_2?keywords=Samsung+Galaxy+S21+Ultra&qid=1675800998&s=electronics&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-s21-ultra-phantom-black-256-gb/p/itmbec2f700e2ff3?pid=MOBFZ3TMSMXZATX3&lid=LSTMOBFZ3TMSMXZATX354XEIV&marketplace=FLIPKART&q=Samsung+Galaxy+S21+Ultra&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=91b7fc7d-eff0-43a3-b435-1a7a47605b98.MOBFZ3TMSMXZATX3.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=tavfa6mn5s0000001675801145331&qH=e0df8591b7af3b90",
    Image: "https://m.media-amazon.com/images/I/61wES5z2QeL._SL1000_.jpg",
  },
  {
    Name: "Samsung Galaxy S21 Plus",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "17.02 cm (6.7 inch) Full HD+ Display",
    Camera: "64MP + 12MP + 12MP | 10MP Front Camera",
    Battery: "4800 mAh Lithium-ion Battery",
    Processor: "Exynos 2100 Processor",
    Amazon:
      "https://www.amazon.in/Smsung-Galaxy-Phantom-Silver-Storage/dp/B08LRFK8ZH/ref=sr_1_1?keywords=Samsung+Galaxy+S21+Plus&qid=1675801951&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-s21-plus-phantom-silver-128-gb/p/itme73a877a223a7?pid=MOBFZ3TMYAWQAJDP&lid=LSTMOBFZ3TMYAWQAJDP0NFLEA&marketplace=FLIPKART&q=samsung+galaxy+s21+plus&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_23_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_23_na_na_na&fm=Search&iid=4fa03097-ea54-4faa-9927-449c5340f66b.MOBFZ3TMYAWQAJDP.SEARCH&ppt=sp&ppn=sp&ssid=yhwqeubhz40000001675801957975&qH=7754465c59fd04e2",
    Image: "https://m.media-amazon.com/images/I/91ZgUXOWF4L._SX569_.jpg",
  },
  {
    Name: "Samsung galaxy s21 FE",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.26 cm (6.4 inch) Full HD+ Display",
    Camera: "12MP + 12MP + 8MP (OIS) | 32MP Front Camera",
    Battery: "4500 mAh Lithium-ion Battery",
    Processor: "Exynos 2100 Processor",
    Amazon:
      "https://www.amazon.in/Rnewed-Samsung-Galaxy-Olive-Storage/dp/B09YR18F86/ref=sr_1_1?keywords=SAMSUNG+Galaxy+S21+FE+5G+%28Olive%2C+128+GB%29+%288+GB+RAM%29&qid=1675802476&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-s21-fe-5g-olive-128-gb/p/itm76e6e65136e17?pid=MOBGCKMEMZE5UJXK&lid=LSTMOBGCKMEMZE5UJXK6LPNPI&marketplace=FLIPKART&q=samsung+galaxy+s21&store=tyy%2F4io&srno=s_1_6&otracker=search&otracker1=search&fm=search-autosuggest&iid=143675a6-a25b-47d9-84d1-d63d7e12cf44.MOBGCKMEMZE5UJXK.SEARCH&ppt=sp&ppn=sp&ssid=im1dkxv8ow0000001675802432306&qH=801c11be4285eb40",
    Image: "https://m.media-amazon.com/images/I/817wzcDRQAL._SX679_.jpg",
  },

  {
    Name: "Samsung Galaxy Note 20 Ultra",
    Memory: "12 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
    Display: "17.53 cm (6.9 inch) Quad HD+ Display",
    Camera: "108MP + 12MP + 12MP | 10MP Front Camera",
    Battery: "4500 mAh Lithium-ion Battery",
    Processor: "Exynos Octa Core Processor",
    Amazon:
      "https://www.amazon.in/Renewd-Samsung-Galaxy-Storage-Without/dp/B097PVYF7D/ref=sr_1_3?keywords=Samsung+Galaxy+Note+20+Ultra&qid=1675802642&s=electronics&sr=1-3",
    FlipKart:
      "https://www.flipkart.com/samsung-galaxy-note-20-ultra-5g-mystic-bronze-256-gb/p/itm33ee94e816ae4?pid=MOBFU5WY7UFG4KD9&lid=LSTMOBFU5WY7UFG4KD9Q7ZZJ2&marketplace=FLIPKART&q=Samsung+Galaxy+Note+20+Ultra&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=search-autosuggest&iid=b312b919-60dc-42aa-9706-7a11418baebb.MOBFU5WY7UFG4KD9.SEARCH&ppt=pp&ppn=pp&ssid=y20mbx614w0000001675802648280&qH=5290567b21c5572d",
    Image: "https://m.media-amazon.com/images/I/51xBPl6WdfS._SY741_.jpg",
  },
  {
    Name: "Samsung Galaxy Z Fold 2",
    Memory: "8 GB RAM | 256 GB ROM",
    Display: "17.02 cm (6.7 inch) Full HD+ Display",
    Camera: "12MP + 12MP | 10MP Front Camera",
    Battery: "3700 mAh Lithium Ion Battery",
    Processor: "Qualcomm Snapdragon 8+ Gen 1 Processor",
    Amazon:
      "https://www.amazon.in/Samsung-Graphite-Sorage-Additional-Exchange/dp/B0B8SP358P/ref=sr_1_1?keywords=SAMSUNG+Galaxy+Z+Flip4+5G+%28Graphite%2C+256+GB%29+%288+GB+RAM%29&qid=1675802953&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-z-flip4-5g-graphite-256-gb/p/itm49ef5708111bb?pid=MOBGHFGDBMXXWETG&lid=LSTMOBGHFGDBMXXWETGMJJ3TG&marketplace=FLIPKART&q=Samsung+Galaxy+Z+Fold+2&store=tyy&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=2371660a-d7be-4b0f-9ad2-61d2e814f0cb.MOBGHFGDBMXXWETG.SEARCH&ppt=sp&ppn=sp&ssid=06c51ssgts0000001675802893277&qH=3b5f35928d116004",
    Image: "https://m.media-amazon.com/images/I/61O70Uca38L._SX569_.jpg",
  },

  {
    Name: "Samsung Galaxy S20 Ultra",
    Memory: "12 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "17.53 cm (6.9 inch) Quad HD+ Display + Super AMOLED Display",
    Camera: "108 MP + 48 MP + 12 MP + VGA Depth Camera | 40MP Front Camera",
    Battery: "5000 mAh Lithium-ion Battery",
    Processor: "Exynos 990 Processor",
    Amazon:
      "https://www.amazon.in/enewed-Samsung-Storage-Additional-Exchange/dp/B088TC8DK6/ref=sr_1_1?crid=3LCPZMKBMYI2W&keywords=SAMSUNG+Galaxy+S20+Ultra+%28Cosmic+Gray%2C+128+GB%29+%2812+GB+RAM%29&qid=1675803199&s=electronics&sprefix=samsung+galaxy+s20+ultra+cosmic+gray%2C+128+gb+12+gb+ram+%2Celectronics%2C404&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-s20-ultra-cosmic-gray-128-gb/p/itma25b4687846b4?pid=MOBFZXZ22CWZ2JZB&lid=LSTMOBFZXZ22CWZ2JZB7GKWML&marketplace=FLIPKART&q=Samsung+Galaxy+S20+Ultra&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=feb8e8f0-da12-4f82-8b44-5afa0b1b6323.MOBFZXZ22CWZ2JZB.SEARCH&ppt=sp&ppn=sp&ssid=62jrkvaob40000001675803113314&qH=b0c9f769a708f96f",
    Image: "https://m.media-amazon.com/images/I/71cD4NUIBWL._SY741_.jpg",
  },
  {
    Name: "Samsung Galaxy Note 20 ",
    Memory: "8 GB RAM | 256 GB ROM",
    Display: "17.02 cm (6.7 inch) Full HD+ Display",
    Camera: "64MP + 12MP + 12MP | 10MP Front Camera",
    Battery: "4300 mAh Lithium-ion Battery",
    Processor: "Exynos Octa Core Processor",
    Amazon:
      "https://www.amazon.in/Renewe-Samsung-Storage-Additional-Exchange/dp/B08J7XS8NP/ref=sr_1_3?crid=497EAKUQ267T&keywords=SAMSUNG+Galaxy+Note+20+%28Mystic+Blue%2C+256+GB%29&qid=1675803789&s=electronics&sprefix=samsung+galaxy+note+20+mystic+blue%2C+256+gb+%2Celectronics%2C264&sr=1-3",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-note-20-mystic-blue-256-gb/p/itm02d10969ce115?pid=MOBFUKHDNAZGZUAZ&lid=LSTMOBFUKHDNAZGZUAZFLMWYL&marketplace=FLIPKART&q=Samsung+Galaxy+Note+20&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=9c4544dc-395a-434d-ae69-814fe6f5c969.MOBFUKHDNAZGZUAZ.SEARCH&ppt=pp&ppn=pp&ssid=05dndq0cj40000001675803750525&qH=f00cbdeb15b4acde",
    Image: "https://m.media-amazon.com/images/I/61b6GZotTwL._SY741_.jpg",
  },
  {
    Name: "Samsung Galaxy S20 Plus",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "17.02 cm (6.7 inch) Quad HD+ Display + Super AMOLED Display",
    Camera: "64 MP + 12 MP +12 MP + VGA Depth Camera | 10MP Front Camera",
    Battery: "4500 mAh Lithium-ion Battery",
    Processor: "Exynos 990 Processor",
    Amazon:
      "https://www.amazon.in/enewed-Samsung-Storage-Additional-Exchange/dp/B087BWFBY9/ref=sr_1_2?crid=BMN7ZYWR4CQZ&keywords=Samsung+Galaxy+S20+Plus&qid=1675803967&s=electronics&sprefix=samsung+galaxy+s20+plus%2Celectronics%2C512&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-s20-cosmic-gray-128-gb/p/itm7087be7ae167c?pid=MOBFZXZ25TPA68VH&lid=LSTMOBFZXZ25TPA68VHU5XEKN&marketplace=FLIPKART&q=Samsung+Galaxy+S20+Plus&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=39d83678-75ad-4a04-9737-13467b5b8681.MOBFZXZ25TPA68VH.SEARCH&ppt=sp&ppn=sp&ssid=x3qu6nzjsw0000001675803974263&qH=ca795bf69f7c1b46",
    Image: "https://m.media-amazon.com/images/I/41HX8Qc6+VL._SY300_SX300_.jpg",
  },
  {
    Name: "SAMSUNG Galaxy A23 5G",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "16.76 cm (6.6 inch) Full HD+ Display",
    Camera: "50MP + 5MP | 8MP Front Camera",
    Battery: "5000 mAh Lithium Ion Battery",
    Processor: "Qualcomm Snapdragon 695 (SM6375) Processor",
    Amazon:
      "https://www.amazon.in/Samsung-Galaxy-Light-18GB-Storage/dp/B0BS193NXQ/ref=sr_1_8?crid=1Q6CH1M3MI25O&keywords=Samsung+Galaxy+A51&qid=1675804499&s=electronics&sprefix=samsung+galaxy+a51%2Celectronics%2C895&sr=1-8",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-a23-5g-silver-128-gb/p/itm929372c9db763?pid=MOBGHT8U5HGTWKTZ&lid=LSTMOBGHT8U5HGTWKTZ8ZTELX&marketplace=FLIPKART&q=Samsung+Galaxy+A23+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=df98863b-fb84-4ba8-aae2-7653812b2451.MOBGHT8U5HGTWKTZ.SEARCH&ppt=sp&ppn=sp&ssid=bgonoxspzk0000001675804630969&qH=a1780a65780ce411",
    Image: "https://m.media-amazon.com/images/I/81EtFZ6GA1L._SL1500_.jpg",
  },
  {
    Name: "SAMSUNG Galaxy M33 5G",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.76 cm (6.6 inch) Display",
    Camera: "50MP Rear Camera",
    Battery: "6000 mAh Battery",
    Processor: "Exynos 990 Processor",
    Amazon:
      "https://www.amazon.in/Samsung-Mystique-Storage-Purchased-Separately/dp/B09TWHTBKQ/ref=sr_1_27?crid=1Q6CH1M3MI25O&keywords=Samsung+Galaxy+A51&qid=1675804871&s=electronics&sprefix=samsung+galaxy+a51%2Celectronics%2C895&sr=1-27",
    Flipkart:
      "https://www.flipkart.com/samsung-galaxy-m33-5g-mystique-green-128-gb/p/itm2aa4db0a58c8a?pid=MOBGHDXF3TMKZEYU&lid=LSTMOBGHDXF3TMKZEYUCGHOQF&marketplace=FLIPKART&q=Samsung+Galaxy+M33+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=110eae1b-9928-455f-8645-000020267e89.MOBGHDXF3TMKZEYU.SEARCH&ppt=sp&ppn=sp&ssid=uo9i11ft800000001675804891192&qH=d79948d9d14f063c",
    Image: "https://m.media-amazon.com/images/I/81I3w4J6yjL._SL1500_.jpg",
  },
  {
    Name: "Poco X3 Pro",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "48MP + 8MP + 2MP + 2MP | 20MP Front Camera",
    Battery: "5160 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 860 Processor",
    Amazon:
      "https://www.amazon.in/Poco-Graphite-Black-128GB-Storage/dp/B09DFN5LV5/ref=sr_1_2?crid=1VO7E8N0BIZ2Z&keywords=Poco+X3+Pro&qid=1675805222&s=electronics&sprefix=poco+x3+pro%2Celectronics%2C247&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/poco-x3-pro-graphite-black-128-gb/p/itm9ce5166bf0e03?pid=MOBGFKNFRVPZ77GX&lid=LSTMOBGFKNFRVPZ77GX49YEPZ&marketplace=FLIPKART&q=Poco+X3+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=7566b09a-9fc8-436e-9251-037c82805eb5.MOBGFKNFRVPZ77GX.SEARCH&ppt=sp&ppn=sp&ssid=n68h8e6yv40000001675805229580&qH=bf43616cf5a983bc",
    Image:
      "https://m.media-amazon.com/images/I/31wh13R16iL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    Name: "Poco M3",
    Memory: "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
    Display: "16.59 cm (6.53 inch) Full HD+ Display",
    Camera: "48MP + 2MP + 2MP | 8MP Front Camera",
    Battery: "6000 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 662 Processor",
    Amazon:
      "https://www.amazon.in/POCO-M3-Power-Black-Storage/dp/B08WJB96PC/ref=sr_1_1?keywords=Poco+M3&qid=1675805571&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/poco-m3-yellow-64-gb/p/itmb64ed93540462?pid=MOBG4CGFKYJFZ9HX&lid=LSTMOBG4CGFKYJFZ9HXGBVNVE&marketplace=FLIPKART&q=Poco+M3&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=08a64356-073e-4480-8ed5-89d6a6a7728c.MOBG4CGFKYJFZ9HX.SEARCH&ppt=pp&ppn=pp&ssid=dyj2tr8nk00000001675805551898&qH=c45e860b60646083",
    Image: "https://m.media-amazon.com/images/I/819tyWhY0iL._SY741_.jpg",
  },
  {
    Name: "Poco X3",
    Memory: "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "64MP + 13MP + 2MP + 2MP | 20MP Front Camera",
    Battery: "6000 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 732G Processor",
    Amazon:
      "https://www.amazon.in/POCO-Cobalt-Blue-64GB-Storage/dp/B08LHKYPVL/ref=sr_1_1?keywords=Poco+X3&qid=1675805871&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/poco-x3-cobalt-blue-64-gb/p/itme71cba415d626?pid=MOBFVQJ5K89TYFXR&lid=LSTMOBFVQJ5K89TYFXR0TZFJC&marketplace=FLIPKART&q=Poco+X3&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=3fad52a8-6c6f-44d9-abc8-db192d131c20.MOBFVQJ5K89TYFXR.SEARCH&ppt=None&ppn=None&ssid=gms2dcmmpc0000001675805809292&qH=527e879fe18f1ae2",
    Image: "https://m.media-amazon.com/images/I/71eygiVHCuL._SL1500_.jpg",
  },
  {
    Name: "Poco M2 Pro",
    Memory: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "48MP + 8MP + 5MP + 2MP | 16MP Front Camera",
    Battery: "5000 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 720G Processor",
    Amazon:
      "https://www.amazon.in/Renewed-MI-Shades-Black-Storage/dp/B08LZ82TK9/ref=sr_1_1?keywords=Poco+M2+Pro&qid=1675806262&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/poco-m2-pro-two-shades-black-128-gb/p/itm4ce7da562a7bb?pid=MOBFT7MKJXZPFPMS&lid=LSTMOBFT7MKJXZPFPMSK00QGH&marketplace=FLIPKART&q=Poco+M2+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=903e9afd-1147-4b98-91cc-70671314343e.MOBFT7MKJXZPFPMS.SEARCH&ppt=sp&ppn=sp&ssid=ne6ant5r2o0000001675806248819&qH=4f6e89b7d5bb0cc4",
    Image: "https://m.media-amazon.com/images/I/61bpDVb+k2L._SY741_.jpg",
  },
  {
    Name: "Poco C3",
    Memory: "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
    Display: "16.59 cm (6.53 inch) HD+ Display",
    Camera: "13MP + 2MP + 2MP | 5MP Front Camera",
    Battery: "5000 mAh Li-ion Polymer Battery",
    Processor: "Mediatek Helio G35 Processor",
    Amazon:
      "https://www.amazon.in/Renewed-Redmi-Poco-Green-Storage/dp/B094SBTL9V/ref=sr_1_1?keywords=Poco+C3&qid=1675806462&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/poco-c3-arctic-blue-32-gb/p/itm815e140cbd2a0?pid=MOBFVQJ5PMVMSJHT&lid=LSTMOBFVQJ5PMVMSJHTFRB6K5&marketplace=FLIPKART&q=Poco+C3&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=43d4fd15-c6f2-428e-86f9-d08b21c32509.MOBFVQJ5PMVMSJHT.SEARCH&ppt=sp&ppn=sp&ssid=8fg8p1t6n40000001675806468390&qH=be6a15a88db822bb",
    Image: "https://m.media-amazon.com/images/I/51j4F3gzE2S._SL1000_.jpg",
  },
  {
    Name: "Poco X2",
    Memory: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera",
    Battery: "4500 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 730G Processor",
    Amazon:
      "https://www.amazon.in/Renewed-POCO-Matrix-Purple-Storage/dp/B08HWSVH5B/ref=sr_1_1?keywords=Poco+X2&qid=1675806682&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/poco-x2-matrix-purple-128-gb/p/itm8715ce604cf32?pid=MOBFZGJ68F5GFVYD&lid=LSTMOBFZGJ68F5GFVYDP6BO2N&marketplace=FLIPKART&q=POCO+X2+%28Matrix+Purple%2C+6GB+RAM%2C+128GB+Storage%29&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=78bde87a-c62b-43bc-b671-c7595028a549.MOBFZGJ68F5GFVYD.SEARCH&ppt=sp&ppn=sp&ssid=44p0isg0sg0000001675806730193&qH=05581ff5ed33ddc5",
    Image: "https://m.media-amazon.com/images/I/510Q7p57ZfL._SY741_.jpg",
  },
  {
    Name: "Poco F1",
    Memory: "6 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
    Display: "15.7 cm (6.18 inch) Full HD+ Display",
    Camera: "12MP + 5MP | 20MP Front Camera",
    Battery: "4000 mAh Li-polymer Battery",
    Processor: "Qualcomm Snapdragon 845 Processor",
    Amazon:
      "https://www.amazon.in/POCO-6GB-128GB-Rosso-RED/dp/B07JQBLTFM/ref=sr_1_2?keywords=Poco+F1&qid=1675806896&s=electronics&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/poco-f1-rosso-red-64-gb/p/itmf9c3nheykcepp?pid=MOBF9A67HZBXF8FH&lid=LSTMOBF9A67HZBXF8FHJP9JRC&marketplace=FLIPKART&q=Poco+F1+by+Xiaomi+%28Rosso+Red%2C+6GB+RAM%2C+SD+845%2C+128GB+Storage%29&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=6a48a034-03f1-4ff4-bb7a-4e16f5b3a469.MOBF9A67HZBXF8FH.SEARCH&ppt=sp&ppn=sp&ssid=4h1ouoa50g0000001675806947626&qH=e07756011ef4617c",
    Image: "https://m.media-amazon.com/images/I/812MBICsvnL._SY741_.jpg",
  },
  {
    Name: "Poco-M2",
    Memory: "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
    Display: "16.59 cm (6.53 inch) Full HD+ Display",
    Camera: "13MP + 8MP + 5MP + 2MP | 8MP Front Camera",
    Battery: "5000 mAh Lithium Polymer Battery",
    Processor: "MediaTek Helio G80 Processor",
    Amazon:
      "https://www.amazon.in/Poco-M2-Slate-Blue-6GB-64GB/dp/B0BQ76W2GF/ref=sr_1_1?keywords=Poco+M2&qid=1675807117&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/poco-m2-slate-blue-64-gb/p/itmfd82e37cf60fb?pid=MOBFV9V96DHYMUHJ&lid=LSTMOBFV9V96DHYMUHJIA0JEG&marketplace=FLIPKART&q=Poco-M2+Slate+Blue+%286GB+RAM+64GB+ROM%29&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=a11354b8-ea04-4b09-9bcd-729d8ed7e4fd.MOBFV9V96DHYMUHJ.SEARCH&ppt=sp&ppn=sp&ssid=drdnlpgjn40000001675807201277&qH=5702931f2fe67203",
    Image: "https://m.media-amazon.com/images/I/31lzqljjDuL.jpg",
  },
  {
    Name: "POCO M4 Pro 5G",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "16.76 cm (6.6 inch) Full HD+ Display",
    Camera: "50MP + 8MP | 16MP Front Camera",
    Battery: "5000 mAh Lithium-ion Polymer Battery",
    Processor: "Mediatek Dimensity 810 Processor",
    Amazon:
      "https://www.amazon.in/POCO-Pro-Cool-8GB-128GB/dp/B0B2CYSFPZ/ref=sr_1_7?keywords=Poco+X2+Pro&qid=1675807382&s=electronics&sr=1-7",
    Flipkart:
      "https://www.flipkart.com/poco-m4-pro-5g-cool-blue-128-gb/p/itma0904b0c413a4?pid=MOBGBEU7BGWZNBYY&lid=LSTMOBGBEU7BGWZNBYYXGBTUG&marketplace=FLIPKART&q=POCO+M4+Pro+5G+%28Cool+Blue%2C+8GB+RAM%2C+128GB+Storage%29&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=82d5a951-b1ac-437f-ad71-211793b8ccfc.MOBGBEU7BGWZNBYY.SEARCH&ppt=sp&ppn=sp&ssid=euoy6ygbe80000001675807450197&qH=a72e33253f31404c",
    Image: "https://m.media-amazon.com/images/I/31ELCH2HfcL.jpg",
  },
  {
    Name: "Poco X2 Pro",
    Memory: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "48MP + 8MP + 5MP + 2MP | 16MP Front Camera",
    Battery: "5000 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcmm Snapdragon 720G Processor",
    Amazon:
      "https://www.amazon.in/MI-Poco-Blue-64GB-Storage/dp/B08H29LSXW/ref=sr_1_14?keywords=Poco+X2+Pro&qid=1675807382&s=electronics&sr=1-14",
    Flipkart:
      "https://www.flipkart.com/poco-m2-pro-two-shades-black-128-gb/p/itm4ce7da562a7bb?pid=MOBFT7MKJXZPFPMS&lid=LSTMOBFT7MKJXZPFPMSK00QGH&marketplace=FLIPKART&q=MI+Poco+M2+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=7b94b146-2bb4-4c66-ae98-86f8d9153c4f.MOBFT7MKJXZPFPMS.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=8qvpjf0wn40000001675807759717&qH=2e848bf092c1c073",
    Image: "https://m.media-amazon.com/images/I/81zX4xnnfgL._SL1500_.jpg",
  },
  {
    Name: "Redmi Note 10 Pro Max",
    Memory: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "108MP Rear Camera | 16MP Front Camera",
    Battery: "5020 mAh Battery",
    Processor: "Qualcomm Snapdragon 732G Processor",
    Amazon:
      "https://www.amazon.in/Test-Exclusive_2020_1159-Multi-3GB-Storage/dp/B089MVC43X/ref=sr_1_1?keywords=Redmi+Note+10+Pro+Max&qid=1675852834&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/redmi-note-10-pro-max-dark-nebula-128-gb/p/itm32dc939d5a40f?pid=MOBGF8VJY8ZFKPMK&lid=LSTMOBGF8VJY8ZFKPMKJRFBDV&marketplace=FLIPKART&q=Redmi+Note+10+Pro+Max&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=e281ea04-0b50-4670-9f02-d7b4ac4cb2e2.MOBGF8VJY8ZFKPMK.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=4wixm7gv280000001675852833194&qH=12c63d50e9e76d36",
    Image: "https://m.media-amazon.com/images/I/8186D4Mph7L._SL1500_.jpg",
  },
  {
    Name: "Redmi Note 10 Pro",
    Memory: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Super AMOLED Display",
    Camera: "64MP + 8MP + 5MP + 2MP | 16MP Front Camera",
    Battery: "5020 mAh Li-Polymer Battery",
    Processor: "Qualcomm Snapdragon 732G Processor ",
    Amazon:
      "https://www.amazon.in/Redmi-Note-10-64MPwith-Tele-Macro/dp/B09Q6FSYN8/ref=sr_1_3?keywords=Redmi+Note+10+Pro&qid=1675853000&s=electronics&sr=1-3",
    Flipkart:
      "https://www.flipkart.com/redmi-note-10-pro-vintage-bronze-128-gb/p/itmb4b28cb04dce7?pid=MOBGB725PZQYDN4D&lid=LSTMOBGB725PZQYDN4DHHATEY&marketplace=FLIPKART&q=Redmi+Note+10+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=54ef6150-9905-427c-ae58-d8aae6ac2d12.MOBGB725PZQYDN4D.SEARCH&ppt=pp&ppn=pp&ssid=5eq9hkwrsw0000001675853005525&qH=afaa183bbc7d23cb",
    Image: "https://m.media-amazon.com/images/I/51NZCPnyMqL._SY741_.jpg",
  },
  {
    Name: "Redmi Note 10S",
    Memory: "6 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
    Display: "16.33 cm (6.43 inch) Full HD+ Super AMOLED Display",
    Camera: "64MP + 8MP + 2MP + 2MP | 13MP Front Camera",
    Battery: "5000 mAh Lithium-Ploymer Battery",
    Processor: "Mediatek Helio G95 Processor",
    Amazon:
      "https://www.amazon.in/Redmi-Storage-Super-Amoled-Display/dp/B0948NNY3W/ref=sr_1_1?keywords=Redmi+Note+10S&qid=1675853191&s=electronics&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/redmi-note-10s-frost-white-64-gb/p/itm2059d1d0cfd67?pid=MOBGAHD8TKZGPYJW&lid=LSTMOBGAHD8TKZGPYJWSOATOH&marketplace=FLIPKART&q=Redmi+Note+10S&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=aaa3a12e-2f8a-42fb-ad45-baf37c4f9569.MOBGAHD8TKZGPYJW.SEARCH&ppt=sp&ppn=sp&ssid=d7887mrf000000001675853197539&qH=740408bc80ee68fe",
    Image: "https://m.media-amazon.com/images/I/81B0HJigO-L._SL1500_.jpg",
  },
  {
    Name: "REDMI Note 10T 5G",
    Memory: "6 GB RAM | 128 GB ROM",
    Display: "16.66 cm (6.56 inch) Full HD+ Display",
    Camera:
      "48MP Primary Camera + 2MP Macro Lens + 2MP Depth Sensor | 8MP Front Camera",
    Battery: "5000 mAh Lithium Polymer Battery",
    Proccesor: "Mediatek Dimensity 700 Processor",
    Amazon:
      "https://www.amazon.in/Redmi-Note-Adaptive-Dimensity-Processor/dp/B09Q6DD5LJ/ref=sr_1_2?keywords=REDMI+Note+10T+5G+%28Mint+Green%2C+128+GB%29&qid=1675853448&s=electronics&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/redmi-note-10t-5g-mint-green-128-gb/p/itm9aa44a6740f67?pid=MOBGC7QFT9EAHMFF&lid=LSTMOBGC7QFT9EAHMFFPHELFR&marketplace=FLIPKART&q=Redmi+Note+10&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=ffbd6924-d617-488a-a1ac-b63fdbf83784.MOBGC7QFT9EAHMFF.SEARCH&ppt=sp&ppn=sp&ssid=p5m1edoqtc0000001675853361226&qH=dba8bb086b228ddf",
    Image: "https://m.media-amazon.com/images/I/71PGFrGuitL._SL1500_.jpg",
  },
  {
    Name: "REDMI K50i 5G",
    Memory: "6 GB RAM | 128 GB ROM",
    Display: "16.76 cm (6.6 inch) Display",
    Camera: "64MP Rear Camera",
    Battery: "5080 mAh Battery",
    Processor: "Mediatek Dimensity 700 Processor",
    Amazon:
      "https://www.amazon.in/Redmi-Flagship-Mediatek-Dimensity-Processor/dp/B0B4DZ14K7/ref=sr_1_5?keywords=Redmi+K40+Pro&qid=1675853661&s=electronics&sr=1-5",
    Flipkart:
      "https://www.flipkart.com/redmi-k50i-5g-phantom-blue-128-gb/p/itm7e8559c2fbde8?pid=MOBGHDXFSMTJAKG3&lid=LSTMOBGHDXFSMTJAKG34APUCQ&marketplace=FLIPKART&q=Redmi+K50i+5G+&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=de068ec6-960b-406f-a282-f115dc3f7652.MOBGHDXFSMTJAKG3.SEARCH&ppt=sp&ppn=sp&ssid=n4uayjbs1s0000001675853818075&qH=1960ff2223b367b5",
    Image:
      "https://m.media-amazon.com/images/I/41Pn3umtB8L._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    Name: "REDMI Note 11T 5G",
    Memory: "6 GB RAM | 128 GB ROM",
    Display: "16.76 cm (6.6 inch) Display",
    Camera: "50MP Rear Camera",
    Battery: "5000 mAh Battery",
    Processor: "MediaTek Helio G80 Processor",
    Amazon:
      "https://www.amazon.in/Redmi-Note-11T-5G-Dimensity/dp/B09LJ12YNK/ref=sr_1_7?keywords=Redmi+K40+Pro&qid=1675853661&s=electronics&sr=1-7",
    Flipkart:
      "https://www.flipkart.com/redmi-note-11t-5g-aquamarine-blue-128-gb/p/itm7ce40aba5696c?pid=MOBGHDXJUTY76VGE&lid=LSTMOBGHDXJUTY76VGEWXTHMG&marketplace=FLIPKART&q=Redmi+Note+11T+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=c9b0c6d4-2337-452b-8f27-cffb3bf318ae.MOBGHDXJUTY76VGE.SEARCH&ppt=sp&ppn=sp&ssid=4sk470v16o0000001675854100193&qH=470a0894e8f7466f",
    Image: "https://m.media-amazon.com/images/I/7155Pasn1aL._SL1500_.jpg",
  },
  {
    Name: "REDMI 9i Sport",
    Memory: "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
    Display: "16.59 cm (6.53 inch) HD+ Display",
    Camera: "13MP Rear Camera | 5MP Front Camera",
    Battery: "5000 mAh Li-Polymer Battery",
    Processor: "MediaTek Helio G25 Processor",
    Amazon:
      "https://www.amazon.in/MI-REDMI-Sport-Coral-Green/dp/B09KCM5C4V/ref=sr_1_1?crid=M7S1TI84ECFG&keywords=REDMI+9i+Sport&qid=1675854362&s=electronics&sprefix=redmi+9i+sport%2Celectronics%2C571&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/redmi-9i-sport-coral-green-64-gb/p/itmb5e8d8186b602?pid=MOBG6WQWJRFZ5WDG&lid=LSTMOBG6WQWJRFZ5WDGJDTSKF&marketplace=FLIPKART&q=Redmi+K40&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=7f431bbc-c87e-45ba-aa44-31723b086a08.MOBG6WQWJRFZ5WDG.SEARCH&ppt=sp&ppn=sp&ssid=smr7d0zib40000001675854321265&qH=6a002429ee90a722",
    Image: "https://m.media-amazon.com/images/I/61kcGZD4CLL._SL1500_.jpg",
  },
  {
    Name: "Redmi 9 Power",
    Memory: "4 GB RAM | 64 GB ROM",
    Display: "16.59 cm (6.53 inch) Full HD+ Display",
    Camera: "48MP + 8MP + 2MP + 2MP | 8MP Front Camera",
    Battery: "6000 mAh Battery",
    Processor: "Qualcomm Snapdragon 662 Processor",
    Amazon:
      "https://www.amazon.in/Test-Exclusive_2020_1111-Multi-3GB-Storage/dp/B089MS8HPF/ref=sr_1_3?crid=1JB6DLVTLTXE7&keywords=Redmi+9+Power&qid=1675854527&s=electronics&sprefix=redmi+9+power%2Celectronics%2C391&sr=1-3",
    Flipkart:
      "https://www.flipkart.com/redmi-9-power-mighty-black-64-gb/p/itm481ab234a6553?pid=MOBFYZ94UWPWQRNF&lid=LSTMOBFYZ94UWPWQRNFEW68FK&marketplace=FLIPKART&q=Redmi+9+Power&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=4514be76-6091-4d3b-bd26-08b8b016a8f9.MOBFYZ94UWPWQRNF.SEARCH&ppt=sp&ppn=sp&ssid=rusgk4u3pc0000001675854531855&qH=00d3b17906354632",
    Image: "https://m.media-amazon.com/images/I/71hEzQGO5qL._SL1500_.jpg",
  },
  {
    Name: "REDMI 9 Prime",
    Memory: "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
    Display: "16.59 cm (6.53 inch) Full HD+ Display",
    Camera: "13MP + 8MP + 5MP + 2MP | 8MP Front Camera",
    Battery: "5020 mAh Battery",
    Processor: "MediaTek Helio G80 Processor",
    Amazon:
      "https://www.amazon.in/Redmi-Prime-Storage-Display-Camera/dp/B08697MJDK/ref=sr_1_1?crid=1VC3LS905DP62&keywords=Redmi+9+Prime&qid=1675854665&s=electronics&sprefix=redmi+9+prime%2Celectronics%2C517&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/redmi-9-prime-sunrise-flare-64-gb/p/itmbd255e5962722?pid=MOBFUTBVDZHZSG2P&lid=LSTMOBFUTBVDZHZSG2PGWGFYG&marketplace=FLIPKART&q=Redmi+9+Prime&store=tyy%2F4io&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=b7d06439-0eec-43f8-852c-c49b30ed7205.MOBFUTBVDZHZSG2P.SEARCH&ppt=sp&ppn=sp&ssid=ycqtv4gb680000001675854673092&qH=bdfac4c66515370b",
    Image: "https://m.media-amazon.com/images/I/71U2SiHgbiL._SL1500_.jpg",
  },
  {
    Name: "Redmi Note 9 Pro Max",
    Memory: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
    Display: "16.94 cm (6.67 inch) Full HD+ Display",
    Camera: "64MP + 8MP + 5MP + 2MP | 32MP Front Camera",
    Battery: "5020 mAh Lithium Polymer Battery",
    Processor: "Qualcomm Snapdragon 720G Processor",
    Amazon:
      "https://www.amazon.in/Renewed-Redmi-Note-Pro-Interstellar/dp/B09HXCMKBC/ref=sr_1_3?crid=28ETTS5B30G86&keywords=Redmi+Note+9+Pro+Max&qid=1675854952&s=electronics&sprefix=redmi+note+9+pro+max%2Celectronics%2C364&sr=1-3",
    Flipkart:
      "https://www.flipkart.com/redmi-note-9-pro-max-glacier-white-128-gb/p/itm373fd107877c9?pid=MOBFRWZNDTQSCQCB&lid=LSTMOBFRWZNDTQSCQCBIRRBTO&marketplace=FLIPKART&q=Redmi+Note+9+Pro+Max&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=000a99fe-9d18-4b00-ba54-10f8c9e415d9.MOBFRWZNDTQSCQCB.SEARCH&ppt=sp&ppn=sp&ssid=l3nqzgkezk0000001675854959403&qH=21b439422aa466e2",
    Image: "https://m.media-amazon.com/images/I/41orw0UovlL.jpg",
  },
  {
    Name: "OPPO Find X",
    Memory: "8 GB RAM | 256 GB ROM",
    Display: "16.26 cm (6.4 inch) Full HD Display",
    Camera: "16MP + 20MP | 25MP Front Camera",
    Battery: "3730 mAh Li-polymer Battery",
    Processor: "Snapdragon 845 Octa Core 2.649 GHz Processor",
    Amazon:
      "https://www.amazon.in/Bordeaux-Storage-Additional-Exchange-Offers/dp/B07KSBY45C/ref=sr_1_4?keywords=Oppo+Find+X3+Pro&qid=1675855518&s=electronics&sr=1-4",
    Flipkart:
      "https://www.flipkart.com/oppo-find-x-glacier-blue-256-gb/p/itmf7yjbm75hdpm4?pid=MOBF7YJBFDFBUVY2&lid=LSTMOBF7YJBFDFBUVY2P1FSEH&marketplace=FLIPKART&q=Oppo+Find+X3+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=e8b8b2c4-5774-423c-9384-6c6c051f6f12.MOBF7YJBFDFBUVY2.SEARCH&ppt=sp&ppn=sp&ssid=gqhvwvh3280000001675855512375&qH=f75e0439149ec5e2",
    Image: "https://m.media-amazon.com/images/I/51OolUMH9aL._SL1235_.jpg",
  },
  {
    Name: "Oppo Reno 6 Pro 5G",
    Memory: "12 GB RAM | 256 GB ROM",
    Display: "16.64 cm (6.55 inch) Full HD+ Display",
    Camera: "64MP + 8MP + 2MP + 2MP | 32MP Front Camera",
    Battery: "4500 mAh Lithium-ion Polymer Battery",
    Processor: "MediaTek Dimensity 1200 Processor",
    Amazon:
      "https://www.amazon.in/Oppo-Aurora-Storage-Medium-CPH2249/dp/B09B4VYY2V/ref=sr_1_13?crid=2E7SG3TLVDGUL&keywords=Oppo+Reno5+Pro%2B&qid=1675855882&s=electronics&sprefix=oppo+reno5+pro%2B%2Celectronics%2C804&sr=1-13",
    Flipkart:
      "https://www.flipkart.com/oppo-reno6-pro-5g-aurora-256-gb/p/itm105fdede3d67b?pid=MOBG4GGZZDPB2RP5&lid=LSTMOBG4GGZZDPB2RP5YVYRJX&marketplace=FLIPKART&q=Oppo+Reno+6+Pro+5G&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=e1e1fe9c-cb84-4a56-b75e-0a789381ae52.MOBG4GGZZDPB2RP5.SEARCH&ppt=sp&ppn=sp&ssid=7l2v7movow0000001675855952042&qH=b8e85ba89687faa1",
    Image: "https://m.media-amazon.com/images/I/71otei-O3-L._SL1500_.jpg",
  },
  {
    Name: "OPPO K10 5G",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "16.66 cm (6.56 inch) HD+ Display",
    Camera: "48MP + 2MP | 8MP Front Camera",
    Battery: "5000 mAh Lithium Ion Polymer Battery",
    Processor: "Mediatek Dimensity 810 Processor",
    Amazon:
      "https://www.amazon.in/OPPO-Ocean-Blue-128GB-Storage/dp/B0B4D8WP8G/ref=sr_1_4?crid=1TH1XYWV6TPKP&keywords=Oppo%2BReno5%2B5G&qid=1675856108&s=electronics&sprefix=oppo%2Breno5%2B5g%2Celectronics%2C476&sr=1-4&th=1",
    Flipkart:
      "https://www.flipkart.com/oppo-k10-5g-midnight-black-128-gb/p/itm28cf887931942?pid=MOBGETEKHMT7HMR7&lid=LSTMOBGETEKHMT7HMR7WHUWBT&marketplace=FLIPKART&q=Oppo+K10+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=82027f65-f6d7-4ab2-91c0-e3949797e9e0.MOBGETEKHMT7HMR7.SEARCH&ppt=sp&ppn=sp&ssid=nmpm47bots0000001675856163820&qH=60a8d75b5c3e92ad",
    Image: "https://m.media-amazon.com/images/I/71v74acXDIL._SL1450_.jpg",
  },
  {
    Name: "OPPO Reno4 Pro",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
    Display: "16.51 cm (6.5 inch) Full HD+ Display",
    Camera: "48MP + 8MP + 2MP + 2MP | 32MP Front Camera",
    Battery: "4000 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 720G Octa Core Processor",
    Amazon:
      "https://www.amazon.in/OPPO-Reno4-Galactic-128GB-Storage/dp/B089MSCW93/ref=sr_1_2?crid=15FBLIZIDU6D6&keywords=Oppo+Reno4+Pro+5G&qid=1675856402&s=electronics&sprefix=%2Celectronics%2C646&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/oppo-reno4-pro-starry-night-128-gb/p/itm7d439eedcfabf?pid=MOBFU2GYSAPQTNV5&lid=LSTMOBFU2GYSAPQTNV5VKZ5L6&marketplace=FLIPKART&q=Oppo+Reno4+Pro+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=49052537-6a8e-41e8-89f7-b1c881bc23f9.MOBFU2GYSAPQTNV5.SEARCH&ppt=sp&ppn=sp&ssid=0ykgt0z9og0000001675856407724&qH=86eeb648a3d63e1b",
    Image: "https://m.media-amazon.com/images/I/71SXCXdFcCL._SL1500_.jpg",
  },
  {
    Name: "OPPO Reno4 Pro",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
    Display: "16.51 cm (6.5 inch) Full HD+ Display",
    Camera: "48MP + 8MP + 2MP + 2MP | 32MP Front Camera",
    Battery: "4000 mAh Lithium-ion Polymer Battery",
    Processor: "Qualcomm Snapdragon 720G Octa Core Processor",
    Amazon:
      "https://www.amazon.in/OPPO-Reno4-Galactic-128GB-Storage/dp/B089MSCW93/ref=sr_1_2?crid=1EI9KN1CIC0WN&keywords=Oppo+Reno4+Pro+5G&qid=1675856580&s=electronics&sprefix=oppo+reno+4+pro+5g%2Celectronics%2C7417&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/oppo-reno4-pro-starry-night-128-gb/p/itm7d439eedcfabf?pid=MOBFU2GYSAPQTNV5&lid=LSTMOBFU2GYSAPQTNV5VKZ5L6&marketplace=FLIPKART&q=OPPO+Reno4+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=620a6ebe-c75d-43b2-a49a-67aeacd6cab1.MOBFU2GYSAPQTNV5.SEARCH&ppt=sp&ppn=sp&ssid=qhcpo537g00000001675856617638&qH=649160b245598f0d",
    Image: "https://m.media-amazon.com/images/I/71SXCXdFcCL._SL1500_.jpg",
  },
  {
    Name: "Oppo F21s Pro 5G",
    Memory: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    Display: "16.33 cm (6.43 inch) Full HD+ E3 Super AMOLED Display",
    Camera: "64MP + 2MP + 2MP | 16MP + 2MP Dual Front Camera",
    Battery: "4500 mAh Battery",
    Processor: "Qualcomm SM6225 Snapdragon 680 4G (6 nm) Processor",
    Amazon:
      "https://www.amazon.in/Oppo-Dawnlight-Storage-Additional-Exchange/dp/B0BD52J6HF/ref=sr_1_4?crid=1EI9KN1CIC0WN&keywords=Oppo+Reno4+Pro+5G&qid=1675856580&s=electronics&sprefix=oppo+reno+4+pro+5g%2Celectronics%2C7417&sr=1-4",
    Flipkart:
      "https://www.flipkart.com/oppo-f21s-pro-5g-starlight-black-128-gb/p/itm88da29ea5c190?pid=MOBGG59UNKEMNBZ8&lid=LSTMOBGG59UNKEMNBZ8BG2ASO&marketplace=FLIPKART&q=Oppo+F21s+Pro+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=0a12ebb0-beb5-4c22-b4d2-89b96c3a1116.MOBGG59UNKEMNBZ8.SEARCH&ppt=sp&ppn=sp&ssid=9z0q1eato00000001675856836488&qH=6e6ecf5548352ea7",
    Image: "https://m.media-amazon.com/images/I/7135dx-aayL._SL1500_.jpg",
  },
  {
    Name: "OPPO A15s",
    Memory: "4 GB RAM | 64 GB ROM",
    Display: "16.56 cm (6.52 inch) Display",
    Camera: "13MP Rear Camera",
    Battery: "4230 mAh Battery",
    Processor: "Qualcomm SM6225 Snapdragon 680 4G (6 nm) Processor",
    Amazon:
      "https://www.amazon.in/Oppo-Storage-Additional-Exchange-CPH2179/dp/B08LRDT7PL/ref=sr_1_1?crid=32A4M7ZPVM8D5&keywords=OPPO+A15s&qid=1675858272&s=electronics&sprefix=oppo+a15s%2Celectronics%2C375&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/oppo-a15s-rainbow-silver-64-gb/p/itm8a26d15bdd39c?pid=MOBGY9UETTJQDA3B&lid=LSTMOBGY9UETTJQDA3BJNJUCK&marketplace=FLIPKART&q=OPPO+A15s&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=126a08fc-9942-4619-b46d-6eb8a47f8987.MOBGY9UETTJQDA3B.SEARCH&ppt=sp&ppn=sp&ssid=wtd3pmfzww0000001675858261376&qH=60258966fe26ff08",
    Image: "https://m.media-amazon.com/images/I/71TdXNLT1FL._SL1500_.jpg",
  },
  {
    Name: "OPPO A31",
    Memory: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
    Display: "16.51 cm (6.5 inch) HD+ Display",
    Camera: "12MP + 2MP + 2MP | 8MP Front Camera",
    Battery: "4230 mAh Battery",
    Processor: "MediaTek Helio P35 Octa Core Processor",
    Amazon:
      "https://www.amazon.in/Oppo-Mystery-Storage-Additional-Exchange/dp/B08444S68L/ref=sr_1_9?crid=16BGWOBRJ3Q28&keywords=Oppo+A52&qid=1675858439&s=electronics&sprefix=oppo+a52%2Celectronics%2C274&sr=1-9",
    Flipkart:
      "https://www.flipkart.com/oppo-a31-mystery-black-64-gb/p/itm82e19f459118a?pid=MOBFPBD73QS7DUSD&lid=LSTMOBFPBD73QS7DUSDSGABN1&marketplace=FLIPKART&q=OPPO+A31&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=ad670738-ebea-4aa9-b4da-91bdba2308db.MOBFPBD73QS7DUSD.SEARCH&ppt=sp&ppn=sp&ssid=h14wakmlhc0000001675858473983&qH=12d3a8e7238325f8",
    Image: "https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg",
  },
  {
    Name: "OPPO A74 5G",
    Memory: "6 GB RAM | 128 GB ROM",
    Display: "16.48 cm (6.49 inch) Display",
    Camera: "48MP + 2MP + 2MP | 8MP Front Camera",
    Battery: "5000 mAh Battery",
    Processor: "MediaTek Helio P35 Octa Core Processor",
    Amazon:
      "https://www.amazon.in/OPPO-Fantastic-Purple-128GB-Storage/dp/B08VB34KJ1/ref=sr_1_1?crid=3FNATMAU4QN3F&keywords=Oppo+A72&qid=1675858592&s=electronics&sprefix=oppo+a72%2Celectronics%2C392&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/oppo-a74-5g-fantastic-purple-128-gb/p/itm53ee8fb563c7e?pid=MOBG2HZCJBHTVF9M&lid=LSTMOBG2HZCJBHTVF9MDVSHUN&marketplace=FLIPKART&q=OPPO+A74+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=b8aff095-fe32-41c6-b631-c1e96ebd3486.MOBG2HZCJBHTVF9M.SEARCH&ppt=sp&ppn=sp&ssid=4m197i57b40000001675858628623&qH=3be13a6afaa89256",
    Image: "https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg",
  },
  {
    Name: "OPPO A15s",
    Memory: "4 GB RAM | 64 GB ROM",
    Display: "16.56 cm (6.52 inch) Display",
    Camera: "13MP Rear Camera",
    Battery: "4230 mAh Battery",
    Processor: "MediaTek Helio P35 Octa Core Processor",
    Amazon:
      "https://www.amazon.in/Oppo-Storage-Additional-Exchange-CPH2179/dp/B08LRDT7PL/ref=sr_1_2?crid=1D23EB6QJ0JCA&keywords=Oppo+A15&qid=1675858779&s=electronics&sprefix=oppo+a15%2Celectronics%2C332&sr=1-2 ",
    Flipkart:
      "https://www.flipkart.com/oppo-a15s-rainbow-silver-64-gb/p/itm8a26d15bdd39c?pid=MOBGY9UETTJQDA3B&lid=LSTMOBGY9UETTJQDA3BJNJUCK&marketplace=FLIPKART&q=OPPO+A15s&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=60681c34-c696-45eb-b301-8affa9fc0889.MOBGY9UETTJQDA3B.SEARCH&ppt=sp&ppn=sp&ssid=cn3b66z1io0000001675858808558&qH=60258966fe26ff08",
    Image: "https://m.media-amazon.com/images/I/71TdXNLT1FL._SX679_.jpg",
  },
  {
    Name: "OnePlus 7T",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.64 cm (6.55 inch) Display",
    Camera: "48 MP + 12 MP + 16 MP | 16MP Front Camera",
    Battery: "3800 mAh Battery",
    Processor: "Qualcomm® Snapdragon™ 855 Plus Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-7T-Frosted-Display/dp/B0BS8WV4GM/ref=sr_1_2?crid=39QA9ONB8ZZR9&keywords=Oneplus+7T&qid=1675858950&s=electronics&sprefix=oneplus+7t%2Celectronics%2C331&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/oneplus-7t-frosted-silver-128-gb/p/itma74f3aece46b1?pid=MOBFKWSYFG45UYEB&lid=LSTMOBFKWSYFG45UYEBLUORUA&marketplace=FLIPKART&q=Oneplus+7T&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8d9cced0-cd2b-49b4-9296-d1d965cbe088.MOBFKWSYFG45UYEB.SEARCH&ppt=sp&ppn=sp&ssid=zecupym38g0000001675858959416&qH=6e56082af713d33f",
    Image: "https://m.media-amazon.com/images/I/71CXzCmoZRL._SX679_.jpg",
  },
  {
    Name: "Oneplus 6T",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.64 cm (6.55 inch) Display",
    Camera: "16MP Rear Camera",
    Battery: "3800 mAh Battery",
    Processor: "Qualcomm® Snapdragon™ 855 Plus Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-Mirror-Black-Storage/dp/B07KLG3KV1/ref=sr_1_1?crid=1PUU7TGOQM1NS&keywords=Oneplus+6T&qid=1675859164&s=electronics&sprefix=oneplus+6t%2Celectronics%2C320&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/oneplus-6t-mirror-black-128-gb/p/itm413383994ef63?pid=MOBFMSA3UEE87HHW&lid=LSTMOBFMSA3UEE87HHW0AAYJA&marketplace=FLIPKART&q=Oneplus+6T&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=5d93e2a4-2b78-4d67-9180-068db99c455a.MOBFMSA3UEE87HHW.SEARCH&ppt=sp&ppn=sp&ssid=y8aihzbucw0000001675859168493&qH=2605ffd5a4e16b01",
    Image: "https://m.media-amazon.com/images/I/51EfDWKl24L._SL1300_.jpg",
  },
  {
    Name: "OnePlus 7 Pro ",
    Memory: "6 GB RAM | 128 GB ROM",
    Display: "16.94 cm (6.67 inch) Display",
    Camera: "48 MP + 8 MP + 16 MP | 16MP Front Camera",
    Battery: "4000 mAh Battery",
    Processor: "Qualcomm® Snapdragon™ 855 Plus Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-Pro-Mirror-Storage/dp/B0BS76SBG8/ref=sr_1_1?crid=177ZKJIA174WD&keywords=Oneplus+7+Pro&qid=1675859344&s=electronics&sprefix=oneplus+7+pro%2Celectronics%2C414&sr=1-1",
    Flipkart:
      "https://www.flipkart.com/oneplus-7-pro-mirror-grey-128-gb/p/itmbdc9c2e788399?pid=MOBFJJW3NSR3KQS4&lid=LSTMOBFJJW3NSR3KQS4V1DGV7&marketplace=FLIPKART&q=OnePlus+7+Pro+Mirror+Grey&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=b84b60fe-08ed-41a6-ace1-7212e78688ea.MOBFJJW3NSR3KQS4.SEARCH&ppt=sp&ppn=sp&ssid=da0ssjmny80000001675859388605&qH=884f2be034160e34",
    Image: "https://m.media-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg",
  },
  {
    Name: "Oneplus 7T Pro",
    Memory: "8 GB RAM | 256 GB ROM",
    Display: "16.94 cm (6.67 inch) Quad HD+ Display",
    Camera: "48MP +8MP+16MP | 16MP Dual Front Camera",
    Battery: "4085 mAh Battery",
    Processor:
      "Qualcomm® Snapdragon™ 855 Plus (Octa-core, 7nm, up to 2.96 GHz) , with Qualcomm AI Engine Processor",
    Amazon:
      "https://www.amazon.in/s?k=Oneplus+7T+Pro&i=electronics&crid=CQQYN4EOWXM2&sprefix=oneplus+7t+pro%2Celectronics%2C294&ref=nb_sb_noss_1",
    Flipkart:
      "https://www.flipkart.com/oneplus-7t-pro-haze-blue-256-gb/p/itm0ce470755470d?pid=MOBFHC8GY8XRXJPF&lid=LSTMOBFHC8GY8XRXJPFKRBWFF&marketplace=FLIPKART&q=Oneplus+7T+Pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=908bce43-3bb1-42eb-9d9c-9ca41741b5c5.MOBFHC8GY8XRXJPF.SEARCH&ppt=sp&ppn=sp&ssid=k4m7rlpoq80000001675859545544&qH=f3a68fa90ad6e89b",
    Image: "https://m.media-amazon.com/images/I/61Y3ukOlqSL._SX679_.jpg",
  },
  {
    Name: "OnePlus Nord 2T 5G",
    Memory: "12 GB RAM | 256 GB ROM",
    Display: "17.02 cm (6.7 inch) Display",
    Camera: "50MP Rear Camera",
    Battery: "4500 mAh Battery",
    Processor:
      "Qualcomm® Snapdragon™ 855 Plus (Octa-core, 7nm, up to 2.96 GHz) , with Qualcomm AI Engine Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-Nord-128GB-Storage/dp/B0B9FBKC5W/ref=sr_1_21?crid=2TJY2JDRKN481&keywords=Oneplus+Nord+N10+5G&qid=1675859688&s=electronics&sprefix=oneplus+nord+n10+5g%2Celectronics%2C339&sr=1-21",
    Flipkart:
      "https://www.flipkart.com/oneplus-nord-2t-5g-jade-fog-256-gb/p/itm97eda8b1a1566?pid=MOBGHBZHF4YCMGZY&lid=LSTMOBGHBZHF4YCMGZYFNFMJN&marketplace=FLIPKART&q=OnePlus+Nord+2T+5G&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=942f1890-4242-492f-a166-2d0332cec81b.MOBGHBZHF4YCMGZY.SEARCH&ppt=sp&ppn=sp&ssid=fiti8td6g00000001675859748084&qH=1bdc213e63fbeefe",
    Image: "https://m.media-amazon.com/images/I/61ahn9N38zL._SL1500_.jpg",
  },
  {
    Name: "OnePlus Nord N20 SE",
    Memory: "6 GB RAM | 128 GB ROM",
    Display: "16.74 cm (6.59 inch) Display",
    Camera: "64MP Rear Camera",
    Battery: "5000 mAh Battery",
    Processor:
      "Qualcomm® Snapdragon™ 855 Plus (Octa-core, 7nm, up to 2.96 GHz) , with Qualcomm AI Engine Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-Celestial-Black-Storage/dp/B0BJ6R5FRD/ref=sr_1_20?crid=2TJY2JDRKN481&keywords=Oneplus+Nord+N10+5G&qid=1675859688&s=electronics&sprefix=oneplus+nord+n10+5g%2Celectronics%2C339&sr=1-20",
    Flipkart:
      "https://www.flipkart.com/oneplus-nord-ce-2-lite-5g-black-dusk-128-gb/p/itm7acae55b999e6?pid=MOBGMFRE7MMCSFPA&lid=LSTMOBGMFRE7MMCSFPAHLTR1C&marketplace=FLIPKART&q=OnePlus+Nord+N20+SE&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=98258475-9423-48f3-ad1d-79c0a5a195a9.MOBGMFRE7MMCSFPA.SEARCH&ppt=sp&ppn=sp&ssid=wg2osqjm280000001675859789738&qH=88e421b1f54122ee",
    Image: "https://m.media-amazon.com/images/I/51Ca7EeyETL._SX679_.jpg",
  },
  {
    Name: "OnePlus 8T 5G Lunar Silver",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.64 cm (6.55 inch) Display",
    Camera: "48MP Rear Camera",
    Battery: "4500 mAh Battery",
    Processor:
      "Qualcomm® Snapdragon™ 855 Plus (Octa-core, 7nm, up to 2.96 GHz) , with Qualcomm AI Engine Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-8T-5G-Storage/dp/B0BS8ZQ6RV/ref=sr_1_2?crid=2YZSCD2RHIGQL&keywords=Oneplus+8T&qid=1675860344&s=electronics&sprefix=oneplus+8t%2Celectronics%2C318&sr=1-2",
    Flipkart:
      "https://www.flipkart.com/oneplus-8t-5g-lunar-silver-128-gb/p/itm1d675115d63ea?pid=MOBGDMFPHXPQXYPB&lid=LSTMOBGDMFPHXPQXYPB3R0ERL&marketplace=FLIPKART&q=Oneplus+8T&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=49bc9ea0-e06f-4c13-a501-b7e6c6aae534.MOBGDMFPHXPQXYPB.SEARCH&ppt=sp&ppn=sp&ssid=ulpjbn09uo0000001675860350104&qH=cf828980d0558525",
    Image: "https://m.media-amazon.com/images/I/61CTIAJBHDL._SL1500_.jpg",
  },
  {
    Name: "OnePlus 8T 5G",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.64 cm (6.55 inch) Display",
    Camera: "48MP Rear Camera",
    Battery: "4500 mAh Battery",
    Processor:
      "Qualcomm® Snapdragon™ 855 Plus (Octa-core, 7nm, up to 2.96 GHz) , with Qualcomm AI Engine Processor",
    Amazon:
      "https://www.amazon.in/Renewed-OnePlus-8T-5G-Aquamarine/dp/B0BS8YP359/ref=sr_1_9?crid=18KZGSHN2UA3&keywords=Oneplus+8+Pro&qid=1675860561&s=electronics&sprefix=oneplus+8+pro%2Celectronics%2C276&sr=1-9",
    Flipkart:
      "https://www.flipkart.com/oneplus-8t-5g-aquamarine-green-128-gb/p/itm1d675115d63ea?pid=MOBGDM23SQXYDRNA&lid=LSTMOBGDM23SQXYDRNAKKIBDC&marketplace=FLIPKART&q=OnePlus+8T+5G&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=47e7a1ca-d4a8-4bd0-aca1-4228b8b082cd.MOBGDM23SQXYDRNA.SEARCH&ppt=sp&ppn=sp&ssid=yrdyyrgbrk0000001675860668190&qH=e9f09d3ddac9d73c",
    Image: "https://m.media-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",
  },
  {
    Name: "Vivo V23 Pro 5G",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.66 cm (6.56 inch) Full HD+ Display",
    Camera: "108MP + 8MP + 2MP | 50MP + 8MP Dual Front Camera",
    Battery: "4300 mAh Lithium Battery",
    Processor: "Mediatek Dimensity 1200 Processor",
    Amazon:
      "https://www.amazon.in/Vivo-Sunshine-Gold-128GB-Storage/dp/B09DK5WZYM/ref=sr_1_19?crid=7S8LRH6CJNUW&keywords=Vivo+X60+Pro%2B&qid=1675861813&s=electronics&sprefix=vivo+x60+pro%2B%2Celectronics%2C509&sr=1-19",
    Flipkart:
      "https://www.flipkart.com/vivo-v23-pro-5g-sunshine-gold-128-gb/p/itmf5550a0e86c82?pid=MOBGA25PGEV4JU9K&lid=LSTMOBGA25PGEV4JU9KVL9U1H&marketplace=FLIPKART&q=Vivo+V23+Pro+5G&store=tyy%2F4io&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=a487e83e-d08e-4eec-9dcc-0600ff66304b.MOBGA25PGEV4JU9K.SEARCH&ppt=sp&ppn=sp&ssid=v3c3jae6u80000001675861870790&qH=b04b9a10c824d911",
    Image: "https://m.media-amazon.com/images/I/31rx3zPdZ1L.jpg",
  },
  {
    Name: "Vivo X60",
    Memory: "8 GB RAM | 128 GB ROM",
    Display: "16.66 cm (6.56 inch) Full HD+ Display",
    Camera: "48MP + 13MP + 13MP | 32MP Front Camera",
    Battery: "4300 mAh Lithium-ion Battery",
    Processor: "Qualcomm Snapdragon 870 Processor",
    Amazon:
      "https://www.amazon.in/Vivo-X60-8GB-RAM-128GB/dp/B08VB74J7R/ref=sr_1_20?crid=3ATQ44J8CW0LM&keywords=Vivo%2BX60%2BPro&qid=1675862065&s=electronics&sprefix=vivo%2Bx60%2Bpro%2Celectronics%2C459&sr=1-20&th=1",
    Flipkart:
      "https://www.flipkart.com/vivo-x60-shimmer-blue-128-gb/p/itm631a875250350?pid=MOBGF89FZUGHXDZE&lid=LSTMOBGF89FZUGHXDZE3PFHJK&marketplace=FLIPKART&q=Vivo+X60&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=560f08b8-ad03-4ac4-99f1-687a3a262296.MOBGF89FZUGHXDZE.SEARCH&ppt=sp&ppn=sp&ssid=3ujbv9iwo00000001675862095110&qH=e1bbbd092049ac03",
    Image: "https://m.media-amazon.com/images/I/71EshsD+G7L._SL1200_.jpg",
  },
];
