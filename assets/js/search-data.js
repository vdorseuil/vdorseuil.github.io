// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-phd-i-started-my-phd-in-the-data-team-at-ens-psl-working-on-differential-privacy-and-membership-inference-attacks-under-the-supervision-of-olivier-cappé-and-jamal-atif-mortar-board",
          title: '[PhD] I started my PhD in the DATA Team at ENS-PSL, working on...',
          description: "",
          section: "News",},{id: "news-preprint-our-new-preprint-assessing-per-sample-membership-inference-vulnerability-without-retraining-is-now-live-on-arxiv-the-paper-presents-an-efficient-approach-to-evaluate-per-sample-membership-inference-attack-mia-vulnerability-while-bypassing-the-overhead-of-retraining-shadow-models-check-it-out-here",
          title: '[Preprint]: Our new preprint, Assessing Per-Sample Membership Inference Vulnerability without Retraining, is now...',
          description: "",
          section: "News",},{id: "news-visit-i-am-joining-the-vector-institute-in-toronto-as-a-visiting-phd-student-with-nicolas-papernot-in-the-clever-hans-lab-canada",
          title: '[Visit]: I am joining the Vector Institute in Toronto as a Visiting PhD...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-assessing-per-sample-membership-inference-vulnerability-without-retraining-has-been-accepted-at-neurips-2026-it-s-available-here-see-you-in-paris",
          title: '[Paper]: Our paper, Assessing Per-Sample Membership Inference Vulnerability without Retraining, has been accepted...',
          description: "",
          section: "News",},{id: "news-preprint-our-new-preprint-detectability-without-interference-efficient-canary-design-for-privacy-auditing-in-one-run-is-live-on-arxiv-it-frames-canary-optimization-as-a-bi-level-problem-and-introduces-ibis-a-framework-that-efficiently-crafts-multiple-canaries-for-privacy-audits-in-one-run-you-can-check-it-out-here",
          title: '[Preprint]: Our new preprint, Detectability without Interference: Efficient Canary Design for Privacy Auditing...',
          description: "",
          section: "News",},{id: "news-preprint-we-released-our-latest-preprint-reliable-estimation-of-differential-privacy-under-selection-bias-on-arxiv-in-this-work-we-identify-and-fix-a-selection-bias-found-in-standard-privacy-auditing-protocols-read-the-full-paper-here",
          title: '[Preprint]: We released our latest preprint, Reliable Estimation of Differential Privacy under Selection...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%6C%65%6E%74%69%6E.%64%6F%72%73%65%75%69%6C@%65%6E%73.%70%73%6C.%65%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vdorseuil", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vdorseuil", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=z-Bkm94AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
