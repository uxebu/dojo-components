dojo.provide("codeglass.plugins.dojo.dir");

dojo.require("codeglass.plugins._base");

dojo.declare("codeglass.plugins.dojo.dir",
	codeglass.plugins._baseTemplated,
	{

	injectNode: null,

	templateString: '<div class="menuItem dir">Rtl: <input type="checkbox" dojoAttachEvent="onclick: _changeDir" dojoAttachPoint="dirInput" value="rtl" /></div>',

	dir: "ltr",

	injectToolbar: "toolbarBottom",

	getVars: function(){
		return {
			injectToolbar: this.injectToolbar,
			iframeProps: {
				"html": ' dir="'+this.dir+'" '
			}
		}
	},

	_changeDir: function(){
		this.dir = this.dirInput.checked ? "rtl" : "ltr";
		dojo.publish("codeglass/plugin/change/" + this.codeGlassBaseId, ["dojo.dir"]);
	}
});