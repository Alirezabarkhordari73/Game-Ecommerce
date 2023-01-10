import shortid from "shortid";

const products = [
  {
    _id: shortid.generate(),
    image: "./images/game1.jpg",
    title: "Fifa 22",
    description:
      "بازی FIFA 22 سعی دارد تا شبیه‌ساز ورزش دوست‌داشتنی فوتبال را هرچه بیشتر به واقعیت نزدیک کند. بهبودهای بسیار زیادی در گیم‌پلی بازی انجام گرفته و عصر جدیدی از تحولات در هر بخش فرنچایز فیفا لحاظ شده است. بیش از ۱۷هزار ورزشکار، ۷۰۰تیم و بیش از ۹۰ استادیوم متنوع با ۳۰لیگ فوتبالی در بازی فیفا ۲۲ لحاظ شده‌اند. رویاهای خود را در نقش یک بازیکن یا مربی می‌توانید در فیفا ۲۲ دنبال کنید. جدیدترین تیم باشگاهی را در فیفا بسازید، کیت‌های خود را طراحی کنید، استادیوم خود را شخصی‌سازی کرده و روش حضور خود را در مسابقات انتخاب نمایید. حضور شما به صورت یک پیشتاز موفق (elite) یا یک مربی ساده که از لیگ‌های دسته پایین‌تر شروع خواهد کرد می‌باشد. در حالت Career Mode حتی می‌توانید یک فوتبالیست بوده و پیشرفت کنید تا بتوانید به یک ورزشکار حرفه‌ای تبدیل شوید.",
    category: ["Xbox-360", "PC", "PS4"],
    price: 167000,
    rating: 4,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
  {
    _id: shortid.generate(),
    image: "./images/game2.jpg",
    title: "Red Dead Redemtion 2",
    description:
      "کمتر کسی است که نام Rockstar Games را نشنیده باشد و آثار معروف و قوی این کمپانی قدرتمند را نشناسد. این سازنده‌ی خلاق، جایزه‌ی بهترین بازی سال را از مراسم مختلفی برای بازی‌های مختلف خود دریافت کرده است. یکی از مشهورترین سری بازی‌های Rockstar، سری Red Dead است که نسخه‌ی دوم آن، Read Dead Redemption در سال 2010 به عنوان بهترین بازی سال انتخاب شد. این بازی جزو لیست پرفروش‌ترین بازی‌های نسل هفتم نیز قرار گرفت و تبدیل به یکی از موفق‌ترین ساخته‌های Rockstar شد. بعد از یک انتظار طولانی 8 ساله، نسخه‌ی بعدی این بازی با نام Read Dead Redemption 2 روانه‌ی بازار شده است که می‌توان این بازی را به جرئت یکی از بهترین بازی‌های نسل هشتم دانست. این بازی یک دنیای آزاد در زمان وسترن و غرب وحشی را در اختیار بازیکنان قرار می‌دهد و با گیم‌پلی یکتا و بی‌مانند خود، بازیکنان بی‌شماری را به خود جذب کرده است. Read Dead Redemption 2 در سبک اکشن-ماجرایی است و در دو دوربین سوم‌ شخص و اول شخص، قابل تجربه است.",
    category: ["Xbox-360", "PC", "PS4"],
    price: 315000,
    rating: 3,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
  {
    _id: shortid.generate(),
    image: "/images/game3.jpg",
    title: "Forza Horizon 5",
    description:
      "شاید رانندگی با اتومبیل‌های سوپراسپرت آرزوی بسیاری از انسان‌ها باشد. این شاهکارهای علم مهندسی امروزه به‌قدری پیشرفته و مدرن شده‌اند که هر فردی را به نحوی به سمت خود جذب خواهند کرد؛ اما در دنیای واقعی، همه پول و فرصت لازم برای دسترسی به این اتومبیل‌ها را نخواهند داشت و حتی اگر هم داشته باشند، ریسک رانندگی با سرعت بالا و ویراژ دادن با آن‌ها بسیار بالا است. خوشبختانه صنعت بازی‌های ویدیویی، ناجی ما برای این امر بوده و با خلق دنیاهای مجازی، این امکان را می‌دهند که بدون کوچک‌ترین خطر یا ریسکی، تجربیات این‌چنینی را برای خود رقم بزنیم. یکی از بازی های مسابقه ای سری Forza Horizon از استودیو Playground Games بوده که به‌تازگی با معرفی بازی Forza Horizon 5 ورودش به نسل جدید بازی‌های ویدیویی را اعلام کرده است. سازندگان برای این عنوان سنگ تمام گذاشته تا یکی از واقع‌گرایانه‌ترین و مهیج‌ترین عناوین سری Forza را در اختیار طرفداران قرار دهند.",
    category: ["PC", "PS4"],
    price: 210000,
    rating: 5,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
  {
    _id: shortid.generate(),
    image: "/images/game4.jpg",
    title: "Hitman III",
    description:
      "هیتمن، نامی آشنا برای آن دسته از بازیکنانی است که علاقه‌مند به ژانر اکشن و بازی‌های ماجراجویی هستند. مجموعه فوق‌العاده Hitman طی 20 سال گذشته از یک شاهکار مخفی‌کاری سرگرم‌کننده به یک ماجراجویی اکشن تبدیل شده که به‌صورت اپیزودیک در دسترس علاقه‌مندانش قرار گرفته است. همین تازگی‌ها بود که استودیوی IO Interactive طی معرفی پیش‌نمایشی از نسخه سوم، این موضوع را بیان کرد که این آخرین اپیزود و نسخه از سری هیتمن بوده و به‌نوعی مأمور 47 برای مدتی نیاز به استراحت دارد؛ بنابراین پس از آخرین بازی آن‌ها، نباید دیگر چشم‌انتظار بود. Hitman 3 به‌عنوان آخرین نسخه از سه‌گانه‌ای محبوب و پرطرف‌دار سعی کرده تا مشکلات و عیوب موجود در نسخه‌های قبلی را پوشش داده و به‌نوعی پایانی خاطره‌انگیز را برای طرفدارانش در ذهن و خاطره‌ها باقی بگذارد؛ مانند همیشه و دیگر نسخه‌هایی که معرفی شد، توسعه‌دهندگانی از استودیو IO Interactive آخرین بازی را طراحی و منتشر کرده‌اند که لازم به ذکر است ویژگی‌های جدید بسیاری در گیم پلی بازی Hitman 3 به‌کاررفته که قطعاً می‌تواند باعث جذابیت دو برابری داستان شود.",
    category: ["Xbox-360", "PC", "PS4"],
    price: 110000,
    rating: 2,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
  {
    _id: shortid.generate(),
    image: "/images/game5.jpg",
    title: "Gran Theft Auto V",
    description:
      "بازی‌های ویدیویی برای این ساخته می‌شوند که ما را از قوانین محدودکننده دنیای واقعی دور کنند و تجربه یک دنیای مجازی بی‌حدومرز را در اختیارمان قرار دهند. اگر بخواهیم پادشاه چنین بازی‌هایی را معرفی کنیم، قطعاً باید به سری GTA ساخته‌شده توسط استودیو خوش‌ذوق و ماهر Rockstar اشاره کنیم که تا به امروز شماره‌های زیادی از آن منتشر شده است. هیچ عنوانی به‌اندازه GTA به بازیکن آزادی عمل نداده و به همین دلیل آن را باید پادشاه عناوین جهان‌باز دانست. بازی GTA V یا جی تی ای وی آخرین شماره منتشرشده توسط استودیو Rockstar است که بعد از گذشت سال‌ها از انتشارش همچنان هم یکی از محبوب‌ترین بازی‌های بازار محسوب شده و کامل‌ترین نسخه در سری بازی GTA است.",
    category: ["Xbox-360", "PC"],
    price: 150000,
    rating: 4,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
  {
    _id: shortid.generate(),
    image: "/images/game6.jpg",
    title: "Assassin S Creed Valhalla",
    description:
      "داستان بازی پس از اتفاقات بسته الحاقی The Fate of Atlantis بازی Assassin’s Creed: Odyssey روایت می‌شود. جایی که لیلا حسن Staff of Eden یا همان عصای باستانی را در اختیار گرفته است. یوبیسافت برای داستان‌سرایی والهالا به‌سراغ یک داستان وایکینگی و اساطیری رفته و بازی با یک میان پرده از یک جشن آغاز می‌شود. گروهی از وایکینگ‌ها در حال جشن گرفتن هستند و شما در نقش کودکی ایوور، قهرمان داستان، مشغول تجربه‌ی بازی می‌شوید.",
    category: ["Xbox-360", "PC", "PS4"],
    price: 228000,
    rating: 3,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
  {
    _id: shortid.generate(),
    image: "/images/game8.jpg",
    title: "Call-Of-Duty-Black-Ops-III",
    description:
      "وقایعِ بازی Black Ops 3 چهل سال بعد از BO2 اتفاق می‌افتد و در این بین شما شاهد این هستید که روبات‌های کوچکِ نسخه‌ی قبلی، تبدیل به چه هیولاهایی شده‌اند! گیم‌پلی بازی به لطف سیستم پریدن‌های AW بی‌شباهت به عناوین تخیلی همانند Crysis نیست و البته بسیار سریع‌تر هم شده است. در طول نمایش‌های بازی شاهد چیزهایی هستید که در نسخه‌های قبلی هم بودند اما در اینجا به شکل متفاوت‌تری گنجانده شده‌اند. همانند مبارزه در زیر آب که مشابه آن در CoD: Ghosts هم وجود داشت و در اینجا هم شما باید به دشمنانی که در مسیرتان در آب قرار می‌گیرند، تیراندازی کنید!",
    category: ["Xbox-360", "PC", "PS4"],
    price: 450000,
    rating: 3,
  },
  {
    _id: shortid.generate(),
    image: "/images/game9.jpg",
    title: "WWE-2K-20",
    description:
      "بازی کشتی کج برای اسمارت فونهای اندرویدی می باشد که توسط 2K Games عرضه شده است. بازی که در ان شاهد مسابقاتی بسیار هیجان انگیز و جالب خواهید بود. تمامی شخصیت های معروف کشتی کج از سال 2014 تا کنون در این بازی گرد هم آمده اند تا بهترین بازی کشتی کج اندرویدی را تجربه کنید! در ای نبازی تمامی شخصیت های معروف به صورت کاملا واقعی و بدون هیچ کم و کاستی طراحی شده اند و شما در ان در نقش شخصیت های معروف به انجام مسابقات مهیج کشتی کج می پردازید! با دارک روید همراه باشید .. ",
    category: ["Xbox-360", "PS4"],
    price: 23000,
    rating: 2,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
  },
  {
    _id: shortid.generate(),
    image: "/images/game10.jpg",
    title: "Battle-Field-4",
    description:
      "در تمامی بازی‌های “میدان جنگ” چندین ویژگی وجود دارد که همیشه برای همه هیجان انگیز است. منفجر کردن یک نفربر، تخریب یک ساختمان و یا خلبانی یک هلیکوپتر جنگی که برای نود درصد از بازیکنان قدیمی این سری بازی لذت بخش بود. این بار نیز بهتر از همیشه و حتی با ویژگی‌های بیشتری برگشته است تا هم دل طرفداران قبلی را بدست آورد و هم طرفداران جدیدی را جذب این فرانچایز کند. این بار ما شاهد بسیاری از این لحظات لذت بخش خواهیم بود که حس حضور در جنگ واقعی را به مخاطب القا می‌کند.",
    category: ["Xbox-360", "PC", "PS4"],
    price: 195000,
    rating: 5,
    requierdsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    sugestedsystem: {
      OS: "Windows-10",
      "Processor(AMD)": "FX-6350 or Equivalent",
      "Processor(Intel)": "Core i5-3570 or Equivalent",
      Memory: "8-GB",
      "Graphicscard(AMD)": "Radeon 7970/Radeon R9 280x or Equivalent",
      "Graphicscard(NVIDIA)": "GeForce GTX 760 or Equivalent",
      DirectX: "11 Compatible video card or equivalent",
      Harddrivespace: "50-GB",
    },
    countInStock: 5,
  },
];

export default products;