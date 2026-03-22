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
    "crisisStat3Num": "1/X",
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
    "footerLegal": "Legal",
    "footerCopy": "\u00a9 2026 Ibogaine Foundation of Israel. All rights reserved.",
    "disclaimer": "\u26a0\ufe0f This website is for educational and informational purposes only. Ibogaine is a controlled substance in many countries. Nothing here constitutes medical advice. Always consult a qualified physician."
},
  he: {
    dir: 'rtl',
    langToggle: 'English',
    navHome: 'בית', navAbout: 'אודות', navIbogaine: 'איבוגאין', navResearch: 'מחקר', navIsrael: 'ישראל', navFounders: 'מייסדים', navBlog: 'בלוג', navContact: 'צור קשר'
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
