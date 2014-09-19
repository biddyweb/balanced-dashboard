import Ember from "ember";

var PopoverView = Ember.View.extend({
	tagName: 'a',
	attributeBindings: ['class', 'data-toggle', 'data-placement', 'data-original-title', 'data-content', 'data-html', 'data-trigger'],
	'data-toggle': 'popover',

	didInsertElement: function() {
		this.$().popover();
		this._super();
	}
});

export default PopoverView;
