# -*- coding: utf-8 -*-

{
    "name": "JS Test",
    "version": "18.0.1.0.0",
    "summary": "JS Test",
    "depends": ["web", "mail", "base"],
    "assets": {
        "web.assets_backend": [
            # 'tanmay_owl_js/static/src/views/inherit_nav_script.js',
            # 'tanmay_owl_js/static/src/views/inherit_nav_view.xml',
            "tanmay_owl_js/static/src/views/counter.js",
            "tanmay_owl_js/static/src/views/counter.xml",
            "tanmay_owl_js/static/src/views/parent_js.js",
            "tanmay_owl_js/static/src/views/parent_template.xml",
        ]
    },
    "data": [
        "views/hello_action.xml",
    ],
    "installable": True,
    "application": True,
    "auto_install": False,
    "license": "LGPL-3",
}
