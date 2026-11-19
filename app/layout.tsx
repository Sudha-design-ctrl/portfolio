import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sudha Gowda | Software Developer & Full-Stack Engineer',
  description:
    'Personal portfolio of Sudha Gowda — Software Developer, Full-Stack Web Developer, and Data Analytics Enthusiast.',
  keywords: [
    'Sudha Gowda',
    'Sudha Nagappa Gowda',
    'Software Developer',
    'Full-Stack Developer',
    'Data Analytics',
    'Next.js',
    'TypeScript',
    'React',
  ],
};

// Inline script runs before first paint — adds html.intro class + builds overlay
const introScript = `
(function(){
  var played=false;
  try{played=sessionStorage.getItem('sg-intro')==='1';}catch(e){}
  var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(played||reduced)return;

  // Lock scroll & mark html
  document.documentElement.classList.add('intro');
  if(history.scrollRestoration)history.scrollRestoration='manual';

  // Build overlay
  var name='Sudha Gowda';
  var overlay=document.createElement('div');
  overlay.id='sg-intro-overlay';

  var i=0,ci=0;
  for(var c=0;c<name.length;c++){
    var span=document.createElement('span');
    if(name[c]===' '){
      span.className='sg-letter sg-space';
      span.style.setProperty('--i',String(ci));
    }else{
      span.className='sg-letter';
      span.style.setProperty('--i',String(ci));
      span.textContent=name[c];
      ci++;
    }
    i++;
    overlay.appendChild(span);
  }
  document.body.appendChild(overlay);

  // Timeline
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      // Trigger letters fly-in
      document.documentElement.classList.add('intro-run');

      // After letters fully in + hold (600ms transition + 500ms hold = 1100ms)
      setTimeout(function(){
        // Fade out overlay
        overlay.classList.add('sg-exit');

        // Remove intro classes → page fades in
        setTimeout(function(){
          document.documentElement.classList.remove('intro','intro-run');
          if(overlay.parentNode)overlay.parentNode.removeChild(overlay);
          try{sessionStorage.setItem('sg-intro','1');}catch(e){}
          window.scrollTo(0,0);
        },750);
      },1200);
    });
  });

  // Safety fallback — remove after 4s even if JS stalls
  setTimeout(function(){
    document.documentElement.classList.remove('intro','intro-run');
    var el=document.getElementById('sg-intro-overlay');
    if(el&&el.parentNode)el.parentNode.removeChild(el);
  },4000);
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Runs before paint: sets up intro overlay */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-screen bg-[#080810] text-[#f1f0ff] antialiased selection:bg-purple-600/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
