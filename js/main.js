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
    "statLabel3": "Founders committed to change",
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
    "crisisStat1Label": "Israelis affected — estimated citizens currently experiencing PTSD, anxiety, or clinical depression",
    "crisisStat2Num": "40%",
    "crisisStat2Label": "Dropout rate — trauma patients abandoning standard SSRI and talk-therapy protocols within 12 months",
    "crisisStat3Num": "1/3",
    "crisisStat3Label": "Of IDF combat personnel returning from active duty show markers of treatment-resistant PTSD or TBI",
    "problemLabel": "The Problem",
    "problemH2": "Four Dimensions of an Unmet Crisis",
    "problem1Title": "\ud83e\udde0 The Trauma Surge",
    "problem1Text": "Over 3 million Israelis are symptomatic. Civilian survivors, Nova attendees, displaced families, and reserve soldiers are overwhelming an already strained mental health system unprepared for this volume or severity.",
    "problem2Title": "\ud83d\udca5 The TBI Epidemic",
    "problem2Text": "Blast injuries from modern warfare are driving a surge of Traumatic Brain Injuries among IDF personnel — frequently comorbid with treatment-resistant PTSD, creating a dual-diagnosis crisis that standard care cannot address.",
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
    "solution1Text": "Disrupts the hyperactive fear-memory consolidation cycle, enabling patients to process trauma without re-traumatisation.",
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
    "pathIntro": "Building on initial successes, future research initiatives will broaden the scope of inquiry, refine treatment protocols, and deepen our understanding of ibogaine\u2019s therapeutic mechanisms. This strategic expansion is vital for establishing ibogaine as a widely accepted neurorestorative therapy.",
    "path1Title": "Expanded Clinical Trials",
    "path1Text": "Beyond TBI and PTSD, studies will explore ibogaine\u2019s efficacy in other neurological and psychiatric conditions, including severe depression, anxiety disorders, and neurodegenerative conditions, utilising larger, more diverse cohorts.",
    "path2Title": "Neuroimaging \u0026 Biomarkers",
    "path2Text": "Advanced fMRI, PET scans, and genetic sequencing will uncover the precise neural circuits and biological markers associated with ibogaine\u2019s brain repair effects, paving the way for personalised medicine approaches.",
    "path3Title": "Long-term Efficacy \u0026 Safety",
    "path3Text": "Longitudinal studies tracking patients over several years will provide critical data on sustained therapeutic benefits, relapse prevention, and long-term safety profiles, addressing concerns for chronic conditions.",
    "pathClosing": "These studies will cement Israel\u2019s role as a leader in psychedelic neuroscience, transforming treatment paradigms for a range of complex conditions.",
    "caseLabel": "The Case",
    "caseH2": "Why Israel? Why Now?",
    "case1Title": "The 'Startup Nation' Advantage",
    "case1Text": "Israel is already a global leader in medical cannabis regulation and MDMA-assisted therapy research. The regulatory infrastructure, scientific talent, and institutional appetite are uniquely mature.",
    "case2Title": "An Existential Necessity",
    "case2Text": "With a significant proportion of the civilian workforce and reserve military force impacted by trauma, brain health is national security. An untreated generation represents a compounding threat to Israel's economic productivity, social cohesion, and defensive capacity. The cost of inaction is not abstract. It is strategic.",
    "impLabel": "The Imperative",
    "impH2": "The Window Is Open \u2014 It Will Not Stay Open",
    "impQuote": "\"We are not asking Israel to experiment. We are asking Israel to lead as it has done with cannabis, with trauma medicine, and with every other frontier where necessity met scientific courage.\"",
    "impClosingJoin": "Join us. The nation is ready to heal.",
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
    "disclaimer": "\u26a0\ufe0f This website is for educational and informational purposes only. Ibogaine is a controlled substance in many countries. Nothing here constitutes medical advice. Always consult a qualified physician.",
    "blogLabel": "Latest",
    "blogH2": "Articles \u0026 Insights",
    "post1Tag": "Research",
    "post1Title": "Stanford\u2019s Landmark Study: Ibogaine Reduces PTSD by 88% in Veterans",
    "post1Excerpt": "A peer-reviewed study published in Nature Medicine confirms ibogaine\u2019s extraordinary efficacy for traumatic brain injury and PTSD. Here\u2019s what it means for Israel.",
    "post2Tag": "History",
    "post2Title": "From Gabon to the Clinic: The Remarkable History of Ibogaine",
    "post2Excerpt": "The iboga plant has been sacred to Bwiti communities for centuries. We trace the journey from Central African rainforests to modern psychiatric clinics.",
    "post3Tag": "Israel",
    "post3Title": "October 7 and After: Israel\u2019s Mental Health Crisis Demands Bold Solutions",
    "post3Excerpt": "With 85,000 soldiers receiving psychological treatment and therapist shortages reaching crisis levels, conventional approaches are falling short.",
    "post4Tag": "Parkinson\u2019s",
    "post4Title": "Can Ibogaine Help Parkinson\u2019s Patients? Early Evidence Is Promising",
    "post4Excerpt": "Ibogaine\u2019s ability to stimulate GDNF \u2014 a key neurotrophic factor for dopamine neurons \u2014 is opening new possibilities for neurodegenerative disease treatment.",
    "post5Tag": "Advocacy",
    "post5Title": "Israel Needs Ibogaine: The Case for Fast-Tracking Regulatory Approval",
    "post5Excerpt": "As Texas allocates $50 million for ibogaine clinical trials, Israel must move swiftly to ensure its trauma survivors have access to the world\u2019s most promising new therapy.",
    "post6Tag": "Recovery",
    "post6Title": "Howard Lotsof\u2019s Gift: The Discovery That Changed Everything",
    "post6Excerpt": "In 1962, a 19-year-old heroin addict named Howard Lotsof took ibogaine and woke up free. His life\u2019s work created the global ibogaine treatment movement.",
    "readMore": "Read More \u2192",
    "videosLabel": "Watch \u0026 Learn",
    "videosH2": "Ibogaine in the Media",
    "video1Label": "How Ibogaine Therapy is Changing Lives for Veterans",
    "video2Label": "In Search of Hope: Veterans Turn to Psychedelic Treatment",
    "video3Label": "Ibogaine: Rite of Passage \u2014 Full Documentary"
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
    navContact: 'יצירת קשר',
    langToggle: 'English',

    heroLabel: 'קרן האיבוגאין — ישראל',
    heroH1: 'ריפוי הטראומה, השבת התקווה',
    heroSub: 'אנו פועלים לקידום הטיפול בסיוע איבוגאין כפריצת דרך לטיפול בפוסט-טראומה (PTSD), בפגיעות ראש טראומטיות ובהתמכרויות — בשעה שישראל זקוקה לכך יותר מתמיד.',
    heroCta1: 'למידע נוסף',
    heroCta2: 'הצטרפו אלינו',
    heroBadgeNum: '85,000+',
    heroBadgeText: 'ישראלים המקבלים כיום טיפול בגין טראומה נפשית הקשורה למלחמה',

    statLabel1: 'ירידה בתסמיני PTSD לאחר טיפול באיבוגאין (סטנפורד, 2024)',
    statNum1: '88%',
    statLabel2: 'חיילי צה"ל שקיבלו טיפול ב-PTSD מאז 7.10.23',
    statNum2: '85,000+',
    statLabel3: 'מייסדים מחויבים לשינוי',
    statNum3: '4',
    statLabel4: 'שנות סנגור למען האיבוגאין בישראל',
    statNum4: '35+',

    gardnerVideoLabel: 'ד"ר רקל גרדנר — איבוגאין לפגיעות ראש טראומטיות ו-PTSD',
    gardnerBio: 'ד"ר רקל גרדנר היא נוירולוגית התנהגותית מוסמכת בארה"ב, פרופסור חבר בבית הספר לרפואה של אוניברסיטת תל אביב, ומנהלת המחקר הקליני במרכז מדעי המוח ע"ש יוסף סגול במרכז הרפואי שיבא. מחקריה, הממומנים על ידי ה-NIH ומשרד ההגנה של ארה"ב, מתמקדים בפגיעות ראש טראומטיות, בהזדקנות ובמחלות ניווניות של מערכת העצבים — ומאז 7 באוקטובר גם בפגיעות ראש הקשורות למלחמה בכל רמות החומרה. <a href="https://www.gardnerlab.health/" target="_blank" rel="noopener" style="color:var(--gold);">GardnerLab</a> · <a href="https://eng.sheba.co.il/Raquel-C-Gardner" target="_blank" rel="noopener" style="color:var(--gold);">המרכז הרפואי שיבא</a>',

    foundersLabel: 'הצוות שלנו',
    foundersH2: 'המייסדים',
    founder1Name: 'בועז וכטל',
    founder1Role: 'מייסד שותף ויו"ר פעיל',
    founder1Bio: 'מנהל מחקר קליני מוסמך ובעל תואר שני מאוניברסיטת מרילנד, בועז פועל כמטפל באיבוגאין מאז 1989. הוא שותף לכתיבת "המדריך לטיפול באיבוגאין" עם הווארד לוצוף, טיפל ביותר ממאה מטופלים בהולנד, בפנמה ובישראל, ומייסד שותף של הברית העולמית לטיפול באיבוגאין (GITA). בועז, מחלוצי תוכנית הקנאביס הרפואי הלאומית של ישראל, הקדיש יותר משלושה עשורים לקידום רפואה פסיכדלית מבוססת ראיות בישראל ובעולם.',
    founder2Name: 'אריק מצר',
    founder2Role: 'מייסד שותף ומנהל המחקר',
    founder2Bio: 'מנהיג אסטרטגי בעל מומחיות עמוקה במדעי הבריאות ובחדשנות ביו-רפואית, אריק מביא לקרן מנהיגות ארגונית ומחקרית חיונית. הרקע שלו במדעי החיים, בשילוב עם מחויבות אישית לרפורמה בבריאות הנפש בישראל, מניע את סדר היום המדעי של הקרן ואת השותפויות הקליניות שלה.',
    founder3Name: "ג'ילי רובינשטיין",
    founder3Role: 'מייסדת שותפה ומנהלת קשרי קהילה',
    founder3Bio: "ג'ילי היא פעילה נחושה למען טיפולים בסיוע חומרים פסיכדליים ולנגישות בריאות הנפש בישראל. עם ניסיון נרחב בחינוך בריאותי קהילתי ובעבודת שטח, היא מחברת את משימת הקרן למשפחות, לחיילים ולניצולים הזקוקים לה ביותר. מנהיגותה האמפתית מבטיחה שהסיפור האנושי יעמוד בלב כל פעילות הקרן.",
    founder4Name: "ריאן הייטנר",
    founder4Role: "מייסד שותף ומנהל הטכנולוגיה",
    founder4Bio: "ריאן הייטנר הוא יזם ואיש טכנולוגיה המתמקד בקידום הנגישות לטיפול באיבוגאין עבור סובלים מ-PTSD. מחויבותו לעבודה זו נובעת מעניין ממושך בריפוי פסיכדלי, במדיטציה ובחקר התודעה, לצד רצון עמוק לתמוך באנשים שנפגעו מטראומה. עם רקע טכנולוגי וקשר משפחתי לעולם הרפואה, הוא מביא גישה מחושבת ומונעת-משימה לבניית מודלים חדשים של טיפול אמפתי.",

    blogLabel: 'עדכונים אחרונים',
    blogH2: 'מאמרים ותובנות',
    post1Tag: 'מחקר',
    post1Title: 'מחקר סטנפורד פורץ הדרך: איבוגאין מפחית PTSD ב-88% בקרב ותיקי צבא',
    post1Excerpt: 'מחקר שפורסם ב-Nature Medicine, שנערך בביקורת עמיתים, מאשר את יעילותו יוצאת הדופן של האיבוגאין בטיפול בפגיעות ראש טראומטיות וב-PTSD. מה המשמעות עבור ישראל?',
    post2Tag: 'היסטוריה',
    post2Title: 'מגבון אל הקליניקה: ההיסטוריה המרתקת של האיבוגאין',
    post2Excerpt: 'צמח האיבוגה מקודש בקהילות הבוויטי זה מאות שנים. אנו מתחקים אחר המסע מיערות הגשם של מרכז אפריקה אל הקליניקות הפסיכיאטריות המודרניות.',
    post3Tag: 'ישראל',
    post3Title: '7 באוקטובר ולאחריו: משבר בריאות הנפש בישראל מחייב פתרונות נועזים',
    post3Excerpt: '85,000 חיילים מקבלים טיפול פסיכולוגי, המחסור במטפלים מגיע לממדי משבר, והגישות המסורתיות אינן מספקות עוד מענה.',
    post4Tag: "פרקינסון",
    post4Title: "האם איבוגאין יכול לסייע לחולי פרקינסון? עדויות ראשוניות מבטיחות",
    post4Excerpt: 'יכולתו של האיבוגאין לעורר הפרשת GDNF — גורם נוירוטרופי מרכזי עבור נוירונים דופמינרגיים — פותחת אפשרויות חדשות לטיפול במחלות ניווניות.',
    post5Tag: 'סנגור',
    post5Title: 'ישראל זקוקה לאיבוגאין: הנימוק להאצת האישור הרגולטורי',
    post5Excerpt: 'בעוד טקסס מקצה 50 מיליון דולר למחקרים קליניים באיבוגאין, על ישראל לפעול במהירות כדי להבטיח גישה לניצולי הטראומה שלה לטיפול המבטיח ביותר שפותח בשנים האחרונות.',
    post6Tag: 'החלמה',
    post6Title: 'המתנה של הווארד לוצוף: הגילוי ששינה הכול',
    post6Excerpt: 'ב-1962, נער בן 19 מכור להרואין בשם הווארד לוצוף נטל איבוגאין והתעורר חופשי מההתמכרות. מפעל חייו הוליד את תנועת הטיפול העולמית באיבוגאין.',
    readMore: 'להמשך קריאה ←',

    videosLabel: 'לצפייה וללמידה',
    videosH2: 'איבוגאין בתקשורת',
    video1Label: 'כיצד טיפול באיבוגאין משנה חיים של ותיקי צבא',
    video2Label: 'בחיפוש אחר תקווה: ותיקים פונים לטיפול פסיכדלי',
    video3Label: 'איבוגאין: טקס מעבר — סרט תיעודי מלא',

    contactLabel: 'פנו אלינו',
    contactH2: 'צרו קשר עם הקרן',
    contactP: 'בין אם אתם מטופלים המחפשים מידע, חוקרים המתעניינים בשיתוף פעולה, אנשי תקשורת או פשוט מי שרוצה לתרום ולהיות שותפים לדרך — נשמח לשמוע מכם.',
    formName: 'שם מלא',
    formEmail: 'כתובת דוא"ל',
    formPhone: 'טלפון (לא חובה)',
    formSubject: 'נושא',
    formSubjectOpt1: 'אני מטופל / בן משפחה המחפש עזרה',
    formSubjectOpt2: 'פנייה לשיתוף פעולה מחקרי',
    formSubjectOpt3: 'פנייה תקשורתית / עיתונאית',
    formSubjectOpt4: 'תרומה / חסות',
    formSubjectOpt5: 'התנדבות',
    formSubjectOpt6: 'אחר',
    formMessage: 'הודעה',
    formSubmit: 'שליחת הודעה',
    formSuccess: '✓ תודה! ניצור איתכם קשר בקרוב.',
    contactEmail: 'JillyRubenstein@gmail.com',
    contactCity: 'תל אביב, ישראל',

    missionLabel: 'המשימה',
    missionH2: 'הכרח לאומי לחוסן, להתאוששות ולתיקון המוח',
    missionP1: 'מטרתה של "ישראלים לאיבוגאין" היא לקדם הבנה ציבורית וגישה רפואית אחראית לאיבוגאין לטיפול בפוסט-טראומה (PTSD), בפגיעות ראש טראומטיות, בהתמכרויות ובמצבי בריאות נפש נלווים.',
    missionP2: 'אנו מקדמים מחקר מדעי, נלחמים בסטיגמה ומחנכים את הציבור, במטרה להאיץ אימוץ בטוח ומבוסס-ראיות של הטיפול באיבוגאין — ולהשיב לאומה את בריאותה הקוגניטיבית והרגשית באמצעות התחדשות עצבית, מוח אחד בכל פעם.',
    missionBadge1: 'עמותה רשומה',
    missionBadge2: 'מחקר קליני',
    missionBadge3: 'תמיכה דו-לשונית',
    missionBadge4: 'מבוסס ראיות',
    missionNum: '35+ שנה',
    missionNumLabel: 'ניסיון מצטבר באיבוגאין',

    crisisLabel: 'המשבר',
    crisisH2: 'מצב חירום נפשי בהיקף היסטורי',
    crisisIntro: 'מאז 7 באוקטובר והלחימה האזורית שבאה בעקבותיו, ישראל נכנסה למשבר בריאות נפש חסר תקדים. היקף הפציעות הנפשיות והנוירולוגיות מאיים כיום לא רק על יחידים ומשפחות, אלא על חוסנה של האומה לטווח ארוך, על כושר העבודה במשק ועל הרקמה החברתית.',
    crisisStat1Num: '3M+',
    crisisStat1Label: 'ישראלים מושפעים — אזרחים הסובלים כיום מ-PTSD, מחרדה או מדיכאון קליני',
    crisisStat2Num: '40%',
    crisisStat2Label: 'שיעור הנטישה בקרב מטופלי טראומה המפסיקים פרוטוקולים של SSRI וטיפול בשיחה בתוך 12 חודשים',
    crisisStat3Num: '1/3',
    crisisStat3Label: 'מכוחות הלוחמה של צה"ל החוזרים משירות פעיל מגלים סימנים של PTSD עמיד לטיפול או של פגיעת ראש טראומטית',

    problemLabel: 'הבעיה',
    problemH2: 'ארבעה ממדים של משבר ללא מענה',
    problem1Title: '🧠 גל הטראומה',
    problem1Text: 'למעלה מ-3 מיליון ישראלים מגלים תסמינים. ניצולים אזרחיים, משתתפי "נובה", משפחות מפונות וחיילי מילואים מציפים מערכת בריאות נפש עמוסה ממילא, שאינה ערוכה להיקף או לחומרה כאלה.',
    problem2Title: '💥 מגפת פגיעות הראש (TBI)',
    problem2Text: 'פציעות הדף בלחימה המודרנית יוצרות גל של פגיעות ראש טראומטיות בקרב לוחמי צה"ל — לעיתים קרובות בצד PTSD עמיד לטיפול — ומולידות משבר אבחנה כפולה שהטיפול הסטנדרטי אינו יכול להתמודד עמו.',
    problem3Title: '💊 כישלון המצב הקיים',
    problem3Text: 'תרופות SSRI וטיפולים מבוססי שיחה סובלים משיעורי נטישה גבוהים ומיעילות מוגבלת בטראומה קשה ובהתמכרות כרונית. המטופלים נותרים בדלת מסתובבת של טיפול חלקי, הישנות והחמרה.',
    problem4Title: '🔬 צוואר הבקבוק הביולוגי',
    problem4Text: 'ניוון עצבי ואובדן גמישות סינפטית אצל קורבנות טראומה מונעים מטיפולים הקונבנציונליים "להיקלט". ללא התייחסות לתשתית הנוירולוגית, ההתערבויות הפסיכולוגיות נכשלות ברמה התאית.',

    scienceLabel: 'המדע',
    scienceH2: 'איבוגאין: זרז לתיקון נוירולוגי אמיתי',
    scienceIntro1: '<strong>מדוע איבוגאין שונה:</strong> איבוגאין אינו חומר פסיכדלי לשימוש פנאי. זהו אוניירוגן — תרכובת המשרה מצב דמוי-חלום המופקת משיח ה-Tabernanthe iboga ממערב אפריקה, ומפעילה מנגנוני תיקון נוירולוגיים עמוקים שאינם מצויים באף חומר או טיפול אחר המוכר כיום.',
    scienceIntro2: 'מחקר MISTIC של סטנפורד הדגים הפחתה דרמטית בתסמיני PTSD ו-TBI בעקבות מפגש אחד או שניים בלבד — תוצאות שאין להן אח ורע בספרות הפסיכיאטרית הקונבנציונלית.',
    scienceMech1Title: 'שחרור GDNF',
    scienceMech1Text: 'האיבוגאין מגביר את רמות הגורם הנוירוטרופי המופרש מתאי גליה (GDNF), המתקן פיזית מסלולי חומר לבן ובונה מחדש נתיבים עצביים פגועים — הבסיס הביולוגי להתאוששות מטראומה.',
    scienceMech2Title: 'איפוס מערכת הדופמין',
    scienceMech2Text: 'האיבוגאין מאפס את מערכת הגמול, מפסיק תלות באופיואידים, באלכוהול ובניקוטין, ופותח "חלון ביולוגי" קריטי לגמילה ארוכת-טווח.',
    scienceMech3Title: 'רמיסיה מהירה',
    scienceMech3Text: 'עדויות קליניות מאשרות הפחתה משמעותית ובת-קיימא של תסמיני PTSD ו-TBI במספר מצומצם של מפגשים, וכך מפחיתות את הנטל על המטופלים ועל עלויות המערכת.',

    solutionLabel: 'הפתרון',
    solutionH2: 'תיקון המוח מבפנים החוצה',
    solutionIntro: 'מנגנון הפעולה של האיבוגאין שונה מהותית מכל תרופה פסיכיאטרית מאושרת. בפעולה ישירה על מסלול הנוירוטרופינים, הוא מתייחס ל<strong>תשתית הביולוגית של הטראומה</strong>, ולא רק לתסמיניה. בעוד SSRI מווסת מצב רוח, האיבוגאין בונה מחדש את ארכיטקטורת הנפש.',
    solution1Title: 'ב-PTSD',
    solution1Text: 'משבש את מחזור ההטמעה ההיפר-אקטיבי של זיכרון הפחד ומאפשר למטופלים לעבד את הטראומה ללא טראומה מחודשת.',
    solution2Title: 'ב-TBI',
    solution2Text: 'מקדם התחדשות אקסונלית ותיקון מעטפת המיאלין באמצעות GDNF, ומשיב תפקוד קוגניטיבי שאבד בעקבות פגיעות הדף וחבלות זעזוע.',
    solution3Title: 'בהתמכרות',
    solution3Text: 'מבטל תסמיני גמילה חריפים ומאפס את מסלולי הדחף, וכך מספק לוח נוירולוגי נקי לתוכניות החלמה ארוכות טווח.',

    mandateLabel: 'המנדט',
    mandateH2: 'ארבעה עמודי פעולה',
    mandateIntro: '"ישראלים לאיבוגאין" פועלת לאורך ארבעה עמודים אסטרטגיים המחזקים זה את זה — מהעלאת מודעות ציבורית ועד רפורמה במדיניות — המרכיבים יחד מסגרת מקיפה לסנגור ולמחקר ברמה הלאומית.',
    mandate1Title: 'חינוך הציבור',
    mandate1Text: 'קמפיינים רב-ערוציים להסרת הסטיגמה מהאיבוגאין, להבחנה ברורה בינו לבין חומרים לשימוש פנאי ולמיצובו ככלי רפואי ייעודי.',
    mandate2Title: 'ניסויים קליניים',
    mandate2Text: 'קידום וסיוע במימון ניסויים בשלבים II/III בבתי חולים בישראל, ובהם איכילוב ושיבא.',
    mandate3Title: 'מחקר אקדמי וביוסינתטי',
    mandate3Text: 'תמיכה במכון ויצמן ובבית הספר לנוירו-מדע ע"ש סגול באוניברסיטת תל אביב, לשם חקר הביוסינתזה של האיבוגאין.',
    mandate4Title: 'מדיניות ובטיחות גלובלית',
    mandate4Text: 'פעילות שדולה מול משרד הבריאות לקבלת מעמד "טיפול בחמלה" וקביעת פרוטוקול "תקן זהב" לגישה בטוחה.',

    ecoLabel: 'מערכת אקולוגית',
    ecoH2: 'מטריית איבוגאין ישראל',
    ecoIntro: '"איבוגאין ישראל" מתוכננת לתפקד כ<strong>צומת המחברת המרכזית</strong> של מערכת אקולוגית לאומית רחבה, ומגשרת בין האקדמיה, מערכת הבריאות, החברה האזרחית והביוטכנולוגיה.',
    eco1Title: 'מחקר ומדיניות',
    eco1Text: 'מחקר ביוסינתטי, פרוטוקולי טיפול בחמלה ותקן זהב',
    eco2Title: 'ניסויים קליניים',
    eco2Text: 'ניסויים בשלבים II/III באיכילוב ובשיבא לבחינת בטיחות ויעילות',
    eco3Title: 'משימת הליבה',
    eco3Text: 'מרכז לאומי לרפורמה בבריאות המוח המבוססת על איבוגאין',

    legalLabel: 'אסטרטגיה משפטית',
    legalH2: 'מסלול רגולטורי ברור',
    legalTaxTitle: 'מבנה משפטי ומיסוי',
    legalTaxText: '"איבוגאין ישראל" רשומה כ<strong>עמותה</strong> רשמית ברשם העמותות במשרד המשפטים, ופועלת במרץ לקבלת <strong>מעמד סעיף 46</strong> שיאפשר תרומות פילנתרופיות הזכאיות להטבת מס מלאה.',
    legal1Title: '1. סיווג מחדש של האיבוגאין',
    legal1Text: 'מעבר מסיווג "סם מסוכן" (תוספת 1) ל"חומר רפואי מבוקר" שיאפשר שימוש קליני וטיפול בחמלה בפיקוח, במסגרות מורשות.',
    legal2Title: '2. תוכנית פיילוט לאומית',
    legal2Text: 'קידום "פיילוט איבוגאין לאומי" בחסות הממשלה, המכוון במיוחד ללוחמי צה"ל ולניצולי טבח פסטיבל נובה.',
    legal3Title: '3. מעמד טיפול בחמלה',
    legal3Text: 'קידום מסלול אישור מזורז של משרד הבריאות למטופלים קשים ועמידי-טיפול, במקביל לאיסוף מלוא נתוני הניסויים.',

    orgLabel: 'ארגון',
    orgH2: 'מבנה תפעולי ותקציב לשנה הראשונה',
    orgIntro: 'תקציב רזה וממוקד-משימה, הבנוי סביב 5 עמודי תפעול מרכזיים. סך התקורה התפעולית הצפויה לשנה הראשונה: <strong>1,000,000 ₪</strong>.',

    projLabel: 'פרויקטים 2026–2027',
    projH2: 'יוזמות מרכזיות: מחזון לראיות',
    proj1Title: 'פרויקט "מוח פלדה"',
    proj1Text: 'מחקר תצפיתי ממומן על <strong>50 ותיקי צה"ל</strong> עם TBI ו-PTSD במקביל, תוך שימוש בפרוטוקול מגנזיום-איבוגאין, במטרה ליצור את מאגר הנתונים הקליניים הישראלי הראשון בתחום.',
    proj2Title: 'רשם האיבוגאין',
    proj2Text: 'מסד נתונים מאובטח ואנונימי המתעד תוצאות בריאותיות של ישראלים שפנו לטיפול באיבוגאין בחו"ל.',
    proj3Title: 'מעגל התמיכה בניצולים',
    proj3Text: 'בניית רשת לאומית המחברת את ניצולי טבח "נובה", משפחות מפונות וקהילות שכולות אל מסלולי טיפול בסיוע איבוגאין.',
    proj4Title: 'קרן לסבסוד מטופלים',
    proj4Text: 'תוכנית סיוע כספית המעניקה מענקים וסבסוד לישראלים שאין ביכולתם לממן את הטיפול. מענקים הנקבעים לפי מבחן אמצעים, עם עדיפות לוותיקי צבא ולניצולי "נובה".',

    pathLabel: 'הדרך קדימה',
    pathH2: 'פריצת הדרך למחקר האיבוגאין הבא',
    pathIntro: 'בהסתמך על הצלחות ראשוניות, יוזמות המחקר העתידיות ירחיבו את תחום החקירה, ישכללו את פרוטוקולי הטיפול ויעמיקו את הבנתנו את המנגנונים הטיפוליים של האיבוגאין. הרחבה אסטרטגית זו חיונית לביסוס האיבוגאין כטיפול נוירו-רסטורטיבי מקובל.',
    path1Title: 'הרחבת הניסויים הקליניים',
    path1Text: 'מעבר ל-TBI ול-PTSD, מחקרים יבחנו את יעילות האיבוגאין במצבים נוירולוגיים ופסיכיאטריים נוספים, ובכללם דיכאון קשה, הפרעות חרדה ומחלות ניווניות, באמצעות קבוצות מחקר גדולות ומגוונות יותר.',
    path2Title: 'הדמיה עצבית וסמנים ביולוגיים',
    path2Text: 'טכנולוגיות fMRI מתקדמות, סריקות PET וריצוף גנטי יחשפו את מעגלי העצב המדויקים ואת הסמנים הביולוגיים הקשורים להשפעות האיבוגאין על תיקון המוח — ויסללו את הדרך לרפואה מותאמת אישית.',
    path3Title: 'יעילות ובטיחות לטווח ארוך',
    path3Text: 'מחקרים אורכיים שיעקבו אחר מטופלים לאורך מספר שנים יספקו נתונים קריטיים על יתרונות טיפוליים מתמשכים, מניעת הישנות ופרופילי בטיחות ארוכי-טווח.',
    pathClosing: 'מחקרים אלה יבססו את מעמדה של ישראל כמובילה במדעי המוח הפסיכדליים, וישנו את פרדיגמות הטיפול במגוון רחב של מצבים מורכבים.',

    caseLabel: 'הנימוק',
    caseH2: 'מדוע ישראל? מדוע עכשיו?',
    case1Title: 'יתרון "אומת הסטארט-אפ"',
    case1Text: 'ישראל כבר ניצבת בחזית העולמית ברגולציה של קנאביס רפואי ובמחקר של טיפול בסיוע MDMA. התשתית הרגולטורית, כוח האדם המדעי והנכונות המוסדית בשלים באופן ייחודי.',
    case2Title: 'הכרח קיומי',
    case2Text: 'כאשר חלק ניכר מכוח העבודה האזרחי וממערך המילואים הצבאי פגוע בטראומה, בריאות המוח היא עניין של ביטחון לאומי. דור ללא טיפול הוא איום מצטבר על הפריון הכלכלי של ישראל, על הלכידות החברתית ועל היכולת ההגנתית. עלות חוסר המעש אינה עניין מופשט — היא אסטרטגית.',

    impLabel: 'ההכרח',
    impH2: 'החלון פתוח — והוא לא יישאר פתוח לנצח',
    impQuote: '"אנחנו לא מבקשים מישראל להתנסות. אנחנו מבקשים מישראל להוביל — כפי שהובילה עם הקנאביס הרפואי, עם רפואת הטראומה, ועם כל גבול אחר שבו הצורך פגש באומץ מדעי."',
    impClosingJoin: 'הצטרפו אלינו. האומה מוכנה להחלים.',
    imp1Title: 'למקבלי ההחלטות',
    imp1Text: 'המדע מוצק, התקדים ברור, ואוכלוסיית המטופלים ממתינה.',
    imp2Title: 'לפילנתרופים',
    imp2Text: 'השקעתכם מממנת מסלול רגולטורי, תשתית נתונים ישראלית ושרשרת אספקה ביוסינתטית שישרתו מטופלים בישראל למשך עשורים.',
    imp3Title: 'למובילי מערכת הבריאות',
    imp3Text: 'הטיפול הסטנדרטי מאכזב. "איבוגאין ישראל" מציעה מסלול מובנה, מבוסס ראיות ובטיחותי לשילוב אחראי ודחוף של התערבות מוכחת.',

    impactLabel: 'עדויות',
    impactH2: 'קולות ההחלמה',
    impact1Quote: '"קיבלתי את חיי בחזרה. אחרי שנים של סיוטי לילה ובידוד חברתי, האיבוגאין עזר לי להתחבר מחדש למשפחתי. זה הרגיש כאילו המוח שלי חובר מחדש, ניקה את הרעש ברקע."',
    impact1Author: '— לוחם קומנדו לשעבר בצה"ל (PTSD)',
    impact2Quote: '"המשקל הוסר מעליי. נשאתי עול כבד כל כך. האיבוגאין נתן לי הזדמנות לעבד את מה שלא ניתן להביע במילים, למצוא שלווה. זה כפתור איפוס עמוק לנשמה."',
    impact2Author: '— ניצולת פסטיבל "נובה" (טראומה מורכבת)',
    impact3Quote: '"מסלול לריפוי. בהתמודדות עם שחיקה מקצועית ועם תלות שהתחזקה, האיבוגאין היה ההתערבות שנזקקתי לה נואשות. הוא טיפל בשורש הבעיה והציע תיקון מוח אמיתי."',
    impact3Author: '— איש מקצוע מתחום הבריאות (שחיקה והתמכרות)',

    researchLabel: 'מחקר',
    researchH2: 'מחקרי מפתח: איבוגאין בקרב ותיקי צבא',
    research1Title: 'טיפול מגנזיום-איבוגאין בוותיקי צבא עם פגיעות ראש טראומטיות',
    research1Meta: 'כתב עת: Nature Medicine (2024)',
    research1Text: 'מחקר סטנפורד פורץ הדרך בחן את פרוטוקול המגנזיום-איבוגאין (MISTIC) בוותיקי צבא עם TBI ו-PTSD במקביל, וסיפק עדויות מכריעות לפוטנציאל הנוירו-רסטורטיבי של האיבוגאין.',
    research2Title: 'מתאמים עצביים של האיבוגאין: עדויות מהדמיה עצבית פונקציונלית',
    research2Meta: 'כתב עת: Biological Psychiatry (2026)',
    research2Text: 'מחקר fMRI של סטנפורד, שנערך על 30 ותיקי יחידות מיוחדות, מצא כי האיבוגאין מניע ארגון מוחי מחדש בקנה מידה רחב, הקשור בשיפור הנכות הנובעת מ-TBI.',
    research3Title: 'חומרים פסיכדליים לניהול תסמיני פגיעת ראש טראומטית',
    research3Meta: 'כתב עת: PNPBP (2026)',
    research3Text: 'סקר בינלאומי בגישה פתוחה בחן את השימוש בחומרים פסיכדליים לניהול תסמיני TBI באוכלוסייה גלובלית רחבה, וסיפק עדויות מהעולם האמיתי.',

    footerDesc: 'קרן האיבוגאין של ישראל היא עמותה ללא מטרות רווח הפועלת לקידום טיפול בסיוע איבוגאין לטיפול ב-PTSD, בפגיעות ראש טראומטיות, בהתמכרויות ובמצבים נוירולוגיים. אנו תומכים במדיניות מבוססת ראיות, בנגישות קלינית ובחינוך הציבור.',
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
    disclaimer: '⚠️ אתר זה מיועד למטרות חינוכיות ומידעיות בלבד! איבוגאין הוא חומר מבוקר במדינות רבות. אין באמור באתר זה משום ייעוץ רפואי. יש להתייעץ תמיד עם רופא מוסמך.',
  }

};

// ---- State ---- //
let currentLang = 'en';

// ---- Render ---- //
function applyLang(lang) {
  const scrollY = window.scrollY;
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

  // Swap blog card hrefs between EN and HE versions
  document.querySelectorAll('[data-href-en][data-href-he]').forEach(el => {
    el.href = lang === 'he' ? el.getAttribute('data-href-he') : el.getAttribute('data-href-en');
  });

  localStorage.setItem('iboLang', lang);
  window.scrollTo({ top: scrollY, behavior: 'instant' });
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
