// ─── Zehn Paywall Screens ───
// Three variations that match the rest of the Zehn system:
// dark navy #03212E base, electric green #82FF7F accent, Plus Jakarta Sans.

function PWZehnMark({ size = 32 }){
  const color = "#03212E";
  return (
    <div style={{width:size,height:size,borderRadius:size*0.27,background:"linear-gradient(145deg,#82FF7F,#92F090)",display:"grid",placeItems:"center",boxShadow:"0 6px 22px rgba(130,255,127,.25)"}}>
      <svg width={size*0.58} height={size*0.58} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="2.6" rx="1.3" fill={color}/>
        <rect x="3" y="10.7" width="18" height="2.6" rx="1.3" fill={color} transform="rotate(-32 12 12)"/>
        <rect x="3" y="17.4" width="18" height="2.6" rx="1.3" fill={color}/>
      </svg>
    </div>
  );
}

function PWPhone({ children, bg="var(--ink)" }){
  return (
    <div style={{width:390,height:800,borderRadius:52,background:"#000",padding:9,boxShadow:"0 40px 80px rgba(0,0,0,.35), 0 0 0 1px rgba(0,0,0,.2)",position:"relative"}}>
      <div style={{width:"100%",height:"100%",borderRadius:44,background:bg,overflow:"hidden",position:"relative",color:"var(--text)",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
        <div style={{position:"absolute",top:12,left:"50%",transform:"translateX(-50%)",width:120,height:34,background:"#000",borderRadius:22,zIndex:50}}/>
        <div style={{position:"absolute",top:0,left:0,right:0,padding:"18px 34px 0",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:16,fontWeight:600,color:"#fff",zIndex:10}}>
          <span>9:41</span>
          <span style={{display:"flex",gap:6,alignItems:"center"}}>
            <svg width="18" height="11" viewBox="0 0 18 11"><rect x="0" y="7" width="3" height="4" rx="0.7" fill="#fff"/><rect x="5" y="5" width="3" height="6" rx="0.7" fill="#fff"/><rect x="10" y="3" width="3" height="8" rx="0.7" fill="#fff"/><rect x="15" y="0" width="3" height="11" rx="0.7" fill="#fff"/></svg>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="#fff"><path d="M8 3C10.2 3 12.2 3.9 13.6 5.3L14.7 4.2C12.9 2.4 10.5 1.3 8 1.3C5.5 1.3 3.1 2.4 1.3 4.2L2.4 5.3C3.8 3.9 5.8 3 8 3Z"/><path d="M8 6.5C9.3 6.5 10.4 7 11.3 7.9L12.3 6.8C11.1 5.6 9.6 4.9 8 4.9C6.4 4.9 4.9 5.6 3.7 6.8L4.7 7.9C5.6 7 6.7 6.5 8 6.5Z"/><circle cx="8" cy="9.8" r="1.4"/></svg>
            <svg width="26" height="12" viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="#fff" strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="19" height="8" rx="2" fill="#fff"/><path d="M24 4V8c.7-.2 1.2-.9 1.2-1.9S24.7 4.2 24 4z" fill="#fff" fillOpacity=".45"/></svg>
          </span>
        </div>
        <div style={{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",width:134,height:5,background:"rgba(255,255,255,.6)",borderRadius:999,zIndex:60}}/>
        {children}
      </div>
    </div>
  );
}

// ─── Shared atoms ───
const pwPrimaryBtn = {
  width:"100%",height:56,borderRadius:16,background:"var(--green)",color:"var(--ink)",
  fontWeight:700,fontSize:16,border:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:8,
  boxShadow:"0 10px 28px rgba(130,255,127,.28)",letterSpacing:"-0.01em",
};
const pwMutedBtn = {
  background:"transparent",border:"none",color:"var(--text-mute)",fontSize:13,fontWeight:500,
  fontFamily:"inherit",padding:"10px 0",textAlign:"center",width:"100%",
};

function PWCloseX({dark=false}){
  return (
    <div style={{width:36,height:36,borderRadius:999,background:dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.25)",display:"grid",placeItems:"center",backdropFilter:"blur(20px)"}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </div>
  );
}

function PWCheck({size=14,color="#82FF7F"}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIATION A — Full-screen onboarding paywall
// Benefits list · monthly / annual toggle · free-trial CTA
// ─────────────────────────────────────────────────────────────
function PaywallFull({ plan = "annual" }){
  const benefits = [
    ["Unlimited audiobooks & 10-min summaries", true],
    ["AI book chat — ask any page anything", true],
    ["Offline downloads on phone & tablet", true],
    ["Private book clubs with friends", true],
    ["Ad-free, forever", true],
  ];

  return (
    <PWPhone>
      <div style={{height:"100%",position:"relative",overflow:"hidden"}}>
        {/* hero image area — stacked book covers + ambient green glow */}
        <div style={{position:"absolute",top:0,left:0,right:0,height:360,overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 30%, rgba(130,255,127,.35), transparent 60%)"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, transparent 45%, var(--ink) 95%)"}}/>

          {/* book stack */}
          <div style={{position:"absolute",top:82,left:"50%",transform:"translateX(-50%)",display:"flex",gap:-16,alignItems:"flex-end"}}>
            {[
              {t:"DEEP\nWORK",  c:"linear-gradient(155deg,#E88B5C,#8C4722)", r:-14, z:1, s:.88},
              {t:"ATOMIC\nHABITS",c:"linear-gradient(155deg,#FBF2A8,#A57D24)", r:-4, z:2, s:.96},
              {t:"THINK\nAGAIN", c:"linear-gradient(155deg,#6EC1D6,#2E6C80)", r:4,  z:3, s:1},
              {t:"IKIGAI",      c:"linear-gradient(155deg,#8FAA67,#3F5A20)", r:12, z:2, s:.94},
              {t:"SAPIENS",     c:"linear-gradient(155deg,#B78FD8,#5A3B80)", r:20, z:1, s:.86},
            ].map((b,i)=>(
              <div key={i} style={{width:98,height:136,borderRadius:6,background:b.c,margin:"0 -26px",transform:`rotate(${b.r}deg) scale(${b.s})`,zIndex:b.z,boxShadow:"0 14px 30px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.2)",display:"grid",placeItems:"center",textAlign:"center",padding:10,color:"#fff",fontSize:9,fontWeight:800,letterSpacing:".08em",lineHeight:1.15,whiteSpace:"pre"}}>{b.t}</div>
            ))}
          </div>
        </div>

        {/* close */}
        <div style={{position:"absolute",top:62,right:20,zIndex:20}}><PWCloseX/></div>

        {/* sheet */}
        <div style={{position:"absolute",top:300,left:0,right:0,bottom:0,padding:"0 22px 34px",display:"flex",flexDirection:"column"}}>
          <div style={{display:"inline-flex",alignSelf:"flex-start",alignItems:"center",gap:8,padding:"6px 12px",borderRadius:999,background:"rgba(130,255,127,.12)",border:"1px solid rgba(130,255,127,.3)"}}>
            <PWZehnMark size={16}/>
            <span style={{fontSize:11,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"var(--green)",fontFamily:"'JetBrains Mono',monospace"}}>Zehn Premium</span>
          </div>

          <h1 style={{marginTop:14,fontSize:30,fontWeight:800,letterSpacing:"-0.032em",lineHeight:1.05,textWrap:"balance"}}>
            Finish more books.<br/>
            <span style={{fontFamily:"'Lora',serif",fontStyle:"italic",fontWeight:400,color:"var(--green)"}}>Feel smarter</span> doing it.
          </h1>

          {/* benefits */}
          <div style={{marginTop:18,display:"flex",flexDirection:"column",gap:11}}>
            {benefits.map(([t],i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(130,255,127,.12)",border:"1px solid rgba(130,255,127,.35)",display:"grid",placeItems:"center",flexShrink:0}}>
                  <PWCheck size={11}/>
                </div>
                <div style={{fontSize:14,fontWeight:500,color:"var(--text)",letterSpacing:"-0.005em"}}>{t}</div>
              </div>
            ))}
          </div>

          {/* plan cards */}
          <div style={{marginTop:20,display:"flex",flexDirection:"column",gap:10}}>
            <div style={{padding:"14px 16px",borderRadius:16,border:"1.5px solid rgba(130,255,127,.5)",background:"rgba(130,255,127,.06)",display:"flex",alignItems:"center",gap:12,position:"relative"}}>
              <div style={{width:20,height:20,borderRadius:"50%",border:"2px solid var(--green)",display:"grid",placeItems:"center",flexShrink:0}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:"var(--green)"}}/>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:8}}>Annual <span style={{fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:999,background:"var(--green)",color:"var(--ink)",letterSpacing:".04em"}}>SAVE 50%</span></div>
                <div style={{fontSize:12,color:"var(--text-dim)",marginTop:2}}>$59.99/yr · billed yearly</div>
              </div>
              <div style={{textAlign:"right",flexShrink:0}}>
                <div style={{fontSize:18,fontWeight:800,letterSpacing:"-0.02em"}}>$4.99</div>
                <div style={{fontSize:10,color:"var(--text-mute)"}}>per month</div>
              </div>
            </div>
            <div style={{padding:"14px 16px",borderRadius:16,border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)",display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:20,height:20,borderRadius:"50%",border:"2px solid rgba(255,255,255,.15)",flexShrink:0}}/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:14,fontWeight:600}}>Monthly</div>
                <div style={{fontSize:12,color:"var(--text-dim)",marginTop:2}}>Cancel anytime</div>
              </div>
              <div style={{textAlign:"right",flexShrink:0}}>
                <div style={{fontSize:16,fontWeight:700,color:"var(--text-dim)"}}>$9.99</div>
                <div style={{fontSize:10,color:"var(--text-mute)"}}>per month</div>
              </div>
            </div>
          </div>

          <div style={{flex:1}}/>

          <button style={pwPrimaryBtn}>
            Start 7-day free trial
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <div style={{fontSize:11,color:"var(--text-mute)",textAlign:"center",marginTop:8,lineHeight:1.5}}>No charge today. Reminder 2 days before trial ends.</div>
          <button style={pwMutedBtn}>Restore purchase</button>
        </div>
      </div>
    </PWPhone>
  );
}

// ─────────────────────────────────────────────────────────────
// TRIGGER — book detail with locked state (shows how variation B is invoked)
// ─────────────────────────────────────────────────────────────
function BookDetailLocked(){
  return (
    <PWPhone>
      <div style={{height:"100%",padding:"0 0 0",display:"flex",flexDirection:"column",position:"relative"}}>
        {/* top bar */}
        <div style={{padding:"64px 20px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{width:36,height:36,borderRadius:999,background:"rgba(255,255,255,.05)",border:"1px solid var(--line)",display:"grid",placeItems:"center"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAF3F8" strokeWidth="2.4" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <div style={{fontSize:13,fontWeight:600,color:"var(--text-dim)"}}>Summary</div>
          <div style={{width:36,height:36,borderRadius:999,background:"rgba(255,255,255,.05)",border:"1px solid var(--line)",display:"grid",placeItems:"center"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAF3F8" strokeWidth="2.4" strokeLinecap="round"><circle cx="12" cy="5" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="12" cy="19" r="1.3"/></svg>
          </div>
        </div>

        {/* book hero */}
        <div style={{padding:"10px 24px 0",display:"flex",gap:18,alignItems:"flex-start"}}>
          <div style={{width:110,height:152,borderRadius:6,background:"linear-gradient(155deg,#6EC1D6,#2E6C80)",boxShadow:"0 16px 36px rgba(0,0,0,.35)",display:"grid",placeItems:"center",color:"#fff",fontSize:10,fontWeight:800,letterSpacing:".08em",textAlign:"center",lineHeight:1.2,padding:10,flexShrink:0}}>THINK{"\n"}AGAIN</div>
          <div style={{flex:1,minWidth:0,paddingTop:4}}>
            <div style={{fontSize:11,color:"var(--green)",fontFamily:"'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",fontWeight:600}}>Self-Help · 12 min</div>
            <h2 style={{fontSize:22,fontWeight:800,letterSpacing:"-0.025em",marginTop:8,lineHeight:1.1}}>Think Again</h2>
            <div style={{fontSize:13,color:"var(--text-dim)",marginTop:4}}>Adam Grant</div>
            <div style={{marginTop:12,display:"flex",gap:8,alignItems:"center"}}>
              <div style={{display:"flex",gap:2,color:"var(--cream)",fontSize:11}}>★★★★★</div>
              <div style={{fontSize:12,color:"var(--text-mute)"}}>4.8 · 2.1k</div>
            </div>
          </div>
        </div>

        {/* intro teaser */}
        <div style={{marginTop:22,padding:"0 24px"}}>
          <div style={{fontSize:11,color:"var(--text-mute)",fontFamily:"'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",fontWeight:600}}>Chapter 1 · Preview</div>
          <p style={{marginTop:10,fontSize:14,color:"var(--text)",lineHeight:1.55,fontFamily:"'Lora',serif"}}>
            The best thinkers aren't those who have the right answers first. They're the ones comfortable admitting that today's conclusion may not be tomorrow's…
          </p>
        </div>

        {/* fade-out lock */}
        <div style={{position:"absolute",left:0,right:0,bottom:0,height:240,background:"linear-gradient(180deg, rgba(3,33,46,0) 0%, rgba(3,33,46,.92) 40%, var(--ink) 70%)",pointerEvents:"none"}}/>

        <div style={{marginTop:"auto",position:"relative",padding:"20px 24px 36px",display:"flex",flexDirection:"column",gap:14,alignItems:"center"}}>
          <div style={{width:48,height:48,borderRadius:14,background:"rgba(251,242,168,.08)",border:"1px solid rgba(251,242,168,.2)",display:"grid",placeItems:"center"}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cream)" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
          </div>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:16,fontWeight:700,letterSpacing:"-0.02em"}}>You've read the free intro</div>
            <div style={{fontSize:13,color:"var(--text-dim)",marginTop:4,lineHeight:1.5,maxWidth:280}}>11 more minutes. Unlock to finish this book — and every other in the library.</div>
          </div>
          <button style={{...pwPrimaryBtn,height:50,marginTop:4}}>Unlock — start free trial</button>
        </div>
      </div>
    </PWPhone>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIATION B — Bottom sheet (over book detail, mid-flow)
// ─────────────────────────────────────────────────────────────
function PaywallSheet(){
  return (
    <PWPhone>
      {/* dimmed background: the same book detail, behind a scrim */}
      <div style={{position:"absolute",inset:0,opacity:.35,filter:"blur(1px)"}}>
        {/* mini mock of book detail */}
        <div style={{padding:"64px 20px 0"}}>
          <div style={{display:"flex",gap:18}}>
            <div style={{width:92,height:128,borderRadius:6,background:"linear-gradient(155deg,#6EC1D6,#2E6C80)"}}/>
            <div style={{flex:1}}>
              <div style={{height:8,width:70,borderRadius:4,background:"rgba(255,255,255,.2)",marginTop:14}}/>
              <div style={{height:16,width:160,borderRadius:4,background:"rgba(255,255,255,.25)",marginTop:10}}/>
              <div style={{height:10,width:90,borderRadius:4,background:"rgba(255,255,255,.15)",marginTop:8}}/>
            </div>
          </div>
          <div style={{marginTop:22,display:"flex",flexDirection:"column",gap:6}}>
            {[1,1,1,.7,.4].map((w,i)=>(<div key={i} style={{height:8,borderRadius:4,background:"rgba(255,255,255,.12)",width:`${w*100}%`}}/>))}
          </div>
        </div>
      </div>

      {/* scrim */}
      <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.55)",backdropFilter:"blur(4px)"}}/>

      {/* close (floating on scrim) */}
      <div style={{position:"absolute",top:58,right:18,zIndex:30}}><PWCloseX/></div>

      {/* sheet */}
      <div style={{position:"absolute",left:0,right:0,bottom:0,zIndex:20,background:"var(--ink-2)",borderTopLeftRadius:28,borderTopRightRadius:28,borderTop:"1px solid rgba(255,255,255,.08)",padding:"12px 22px 32px",boxShadow:"0 -20px 60px rgba(0,0,0,.4)"}}>
        {/* grabber */}
        <div style={{width:40,height:4,borderRadius:2,background:"rgba(255,255,255,.2)",margin:"0 auto 18px"}}/>

        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <PWZehnMark size={28}/>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"var(--green)",fontFamily:"'JetBrains Mono',monospace"}}>Unlock Zehn</div>
        </div>

        <h2 style={{marginTop:12,fontSize:24,fontWeight:800,letterSpacing:"-0.028em",lineHeight:1.1,textWrap:"balance"}}>
          Keep going with <span style={{fontFamily:"'Lora',serif",fontStyle:"italic",fontWeight:400,color:"var(--green)"}}>Think Again</span> — and the whole library.
        </h2>

        {/* quick-win benefits row */}
        <div style={{marginTop:16,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {[
            ["1,200+","audiobooks"],
            ["Ask AI","about any page"],
            ["Offline","downloads"],
            ["Ad-free","always"],
          ].map(([a,b],i)=>(
            <div key={i} style={{padding:"12px 14px",borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid var(--line)",display:"flex",gap:10,alignItems:"center"}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 10px var(--green)",flexShrink:0}}/>
              <div style={{minWidth:0}}>
                <div style={{fontSize:13,fontWeight:700,letterSpacing:"-0.01em"}}>{a}</div>
                <div style={{fontSize:11,color:"var(--text-dim)",marginTop:1}}>{b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* segmented plan toggle */}
        <div style={{marginTop:18,display:"flex",padding:4,borderRadius:14,background:"rgba(255,255,255,.04)",border:"1px solid var(--line)"}}>
          <div style={{flex:1,padding:"12px 12px",borderRadius:10,background:"var(--green)",color:"var(--ink)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
            <div>
              <div style={{fontSize:12,fontWeight:700,letterSpacing:".03em"}}>ANNUAL</div>
              <div style={{fontSize:10,fontWeight:600,opacity:.75,marginTop:1}}>$4.99/mo · save 50%</div>
            </div>
            <div style={{fontSize:15,fontWeight:800}}>$59.99</div>
          </div>
          <div style={{flex:1,padding:"12px 12px",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,color:"var(--text-dim)"}}>
            <div>
              <div style={{fontSize:12,fontWeight:700,letterSpacing:".03em"}}>MONTHLY</div>
              <div style={{fontSize:10,fontWeight:500,opacity:.7,marginTop:1}}>Billed monthly</div>
            </div>
            <div style={{fontSize:15,fontWeight:700}}>$9.99</div>
          </div>
        </div>

        <button style={{...pwPrimaryBtn,marginTop:16}}>Try 7 days free</button>
        <div style={{fontSize:11,color:"var(--text-mute)",textAlign:"center",marginTop:10,lineHeight:1.5}}>
          Then $59.99/yr. Cancel anytime in Settings. <span style={{color:"var(--text-dim)"}}>Terms</span>
        </div>
      </div>
    </PWPhone>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIATION C — Launch deal (lifetime urgency)
// ─────────────────────────────────────────────────────────────
function PaywallLaunch(){
  const sold = 763;
  const total = 1000;
  const pct = sold/total;

  return (
    <PWPhone>
      <div style={{height:"100%",position:"relative",overflow:"hidden",background:"linear-gradient(180deg, #052A3B 0%, var(--ink) 60%)"}}>
        {/* cream/gold ambient for "rare deal" feeling */}
        <div style={{position:"absolute",top:-120,left:"50%",transform:"translateX(-50%)",width:560,height:560,background:"radial-gradient(circle, rgba(251,242,168,.18), transparent 55%)",pointerEvents:"none"}}/>

        {/* close */}
        <div style={{position:"absolute",top:62,right:20,zIndex:20}}><PWCloseX/></div>

        <div style={{position:"relative",zIndex:2,padding:"70px 24px 30px",display:"flex",flexDirection:"column",height:"100%"}}>
          {/* launch chip */}
          <div style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:8,padding:"7px 14px",borderRadius:999,background:"rgba(251,242,168,.1)",border:"1px solid rgba(251,242,168,.35)"}}>
            <span style={{width:7,height:7,borderRadius:"50%",background:"var(--cream)",boxShadow:"0 0 10px var(--cream)"}}/>
            <span style={{fontSize:11,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"var(--cream)",fontFamily:"'JetBrains Mono',monospace"}}>Founding Readers · Week 1</span>
          </div>

          <h1 style={{marginTop:16,fontSize:34,fontWeight:800,letterSpacing:"-0.035em",lineHeight:1,textWrap:"balance"}}>
            Pay <span style={{fontFamily:"'Lora',serif",fontStyle:"italic",fontWeight:400,color:"var(--cream)"}}>once.</span><br/>
            Read for life.
          </h1>
          <p style={{marginTop:12,fontSize:14,color:"var(--text-dim)",lineHeight:1.5,maxWidth:320,textWrap:"pretty"}}>
            The first 1,000 readers get lifetime Premium for a single, one-time payment. No renewal, ever.
          </p>

          {/* price card */}
          <div style={{marginTop:20,padding:"20px 20px 18px",borderRadius:20,background:"linear-gradient(180deg, rgba(251,242,168,.12), rgba(251,242,168,.03))",border:"1px solid rgba(251,242,168,.3)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-40,right:-40,width:160,height:160,borderRadius:"50%",background:"radial-gradient(circle, rgba(251,242,168,.3), transparent 60%)"}}/>
            <div style={{position:"relative"}}>
              <div style={{display:"flex",alignItems:"flex-end",gap:10}}>
                <div style={{fontSize:50,fontWeight:800,letterSpacing:"-0.04em",lineHeight:.9,color:"var(--cream)"}}>$29.99</div>
                <div style={{fontSize:14,fontWeight:700,color:"var(--text-dim)",textDecoration:"line-through",marginBottom:8}}>$299</div>
              </div>
              <div style={{fontSize:13,color:"var(--text)",marginTop:6,fontWeight:500}}>One-time · lifetime Premium</div>

              {/* progress: sold / total */}
              <div style={{marginTop:18}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",fontSize:12,marginBottom:8}}>
                  <span style={{color:"var(--cream)",fontWeight:700,fontFamily:"'JetBrains Mono',monospace",letterSpacing:".04em"}}>{sold} / {total} CLAIMED</span>
                  <span style={{color:"var(--text-mute)",fontWeight:600}}>{total-sold} left</span>
                </div>
                <div style={{height:8,borderRadius:999,background:"rgba(255,255,255,.06)",overflow:"hidden",position:"relative"}}>
                  <div style={{position:"absolute",inset:0,width:`${pct*100}%`,background:"linear-gradient(90deg, var(--cream), #F1DD80)",borderRadius:999,boxShadow:"0 0 16px rgba(251,242,168,.5)"}}/>
                </div>
              </div>
            </div>
          </div>

          {/* countdown */}
          <div style={{marginTop:14,display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontFamily:"'JetBrains Mono',monospace"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(234,243,248,.6)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <div style={{fontSize:12,color:"var(--text-dim)",fontWeight:500}}>Offer ends in</div>
            {[["02","D"],["14","H"],["37","M"]].map(([n,l],i)=>(
              <div key={i} style={{display:"flex",alignItems:"baseline",gap:2}}>
                <span style={{fontSize:14,fontWeight:700,color:"var(--text)"}}>{n}</span>
                <span style={{fontSize:10,color:"var(--text-mute)"}}>{l}</span>
              </div>
            ))}
          </div>

          {/* benefits — tight, 2 col */}
          <div style={{marginTop:18,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {[
              "Full library · forever",
              "All future premium features",
              "Unlimited AI book chat",
              "No monthly billing",
            ].map((t,i)=>(
              <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                <PWCheck size={12} color="#FBF2A8"/>
                <div style={{fontSize:12,color:"var(--text-dim)",lineHeight:1.4,fontWeight:500}}>{t}</div>
              </div>
            ))}
          </div>

          <div style={{flex:1}}/>

          <button style={{...pwPrimaryBtn,background:"var(--cream)",boxShadow:"0 10px 28px rgba(251,242,168,.28)"}}>
            Claim lifetime for $29.99
          </button>
          <div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--text-mute)",lineHeight:1.5}}>
            After 1,000 are claimed, Premium returns to $59.99/yr.
          </div>
          <button style={pwMutedBtn}>No thanks, maybe later</button>
        </div>
      </div>
    </PWPhone>
  );
}

Object.assign(window, { PWPhone, PWZehnMark, PaywallFull, PaywallSheet, PaywallLaunch, BookDetailLocked });
