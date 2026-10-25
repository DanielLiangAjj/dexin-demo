/* =====================================================================
   DEXIN — shared UI: header, footer, i18n, inquiry modal, catalogue
   rows, credential tiles, the production rail, entrance observers.
   ===================================================================== */
(function(){
  const DX = window.DX;
  const LS_KEY = 'dx_lang';
  const LANGS = ['en','zh','es','ar'];
  const LANG_NAME = {en:'English', zh:'中文', es:'Español', ar:'العربية'};
  const LANG_SHORT = {en:'EN', zh:'中文', es:'ES', ar:'AR'};
  const store = {
    get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
    set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
  };
  let lang = store.get(LS_KEY);
  if(!LANGS.includes(lang)){
    const nav=(navigator.language||'').toLowerCase().slice(0,2);
    lang = LANGS.includes(nav) && nav!=='en' ? nav : 'en';
  }
  const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- icons (one stroke family) ---------- */
  const I = {
    arrow:'<path d="M4 12h15M13 6l6 6-6 6"/>',
    arrowl:'<path d="M20 12H5M11 6l-6 6 6 6"/>',
    arrowdn:'<path d="M12 4v15M6 13l6 6 6-6"/>',
    phone:'<path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail:'<path d="M3 6h18v12H3zM3 7l9 6 9-6"/>',
    pin:'<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>',
    check:'<path d="M4 12l5 5L20 6"/>',
    close:'<path d="M6 6l12 12M18 6L6 18"/>',
    menu:'<path d="M3 7h18M3 12h18M3 17h18"/>',
    play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',
    pause:'<path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" stroke="none"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
    whatsapp:'<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.6-4.1A8 8 0 1 1 20 11.5z"/><path d="M9 8.5c.2 2.5 2 4.3 4.5 4.5.6 0 1.2-.4 1.4-1 .1-.3 0-.6-.3-.8l-1.2-.6c-.3-.1-.6 0-.8.2l-.3.4c-.7-.3-1.3-.9-1.6-1.6l.4-.3c.2-.2.3-.5.2-.8L10.3 7c-.2-.3-.5-.4-.8-.3-.6.2-1 .8-1 1.4z"/>',
    chevdn:'<path d="M6 9l6 6 6-6"/>'
  };
  const svg = (n,w,cls)=>`<svg ${cls?`class="${cls}" `:''}viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||1.8}" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${I[n]||''}</svg>`;
  const t = o => (lang==='zh' && o.zh!=null) ? o.zh : o.en;
  const bi = (en,zh)=>`<span data-en>${en}</span><span data-zh>${zh}</span>`;
  const esc = s => String(s==null?'':s).replace(/"/g,'&quot;');

  /* ---------- header ---------- */
  function navItems(){
    return [
      {href:'products.html', en:'Products', zh:'产品中心', mega:true},
      {href:'industries.html', en:'Industries', zh:'应用行业'},
      {href:'about.html', en:'About', zh:'关于德鑫'},
      {href:'contact.html', en:'Contact', zh:'联系我们'},
    ];
  }
  const here = (location.pathname.split('/').pop() || 'index.html');
  function megaHTML(){
    const lines = DX.cats.map(c=>`<a href="products.html?cat=${c.slug}"><span class="sq"></span>${bi(c.en,c.zh)}</a>`).join('');
    const inds = DX.industries.map(c=>`<a href="industries.html?ind=${c.slug}"><span class="sq"></span>${bi(c.en,c.zh)}</a>`).join('');
    return `<div class="mega"><div class="mega-inner">
      <div><h4>${bi('Browse by product line','按产品系列')}</h4>${lines}</div>
      <div><h4>${bi('Browse by industry','按应用行业')}</h4>${inds}</div>
      <a class="all link" href="products.html">${bi('View all products','查看全部产品')} ${svg('arrow',2)}</a>
    </div></div>`;
  }
  function buildHeader(){
    const host = document.getElementById('site-header'); if(!host) return;
    host.className = 'site-header';
    const items = navItems().map(n=>{
      const cur = here===n.href ? ' aria-current="page"' : '';
      if(n.mega) return `<li class="has-mega"><a href="${n.href}"${cur}>${bi(n.en,n.zh)}</a>${megaHTML()}</li>`;
      return `<li><a href="${n.href}"${cur}>${bi(n.en,n.zh)}</a></li>`;
    }).join('');
    host.innerHTML = `<div class="wrap bar">
      <a class="brand" href="index.html" aria-label="Dexin 德鑫 — home">
        <img class="mark" src="assets/img/site/logo.jpg" alt="" width="52" height="28">
        <span class="word">DEXIN<small>德鑫</small></span>
      </a>
      <nav aria-label="Main"><ul class="nav">${items}</ul></nav>
      <div class="header-actions">
        <div class="lang-menu">
          <button class="lang-cur" aria-haspopup="true" aria-expanded="false" aria-label="Language / 语言">${svg('globe',1.6)}<span class="lc">${LANG_SHORT[lang]}</span>${svg('chevdn',2)}</button>
          <div class="lang-opts">
            ${LANGS.map(l=>`<button data-lang="${l}" class="${lang===l?'active':''}" lang="${l}">${LANG_NAME[l]}</button>`).join('')}
          </div>
        </div>
        <a class="btn btn-sm" href="#quote" data-rfq data-rfq-type="quote">${bi('Request a Quote','获取报价')}</a>
        <button class="hamburger" aria-label="Menu" aria-expanded="false">${svg('menu',2)}</button>
      </div>
    </div>`;
    // mobile nav
    const mob = document.createElement('div'); mob.className='mobile-nav'; mob.setAttribute('aria-hidden','true');
    mob.innerHTML = `<button class="mclose" aria-label="Close menu">${svg('close',2)}</button>
      <a href="index.html">${bi('Home','首页')}</a>` +
      navItems().map(n=>`<a href="${n.href}">${bi(n.en,n.zh)}</a>`).join('') +
      DX.cats.map(c=>`<a class="sub" href="products.html?cat=${c.slug}">${bi(c.en,c.zh)}</a>`).join('') +
      `<a class="btn" href="#quote" data-rfq data-rfq-type="quote">${bi('Request a Quote','获取报价')}</a>
       <div class="mnav-langs">${LANGS.map(l=>`<button data-lang="${l}" class="${lang===l?'active':''}" lang="${l}">${LANG_NAME[l]}</button>`).join('')}</div>`;
    document.body.appendChild(mob);
    const hb = host.querySelector('.hamburger');
    const openMob = v=>{ mob.classList.toggle('open',v); mob.setAttribute('aria-hidden',v?'false':'true'); hb.setAttribute('aria-expanded',v?'true':'false'); if(v) mob.querySelector('.mclose').focus(); };
    hb.onclick=()=>openMob(true);
    mob.querySelector('.mclose').onclick=()=>{ openMob(false); hb.focus(); };
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>openMob(false)));
    mob.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{setLang(b.dataset.lang);openMob(false);});
    document.addEventListener('keydown',e=>{ if(e.key==='Escape' && mob.classList.contains('open')){ openMob(false); hb.focus(); } });
    host.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
    const lm = host.querySelector('.lang-menu'), lc = lm.querySelector('.lang-cur');
    const openLm = v=>{ lm.classList.toggle('open',v); lc.setAttribute('aria-expanded',v?'true':'false'); };
    lc.onclick = e=>{ e.stopPropagation(); openLm(!lm.classList.contains('open')); };
    document.addEventListener('click', e=>{ if(!lm.contains(e.target)) openLm(false); });
    lm.addEventListener('keydown', e=>{ if(e.key==='Escape'){ openLm(false); lc.focus(); } });
  }

  /* ---------- footer: the mark, built large ---------- */
  function buildFooter(){
    const host = document.getElementById('site-footer'); if(!host) return;
    const c = DX.contact;
    const blocks = [['D','100%'],['E','78%'],['X','92%'],['I','64%'],['N','86%'],['德','70%','zh'],['鑫','96%','zh']]
      .map((b,k)=>`<span class="${b[2]||''}" style="--k:${k}">${b[0]}</span>`).join('');
    const catLinks = DX.cats.map(x=>`<a href="products.html?cat=${x.slug}">${bi(x.en,x.zh)}</a>`).join('');
    host.className='site-footer';
    host.innerHTML = `<div class="wrap">
      <div class="mark-blocks" aria-label="DEXIN 德鑫" role="img">${blocks}</div>
      <div class="foot-grid">
        <div><h4>${bi('Products','产品系列')}</h4>${catLinks}<a href="products.html">${bi('All products','全部产品')}</a></div>
        <div><h4>${bi('Company','公司')}</h4>
          <a href="about.html">${bi('About Dexin','关于德鑫')}</a>
          <a href="industries.html">${bi('Industries','应用行业')}</a>
          <a href="about.html#certs">${bi('Certifications','资质认证')}</a>
          <a href="contact.html">${bi('Contact','联系我们')}</a>
        </div>
        <div><h4>${bi('Contact','联系方式')}</h4>
          <ul>
            <li>${bi(c.addr_en,c.addr_zh)}</li>
            <li><a href="tel:+8651268182825">${bi('Tel','电话')} <bdi>${c.tel}</bdi></a></li>
            <li><a href="${c.whatsapp_link}" target="_blank" rel="noopener">WhatsApp <bdi>${c.whatsapp}</bdi></a></li>
            <li><a href="mailto:${c.email}">${c.email}</a></li>
          </ul>
        </div>
        <div class="foot-qr"><img src="assets/img/site/wechat_qr.jpg" alt="WeChat QR 微信二维码" width="96" height="96" loading="lazy">
          <p>${bi('Scan on WeChat to chat with our sales team.','微信扫一扫，与销售团队沟通。')}</p></div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 ${DX.company.en} · ${bi('All rights reserved','版权所有')} · ${bi(`Zip ${c.zip} · Fax ${c.fax}`,`邮编 ${c.zip} · 传真 ${c.fax}`)}</span>
        <a class="btn btn-sm btn-light" href="#quote" data-rfq data-rfq-type="quote">${bi('Request a Quote','获取报价')}</a>
      </div>
    </div>`;
  }

  /* ---------- inquiry submission: Web3Forms fetch, then real form-POST
     fallback (passes bot challenges that block fetch), mailto as last resort ---------- */
  async function submitInquiry(f){
    const key=(DX.forms&&DX.forms.web3forms_key)||'';
    const subject='Website inquiry — szdexintc.com'+(f.product?' — '+f.product:'');
    if(!key){
      const body=['Name: '+f.name,'Company: '+f.company,'Email: '+f.email,
        'Phone: '+f.phone,'Product: '+f.product,'','Message:',f.message].join('\n');
      location.href='mailto:'+DX.contact.email+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      return true;
    }
    try{
      const r=await fetch('https://api.web3forms.com/submit',{method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({access_key:key,subject:subject,from_name:f.name,
          name:f.name,email:f.email,company:f.company,phone:f.phone,
          product:f.product,message:f.message})});
      const res=await r.json();
      if(res.success) return true;
    }catch(err){ console.error(err); }
    const fm=document.createElement('form');
    fm.method='POST'; fm.action='https://api.web3forms.com/submit'; fm.style.display='none';
    const fields={access_key:key, subject:subject, from_name:f.name, name:f.name,
      email:f.email, company:f.company, phone:f.phone, product:f.product,
      message:f.message, redirect:'https://szdexintc.com/thanks.html'};
    for(const k in fields){
      const i=document.createElement('input'); i.type='hidden'; i.name=k; i.value=fields[k]||'';
      fm.appendChild(i);
    }
    document.body.appendChild(fm); fm.submit();
    return 'nav';
  }

  /* shared success panel */
  const okHTML = ()=>`<div class="ck">${svg('check',2.4)}</div>
    <h3 class="cap">${bi('Thank you','感谢您的询盘')}</h3>
    <p>${bi('We have received your inquiry and will reply within one business day.','我们已收到您的询盘，将在一个工作日内回复。')}</p>`;

  /* wire any inline inquiry form (home coupon, contact page) */
  function bindInlineForm(form){
    if(!form || form.dataset.bound) return; form.dataset.bound='1';
    form.addEventListener('submit', async e=>{
      e.preventDefault();
      if(!form.checkValidity()){ form.reportValidity(); return; }
      const btn=form.querySelector('button[type=submit]'); if(btn) btn.disabled=true;
      const v=n=>{const el=form.querySelector('[name='+n+']');return el?el.value.trim():'';};
      const ok=await submitInquiry({product:v('product'),name:v('name'),company:v('company'),email:v('email'),phone:v('phone'),message:v('message')});
      if(ok==='nav') return;
      const done=document.createElement('div'); done.className='form-ok show'; done.setAttribute('role','status'); done.innerHTML=okHTML();
      form.replaceWith(done); applyLang(done);
    });
  }

  /* ---------- RFQ / sample modal ---------- */
  let lastFocus=null;
  function buildModal(){
    const wrap=document.createElement('div'); wrap.className='modal-backdrop'; wrap.id='rfq-modal';
    wrap.innerHTML=`<div class="modal" role="dialog" aria-modal="true" aria-labelledby="rfq-title">
      <div class="modal-head">
        <h3 class="cap" id="rfq-title" data-mt-quote>${bi('Request a Quote','获取报价')}</h3>
        <button class="x" aria-label="Close">${svg('close',2)}</button>
      </div>
      <p class="modal-sub" id="rfq-sub"></p>
      <a class="modal-wa" href="${DX.contact.whatsapp_link}" target="_blank" rel="noopener">
        ${svg('whatsapp',1.7)}<span>${bi('Prefer to chat? Message us on WhatsApp','想直接沟通？WhatsApp 联系我们')} · <bdi>${DX.contact.whatsapp}</bdi></span>
      </a>
      <form class="dx-form" novalidate>
        <div class="field"><label for="rfq-product">${bi('Product of interest','意向产品')}</label>
          <input type="text" id="rfq-product" name="product"></div>
        <div class="field row">
          <div class="field"><label for="rfq-name">${bi('Name','姓名')} *</label><input id="rfq-name" name="name" required autocomplete="name"></div>
          <div class="field"><label for="rfq-company">${bi('Company','公司')}</label><input id="rfq-company" name="company" autocomplete="organization"></div>
        </div>
        <div class="field row">
          <div class="field"><label for="rfq-email">${bi('Email','邮箱')} *</label><input id="rfq-email" type="email" name="email" required autocomplete="email"></div>
          <div class="field"><label for="rfq-phone">${bi('Phone / WhatsApp','电话/微信')}</label><input id="rfq-phone" name="phone" autocomplete="tel"></div>
        </div>
        <div class="field"><label for="rfq-msg">${bi('Requirements (size, quantity, application)','需求说明（规格 / 数量 / 应用）')}</label><textarea id="rfq-msg" name="message"></textarea></div>
        <p class="form-note">${bi('Your inquiry goes straight to our sales team — we usually reply within one business day.','您的询盘将直达我们的销售团队——通常一个工作日内回复。')}</p>
        <button type="submit" class="btn">${bi('Send Inquiry','发送询盘')} ${svg('arrow',2,'arrow')}</button>
      </form>
      <div class="form-ok" role="status">${okHTML()}</div>
    </div>`;
    document.body.appendChild(wrap);
    const close=()=>{ wrap.classList.remove('open'); if(lastFocus) lastFocus.focus(); };
    wrap.querySelector('.x').onclick=close;
    wrap.addEventListener('click',e=>{if(e.target===wrap)close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape' && wrap.classList.contains('open'))close();});
    wrap.querySelector('form').addEventListener('submit',async e=>{
      e.preventDefault();
      const fm=e.target;
      if(!fm.checkValidity()){fm.reportValidity();return;}
      const btn=fm.querySelector('button[type=submit]'); if(btn) btn.disabled=true;
      const v=n=>{const el=fm.querySelector('[name='+n+']');return el?el.value.trim():'';};
      const ok=await submitInquiry({product:v('product'),name:v('name'),company:v('company'),email:v('email'),phone:v('phone'),message:v('message')});
      if(ok==='nav') return;
      if(btn) btn.disabled=false;
      fm.style.display='none';
      wrap.querySelector('.form-ok').classList.add('show');
    });
  }
  function openRFQ(product, type){
    const m=document.getElementById('rfq-modal'); if(!m) return;
    lastFocus=document.activeElement;
    m.querySelector('form').style.display='grid';
    m.querySelector('.form-ok').classList.remove('show');
    const head=m.querySelector('[data-mt-quote]');
    const sub=m.querySelector('#rfq-sub');
    if(type==='sample'){
      head.innerHTML=bi('Request a Sample','申请样品');
      sub.innerHTML=bi('Tell us your application and we will arrange a sample.','请告诉我们您的应用场景，我们将为您安排样品。');
    }else{
      head.innerHTML=bi('Request a Quote','获取报价');
      sub.innerHTML=bi('Send us your specs and we will reply with pricing and lead time.','发送规格需求，我们将回复价格与交期。');
    }
    m.querySelector('#rfq-product').value = product || ({zh:'综合询盘',es:'Consulta general',ar:'استفسار عام'}[lang]||'General enquiry');
    applyLang(m);
    m.classList.add('open');
    setTimeout(()=>{ const n=m.querySelector('#rfq-name'); if(n) n.focus(); }, 60);
  }

  /* ---------- i18n ---------- */
  const normKey = s => s.replace(/\s+/g,' ').trim();
  function expandI18n(root){
    const D = window.DX_I18N; if(!D) return;
    ['es','ar'].forEach(L=>{
      const dict = D[L]; if(!dict) return;
      (root||document).querySelectorAll('[data-en]:not([data-i18n-'+L+'])').forEach(el=>{
        el.setAttribute('data-i18n-'+L,'1');
        const tr = dict[normKey(el.textContent)];
        if(!tr) return;
        const n = el.cloneNode(false);
        n.removeAttribute('data-en'); n.removeAttribute('id');
        n.removeAttribute('data-i18n-es'); n.removeAttribute('data-i18n-ar');
        n.setAttribute('data-'+L,'');
        n.innerHTML = tr;
        el.classList.add('has-'+L);
        const zh = el.nextElementSibling && el.nextElementSibling.hasAttribute('data-zh') ? el.nextElementSibling : el;
        zh.parentNode.insertBefore(n, zh.nextSibling);
      });
    });
  }
  function applyLang(root){
    expandI18n(root);
    (root||document).querySelectorAll('[data-en-ph]').forEach(el=>{
      let ph = el.dataset.enPh;
      if(lang==='zh') ph = el.dataset.zhPh || ph;
      else if(lang==='es'||lang==='ar'){
        const d = window.DX_I18N && window.DX_I18N[lang];
        ph = (d && d[normKey(el.dataset.enPh)]) || ph;
      }
      el.placeholder = ph;
    });
  }
  function setLang(l){
    lang=l; store.set(LS_KEY,l);
    document.documentElement.lang=l;
    document.documentElement.dir = (l==='ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
    document.querySelectorAll('.lang-menu .lc').forEach(e=>e.textContent=LANG_SHORT[l]);
    document.querySelectorAll('.lang-menu').forEach(m=>m.classList.remove('open'));
    applyLang(document);
    document.dispatchEvent(new CustomEvent('dx:lang',{detail:{lang:l}}));
  }

  /* ---------- render helpers ---------- */
  const specOf = (p, keys)=>{ const s=(p.specs||[]).find(x=>keys.includes(x.en)); return s?s.v:''; };
  const tempOf = p => specOf(p,['Max. working temp.','Working temp.']).replace(/\s*\(.*\)/,'');
  const pic = (p,w)=> p.mark
    ? `<span class="type-plate" role="img" aria-label="${esc(p.en)}: photo to come" data-mark="${p.mark}"><span class="pend">${bi('Photo to come','图片待更新')}</span></span>`
    : `<img src="${p.img}" alt="" width="${w}" height="${w}" loading="lazy">`;
  const appSpans = (p)=> (p.apps_en||[]).map((a,i)=>`<span>${bi(a,(p.apps_zh||[])[i]||a)}</span>`).join('');

  /* home catalogue: photo-bullet row */
  function catalogItem(p){
    return `<li class="item" data-rise>
      <a class="pic" href="product.html?id=${p.id}" tabindex="-1" aria-hidden="true">${pic(p,88)}</a>
      <div>
        <div class="row1"><h4><a href="product.html?id=${p.id}">${bi(p.en,p.zh)}</a></h4><span class="num">${tempOf(p)}</span></div>
        <p class="apps">${appSpans(p)}</p>
      </div>
    </li>`;
  }

  /* products / industries / related: catalogue row with key specs */
  function productRow(p){
    const pick=['Max. working temp.','Working temp.','Pore density','Aperture','Thermal conductivity','Size range','Dimensions','Board sizes','Function','Base','Cure','Type'];
    const rows=[]; (p.specs||[]).forEach(s=>{ if(pick.includes(s.en) && rows.length<3) rows.push(s); });
    const dl=rows.map(s=>`<dt>${bi(s.en,s.zh)}</dt><dd>${s.v}</dd>`).join('');
    const name=esc(lang==='zh'?p.zh:p.en);
    return `<article class="prow" data-rise>
      <a class="pic" href="product.html?id=${p.id}" tabindex="-1" aria-hidden="true">${pic(p,200)}</a>
      <div>
        <h3><a href="product.html?id=${p.id}">${bi(p.en,p.zh)}</a></h3>
        <dl>${dl}</dl>
        <div class="acts">
          <a class="btn btn-sm" href="#quote" data-rfq data-rfq-type="quote" data-rfq-product="${name}">${bi('Quote','报价')}</a>
          <a class="link" href="product.html?id=${p.id}">${bi('Full specifications','完整规格')} ${svg('arrow',2)}</a>
        </div>
      </div>
    </article>`;
  }

  /* the quote coupon (home, contact, and the close of every inner page) */
  function couponHTML(){
    const c=DX.contact;
    return `<div class="coupon" data-rise>
      <div class="coupon-l">
        <div>
          <h2 id="quote-title" class="cap">${bi('Send us your spec','发送您的规格需求')}</h2>
          <p class="lead">${bi('Size, porosity, quantity and the metal you pour. We reply with price, lead time and a sample plan within one business day.','尺寸、孔径、数量与浇注金属。我们将在一个工作日内回复价格、交期与样品方案。')}</p>
        </div>
        <div class="reach">
          <a href="${c.whatsapp_link}" target="_blank" rel="noopener">${svg('whatsapp',1.7)}<span>WhatsApp <bdi>${c.whatsapp}</bdi></span></a>
          <a href="tel:+8651268182825">${svg('phone',1.7)}<span>${bi('Tel','电话')} <bdi>${c.tel}</bdi></span></a>
          <a href="mailto:${c.email}">${svg('mail',1.7)}<span>${c.email}</span></a>
        </div>
      </div>
      <div class="coupon-r">
        <span class="notch t" aria-hidden="true"></span><span class="notch b" aria-hidden="true"></span>
        <form data-inline-inquiry novalidate aria-labelledby="quote-title">
          <div class="field row">
            <div class="field"><label for="q-name">${bi('Name','姓名')} *</label><input id="q-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="q-email">${bi('Email','邮箱')} *</label><input id="q-email" name="email" type="email" required autocomplete="email"></div>
          </div>
          <div class="field row">
            <div class="field"><label for="q-company">${bi('Company','公司')}</label><input id="q-company" name="company" autocomplete="organization"></div>
            <div class="field"><label for="q-phone">${bi('Phone / WhatsApp','电话/微信')}</label><input id="q-phone" name="phone" type="tel" autocomplete="tel"></div>
          </div>
          <div class="field"><label for="q-product">${bi('Product interest','意向产品')}</label><input id="q-product" name="product" data-en-ph="e.g. SiC foam filter, insulation board" data-zh-ph="例如：碳化硅泡沫过滤器、隔热板"></div>
          <div class="field"><label for="q-msg">${bi('Requirements (size, quantity, application)','需求说明（规格 / 数量 / 应用）')}</label><textarea id="q-msg" name="message" data-en-ph="e.g. SiC 50×50×22, 20 PPI, 5,000 pcs, ductile iron" data-zh-ph="例如：碳化硅 50×50×22，20 PPI，5000片，球墨铸铁"></textarea></div>
          <button type="submit" class="btn">${bi('Send Inquiry','发送询盘')}</button>
          <p class="form-note">${bi('Your inquiry goes straight to our sales team — we usually reply within one business day.','您的询盘将直达我们的销售团队——通常一个工作日内回复。')}</p>
        </form>
      </div>
    </div>`;
  }

  /* credentials board */
  function certTile(c){
    return `<a class="tile" href="${c.img}" target="_blank" rel="noopener" aria-label="${esc(c.code)}: ${esc(c.en)} (opens the scan)" data-rise>
      <span class="code">${c.code}</span>
      <img class="scan" src="${c.img}" alt="" loading="lazy" width="92" height="123">
      <span class="lbl">${bi(c.en,c.zh)}</span>
    </a>`;
  }
  function certBoard(title, sub){
    return `<div class="board">
      <div class="tile head" data-rise><h2 class="cap">${title}</h2><p>${sub}</p></div>
      ${DX.certs.map(certTile).join('')}
    </div>`;
  }

  /* ---------- delegated RFQ buttons ---------- */
  function bindRFQ(){
    document.addEventListener('click',e=>{
      const b=e.target.closest('[data-rfq]'); if(!b)return;
      e.preventDefault();
      openRFQ(b.dataset.rfqProduct, b.dataset.rfqType||'quote');
    });
  }

  /* ---------- entrance observers ---------- */
  let io=null;
  function initObservers(root){
    const els=(root||document).querySelectorAll('[data-rise]:not(.in),.mark-blocks:not(.in)');
    if(reduced || !('IntersectionObserver' in window)){ els.forEach(el=>el.classList.add('in')); return; }
    if(!io){
      io=new IntersectionObserver(es=>{
        es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
      },{rootMargin:'0px 0px -10% 0px',threshold:0.01});
    }
    // stagger siblings inside one group
    const groups=new Map();
    els.forEach(el=>{
      if(el.matches('.mark-blocks')) el.classList.add('armed');
      const p=el.parentElement; const n=groups.get(p)||0; groups.set(p,n+1);
      if(!el.style.getPropertyValue('--d')) el.style.setProperty('--d', Math.min(n,6));
      io.observe(el);
    });
  }

  /* ---------- the production rail ----------
     Scroll-driven when motion is allowed and the stage fits the screen: the stage pins and the
     page scroll moves the line one station at a time. Otherwise a swipeable strip that autoplays. */
  function initRail(rail){
    if(!rail) return;
    const stage=rail.querySelector('.rail-stage')||rail;
    const track=rail.querySelector('.rail-track');
    const frames=[...rail.querySelectorAll('.frame')];
    const steps=rail.querySelector('.rail-steps');
    const now=rail.querySelector('.rail-now');
    const playBtn=rail.querySelector('[data-rail="play"]');
    const prevBtn=rail.querySelector('[data-rail="prev"]');
    const nextBtn=rail.querySelector('[data-rail="next"]');
    const header=document.getElementById('site-header');
    if(!track||!frames.length) return;
    frames.forEach((f,i)=>f.style.setProperty('--f',Math.min(i,6)));
    let idx=0, timer=null, playing=false, held=reduced, visible=true, hovering=false, programmatic=0;
    let pinned=false, geo=null, lastW=0, lastH=0, aim=-1, aimAt=0;
    const DWELL=3600, last=frames.length-1;
    const isRtl=()=>document.documentElement.dir==='rtl';

    steps.innerHTML=frames.map((f,i)=>{
      const name=f.querySelector('h3 [data-en]')?.textContent||('Station '+(i+1));
      return `<button type="button" aria-label="${esc(name)}"><i></i></button>`;
    }).join('');
    const stepBtns=[...steps.children];
    stepBtns.forEach((b,i)=>b.addEventListener('click',()=>{ stop(); go(i,true); }));

    function mark(i){
      idx=i;
      frames.forEach((f,k)=>f.classList.toggle('is-on',k===i));
      stepBtns.forEach((b,k)=>{ b.classList.toggle('on',k===i); b.classList.toggle('done',k<i); b.setAttribute('aria-current',k===i?'step':'false'); });
      if(now){ const h=frames[i].querySelector('h3'); now.innerHTML=h?h.innerHTML:''; applyLang(now); }
      const v=frames[i].querySelector('video'); frames.forEach(f=>{ const vv=f.querySelector('video'); if(vv && vv!==v && !vv.paused) vv.pause(); });
      if(v && !reduced && (pinned||playing)){ const p=v.play(); if(p&&p.catch) p.catch(()=>{}); }
    }

    // pinned mode: measure the stage, size the scroll run, and record where each station sits on the track
    function layout(force){
      const W=innerWidth, H=innerHeight;
      if(!force && W===lastW && Math.abs(H-lastH)<160) return; // phone toolbars resize the viewport while scrolling
      lastW=W; lastH=H;
      rail.classList.add('pinned');
      const hh=header?header.offsetHeight:0, sh=stage.offsetHeight;
      if(reduced || last<1 || sh>H-hh-8 || frames[0].offsetWidth<220){
        rail.classList.remove('pinned'); pinned=false; geo=null;
        if(!held && !playing) start(); else setPlayIcon();
        return;
      }
      if(playing){ playing=false; clearInterval(timer); }
      const step=Math.round(Math.min(460,Math.max(260,H*0.42)));
      const lead=Math.round(step*0.2), tail=Math.round(step*0.5);
      const top=Math.round(hh+Math.max(0,(H-hh-sh)/2));
      rail.style.setProperty('--stage-h',sh+'px');
      rail.style.setProperty('--run',(lead+step*last+tail)+'px');
      rail.style.setProperty('--stage-top',top+'px');
      // the line travels evenly, so the lit frame walks from the first slot to the last as it goes
      const max=track.scrollWidth-track.clientWidth;
      const offs=frames.map((f,i)=>max*i/last);
      geo={step,lead,top,sh,offs,rtl:isRtl()}; pinned=true;
      update();
    }
    // page scroll -> position on the line; each station eases in and settles, but the line never stalls
    function update(){
      if(!pinned||!geo) return;
      const x=Math.max(0,Math.min(last,(geo.top-rail.getBoundingClientRect().top-geo.lead)/geo.step));
      const i=Math.min(Math.floor(x),last-1), t=x-i;
      const e=0.35*t+0.65*t*t*(3-2*t);
      const off=geo.offs[i]+(geo.offs[i+1]-geo.offs[i])*e;
      const sl=geo.rtl?-off:off;
      if(Math.abs(track.scrollLeft-sl)>0.5) track.scrollLeft=sl;
      const on=e<0.5?i:i+1;
      if(on!==idx) mark(on);
    }
    function stationY(i){ return rail.getBoundingClientRect().top+scrollY-geo.top+geo.lead+i*geo.step; }

    function offsetFor(f){
      const pad=parseFloat(getComputedStyle(track).scrollPaddingInlineStart)||0;
      const tr=track.getBoundingClientRect(), fr=f.getBoundingClientRect();
      return isRtl() ? (fr.right-(tr.right-pad)) : (fr.left-(tr.left+pad));
    }
    function go(i,user){
      if(pinned){
        const from=(aim>=0 && Date.now()-aimAt<700) ? aim : idx; // repeated presses keep counting from the target
        i=Math.max(0,Math.min(last,i-idx+from));
        aim=i; aimAt=Date.now();
        window.scrollTo({top:stationY(i),behavior:reduced?'auto':'smooth'});
        if(user) track.focus({preventScroll:true});
        return;
      }
      i=(i+frames.length)%frames.length;
      programmatic=Date.now();
      track.scrollBy({left:offsetFor(frames[i]),behavior:(reduced?'auto':'smooth')});
      mark(i);
      if(user) track.focus({preventScroll:true});
    }
    function tick(){ if(playing && !pinned && visible && !hovering && !document.hidden) go(idx+1); }
    function start(){ held=false; playing=true; clearInterval(timer); timer=setInterval(tick,DWELL); setPlayIcon(); }
    function stop(){ held=true; playing=false; clearInterval(timer); setPlayIcon(); }
    function setPlayIcon(){
      if(!playBtn) return;
      playBtn.innerHTML=svg(playing?'pause':'play');
      playBtn.setAttribute('aria-label', playing?'Pause the production rail':'Play the production rail');
      playBtn.setAttribute('aria-pressed', playing?'false':'true');
    }
    playBtn && playBtn.addEventListener('click',()=>{ playing?stop():(start(),tick()); });
    prevBtn && prevBtn.addEventListener('click',()=>{ stop(); go(idx-1,true); });
    nextBtn && nextBtn.addEventListener('click',()=>{ stop(); go(idx+1,true); });

    // strip mode: user scrolling (drag, swipe, wheel, keys) picks the nearest frame and holds autoplay
    let raf=0;
    track.addEventListener('scroll',()=>{
      if(pinned||raf) return;
      raf=requestAnimationFrame(()=>{
        raf=0;
        let best=0, bd=Infinity;
        frames.forEach((f,k)=>{ const d=Math.abs(offsetFor(f)); if(d<bd){bd=d;best=k;} });
        if(best!==idx) mark(best);
      });
    },{passive:true});
    ['pointerdown','wheel','touchstart'].forEach(ev=>track.addEventListener(ev,()=>{ if(!pinned && Date.now()-programmatic>60) stop(); },{passive:true}));
    // pinned mode: a sideways trackpad swipe scrolls the page, a sideways thumb swipe moves one station
    track.addEventListener('wheel',e=>{
      if(!pinned || Math.abs(e.deltaX)<=Math.abs(e.deltaY)) return;
      e.preventDefault();
      window.scrollBy({top:e.deltaX*(e.deltaMode===1?16:1)*(isRtl()?-1:1),behavior:'instant'});
    },{passive:false});
    let tx=0, ty=0;
    track.addEventListener('touchstart',e=>{ const p=e.touches[0]; tx=p.clientX; ty=p.clientY; },{passive:true});
    track.addEventListener('touchend',e=>{
      if(!pinned) return;
      const p=e.changedTouches[0], dx=p.clientX-tx, dy=p.clientY-ty;
      if(Math.abs(dx)>40 && Math.abs(dx)>1.5*Math.abs(dy)) go(idx+((dx<0)!==isRtl()?1:-1),false);
    },{passive:true});
    track.addEventListener('keydown',e=>{
      const rtl=isRtl();
      if(e.key==='ArrowRight'){ e.preventDefault(); stop(); go(idx+(rtl?-1:1),true); }
      if(e.key==='ArrowLeft'){ e.preventDefault(); stop(); go(idx+(rtl?1:-1),true); }
    });
    rail.addEventListener('pointerenter',e=>{ if(e.pointerType==='mouse') hovering=true; });
    rail.addEventListener('pointerleave',()=>{ hovering=false; });
    rail.addEventListener('focusin',()=>{ hovering=true; });
    rail.addEventListener('focusout',e=>{ if(!rail.contains(e.relatedTarget)) hovering=false; });
    if('IntersectionObserver' in window){
      new IntersectionObserver(es=>{ visible=es[0].isIntersecting; },{threshold:0.35}).observe(rail);
      const cutIO=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('cut', e.intersectionRatio>0 && e.intersectionRatio<0.97)),{root:track,threshold:[0,0.97,1]});
      frames.forEach(f=>cutIO.observe(f));
    }
    addEventListener('scroll',update,{passive:true});
    let rraf=0;
    addEventListener('resize',()=>{ if(!rraf) rraf=requestAnimationFrame(()=>{ rraf=0; layout(false); }); });
    if('ResizeObserver' in window) new ResizeObserver(()=>{ if(pinned && geo && Math.abs(stage.offsetHeight-geo.sh)>1) layout(true); }).observe(stage);
    document.fonts && document.fonts.ready.then(()=>layout(true));
    addEventListener('load',()=>layout(true));
    document.addEventListener('dx:lang',()=>{ mark(idx); layout(true); });
    mark(0);
    layout(true);
  }

  /* ---------- boot ---------- */
  function boot(){
    document.documentElement.lang=lang;
    document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
    buildHeader(); buildFooter(); buildModal(); bindRFQ();
    document.querySelectorAll('[data-coupon]').forEach(el=>{ el.outerHTML=couponHTML(); });
    if(window.DXPAGE) try{ window.DXPAGE(); }catch(err){ console.error(err); }
    applyLang(document);
    document.querySelectorAll('form[data-inline-inquiry]').forEach(bindInlineForm);
    initObservers();
    document.querySelectorAll('.rail').forEach(r=>{ try{ initRail(r); }catch(err){ console.error(err); } });
  }
  window.DXUI={ svg, t, bi, esc, get lang(){return lang;}, get reduced(){return reduced;}, setLang, openRFQ, submitInquiry,
    catalogItem, productRow, productCard:productRow, certTile, certBoard, couponHTML, tempOf, icons:I, reobserve:initObservers, applyLang, bindInlineForm };

  if(document.readyState!=='loading') boot(); else document.addEventListener('DOMContentLoaded',boot);
})();
