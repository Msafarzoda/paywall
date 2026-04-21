/* Phone screen mockups — reproduced from Zehn app Figma reference */

const phoneStyles = {
  frame: {
    width: 280, aspectRatio: "280/580", background: "#000", borderRadius: 44,
    padding: 9, position: "relative",
    boxShadow: "0 40px 80px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.08)",
    flexShrink: 0,
  },
  screen: {
    width: "100%", height: "100%", borderRadius: 36, background: "#03212E",
    position: "relative", overflow: "hidden", fontFamily: "'Plus Jakarta Sans',sans-serif",
    color: "#EAF3F8",
  },
  notch: {
    position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
    width: 86, height: 22, background: "#000", borderRadius: 12, zIndex: 3,
  },
  statusBar: {
    display: "flex", justifyContent: "space-between", padding: "14px 22px 0",
    fontSize: 11, fontWeight: 600, color: "#fff", position: "relative", zIndex: 4,
  },
};

// ---- HOME / LIBRARY SCREEN ----
function HomeScreen() {
  return (
    <div style={phoneStyles.frame}>
      <div style={phoneStyles.notch}/>
      <div style={phoneStyles.screen}>
        <div style={phoneStyles.statusBar}>
          <span>9:41</span>
          <span style={{display:"flex",gap:4}}>
            <span>􀙇</span><span>􀛨</span><span>􀛪</span>
          </span>
        </div>
        <div style={{padding:"32px 16px 12px"}}>
          {/* search */}
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <div style={{flex:1,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:12,padding:"10px 14px",display:"flex",alignItems:"center",gap:8,fontSize:11,color:"rgba(255,255,255,.5)"}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              Search book, author or genre
            </div>
            <div style={{width:32,height:32,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,display:"grid",placeItems:"center"}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAF3F8" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
          </div>
          {/* chips */}
          <div style={{display:"flex",gap:6,marginTop:12,overflow:"hidden"}}>
            {[{t:"All",a:1},{t:"Fiction"},{t:"Non-Fiction"},{t:"Bio"}].map((c,i)=>(
              <div key={i} style={{padding:"6px 10px",borderRadius:8,fontSize:10,fontWeight:600,background:c.a?"#82FF7F":"rgba(255,255,255,.05)",color:c.a?"#03212E":"#EAF3F8",border:c.a?"none":"1px solid rgba(255,255,255,.1)",whiteSpace:"nowrap"}}>{c.t}</div>
            ))}
          </div>
          {/* section */}
          <div style={{marginTop:18,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontWeight:700,fontSize:13}}>Because You Like Self-Help</div>
            <div style={{color:"rgba(255,255,255,.5)",fontSize:11}}>›</div>
          </div>
          {/* book row */}
          <div style={{display:"flex",gap:10,marginTop:10}}>
            <BookCard title="Think Again" author="Adam Grant" coverType="thinkAgain"/>
            <BookCard title="Ikigai" author="H. García" coverType="ikigai"/>
          </div>
          {/* featured card */}
          <div style={{marginTop:14,background:"linear-gradient(160deg,#6B1822 0%,#3A0D14 100%)",borderRadius:12,padding:12,display:"flex",gap:10,alignItems:"center"}}>
            <div style={{width:52,height:68,borderRadius:6,flexShrink:0,overflow:"hidden"}}><BookCoverArt type="ikigai"/></div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:700,fontSize:10,lineHeight:1.2}}>Ikigai: The secret to long and happy life</div>
              <div style={{fontSize:8,color:"rgba(255,255,255,.6)",marginTop:2}}>Francesc García</div>
              <div style={{display:"inline-flex",alignItems:"center",gap:4,marginTop:6,background:"#82FF7F",color:"#03212E",borderRadius:6,padding:"3px 7px",fontSize:8,fontWeight:700}}>
                ▶ Read Book
              </div>
            </div>
          </div>
        </div>
        <BottomNav active="Books"/>
      </div>
    </div>
  );
}

function BookCoverArt({type}){
  // Stylized illustrative book covers — original artwork evoking each title's themes
  if(type==="thinkAgain"){
    return (
      <svg viewBox="0 0 90 120" style={{display:"block",width:"100%",height:"100%"}} preserveAspectRatio="none">
        <rect width="90" height="120" fill="#D94F2E"/>
        {/* concentric circles evoking rethinking */}
        <circle cx="45" cy="52" r="34" fill="none" stroke="#FBE8D4" strokeWidth="1.5" opacity=".45"/>
        <circle cx="45" cy="52" r="26" fill="none" stroke="#FBE8D4" strokeWidth="1.5" opacity=".6"/>
        <circle cx="45" cy="52" r="18" fill="none" stroke="#FBE8D4" strokeWidth="1.5" opacity=".8"/>
        <circle cx="45" cy="52" r="10" fill="#FBE8D4"/>
        <text x="45" y="95" fontSize="7" fontWeight="800" fill="#FBE8D4" textAnchor="middle" fontFamily="serif" letterSpacing=".5">THINK</text>
        <text x="45" y="104" fontSize="7" fontWeight="800" fill="#FBE8D4" textAnchor="middle" fontFamily="serif" letterSpacing=".5">AGAIN</text>
        <text x="45" y="114" fontSize="3.5" fill="#FBE8D4" opacity=".75" textAnchor="middle">ADAM GRANT</text>
      </svg>
    );
  }
  if(type==="ikigai"){
    return (
      <svg viewBox="0 0 90 120" style={{display:"block",width:"100%",height:"100%"}} preserveAspectRatio="none">
        <rect width="90" height="120" fill="#F0E6C8"/>
        {/* pine/cherry branch silhouette */}
        <path d="M10 100 Q 25 70 45 75 Q 65 80 80 50" stroke="#2C4A1E" strokeWidth="1.6" fill="none"/>
        <circle cx="28" cy="78" r="2" fill="#E88B9B"/>
        <circle cx="42" cy="74" r="2.2" fill="#E88B9B"/>
        <circle cx="58" cy="72" r="1.8" fill="#E88B9B"/>
        <circle cx="70" cy="62" r="2" fill="#E88B9B"/>
        <circle cx="62" cy="55" r="1.6" fill="#E88B9B"/>
        <text x="45" y="26" fontSize="11" fontWeight="800" fill="#C13A28" textAnchor="middle" fontFamily="serif">IKIGAI</text>
        <line x1="20" y1="32" x2="70" y2="32" stroke="#C13A28" strokeWidth=".6"/>
        <text x="45" y="42" fontSize="3.2" fill="#2C4A1E" textAnchor="middle" opacity=".8">The Japanese secret</text>
        <text x="45" y="111" fontSize="3.2" fontWeight="700" fill="#2C4A1E" textAnchor="middle">H. GARCÍA</text>
      </svg>
    );
  }
  if(type==="deepWork"){
    return (
      <svg viewBox="0 0 90 120" style={{display:"block",width:"100%",height:"100%"}} preserveAspectRatio="none">
        <rect width="90" height="120" fill="#1A1F2E"/>
        <rect x="8" y="8" width="74" height="104" fill="none" stroke="#E8C964" strokeWidth=".8"/>
        <text x="45" y="52" fontSize="12" fontWeight="900" fill="#E8C964" textAnchor="middle" fontFamily="serif" letterSpacing="1">DEEP</text>
        <text x="45" y="68" fontSize="12" fontWeight="900" fill="#E8C964" textAnchor="middle" fontFamily="serif" letterSpacing="1">WORK</text>
        <line x1="20" y1="76" x2="70" y2="76" stroke="#E8C964" strokeWidth=".5"/>
        <text x="45" y="84" fontSize="3" fill="#E8C964" textAnchor="middle" opacity=".7" letterSpacing=".3">RULES FOR FOCUSED</text>
        <text x="45" y="89" fontSize="3" fill="#E8C964" textAnchor="middle" opacity=".7" letterSpacing=".3">SUCCESS</text>
        <text x="45" y="106" fontSize="3.5" fontWeight="700" fill="#E8C964" textAnchor="middle">CAL NEWPORT</text>
      </svg>
    );
  }
  return null;
}

function BookCard({title, author, coverType}){
  return (
    <div style={{flex:1,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",borderRadius:10,padding:8}}>
      <div style={{aspectRatio:"3/4",borderRadius:6,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,.3)"}}><BookCoverArt type={coverType}/></div>
      <div style={{fontWeight:700,fontSize:10,marginTop:6,lineHeight:1.15}}>{title}</div>
      <div style={{fontSize:8,color:"rgba(255,255,255,.55)",marginTop:2}}>{author}</div>
      <div style={{display:"inline-flex",alignItems:"center",gap:3,marginTop:5,background:"rgba(130,255,127,.15)",color:"#82FF7F",borderRadius:4,padding:"2px 5px",fontSize:7,fontWeight:600}}>⏱ 18 min</div>
    </div>
  );
}

// ---- AUDIOBOOK PLAYER SCREEN ----
function PlayerScreen() {
  return (
    <div style={phoneStyles.frame}>
      <div style={phoneStyles.notch}/>
      <div style={phoneStyles.screen}>
        <div style={phoneStyles.statusBar}>
          <span>9:41</span>
          <span style={{display:"flex",gap:4}}>􀛨 􀛪</span>
        </div>
        <div style={{padding:"28px 18px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{color:"#fff",fontSize:16}}>←</span>
            <span style={{fontWeight:700,fontSize:15}}>Atomic Habits</span>
          </div>
          <div style={{display:"flex",gap:8}}>
            <div style={{width:26,height:24,borderRadius:6,background:"rgba(130,255,127,.15)",display:"grid",placeItems:"center",color:"#82FF7F",fontSize:11}}>≡</div>
            <div style={{color:"rgba(255,255,255,.6)",fontSize:14}}>⋮</div>
          </div>
        </div>
        {/* Cover art — Atomic Habits (stylized) */}
        <div style={{margin:"16px 14px 0",aspectRatio:"1/1",borderRadius:16,position:"relative",overflow:"hidden",boxShadow:"0 12px 36px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.06)"}}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
            <defs>
              <linearGradient id="ahBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5EFE3"/>
                <stop offset="100%" stopColor="#E8DEC8"/>
              </linearGradient>
              <radialGradient id="ahDot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF7A3D"/>
                <stop offset="60%" stopColor="#E85B1F"/>
                <stop offset="100%" stopColor="#C94310"/>
              </radialGradient>
              <radialGradient id="ahDotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFB884" stopOpacity=".8"/>
                <stop offset="100%" stopColor="#FFB884" stopOpacity="0"/>
              </radialGradient>
              <filter id="ahGrain">
                <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" seed="3"/>
                <feColorMatrix values="0 0 0 0 .2  0 0 0 0 .15  0 0 0 0 .1  0 0 0 .05 0"/>
              </filter>
            </defs>

            {/* cream paper background */}
            <rect width="100" height="100" fill="url(#ahBg)"/>

            {/* concentric ripple circles — the "atomic" motif */}
            {[44,38,32,26,20,14].map((r,i)=>(
              <circle key={i} cx="50" cy="58" r={r} fill="none" stroke="#1F3A4A" strokeWidth={i===0?.4:.28} opacity={0.35 - i*0.03}/>
            ))}
            {/* soft halo behind dot */}
            <circle cx="50" cy="58" r="14" fill="url(#ahDotGlow)"/>
            {/* orange atomic dot */}
            <circle cx="50" cy="58" r="7.5" fill="url(#ahDot)"/>
            {/* highlight on dot */}
            <ellipse cx="47.5" cy="55.5" rx="2.6" ry="1.8" fill="#FFD0A8" opacity=".55"/>

            {/* tiny satellite dots on rings */}
            <circle cx="76" cy="50" r=".9" fill="#1F3A4A" opacity=".55"/>
            <circle cx="28" cy="72" r=".7" fill="#1F3A4A" opacity=".45"/>
            <circle cx="70" cy="78" r=".6" fill="#E85B1F" opacity=".7"/>
            <circle cx="24" cy="42" r=".8" fill="#1F3A4A" opacity=".5"/>

            {/* subtitle strap (top) */}
            <rect x="10" y="10" width="80" height="6" fill="none" stroke="#1F3A4A" strokeWidth=".25" opacity=".4"/>
            <text x="50" y="14.2" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="2.6" fontWeight="700" fill="#1F3A4A" letterSpacing="1.1" opacity=".85">#1 NEW YORK TIMES BESTSELLER</text>

            {/* title */}
            <text x="50" y="26" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="800" fill="#1F3A4A" letterSpacing="-0.3">ATOMIC</text>
            <text x="50" y="36" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="800" fill="#1F3A4A" letterSpacing="-0.3">HABITS</text>

            {/* tagline */}
            <text x="50" y="88" textAnchor="middle" fontFamily="Lora, serif" fontSize="3.4" fontStyle="italic" fill="#1F3A4A" opacity=".85">Tiny changes, remarkable results</text>

            {/* author */}
            <line x1="36" y1="92.5" x2="64" y2="92.5" stroke="#E85B1F" strokeWidth=".35"/>
            <text x="50" y="97" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="3" fontWeight="700" fill="#E85B1F" letterSpacing="1.1">JAMES CLEAR</text>

            {/* grain */}
            <rect width="100" height="100" filter="url(#ahGrain)" opacity=".7"/>
          </svg>
        </div>
        {/* quick actions — moved BELOW cover */}
        <div style={{padding:"12px 14px 0",display:"flex",gap:6}}>
          {[
            {t:"Ask AI",icon:<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/><path d="M12 8v4l3 2"/></svg>},
            {t:"Bookmark",icon:<svg width="8" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1Z"/></svg>},
            {t:"Summary",icon:<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>},
          ].map((a,i)=>(
            <div key={i} style={{flex:1,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",color:"#EAF3F8",padding:"7px 0",borderRadius:8,fontSize:9,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>
              {a.icon}{a.t}
            </div>
          ))}
        </div>
        {/* progress */}
        <div style={{padding:"16px 18px 0"}}>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"rgba(255,255,255,.6)",marginBottom:6}}>
            <span>03:42</span><span>18:00</span>
          </div>
          <div style={{height:3,background:"rgba(255,255,255,.12)",borderRadius:999,position:"relative"}}>
            <div style={{width:"21%",height:"100%",background:"#fff",borderRadius:999}}/>
            <div style={{position:"absolute",left:"21%",top:"50%",transform:"translate(-50%,-50%)",width:10,height:10,borderRadius:"50%",background:"#fff"}}/>
          </div>
          {/* transport */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:14}}>
            <span style={{color:"rgba(255,255,255,.55)",fontSize:14}}>⏮</span>
            <span style={{color:"#fff",fontSize:14}}>↺10</span>
            <div style={{width:44,height:44,borderRadius:"50%",background:"#82FF7F",color:"#03212E",display:"grid",placeItems:"center",boxShadow:"0 6px 20px rgba(130,255,127,.4)"}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#03212E"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            </div>
            <span style={{color:"#fff",fontSize:14}}>10↻</span>
            <span style={{color:"rgba(255,255,255,.55)",fontSize:14}}>⏭</span>
          </div>
          {/* options */}
          <div style={{display:"flex",gap:5,marginTop:14}}>
            {[{l:"Timer",v:"OFF"},{l:"Speed",v:"1.0×"},{l:"Subtitle",v:"OFF"}].map((o,i)=>(
              <div key={i} style={{flex:1,background:"rgba(130,255,127,.07)",border:"1px solid rgba(130,255,127,.12)",borderRadius:7,padding:"6px 5px",fontSize:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{color:"rgba(255,255,255,.6)"}}>{o.l}</span>
                <span style={{background:"rgba(0,0,0,.3)",borderRadius:3,padding:"1px 4px",fontWeight:700}}>{o.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- AI CHAT SCREEN ----
function ChatScreen() {
  return (
    <div style={phoneStyles.frame}>
      <div style={phoneStyles.notch}/>
      <div style={phoneStyles.screen}>
        <div style={phoneStyles.statusBar}>
          <span>9:41</span>
          <span style={{display:"flex",gap:4}}>􀛨 􀛪</span>
        </div>
        <div style={{padding:"28px 18px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{color:"#fff",fontSize:14}}>☰</span>
            <span style={{fontWeight:700,fontSize:14}}>Zehn AI <span style={{opacity:.5}}>▾</span></span>
          </div>
          <div style={{color:"rgba(255,255,255,.6)",fontSize:14}}>✎ ⋮</div>
        </div>
        <div style={{padding:"20px 16px 0"}}>
          {/* user msg */}
          <div style={{background:"#063349",border:"1px solid rgba(255,255,255,.06)",borderRadius:"14px 14px 14px 4px",padding:"10px 12px",fontSize:11,lineHeight:1.35}}>
            Can you explain how finding your ikigai helps in living a longer life?
          </div>
          <div style={{fontSize:9,color:"rgba(255,255,255,.4)",marginTop:5,marginLeft:2}}>12:53 AM</div>
          {/* ai resp */}
          <div style={{marginTop:14,fontSize:11,lineHeight:1.55,color:"#EAF3F8"}}>
            Absolutely! <span style={{color:"#82FF7F",fontWeight:600}}>Ikigai</span> combines passion, mission, vocation, and profession. The people of Okinawa who live exceptionally long lives believe that waking up with a clear purpose gives energy, reduces stress, and improves emotional well-being.
          </div>
          <div style={{display:"flex",gap:10,marginTop:10,color:"rgba(255,255,255,.45)",fontSize:11}}>
            <span>⧉</span><span>⊲</span><span>👍</span><span>👎</span><span>↺</span><span>↗</span>
          </div>
        </div>
        {/* input */}
        <div style={{position:"absolute",bottom:54,left:12,right:12,display:"flex",gap:6,alignItems:"center"}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:"#063349",display:"grid",placeItems:"center",color:"#82FF7F",fontSize:14,fontWeight:700}}>+</div>
          <div style={{flex:1,background:"#052A3B",border:"1px solid rgba(255,255,255,.06)",borderRadius:999,padding:"7px 12px",fontSize:10,color:"rgba(255,255,255,.5)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span>Ask Anything</span>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              <span>🎙</span>
              <div style={{width:18,height:18,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",color:"#03212E",fontSize:9}}>⟰</div>
            </div>
          </div>
        </div>
        <BottomNav active="AI Chat"/>
      </div>
    </div>
  );
}

function BottomNav({active}){
  const items = [
    {l:"Home",i:"⌂"},
    {l:"Books",i:"📖"},
    {l:"AI Chat",i:"✦"},
    {l:"Clubs",i:"⋈"},
    {l:"Profile",i:"◐"},
  ];
  return (
    <div style={{position:"absolute",bottom:0,left:0,right:0,background:"#052A3B",borderTop:"1px solid rgba(255,255,255,.06)",padding:"8px 12px 14px",display:"flex",justifyContent:"space-between"}}>
      {items.map(it=>{
        const on = it.l===active;
        return (
          <div key={it.l} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2,color:on?"#82FF7F":"rgba(255,255,255,.55)"}}>
            <span style={{fontSize:14}}>{it.i}</span>
            <span style={{fontSize:8,fontWeight:600}}>{it.l}</span>
          </div>
        );
      })}
    </div>
  );
}

window.HomeScreen = HomeScreen;
window.PlayerScreen = PlayerScreen;
window.ChatScreen = ChatScreen;
