import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2, Database, Github, Linkedin, Mail, Server, Sparkles, Terminal, Workflow } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Backend Engineering', items: ['Core Java', 'Spring Boot', 'Microservices', 'Spring Security / JWT', 'REST API Design'] },
  { icon: Workflow, title: 'Frontend & APIs', items: ['Angular', 'TypeScript', 'HTML & CSS', 'JPA Specifications', 'Swagger'] },
  { icon: Database, title: 'Data & Messaging', items: ['Oracle SQL', 'MySQL', 'Hibernate / JPA', 'Kafka', 'Solace', 'Tibco'] },
  { icon: Server, title: 'Quality & Delivery', items: ['JUnit / Mockito', 'SonarQube', 'Docker', 'GCP / OpenShift', 'GitLab CI/CD', 'Maven'] },
];

const projects = [
  { n: '01', title: 'Core Search Engine', type: 'JAVA · LEGACY MODERNIZATION', desc: 'Refactored Java modules for maintainability, retired losing experiment paths and feature flags, and removed dead code with coverage and static-analysis checks. Unit tests around edge cases helped increase test coverage by 20%.', stack: ['Java', 'JUnit', 'Refactoring', 'Static Analysis'] },
  { n: '02', title: 'PEARL Application Enhancements', type: 'SPRING BOOT · MICROSERVICES', desc: 'Built multi-filter search APIs with JPA Specifications and pagination, tuned database queries, and integrated Solace job-status events. Improved job monitoring with execution logs and failure reasons, reducing support dependency by 25%.', stack: ['Spring Boot', 'JPA', 'SQL', 'Solace'] },
  { n: '03', title: 'Online Quiz Application', type: 'FULL STACK · INTERNSHIP', desc: 'Coordinated a six-member team across Angular and Spring Boot workstreams. Defined API contracts early and implemented stateless JWT authentication with Spring Security; delivered 15% ahead of schedule.', stack: ['Angular', 'Spring Boot', 'JWT', 'Swagger'] },
];

function Orb() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return <group ref={ref}>
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.8}>
      <mesh>
        <icosahedronGeometry args={[1.48, 16]} />
        <MeshDistortMaterial color="#7c5cff" roughness={0.16} metalness={0.55} distort={0.32} speed={1.5} />
      </mesh>
      <mesh scale={1.72}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#62e7ff" wireframe transparent opacity={0.24} />
      </mesh>
      <mesh rotation={[0.8, 0.2, 0.4]} scale={2.05}>
        <torusGeometry args={[1, 0.006, 8, 180]} />
        <meshBasicMaterial color="#b9a7ff" transparent opacity={0.75} />
      </mesh>
    </Float>
  </group>;
}

function Scene() {
  return <Canvas camera={{ position: [0, 0, 5.8], fov: 44 }} dpr={[1, 1.6]}>
    <ambientLight intensity={1.1} />
    <pointLight position={[4, 3, 4]} intensity={18} color="#7c5cff" />
    <pointLight position={[-4, -2, 1]} intensity={10} color="#62e7ff" />
    <Suspense fallback={null}>
      <Stars radius={55} depth={35} count={1500} factor={3} saturation={0} fade speed={0.5} />
      <Orb />
    </Suspense>
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
  </Canvas>;
}

function Header() {
  return <header className="nav wrap">
    <a className="brand" href="#home"><span className="brand-mark">R</span><span>Rakesh<span className="muted">.dev</span></span></a>
    <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Projects</a></nav>
    <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
  </header>;
}

function App() {
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <Header />
    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <span className="status-dot"/> JAVA BACKEND DEVELOPER
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
          Engineering reliable<br/><span className="gradient-text">Java services.</span><br/>Automating what’s next.
        </motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
          Java Backend Developer with 4+ years at Virtusa, building Spring Boot microservices and RESTful APIs. Focused on API optimization, legacy modernization, automated testing, and AI-assisted engineering workflows.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
          <a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
          <a className="button secondary" href="#contact"><Mail size={16}/> Contact me</a>
        </motion.div>
        <div className="hero-meta"><span><b>4+</b> years in software delivery</span><span className="meta-divider"/><span>Hyderabad, India</span></div>
      </div>
      <div className="hero-visual"><div className="visual-glow"/><div className="canvas-frame"><Scene /></div>
        <div className="float-card code-card"><div className="mini-dots"><i/><i/><i/></div><code><span className="code-purple">@SpringBootApplication</span><br/><span className="code-blue">class</span> Portfolio { '{' }<br/>&nbsp; <span className="code-blue">public static void</span> build()<br/>&nbsp; { '{' } <span className="code-green">// automate the repeatable</span><br/>&nbsp; { '}' }<br/>{ '}' }</code></div>
        <div className="float-card orbit-card"><span className="orbit-icon"><Sparkles size={16}/></span><div><b>Curious by default</b><small>Engineering · Learning · Building</small></div></div>
      </div>
      <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
    </section>

    <section className="about section wrap" id="about">
      <div className="section-kicker">01 / ABOUT ME</div>
      <div className="about-grid"><h2>Backend systems.<br/><span className="muted-heading">Practical impact.</span></h2>
        <div className="about-copy"><p>I’m a Java Backend Developer with 4+ years at Virtusa, contributing to Spring Boot microservices, REST APIs, enterprise application enhancements, and legacy modernization. I focus on maintainable service-layer design, API performance, test coverage, and dependable delivery.</p><p>I also build reusable AI skills and evaluation scripts to automate recurring engineering tasks and validate output quality.</p><div className="credential"><span className="credential-icon"><Terminal size={19}/></span><div><b>Oracle Certified Associate</b><small>Java SE 8 Programmer</small></div></div></div>
      </div>
    </section>

    <section className="skills section wrap" id="skills">
      <div className="section-heading"><div><div className="section-kicker">02 / TOOLKIT</div><h2>Tools I use<br/><span className="muted-heading">to ship reliably.</span></h2></div><p>From Spring Security and messaging to automated tests, CI/CD, and AI-assisted workflows.</p></div>
      <div className="skill-grid">{skills.map((s, i) => <motion.article className="skill-card" key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .08 }}><div className="skill-icon"><s.icon size={21}/></div><h3>{s.title}</h3><div className="tag-list">{s.items.map(item => <span className="tag" key={item}>{item}</span>)}</div><span className="card-index">0{i + 1}</span></motion.article>)}</div>
    </section>

    <section className="work section wrap" id="work">
      <div className="section-kicker">03 / SELECTED WORK</div><div className="work-title-row"><h2>Selected work<br/><span className="muted-heading">and engineering impact.</span></h2><span className="work-note">PROJECTS FROM MY RESUME</span></div>
      <div className="project-list">{projects.map(p => <article className="project-row" key={p.n}><span className="project-number">{p.n}</span><div className="project-main"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="tag-list">{p.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div></div><a className="project-arrow" href="#contact" aria-label={`Discuss ${p.title}`}><ArrowUpRight size={21}/></a></article>)}</div>
      <p className="disclaimer">Project descriptions and metrics are based on the supplied resume. Confirm that all details are approved for public sharing, especially where client confidentiality applies.</p>
    </section>

    <section className="contact section wrap" id="contact">
      <div className="contact-panel"><div className="contact-orb"/><div className="section-kicker">04 / NEXT STEPS</div><h2>Have a good problem?<br/><span className="gradient-text">Let’s solve it.</span></h2><p>Open to conversations about Java backend engineering, Spring Boot, microservices, and AI-assisted developer productivity.</p><a className="button primary" href="mailto:rakeshpokala09@gmail.com">Email me <ArrowUpRight size={17}/></a><div className="contact-socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://linkedin.com/in/rakesh-pokala-a3b862190" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div></div>
    </section>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">R</span><span>Rakesh<span className="muted">.dev</span></span></a><span>Designed to keep learning in motion.</span><span>© {new Date().getFullYear()} · Built with React & Three.js</span></footer>
  </main>;
}

export default App;