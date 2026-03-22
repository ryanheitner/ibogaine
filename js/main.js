// ============================================================
//  IBOGAINE ISRAEL FOUNDATION — MAIN JS
// ============================================================

// ---- Language Data ---- //
const LANG = {
  en: {
    "navHome": "Home",
    "navAbout": "About",
    "navIbogaine": "Ibogaine",
    "navResearch": "Research",
    "navIsrael": "Israel",
    "navFounders": "Founders",
    "navBlog": "Blog",
    "navContact": "Contact",
    "langToggle": "\u05e2\u05d1\u05e8\u05d9\u05ea",
    "heroLabel": "The Ibogaine Foundation \u2014 Israel",
    "heroH1": "Healing Trauma, Restoring Hope",
    "heroSub": "Championing ibogaine-assisted therapy as a breakthrough treatment for PTSD, traumatic brain injury, and addiction \u2014 when Israel needs it most.",
    "heroCta1": "Learn More",
    "heroCta2": "Get Involved",
    "heroBadgeNum": "85,000+",
    "heroBadgeText": "Israelis currently receiving treatment for war-related psychological trauma",
    "statLabel1": "Reduction in PTSD symptoms after ibogaine treatment (Stanford, 2024)",
    "statNum1": "88%",
    "statLabel2": "IDF soldiers treated for PTSD since Oct. 7, 2023",
    "statNum2": "85,000+",
    "statLabel3": "Founders dedicated to change",
    "statNum3": "4",
    "statLabel4": "Years of ibogaine advocacy in Israel",
    "statNum4": "35+",
    "missionLabel": "Mission",
    "missionH2": "A National Imperative for Resilience, Recovery, and Brain Repair",
    "missionP1": "Israelis for Ibogaine's mission is to advance public understanding and responsible medical access to ibogaine for PTSD, traumatic brain injuries, addiction, and co-occurring mental health conditions.",
    "missionP2": "We promote scientific research, reduce stigma, and educate the public to accelerate the safe, evidence-based adoption of ibogaine therapy, restoring the cognitive and emotional health of a nation through neuro-regeneration, one mind at a time.",
    "missionBadge1": "Non-Profit Organization",
    "missionBadge2": "Clinical Research",
    "missionBadge3": "Bilingual Support",
    "missionBadge4": "Evidence-Based",
    "missionNum": "35+ Years",
    "missionNumLabel": "Combined ibogaine experience",
    "crisisLabel": "The Crisis",
    "crisisH2": "A Mental Health Emergency of Historic Scale",
    "crisisIntro": "Since October 7th and the ensuing regional conflict, Israel has entered a mental health crisis with no modern precedent. The scale of psychological and neurological injury now threatens not only individuals and families, but the nation's long-term resilience, workforce capacity, and social fabric.",
    "crisisStat1Num": "3M+",
    "crisisStat1Label": "Israelis Affected. Estimated citizens currently experiencing PTSD, anxiety, or clinical depression",
    "crisisStat2Num": "40%",
    "crisisStat2Label": "Dropout Rate. Of trauma patients abandoning standard SSRI and talk-therapy protocols within 12 months",
    "crisisStat3Num": "1/3",
    "crisisStat3Label": "Combat Veterans. IDF personnel returning from active duty show markers of treatment-resistant PTSD or TBI",
    "problemLabel": "The Problem",
    "problemH2": "Four Dimensions of an Unmet Crisis",
    "problem1Title": "\ud83e\udde0 The Trauma Surge",
    "problem1Text": "Over 3 million Israelis are symptomatic. Civilian survivors, Nova attendees, displaced families, and reserve soldiers are overwhelming an already strained mental health system unprepared for this volume or severity.",
    "problem2Title": "\ud83d\udca5 The TBI Epidemic",
    "problem2Text": "Blast injuries from modern warfare are causing a surge of Traumatic Brain Injuries among IDF personnel - frequently comorbid with treatment-resistant PTSD, creating a dual-diagnosis crisis that standard care cannot address.",
    "problem3Title": "\ud83d\udc8a Failure of the Status Quo",
    "problem3Text": "SSRIs and talk therapy show high dropout rates and limited efficacy for severe trauma and chronic addiction. Patients are left in a revolving door of partial treatment, relapse, and deterioration.",
    "problem4Title": "\ud83d\udd2c The Biological Bottleneck",
    "problem4Text": "Neurodegeneration and loss of synaptic plasticity in trauma victims prevent conventional therapies from 'taking hold.' Without addressing the neurological substrate, psychological interventions fail at the cellular level.",
    "scienceLabel": "The Science",
    "scienceH2": "Ibogaine: A Catalyst for Genuine Neurological Repair",
    "scienceIntro1": "<strong>Why Ibogaine Is Different:</strong> Ibogaine is not a recreational psychedelic. It is an oneirogen \u2014 a dream-state compound derived from the West African Tabernanthe iboga shrub that triggers deep neurological repair mechanisms unavailable to any other known substance or therapy.",
    "scienceIntro2": "The Stanford MISTIC study demonstrated dramatic symptom reduction in PTSD and TBI in as few as one to two sessions \u2014 results unmatched in conventional psychiatric literature.",
    "scienceMech1Title": "GDNF Release",
    "scienceMech1Text": "Triggers Glial Cell-Derived Neurotrophic Factor, physically repairing white matter tracts and rebuilding damaged neural pathways, the biological foundation of trauma recovery.",
    "scienceMech2Title": "Dopamine Reset",
    "scienceMech2Text": "Resets the reward system, interrupting opioid, alcohol, and nicotine dependence and opening a critical 'biological window' for long-term sobriety.",
    "scienceMech3Title": "Rapid Remission",
    "scienceMech3Text": "Clinical evidence confirms significant, durable reduction of PTSD and TBI symptoms with minimal sessions reducing patient burden and system cost.",
    "solutionLabel": "The Solution",
    "solutionH2": "Repairing the Brain from the Inside Out",
    "solutionIntro": "Ibogaine's mechanism is fundamentally distinct from any approved psychiatric medication. By acting directly on the neurotrophin pathway, it addresses the <strong>biological substrate of trauma</strong>, not merely its symptoms. Where SSRIs modulate mood, ibogaine rebuilds the architecture of the mind.",
    "solution1Title": "For PTSD",
    "solution1Text": "Disrupts the hyperactive fear-memory consolidation cycle, enabling patients to process trauma without retraumatisation.",
    "solution2Title": "For TBI",
    "solution2Text": "Promotes axonal regeneration and myelin repair via GDNF, restoring cognitive function lost to blast injury and concussive trauma.",
    "solution3Title": "For Addiction",
    "solution3Text": "Eliminates acute withdrawal and resets craving pathways, providing a clean neurological slate for sustained recovery programmes.",
    "mandateLabel": "The Mandate",
    "mandateH2": "Four Pillars of Action",
    "mandateIntro": "Israelis for Ibogaine operates across four mutually reinforcing strategic pillars, from public awareness to policy reform, forming a comprehensive national advocacy and research framework.",
    "mandate1Title": "Public Education",
    "mandate1Text": "Multi-channel campaigns to de-stigmatise ibogaine, distinguishing it categorically from recreational substances and positioning it as a specialised medical tool.",
    "mandate2Title": "Clinical Trials",
    "mandate2Text": "Facilitating and co-funding Phase II/III trials within Israeli hospitals, including Ichilov and Sheba.",
    "mandate3Title": "Academic & Biosynthetic Research",
    "mandate3Text": "Supporting the Weizmann Institute and Tel Aviv University's Sagol School to explore ibogaine's biosynthesis.",
    "mandate4Title": "Policy & Global Safety",
    "mandate4Text": "Lobbying the MoH for Compassionate Use status and establishing a 'Gold Standard' protocol for safe access.",
    "ecoLabel": "Ecosystem",
    "ecoH2": "The Ibogaine Israel Umbrella",
    "ecoIntro": "Ibogaine Israel is designed to function as the <strong>central connective node</strong> of a broader national ecosystem, bridging academia, healthcare, civil society, and biotechnology.",
    "eco1Title": "Research & Policy",
    "eco1Text": "Biosynthetic research, compassionate use and gold-standard protocols",
    "eco2Title": "Clinical Trials",
    "eco2Text": "Phase II/III trials in Ichilov and Sheba for safety and efficacy",
    "eco3Title": "Core Mission",
    "eco3Text": "National hub for ibogaine-based brain health reform",
    "legalLabel": "Legal Strategy",
    "legalH2": "A Clear Regulatory Pathway",
    "legalTaxTitle": "Entity & Tax Structure",
    "legalTaxText": "Ibogaine Israel is registered as a formal <strong>Amuta</strong> (Non-Profit Association) under the Israeli Ministry of Justice, with active pursuit of <strong>Section 46 status</strong> to enable fully tax-deductible philanthropic donations.",
    "legal1Title": "1. Reclassify Ibogaine",
    "legal1Text": "Transitioning from Schedule 1 to 'Controlled Medical Substance' enabling supervised clinical and compassionate use within licensed facilities.",
    "legal2Title": "2. National Pilot Programme",
    "legal2Text": "Advocating for a government-sanctioned 'National Ibogaine Pilot' specifically targeting combat veterans and Nova massacre survivors.",
    "legal3Title": "3. Compassionate Use Status",
    "legal3Text": "Fast-tracking MoH approval for severe, treatment-resistant patients while full trial data is compiled.",
    "orgLabel": "Organisation",
    "orgH2": "Operational Structure & Year 1 Budget",
    "orgIntro": "A lean, mission-driven budget structured around 5 key operational pillars. Total projected operational overhead for Year 1: <strong>\u20aa1,000,000 ILS</strong>.",
    "projLabel": "2026\u20132027 Projects",
    "projH2": "Key Initiatives: Turning Vision into Evidence",
    "proj1Title": "Project 'Iron Mind'",
    "proj1Text": "A funded observational study of <strong>50 IDF veterans</strong> with comorbid TBI and PTSD, utilising the Magnesium-Ibogaine protocol to generate Israel's first domestic clinical dataset.",
    "proj2Title": "The Ibogaine Registry",
    "proj2Text": "A secure, anonymised database tracking health outcomes for Israelis who have sought ibogaine treatment abroad.",
    "proj3Title": "Survivor Outreach",
    "proj3Text": "Building a national network connecting Nova massacre survivors, displaced families, and bereaved communities with ibogaine-assisted therapy pathways.",
    "proj4Title": "Patient Subsidy Fund",
    "proj4Text": "A financial assistance programme providing grants and subsidies to Israelis who cannot afford treatment. Means-tested bursaries prioritising veterans and Nova survivors.",
    "pathLabel": "The Path Forward",
    "pathH2": "Pioneering the Next Wave of Ibogaine Research",
    "pathIntro": "Future research initiatives will broaden the scope of inquiry, refine treatment protocols, and deepen our understanding of ibogaine's therapeutic mechanisms.",
    "path1Title": "Expanded Clinical Trials",
    "path1Text": "Beyond TBI and PTSD, studies will explore efficacy in severe depression, anxiety disorders, and neurodegenerative conditions.",
    "path2Title": "Neuroimaging & Biomarkers",
    "path2Text": "Advanced fMRI, PET scans, and genetic sequencing will uncover the precise neural circuits associated with brain repair.",
    "path3Title": "Long-term Efficacy & Safety",
    "path3Text": "Longitudinal studies tracking patients over several years tracking relapse prevention and safety profiles.",
    "caseLabel": "The Case",
    "caseH2": "Why Israel? Why Now?",
    "case1Title": "The 'Startup Nation' Advantage",
    "case1Text": "Israel is already a global leader in medical cannabis regulation and MDMA-assisted therapy research. The regulatory infrastructure, scientific talent, and institutional appetite are uniquely mature.",
    "case2Title": "An Existential Necessity",
    "case2Text": "With a significant proportion of the civilian workforce and reserve military force impacted by trauma, brain health is national security. An untreated generation represents a compounding threat to Israel's economic productivity, social cohesion, and defensive capacity. The cost of inaction is not abstract. It is strategic.",
    "impLabel": "The Imperative",
    "impH2": "The Window Is Open \u2014 It Will Not Stay Open",
    "impQuote": "\"We are not asking Israel to experiment. We are asking Israel to lead as it has done with cannabis, with trauma medicine, and with every other frontier where necessity met scientific courage.\"",
    "imp1Title": "For Policymakers",
    "imp1Text": "The science is credible, the precedent is clear, and the patient population is waiting.",
    "imp2Title": "For Philanthropists",
    "imp2Text": "Your investment funds a regulatory pathway, a domestic data infrastructure, and a biosynthetic supply chain that will serve Israeli patients for decades.",
    "imp3Title": "For Health Leaders",
    "imp3Text": "Standard care is failing. Ibogaine Israel offers a structured, evidence-driven, safety-first pathway to integrate a proven intervention responsibly and urgently.",
    "impactLabel": "Impact",
    "impactH2": "Voices of Recovery",
    "impact1Quote": "\"I got my life back. After years of night terrors and isolation, Ibogaine helped me reconnect with my family. It felt like my brain was rewired, clearing out the static.\"",
    "impact1Author": "\u2014 Former IDF Commando (PTSD)",
    "impact2Quote": "\"The weight is lifted. I carried such a heavy burden. Ibogaine gave me a chance to process the unspeakable, to find peace in my mind. It's a profound reset button for the soul.\"",
    "impact2Author": "\u2014 Nova Festival Survivor (Complex Trauma)",
    "impact3Quote": "\"A pathway to healing. Battling both professional burnout and a growing dependency, Ibogaine was the intervention I desperately needed. It addressed the root cause offering true brain repair.\"",
    "impact3Author": "\u2014 Healthcare Professional (Burnout & Addiction)",
    "researchLabel": "Research",
    "researchH2": "Key Research: Ibogaine in Military Veterans",
    "research1Title": "Magnesium\u2013Ibogaine Therapy in Veterans with Traumatic Brain Injuries",
    "research1Meta": "Journal: Nature Medicine (2024)",
    "research1Text": "This landmark Stanford study investigated the magnesium-ibogaine (MISTIC) protocol in veterans with comorbid TBI and PTSD, providing crucial evidence for ibogaine's neurorestorative potential.",
    "research2Title": "Neural Correlates of Ibogaine: Evidence from Functional Neuroimaging",
    "research2Meta": "Journal: Biological Psychiatry (2026)",
    "research2Text": "This Stanford fMRI study of 30 Special Operations veterans found ibogaine drives widespread brain reorganisation, correlating with improvements in TBI-related disability.",
    "research3Title": "Psychedelics for the Management of Symptoms of Traumatic Brain Injury",
    "research3Meta": "Journal: PNPBP (2026)",
    "research3Text": "This open-access global survey study examined the use of psychedelics for managing TBI symptoms across a broad international population, providing real-world evidence.",
    "gardnerVideoLabel": "Dr. Raquel Gardner — Ibogaine for Traumatic Brain Injury & PTSD",
    "gardnerBio": "Dr. Raquel Gardner is a U.S. board-certified behavioral neurologist, Associate Professor at Tel Aviv University School of Medicine, and Director of Clinical Research at the Joseph Sagol Neuroscience Center, Sheba Medical Center. Her NIH- and DoD-funded research focuses on traumatic brain injury, aging, and neurodegenerative disease — and since October 7, war-related TBI across the full spectrum of severity. <a href=\"https://www.gardnerlab.health/\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--gold);\">GardnerLab</a> · <a href=\"https://eng.sheba.co.il/Raquel-C-Gardner\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--gold);\">Sheba Medical Center</a>",
    "foundersLabel": "Our Team",
    "foundersH2": "The Founders",
    "founder1Name": "Boaz Wachtel",
    "founder1Role": "Co-Founder & Executive Chairman",
    "founder1Bio": "A certified clinical research manager and MA graduate of the University of Maryland, Boaz has been an ibogaine treatment provider since 1989. He co-authored the Manual for Ibogaine Therapy with Howard Lotsof, treated over 100 patients across the Netherlands, Panama, and Israel, and co-founded the Global Ibogaine Treatment Alliance. A pioneer of Israel's national medical cannabis program, Boaz has spent over three decades advocating for evidence-based psychedelic medicine in Israel and globally.",
    "founder2Name": "Arik Metzer",
    "founder2Role": "Co-Founder & Director of Research",
    "founder2Bio": "A strategic leader with deep expertise in health sciences and biomedical innovation, Arik brings essential organizational and research leadership to the foundation. His background in life sciences, combined with a personal commitment to mental health reform in Israel, drives the foundation's scientific agenda and clinical partnerships.",
    "founder3Name": "Jilly Rubenstein",
    "founder3Role": "Co-Founder & Director of Community Outreach",
    "founder3Bio": "Jilly is a dedicated advocate for psychedelic-assisted therapies and mental health access in Israel. With extensive experience in community health education and outreach, she connects the foundation's mission to the families, soldiers, and survivors most in need. Her compassionate leadership ensures that the human story remains at the heart of everything the foundation does.",
    "founder4Name": "Ryan Heitner",
    "founder4Role": "Co-Founder & Director of Technology",
    "founder4Bio": "Ryan Heitner is a technology professional and founder focused on advancing access to ibogaine treatment for PTSD. His commitment to this work is rooted in a longstanding interest in psychedelic healing, meditation, and consciousness, as well as a strong desire to support people affected by trauma. With a background in technology and a family connection to healthcare, he brings a thoughtful, mission-driven approach to building compassionate new models of care.",
    "contactLabel": "Reach Out",
    "contactH2": "Contact the Foundation",
    "contactP": "Whether you are a patient seeking information, a researcher interested in collaboration, a journalist, or someone who simply wants to get involved \u2014 we want to hear from you.",
    "formName": "Full Name",
    "formEmail": "Email Address",
    "formPhone": "Phone (optional)",
    "formSubject": "Subject",
    "formSubjectOpt1": "I am a patient / family member seeking help",
    "formSubjectOpt2": "Research collaboration inquiry",
    "formSubjectOpt3": "Media / Press inquiry",
    "formSubjectOpt4": "Donation / Sponsorship",
    "formSubjectOpt5": "Volunteer",
    "formSubjectOpt6": "Other",
    "formMessage": "Message",
    "formSubmit": "Send Message",
    "formSuccess": "\u2713 Thank you! We will be in touch soon.",
    "contactEmail": "JillyRubenstein@gmail.com",
    "contactCity": "Tel Aviv, Israel",
    "footerDesc": "The Ibogaine Foundation of Israel is a non-profit organization dedicated to advancing ibogaine-assisted therapy for PTSD, TBI, addiction, and neurological conditions. We advocate for evidence-based policy, clinical access, and public education.",
    "footerLinks": "Quick Links",
    "footerResources": "Resources",
    "footerRes1": "Stanford Study",
    "footerRes2": "Ibogaine History",
    "footerRes3": "Israel Crisis",
    "footerRes4": "Parkinson's",
    "footerRes5": "All Articles",
    "footerLegal": "Legal",
    "footerLegal1": "Privacy Policy",
    "footerLegal2": "Terms of Use",
    "footerLegal3": "Medical Disclaimer",
    "footerCopy": "\u00a9 2026 Ibogaine Foundation of Israel. All rights reserved.",
    "disclaimer": "\u26a0\ufe0f This website is for educational and informational purposes only. Ibogaine is a controlled substance in many countries. Nothing here constitutes medical advice. Always consult a qualified physician."
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
    statNum3: '4',
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

    gardnerVideoLabel: 'ד"ר רקל גרדנר — איבוגאין לפגיעת ראש טראומטית ו-PTSD',
    gardnerBio: 'ד"ר רקל גרדנר היא נוירולוגית התנהגותית מוסמכת בארה"ב, פרופסור חבר בבית הספר לרפואה של אוניברסיטת תל אביב, ומנהלת המחקר הקליני במרכז הנוירומדע ע"ש יוסף סגול במרכז הרפואי שיבא. מחקרה הממומן על ידי NIH ומשרד ההגנה האמריקאי מתמקד בפגיעת ראש טראומטית, הזדקנות ומחלות ניווניות של מערכת העצבים — ומאז 7 באוקטובר, ב-TBI הקשור למלחמה בכל רמות החומרה. <a href="https://www.gardnerlab.health/" target="_blank" rel="noopener" style="color:var(--gold);">GardnerLab</a> · <a href="https://eng.sheba.co.il/Raquel-C-Gardner" target="_blank" rel="noopener" style="color:var(--gold);">מרכז רפואי שיבא</a>',
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
    founder4Name: "Ryan Heitner",
    founder4Role: "מייסד שותף ומנהל הטכנולוגיה",
    founder4Bio: "Ryan Heitner הוא איש מקצוע בתחום הטכנולוגיה ומייסד הממוקד בקידום גישה לטיפול בסיוע איבוגאין עבור PTSD. התחייבותו לעבודה זו נבעת מעניין ממושך בריפוי פסיכדלי, מדיטציה ותודעה, כמו גם מרצון חזק לתמוך באנשים שנפגעו מטראומה. עם רקע בטכנולוגיה וקשר משפחתי לבריאות, הוא מביא גישה מחשובת המונעת על ידי משימה לבניית מודלים חדשים של טיפול מלא אמפתיה.",

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

    missionLabel: 'ייעוד',
    missionH2: 'הכרח לאומי לחוסן, התאוששות ותיקון המוח',
    missionP1: 'מטרת "ישראלים לאיבוגאין" היא לקדם הבנה ציבורית וגישה רפואית אחראית לאיבוגאין לטיפול ב-PTSD, פגיעות ראש טראומטיות, התמכרות ומצבים נפשיים נלווים.',
    missionP2: 'אנו מקדמים מחקר מדעי, מצמצמים סטיגמה ומחנכים את הציבור כדי להאיץ את אימוץ הטיפול באיבוגאין בצורה בטוחה ומבוססת ראיות, ומשחזרים את הבריאות הקוגניטיבית והרגשית של האומה דרך רגנרציה עצבית, מוח אחד בכל פעם.',
    missionBadge1: 'ארגון ללא מטרות רווח',
    missionBadge2: 'מחקר קליני',
    missionBadge3: 'תמיכה דו-לשונית',
    missionBadge4: 'מבוסס ראיות',
    missionNum: '35+ שנה',
    missionNumLabel: 'ניסיון משולב באיבוגאין',

    crisisLabel: 'המשבר',
    crisisH2: 'מצב חירום נפשי בהיקף היסטורי',
    crisisIntro: 'מאז 7 באוקטובר והסכסוך האזורי שנמשך, ישראל נכנסה למשבר בריאות נפש שאין לו תקדים. היקף הפציעות הנפשיות והנוירולוגיות מאיים כיום לא רק על פרטים ומשפחות, אלא על חוסנה לטווח ארוך של האומה, כושרה התעסוקתי ורקמתה החברתית.',
    crisisStat1Num: '3M+',
    crisisStat1Label: 'ישראלים מושפעים — אזרחים הסובלים כיום מ-PTSD, חרדה או דיכאון קליני',
    crisisStat2Num: '40%',
    crisisStat2Label: 'שיעור נטישה — מטופלי טראומה שנוטשים פרוטוקולי SSRI ופסיכותרפיה סטנדרטיים תוך 12 חודשים',
    crisisStat3Num: '1/3',
    crisisStat3Label: 'ותיקי קרב — אנשי צה"ל החוזרים משירות פעיל מגלים סממני PTSD עמיד לטיפול או TBI',

    problemLabel: 'הבעיה',
    problemH2: 'ארבעה ממדים של משבר שלא קיבל מענה',
    problem1Title: '🧠 גל הטראומה',
    problem1Text: 'יותר מ-3 מיליון ישראלים סימפטומטיים. ניצולים אזרחיים, מבקרי נובה, משפחות עקורות וחיילי מילואים מציפים מערכת בריאות נפש שכבר עמוסה, שאינה ערוכה להיקף ולחומרה הזאת.',
    problem2Title: '💥 מגפת ה-TBI',
    problem2Text: 'פציעות מפיצוצים בלוחמה המודרנית גורמות לגל של פגיעות ראש טראומטיות בקרב אנשי צה"ל — לעיתים קרובות בשילוב עם PTSD עמיד לטיפול, ויוצרות משבר אבחוני כפול שהטיפול הסטנדרטי אינו יכול לטפל בו.',
    problem3Title: '💊 כשלון הסטטוס קוו',
    problem3Text: 'SSRI ופסיכותרפיה מראים שיעורי נטישה גבוהים ויעילות מוגבלת לטראומה קשה והתמכרות כרונית. המטופלים נשארים בסחרור של טיפול חלקי, הישנות והתדרדרות.',
    problem4Title: '🔬 צוואר הבקבוק הביולוגי',
    problem4Text: 'ניוון עצבי ואיבוד פלסטיות סינפטית אצל קורבנות טראומה מונעים מטיפולים קונבנציונליים "לתפוס". ללא התייחסות לסובסטרט הנוירולוגי, ההתערבויות הפסיכולוגיות נכשלות ברמה התאית.',

    scienceLabel: 'המדע',
    scienceH2: 'איבוגאין: זרז לתיקון נוירולוגי אמיתי',
    scienceIntro1: '<strong>מדוע איבוגאין שונה:</strong> איבוגאין אינו פסיכדל לבידור. הוא אוניירוגן — תרכובת המשרה מצב חלום, המופקת מהשיח האפריקאי Tabernanthe iboga, הממריצה מנגנוני תיקון נוירולוגי עמוק שאינם זמינים לאף חומר או טיפול אחר הידוע כיום.',
    scienceIntro2: 'מחקר MISTIC של סטנפורד הדגים הפחתה דרמטית של תסמיני PTSD ו-TBI במספר מועט של סשנים — תוצאות חסרות מקבילה בספרות הפסיכיאטרית הקונבנציונלית.',
    scienceMech1Title: 'שחרור GDNF',
    scienceMech1Text: 'מעורר את גורם הצמיחה העצבי הנגזר מתאי גליה, המתקן פיזית את מסלולי החומר הלבן ומבנה מחדש נתיבים עצביים פגועים — הבסיס הביולוגי להתאוששות מטראומה.',
    scienceMech2Title: 'איפוס הדופמין',
    scienceMech2Text: 'מאפס את מערכת הגמול, מפסיק תלות באופיאטים, אלכוהול וניקוטין, ופותח "חלון ביולוגי" קריטי לפיכחון ארוך טווח.',
    scienceMech3Title: 'רמיסיה מהירה',
    scienceMech3Text: 'עדויות קליניות מאשרות הפחתה משמעותית ועמידה של תסמיני PTSD ו-TBI עם מינימום סשנים, המפחיתה את הנטל על המטופל ועלויות המערכת.',

    solutionLabel: 'הפתרון',
    solutionH2: 'תיקון המוח מבפנים',
    solutionIntro: 'מנגנון הפעולה של איבוגאין שונה מהותית מכל תרופה פסיכיאטרית מאושרת. בפעולה ישירה על מסלול הנוירוטרופין, הוא מתייחס ל<strong>סובסטרט הביולוגי של הטראומה</strong>, לא רק לתסמיניה. בעוד SSRI מווסת מצב רוח, איבוגאין מבנה מחדש את ארכיטקטורת הנפש.',
    solution1Title: 'ל-PTSD',
    solution1Text: 'משבש את מחזור איחוד זיכרון הפחד ההיפר-אקטיבי, ומאפשר למטופלים לעבד טראומה ללא טראומה-נגדית.',
    solution2Title: 'ל-TBI',
    solution2Text: 'מקדם רגנרציה אקסונלית ותיקון מיאלין דרך GDNF, ומשחזר תפקוד קוגניטיבי שאבד עקב פציעות פיצוץ וטראומת זעזוע מוח.',
    solution3Title: 'להתמכרות',
    solution3Text: 'מבטל גמילה חריפה ומאפס מסלולי תשוקה, ומספק לוח נוירולוגי נקי לתוכניות החלמה מתמשכות.',

    mandateLabel: 'המנדט',
    mandateH2: 'ארבעה עמודי פעולה',
    mandateIntro: '"ישראלים לאיבוגאין" פועלת לאורך ארבעה עמודי אסטרטגיה המחזקים זה את זה — מהעלאת מודעות ציבורית ועד לרפורמה במדיניות — ומהווים מסגרת ממקיפה לעידוד לאומי ומחקר.',
    mandate1Title: 'חינוך ציבורי',
    mandate1Text: 'קמפיינים רב-ערוציים להסרת סטיגמה מהאיבוגאין, הבחנה ברורה בינו לבין חומרים לבידור ומיצובו ככלי רפואי מיוחד.',
    mandate2Title: 'ניסויים קליניים',
    mandate2Text: 'הקלת ושותפות במימון ניסויים בשלב II/III בבתי חולים ישראליים, כולל איכילוב ושיבא.',
    mandate3Title: 'מחקר אקדמי וביוסינתטי',
    mandate3Text: 'תמיכה במכון ויצמן ובבית הספר לנוירומדעים ע"ש סאגול באוניברסיטת תל אביב לחקר הביוסינתזה של איבוגאין.',
    mandate4Title: 'מדיניות ובטיחות גלובלית',
    mandate4Text: 'שדולה למשרד הבריאות לקבלת מעמד "שימוש חמלה" וקביעת פרוטוקול "תקן זהב" לגישה בטוחה.',

    ecoLabel: 'מערכת אקולוגית',
    ecoH2: 'מטריית איבוגאין ישראל',
    ecoIntro: '"איבוגאין ישראל" מתוכננת לתפקד כ<strong>צומת מחבר מרכזי</strong> של מערכת אקולוגית לאומית רחבה יותר, ומגשרת בין האקדמיה, שירותי הבריאות, החברה האזרחית והביוטכנולוגיה.',
    eco1Title: 'מחקר ומדיניות',
    eco1Text: 'מחקר ביוסינתטי, פרוטוקולי שימוש חמלה ותקן זהב',
    eco2Title: 'ניסויים קליניים',
    eco2Text: 'ניסויים בשלב II/III באיכילוב ובשיבא לבטיחות ויעילות',
    eco3Title: 'משימת הליבה',
    eco3Text: 'מרכז לאומי לרפורמה בבריאות המוח מבוססת איבוגאין',

    legalLabel: 'אסטרטגיה משפטית',
    legalH2: 'מסלול רגולטורי ברור',
    legalTaxTitle: 'מבנה ישות ומס',
    legalTaxText: '"איבוגאין ישראל" רשומה כ<strong>עמותה</strong> רשמית תחת משרד המשפטים הישראלי, עם מרדף פעיל אחר <strong>מעמד סעיף 46</strong> לאפשר תרומות פילנתרופיות בניכוי מס מלא.',
    legal1Title: '1. סיווג מחדש של איבוגאין',
    legal1Text: 'מעבר מלוח 1 ל"חומר רפואי מבוקר" המאפשר שימוש קליני וחמלתי מפוקח במתקנים מורשים.',
    legal2Title: '2. תוכנית פיילוט לאומית',
    legal2Text: 'עידוד "פיילוט לאומי של איבוגאין" ממוסד ממשלתי המיועד ספציפית לוותיקי קרב וניצולי טבח הנובה.',
    legal3Title: '3. מעמד שימוש חמלה',
    legal3Text: 'קידום אישור משרד הבריאות למטופלים קשים עמידי טיפול בעוד נתוני הניסויים המלאים מתקבלים.',

    orgLabel: 'ארגון',
    orgH2: 'מבנה תפעולי ותקציב שנה 1',
    orgIntro: 'תקציב ממוקד משימה ורזה המובנה סביב 5 עמודי תפעול מרכזיים. סך תקורה תפעולית צפויה לשנה 1: <strong>₪1,000,000</strong>.',

    projLabel: 'פרויקטים 2026–2027',
    projH2: 'יוזמות מרכזיות: הפיכת חזון לראיות',
    proj1Title: 'פרויקט "מוח ברזל"',
    proj1Text: 'מחקר תצפיתי ממומן על <strong>50 ותיקי צה"ל</strong> עם TBI ו-PTSD בשילוב, תוך שימוש בפרוטוקול מגנזיום-איבוגאין ליצירת מאגר הנתונים הקליניים המקומי הראשון של ישראל.',
    proj2Title: 'רשם האיבוגאין',
    proj2Text: 'מסד נתונים מאובטח ואנונימי המעקב אחר תוצאות בריאות לישראלים שפנו לטיפול באיבוגאין בחו"ל.',
    proj3Title: 'פנייה לניצולים',
    proj3Text: 'בניית רשת לאומית המחברת ניצולי טבח הנובה, משפחות עקורות וקהילות שכולות עם מסלולי טיפול בסיוע איבוגאין.',
    proj4Title: 'קרן סבסוד מטופלים',
    proj4Text: 'תוכנית סיוע כספי המעניקה מענקים וסבסודים לישראלים שאינם יכולים להרשות לעצמם טיפול. מלגות מבוחנות-אמצעים המעדיפות ותיקים וניצולי נובה.',

    pathLabel: 'הדרך קדימה',
    pathH2: 'חלוציות גל המחקר הבא באיבוגאין',
    pathIntro: 'יוזמות מחקר עתידיות ירחיבו את תחום החקירה, ישכללו פרוטוקולי טיפול ויעמיקו את הבנתנו של מנגנוני הריפוי של האיבוגאין.',
    path1Title: 'ניסויים קליניים מורחבים',
    path1Text: 'מעבר ל-TBI ו-PTSD, מחקרים יחקרו יעילות בדיכאון קשה, הפרעות חרדה ומצבים ניווניים.',
    path2Title: 'הדמיה עצבית ובסמנים ביולוגיים',
    path2Text: 'fMRI מתקדם, סריקות PET וריצוף גנטי יחשפו את מעגלי העצב המדויקים הקשורים לתיקון המוח.',
    path3Title: 'יעילות ובטיחות לטווח ארוך',
    path3Text: 'מחקרים אורכיים עוקבים אחר מטופלים במשך מספר שנים כדי לעקוב אחר מניעת הישנות ופרופילי בטיחות.',

    caseLabel: 'הנימוק',
    caseH2: 'מדוע ישראל? מדוע עכשיו?',
    case1Title: 'יתרון "אומת הסטארטאפ"',
    case1Text: 'ישראל כבר היא מובילה עולמית ברגולציה של קנאביס רפואי ובמחקרי טיפול בסיוע MDMA. התשתית הרגולטורית, הכישרון המדעי והתיאבון המוסדי בשלים ייחודית.',
    case2Title: 'הכרח קיומי',
    case2Text: 'כאשר חלק ניכר מכוח העבודה האזרחי וכוח הצבאי המילואים הושפע מטראומה, בריאות המוח היא ביטחון לאומי. דור לא מטופל מהווה איום מצטבר על הפריון הכלכלי של ישראל, הלכידות החברתית וכושרה ההגנתי. עלות חוסר המעש אינה מופשטת. היא אסטרטגית.',

    impLabel: 'ההכרח',
    impH2: 'החלון פתוח — הוא לא יישאר פתוח',
    impQuote: '"אנחנו לא מבקשים מישראל לנסות. אנחנו מבקשים מישראל להוביל כפי שעשתה עם קנאביס, עם רפואת טראומה, ועם כל גבול אחר שבו הצורך פגש אומץ מדעי."',
    imp1Title: 'לקובעי מדיניות',
    imp1Text: 'המדע אמין, התקדים ברור, ואוכלוסיית המטופלים ממתינה.',
    imp2Title: 'לפילנתרופים',
    imp2Text: 'השקעתכם ממנת מסלול רגולטורי, תשתית נתונים מקומית ושרשרת אספקה ביוסינתטית שתשרת מטופלים ישראלים לעשורים.',
    imp3Title: 'למנהיגי בריאות',
    imp3Text: 'הטיפול הסטנדרטי נכשל. "איבוגאין ישראל" מציעה מסלול מובנה, מונע ראיות ובטיחות-תחילה לשילוב התערבות מוכחת באחריות ובדחיפות.',

    impactLabel: 'השפעה',
    impactH2: 'קולות ההתאוששות',
    impact1Quote: '"קיבלתי את חיי בחזרה. אחרי שנים של סיוטי לילה ובידוד, האיבוגאין עזר לי להתחבר מחדש למשפחתי. הרגשתי שהמוח שלי עבר חיווט מחדש, שנוקה מהרעש."',
    impact1Author: '— קומנדו צה"ל לשעבר (PTSD)',
    impact2Quote: '"המשקל הוסר. נשאתי עול כבד כל כך. האיבוגאין נתן לי הזדמנות לעבד את הבלתי ניתן לאמירה, למצוא שלווה בנפש. זה כפתור איפוס עמוק לנשמה."',
    impact2Author: '— ניצול פסטיבל הנובה (טראומה מורכבת)',
    impact3Quote: '"מסלול לריפוי. בהתמודדות עם שחיקה מקצועית ותלות גוברת, האיבוגאין היה ההתערבות שנזקקתי לה נואשות. הוא התייחס לשורש הבעיה והציע תיקון מוח אמיתי."',
    impact3Author: '— איש רפואה (שחיקה והתמכרות)',

    researchLabel: 'מחקר',
    researchH2: 'מחקרי מפתח: איבוגאין בקרב ותיקים צבאיים',
    research1Title: 'טיפול מגנזיום-איבוגאין בוותיקים עם פגיעות ראש טראומטיות',
    research1Meta: 'כתב עת: Nature Medicine (2024)',
    research1Text: 'מחקר סטנפורד פורץ דרך זה חקר את פרוטוקול מגנזיום-איבוגאין (MISTIC) בוותיקים עם TBI ו-PTSD בשילוב, ומספק עדויות קריטיות לפוטנציאל הנוירו-רסטורטיבי של איבוגאין.',
    research2Title: 'מתאמים עצביים של איבוגאין: עדויות מהדמיה עצבית פונקציונלית',
    research2Meta: 'כתב עת: Biological Psychiatry (2026)',
    research2Text: 'מחקר fMRI של סטנפורד על 30 ותיקים ממבצעים מיוחדים מצא שאיבוגאין מניע ארגון מחדש מוחי נרחב, המתואם עם שיפורים בנכות הקשורה ל-TBI.',
    research3Title: 'פסיכדלים לניהול תסמיני פגיעת ראש טראומטית',
    research3Meta: 'כתב עת: PNPBP (2026)',
    research3Text: 'מחקר סקר עולמי פתוח גישה זה בחן את השימוש בפסיכדלים לניהול תסמיני TBI באוכלוסייה בינלאומית רחבה, ומספק עדויות מהעולם האמיתי.',

    footerDesc: 'קרן האיבוגאין של ישראל היא ארגון ללא מטרות רווח המוקדש לקידום טיפול בסיוע איבוגאין ל-PTSD, TBI, התמכרות ומצבים נוירולוגיים. אנו תומכים במדיניות מבוססת ראיות, גישה קלינית וחינוך ציבורי.',
    footerLinks: 'קישורים מהירים',
    footerResources: 'משאבים',
    footerRes1: 'מחקר סטנפורד',
    footerRes2: 'היסטוריית האיבוגאין',
    footerRes3: 'משבר ישראל',
    footerRes4: 'פרקינסון',
    footerRes5: 'כל המאמרים',
    footerLegal: 'משפטי',
    footerLegal1: 'מדיניות פרטיות',
    footerLegal2: 'תנאי שימוש',
    footerLegal3: 'כתב ויתור רפואי',
    footerCopy: '© 2026 קרן האיבוגאין של ישראל. כל הזכויות שמורות.',
    disclaimer: '⚠️ אתר זה מיועד למטרות חינוכיות ומידע בלבד. איבוגאין הוא חומר מבוקר במדינות רבות. אין כאן עצה רפואית. יש להתייעץ תמיד עם רופא מוסמך.',
  }

};

// ---- State ---- //
let currentLang = 'en';

// ---- Render ---- //
function applyLang(lang) {
  const L = LANG[lang];
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', L.dir || 'ltr');
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let text = L[key];
    if (text === undefined) text = LANG.en[key]; // fallback to EN
    
    if (text !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (key.endsWith('Html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    let text = L[key];
    if (text === undefined) text = LANG.en[key]; // fallback to EN
    if (text !== undefined) el.innerHTML = text;
  });

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
