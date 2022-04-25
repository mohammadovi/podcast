{
	"information_for_contributors": [
		"This file has been converted from https://github.com/jeff-hykin/cpp-textmate-grammar/blob/master/syntaxes/c.tmLanguage.json",
		"If you want to provide a fix or improvement, please create a pull request against the original repository.",
		"Once accepted there, we are happy to receive an update request."
	],
	"version": "https://github.com/jeff-hykin/cpp-textmate-grammar/commit/f074a48ae0b7ba313af3faf3d8bfda8537864bd1",
	"name": "C",
	"scopeName": "source.c",
	"patterns": [
		{
			"include": "#preprocessor-rule-enabled"
		},
		{
			"include": "#preprocessor-rule-disabled"
		},
		{
			"include": "#preprocessor-rule-conditional"
		},
		{
			"include": "#predefined_macros"
		},
		{
			"include": "#comments"
		},
		{
			"include": "#switch_statement"
		},
		{
			"match": "\\b(break|continue|do|else|for|goto|if|_Pragma|return|while)\\b",
			"name": "keyword.control.c"
		},
		{
			"include": "#storage_types"
		},
		{
			"match": "typedef",
			"name": "keyword.other.typedef.c"
		},
		{
			"match": "\\b(const|extern|register|restrict|static|volatile|inline)\\b",
			"name": "storage.modifier.c"
		},
		{
			"match": "\\bk[A-Z]\\w*\\b",
			"name": "constant.other.variable.mac-classic.c"
		},
		{
			"match": "\\bg[A-Z]\\w*\\b",
			"name": "variable.other.readwrite.global.mac-classic.c"
		},
		{
			"match": "\\bs[A-Z]\\w*\\b",
			"name": "variable.other.readwrite.static.mac-classic.c"
		},
		{
			"match": "\\b(NULL|true|false|TRUE|FALSE)\\b",
			"name": "constant.language.c"
		},
		{
			"include": "#operators"
		},
		{
			