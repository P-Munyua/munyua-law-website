/* shared.js — injects nav, footer and WhatsApp button into every page */

const SITE = {
  logo:  'logo2.png',
  photo: 'law.jpeg',
  phone: '+254725465278',
  email: 'munyuanlawadvocates@gmail.com',
};

function renderNav(activePage) {
  const pages = {
    home:       'index.html',
    about:      'about.html',
    people:     'people.html',
    expertise:  'expertise.html',
    insights:   'insights.html',
    contact:    'contact.html',
  };

  const practiceLinks = [
    ['Litigation &amp; Dispute Resolution', 'practice-litigation.html'],
    ['Corporate &amp; Commercial Law',      'practice-corporate.html'],
    ['Conveyancing &amp; Real Estate',      'practice-conveyancing.html'],
    ['Employment &amp; Labour Relations',   'practice-employment.html'],
    ['Intellectual Property',               'practice-ip.html'],
    ['Data Protection &amp; Privacy',       'practice-data.html'],
    ['Technology &amp; Digital',            'practice-technology.html'],
    ['Public Procurement',                  'practice-procurement.html'],
    ['Environment &amp; Land Law',          'practice-environment.html'],
  ].map(([label, href]) => `<a href="${href}">${label}</a>`).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="util-bar">
      <a href="tel:${SITE.phone}">${SITE.phone}</a>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
      <a href="contact.html">Client Enquiry</a>
    </div>
    <nav class="main-nav">
      <a href="index.html" class="nav-logo">
        <img src="${SITE.logo}" alt="Munyua N Law Advocates">
        <div class="nav-logo-text">Munyua N Law <span>Advocates</span></div>
      </a>
      <ul class="nav-menu">
        <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About <span class="chev">▾</span></a>
          <div class="mega">
            <a href="about.html">Our Firm</a>
            <a href="people.html">Managing Partner</a>
          </div>
        </li>
        <li><a href="people.html" ${activePage==='people'?'class="active"':''}>People</a></li>
        <li><a href="expertise.html" ${activePage==='expertise'?'class="active"':''}>Expertise <span class="chev">▾</span></a>
          <div class="mega">
            <a href="expertise.html">All Practice Areas</a>
            ${practiceLinks}
          </div>
        </li>
        <li><a href="insights.html" ${activePage==='insights'?'class="active"':''}>Insights</a></li>
        <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
        <li><a href="contact.html" class="nav-cta">Book a Consultation</a></li>
      </ul>
    </nav>`;

  document.getElementById('site-footer').innerHTML = `
    <footer>
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${SITE.logo}" alt="Logo">
          <div class="footer-brand-name">Munyua N Law Advocates</div>
          <div class="footer-brand-sub">Advocates · Nairobi, Kenya</div>
          <div class="footer-brand-addr">10th Floor, Unga House, Office No. 1013<br>Muthithi Road, Westlands, Nairobi</div>
        </div>
        <div class="footer-col">
          <h5>Practice Areas</h5>
          <ul>
            <li><a href="practice-litigation.html">Litigation &amp; Disputes</a></li>
            <li><a href="practice-corporate.html">Corporate &amp; Commercial</a></li>
            <li><a href="practice-conveyancing.html">Conveyancing &amp; Real Estate</a></li>
            <li><a href="practice-employment.html">Employment &amp; Labour</a></li>
            <li><a href="practice-ip.html">Intellectual Property</a></li>
            <li><a href="practice-data.html">Data Protection &amp; Privacy</a></li>
            <li><a href="practice-technology.html">Technology Law</a></li>
            <li><a href="practice-procurement.html">Public Procurement</a></li>
            <li><a href="practice-environment.html">Environment &amp; Land</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>The Firm</h5>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="people.html">Managing Partner</a></li>
            <li><a href="insights.html">Insights</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:${SITE.phone}">${SITE.phone}</a></li>
            <li><a href="mailto:${SITE.email}">Email Us</a></li>
            <li><a href="https://wa.me/254725465278" target="_blank">WhatsApp</a></li>
            <li><a href="contact.html">Book a Consultation</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Munyua N Law Advocates. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="privacy.html">Privacy Policy</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/254725465278" class="wa-btn" target="_blank" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>`;
}
