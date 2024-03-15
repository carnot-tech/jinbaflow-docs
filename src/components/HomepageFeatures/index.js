import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explain in English',
    src: 'img/feature-1.png',
    description: (
      <>
        Fetch, transform, visualize, and analyze in plain English. No need to spend your time obtaining background knowledge.
      </>
    ),
  },
  {
    title: 'Intuitive, Customizable, and Reproducible Analysis',
    src: 'img/feature-2.png',
    description: (
      <>
        Check the generated process step-by-step and customize the workflow with flow-style UI.
      </>
    ),
  },
  {
    title: 'Custom Integrations',
    src: 'img/feature-3.png',
    description: (
      <>
        Connect to external APIs and utilize your insights.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
