// ============================================================
//  IBOGAINE ISRAEL FOUNDATION — MAIN JS
// ============================================================

// ---- Language Data ---- //
const LANG = {
  en: {
    "skipLink": "Skip to main content",
    "navHome": "Home",
    "navPetition": "Sign Petition",
    "navAbout": "About",
    "navIbogaine": "Ibogaine",
    "navResearch": "Research",
    "navIsrael": "Israel",
    "navFounders": "Our Team",
    "navBlog": "Blog",
    "navContact": "Contact",
    "langToggle": "\u05e2\u05d1\u05e8\u05d9\u05ea",
    "heroLabel": "The Ibogaine Foundation \u2014 Israel",
    "heroH1": "Healing Trauma, Restoring Hope",
    "heroSub": "Championing ibogaine-assisted therapy as a breakthrough treatment for PTSD, traumatic brain injury, and addiction \u2014 when Israel needs it most.",
    "heroCta1": "Learn More",
    "heroCtaPetition": "Sign the Petition",
    "heroCta2": "Get Involved",
    "heroBadgeNum": "85,000+",
    "heroBadgeText": "Israelis currently receiving treatment for war-related psychological trauma",
    "statLabel1": "Reduction in PTSD symptoms after ibogaine treatment (Stanford, 2024)",
    "statNum1": "88%",
    "statLabel2": "IDF soldiers treated for PTSD since Oct. 7, 2023",
    "statNum2": "85,000+",
    "statLabel3": "Team members dedicated to change",
    "statNum3": "3",
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
    "legalTaxText": "Ibogaine Israel is registered as a formal <strong>Amuta</strong> (Non-Profit Association) under the Israeli Ministry of Justice. We are not currently accepting donations; any future fundraising and tax treatment will be announced once formally established.",
    "legal1Title": "1. Reclassify Ibogaine",
    "legal1Text": "Transitioning from Schedule 1 to 'Controlled Medical Substance' enabling supervised clinical and compassionate use within licensed facilities.",
    "legal2Title": "2. National Pilot Programme",
    "legal2Text": "Advocating for a government-sanctioned 'National Ibogaine Pilot' specifically targeting combat veterans and Nova massacre survivors.",
    "legal3Title": "3. Compassionate Use Status",
    "legal3Text": "Fast-tracking MoH approval for severe, treatment-resistant patients while full trial data is compiled.",
    "legalEntityTitle": "Legal Entity",
    "legalEntityNameHeLabel": "Official Name (Hebrew):",
    "legalEntityNameEnLabel": "Official Name (English):",
    "legalEntityRegNoLabel": "Registration Number:",
    "legalEntityAuthorityLabel": "Registered Authority:",
    "legalEntityAuthorityValue": "Israeli Registrar of Associations (Rasham Ha\u2019Amutot)",
    "legalBrandNotice": "The website brand name may differ from the legal registered entity name. All operations, activities, and services are conducted under the registered amutah listed above.",
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
    "proj4Title": "Planned Patient Subsidy Fund",
    "proj4Text": "A planned financial assistance programme that may provide grants and subsidies to Israelis who cannot afford treatment. Any launch, eligibility rules, and funding details will be announced separately.",
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
    "imp2Title": "For Future Partners",
    "imp2Text": "Future partners can help build a regulatory pathway, domestic data infrastructure, and a biosynthetic supply chain intended to serve Israeli patients for decades.",
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
    "foundersH2": "Our Team",
    "founder1Name": "Yonatan Zairi",
    "founder1Role": "CEO",
    "founder1Bio": "Yonatan serves as the CEO of Israelis for Ibogaine, bringing extensive expertise in clinical research and psychedelic therapy to the organization's leadership. With a foundation in Psychology from Reichman University, he has led pivotal research initiatives as a clinical trial manager overseeing breakthrough psilocybin and MDMA therapy studies. His background includes conducting specialized fMRI studies on NOVA festival survivors within a neuroscience laboratory at the Weizmann Institute of Science, deepening the clinical understanding of trauma and neuropharmacology. Additionally, Yonatan bridges the gap between scientific innovation and strategic development through his advisory work at the NEGEV fund, positioning him at the forefront of advancing novel therapeutic frameworks in Israel.",
    "founder2Name": "Jonathan Sinyor",
    "founder2Role": "Deputy CEO",
    "founder2Bio": "Jonathan Sinyor is Deputy CEO of Israelis for Ibogaine. Originally from the UK and now based in Tel Aviv, he was part of the founding team that built a startup from formation through Series A, and has experience investing in the psychedelics space at an investment fund. He has organised educational events for mental health professionals working with emerging therapies and research and is a member of the Psychedelic Action Task Force, which lobbies the UK government for regulatory reform.",
    "founder3Name": "Ryan Heitner",
    "founder3Role": "Technology & Advocacy",
    "founder3Bio": "A technologist with 35 years building and leading across continents, Ryan has shipped technology in organizations of every size and shape — startups to enterprises, spanning sectors from healthcare to consumer tech. His international career has given him a rare fluency in turning complex ideas into things that actually work. He is driven by a deep conviction in the healing power of psychedelics and a long-standing personal commitment to meditation and inner work. He is unafraid to challenge the status quo on access to ibogaine for those who need it most.",
    "contactLabel": "Reach Out",
    "contactH2": "Contact the Foundation",
    "contactP": "Whether you are a patient seeking information, a researcher interested in collaboration, a journalist, or someone who simply wants to get involved \u2014 we want to hear from you.",
    "contactDonationNotice": "We are not currently accepting donations. Please contact us about research, advocacy, volunteering, or future partnership opportunities.",
    "formName": "Full Name",
    "formEmail": "Email Address",
    "formPhone": "Phone (optional)",
    "formSubject": "Subject",
    "formSubjectOpt1": "I am a patient / family member seeking help",
    "formSubjectOpt2": "Research collaboration inquiry",
    "formSubjectOpt3": "Media / Press inquiry",
    "formSubjectOpt4": "Future partnership / support",
    "formSubjectOpt5": "Volunteer",
    "formSubjectOpt6": "Other",
    "formMessage": "Message",
    "formSubmit": "Send Message",
    "formSuccess": "\u2713 Thank you! We will be in touch soon.",
    "contactEmail": "info@israelisforibogaine.org",
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
    "footerSocial": "Social",
    "footerXLink": "X (Twitter)",
    "footerLinkedIn": "LinkedIn",
    "footerFacebook": "Facebook",
    "footerCopy": "\u00a9 2026 Ibogaine Foundation of Israel. All rights reserved.",
    "footerLegalEntity": "This website is operated by Iboga Bush (R.A.) / \u05e1\u05e0\u05d4 \u05d0\u05d9\u05d1\u05d5\u05d2\u05d4 (\u05e2\u201d\u05e8), Israeli nonprofit registration no. 580841922.",
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
    "post7Tag": "Breaking News",
    "post7Title": "Historic Executive Order: Federal Ibogaine Research for Veterans",
    "post7Excerpt": "President Trump signs landmark directive directing $50M+ in federal funding to accelerate ibogaine clinical development for veterans with PTSD and TBI.",
    "post8Tag": "Press",
    "post8Title": "Ibogaine \u2014 The Deadly Psychedelic That May Beat Addiction",
    "post8Excerpt": "Ynet\u2019s Dr. Roy Zucker examines ibogaine\u2019s extraordinary promise for addiction and PTSD \u2014 and the cardiac risks and regulatory hurdles that keep Big Pharma at bay. Plus: the Israeli firm PsyRx taking a safer microdose path.",
    "readMore": "Read More \u2192",
    "navMedia": "Media",
    "mediaLabel": "Watch \u0026 Listen",
    "mediaH2": "Media \u0026 Resources",
    "mediaIntro": "Explore curated podcasts, interviews, and videos about ibogaine from leading experts, advocates, and survivors.",
    "podcastsTitle": "Podcasts \u0026 Interviews",
    "videosTitle": "Videos \u0026 Presentations",
    "listenNow": "Listen Now",
    "featuredExpertTitle": "Featured Expert",
    "classicVideosTitle": "More Videos",
    "video1Label": "How Ibogaine Therapy is Changing Lives for Veterans",
    "video2Label": "Veterans Turn to Psychedelic Treatment",
    "video3Label": "Ibogaine: Rite of Passage — Full Documentary",
    "enPodcast1Title": "The Joe Rogan Experience #2477 - Rick Perry \u0026 W. Bryan Hubbard",
    "enPodcast1Desc": "Former U.S. Secretary of Energy Rick Perry and Americans for Ibogaine CEO W. Bryan Hubbard discuss policy, veteran access, and the legislative push for ibogaine clinical research.",
    "enPodcast2Title": "The Aubrey Marcus Podcast - W. Bryan Hubbard \u0026 Robert Gallery",
    "enPodcast2Desc": "A deep-dive conversation exploring the growing awareness of ibogaine, featuring advocacy insights and the personal healing journey of former NFL player Robert Gallery.",
    "enVideo1Title": "SXSW 2026 - Ibogaine in America: The Parable of Our Time",
    "enVideo1Desc": "A featured panel from South by Southwest (SXSW) exploring ibogaine's transition from the underground to a highly researched clinical tool for addressing modern mental health crises.",
    "enVideo1PlayHint": "Full session recording",
    "enVideo2PlayHint": "Full ACS Media segment",
    "enVideo2Title": "ACS Media - Ibogaine Saved Retired NFL Player Robert Gallery's Life",
    "enVideo2Desc": "A powerful short feature profiling former NFL offensive lineman Robert Gallery, his struggle with the long-term effects of repeated head trauma (TBI), and his recovery following ibogaine treatment.",
    "enVideo3Title": "Boaz Wachtel — Ibogaine: The Sacred Molecule of West Africa",
    "enVideo3Desc": "Israeli policy pioneer and ibogaine advocate Boaz Wachtel on iboga\u2019s traditional roots, decades of clinical experience with addiction interruption, and the push for evidence-based access and research.",
    "enVideo4TitleHtml": "Boaz Wachtel on Keshet 12 \u2014 \u201cAvri &amp; Sherki Plus\u201d <span class=\"lang-badge\">Hebrew</span>",
    "enVideo4DescHtml": "In-depth late-night interview with foundation co-founder Boaz Wachtel on Israel\u2019s mainstream Channel 12, with hosts Avri Gilad and Yaakov Sharki \u2014 covering ibogaine as a potential breakthrough for PTSD, traumatic brain injury and addiction, and the push for research and access in Israel. <strong>Interview is in Hebrew.</strong>",
    "enVideo4PlayCta": "Watch on mako VOD \u2192",
    "enVideo4PlayHint": "Keshet 12 \u00b7 Avri &amp; Sherki Plus \u00b7 25.5.26 \u00b7 Hebrew",
    "breakingNewsTitle": "Historic Executive Order Prioritizes Ibogaine Research",
    "breakingNewsText": "President Trump signs landmark directive directing $50M+ in federal funding to accelerate ibogaine clinical development for veterans with PTSD and TBI.",
    "breakingNewsHebrew": "",
    "breakingNewsCta": "Read Full Article \u2192",
    "footerSocial": "Social",
    "footerXLink": "X (Twitter)",
    "contactPrivacyNoteHtml": "Your information is handled in accordance with our <a href=\"legal.html#privacy\" data-href-en=\"legal.html#privacy\" data-href-he=\"legal-he.html#privacy\" style=\"color:var(--green-mid);text-decoration:underline;\">Privacy Policy</a>."
},
    he: {
    dir: 'rtl',
    skipLink: 'דלג לתוכן הראשי',
    navHome: 'בית',
    navPetition: 'חתמו על העצומה',
    navAbout: 'אודות',
    navIbogaine: 'איבוגאין',
    navResearch: 'מחקר',
    navIsrael: 'ישראל',
    navFounders: 'הצוות שלנו',
    navBlog: 'בלוג',
    navContact: 'יצירת קשר',
    langToggle: 'English',

    heroLabel: 'קרן האיבוגאין — ישראל',
    heroH1: 'ריפוי הטראומה, השבת התקווה',
    heroSub: 'אנו פועלים לקידום הטיפול בסיוע איבוגאין כפריצת דרך לטיפול בפוסט-טראומה (PTSD), בפגיעות ראש טראומטיות ובהתמכרויות — בשעה שישראל זקוקה לכך יותר מתמיד.',
    heroCta1: 'למידע נוסף',
    heroCtaPetition: 'חתמו על העצומה',
    heroCta2: 'הצטרפו אלינו',
    heroBadgeNum: '85,000+',
    heroBadgeText: 'ישראלים המקבלים כיום טיפול בגין טראומה נפשית הקשורה למלחמה',

    statLabel1: 'ירידה בתסמיני PTSD לאחר טיפול באיבוגאין (סטנפורד, 2024)',
    statNum1: '88%',
    statLabel2: 'חיילי צה"ל שקיבלו טיפול ב-PTSD מאז 7.10.23',
    statNum2: '85,000+',
    statLabel3: 'חברי צוות מחויבים לשינוי',
    statNum3: '3',
    statLabel4: 'שנות סנגור למען האיבוגאין בישראל',
    statNum4: '35+',

    gardnerVideoLabel: 'ד"ר רקל גרדנר — איבוגאין לפגיעות ראש טראומטיות ו-PTSD',
    gardnerBio: 'ד"ר רקל גרדנר היא נוירולוגית התנהגותית מוסמכת בארה"ב, פרופסור חבר בבית הספר לרפואה של אוניברסיטת תל אביב, ומנהלת המחקר הקליני במרכז מדעי המוח ע"ש יוסף סגול במרכז הרפואי שיבא. מחקריה, הממומנים על ידי ה-NIH ומשרד ההגנה של ארה"ב, מתמקדים בפגיעות ראש טראומטיות, בהזדקנות ובמחלות ניווניות של מערכת העצבים — ומאז 7 באוקטובר גם בפגיעות ראש הקשורות למלחמה בכל רמות החומרה. <a href="https://www.gardnerlab.health/" target="_blank" rel="noopener" style="color:var(--gold);">GardnerLab</a> · <a href="https://eng.sheba.co.il/Raquel-C-Gardner" target="_blank" rel="noopener" style="color:var(--gold);">המרכז הרפואי שיבא</a>',

    foundersLabel: 'הצוות שלנו',
    foundersH2: 'הצוות שלנו',
    founder1Name: 'יונתן זאירי',
    founder1Role: 'מנכ"ל',
    founder1Bio: 'יונתן מכהן כמנכ"ל ישראלים למען איבוגאין, ומביא לצוות ההנהגה מומחיות נרחבת במחקר קליני ובטיפול פסיכדלי. עם רקע בפסיכולוגיה מאוניברסיטת רייכמן, הוא הוביל יוזמות מחקר מכוננות כמנהל ניסויים קליניים בניסויים פורצי דרך בטיפול בפסילוסיבין וב-MDMA. ניסיונו כולל ביצוע מחקרי fMRI ייעודיים על ניצולי פסטיבל נובה במעבדת מדעי המוח במכון ויצמן למדע, המעמיקים את ההבנה הקלינית של טראומה ונוירופרמקולוגיה. בנוסף, יונתן מגשר בין חדשנות מדעית לפיתוח אסטרטגי באמצעות עבודתו כיועץ בקרן נגב, וממקם אותו בחזית קידום מסגרות טיפוליות חדשניות בישראל.',
    founder2Name: 'ג\'ונתן סיניור',
    founder2Role: 'סגן מנכ"ל',
    founder2Bio: 'ג\'ונתן סיניור הוא סגן מנכ"ל ישראלים למען איבוגאין. יליד בריטניה ומתגורר כיום בתל אביב, היה חלק מצוות המייסדים שבנה סטארטאפ משלב ההקמה ועד סבב סדרה A, ויש לו ניסיון בהשקעות בתחום הפסיכדליה בקרן השקעות. הוא ארגן אירועים חינוכיים לאנשי מקצוע בתחום בריאות הנפש העובדים עם טיפולים ומחקרים מתפתחים, והוא חבר בכוח המשימה לפעולה פסיכדלית, הפועל לרפורמה רגולטורית מול ממשלת בריטניה.',
    founder3Name: 'ריאן הייטנר',
    founder3Role: 'טכנולוגיה וסנגור',
    founder3Bio: 'טכנולוג עם 35 שנות ניסיון בבנייה והובלה ביבשות שונות, ריאן הטמיע טכנולוגיה בארגונים בכל גודל וצורה — מסטארטאפים ועד תאגידים, בתחומים החל מבריאות ועד טכנולוגיה צרכנית. הקריירה הבינלאומית שלו העניקה לו שטף נדיר בהפיכת רעיונות מורכבים לדברים שבאמת עובדים. הוא מונע על ידי אמונה עמוקה בכוח הריפוי של חומרים פסיכדליים ומחויבות אישית ארוכת שנים למדיטציה ולעבודה פנימית. הוא אינו חושש לאתגר את המצב הקיים בנושא הנגישות לאיבוגאין עבור מי שזקוק לו ביותר.',

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
    post7Tag: 'חדשות דחופות',
    post7Title: 'צו נשיאותי היסטורי: מחקר פדרלי באיבוגאין לטובת ותיקי צבא',
    post7Excerpt: 'הנשיא טרמפ חתם על צו מכוון המקצה למעלה מ-50 מיליון דולר למחקר האיבוגאין, מאיץ פיתוח קליני ומודרניזציה של מסלולים רגולטוריים לוותיקי צבא עם PTSD ו-TBI.',
    post8Tag: 'עיתונות',
    post8Title: '"הקריז נעלם": החומר הפסיכדלי ש"מוחק" התמכרויות — ועלול להרוג',
    post8Excerpt: 'ד"ר רועי צוקר ב-ynet בוחן את הפוטנציאל יוצא הדופן של האיבוגאין לגמילה ולפוסט-טראומה — לצד הסיכונים הלבביים והחסמים הרגולטוריים. בנוסף: חברת PsyRx הישראלית שמנסה פרקטיקה בטוחה יותר.',
    readMore: 'להמשך קריאה ←',

    navMedia: 'מדיה',
    mediaLabel: 'צפייה והאזנה',
    mediaH2: 'מדיה ומשאבים',
    mediaIntro: 'גלו פודקאסטים, ראיונות וסרטונים נבחרים אודות איבוגאין ממומחים מובילים, פעילים וניצולים.',
    podcastsTitle: 'פודקאסטים וראיונות',
    videosTitle: 'סרטונים והרצאות',
    listenNow: 'Listen Now',
    listenNowHe: 'האזינו עכשיו',
    featuredExpertTitle: 'מומחית מובילה',
    classicVideosTitle: 'סרטונים נוספים',
    video1Label: 'כיצד טיפול באיבוגאין משנה חיים של חיילים משוחררים',
    video2Label: 'חיילים משוחררים פונים לטיפול פסיכדלי',
    video3Label: 'איבוגאין: טקס המעבר — סרט דוקומנטרי מלא',
    hePodcast1Title: 'ביחס לחומר — פרק 28: אקטיביזם פסיכדלי עם בועז וכטל',
    hePodcast1Desc: 'ד״ר רן ספיר משוחח עם בועז וכטל על אקטיביזם פסיכדלי בישראל, טיפול בהתמכרויות באיבוגאין בהולנד, וקידום מחקר וגישה חוקית לצמח האיבוגה — בפודקאסט Spotify.',
    heVideo1Title: 'איך איבוגאין עשוי לטפל בדיכאון ובחרדה — ד״ר נולן ויליאמס (TED)',
    heVideo1Desc: 'הרצאת TED של חוקר מוח מסטנפורד על מחקר MISTIC: איבוגאין בוותיקי כוחות מיוחדים עם פגיעת מוח טראומטית, שיפור בתסמיני PTSD, דיכאון וחרדה, והפוטנציאל גם בהקשר של התמכרויות.',
    heVideo2Title: 'בועז וכטל - ״איבוגאין - המולקולה הקדושה של מערב אפריקה״',
    heVideo2Desc: 'הרצאה מקיפה של בועז וכטל החולקת תובנות מניסויים קליניים ומניסיונו האישי בטיפול במטופלים.',
    heVideo3Title: 'הסרט המלא \'איבוגה\' (Iboga Documentary)',
    heVideo3Desc: 'סרט דוקומנטרי ישראלי של שי זאדה המספק הצצה נדירה לטקסים המסורתיים ולשילוב הרוחני של צמח האיבוגה בשבט בגבון.',
    heVideo4Title: 'בועז וכטל באולפן ״אברי ושרקי + אחד״ — קשת 12',
    heVideo4Desc: 'ראיון לילי מעמיק עם בועז וכטל, מייסד שותף של קרן האיבוגאין, אצל אברי גלעד ויעקב שרקי בקשת 12 — על איבוגאין כפריצת דרך אפשרית לטיפול ב-PTSD, בפגיעות ראש טראומטיות ובהתמכרויות, ועל המאמץ לקדם מחקר ונגישות בישראל.',
    heVideo4PlayCta: 'צפו ב-mako VOD ←',
    heVideo4PlayHint: 'קשת 12 · אברי ושרקי + אחד · 25.5.26',
    breakingNewsTitle: 'צו נשיאותי היסטורי: מחקר פדרלי באיבוגאין',
    breakingNewsText: 'הנשיא טרמפ חתם על צו מכוון המקצה למעלה מ-50 מיליון דולר למחקר האיבוגאין ומאיץ פיתוח קליני לטיפול בוותיקי צבא.',
    breakingNewsHebrew: 'הנשיא טרמפ חתם על צו נשיאותי היסטורי המקצה למעלה מ-50 מיליון דולר למחקר האיבוגאין — פריצת דרך ענקית לטיפול ב-PTSD ופגיעות ראש טראומטיות בוותיקי צבא.',
    breakingNewsCta: 'לקריאת המאמר המלא \u2190',
    footerSocial: 'חברתי',
    footerXLink: 'X (טוויטר)',

    contactLabel: 'פנו אלינו',
    contactH2: 'צרו קשר עם הקרן',
    contactP: 'בין אם אתם מטופלים המחפשים מידע, חוקרים המתעניינים בשיתוף פעולה, אנשי תקשורת או פשוט מי שרוצה להיות שותף לדרך — נשמח לשמוע מכם.',
    contactDonationNotice: 'איננו מקבלים תרומות בשלב זה. ניתן לפנות אלינו בנושאי מחקר, סנגור, התנדבות או שותפות עתידית.',
    formName: 'שם מלא',
    formEmail: 'כתובת דוא"ל',
    formPhone: 'טלפון (לא חובה)',
    formSubject: 'נושא',
    formSubjectOpt1: 'אני מטופל / בן משפחה המחפש עזרה',
    formSubjectOpt2: 'פנייה לשיתוף פעולה מחקרי',
    formSubjectOpt3: 'פנייה תקשורתית / עיתונאית',
    formSubjectOpt4: 'שותפות / תמיכה עתידית',
    formSubjectOpt5: 'התנדבות',
    formSubjectOpt6: 'אחר',
    formMessage: 'הודעה',
    formSubmit: 'שליחת הודעה',
    formSuccess: '✓ תודה! ניצור איתכם קשר בקרוב.',
    contactEmail: 'info@israelisforibogaine.org',
    contactCity: 'תל אביב, ישראל',

    missionLabel: 'המשימה',
    missionH2: 'הכרח לאומי לחוסן, להתאוששות ולתיקון המוח',
    missionP1: 'מטרתה של "ישראלים למען איבוגאין" היא לקדם הבנה ציבורית וגישה רפואית אחראית לאיבוגאין לטיפול בפוסט-טראומה (PTSD), בפגיעות ראש טראומטיות, בהתמכרויות ובמצבי בריאות נפש נלווים.',
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
    mandateIntro: '"ישראלים למען איבוגאין" פועלת לאורך ארבעה עמודים אסטרטגיים המחזקים זה את זה — מהעלאת מודעות ציבורית ועד רפורמה במדיניות — המרכיבים יחד מסגרת מקיפה לסנגור ולמחקר ברמה הלאומית.',
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
    legalTaxText: '"איבוגאין ישראל" רשומה כ<strong>עמותה</strong> רשמית ברשם העמותות במשרד המשפטים. איננו מקבלים תרומות בשלב זה; כל גיוס כספים עתידי ומעמד מס יפורסמו לאחר שיוסדרו באופן רשמי.',
    legal1Title: '1. סיווג מחדש של האיבוגאין',
    legal1Text: 'מעבר מסיווג "סם מסוכן" (תוספת 1) ל"חומר רפואי מבוקר" שיאפשר שימוש קליני וטיפול בחמלה בפיקוח, במסגרות מורשות.',
    legal2Title: '2. תוכנית פיילוט לאומית',
    legal2Text: 'קידום "פיילוט איבוגאין לאומי" בחסות הממשלה, המכוון במיוחד ללוחמי צה"ל ולניצולי טבח פסטיבל נובה.',
    legal3Title: '3. מעמד טיפול בחמלה',
    legal3Text: 'קידום מסלול אישור מזורז של משרד הבריאות למטופלים קשים ועמידי-טיפול, במקביל לאיסוף מלוא נתוני הניסויים.',
    legalEntityTitle: 'הישות המשפטית',
    legalEntityNameHeLabel: 'שם רשמי (עברית):',
    legalEntityNameEnLabel: 'שם רשמי (אנגלית):',
    legalEntityRegNoLabel: 'מספר רישום:',
    legalEntityAuthorityLabel: 'רשות רישום:',
    legalEntityAuthorityValue: 'רשם העמותות בישראל',
    legalBrandNotice: 'שם המותג של האתר עשוי להיות שונה משם הישות המשפטית הרשומה. כל הפעילויות והשירותים מתבצעים תחת העמותה הרשומה המפורטת לעיל.',

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
    proj4Title: 'קרן מתוכננת לסבסוד מטופלים',
    proj4Text: 'תוכנית סיוע כספית מתוכננת שעשויה להעניק מענקים וסבסוד לישראלים שאין ביכולתם לממן את הטיפול. כל פרטי ההשקה, הזכאות והמימון יפורסמו בנפרד.',

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
    imp2Title: 'לשותפים עתידיים',
    imp2Text: 'שותפים עתידיים יוכלו לסייע בבניית מסלול רגולטורי, תשתית נתונים ישראלית ושרשרת אספקה ביוסינתטית שנועדו לשרת מטופלים בישראל למשך עשורים.',
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
    footerSocial: 'חברתי',
    footerXLink: 'X (טוויטר)',
    footerLinkedIn: 'לינקדאין',
    footerFacebook: 'פייסבוק',
    footerCopy: '© 2026 קרן האיבוגאין של ישראל. כל הזכויות שמורות.',
    footerLegalEntity: 'אתר זה מופעל על ידי סנה איבוגה (ע”ר) / Iboga Bush (R.A.), עמותה רשומה בישראל מס׳ 580841922.',
    disclaimer: '⚠️ אתר זה מיועד למטרות חינוכיות ומידעיות בלבד! איבוגאין הוא חומר מבוקר במדינות רבות. אין באמור באתר זה משום ייעוץ רפואי. יש להתייעץ תמיד עם רופא מוסמך.',
    contactPrivacyNoteHtml: 'הפרטים שלך מוגנים ומטופלים בהתאם ל<a href="legal-he.html#privacy" data-href-en="legal.html#privacy" data-href-he="legal-he.html#privacy" style="color:var(--green-mid);text-decoration:underline;">מדיניות הפרטיות</a> שלנו.',
  }

};

// ============================================================
//  ADDITIONAL KEYS FOR THE MULTI-PAGE SITE (August 2026)
// ============================================================
Object.assign(LANG.en, {
  navHome: "Home",
  navMedia: "Media",
  navProjects: "Projects",
  navGovernance: "Governance",
  lastUpdatedLabel: "Last reviewed",
  lastUpdatedDate: "26 August 2026",
  readMore: "Read the article →",

  // --- page heads ---
  aboutLabel: "About the organization",
  aboutH1: "Who we are and what we are trying to change",
  aboutIntro: "Israelis for Ibogaine is a registered Israeli non-profit association — Iboga Bush (R.A.) / סנה איבוגה (ע\"ר), registration number 580841922. We exist because Israel is facing a scale of psychological and neurological injury its mental-health system was never built to absorb, and because a body of published research now points to a treatment approach the country has not yet seriously evaluated. We are not a clinic and we do not provide treatment. We do four things: we educate the public, we work to bring clinical trials into Israeli hospitals, we support academic and biosynthetic research, and we make the policy case for a regulated pathway to access.",
  iboLabel: "The compound",
  iboH1: "What ibogaine is, and why researchers are studying it",
  iboIntro: "Ibogaine is an alkaloid found in the root bark of Tabernanthe iboga, a shrub native to West and Central Africa, where iboga has been used ceremonially for generations. Pharmacologically it is unlike any approved psychiatric medicine: rather than modulating a single neurotransmitter system day after day, a single supervised session appears to trigger a period of heightened neuroplasticity. This page explains the proposed mechanisms in plain language, what conditions ibogaine is being investigated for, and — just as importantly — the cardiac and other risks that make unsupervised use dangerous. Nothing on this page is medical advice.",
  isrLabel: "The situation in Israel",
  isrH1: "A mental health emergency of historic scale",
  isrIntro: "Israel's psychological casualty count from October 7th and the conflict that followed is not a marginal public-health problem — it is a national one. Tens of thousands of soldiers are in active treatment for war-related trauma, an estimated three million citizens are symptomatic, and roughly forty percent of trauma patients abandon standard SSRI and talk-therapy protocols within a year. Layered on top of that is a quieter emergency: blast-related traumatic brain injury, frequently co-occurring with treatment-resistant PTSD, which conventional psychiatric care was not designed to address.",
  resLabel: "Evidence",
  resH1: "What the published research actually shows",
  resIntro: "Advocacy without evidence is noise, so this page collects the peer-reviewed literature we rely on and is explicit about its limits. The most-cited work is the magnesium–ibogaine study in special-operations veterans with traumatic brain injury, published in Nature Medicine in 2024, alongside functional-neuroimaging work and reviews of psychedelics in TBI. These are small, mostly open-label studies with short follow-up — genuinely striking results that are not the same thing as proof of safety or efficacy for any individual.",
  projLabel: "Programme of work",
  projH1: "What we are building in 2026 and 2027",
  projIntro: "These are the four initiatives we are actively working on, described honestly in terms of where each one currently stands. Some are observational studies awaiting ethics approval, one is a data infrastructure project, one is outreach work already underway with survivors, and one is a funding mechanism that is planned rather than operating. We would rather list a project as planned than imply it is running.",
  govLabel: "Governance",
  govH1: "Our legal status and regulatory strategy",
  govIntro: "We think an organization asking for a change in national drug policy should be legible about its own governance. Israelis for Ibogaine operates as an Amuta — a non-profit association registered with the Israeli Ministry of Justice — under the Hebrew name סנה איבוגה (ע\"ר) and the English name IBOGA BUSH (R.A.), registration number 580841922. We hold a board-approved conflict-of-interest policy and whistleblower policy, and we do not currently accept public donations through this website.",
  teamLabel: "People",
  teamH1: "The people behind the organization",
  teamIntro: "A small team, and deliberately so. Between us we bring clinical-trial management in psilocybin and MDMA studies, functional-neuroimaging research with survivors of the Nova festival attack, startup and investment experience in the psychedelics sector, and three and a half decades of building technology for organizations across sectors.",
  medLabel: "Watch & listen",
  medH1: "Talks, documentaries, podcasts and press",
  medIntro: "A curated library for people who want to go deeper than a summary — in English and Hebrew. Videos load only when you choose to play them, so this page stays fast. Inclusion here is not endorsement of every claim made by a speaker; we link material we think is worth your time and leave you to weigh it.",
  conLabel: "Reach out",
  conH1: "Contact the organization",
  conIntro: "Whether you are a patient or family member looking for information, a researcher or clinician interested in collaboration, a journalist on deadline, or someone who simply wants to help — we read and answer every message. We are based in Tel Aviv and we work in Hebrew and English. Please note two things: we are not a treatment provider and cannot arrange or supervise ibogaine treatment, and we are not currently accepting donations through this website.",
  blogLabel: "Articles",
  blogH1: "Articles & insights",
  blogIntro: "Explainers we have written for people who want the detail rather than the headline: what the Stanford results did and did not show, how iboga travelled from ritual use in Gabon to clinics in Mexico and Portugal, why blast-related brain injury behaves differently from psychological trauma alone, and the regulatory argument for a supervised access pathway in Israel.",

  // --- homepage mission summary ---
  homeMissionLabel: "Our mission",
  homeMissionH2: "Advancing research and responsible access to ibogaine in Israel",
  homeMissionP1: "Israelis for Ibogaine is a registered Israeli non-profit association — Iboga Bush (R.A.) / סנה איבוגה (ע\"ר), Amuta no. 580841922. We advance public understanding and responsible medical access to ibogaine for post-traumatic stress disorder, traumatic brain injury, and addiction.",
  homeMissionP2: "We are not a clinic and we do not provide or arrange treatment. We support research, we work to bring clinical trials into Israeli hospitals, we educate the public and reduce stigma, and we make the policy case for a supervised, regulated pathway to access.",
  homeMissionCta: "Read more about the organization",

  // --- explore grid ---
  exploreLabel: "Explore the site",
  exploreH2: "Where to start",
  exploreIntro: "Nine sections covering the science, the situation in Israel, the published evidence, our programme of work, and how to reach us. Each one is a full page — not a marketing summary.",
  expAboutT: "About the organization", expAboutD: "A registered Israeli non-profit — our mission, mandate, and the four pillars of our work.",
  expIboT: "What ibogaine is", expIboD: "The compound, the proposed mechanism of action, what it is studied for, and its risks.",
  expIsrT: "The crisis in Israel", expIsrD: "Three million symptomatic citizens, a 40% treatment dropout rate, and a TBI surge.",
  expResT: "The published research", expResD: "The Nature Medicine study in veterans with TBI, and the questions still unanswered.",
  expProjT: "Projects 2026–2027", expProjD: "Project Iron Mind, the Ibogaine Registry, survivor outreach, and a planned subsidy fund.",
  expGovT: "Governance & registration", expGovD: "Amuta no. 580841922, our policies, and the three regulatory pathways we pursue.",
  expTeamT: "Our team", expTeamD: "The three people leading the organization, and what each of them brings.",
  expMedT: "Watch & listen", expMedD: "Conference talks, documentaries, Israeli television, and long-form podcasts.",
  expBlogT: "Articles & insights", expBlogD: "Sourced long-form explainers on the science, the history, and the policy case.",

  // --- featured articles ---
  featuredLabel: "Start here",
  featuredH2: "Three articles worth your time",
  featuredAll: "See all articles",
  featur1T: "What the Stanford results actually showed",
  featur1D: "A magnesium–ibogaine protocol in special-operations veterans with traumatic brain injury produced large reductions in PTSD, depression and anxiety scores. Here is the study design, the numbers, and the limits.",
  featur1M: "Research",
  featur2T: "Israel's mental health crisis after October 7",
  featur2D: "The scale of psychological injury, why standard protocols are losing forty percent of patients within a year, and the quieter epidemic of blast-related brain injury underneath it.",
  featur2M: "Israel",
  featur3T: "From Gabon to the modern clinic",
  featur3D: "How a West African ceremonial plant became an addiction-interruption treatment, why it was scheduled in the United States, and how the research restarted decades later.",
  featur3M: "History",

  // --- related cards ---
  relatedH2: "Continue reading",
  relAboutT: "About Israelis for Ibogaine", relAboutD: "Our mission, mandate, and the four pillars of our work.",
  relIboT: "What ibogaine is", relIboD: "The compound, its mechanism of action, and what it treats.",
  relIsrT: "The crisis in Israel", relIsrD: "Why Israel faces a mental-health emergency without modern precedent.",
  relResT: "The research base", relResD: "Peer-reviewed studies and the research agenda ahead.",
  relProjT: "Our projects", relProjD: "What we are building in 2026 and 2027.",
  relGovT: "Governance & registration", relGovD: "Our legal status, registration number, and regulatory strategy.",
  relTeamT: "Who we are", relTeamD: "The people leading the organization.",
  relMedT: "Watch & listen", relMedD: "Talks, documentaries, podcasts, and press coverage.",
  relBlogT: "Articles & insights", relBlogD: "Long-form explainers on the science, history, and policy.",
  relConT: "Get in touch", relConD: "Patients, researchers, journalists, and volunteers.",

  // --- CTA band ---
  ctaH2: "Help make ibogaine therapy available in Israel",
  ctaText: "Add your name to the public petition, or contact us about research collaboration, clinical partnership, volunteering, or media enquiries. We reply to every message.",
  ctaBtn1: "Sign the petition",
  ctaBtn2: "Contact us",

  // --- footer ---
  footerLinks: "The organization",
  footerTopics: "Topics",
  footerResources: "Key articles",
  footerCopy: "© 2026 Israelis for Ibogaine. All rights reserved.",
});

Object.assign(LANG.he, {
  navHome: "בית",
  navMedia: "מדיה",
  navProjects: "פרויקטים",
  navGovernance: "ממשל תאגידי",
  lastUpdatedLabel: "עודכן לאחרונה",
  lastUpdatedDate: "26 באוגוסט 2026",
  readMore: "לקריאת הכתבה →",

  aboutLabel: "אודות העמותה",
  aboutH1: "מי אנחנו ומה אנחנו מבקשים לשנות",
  aboutIntro: "ישראלים למען איבוגאין היא עמותה רשומה בישראל — סנה איבוגה (ע\"ר) / Iboga Bush (R.A.), מספר רישום 580841922. אנחנו קיימים מפני שישראל מתמודדת עם היקף של פגיעה נפשית ונוירולוגית שמערכת בריאות הנפש שלה לא נבנתה כדי להכיל, ומפני שגוף מחקר שפורסם מצביע על גישה טיפולית שהמדינה עדיין לא בחנה ברצינות. איננו מרפאה ואיננו מספקים טיפול. אנחנו עושים ארבעה דברים: מחנכים את הציבור, פועלים להבאת ניסויים קליניים לבתי חולים בישראל, תומכים במחקר אקדמי וביוסינתטי, ומציגים את הטיעון המדיני למסלול גישה מפוקח.",
  iboLabel: "החומר",
  iboH1: "מהו איבוגאין, ומדוע חוקרים אותו",
  iboIntro: "איבוגאין הוא אלקלואיד המצוי בקליפת השורש של Tabernanthe iboga, שיח הגדל במערב ובמרכז אפריקה, שם נעשה באיבוגה שימוש טקסי לאורך דורות. מבחינה פרמקולוגית הוא שונה מכל תרופה פסיכיאטרית מאושרת: במקום לווסת מערכת נוירוטרנסמיטרים אחת יום אחר יום, מפגש מפוקח בודד מעורר, כך נראה, תקופה של פלסטיסיות עצבית מוגברת. עמוד זה מסביר את המנגנונים המשוערים בשפה פשוטה, את המצבים הנחקרים — ולא פחות חשוב, את הסיכונים הקרדיולוגיים והאחרים שהופכים שימוש לא מפוקח למסוכן. אין באמור בעמוד זה ייעוץ רפואי.",
  isrLabel: "המצב בישראל",
  isrH1: "מצב חירום בבריאות הנפש בהיקף היסטורי",
  isrIntro: "מספר הנפגעים הנפשיים בישראל מ־7 באוקטובר ומהמערכה שבאה אחריו אינו בעיה שולית בבריאות הציבור — הוא בעיה לאומית. עשרות אלפי חיילים מטופלים כיום בשל טראומה מלחמתית, כשלושה מיליון אזרחים מדווחים על סימפטומים, וכ־40% ממטופלי הטראומה נוטשים פרוטוקולים של SSRI וטיפול בשיחות בתוך שנה. מעל כל אלה מונח מצב חירום שקט יותר: פגיעות מוח טראומטיות מהדף, לעיתים קרובות בתחלואה נלווית עם PTSD עמיד לטיפול, שהטיפול הפסיכיאטרי המקובל לא נבנה כדי להתמודד עמן.",
  resLabel: "עדויות מחקריות",
  resH1: "מה המחקר שפורסם אכן מראה",
  resIntro: "פעילות ציבורית בלי עדויות היא רעש, ולכן עמוד זה מרכז את הספרות שנבדקה בביקורת עמיתים שעליה אנו מסתמכים — ומציין במפורש את מגבלותיה. העבודה המצוטטת ביותר היא מחקר מגנזיום–איבוגאין בלוחמי כוחות מיוחדים עם פגיעת מוח טראומטית, שפורסם ב־Nature Medicine ב־2024, לצד עבודות דימות מוחי תפקודי וסקירות על פסיכדליים בפגיעות מוח. אלה מחקרים קטנים, בעיקר פתוחי־תווית ועם מעקב קצר — תוצאות מרשימות באמת, שאינן זהות להוכחת בטיחות או יעילות עבור אדם מסוים.",
  projLabel: "תוכנית העבודה",
  projH1: "מה אנחנו בונים ב־2026 וב־2027",
  projIntro: "אלה ארבע היוזמות שאנו פועלים עליהן, ומתוארות בכל הכנות לפי המצב שבו כל אחת מהן נמצאת בפועל. חלקן מחקרים תצפיתיים הממתינים לאישור ועדת הלסינקי, אחת היא פרויקט תשתית נתונים, אחת היא עבודת הסברה שכבר מתקיימת עם שורדים, ואחת היא מנגנון מימון מתוכנן ולא פעיל. אנו מעדיפים לציין פרויקט כמתוכנן מלרמוז שהוא פועל.",
  govLabel: "ממשל תאגידי",
  govH1: "המצב המשפטי שלנו והאסטרטגיה הרגולטורית",
  govIntro: "לדעתנו, ארגון שמבקש שינוי במדיניות הסמים הלאומית חייב להיות שקוף לגבי הממשל התאגידי שלו. ישראלים למען איבוגאין פועלת כעמותה רשומה אצל רשם העמותות במשרד המשפטים, בשם העברי סנה איבוגה (ע\"ר) ובשם האנגלי IBOGA BUSH (R.A.), מספר רישום 580841922. אימצנו מדיניות למניעת ניגוד עניינים ומדיניות הגנה על חושפי שחיתויות באישור הוועד המנהל, ואיננו מקבלים כיום תרומות מהציבור באתר זה.",
  teamLabel: "אנשים",
  teamH1: "האנשים שמאחורי העמותה",
  teamIntro: "צוות קטן, ובמכוון. יחד אנו מביאים ניהול ניסויים קליניים בפסילוסיבין וב־MDMA, מחקר דימות מוחי תפקודי עם שורדי הטבח במסיבת נובה, ניסיון יזמי והשקעתי בתחום הפסיכדליים, ושלושה עשורים וחצי של בניית טכנולוגיה עבור ארגונים במגזרים שונים.",
  medLabel: "לצפייה ולהאזנה",
  medH1: "הרצאות, סרטים תיעודיים, פודקאסטים ותקשורת",
  medIntro: "ספרייה מוקפדת למי שרוצה להעמיק מעבר לתקציר — בעברית ובאנגלית. הסרטונים נטענים רק כשאתם בוחרים להפעיל אותם, כך שהעמוד נשאר מהיר. הכללת פריט כאן אינה אישור לכל טענה שמשמיע דובר; אנו מקשרים לחומר שלדעתנו שווה את זמנכם ומשאירים לכם לשקול אותו.",
  conLabel: "צרו קשר",
  conH1: "יצירת קשר עם העמותה",
  conIntro: "אם אתם מטופלים או בני משפחה המחפשים מידע, חוקרים או קלינאים המעוניינים בשיתוף פעולה, עיתונאים בלחץ זמן, או פשוט מי שרוצה לעזור — אנו קוראים ומשיבים לכל הודעה. אנו יושבים בתל אביב ופועלים בעברית ובאנגלית. שימו לב לשני דברים: איננו ספק טיפול ואיננו יכולים לארגן או לפקח על טיפול באיבוגאין, ואיננו מקבלים כיום תרומות באתר זה.",
  blogLabel: "כתבות",
  blogH1: "כתבות ותובנות",
  blogIntro: "הסברים שכתבנו למי שרוצה את הפרטים ולא את הכותרת: מה תוצאות סטנפורד הראו ומה לא, איך איבוגה עברה משימוש טקסי בגבון למרפאות במקסיקו ובפורטוגל, מדוע פגיעת מוח מהדף מתנהגת אחרת מטראומה נפשית בלבד, והטיעון הרגולטורי למסלול גישה מפוקח בישראל.",

  homeMissionLabel: "המשימה שלנו",
  homeMissionH2: "קידום מחקר וגישה אחראית לאיבוגאין בישראל",
  homeMissionP1: "ישראלים למען איבוגאין היא עמותה רשומה בישראל — סנה איבוגה (ע\"ר) / Iboga Bush (R.A.), מספר רישום 580841922. אנו מקדמים הבנה ציבורית וגישה רפואית אחראית לאיבוגאין עבור הפרעת דחק פוסט־טראומטית, פגיעת מוח טראומטית והתמכרות.",
  homeMissionP2: "איננו מרפאה ואיננו מספקים או מארגנים טיפול. אנו תומכים במחקר, פועלים להבאת ניסויים קליניים לבתי חולים בישראל, מחנכים את הציבור ומפחיתים סטיגמה, ומציגים את הטיעון המדיני למסלול גישה מפוקח ומוסדר.",
  homeMissionCta: "קראו עוד על העמותה",

  exploreLabel: "לסיור באתר",
  exploreH2: "מאיפה להתחיל",
  exploreIntro: "תשעה מדורים המכסים את המדע, המצב בישראל, העדויות שפורסמו, תוכנית העבודה שלנו ואיך להשיג אותנו. כל אחד מהם הוא עמוד מלא — לא תקציר שיווקי.",
  expAboutT: "אודות העמותה", expAboutD: "עמותה רשומה בישראל — המשימה, המנדט וארבעת עמודי התווך של עבודתנו.",
  expIboT: "מהו איבוגאין", expIboD: "החומר, מנגנון הפעולה המשוער, המצבים הנחקרים והסיכונים.",
  expIsrT: "המשבר בישראל", expIsrD: "שלושה מיליון אזרחים סימפטומטיים, 40% נשירה מטיפול, וגל פגיעות מוח.",
  expResT: "המחקר שפורסם", expResD: "מחקר Nature Medicine בלוחמים עם פגיעת מוח, והשאלות שנותרו פתוחות.",
  expProjT: "פרויקטים 2026–2027", expProjD: "פרויקט \"מוח מפלדה\", מרשם האיבוגאין, הסברה לשורדים וקרן סיוע מתוכננת.",
  expGovT: "ממשל ורישום", expGovD: "עמותה מס' 580841922, המדיניות שלנו ושלושת המסלולים הרגולטוריים.",
  expTeamT: "הצוות שלנו", expTeamD: "שלושת האנשים המובילים את העמותה, ומה כל אחד מהם מביא.",
  expMedT: "לצפייה ולהאזנה", expMedD: "פאנלים בכינוסים, סרטים תיעודיים, טלוויזיה ישראלית ופודקאסטים.",
  expBlogT: "כתבות ותובנות", expBlogD: "הסברים מעמיקים ומקורות על המדע, ההיסטוריה והטיעון המדיני.",

  featuredLabel: "התחילו כאן",
  featuredH2: "שלוש כתבות ששוות את זמנכם",
  featuredAll: "לכל הכתבות",
  featur1T: "מה תוצאות סטנפורד באמת הראו",
  featur1D: "פרוטוקול מגנזיום–איבוגאין בלוחמי כוחות מיוחדים עם פגיעת מוח טראומטית הביא לירידה ניכרת במדדי PTSD, דיכאון וחרדה. הנה מתווה המחקר, המספרים והמגבלות.",
  featur1M: "מחקר",
  featur2T: "משבר בריאות הנפש בישראל אחרי 7 באוקטובר",
  featur2D: "היקף הפגיעה הנפשית, מדוע פרוטוקולים מקובלים מאבדים ארבעים אחוז מהמטופלים בתוך שנה, והמגפה השקטה של פגיעות מוח מהדף שמתחתיה.",
  featur2M: "ישראל",
  featur3T: "מגבון אל המרפאה המודרנית",
  featur3D: "איך צמח טקסי ממערב אפריקה הפך לטיפול לקטיעת התמכרות, מדוע סווג כחומר אסור בארצות הברית, וכיצד המחקר התחדש עשורים אחר כך.",
  featur3M: "היסטוריה",

  relatedH2: "להמשך קריאה",
  relAboutT: "אודות ישראלים למען איבוגאין", relAboutD: "המשימה, המנדט וארבעת עמודי התווך של עבודתנו.",
  relIboT: "מהו איבוגאין", relIboD: "החומר, מנגנון הפעולה שלו ומה הוא מטפל בו.",
  relIsrT: "המשבר בישראל", relIsrD: "מדוע ישראל מתמודדת עם מצב חירום נפשי חסר תקדים מודרני.",
  relResT: "בסיס המחקר", relResD: "מחקרים שנבדקו בביקורת עמיתים וסדר היום המחקרי שלפנינו.",
  relProjT: "הפרויקטים שלנו", relProjD: "מה אנחנו בונים ב־2026 וב־2027.",
  relGovT: "ממשל ורישום", relGovD: "המצב המשפטי, מספר הרישום והאסטרטגיה הרגולטורית שלנו.",
  relTeamT: "מי אנחנו", relTeamD: "האנשים שמובילים את העמותה.",
  relMedT: "לצפייה ולהאזנה", relMedD: "הרצאות, סרטים תיעודיים, פודקאסטים וסיקור תקשורתי.",
  relBlogT: "כתבות ותובנות", relBlogD: "הסברים מעמיקים על המדע, ההיסטוריה והמדיניות.",
  relConT: "יצירת קשר", relConD: "מטופלים, חוקרים, עיתונאים ומתנדבים.",

  ctaH2: "עזרו לנו להנגיש טיפול באיבוגאין בישראל",
  ctaText: "הוסיפו את שמכם לעצומה הציבורית, או פנו אלינו בנושא שיתוף פעולה מחקרי, שותפות קלינית, התנדבות או פניות תקשורת. אנו משיבים לכל הודעה.",
  ctaBtn1: "חתמו על העצומה",
  ctaBtn2: "צרו קשר",

  footerLinks: "העמותה",
  footerTopics: "נושאים",
  footerResources: "כתבות מרכזיות",
  footerCopy: "© 2026 ישראלים למען איבוגאין. כל הזכויות שמורות.",
});

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

  // Show/hide language-specific media content
  document.querySelectorAll('[data-lang-content]').forEach(el => {
    const contentLang = el.getAttribute('data-lang-content');
    if (contentLang === lang) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  localStorage.setItem('iboLang', lang);
  window.scrollTo({ top: scrollY, behavior: 'instant' });
  if (typeof window.closeMobileMenu === 'function') window.closeMobileMenu();
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

// ---- Smooth active nav ---- //
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length || !sections.length) return;
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
  // Fail safe: if IntersectionObserver or motion preferences rule this out,
  // leave every element fully visible rather than hiding content.
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
  // Safety net: reveal anything still hidden after 1.2s so no content can be
  // lost to a stalled observer, a headless crawler, or a review tool.
  setTimeout(() => els.forEach(el => {
    if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; }
  }), 1200);
}

// ---- Contact form ---- //
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    const success = document.getElementById('form-success');
    if (success) {
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }
  });
}

// ---- Click-to-play media facades ---- //
// Video and podcast embeds are not loaded until the visitor asks for them.
// This keeps every page free of third-party player JavaScript on first load.
function initMediaFacades() {
  document.addEventListener('click', e => {
    const el = e.target.closest('.video-facade, .audio-facade');
    if (!el || el.classList.contains('is-playing')) return;
    const yt = el.getAttribute('data-yt');
    const sp = el.getAttribute('data-spotify');
    const frame = document.createElement('iframe');
    frame.setAttribute('title', el.querySelector('.video-facade-title')?.textContent || 'Embedded player');
    frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    frame.setAttribute('allowfullscreen', '');
    frame.setAttribute('loading', 'lazy');
    if (yt) frame.src = 'https://www.youtube.com/embed/' + yt + '?autoplay=1&rel=0';
    else if (sp) { frame.src = sp; frame.style.height = '152px'; }
    else return;
    el.classList.add('is-playing');
    el.innerHTML = '';
    el.appendChild(frame);
  });
}

// ---- Fixed header offsets ---- //
// The disclaimer banner and navbar are both fixed; publish their real
// heights so the first element in normal flow can clear them at any
// viewport width and in either language.
function initHeaderOffsets() {
  const banner = document.querySelector('.disclaimer-banner');
  const nav = document.getElementById('navbar');
  const root = document.documentElement;
  const set = () => {
    root.style.setProperty('--banner-h', (banner ? banner.offsetHeight : 0) + 'px');
    if (nav) root.style.setProperty('--nav-h', nav.offsetHeight + 'px');
  };
  set();
  window.addEventListener('resize', set, { passive: true });
  window.addEventListener('load', set);
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(set);
    if (banner) ro.observe(banner);
    if (nav) ro.observe(nav);
  }
}

// ---- Init ---- //
document.addEventListener('DOMContentLoaded', () => {
  // A page written in one language only (e.g. the Hebrew legal pages) locks it.
  const locked = window.__lockLang;
  const stored = locked || localStorage.getItem('iboLang');
  const browserHe = (navigator.languages || [navigator.language || ''])
    .some(l => String(l).toLowerCase().startsWith('he'));
  const saved = stored || (browserHe ? 'he' : 'en');
  applyLang(locked || saved);
  initHeaderOffsets();
  initNavScroll();
  initActiveNav();
  initScrollReveal();
  initContactForm();
  initMediaFacades();
  animateCounters();

  document.querySelector('.lang-btn')?.addEventListener('click', toggleLang);
});
