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
        "www.springernature.com",
        "uk.sagepub.com",
        "royalsociety.org",
        "portlandpress.com",
        "global.oup.com",
        "microbiologysociety.org",
        "ioppublishing.org",
        "www.emerald.com",
        "www.elsevier.com",
        "www.euppublishing.com",
        "www.dovepress.com",
        "sciendo.com",
        "www.cambridge.org",
        "www.bmj.com",
        "www.asco.org",
        "www.alpsp.org",
        "www.sciencedirect.com"
    ];

    var currentDomain = window.location.hostname;

    if (modifiedURL !== url && modifiedURL !== window.location.href && includedDomains.indexOf(currentDomain) !== -1) {
        window.location.replace(modifiedURL);
    }
})();