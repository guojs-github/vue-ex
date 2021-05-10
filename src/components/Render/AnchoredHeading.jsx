/*
	Anchor Heading
*/
import { defineComponent, h } from 'vue';

/** Recursively get text from children nodes */
function getChildrenTextContent(children) {
	return children
		.map(node => {
			return typeof node.children === 'string'
				? node.children
				: Array.isArray(node.children) 
					? getChildrenTextContent(node.children) 
					: '';
		})
		.join('');
}

const AnchoredHeading = defineComponent({
	name: 'AnchoredHeading',
	
	render() {
		// create kebab-case id from the text contents of the children
		const headingId = getChildrenTextContent(this.$slots.default())
			.toLowerCase()
			.replace(/\W+/g, '-') // replace non-word characters with dash
			.replace(/(^-|-$)/g, ''); // remove leading and trailing dashes

		return h('h' + this.level, [
			h('a', {
				name: headingId,
				href: '#' + headingId
			}, this.$slots.default())
		]);
	},

	props: {
		level: {
			type: Number,
			required: true
		}
	}	
});

export default AnchoredHeading;
