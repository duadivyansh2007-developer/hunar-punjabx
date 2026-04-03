'use client';
import { ArrowRight, GraduationCap, Building2, Briefcase, BarChart3, CheckCircle2, Zap, Map } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 4rem', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <h1 style={{ color: '#00283e', fontSize: '1.25rem', fontWeight: 'bold' }}>HUNAR Punjab</h1>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#64748b' }}>
            <span style={{ color: '#0ea5e9', borderBottom: '2px solid #0ea5e9', paddingBottom: '1.5rem', marginBottom: '-1.5rem' }}>Home</span>
            <span>Institutes</span>
            <span>Employers</span>
            <span>Reports</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ background: '#f1f5f9', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', color: '#64748b' }}>
            🔍 Search ecosystem...
          </div>
          <Link href="/login">
            <button className="btn btn-primary" style={{ borderRadius: '20px', padding: '0.4rem 1rem' }}>AI Chatbot</button>
          </Link>
        </div>
      </nav>

      <main style={{ padding: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem' }}>
          <div style={{ maxWidth: '500px' }}>
            <span style={{ background: '#ffe5d0', color: '#d15112', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              ✦ POWERED BY CIVIC INTELLIGENCE
            </span>
            <h1 style={{ fontSize: '3.5rem', color: '#00283e', lineHeight: '1.1', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              Cultivating the <br/><span style={{ color: '#0284c7' }}>Future Workforce</span> <br/>of Punjab
            </h1>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>
              The Punjab Government's unified AI ecosystem connecting students, institutes, and employers through predictive readiness scoring and verified skill certification.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/login">
                <button className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Explore Opportunities <ArrowRight size={16} style={{ marginLeft: '8px' }}/></button>
              </Link>
              <button className="btn" style={{ background: '#e2e8f0', color: '#00283e', padding: '0.8rem 1.5rem' }}>View Live Analytics</button>
            </div>
          </div>
          
          {/* Mock Regional Skill Index Card */}
          <div className="card" style={{ width: '450px', padding: '2rem', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
             <div>
               <p style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 'bold' }}>STATE-WIDE ECOSYSTEM PULSE</p>
               <h3 style={{ fontSize: '1.25rem', color: '#00283e' }}>Regional Skill Index</h3>
             </div>
             <div style={{ background: '#ccfbf1', padding: '0.5rem', borderRadius: '8px', color: '#0f766e' }}><BarChart3 size={20}/></div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '100px', marginBottom: '2rem' }}>
              <div style={{ flex: 1, backgroundColor: '#cbd5e1', height: '40%', borderRadius: '4px' }}></div>
              <div style={{ flex: 1, backgroundColor: '#94a3b8', height: '60%', borderRadius: '4px' }}></div>
              <div style={{ flex: 1, backgroundColor: '#64748b', height: '75%', borderRadius: '4px' }}></div>
              <div style={{ flex: 1, backgroundColor: '#00283e', height: '100%', borderRadius: '4px' }}></div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#64748b' }}>TOTAL VERIFIED</p>
                <h4 style={{ fontSize: '1.5rem', color: '#00283e' }}>1.2M+</h4>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#64748b' }}>NEW JOBS</p>
                <h4 style={{ fontSize: '1.5rem', color: '#00283e' }}>1,240</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Gateways Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#00283e', marginBottom: '1rem' }}>Integrated Stakeholder Gateways</h2>
          <p style={{ color: '#64748b' }}>Choose your entry point into the HUNAR ecosystem to access tailored tools and insights.</p>
        </div>

        <div className="grid-4" style={{ marginBottom: '6rem' }}>
          {[
            { icon: GraduationCap, title: 'For Students', desc: 'AI-driven skill mapping, readiness scoring, and direct placement opportunities.', btn: 'Join Program', bg: '#dbeafe', color: '#1e40af' },
            { icon: Building2, title: 'For Institutes', desc: 'Digital verification, curriculum alignment, and industry partnership tracking.', btn: 'Register Hub', bg: '#ccfbf1', color: '#0f766e' },
            { icon: Briefcase, title: 'For Companies', desc: 'Verified talent search, bulk hiring portals, and predictive employee retention.', btn: 'Post Vacancy', bg: '#ffedd5', color: '#9a3412' },
            { icon: BarChart3, title: 'For Government', desc: 'Macro-economic skill trends, regional employability heat maps, and policy impact.', btn: 'Dashboard', bg: '#f1f5f9', color: '#334155' }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
              <div style={{ background: item.bg, color: item.color, padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <item.icon size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#00283e', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem', flex: 1 }}>{item.desc}</p>
              <Link href="/login" style={{ width: '100%' }}>
                <button className="btn" style={{ width: '100%', background: '#00283e', color: 'white' }}>{item.btn}</button>
              </Link>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="grid-2" style={{ marginBottom: '6rem' }}>
          <div className="card card-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Total Lives Impacted</p>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold' }}>450K+</h2>
            <p style={{ color: '#cbd5e1', maxWidth: '300px' }}>Successful student placements across 36 districts of Punjab through verified skill mapping.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ background: '#7dd3fc', border: 'none', height: '60%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Building2 size={24} color="#0369a1"/>
                <span style={{ background: '#0369a1', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '12px', fontSize: '0.7rem' }}>LIVE DATA</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', color: '#0c4a6e', marginTop: '1rem', marginBottom: '0' }}>1,200+</h2>
              <p style={{ color: '#0284c7' }}>Partner Corporations</p>
            </div>
            
            <div className="grid-3" style={{ height: '40%' }}>
              <div className="card flex-center" style={{ gap: '1rem' }}>
                <CheckCircle2 color="#00283e"/>
                <div>
                  <h4 style={{ fontSize: '1.2rem', margin: 0 }}>92%</h4>
                  <p style={{ fontSize: '0.6rem', color: '#64748b' }}>VERIFICATION RATE</p>
                </div>
              </div>
              <div className="card flex-center" style={{ gap: '1rem', background: '#ffe5d0' }}>
                <Zap color="#d15112"/>
                <div>
                  <h4 style={{ fontSize: '1.2rem', margin: 0, color: '#d15112' }}>4.2s</h4>
                  <p style={{ fontSize: '0.6rem', color: '#d15112' }}>MATCH LATENCY</p>
                </div>
              </div>
              <div className="card flex-center" style={{ gap: '1rem' }}>
                <Map color="#0f766e"/>
                <div>
                  <h4 style={{ fontSize: '1.2rem', margin: 0 }}>36</h4>
                  <p style={{ fontSize: '0.6rem', color: '#64748b' }}>DISTRICT PRESENCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card card-dark" style={{ textAlign: 'center', padding: '4rem', background: 'linear-gradient(135deg, #00283e 0%, #004b73 100%)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ready to join the<br/>ecosystem of tomorrow?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Whether you are starting your career or building the region's industry, HUNAR is your platform for growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/login"><button className="btn" style={{ background: 'white', color: '#00283e' }}>Get Started Now</button></Link>
            <button className="btn btn-outline" style={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>Contact Support</button>
          </div>
        </div>
      </main>
    </div>
  );
}
