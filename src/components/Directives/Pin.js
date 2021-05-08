/*
	Pin directive
*/

const pin = (new function(){
	let update = function(el, binding) { // Update style
		el.style.position = 'fixed';
		const s = binding.arg || 'top';
		el.style[s] = binding.value + 'px';		
	};

	this.mounted = function(el, binding) { // shown
		update(el, binding);
	};

	this.updated = function(el, binding) { // date updated
		update(el, binding);
	};
}());

export default pin;