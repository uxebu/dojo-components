dojo.provide("codeglass.plugins.dojo.i18n");

dojo.require("codeglass.plugins._base");

dojo.declare("codeglass.plugins.dojo.i18n",
	codeglass.plugins._baseTemplated,
	{

	injectNode: null,

	templateString: '<div class="menuItem i18n">Language: <select dojoAttachEvent="onchange: _changeI18n" dojoAttachPoint="i18nInput"><option value=""></option></select></div>',

	languages: dojo.cache("codeglass.resources", "languages.json"),

	injectToolbar: "toolbarBottom",

	postCreate: function(){
		data = dojo.fromJson(this.languages);
		dojo.forEach(data, function(lang, i){
			dojo.create("option", { innerHTML: lang.name, value: lang.iso }, this.i18nInput);
		}, this);
	},

	getVars: function(){
		return {
			injectToolbar: this.injectToolbar,
			iframeProps: {
				"i18n": this.i18nInput.value
			}
		}
	},

	_changeI18n: function(){
		this.i18n = this.i18nInput.value;
		if (this.i18n.length){
			this.sharedVars.djConfig["i18n"] = (this.sharedVars.djConfig.length ? ", " : "") + "locale: '" + this.i18n + "'";
		}

		dojo.publish("codeglass/plugin/change/" + this.codeGlassBaseId, ["dojo.i18n"]);
	}
});