import Typewriter from 'typewriter-effect'

interface TextItem {
	text: string
	class?: string
	delay?: number
	pauseFor?: number
	final?: boolean
}

interface TypeWriteComponentProps {
	texts: TextItem[]
	defaultClass?: string
}

export default function TypeWriteComponent({
	texts,
	defaultClass = 'text-sky-600'
}: TypeWriteComponentProps) {
	// Split out final vs. normal items
	const finalText = texts.find((item) => item.final)
	const normalTexts = texts.filter((item) => !item.final)

	return (
		<span className={defaultClass}>
			<Typewriter
				onInit={(typewriter) => {
					// Type each non-final text
					let chain = typewriter
					normalTexts.forEach((item) => {
						chain = chain
							.changeDelay(item.delay || 70)
							.typeString(`<span class="${item.class ?? ''}">${item.text}</span>`)
							.pauseFor(item.pauseFor ?? 1500)
							.deleteAll(30)
							.pauseFor(500)
					})

					// Then type the final text
					chain
						.changeDelay(finalText?.delay ?? 70)
						.typeString(`<span class="${finalText?.class ?? ''}">${finalText?.text ?? ''}</span>`)
						.start()
				}}
				options={{
					autoStart: false,
					cursorClassName: 'text-black dark:text-white terminal-cursor',
					cursor: '_'
				}}
			/>
		</span>
	)
}
