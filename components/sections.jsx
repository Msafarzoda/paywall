/* Main sections */

function Hero({ tweaks }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <>
    {/* NAV */}
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="wrap nav-row">
        <a href="#" className="logo"><ZehnLogo/> <span style={{fontSize:20,letterSpacing:"-0.02em"}}>zehn</span></a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#library">Library</a>
          <a href="#clubs">Book clubs</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost" style={{padding:"10px 16px"}}>Sign in</a>
          <a href="#download" className="btn btn-primary" style={{padding:"10px 16px"}}>Get the app</a>
        </div>
      </div>
    </nav>

    {/* HERO */}
    <section style={{position:"relative",paddingTop:180,paddingBottom:80,overflow:"hidden"}}>
      {tweaks.show_grid_decor && <div className="grid-decor"/>}
      {/* radial glow */}
      <div style={{position:"absolute",top:"-30%",left:"50%",transform:"translateX(-50%)",width:1100,height:1100,background:"radial-gradient(circle,rgba(130,255,127,.18) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div className="wrap" style={{position:"relative",zIndex:2}}>
        <div style={{display:"grid",gridTemplateColumns:"1.15fr 1fr",gap:60,alignItems:"center"}} className="hero-grid">
          <div>
            <div className="chip"><span className="dot"/> New · AI Book Coach 2.0</div>
            <h1 style={{fontSize:"clamp(44px,6.6vw,84px)",fontWeight:800,letterSpacing:"-0.035em",lineHeight:.98,marginTop:22,textWrap:"balance"}}>
              {tweaks.hero_headline.split("\n").map((line,i)=>(
                <React.Fragment key={i}>
                  {i===1 ? <span><em className="lora" style={{color:"var(--green)",fontWeight:400}}>Feel smarter</em> doing it.</span> : line}
                  {i===0 && <br/>}
                </React.Fragment>
              ))}
            </h1>
            <p style={{marginTop:22,fontSize:19,lineHeight:1.55,color:"var(--text-dim)",maxWidth:540,textWrap:"pretty"}}>
              {tweaks.hero_sub}
            </p>
            <div style={{display:"flex",gap:12,marginTop:32,flexWrap:"wrap"}}>
              <a href="#" className="btn btn-dark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                App Store
              </a>
              <a href="#" className="btn btn-dark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.206 12l2.492-2.492zM5.864 2.658 16.802 8.99l-2.302 2.303-8.636-8.635z"/></svg>
                Google Play
              </a>
              <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--text-dim)",fontSize:13,marginLeft:4}}>
                <div style={{display:"flex"}}>{[0,1,2,3,4].map(i=>(<span key={i} style={{color:"var(--cream)",fontSize:16}}>★</span>))}</div>
                4.9 · 38k+ reviews
              </div>
            </div>
            {/* KPIs */}
            <div style={{display:"flex",gap:40,marginTop:48,flexWrap:"wrap"}}>
              {[
                {v:"10 min",l:"avg. daily session"},
                {v:"2,400+",l:"titles & summaries"},
                {v:"93%",l:"finish their first book"},
              ].map(k=>(
                <div key={k.l}>
                  <div style={{fontSize:28,fontWeight:800,letterSpacing:"-0.02em"}}>{k.v}</div>
                  <div style={{fontSize:12,color:"var(--text-mute)",marginTop:2,textTransform:"uppercase",letterSpacing:".08em",fontFamily:"'JetBrains Mono',monospace"}}>{k.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:"relative",display:"flex",justifyContent:"center"}}>
            <div style={{position:"absolute",inset:"-60px -40px",background:"radial-gradient(circle,rgba(130,255,127,.18),transparent 60%)",filter:"blur(40px)"}}/>
            {/* back phone (peek) */}
            <div style={{position:"absolute",top:60,right:"-6%",zIndex:1,transform:"rotate(8deg) scale(.78)",opacity:.55,filter:"blur(1px)"}}>
              <ChatScreen/>
            </div>
            <div style={{position:"relative",zIndex:2,transform:"rotate(-4deg) scale(1.08)"}}>
              <PlayerScreen/>
            </div>
            {/* floating label */}
            <div style={{position:"absolute",top:"10%",right:-16,background:"rgba(5,42,59,.95)",border:"1px solid var(--line-2)",borderRadius:14,padding:"12px 16px",fontSize:12,fontWeight:500,backdropFilter:"blur(10px)",display:"flex",alignItems:"center",gap:10,zIndex:4,boxShadow:"0 20px 50px rgba(0,0,0,.4)"}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 12px var(--green)"}}/>
              <div>
                <div style={{fontSize:10,color:"var(--text-mute)",fontFamily:"'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Now playing</div>
                <div style={{marginTop:2}}>Atomic Habits · Chapter 4</div>
              </div>
            </div>
            <div style={{position:"absolute",bottom:"16%",left:-32,background:"rgba(5,42,59,.95)",border:"1px solid var(--line-2)",borderRadius:14,padding:"12px 14px",fontSize:12,fontWeight:500,backdropFilter:"blur(10px)",zIndex:4,maxWidth:210,boxShadow:"0 20px 50px rgba(0,0,0,.4)"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,fontSize:10,color:"var(--green)",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",marginBottom:6,fontFamily:"'JetBrains Mono',monospace"}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14 9 L22 9 L15.5 13.5 L18 21 L12 16.5 L6 21 L8.5 13.5 L2 9 L10 9 Z"/></svg>
                AI note
              </div>
              <div style={{lineHeight:1.4,fontSize:12}}>"You do not rise to the level of your goals. You <span style={{color:"var(--green)",fontWeight:600}}>fall to the level of your systems</span>."</div>
            </div>
            {/* streak badge bottom-right */}
            <div style={{position:"absolute",bottom:"32%",right:-12,background:"linear-gradient(145deg,var(--cream),#E8C964)",color:"var(--ink)",borderRadius:14,padding:"10px 14px",zIndex:4,boxShadow:"0 14px 40px rgba(251,242,168,.25)",transform:"rotate(5deg)"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",opacity:.7,fontFamily:"'JetBrains Mono',monospace"}}>Streak</div>
              <div style={{fontSize:22,fontWeight:800,letterSpacing:"-0.02em",marginTop:2,display:"flex",alignItems:"baseline",gap:2}}>128 <span style={{fontSize:12,opacity:.65}}>days</span></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:980px){.hero-grid{grid-template-columns:1fr!important;gap:60px!important}}`}</style>
    </section>

    {/* LOGO STRIP */}
    <section style={{padding:"40px 0 80px",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      <div className="wrap" style={{display:"flex",alignItems:"center",gap:40,flexWrap:"wrap",justifyContent:"space-between",color:"var(--text-mute)"}}>
        <div style={{fontSize:12,letterSpacing:".12em",textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace"}}>As featured in</div>
        {["TechCrunch","The Verge","Wired","Product Hunt","FastCo"].map(n=>(
          <div key={n} style={{fontWeight:700,fontSize:20,opacity:.6,letterSpacing:"-0.02em"}}>{n}</div>
        ))}
      </div>
    </section>
    </>
  );
}

/* FEATURES */
function Features() {
  const items = [
    {
      eyebrow:"Ask AI",
      title:"A coach for every chapter",
      body:"Stuck on a concept? Ask Zehn AI. It answers using the author's ideas — not the open web — so every reply is grounded in the book.",
      render: () => <ChatScreen/>,
      accent:"var(--green)",
    },
    {
      eyebrow:"Smart summaries",
      title:"The 10-minute version",
      body:"Every book ships with an audio + text summary by real editors. Skim before you commit, or use it as a daily micro-read on the train.",
      render: () => <HomeScreen/>,
      accent:"var(--cream)",
    },
    {
      eyebrow:"Book clubs",
      title:"Read together, finish together",
      body:"Join or start a club. Weekly challenges, XP, and a feed that surfaces the best annotations from everyone reading the same book.",
      render: () => <ClubsScreen/>,
      accent:"#6EC1D6",
    },
  ];
  return (
    <section id="features" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What's inside</div>
          <h2>Four <em>tiny habits</em> that stack into a reading life.</h2>
          <p>Zehn is one app, four loops: listen, summarize, ask, discuss. Each one designed to work in ten minutes.</p>
        </div>
        <div style={{display:"grid",gap:24}}>
          {items.map((it,i)=>(
            <div key={i} className="card feature-row" style={{padding:0,display:"grid",gridTemplateColumns: i%2? "1fr 1.1fr" : "1.1fr 1fr",gap:0,alignItems:"stretch",minHeight:460}}>
              <div style={{padding:"56px 52px",display:"flex",flexDirection:"column",justifyContent:"center",order:i%2?2:1}}>
                <div className="eyebrow" style={{color:it.accent}}>{it.eyebrow}</div>
                <h3 style={{fontSize:40,fontWeight:800,letterSpacing:"-0.028em",lineHeight:1.05,marginTop:14,textWrap:"balance"}}>{it.title}</h3>
                <p style={{marginTop:16,color:"var(--text-dim)",fontSize:17,lineHeight:1.55,textWrap:"pretty"}}>{it.body}</p>
                <div style={{marginTop:28,display:"flex",gap:10,flexWrap:"wrap"}}>
                  {["Personal library","Offline","Cross-device"].map(t=>(
                    <span key={t} style={{padding:"6px 12px",borderRadius:999,border:"1px solid var(--line-2)",fontSize:12,color:"var(--text-dim)"}}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{background:`radial-gradient(circle at ${i%2?"30%":"70%"} 40%, rgba(130,255,127,.1), transparent 70%), linear-gradient(160deg, rgba(255,255,255,.02), transparent)`,display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 0",order:i%2?1:2,borderLeft:i%2?"none":"1px solid var(--line)",borderRight:i%2?"1px solid var(--line)":"none",position:"relative",overflow:"hidden"}}>
                <div style={{transform:"scale(.92)"}}>{it.render()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:880px){.feature-row{grid-template-columns:1fr!important}.feature-row > div{order:unset!important;border:none!important}}`}</style>
    </section>
  );
}

/* Clubs screen — reuse phone frame */
function ClubsScreen(){
  return (
    <div style={{width:280,aspectRatio:"280/580",background:"#000",borderRadius:44,padding:9,boxShadow:"0 40px 80px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.08)"}}>
      <div style={{position:"absolute"}}/>
      <div style={{width:"100%",height:"100%",borderRadius:36,background:"#03212E",overflow:"hidden",position:"relative",color:"#EAF3F8",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
        <div style={{position:"absolute",top:8,left:"50%",transform:"translateX(-50%)",width:86,height:22,background:"#000",borderRadius:12,zIndex:3}}/>
        <div style={{display:"flex",justifyContent:"space-between",padding:"14px 22px 0",fontSize:11,fontWeight:600}}><span>9:41</span><span>􀛨 􀛪</span></div>
        <div style={{padding:"34px 16px 0"}}>
          <div style={{fontWeight:800,fontSize:20,letterSpacing:"-0.02em"}}>Your Club</div>
          <div style={{fontSize:11,color:"rgba(255,255,255,.55)",marginTop:2}}>The Morning Pages · 1,248 members</div>
          {/* active challenge */}
          <div style={{marginTop:14,background:"linear-gradient(160deg,#063349,#052A3B)",border:"1px solid rgba(130,255,127,.2)",borderRadius:14,padding:14}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:9,color:"#82FF7F",letterSpacing:".12em",fontWeight:700,textTransform:"uppercase"}}>Week 3 · Live</div>
              <div style={{fontSize:9,color:"rgba(255,255,255,.5)"}}>Ends in 2d</div>
            </div>
            <div style={{fontWeight:700,fontSize:13,marginTop:6,lineHeight:1.2}}>Finish "Atomic Habits" together</div>
            <div style={{marginTop:10,height:5,background:"rgba(255,255,255,.08)",borderRadius:999,overflow:"hidden"}}>
              <div style={{width:"68%",height:"100%",background:"linear-gradient(90deg,#82FF7F,#FBF2A8)"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:8,fontSize:9}}>
              <span style={{color:"rgba(255,255,255,.6)"}}>68% complete</span>
              <span style={{color:"#82FF7F",fontWeight:700}}>+120 XP</span>
            </div>
          </div>
          {/* member avatars */}
          <div style={{display:"flex",gap:-6,marginTop:14,alignItems:"center"}}>
            <div style={{display:"flex"}}>
              {["#82FF7F","#FBF2A8","#6EC1D6","#E88B5C","#B78FD8"].map((c,i)=>(
                <div key={i} style={{width:26,height:26,borderRadius:"50%",background:c,border:"2px solid #03212E",marginLeft:i?-8:0,fontSize:10,fontWeight:700,color:"#03212E",display:"grid",placeItems:"center"}}>{"MKANRT"[i]}</div>
              ))}
            </div>
            <div style={{fontSize:10,color:"rgba(255,255,255,.55)",marginLeft:8}}>+42 reading now</div>
          </div>
          {/* post */}
          <div style={{marginTop:16,fontSize:10,fontWeight:700,color:"rgba(255,255,255,.8)",letterSpacing:".08em",textTransform:"uppercase"}}>Top post</div>
          <div style={{marginTop:8,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:12,padding:12}}>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              <div style={{width:22,height:22,borderRadius:"50%",background:"#FBF2A8",color:"#03212E",display:"grid",placeItems:"center",fontSize:9,fontWeight:700}}>S</div>
              <div style={{fontSize:10,fontWeight:700}}>Sana P.</div>
              <div style={{fontSize:9,color:"rgba(255,255,255,.4)"}}>· 2h</div>
            </div>
            <div style={{fontSize:10,marginTop:8,lineHeight:1.45,color:"rgba(255,255,255,.85)"}}>Ch. 3 reframed my morning — habit stacking works. Anyone else cue their workout to coffee?</div>
            <div style={{display:"flex",gap:14,marginTop:10,fontSize:9,color:"rgba(255,255,255,.5)"}}>
              <span>♡ 124</span><span>💬 18</span><span>↗ Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* WAVE / LISTENING STATS */
function Stats(){
  return (
    <section className="section" style={{paddingTop:40}}>
      <div className="wrap">
        <div className="card" style={{padding:"56px 52px",display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:48,alignItems:"center"}}>
          <div>
            <div className="eyebrow">Listening stats</div>
            <h2 style={{fontSize:44,fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.05,marginTop:14}}>Your reading life, <em className="lora" style={{color:"var(--green)"}}>visualized.</em></h2>
            <p style={{marginTop:16,color:"var(--text-dim)",fontSize:17,lineHeight:1.55}}>See streaks, XP, category mix, and how many books you finished this quarter. Share a recap at year's end — without the smug screenshots.</p>
          </div>
          <div>
            {/* bar chart */}
            <div style={{display:"flex",alignItems:"flex-end",gap:6,height:160,padding:"0 4px 4px",borderBottom:"1px solid var(--line-2)"}}>
              {[34,52,28,68,42,86,64,78,48,92,58,74].map((h,i)=>(
                <div key={i} style={{flex:1,height:`${h}%`,background:`linear-gradient(180deg, var(--green) 0%, rgba(130,255,127,0.25) 100%)`,borderRadius:"4px 4px 0 0",position:"relative"}}>
                  {i===9 && <div style={{position:"absolute",top:-28,left:"50%",transform:"translateX(-50%)",background:"#fff",color:"#03212E",padding:"3px 8px",borderRadius:6,fontSize:10,fontWeight:700,whiteSpace:"nowrap"}}>92m ▼</div>}
                </div>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:10,fontSize:10,color:"var(--text-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
              {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i)=><span key={i}>{m}</span>)}
            </div>
            <div style={{display:"flex",gap:24,marginTop:24}}>
              <div><div style={{fontSize:22,fontWeight:800}}>47</div><div style={{fontSize:11,color:"var(--text-mute)"}}>Books this yr</div></div>
              <div><div style={{fontSize:22,fontWeight:800}}>128<span style={{color:"var(--green)",fontSize:16}}>d</span></div><div style={{fontSize:11,color:"var(--text-mute)"}}>Current streak</div></div>
              <div><div style={{fontSize:22,fontWeight:800}}>8,420</div><div style={{fontSize:11,color:"var(--text-mute)"}}>Total XP</div></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:880px){.card{padding:32px!important}.section .card > div:first-child{grid-column:1/-1}.section .card{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* TESTIMONIALS */
function Testimonials(){
  const quotes = [
    {t:"I finished more books in six weeks with Zehn than the previous two years. The 10-minute summary is the gateway drug.",n:"Maya R.",r:"Product designer"},
    {t:"The AI coach caught an assumption I'd missed in a chapter on stoicism. That moment sold me.",n:"Daniel C.",r:"PhD student"},
    {t:"My book club finally reads the book. The weekly challenge does something Discord never did.",n:"Priya S.",r:"Teacher"},
    {t:"I use it on the treadmill. Ask AI, get the gist, decide if I want the whole book. Perfect filter.",n:"Jordan K.",r:"Founder"},
  ];
  return (
    <section className="section" id="library">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">From our readers</div>
          <h2>Fewer unread tabs. <em>More finished books.</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
          {quotes.map((q,i)=>(
            <div key={i} className="card" style={{padding:28}}>
              <div style={{display:"flex",gap:2,marginBottom:12}}>{[0,1,2,3,4].map(s=><span key={s} style={{color:"var(--cream)",fontSize:14}}>★</span>)}</div>
              <p style={{fontSize:16,lineHeight:1.5,textWrap:"pretty"}}>"{q.t}"</p>
              <div style={{marginTop:20,display:"flex",alignItems:"center",gap:10,paddingTop:16,borderTop:"1px solid var(--line)"}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:`hsl(${i*80},60%,60%)`,color:"var(--ink)",display:"grid",placeItems:"center",fontWeight:700,fontSize:13}}>{q.n[0]}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700}}>{q.n}</div>
                  <div style={{fontSize:11,color:"var(--text-mute)"}}>{q.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PRICING */
function Pricing(){
  const plans = [
    {n:"Free",p:"$0",s:"forever",f:["3 summaries / month","AI coach (limited)","1 book club"],cta:"Start free",dark:false},
    {n:"Pro",p:"$8.99",s:"per month",f:["Unlimited summaries","Full audiobook library","Unlimited AI chats","Offline listening","Listening stats"],cta:"Try 14 days free",dark:true,badge:"Most picked"},
    {n:"Teams",p:"$24",s:"per month · up to 10",f:["Everything in Pro","Shared book clubs","Admin dashboard","Priority support"],cta:"Contact sales",dark:false},
  ];
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Pricing</div>
          <h2>Ten minutes a day. <em>Pennies a chapter.</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}} className="pricing-grid">
          {plans.map((pl,i)=>(
            <div key={i} className="card" style={{padding:32,position:"relative",background:pl.dark?"linear-gradient(180deg,#82FF7F 0%, #68E564 100%)":undefined,color:pl.dark?"var(--ink)":undefined,border:pl.dark?"none":undefined}}>
              {pl.badge && <div style={{position:"absolute",top:16,right:16,background:"var(--ink)",color:"var(--green)",padding:"4px 10px",borderRadius:999,fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace"}}>{pl.badge}</div>}
              <div style={{fontSize:14,fontWeight:700,letterSpacing:"-0.01em"}}>{pl.n}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:6,marginTop:18}}>
                <span style={{fontSize:46,fontWeight:800,letterSpacing:"-0.03em"}}>{pl.p}</span>
                <span style={{fontSize:13,opacity:.6}}>{pl.s}</span>
              </div>
              <ul style={{listStyle:"none",marginTop:24,display:"flex",flexDirection:"column",gap:10}}>
                {pl.f.map(f=>(
                  <li key={f} style={{display:"flex",gap:10,alignItems:"flex-start",fontSize:14}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{flexShrink:0,marginTop:3,opacity:.9}}><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="btn" style={{marginTop:28,width:"100%",justifyContent:"center",background:pl.dark?"var(--ink)":"transparent",color:pl.dark?"#fff":"var(--text)",border:pl.dark?"none":"1px solid var(--line-2)"}}>{pl.cta}</button>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:880px){.pricing-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* CTA */
function CTA(){
  return (
    <section id="download" className="section" style={{paddingBottom:60}}>
      <div className="wrap">
        <div className="card" style={{padding:"80px 52px",textAlign:"center",background:"radial-gradient(ellipse at center, rgba(130,255,127,.14), transparent 60%), linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01))",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 80%, rgba(251,242,168,.08), transparent 40%)"}}/>
          <div style={{position:"relative"}}>
            <h2 style={{fontSize:"clamp(36px,5vw,64px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.02,textWrap:"balance"}}>Your next book<br/><em className="lora" style={{color:"var(--green)"}}>starts in ten minutes.</em></h2>
            <p style={{marginTop:20,color:"var(--text-dim)",fontSize:18,maxWidth:500,margin:"20px auto 0"}}>Download Zehn. Finish what you start.</p>
            <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:32,flexWrap:"wrap"}}>
              <a href="#" className="btn btn-primary" style={{padding:"16px 28px",fontSize:15}}>Download for iOS</a>
              <a href="#" className="btn btn-ghost" style={{padding:"16px 28px",fontSize:15}}>Download for Android</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
function Footer(){
  const cols = [
    {h:"Product",l:["Features","Library","Clubs","Pricing","Changelog"]},
    {h:"Company",l:["About","Careers","Press","Contact"]},
    {h:"Resources",l:["Help center","API","Status","Brand kit"]},
    {h:"Legal",l:["Terms","Privacy","Cookies"]},
  ];
  return (
    <footer style={{borderTop:"1px solid var(--line)",padding:"64px 0 48px"}}>
      <div className="wrap">
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:40}} className="footer-grid">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <ZehnLogo/>
              <span style={{fontSize:20,fontWeight:800,letterSpacing:"-0.02em"}}>zehn</span>
            </div>
            <p style={{marginTop:16,color:"var(--text-dim)",fontSize:14,maxWidth:320,lineHeight:1.5}}>Read less. Know more. A ten-minute reading habit, built around your day.</p>
            <div style={{marginTop:20,display:"flex",gap:10}}>
              {["X","In","IG","YT"].map(s=>(
                <div key={s} style={{width:36,height:36,borderRadius:"50%",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",fontSize:12,fontWeight:700,color:"var(--text-dim)"}}>{s}</div>
              ))}
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.h}>
              <div style={{fontSize:11,letterSpacing:".14em",textTransform:"uppercase",color:"var(--text-mute)",fontFamily:"'JetBrains Mono',monospace",fontWeight:600,marginBottom:16}}>{c.h}</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {c.l.map(x=>(<a key={x} href="#" style={{fontSize:14,color:"var(--text-dim)"}}>{x}</a>))}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:56,paddingTop:24,borderTop:"1px solid var(--line)",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:16,color:"var(--text-mute)",fontSize:12}}>
          <div>© 2026 Zehn Labs. All rights reserved.</div>
          <div style={{fontFamily:"'JetBrains Mono',monospace"}}>v2.4.0 · Made with ☕ + 📖</div>
        </div>
      </div>
      <style>{`@media (max-width:880px){.footer-grid{grid-template-columns:1fr 1fr!important}.footer-grid > div:first-child{grid-column:1/-1}}`}</style>
    </footer>
  );
}

window.Hero = Hero;
window.Features = Features;
window.Stats = Stats;
window.Testimonials = Testimonials;
window.Pricing = Pricing;
window.CTA = CTA;
window.Footer = Footer;
