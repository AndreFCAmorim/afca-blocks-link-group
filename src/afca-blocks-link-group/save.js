import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		groupLinkUrl,
		groupLinkTarget,
		groupLinkRel,
		groupLinkAlt,
	} = attributes;

	return (
		<a
			{ ...useBlockProps.save() }
			href={groupLinkUrl}
			target={groupLinkTarget}
			rel={groupLinkRel}
			aria-label={groupLinkAlt}
		>
			<InnerBlocks.Content />
		</a>
	);
}
