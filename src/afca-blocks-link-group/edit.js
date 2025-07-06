import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		groupLinkUrl,
		groupLinkTarget,
		groupLinkRel,
		groupLinkAlt
	} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Link Settings', 'afca-blocks-link-group')} initialOpen={true}>
					<TextControl
						label={__('URL', 'afca-blocks-link-group')}
						value={groupLinkUrl}
						onChange={(value) => setAttributes({ groupLinkUrl: value })}
					/>
					<SelectControl
						label={__('Link Target', 'afca-blocks-link-group')}
						value={groupLinkTarget}
						options={[
							{ label: __('Same tab (_self)', 'afca-blocks-link-group'), value: '_self' },
							{ label: __('New tab (_blank)', 'afca-blocks-link-group'), value: '_blank' },
						]}
						onChange={(value) => setAttributes({ groupLinkTarget: value })}
					/>
					<TextControl
						label={__('Rel attribute', 'afca-blocks-link-group')}
						value={groupLinkRel}
						onChange={(value) => setAttributes({ groupLinkRel: value })}
					/>
					<TextControl
						label={__('Alt text', 'afca-blocks-link-group')}
						value={groupLinkAlt}
						onChange={(value) => setAttributes({ groupLinkAlt: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks />
		</>
	);
}
