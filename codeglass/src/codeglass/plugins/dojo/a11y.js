dojo.provide("codeglass.plugins.dojo.a11y");

dojo.require("codeglass.plugins._base");

dojo.declare("codeglass.plugins.dojo.a11y",
	codeglass.plugins._baseTemplated,
	{
	templateString: '<div class="menuItem a11y">A11y: <input type="checkbox" dojoAttachEvent="onclick: _changeA11y" dojoAttachPoint="a11yInput" value="rtl" /></div>',

	injectToolbar: "toolbarBottom",

	getVars: function(){
		return {
			injectToolbar: this.injectToolbar,
			iframeProps: {
				"classBody": this.a11yInput.checked ? ' dijit_a11y ' : ''
			}
		}
	},

	_changeA11y: function(){
		this.a11y = this.a11yInput.checked ? "dijit_a11y" : "";

		dojo.publish("codeglass/plugin/change/" + this.codeGlassBaseId, ["dojo.a11y"]);
	}
});