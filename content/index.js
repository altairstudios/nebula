module.exports = {
	
	"languages": {
		"en": {
			"content": {
				"toggle_navigation": "Toggle navigation"
			},
			"links": {
				"home": "/",
				"starting": "/getting-started",
				"docs": "/docs",
				"examples": "/examples"
			},
			"primarynav": [
				{ "section": "home",                "path": "/",                      "label": "Home" },
				{ "section": "starting",            "path": "/getting-started",       "label": "Getting Started" },
				{ "section": "docs",                "path": "/docs",                  "label": "Documentation" },
				{ "section": "examples",            "path": "/examples",              "label": "Examples" }
			],
			"docsnav": [
				{ "value": "getting-started", "path": "/docs/getting-started", "label": "Getting Started", "labelsm": "Starting" },
				{ "value": "configuration", "path": "/docs/configuration", "label": "Configuration", "labelsm": "Config" },
				{ "value": "database", "path": "/docs/database", "label": "Database", "labelsm": "Data" },
				{ "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference", "labelsm": "Ref" },
				{ "value": "faqs",              	"path": "/docs/faqs",        	  "label": "FAQ's",            "labelsm": "FAQs" }
				/*{ "value": "views",                 "path": "/docs/views",            "label": "Views",            "labelsm": "Views" }*/
			],
		}
	},
	
	"routes": [
		
		// Language: en
		{
			"path": "/",
			"language": "en",
			"template": "home",
			"section": "home",
			"title": "Node.js cms and web application platform built on Express and MongoDB"
		},
		{
			"path": "/getting-started",
			"language": "en",
			"template": "starting",
			"section": "starting",
			"title": "Getting started"
		},
		{
			"path": "/examples",
			"language": "en",
			"template": "examples",
			"section": "examples",
			"title": "Sample applications"
		},
		{
			"path": "/docs",
			"language": "en",
			"template": "docs/index",
			"section": "docs",
			"docssection": { "value": "introduction", "path": "/docs", "label": "Introduction" },
			"title": "KeystoneJS Documentation"
		},
		{
			"path": "/docs/getting-started",
			"language": "en",
			"template": "docs/getting-started",
			"section": "docs",
			"docssection": { "value": "getting-started", "path": "/docs/guides", "label": "Guides" },
			"title": "Getting Started"
		},
		{
			"path": "/docs/configuration",
			"language": "en",
			"template": "docs/configuration",
			"section": "docs",
			"docssection": { "value": "configuration", "path": "/docs/configuration", "label": "Configuration" },
			"title": "Configuration"
		},
		{
			"path": "/docs/database",
			"language": "en",
			"template": "docs/database",
			"section": "docs",
			"docssection": { "value": "database", "path": "/docs/database", "label": "Database" },
			"title": "Setting up and using Data Models"
		},
		{
			"path": "/docs/api",
			"language": "en",
			"template": "docs/api",
			"section": "docs",
			"docssection": { "value": "api", "path": "/docs/api", "label": "Keystone Api" },
			"title": "Keystone Api"
		},
		
		{
			"path": "/docs/api/current",
			"language": "en",
			"template": "docs/api/0.3.x/class",
			"section": "docs",
			"api": '0.3.x',
			"branch": 'v0.3.x',
			"_version": "current",
			"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference" },
			"title": "Class Reference"
		},
		{
			"path": "/docs/api/current/class",
			"language": "en",
			"template": "docs/api/0.3.x/class",
			"section": "docs",
			"api": '0.3.x',
			"branch": 'v0.3.x',
			"_version": "current",
			"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference" },
			"title": "Class Reference"
		},
		{
			"path": "/docs/api/incoming",
			"language": "en",
			"template": "docs/api/0.4.x/class",
			"section": "docs",
			"api": '0.4.x',
			"_version": "incoming",
			"branch": 'master',
			"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/incoming/class", "label": "Class Reference" },
			"title": "Class Reference"
		},
		{
			"path": "/docs/api/incoming/class",
			"language": "en",
			"template": "docs/api/0.4.x/class",
			"section": "docs",
			"api": '0.4.x',
			"branch": 'master',
			"_version": "incoming",
			"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/incoming/class", "label": "Class Reference" },
			"title": "Class Reference"
		},
		{
			"path": "/docs/api/current/endpoint",
			"language": "en",
			"template": "docs/api/0.4.x/endpoint",
			"section": "docs",
			"api": '0.4.x',
			"branch": 'master',
			"_version": "incoming",
			"docssection": { "version": "0.4.x", "value": "endpointapi", "path": "/docs/api/current/class", "label": "Class Api" },
			"title": "Class Api"
		},
		{
			"path": "/docs/api/0.4.x",
			"language": "en",
			"template": "docs/api/0.4.x/class",
			"section": "docs",
			"api": '0.4.x',
			"branch": 'master',
			"_version": "incoming",
			"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/0.4.x/class", "label": "Keystone Class Reference" },
			"title": "Keystone Class Reference"
		},
		{
			"path": "/docs/api/0.4.x/class",
			"language": "en",
			"template": "docs/api/0.4.x/class",
			"section": "docs",
			"api": '0.4.x',
			"branch": 'master',
			"_version": "incoming",
			"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/0.4.x/class", "label": "Keystone Class Reference" },
			"title": "Keystone Class Reference"
		},
		{
			"path": "/docs/api/0.4.x/endpoint",
			"language": "en",
			"template": "docs/api/0.4.x/endpoint",
			"section": "docs",
			"api": '0.4.x',
			"branch": 'master',
			"_version": "incoming",
			"docssection": { "version": "0.4.x", "value": "endpointapi", "path": "/docs/api/current/endpoint", "label": "Class Reference" },
			"title": "Class Reference"
		},
		{
			"path": "/docs/api/0.3.x",
			"language": "en",
			"template": "docs/api/0.3.x/class",
			"section": "docs",
			"api": '0.3.x',
			"branch": 'v0.3.x',
			"_version": "current",
			"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api", "label": "Keystone Class Reference" },
			"title": "Keystone Class Reference"
		},
		{
			"path": "/docs/api/0.3.x/class",
			"language": "en",
			"template": "docs/api/0.3.x/class",
			"section": "docs",
			"api": '0.3.x',
			"branch": 'v0.3.x',
			"_version": "current",
			"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api", "label": "Keystone Class Reference" },
			"title": "Keystone Class Reference"
		},
		{
			"path": "/docs/api/0.2.x",
			"language": "en",
			"template": "docs/api/0.2.x/class",
			"section": "docs",
			"api": '0.2.x',
			"branch": '0.2.x',
			"_version": "0.2.x",
			"docssection": { "version": "0.2.x", "value": "classapi", "path": "/docs/api", "label": "Keystone Class Reference" },
			"title": "Keystone Class Reference"
		},
		{
			"path": "/docs/api/0.2.x/class",
			"language": "en",
			"template": "docs/api/0.2.x/class",
			"section": "docs",
			"api": '0.2.x',
			"branch": '0.2.x',
			"_version": "0.2.x",
			"docssection": { "version": "0.2.x", "value": "classapi", "path": "/docs/api/0.2.x/class", "label": "Class Reference 0.2.x" },
			"title": "Class Reference 0.2.x"
		},
		{
			"path": "/docs/faqs",
			"language": "en",
			"template": "docs/faqs",
			"section": "docs",
			"docssection": { "value": "faqs", "path": "/docs/faqs", "label": "FAQs" },
			"title": "Frequently Asked Questions"
		},
		/* {
			"path": "/docs/views",
			"template": "docs/views",
			"section": "docs",
			"docssection": { "value": "views", "path": "/docs/views", "label": "Views" },
			"title": "Using Views in your application"
		},*/
		
		
	]
}
