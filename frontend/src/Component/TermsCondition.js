import React, { useContext } from "react";
import Parser from "html-react-parser";

import { BackContext } from "../Context/notes/BackState";

const rawhtml = `
<h3 style="text-align:center">TERMS OF SERVICES</h3>
<div style="margin-bottom: 1rem">PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY, AS IT CONTAINS IMPORTANT
    INFORMATION REGARDING YOUR LEGAL RIGHTS AND REMEDIES.</div>
<div style="margin-bottom: 1rem">Last Revised: 2021-11-24 07:19:34</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">1. OVERVIEW</h3>
    <div style="margin: .5rem 0">This Terms of Service Agreement (&quot;Agreement&quot;) is entered into by and between
        Prenotebook, registered address UttarPradesh, India (&quot;Company&quot;) and you, and is made effective as of
        the date of your use of this website https://prenotebook.ml/ (&quot;Site&quot;) or the date of electronic
        acceptance.</div>
    <div style="margin: .5rem 0">This Agreement sets forth the general terms and conditions of your use of the
        https://prenotebook.ml/ as well as the products and/or services purchased or accessed through this Site (the
        &quot;Services&quot;).Whether you are simply browsing or using this Site or purchase Services, your use of this
        Site and your electronic acceptance of this Agreement signifies that you have read, understand, acknowledge and
        agree to be bound by this Agreement our <a href="https://prenotebook.ml/privacy-policy"
            target="_blank">Privacy policy</a>. The terms &quot;we&quot;, &quot;us&quot; or &quot;our&quot; shall refer
        to Company. The terms &quot;you&quot;, &quot;your&quot;, &quot;User&quot; or &quot;customer&quot; shall refer to
        any individual or entity who accepts this Agreement, uses our Site, has access or uses the Services. Nothing in
        this Agreement shall be deemed to confer any third-party rights or benefits.</div>
    <div style="margin: .5rem 0">Company may, in its sole and absolute discretion, change or modify this Agreement, and
        any policies or agreements which are incorporated herein, at any time, and such changes or modifications shall
        be effective immediately upon posting to this Site. Your use of this Site or the Services after such changes or
        modifications have been made shall constitute your acceptance of this Agreement as last revised.</div>
    <div style="margin: .5rem 0">IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT AS LAST REVISED, DO NOT USE (OR
        CONTINUE TO USE) THIS SITE OR THE SERVICES.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">2. ELIGIBILITY</h3>
    <div style="margin: .5rem 0">This Site and the Services are available only to Users who can form legally binding
        contracts under applicable law. By using this Site or the Services, you represent and warrant that you are (i)
        at least eighteen (18) years of age, (ii) otherwise recognized as being able to form legally binding contracts
        under applicable law, and (iii) are not a person barred from purchasing or receiving the Services found under
        the laws of the India or other applicable jurisdiction.</div>
    <div style="margin: .5rem 0">If you are entering into this Agreement on behalf of a company or any corporate entity,
        you represent and warrant that you have the legal authority to bind such corporate entity to the terms and
        conditions contained in this Agreement, in which case the terms &quot;you&quot;, &quot;your&quot;,
        &quot;User&quot; or &quot;customer&quot; shall refer to such corporate entity. If, after your electronic
        acceptance of this Agreement, Company finds that you do not have the legal authority to bind such corporate
        entity, you will be personally responsible for the obligations contained in this Agreement.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">3. RULES OF USER CONDUCT</h3>
    <div style="margin: .5rem 0">By using this Site You acknowledge and agree that:</div>
    <ul>
        <li>Your use of this Site, including any content you submit, will comply with this Agreement and all applicable
            local, state, national and international laws, rules and regulations.</li>
    </ul>
    <div style="margin: .5rem 0">You will not use this Site in a manner that:</div>
    <ul>
        <li>Is illegal, or promotes or encourages illegal activity;</li>
        <li>Promotes, encourages or engages in child pornography or the exploitation of children;</li>
        <li>Promotes, encourages or engages in terrorism, violence against people, animals, or property;</li>
        <li>Promotes, encourages or engages in any spam or other unsolicited bulk email, or computer or network hacking
            or cracking;</li>
        <li>Infringes on the intellectual property rights of another User or any other person or entity;</li>
        <li>Violates the privacy or publicity rights of another User or any other person or entity, or breaches any duty
            of confidentiality that you owe to another User or any other person or entity;</li>
        <li>Interferes with the operation of this Site;</li>
        <li>Contains or installs any viruses, worms, bugs, Trojan horses, Cryptocurrency Miners or other code, files or
            programs designed to, or capable of, using many resources, disrupting, damaging, or limiting the
            functionality of any software or hardware.</li>
    </ul>
    <div style="margin: .5rem 0">You will not:</div>
    <ul>
        <li>copy or distribute in any medium any part of this Site, except where expressly authorized by Company,</li>
        <li>copy or duplicate this Terms of Services agreement, which was created with the help of the <a
                style="text-decoration:none;color: inherit;"
                href="https://prenotebook.ml/terms-and-condition"
                target="_blank">TermsHub.io</a>,</li>
        <li>modify or alter any part of this Site or any of its related technologies,</li>
        <li>access Companies Content (as defined below) or User Content through any technology or means other than
            through this Site itself.</li>
    </ul>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">4. INTELLECTUAL PROPERTY</h3>
    <div style="margin: .5rem 0">In addition to the general rules above, the provisions in this Section apply
        specifically to your use of Companies Content posted to Site. Companies Content on this Site, including without
        limitation the text, software, scripts, source code, API, graphics, photos, sounds, music, videos and
        interactive features and the trademarks, service marks and logos contained therein (&quot;Companies
        Content&quot;), are owned by or licensed to Prenotebook in perpetuity, and are subject to copyright, trademark,
        and/or patent protection.</div>
    <div style="margin: .5rem 0">Companies Content is provided to you &quot;as is&quot;, &quot;as available&quot; and
        &quot;with all faults&quot; for your information and personal, non-commercial use only and may not be
        downloaded, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise
        exploited for any purposes whatsoever without the express prior written consent of Company. No right or license
        under any copyright, trademark, patent, or other proprietary right or license is granted by this Agreement.
    </div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">5. DISCLAIMER OF REPRESENTATIONS AND WARRANTIES
    </h3>
    <div style="margin: .5rem 0">YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THIS SITE SHALL BE AT YOUR OWN
        RISK AND THAT THIS SITE ARE PROVIDED &quot;AS IS&quot;, &quot;AS AVAILABLE&quot; AND &quot;WITH ALL
        FAULTS&quot;. COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, DISCLAIM ALL WARRANTIES, STATUTORY, EXPRESS
        OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE AND NON-INFRINGEMENT. COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS MAKE NO
        REPRESENTATIONS OR WARRANTIES ABOUT (I) THE ACCURACY, COMPLETENESS, OR CONTENT OF THIS SITE, (II) THE ACCURACY,
        COMPLETENESS, OR CONTENT OF ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE,
        AND/OR (III) THE SERVICES FOUND AT THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR
        OTHERWISE) TO THIS SITE, AND COMPANY ASSUMES NO LIABILITY OR RESPONSIBILITY FOR THE SAME.</div>
    <div style="margin: .5rem 0">IN ADDITION, YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT NO ORAL OR WRITTEN INFORMATION
        OR ADVICE PROVIDED BY COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, AND THIRD-PARTY SERVICE PROVIDERS
        WILL (I) CONSTITUTE LEGAL OR FINANCIAL ADVICE OR (II) CREATE A WARRANTY OF ANY KIND WITH RESPECT TO THIS SITE OR
        THE SERVICES FOUND AT THIS SITE, AND USERS SHOULD NOT RELY ON ANY SUCH INFORMATION OR ADVICE.</div>
    <div style="margin: .5rem 0">THE FOREGOING DISCLAIMER OF REPRESENTATIONS AND WARRANTIES SHALL APPLY TO THE FULLEST
        EXTENT PERMITTED BY LAW, and shall survive any termination or expiration of this Agreement or your use of this
        Site or the Services found at this Site.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">6. LIMITATION OF LIABILITY</h3>
    <div style="margin: .5rem 0">IN NO EVENT SHALL COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND ALL THIRD
        PARTY SERVICE PROVIDERS, BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING ANY DAMAGES THAT MAY RESULT FROM (I) THE
        ACCURACY, COMPLETENESS, OR CONTENT OF THIS SITE, (II) THE ACCURACY, COMPLETENESS, OR CONTENT OF ANY SITES LINKED
        (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (III) THE SERVICES FOUND AT THIS SITE OR ANY
        SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (IV) PERSONAL INJURY OR
        PROPERTY DAMAGE OF ANY NATURE WHATSOEVER, (V) THIRD-PARTY CONDUCT OF ANY NATURE WHATSOEVER, (VI) ANY
        INTERRUPTION OR CESSATION OF SERVICES TO OR FROM THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS, BANNER
        ADVERTISING OR OTHERWISE) TO THIS SITE, (VII) ANY VIRUSES, WORMS, BUGS, TROJAN HORSES, OR THE LIKE, WHICH MAY BE
        TRANSMITTED TO OR FROM THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO
        THIS SITE, (VIII) ANY USER CONTENT OR CONTENT THAT IS DEFAMATORY, HARASSING, ABUSIVE, HARMFUL TO MINORS OR ANY
        PROTECTED CLASS, PORNOGRAPHIC, &quot;X-RATED&quot;, OBSCENE OR OTHERWISE OBJECTIONABLE, AND/OR (IX) ANY LOSS OR
        DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF THIS SITE OR THE SERVICES FOUND AT THIS SITE, WHETHER
        BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL OR EQUITABLE THEORY, AND WHETHER OR NOT COMPANY IS ADVISED
        OF THE POSSIBILITY OF SUCH DAMAGES.</div>
    <div style="margin: .5rem 0">IN ADDITION, You SPECIFICALLY ACKNOWLEDGE AND agree that any cause of action arising
        out of or related to this Site or the Services found at this Site must be commenced within one (1) year after
        the cause of action accrues, otherwise such cause of action shall be permanently barred.</div>
    <div style="margin: .5rem 0">THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY
        LAW, AND shall survive any termination or expiration of this Agreement or your use of this Site or the Services
        found at this Site.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">7. INDEMNITY</h3>
    <div style="margin: .5rem 0">You agree to protect, defend, indemnify and hold harmless Company and its officers,
        directors, employees, agents from and against any and all claims, demands, costs, expenses, losses, liabilities
        and damages of every kind and nature (including, without limitation, reasonable attorneys’ fees) imposed upon or
        incurred by Company directly or indirectly arising from (i) your use of and access to this Site; (ii) your
        violation of any provision of this Agreement or the policies or agreements which are incorporated herein; and/or
        (iii) your violation of any third-party right, including without limitation any intellectual property or other
        proprietary right. The indemnification obligations under this section shall survive any termination or
        expiration of this Agreement or your use of this Site or the Services found at this Site.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">8. DATA TRANSFER</h3>
    <div style="margin: .5rem 0">If you are visiting this Site from a country other than the country in which our
        servers are located, your communications with us may result in the transfer of information across international
        boundaries. By visiting this Site and communicating electronically with us, you consent to such transfers.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">9. AVAILABILITY OF WEBSITE</h3>
    <div style="margin: .5rem 0">Subject to the terms and conditions of this Agreement and our policies, we shall use
        commercially reasonable efforts to attempt to provide this Site on 24/7 basis. You acknowledge and agree that
        from time to time this Site may be inaccessible for any reason including, but not limited to, periodic
        maintenance, repairs or replacements that we undertake from time to time, or other causes beyond our control
        including, but not limited to, interruption or failure of telecommunication or digital transmission links or
        other failures.</div>
    <div style="margin: .5rem 0">You acknowledge and agree that we have no control over the availability of this Site on
        a continuous or uninterrupted basis, and that we assume no liability to you or any other party with regard
        thereto.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">10. DISCONTINUED SERVICES</h3>
    <div style="margin: .5rem 0">Company reserves the right to cease offering or providing any of the Services at any
        time, for any or no reason, and without prior notice. Although Company makes great effort to maximize the
        lifespan of all its Services, there are times when a Service we offer will be discontinued. If that is the case,
        that product or service will no longer be supported by Company. In such case, Company will either offer a
        comparable Service for you to migrate to or a refund. Company will not be liable to you or any third party for
        any modification, suspension, or discontinuance of any of the Services we may offer or facilitate access to.
    </div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">11. NO THIRD-PARTY BENEFICIARIES</h3>
    <div style="margin: .5rem 0">Nothing in this Agreement shall be deemed to confer any third-party rights or benefits.
    </div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">12. COMPLIANCE WITH LOCAL LAWS</h3>
    <div style="margin: .5rem 0">Company makes no representation or warranty that the content available on this Site are
        appropriate in every country or jurisdiction, and access to this Site from countries or jurisdictions where its
        content is illegal is prohibited. Users who choose to access this Site are responsible for compliance with all
        local laws, rules and regulations.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">13. GOVERNING LAW</h3>
    <div style="margin: .5rem 0">This Agreement and any dispute or claim arising out of or in connection with it or its
        subject matter or formation shall be governed by and construed in accordance with the laws of India, Uttar
        Pradesh, to the exclusion of conflict of law rules.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">14. DISPUTE RESOLUTION</h3>
    <div style="margin: .5rem 0">Any controversy or claim arising out of or relating to these Terms of Services will be
        settled by binding arbitration. Any such controversy or claim must be arbitrated on an individual basis, and
        must not be consolidated in any arbitration with any claim or controversy of any other party. The arbitration
        must be conducted in India, Uttar Pradesh, and judgment on the arbitration award may be entered into any court
        having jurisdiction thereof.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">15. TITLES AND HEADINGS</h3>
    <div style="margin: .5rem 0">The titles and headings of this Agreement are for convenience and ease of reference
        only and shall not be utilized in any way to construe or interpret the agreement of the parties as otherwise set
        forth herein.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">16. SEVERABILITY</h3>
    <div style="margin: .5rem 0">Each covenant and agreement in this Agreement shall be construed for all purposes to be
        a separate and independent covenant or agreement. If a court of competent jurisdiction holds any provision (or
        portion of a provision) of this Agreement to be illegal, invalid, or otherwise unenforceable, the remaining
        provisions (or portions of provisions) of this Agreement shall not be affected thereby and shall be found to be
        valid and enforceable to the fullest extent permitted by law.</div>
</div>
<div style="margin-bottom: 1rem">
    <h3 style="font-weight: 600; margin: 0; text-transform: uppercase">17. CONTACT INFORMATION</h3>
    <div style="margin: .5rem 0">If you have any questions about this Agreement, please contact us by email or regular
        mail at the following address:</div>
    <div style="margin: .5rem 0">Prenotebook</div>
    <div style="margin: .5rem 0">UttarPradesh</div>
    <div style="margin: .5rem 0">India</div>
    <div style="margin: .5rem 0">support@prenotebook.ml</div>
</div>
`;

export default function TermsCondition() {
  const { mode } = useContext(BackContext);
  return (
    <div style={{ color: mode === "light" ? "black" : "white" }}>
      {Parser(rawhtml)}
    </div>
  );
}
