const skills = [
  {
    skill: 'HTML+CSS',
    level: 'intermediate',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: '#60DAFB',
  },
  {
    skill: 'Web Design',
    level: 'intermediate',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'not sure',
    color: '#E84F33',
  },
  {
    skill: 'Bootstrap',
    level: 'intermediate',
    color: ' #A020F0',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: '#FF3B00',
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="Har.jpg" className="avatar" alt="Hargreaves Marotse" />
      <h1>Hargreaves Marotse</h1>
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h3>My Journey as a developer:</h3>
      <p>
        Started the journey in July 2022.Did the FreecodeCamp RWD Certification.
      </p>
      <p>
        December 2022, joined CodeCademy Pro continued my journey on web dev
        career path.
      </p>
      <p>Also have done Js course on UDEMY by Brad Traversy.</p>
      <p>
        Currently doing Ultmate React Course by Jonas Schemedtmann on UDEMY.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  const styles = { backgroundColor: color };
  return (
    <div className="skill" style={styles}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'not sure' && '🙊'}
      </span>
    </div>
  );
}
