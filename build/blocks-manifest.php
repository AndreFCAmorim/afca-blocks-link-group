<?php
// This file is generated. Do not modify it manually.
return array(
	'afca-blocks-link-group' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'afca-blocks/link-group',
		'version' => '0.1',
		'title' => 'Link Group Block',
		'category' => 'theme',
		'icon' => 'admin-links',
		'description' => 'Add blocks inside a link group.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'groupLinkUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'groupLinkTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'groupLinkRel' => array(
				'type' => 'string',
				'default' => ''
			),
			'groupAriaLabel' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'afca-blocks-link-group',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
