// ============================================================
//  IBOGAINE ISRAEL FOUNDATION — MAIN JS
// ============================================================

// ---- Language Data ---- //
const LANG = {
  en: {
    dir: 'ltr',
    navHome: 'Home',
    navAbout: 'About',
    navIbogaine: 'Ibogaine',
    navResearch: 'Research',
    navIsrael: 'Israel',
    navFounders: 'Founders',
    navBlog: 'Blog',
    navContact: 'Contact',
    langToggle: 'עברית',

    heroLabel: 'The Ibogaine Foundation — Israel',
    heroH1: 'Healing Trauma, Restoring Hope',
    heroSub: 'Championing ibogaine-assisted therapy as a breakthrough treatment for PTSD, traumatic brain injury, and addiction — when Israel needs it most.',
    heroCta1: 'Learn More',
    heroCta2: 'Get Involved',
    heroBadgeNum: '85,000+',
    heroBadgeText: 'Israelis currently receiving treatment for war-related psychological trauma',

    statLabel1: 'Reduction in PTSD symptoms after ibogaine treatment (Stanford, 2024)',
    statNum1: '88%',
    statLabel2: 'IDF soldiers treated for PTSD since Oct. 7, 2023',
    statNum2: '85,000+',
    statLabel3: 'Founders dedicated to change',
    statNum3: '3',
    statLabel4: 'Years of ibogaine advocacy in Israel',
    statNum4: '35+',

    aboutLabel: 'Who We Are',
    aboutH2: 'The Ibogaine Foundation of Israel',
    aboutP1: 'We are a non-profit foundation dedicated to the research, advocacy, and responsible clinical use of ibogaine as a therapeutic intervention for post-traumatic stress disorder, traumatic brain injury, addiction, and neurodegenerative diseases in Israel and the wider Middle East.',
    aboutP2: 'Founded by a group of visionary clinicians, researchers, and advocates, our mission is to bring the transformative healing power of ibogaine to the people who need it most — especially the tens of thousands of soldiers, survivors, and civilians whose lives have been shattered by war and trauma.',
    aboutQuote: '"More than half a million Israelis are at high risk of developing post-trauma following October 7. Ibogaine and psychedelics must be made available to help these trauma victims." — Boaz Wachtel, Founder',
    aboutBadge1: 'Non-Profit Organization',
    aboutBadge2: 'Clinical Research',
    aboutBadge3: 'Bilingual Support',
    aboutBadge4: 'Evidence-Based',
    aboutNum: '35+ Years',
    aboutNumLabel: 'Combined ibogaine experience',

    iboLabel: 'What is Ibogaine',
    iboH2: 'A Sacred Medicine, A Modern Miracle',
    iboIntro: 'Ibogaine is a naturally occurring psychoactive alkaloid found in the root bark of the <em>Tabernanthe iboga</em> plant, native to the rainforests of Central Africa. Used for millennia by the Bwiti people of Gabon in spiritual initiation rites, ibogaine is now at the forefront of psychedelic medicine.',
    iboCard1Icon: '🧠',
    iboCard1Title: 'PTSD & Trauma',
    iboCard1Text: 'A single ibogaine treatment reduced PTSD symptoms by an average of 88% in Stanford\'s landmark 2024 study of special operations veterans.',
    iboCard2Icon: '🩻',
    iboCard2Title: 'Traumatic Brain Injury',
    iboCard2Text: 'Published in Nature Medicine, research shows ibogaine dramatically reduces disability scores in veterans with TBI — from "moderate disability" to "no disability" in one month.',
    iboCard3Icon: '🚶',
    iboCard3Title: "Parkinson's Disease",
    iboCard3Text: 'Ibogaine stimulates GDNF, a neurotrophic factor that supports dopamine-producing neurons, showing a 62% average motor improvement in patient cohort studies.',
    iboCard4Icon: '🧬',
    iboCard4Title: 'Addiction Recovery',
    iboCard4Text: 'Howard Lotsof\'s pioneering discovery: a single ibogaine session can interrupt opioid addiction and dramatically reduce withdrawal symptoms and cravings.',
    iboCard5Icon: '💛',
    iboCard5Title: 'Depression & Anxiety',
    iboCard5Text: 'Stanford\'s 2024 study showed 87% reduction in depression and 81% reduction in anxiety one month post-treatment — results unmatched by any conventional therapy.',
    iboCard6Icon: '🌿',
    iboCard6Title: 'Neuroplasticity',
    iboCard6Text: 'Ibogaine promotes theta rhythms and reduces cortical hyperactivity — resetting the brain\'s stress-response system and enabling deep cognitive and emotional healing.',

    resLabel: 'The Science',
    resH2: 'Breakthrough Research',
    resHighlightTitle: 'The Stanford Study — Nature Medicine, 2024',
    resHighlightText: 'In a landmark peer-reviewed study published in Nature Medicine, Stanford University researchers found that ibogaine combined with magnesium safely and dramatically reduced PTSD, depression, and anxiety — and virtually eliminated disability — in 30 special operations veterans with traumatic brain injury.',
    resStat1Num: '88%', resStat1Label: 'Reduction in PTSD symptoms',
    resStat2Num: '87%', resStat2Label: 'Reduction in depression',
    resStat3Num: '5.1',  resStat3Label: 'Post-treatment disability score (from 30.2)',
    resTimeline: 'Timeline of Ibogaine Research',

    israelLabel: 'The Crisis',
    israelH2: "Israel's Urgent Mental Health Emergency",
    israelIntro: 'The October 7, 2023 terror attacks and subsequent war have created an unprecedented mental health catastrophe. Israel\'s mental health system — already strained — is overwhelmed, and conventional treatments are failing tens of thousands who need help today.',
    israelCard1Num: '85,000+',
    israelCard1Label: 'IDF soldiers treated for psychological disorders since Oct. 7',
    israelCard2Num: '60%',
    israelCard2Label: 'Of wounded soldiers in rehab centers suffering from PTSD',
    israelCard3Num: '1 in 3',
    israelCard3Label: 'Israelis showing PTSD symptoms',
    israelCard4Num: '180%',
    israelCard4Label: 'Projected increase in PTSD cases by 2028',
    israelCard5Num: '1:850',
    israelCard5Label: 'Caseworker-to-veteran ratio — a critical shortage',
    israelCard6Num: '21',
    israelCard6Label: 'IDF soldier suicides in 2024 — the highest in a decade',
    israelP: 'Conventional therapies alone cannot meet this scale of need. Ibogaine offers a rapid, profound, and evidence-backed intervention that could transform outcomes for thousands of soldiers, first responders, survivors of October 7, and their families. The time to act is now.',

    foundersLabel: 'Our Team',
    foundersH2: 'The Founders',
    founder1Name: 'Boaz Wachtel',
    founder1Role: 'Co-Founder & Executive Chairman',
    founder1Bio: 'A certified clinical research manager and MA graduate of the University of Maryland, Boaz has been an ibogaine treatment provider since 1989. He co-authored the Manual for Ibogaine Therapy with Howard Lotsof, treated over 100 patients across the Netherlands, Panama, and Israel, and co-founded the Global Ibogaine Treatment Alliance. A pioneer of Israel\'s national medical cannabis program, Boaz has spent over three decades advocating for evidence-based psychedelic medicine in Israel and globally.',
    founder2Name: 'Arik Metzer',
    founder2Role: 'Co-Founder & Director of Research',
    founder2Bio: 'A strategic leader with deep expertise in health sciences and biomedical innovation, Arik brings essential organizational and research leadership to the foundation. His background in life sciences, combined with a personal commitment to mental health reform in Israel, drives the foundation\'s scientific agenda and clinical partnerships.',
    founder3Name: 'Jilly Rubenstein',
    founder3Role: 'Co-Founder & Director of Community Outreach',
    founder3Bio: 'Jilly is a dedicated advocate for psychedelic-assisted therapies and mental health access in Israel. With extensive experience in community health education and outreach, she connects the foundation\'s mission to the families, soldiers, and survivors most in need. Her compassionate leadership ensures that the human story remains at the heart of everything the foundation does.',

    blogLabel: 'Latest',
    blogH2: 'Articles & Insights',
    post1Tag: 'Research',
    post1Title: "Stanford's Landmark Study: Ibogaine Reduces PTSD by 88% in Veterans",
    post1Excerpt: "A peer-reviewed study published in Nature Medicine confirms ibogaine's extraordinary efficacy for traumatic brain injury and PTSD. Here's what it means for Israel.",
    post2Tag: 'History',
    post2Title: 'From Gabon to the Clinic: The Remarkable History of Ibogaine',
    post2Excerpt: "The iboga plant has been sacred to Bwiti communities for centuries. We trace the journey from Central African rainforests to modern psychiatric clinics.",
    post3Tag: 'Israel',
    post3Title: "October 7 and After: Israel's Mental Health Crisis Demands Bold Solutions",
    post3Excerpt: "With 85,000 soldiers receiving psychological treatment and therapist shortages reaching crisis levels, conventional approaches are falling short.",
    post4Tag: "Parkinson's",
    post4Title: "Can Ibogaine Help Parkinson's Patients? Early Evidence Is Promising",
    post4Excerpt: "Ibogaine's ability to stimulate GDNF — a key neurotrophic factor for dopamine neurons — is opening new possibilities for neurodegenerative disease treatment.",
    post5Tag: 'Advocacy',
    post5Title: "Israel Needs Ibogaine: The Case for Fast-Tracking Regulatory Approval",
    post5Excerpt: "As Texas allocates $50 million for ibogaine clinical trials, Israel must move swiftly to ensure its trauma survivors have access to the world's most promising new therapy.",
    post6Tag: 'Recovery',
    post6Title: "Howard Lotsof's Gift: The Discovery That Changed Everything",
    post6Excerpt: "In 1962, a 19-year-old heroin addict named Howard Lotsof took ibogaine and woke up free. His life's work created the global ibogaine treatment movement.",
    readMore: 'Read More →',

    videosLabel: 'Watch & Learn',
    videosH2: 'Ibogaine in the Media',
    video1Label: 'Ibogaine & PTSD: The Stanford Study Explained',
    video2Label: 'Veterans Speak: Life After Ibogaine Treatment',
    video3Label: 'The History of Ibogaine — From Africa to the World',

    contactLabel: 'Reach Out',
    contactH2: 'Contact the Foundation',
    contactP: 'Whether you are a patient seeking information, a researcher interested in collaboration, a journalist, or someone who simply wants to get involved — we want to hear from you.',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone (optional)',
    formSubject: 'Subject',
    formSubjectOpt1: 'I am a patient / family member seeking help',
    formSubjectOpt2: 'Research collaboration inquiry',
    formSubjectOpt3: 'Media / Press inquiry',
    formSubjectOpt4: 'Donation / Sponsorship',
    formSubjectOpt5: 'Volunteer',
    formSubjectOpt6: 'Other',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formSuccess: '✓ Thank you! We will be in touch soon.',
    contactEmail: 'info@ibogainefoundation.org.il',
    contactCity: 'Tel Aviv, Israel',

    footerDesc: 'The Ibogaine Foundation of Israel is a non-profit organization dedicated to advancing ibogaine-assisted therapy for PTSD, TBI, addiction, and neurological conditions. We advocate for evidence-based policy, clinical access, and public education.',
    footerLinks: 'Quick Links',
    footerResources: 'Resources',
    footerLegal: 'Legal',
    footerCopy: '© 2025 Ibogaine Foundation of Israel. All rights reserved.',
    disclaimer: '⚠️ This website is for educational and informational purposes only. Ibogaine is a controlled substance in many countries. Nothing here constitutes medical advice. Always consult a qualified physician.',
  },

  he: {
    dir: 'rtl',
    navHome: 'בית',
    navAbout: 'אודות',
    navIbogaine: 'איבוגאין',
    navResearch: 'מחקר',
    navIsrael: 'ישראל',
    navFounders: 'מייסדים',
    navBlog: 'בלוג',
    navContact: 'צור קשר',
    langToggle: 'English',

    heroLabel: 'קרן האיבוגאין — ישראל',
    heroH1: 'ריפוי טראומה, השבת תקווה',
    heroSub: 'אנו מובילים את השימוש בטיפול בסיוע איבוגאין כפריצת דרך לטיפול בפוסט טראומה, פציעות ראש טראומטיות והתמכרות — בשעה שישראל זקוקה לכך ביותר.',
    heroCta1: 'קרא עוד',
    heroCta2: 'הצטרף אלינו',
    heroBadgeNum: '85,000+',
    heroBadgeText: 'ישראלים המטופלים כיום על טראומה נפשית הקשורה למלחמה',

    statLabel1: 'ירידה בתסמיני PTSD לאחר טיפול באיבוגאין (סטנפורד, 2024)',
    statNum1: '88%',
    statLabel2: 'חיילי צה"ל שטופלו על PTSD מאז 7.10.23',
    statNum2: '85,000+',
    statLabel3: 'מייסדים שלחמו לשינוי',
    statNum3: '3',
    statLabel4: 'שנות עידוד איבוגאין בישראל',
    statNum4: '35+',

    aboutLabel: 'מי אנחנו',
    aboutH2: 'קרן האיבוגאין של ישראל',
    aboutP1: 'אנו ארגון ללא מטרות רווח המוקדש למחקר, עידוד ושימוש קליני אחראי באיבוגאין כהתערבות טיפולית לטיפול בהפרעת דחק פוסט-טראומטית (PTSD), פציעת ראש טראומטית, התמכרות ומחלות ניווניות של מערכת העצבים בישראל ובמרחב המזרח-תיכוני.',
    aboutP2: 'הקרן נוסדה על ידי קבוצת קלינאים, חוקרים ופעילים חזוניים, שמשימתה היא להביא את כוח הריפוי של האיבוגאין לאנשים שזקוקים לו ביותר — ובמיוחד לעשרות אלפי חיילים, ניצולים ואזרחים ששברו חייהם עקב המלחמה והטראומה.',
    aboutQuote: '"יותר ממחצית מיליון ישראלים נמצאים בסיכון גבוה לפתח פוסט-טראומה בעקבות ה-7 באוקטובר. יש להנגיש את האיבוגאין ותרופות פסיכדליות כדי לסייע לקורבנות הטראומה הללו." — בועז וכטל, מייסד',
    aboutBadge1: 'ארגון ללא מטרות רווח',
    aboutBadge2: 'מחקר קליני',
    aboutBadge3: 'תמיכה דו-לשונית',
    aboutBadge4: 'מבוסס ראיות',
    aboutNum: '35+ שנה',
    aboutNumLabel: 'ניסיון משולב באיבוגאין',

    iboLabel: 'מה זה איבוגאין',
    iboH2: 'רפואה עתיקה, ניס מודרני',
    iboIntro: 'איבוגאין הוא אלקלואיד פסיכואקטיבי המצוי בקליפת שורש צמח <em>Tabernanthe iboga</em>, הגדל ביערות הגשם של מרכז אפריקה. הנוצרים של עם הבוויטי בגבון השתמשו בו במשך אלפי שנים בטקסי חניכה רוחניים. כיום הוא בחזית הרפואה הפסיכדלית.',
    iboCard1Icon: '🧠',
    iboCard1Title: 'PTSD וטראומה',
    iboCard1Text: 'טיפול יחיד באיבוגאין הפחית את תסמיני ה-PTSD ב-88% בממוצע במחקר סטנפורד המכונן של 2024 על ותיקים ממבצעים מיוחדים.',
    iboCard2Icon: '🩻',
    iboCard2Title: 'פגיעת ראש טראומטית',
    iboCard2Text: 'פורסם ב-Nature Medicine: מחקרים מראים שאיבוגאין מפחית דרמטית ציוני נכות בוותיקים עם TBI — מ"נכות בינונית" ל"ללא נכות" תוך חודש.',
    iboCard3Icon: '🚶',
    iboCard3Title: 'מחלת פרקינסון',
    iboCard3Text: 'איבוגאין ממריץ GDNF, גורם נוירוטרופי התומך בנוירונים המייצרים דופמין, עם שיפור מוטורי ממוצע של 62% במחקרי קבוצות חולים.',
    iboCard4Icon: '🧬',
    iboCard4Title: 'גמילה מהתמכרות',
    iboCard4Text: 'גילויו החלוצי של הווארד לוצוף: מפגש איבוגאין בודד יכול לנתק התמכרות לאופיאטים ולהפחית דרמטית תסמיני גמילה ותשוקות.',
    iboCard5Icon: '💛',
    iboCard5Title: 'דיכאון וחרדה',
    iboCard5Text: 'מחקר סטנפורד 2024 הראה ירידה של 87% בדיכאון ו-81% בחרדה חודש לאחר הטיפול — תוצאות שאין להן מקבילה בטיפולים קונבנציונליים.',
    iboCard6Icon: '🌿',
    iboCard6Title: 'נוירופלסטיות',
    iboCard6Text: 'איבוגאין מעודד גלי תטא ומפחית היפראקטיביות קורטיקלית — מאפס את מערכת תגובת הלחץ של המוח ומאפשר ריפוי קוגניטיבי ורגשי עמוק.',

    resLabel: 'המדע',
    resH2: 'מחקרים פורצי דרך',
    resHighlightTitle: 'מחקר סטנפורד — Nature Medicine, 2024',
    resHighlightText: 'במחקר עמיתים מכונן שפורסם ב-Nature Medicine, חוקרי אוניברסיטת סטנפורד גילו כי איבוגאין בשילוב מגנזיום הפחית בבטחה ובדרמטיות PTSD, דיכאון וחרדה — וחיסל למעשה נכות — ב-30 ותיקים ממבצעים מיוחדים עם פגיעת ראש טראומטית.',
    resStat1Num: '88%', resStat1Label: 'ירידה בתסמיני PTSD',
    resStat2Num: '87%', resStat2Label: 'ירידה בדיכאון',
    resStat3Num: '5.1',  resStat3Label: 'ציון נכות לאחר טיפול (לעומת 30.2 לפני)',
    resTimeline: 'ציר זמן מחקר האיבוגאין',

    israelLabel: 'המשבר',
    israelH2: 'מצב חירום נפשי דחוף בישראל',
    israelIntro: 'פיגועי הטרור של 7 באוקטובר 2023 והמלחמה שבאה בעקבותיהם יצרו אסון בריאות הנפש חסר תקדים. מערכת בריאות הנפש בישראל — שכבר נאנחת תחת עומס — מוצפת, והטיפולים המסורתיים לא עונים על הצרכים של עשרות אלפים הזקוקים לעזרה.',
    israelCard1Num: '85,000+',
    israelCard1Label: 'חיילי צה"ל שטופלו על הפרעות נפשיות מאז 7.10',
    israelCard2Num: '60%',
    israelCard2Label: 'מחיילים פצועים במרכזי שיקום הסובלים מ-PTSD',
    israelCard3Num: '1 מכל 3',
    israelCard3Label: 'ישראלים המראים סימפטומי PTSD',
    israelCard4Num: '180%',
    israelCard4Label: 'עלייה חזויה במקרי PTSD עד 2028',
    israelCard5Num: '1:850',
    israelCard5Label: 'יחס סוציאל-ותיק — מחסור קריטי',
    israelCard6Num: '21',
    israelCard6Label: 'חיילי צה"ל שהתאבדו ב-2024 — הגבוה ביותר בעשור',
    israelP: 'טיפולים קונבנציונליים לבדם אינם יכולים לעמוד בהיקף הצורך הזה. האיבוגאין מציע התערבות מהירה, עמוקה ומגובה בראיות שיכולה לשנות תוצאות עבור אלפי חיילים, כוחות ראשונים, ניצולי 7 באוקטובר ומשפחותיהם. הזמן לפעול הוא עכשיו.',

    foundersLabel: 'הצוות שלנו',
    foundersH2: 'המייסדים',
    founder1Name: 'בועז וכטל',
    founder1Role: 'מייסד שותף ויו"ר מנכ"ל',
    founder1Bio: 'מנהל מחקר קליני מוסמך ובעל תואר שני בניהול ושיווק מאוניברסיטת מרילנד, בועז הוא מטפל באיבוגאין מ-1989. הוא שותף בכתיבת "מדריך לטיפול באיבוגאין" עם הווארד לוצוף, טיפל ביותר ממאה מטופלים בהולנד, פנמה וישראל, ומייסד שותף של הברית הגלובלית לטיפול באיבוגאין. חלוץ תוכנית הקנאביס הרפואי הלאומי של ישראל, בועז הקדיש יותר משלושה עשורים לעידוד הרפואה הפסיכדלית מבוססת הראיות.',
    founder2Name: 'אריק מצר',
    founder2Role: 'מייסד שותף ומנהל המחקר',
    founder2Bio: 'מנהיג אסטרטגי עם מומחיות עמוקה במדעי הבריאות וחדשנות ביורפואית, אריק מביא מנהיגות ארגונית ומחקרית חיונית לקרן. הרקע שלו במדעי החיים, בשילוב עם מחויבות אישית לרפורמה בבריאות הנפש בישראל, מניע את סדר היום המדעי של הקרן ושותפויות קליניות.',
    founder3Name: "ג'ילי רובינשטיין",
    founder3Role: 'מייסדת שותפה ומנהלת קשרי קהילה',
    founder3Bio: "ג'ילי היא פעילה נחושה למען טיפולים בסיוע פסיכדלים ונגישות לבריאות הנפש בישראל. עם ניסיון נרחב בחינוך בריאותי קהילתי ובפיתוח קשרים, היא מחברת את משימת הקרן למשפחות, לחיילים ולניצולים הזקוקים לה ביותר. מנהיגותה האמפתית מבטיחה שהסיפור האנושי ימשיך לעמוד בלב כל מה שהקרן עושה.",

    blogLabel: 'עדכונים אחרונים',
    blogH2: 'מאמרים ותובנות',
    post1Tag: 'מחקר',
    post1Title: 'מחקר סטנפורד: איבוגאין מפחית PTSD ב-88% בוותיקים',
    post1Excerpt: 'מחקר עמיתים שפורסם ב-Nature Medicine מאשר את היעילות יוצאת הדופן של איבוגאין לפגיעת ראש טראומטית ו-PTSD. מה משמעות הדבר לישראל?',
    post2Tag: 'היסטוריה',
    post2Title: 'מגבון לקליניקה: ההיסטוריה המרתקת של איבוגאין',
    post2Excerpt: 'צמח האיבוגה הוא קדוש לקהילות בוויטי מזה מאות שנים. אנו עוקבים אחר המסע מיערות הגשם של מרכז אפריקה עד לקליניקות הפסיכיאטריות המודרניות.',
    post3Tag: 'ישראל',
    post3Title: '7 באוקטובר ואחריו: משבר בריאות הנפש של ישראל דורש פתרונות נועזים',
    post3Excerpt: '85,000 חיילים מקבלים טיפול פסיכולוגי ומחסור במטפלים מגיע לרמות משבר — הגישות המסורתיות כבר אינן מספיקות.',
    post4Tag: "פרקינסון",
    post4Title: "האם איבוגאין יכול לעזור לחולי פרקינסון? עדויות ראשוניות מבטיחות",
    post4Excerpt: 'יכולתו של איבוגאין לעורר GDNF — גורם נוירוטרופי מרכזי לנוירוני דופמין — פותחת אפשרויות חדשות לטיפול במחלות ניווניות.',
    post5Tag: 'עידוד',
    post5Title: 'ישראל צריכה איבוגאין: הטיעון להאצת אישור רגולטורי',
    post5Excerpt: 'בזמן שטקסס מקצה 50 מיליון דולר למחקרים קליניים של איבוגאין, ישראל חייבת לפעול מהר כדי להבטיח גישה לניצולי הטראומה שלה.',
    post6Tag: 'התאוששות',
    post6Title: 'המתנה של הווארד לוצוף: הגילוי ששינה הכל',
    post6Excerpt: 'ב-1962, נער בן 19 ממכור להרואין בשם הווארד לוצוף לקח איבוגאין והתעורר חופשי. עבודת חייו יצרה את תנועת הטיפול הגלובלית באיבוגאין.',
    readMore: 'קרא עוד →',

    videosLabel: 'צפו ולמדו',
    videosH2: 'איבוגאין בתקשורת',
    video1Label: 'איבוגאין ו-PTSD: מחקר סטנפורד מוסבר',
    video2Label: 'ותיקים מדברים: חיים לאחר טיפול באיבוגאין',
    video3Label: 'ההיסטוריה של האיבוגאין — מאפריקה לעולם',

    contactLabel: 'פנה אלינו',
    contactH2: 'צרו קשר עם הקרן',
    contactP: 'בין אם אתם מטופל המחפש מידע, חוקר המעוניין בשיתוף פעולה, עיתונאי, או מישהו שפשוט רוצה להיות מעורב — אנו רוצים לשמוע מכם.',
    formName: 'שם מלא',
    formEmail: 'כתובת אימייל',
    formPhone: 'טלפון (אופציונלי)',
    formSubject: 'נושא',
    formSubjectOpt1: 'אני מטופל / בן משפחה המחפש עזרה',
    formSubjectOpt2: 'פנייה לשיתוף פעולה מחקרי',
    formSubjectOpt3: 'פנייה תקשורתית / עיתונאית',
    formSubjectOpt4: 'תרומה / חסות',
    formSubjectOpt5: 'מתנדב',
    formSubjectOpt6: 'אחר',
    formMessage: 'הודעה',
    formSubmit: 'שלח הודעה',
    formSuccess: '✓ תודה! ניצור איתך קשר בקרוב.',
    contactEmail: 'info@ibogainefoundation.org.il',
    contactCity: 'תל אביב, ישראל',

    footerDesc: 'קרן האיבוגאין של ישראל היא ארגון ללא מטרות רווח המוקדש לקידום טיפול בסיוע איבוגאין ל-PTSD, TBI, התמכרות ומצבים נוירולוגיים. אנו תומכים במדיניות מבוססת ראיות, גישה קלינית וחינוך ציבורי.',
    footerLinks: 'קישורים מהירים',
    footerResources: 'משאבים',
    footerLegal: 'משפטי',
    footerCopy: '© 2025 קרן האיבוגאין של ישראל. כל הזכויות שמורות.',
    disclaimer: '⚠️ אתר זה מיועד למטרות חינוכיות ומידע בלבד. איבוגאין הוא חומר מבוקר במדינות רבות. אין כאן עצה רפואית. יש להתייעץ תמיד עם רופא מוסמך.',
  }
};

// ---- State ---- //
let currentLang = 'en';

// ---- Render ---- //
function applyLang(lang) {
  const L = LANG[lang];
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', L.dir);
  currentLang = lang;

  // Nav
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (L[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = L[key];
      } else if (key.endsWith('Html')) {
        el.innerHTML = L[key];
      } else {
        el.textContent = L[key];
      }
    }
  });

  // innerHTML elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (L[key] !== undefined) el.innerHTML = L[key];
  });

  // Store
  localStorage.setItem('iboLang', lang);
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'he' : 'en');
}

// ---- Navbar scroll ---- //
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 50
      ? '0 2px 20px rgba(0,0,0,0.3)'
      : '0 2px 16px rgba(0,0,0,0.2)';
  }, { passive: true });
}

// ---- Mobile menu ---- //
function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ---- Smooth active nav ---- //
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

// ---- Counter animation ---- //
function animateCounters() {
  document.querySelectorAll('.stat-num, .crisis-num, .big-num').forEach(el => {
    const raw = el.textContent.trim();
    const match = raw.match(/[\d,\.]+/);
    if (!match) return;
    el.dataset.target = raw;
  });
}

// ---- Scroll reveal ---- //
function initScrollReveal() {
  const els = document.querySelectorAll(
    '.info-card, .founder-card, .blog-card, .crisis-card, .stat-box, .timeline-item'
  );
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(el);
  });
}

// ---- Contact form ---- //
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('form-success');
    if (success) {
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }
  });
}

// ---- Init ---- //
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('iboLang') || 'en';
  applyLang(saved);
  initNavScroll();
  initMobileMenu();
  initActiveNav();
  initScrollReveal();
  initContactForm();
  animateCounters();

  document.querySelector('.lang-btn')?.addEventListener('click', toggleLang);
});
