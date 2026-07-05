/* =====================================================================
   DEXIN demo — shared UI: header, footer, mega-menu, i18n, modal,
   hero slideshow, count-up, reveal, render helpers.
   ===================================================================== */
(function(){
  const DX = window.DX;
  const LS_KEY = 'dx_lang';
  let lang = localStorage.getItem(LS_KEY) || (((navigator.language||'').toLowerCase().indexOf('zh')===0)?'zh':'en');

  /* ---------- icons ---------- */
  const I = {
    filter:'<path d="M3 5h18M6 12h12M10 19h4"/>',
    flame:'<path d="M12 2s4 4 4 8a4 4 0 1 1-8 0c0-1.5.5-2.5 1-3 .5 2 2 2.5 2 2.5C10 16 8 7 12 2z"/>',
    layers:'<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    hex:'<path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z"/>',
    cube:'<path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
    iron:'<path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-5h6v5"/>',
    steel:'<path d="M3 8h18l-2 12H5L3 8zM7 8V5a5 5 0 0 1 10 0v3"/>',
    alu:'<path d="M5 4h14l-2 16H7L5 4zM9 4l1 16M15 4l-1 16"/>',
    invest:'<path d="M12 2l2.4 5 5.6.6-4 4 1 5.4L12 19l-5 3 1-5.4-4-4 5.6-.6L12 2z"/>',
    furnace:'<path d="M4 21V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15M4 21h16M9 21v-5a3 3 0 0 1 6 0v5"/>',
    shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>',
    arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowdn:'<path d="M12 5v14M6 13l6 6 6-6"/>',
    phone:'<path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail:'<path d="M3 6h18v12H3zM3 7l9 6 9-6"/>',
    pin:'<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    fax:'<path d="M7 9V3h10v6M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check:'<path d="M4 12l5 5L20 6"/>',
    close:'<path d="M6 6l12 12M18 6L6 18"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    play:'<path d="M6 4l14 8-14 8V4z" fill="currentColor" stroke="none"/>',
    pause:'<path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" stroke="none"/>',
    quote:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    sample:'<path d="M9 3h6v2l-1 1v4l5 9a2 2 0 0 1-2 3H7a2 2 0 0 1-2-3l5-9V6L9 5z"/>',
    spark:'<path d="M12 3v6m0 6v6M3 12h6m6 0h6"/>',
    shield2:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
    gear:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1l-.4-2.5H9.6l-.4 2.5a7 7 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.4 2.5h4.8l.4-2.5a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6a7 7 0 0 0 .1-1z"/>',
    truck:'<path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a2 2 0 1 0 0 .1M17 18a2 2 0 1 0 0 .1"/>',
    wechat:'<path d="M9 4C5 4 2 6.7 2 10c0 1.9 1 3.5 2.6 4.6L4 17l2.8-1.4c.7.2 1.5.3 2.2.3M16 8c-3.3 0-6 2.4-6 5.3 0 3 2.7 5.3 6 5.3.6 0 1.2-.1 1.8-.3L20 19l-.5-1.8C20.4 16.4 21 15 21 13.4 21 10.4 18.8 8 16 8z"/>',
    whatsapp:'<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.6-4.1A8 8 0 1 1 20 11.5z"/><path d="M9 8.5c.2 2.5 2 4.3 4.5 4.5.6 0 1.2-.4 1.4-1 .1-.3 0-.6-.3-.8l-1.2-.6c-.3-.1-.6 0-.8.2l-.3.4c-.7-.3-1.3-.9-1.6-1.6l.4-.3c.2-.2.3-.5.2-.8L10.3 7c-.2-.3-.5-.4-.8-.3-.6.2-1 .8-1 1.4z"/>',
  };
  const svg = (n,w)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||1.7}" stroke-linecap="round" stroke-linejoin="round">${I[n]||''}</svg>`;
  const t = o => (lang==='zh' && o.zh!=null) ? o.zh : o.en;

  /* ---------- header ---------- */
  function navItems(){
    return [
      {href:'index.html', en:'Home', zh:'首页'},
      {href:'products.html', en:'Products', zh:'产品中心', mega:true},
      {href:'industries.html', en:'Industries', zh:'应用行业'},
      {href:'about.html', en:'About', zh:'关于德鑫'},
      {href:'contact.html', en:'Contact', zh:'联系我们'},
    ];
  }
  function megaHTML(){
    const lines = DX.cats.map(c=>`<a href="products.html?cat=${c.slug}"><span class="dot"></span><span><span data-en>${c.en}</span><span data-zh>${c.zh}</span></span></a>`).join('');
    const inds = DX.industries.map(c=>`<a href="industries.html?ind=${c.slug}"><span class="dot" style="background:var(--steel)"></span><span><span data-en>${c.en}</span><span data-zh>${c.zh}</span></span></a>`).join('');
    return `<div class="mega"><div class="mega-inner">
      <div class="mega-col"><h4><span data-en>Browse by product line</span><span data-zh>按产品系列</span></h4>
        <div class="mega-links">${lines}</div></div>
      <div class="mega-col"><h4><span data-en>Browse by industry</span><span data-zh>按应用行业</span></h4>
        <div class="mega-links one">${inds}</div></div>
      <a class="mega-feature" href="products.html">
        <h4>FULL CATALOG</h4>
        <p><span data-en>Ceramic foam filters, fireproof insulation materials & casting auxiliaries.</span><span data-zh>泡沫陶瓷过滤器、陶瓷防火隔热材料及铸造辅材。</span></p>
        <span class="link-arrow" style="color:#fff"><span data-en>View all products</span><span data-zh>查看全部产品</span> ${svg('arrow')}</span>
      </a></div></div>`;
  }
  function buildHeader(){
    const host = document.getElementById('site-header'); if(!host) return;
    const overlay = host.dataset.variant !== 'solid';
    host.className = 'site-header' + (overlay ? '' : ' static-solid');
    const items = navItems().map(n=>{
      if(n.mega) return `<li class="has-mega"><a href="${n.href}"><span data-en>${n.en}</span><span data-zh>${n.zh}</span></a>${megaHTML()}</li>`;
      return `<li><a href="${n.href}"><span data-en>${n.en}</span><span data-zh>${n.zh}</span></a></li>`;
    }).join('');
    host.innerHTML = `<div class="container bar">
      <a class="brand" href="index.html">
        <span class="mark">${svg('flame',1.8)}</span>
        <span>DEXIN<small><span data-en>Advanced Ceramics</span><span data-zh>德鑫陶瓷新材料</span></small></span>
      </a>
      <nav><ul class="nav">${items}</ul></nav>
      <div class="header-actions">
        <div class="lang-toggle">
          <button data-lang="en" class="${lang==='en'?'active':''}">EN</button>
          <button data-lang="zh" class="${lang==='zh'?'active':''}">中文</button>
        </div>
        <a class="btn btn-primary btn-sm" href="#" data-rfq data-rfq-type="quote">${svg('quote')}<span data-en>Request a Quote</span><span data-zh>获取报价</span></a>
        <button class="hamburger" aria-label="Menu">${svg('menu')}</button>
      </div>
    </div>`;
    // mobile nav
    const mob = document.createElement('div'); mob.className='mobile-nav';
    mob.innerHTML = `<button class="mclose" aria-label="Close">${svg('close')}</button>` +
      navItems().map(n=>`<a href="${n.href}"><span data-en>${n.en}</span><span data-zh>${n.zh}</span></a>`).join('') +
      DX.cats.map(c=>`<a class="sub" href="products.html?cat=${c.slug}"><span data-en>${c.en}</span><span data-zh>${c.zh}</span></a>`).join('') +
      `<a href="#" data-rfq data-rfq-type="quote" style="color:var(--molten)"><span data-en>→ Request a Quote</span><span data-zh>→ 获取报价</span></a>
       <div style="margin-top:20px"><button class="btn btn-ghost btn-sm" data-lang-m="${lang==='en'?'zh':'en'}" style="color:#fff;border-color:rgba(255,255,255,.3)">${lang==='en'?'切换到中文':'Switch to English'}</button></div>`;
    document.body.appendChild(mob);
    host.querySelector('.hamburger').onclick=()=>mob.classList.add('open');
    mob.querySelector('.mclose').onclick=()=>mob.classList.remove('open');
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mob.classList.remove('open')));
    const lm = mob.querySelector('[data-lang-m]'); if(lm) lm.onclick=()=>{setLang(lm.dataset.langM);mob.classList.remove('open');};
    // lang buttons
    host.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
    // scroll solid
    if(overlay){
      const onScroll=()=>host.classList.toggle('solid', window.scrollY>40);
      onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
    }
  }

  /* ---------- footer ---------- */
  function buildFooter(){
    const host = document.getElementById('site-footer'); if(!host) return;
    const c = DX.contact;
    const catLinks = DX.cats.map(x=>`<a href="products.html?cat=${x.slug}"><span data-en>${x.en}</span><span data-zh>${x.zh}</span></a>`).join('');
    host.className='site-footer';
    host.innerHTML = `<div class="container">
      <div class="foot-grid">
        <div>
          <a class="brand" href="index.html"><span class="mark">${svg('flame',1.8)}</span><span>DEXIN</span></a>
          <p><span data-en>${DX.company.en} — advanced ceramic & refractory materials for the global foundry and high-temperature industries.</span><span data-zh>${DX.company.zh}——为全球铸造及高温行业提供先进陶瓷与耐火材料。</span></p>
          <div class="wechat"><div class="qr">${svg('wechat',1.4)}</div><div style="font-size:13px"><strong style="color:#fff;display:block"><span data-en>Scan on WeChat</span><span data-zh>微信扫一扫</span></strong><span data-en>Chat with our sales team</span><span data-zh>与销售团队沟通</span></div></div>
        </div>
        <div class="foot-col"><h4><span data-en>Products</span><span data-zh>产品系列</span></h4>${catLinks}</div>
        <div class="foot-col"><h4><span data-en>Company</span><span data-zh>公司</span></h4>
          <a href="about.html"><span data-en>About Dexin</span><span data-zh>关于德鑫</span></a>
          <a href="industries.html"><span data-en>Industries</span><span data-zh>应用行业</span></a>
          <a href="about.html#certs"><span data-en>Certifications</span><span data-zh>资质认证</span></a>
          <a href="contact.html"><span data-en>Contact</span><span data-zh>联系我们</span></a>
        </div>
        <div class="foot-col"><h4><span data-en>Contact</span><span data-zh>联系方式</span></h4>
          <ul class="foot-contact">
            <li>${svg('pin')}<span><span data-en>${c.addr_en}</span><span data-zh>${c.addr_zh}</span></span></li>
            <li>${svg('phone')}<span>${c.tel}</span></li>
            <li><a href="${c.whatsapp_link}" target="_blank" rel="noopener" style="display:flex;gap:12px;color:inherit">${svg('whatsapp')}<span>WhatsApp: ${c.whatsapp}</span></a></li>
            <li>${svg('mail')}<span>${c.email}</span></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© <span id="yr"></span> ${DX.company.en} · <span data-en>Demo redesign</span><span data-zh>演示改版</span></span>
        <span><span data-en>Zip ${c.zip} · Fax ${c.fax}</span><span data-zh>邮编 ${c.zip} · 传真 ${c.fax}</span></span>
      </div>
    </div>`;
    const yr=document.getElementById('yr'); if(yr) yr.textContent='2026';
  }

  /* ---------- RFQ / sample modal ---------- */
  function buildModal(){
    const wrap=document.createElement('div'); wrap.className='modal-backdrop'; wrap.id='rfq-modal';
    wrap.innerHTML=`<div class="modal" role="dialog" aria-modal="true">
      <div class="modal-head">
        <div><h3 data-mt-quote><span data-en>Request a Quote</span><span data-zh>获取报价</span></h3></div>
        <button class="x" aria-label="Close">${svg('close')}</button>
      </div>
      <div class="modal-sub" id="rfq-sub"></div>
      <a class="modal-wa" href="${DX.contact.whatsapp_link}" target="_blank" rel="noopener">
        ${svg('whatsapp',1.7)}<span><span data-en>Prefer to chat? Message us on WhatsApp</span><span data-zh>想直接沟通？WhatsApp 联系我们</span> · ${DX.contact.whatsapp}</span>
      </a>
      <form class="dx-form" novalidate>
        <div class="field"><label><span data-en>Product of interest</span><span data-zh>意向产品</span></label>
          <input type="text" id="rfq-product" readonly></div>
        <div class="field row">
          <div class="field"><label><span data-en>Name</span><span data-zh>姓名</span> <span class="req">*</span></label><input required></div>
          <div class="field"><label><span data-en>Company</span><span data-zh>公司</span></label><input></div>
        </div>
        <div class="field row">
          <div class="field"><label><span data-en>Email</span><span data-zh>邮箱</span> <span class="req">*</span></label><input type="email" required></div>
          <div class="field"><label><span data-en>Phone / WhatsApp</span><span data-zh>电话/微信</span></label><input></div>
        </div>
        <div class="field"><label><span data-en>Requirements (size, quantity, application)</span><span data-zh>需求说明（规格 / 数量 / 应用）</span></label><textarea></textarea></div>
        <div class="form-note">${svg('shield2',1.5)}<span><span data-en>Demo form — not connected. Wire to email or a form service (Formspree / Web3Forms) to receive submissions.</span><span data-zh>演示表单（未连接）。可接入邮箱或表单服务（Formspree / Web3Forms）以接收提交。</span></span></div>
        <button type="submit" class="btn btn-primary" style="justify-content:center">${svg('arrow')}<span data-en>Send Inquiry</span><span data-zh>发送询盘</span></button>
      </form>
      <div class="form-ok"><div class="ck">${svg('check',2.4)}</div>
        <h3><span data-en>Thank you!</span><span data-zh>提交成功！</span></h3>
        <p style="color:var(--muted);margin-top:8px"><span data-en>Your inquiry has been captured by the demo. Our team would reply within one business day.</span><span data-zh>演示已记录您的询盘，我们的团队将在一个工作日内回复。</span></p></div>
    </div>`;
    document.body.appendChild(wrap);
    const close=()=>wrap.classList.remove('open');
    wrap.querySelector('.x').onclick=close;
    wrap.addEventListener('click',e=>{if(e.target===wrap)close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    wrap.querySelector('form').addEventListener('submit',e=>{
      e.preventDefault();
      if(!e.target.checkValidity()){e.target.reportValidity();return;}
      wrap.querySelector('form').style.display='none';
      wrap.querySelector('.form-ok').classList.add('show');
    });
  }
  function openRFQ(product, type){
    const m=document.getElementById('rfq-modal'); if(!m) return;
    m.querySelector('form').style.display='grid';
    m.querySelector('.form-ok').classList.remove('show');
    const head=m.querySelector('[data-mt-quote]');
    const sub=m.querySelector('#rfq-sub');
    if(type==='sample'){
      head.innerHTML='<span data-en>Request a Sample</span><span data-zh>申请样品</span>';
      sub.innerHTML='<span data-en>Tell us your application and we will arrange a sample.</span><span data-zh>请告诉我们您的应用场景，我们将为您安排样品。</span>';
    }else{
      head.innerHTML='<span data-en>Request a Quote</span><span data-zh>获取报价</span>';
      sub.innerHTML='<span data-en>Send us your specs and we will reply with pricing and lead time.</span><span data-zh>发送规格需求，我们将回复价格与交期。</span>';
    }
    m.querySelector('#rfq-product').value = product || (lang==='zh'?'综合询盘':'General enquiry');
    applyLang(m);
    m.classList.add('open');
  }

  /* ---------- i18n ---------- */
  function applyLang(root){
    (root||document).querySelectorAll('[data-en-ph]').forEach(el=>{
      el.placeholder = lang==='zh' ? (el.dataset.zhPh||el.dataset.enPh) : el.dataset.enPh;
    });
  }
  function setLang(l){
    lang=l; localStorage.setItem(LS_KEY,l);
    document.documentElement.lang=l;
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
    applyLang(document);
    document.dispatchEvent(new CustomEvent('dx:lang',{detail:{lang:l}}));
  }

  /* ---------- count-up ---------- */
  function countUp(el){
    const target=+el.dataset.count, suf=el.dataset.suffix||'', dur=1400;
    // build the structure ONCE; per-frame we only update a text node (no innerHTML
    // churn) and the number uses a solid color (no background-clip:text) — both
    // prevent the section from flashing/repainting during the animation.
    el.innerHTML='<span class="v">0</span><span class="suffix">'+suf+'</span>';
    const v=el.querySelector('.v');
    let start=null;
    const step=ts=>{
      if(!start)start=ts; const p=Math.min((ts-start)/dur,1);
      v.textContent=Math.floor((1-Math.pow(1-p,3))*target).toLocaleString('en-US');
      if(p<1)requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- reveal + count observers ---------- */
  function initObservers(){
    const io=new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    const co=new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ countUp(e.target); co.unobserve(e.target);} });
    },{threshold:.5});
    document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));
  }

  /* ---------- hero / factory slideshow ---------- */
  function initSlideshow(sel){
    document.querySelectorAll(sel).forEach(box=>{
      const slides=[...box.querySelectorAll('.slide')]; if(slides.length<2){slides[0]&&slides[0].classList.add('show');return;}
      let i=0; slides[0].classList.add('show');
      setInterval(()=>{ slides[i].classList.remove('show'); i=(i+1)%slides.length; slides[i].classList.add('show'); }, 4200);
    });
  }

  /* ---------- render helpers ---------- */
  function productCard(p){
    const cat=DX.cats.find(c=>c.slug===p.cat)||{};
    return `<article class="pcard reveal">
      <a class="thumb" href="product.html?id=${p.id}">
        <span class="cat-chip"><span data-en>${cat.en||''}</span><span data-zh>${cat.zh||''}</span></span>
        <img src="${p.img}" alt="${p.en}" loading="lazy">
      </a>
      <div class="body">
        <h3><a href="product.html?id=${p.id}"><span data-en>${p.en}</span><span data-zh>${p.zh}</span></a></h3>
        <p><span data-en>${p.blurb_en}</span><span data-zh>${p.blurb_zh}</span></p>
        <div class="foot">
          <a class="link-arrow" href="product.html?id=${p.id}"><span data-en>Details</span><span data-zh>详情</span> ${svg('arrow')}</a>
          <a class="btn btn-ghost btn-sm" href="#" data-rfq data-rfq-type="quote" data-rfq-product="${(lang==='zh'?p.zh:p.en).replace(/"/g,'')}"><span data-en>Quote</span><span data-zh>报价</span></a>
        </div>
      </div>
    </article>`;
  }
  function certCard(c){
    const media = c.img
      ? `<div class="cert-shot"><img src="${c.img}" alt="${c.en}" loading="lazy"></div>`
      : `<div class="cert-shot cert-badge"><span>${c.code}</span></div>`;
    return `<div class="cert-card reveal">
      ${media}
      <div class="cert-meta">
        <div class="c-code">${c.code}</div>
        <div class="c-lbl"><span data-en>${c.en}</span><span data-zh>${c.zh}</span></div>
      </div>
    </div>`;
  }
  function categoryCard(c,img){
    return `<a class="catcard reveal" href="products.html?cat=${c.slug}">
      <img src="${img}" alt="${c.en}" loading="lazy">
      <span class="ico">${svg(c.icon)}</span>
      <span class="tagk"><span data-en>${c.tag_en}</span><span data-zh>${c.tag_zh}</span></span>
      <h3><span data-en>${c.en}</span><span data-zh>${c.zh}</span></h3>
      <p><span data-en>${c.desc_en}</span><span data-zh>${c.desc_zh}</span></p>
      <span class="more"><span data-en>Explore</span><span data-zh>查看</span> ${svg('arrow')}</span>
    </a>`;
  }

  /* ---------- delegated RFQ buttons ---------- */
  function bindRFQ(){
    document.addEventListener('click',e=>{
      const b=e.target.closest('[data-rfq]'); if(!b)return;
      e.preventDefault();
      openRFQ(b.dataset.rfqProduct, b.dataset.rfqType||'quote');
    });
  }

  /* ---------- boot ---------- */
  function boot(){
    document.documentElement.lang=lang;
    buildHeader(); buildFooter(); buildModal(); bindRFQ();
    applyLang(document);
    // page-specific render hook
    if(window.DXPAGE) try{ window.DXPAGE(); }catch(err){ console.error(err); }
    initObservers();
    initSlideshow('.hero-media'); initSlideshow('.factory .media');
  }
  /* ---------- expose (before boot so DXPAGE can use it) ---------- */
  window.DXUI={ svg, t, get lang(){return lang;}, setLang, openRFQ, productCard, categoryCard, certCard,
    icons:I, reobserve:initObservers, applyLang };

  if(document.readyState!=='loading') boot(); else document.addEventListener('DOMContentLoaded',boot);
})();
