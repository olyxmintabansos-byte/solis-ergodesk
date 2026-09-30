'use client';

import { useState } from 'react';

const DeskSVG = ({ height }: { height: any }) => {
  const legH = Math.round(50 + (height - 28) * 1.5);
  return (
    <svg viewBox="0 0 280 220" className="w-full h-full">
      <rect x="20" y={(220 - legH - 20)} width="240" height="20" rx="4" fill="#3d2817" opacity="0.9"/>
      <rect x="40" y={(220 - legH - 20)} width="16" height={legH} rx="2" fill="#5a3e2e"/>
      <rect x="224" y={(220 - legH - 20)} width="16" height={legH} rx="2" fill="#5a3e2e"/>
      <text x="140" y={(220 - legH - 30)} textAnchor="middle" fontSize="11" fill="#9ca887">{height} inches</text>
      <line x1="56" y1="190" x2="224" y2="190" stroke="#9ca887" strokeWidth="1" strokeDasharray="4,2" opacity="0.5"/>
    </svg>
  );
};

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b sticky top-0 z-40" style={{borderColor:'rgba(61,40,23,0.15)',background:'#f5f2eb'}}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-sm"><span className="font-bold" style={{color:'#3d2817'}}>OLYX ATELIER</span><span style={{color:'#9ca887'}} className="mx-2">//</span><span style={{color:'#3d2817',fontSize:'0.75rem'}}>MAISONS</span></div>
      <button onClick={onCartOpen} style={{color:'#3d2817'}} className="text-sm">CART</button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div className={`fixed right-0 top-0 h-screen w-96 transform transition z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{background:'#f5f2eb',borderLeft:'1px solid rgba(61,40,23,0.2)'}}>
      <div className="p-6"><h2 className="text-2xl mb-4 font-bold" style={{color:'#3d2817'}}>CART</h2><p className="text-sm" style={{color:'#666'}}>Empty.</p></div>
    </div>
  </>
);

export default function SolisHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [height, setHeight] = useState(28);
  const [woodEdge, setWoodEdge] = useState('rounded');
  const [cableMgmt, setCableMgmt] = useState(false);

  const edges = [
    { id: 'rounded', name: 'Rounded Edge', desc: 'Comfortable for extended use' },
    { id: 'straight', name: 'Straight Edge', desc: 'Minimal Nordic profile' },
    { id: 'chamfered', name: 'Chamfered Edge', desc: '45° bevel detail' },
  ];

  const specs = [
    { label: 'Material', value: 'Solid walnut veneer' },
    { label: 'Top Thickness', value: '25mm hardwood' },
    { label: 'Height Range', value: '22-48 inches' },
    { label: 'Max Load', value: '150 kg' },
    { label: 'Motor', value: 'Dual 750W brushless' },
    { label: 'Speed', value: '1 inch/sec quiet' },
    { label: 'Presets', value: '4 height memory' },
    { label: 'Warranty', value: '7 years' }
  ];

  return (
    <main style={{background:'#f5f2eb',minHeight:'100vh',color:'#1a1a1a'}}>
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-2 leading-tight" style={{color:'#3d2817'}}>Solid Walnut<br/>Motorized Desk</h1>
          <h2 className="text-xl mb-6" style={{color:'#9ca887'}}>Nordic Ergonomic / Standing</h2>
          <p className="text-lg mb-8" style={{color:'rgba(61,40,23,0.6)',lineHeight:1.8}}>Slow-grown European walnut with dual-motor lift mechanism. 22 to 48 inches of silent precision. Memory presets eliminate morning hesitation.</p>
          <div className="flex gap-6 items-center mb-12">
            <div><div className="text-3xl font-bold" style={{color:'#9ca887'}}>$1,650</div><div className="text-sm" style={{color:'rgba(61,40,23,0.4)'}}>Rp 25.800.000 / €1,530</div></div>
            <button onClick={() => setCartOpen(true)} className="px-8 py-3 font-bold" style={{background:'#3d2817',color:'#f5f2eb'}}>ADD TO CART</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded" style={{background:'rgba(61,40,23,0.08)',border:'1px solid rgba(61,40,23,0.15)'}}>
              <label className="block text-sm mb-2" style={{color:'#3d2817'}}>Height: {height} inches</label>
              <input type="range" min="22" max="48" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="w-full" />
            </div>
            <div className="p-4 rounded" style={{background:'rgba(61,40,23,0.08)',border:'1px solid rgba(61,40,23,0.15)'}}>
              <label className="block text-sm mb-3" style={{color:'#3d2817'}}>Wood Edge Profile</label>
              {edges.map((e) => (
                <label key={e.id} className="flex items-center gap-3 py-2 cursor-pointer">
                  <input type="radio" name="edge" value={e.id} checked={woodEdge === e.id} onChange={() => setWoodEdge(e.id)} />
                  <span className="text-sm" style={{color:'#3d2817'}}>{e.name} — <span style={{opacity:0.5}}>{e.desc}</span></span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="aspect-square rounded flex items-center justify-center" style={{background:'rgba(61,40,23,0.05)',border:'1px solid rgba(61,40,23,0.1)'}}>
          <DeskSVG height={height} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12" style={{color:'#3d2817'}}>Specifications</h2>
        <div className="grid grid-cols-4 gap-4">{specs.map((s, i) => (
          <div key={i} className="p-4 rounded" style={{border:'1px solid rgba(61,40,23,0.15)'}}>
            <div className="text-xs mb-1" style={{color:'#9ca887'}}>{s.label}</div>
            <div className="text-sm" style={{color:'#3d2817'}}>{s.value}</div>
          </div>
        ))}</div>
      </section>

      <footer className="py-8" style={{background:'#3d2817'}}>
        <div className="max-w-7xl mx-auto px-6 text-center text-xs" style={{color:'rgba(245,242,235,0.5)'}}>Solis Desk / Nordic motorized workspaces</div>
      </footer>
    </main>
  );
}
