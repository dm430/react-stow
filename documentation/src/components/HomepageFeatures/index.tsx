import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
	title: string
	Svg: React.ComponentType<React.ComponentProps<'svg'>>
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: 'Easy to Use',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				React Storage takes a user first approach. Every API surface was hand
				crafted with usabilty, and extensability in mind.
			</>
		)
	},
	{
		title: 'Flexible',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				React Storage provides an easy and accesable surface API to customize
				storage hooks with ease. Need a to serialize your data in a different
				format? No problem! Want to write a hook wraper to store key/value data
				remotely? React Storage has that covered too!
			</>
		)
	},
	{
		title: 'Small',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				We know bundle sizes matter. Don't worry, weighing in at ~4kb this bad
				boy wont hold you down too much.
			</>
		)
	}
]

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
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
	)
}
