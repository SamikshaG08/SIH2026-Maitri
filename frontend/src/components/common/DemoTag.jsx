export default function DemoTag({ tone = 'blue', children = 'DEMO' }) {
  return <span className={`demo-tag demo-tag--${tone}`}><i />{children}</span>;
}

