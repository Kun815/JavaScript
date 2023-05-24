// ==UserScript==
// @name         Access to Research
// @namespace    http://accesstoresearch.org.uk/search
// @version      1.0
// @description  Redirects URLs with modified domain name (including certain domains)
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var url = window.location.href;
    var modifiedURL = url.replace(/^(https:\/\/[^\/]+)/, function(match, domain) {
        return domain.replace(/\./g, '-') + ".plsa2r.idm.oclc.org";
    });

    var includedDomains = [
        "www.wiley.com",
        "onlinelibrary.wiley.com",
        "www.rsc.org",
        "www.nature.com",
        "www.wolterskluwer.com",
        "www.whitingbirch.net",
        "taylorandfrancis.com",
        "royalsociety.org",
        "portlandpress.com",
        "microbiologysociety.org",
        "ioppublishing.org",
        "www.emerald.com",
        "www.elsevier.com",
        "www.euppublishing.com",
        "www.dovepress.com",
        "sciendo.com",
        "www.cambridge.org",
        "www.asco.org",
        "www.alpsp.org",
        "www.sciencedirect.com",
        "www.bmj.com",
        "journals.bmj.com",
        "uk.sagepub.com",
        "journals.sagepub.com",
        "dataplanet.sagepub.com",
        "global.oup.com",
        "academic.oup.com",
        "www.scopus.com",
        "www.tandfonline.com",
        "www.taylorfrancis.com",
        "www.chemistryworld.com",
        "ovidsp.dc2.ovid.com",
        "ascopubs.org",
        "link.springer.com",
        "www.springernature.com",
        "experiments.springernature.com"
    ];

    var currentDomain = window.location.hostname;

    if (modifiedURL !== url && modifiedURL !== window.location.href && includedDomains.indexOf(currentDomain) !== -1) {
        window.location.replace(modifiedURL);
    }
})();
