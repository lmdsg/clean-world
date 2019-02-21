'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VISIBILITYCHANGE = 'visibilityChange',
    ENTERVIEWPORT = 'enterViewport',
    FULLYENTERVIEWPORT = 'fullyEnterViewport',
    EXITVIEWPORT = 'exitViewport',
    PARTIALLYEXITVIEWPORT = 'partiallyExitViewport',
    LOCATIONCHANGE = 'locationChange',
    STATECHANGE = 'stateChange';

var eventTypes = [VISIBILITYCHANGE, ENTERVIEWPORT, FULLYENTERVIEWPORT, EXITVIEWPORT, PARTIALLYEXITVIEWPORT, LOCATIONCHANGE, STATECHANGE];

var isOnServer = typeof window === 'undefined';
var isInBrowser = !isOnServer;
var Watcher = ElementWatcher;
var defaultOffsets = { top: 0, bottom: 0 };

function getViewportHeight(element) {
	if (isOnServer) {
		return 0;
	}
	if (element === document.body) {
		return window.innerHeight || document.documentElement.clientHeight;
	} else {
		return element.clientHeight;
	}
}

function getContentHeight(element) {
	if (isOnServer) {
		return 0;
	}

	if (element === document.body) {
		// jQuery approach
		// whichever is greatest
		return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
	} else {
		return element.scrollHeight;
	}
}

function scrollTop(element) {
	if (isOnServer) {
		return 0;
	}
	if (element === document.body) {
		return window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
	} else {
		return element.scrollTop;
	}
}

var browserSupportsPassive = false;
if (isInBrowser) {
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function get() {
				browserSupportsPassive = true;
			}
		});
		window.addEventListener('test', null, opts);
	} catch (e) {}
}
var useCapture = browserSupportsPassive ? { capture: false, passive: true } : false;

var ScrollMonitorContainer = function () {
	function ScrollMonitorContainer(item, parentWatcher) {
		_classCallCheck(this, ScrollMonitorContainer);

		var self = this;

		this.item = item;
		this.watchers = [];
		this.viewportTop = null;
		this.viewportBottom = null;
		this.documentHeight = getContentHeight(item);
		this.viewportHeight = getViewportHeight(item);
		this.DOMListener = function () {
			ScrollMonitorContainer.prototype.DOMListener.apply(self, arguments);
		};
		this.eventTypes = eventTypes;

		if (parentWatcher) {
			this.containerWatcher = parentWatcher.create(item);
		}

		var previousDocumentHeight;

		var calculateViewportI;
		function calculateViewport() {
			self.viewportTop = scrollTop(item);
			self.viewportBottom = self.viewportTop + self.viewportHeight;
			self.documentHeight = getContentHeight(item);
			if (self.documentHeight !== previousDocumentHeight) {
				calculateViewportI = self.watchers.length;
				while (calculateViewportI--) {
					self.watchers[calculateViewportI].recalculateLocation();
				}
				previousDocumentHeight = self.documentHeight;
			}
		}

		var updateAndTriggerWatchersI;
		function updateAndTriggerWatchers() {
			// update all watchers then trigger the events so one can rely on another being up to date.
			updateAndTriggerWatchersI = self.watchers.length;
			while (updateAndTriggerWatchersI--) {
				self.watchers[updateAndTriggerWatchersI].update();
			}

			updateAndTriggerWatchersI = self.watchers.length;
			while (updateAndTriggerWatchersI--) {
				self.watchers[updateAndTriggerWatchersI].triggerCallbacks();
			}
		}

		this.update = function () {
			calculateViewport();
			updateAndTriggerWatchers();
		};
		this.recalculateLocations = function () {
			this.documentHeight = 0;
			this.update();
		};
	}

	_createClass(ScrollMonitorContainer, [{
		key: 'listenToDOM',
		value: function listenToDOM() {
			if (isInBrowser) {
				if (window.addEventListener) {
					if (this.item === document.body) {
						window.addEventListener('scroll', this.DOMListener, useCapture);
					} else {
						this.item.addEventListener('scroll', this.DOMListener, useCapture);
					}
					window.addEventListener('resize', this.DOMListener);
				} else {
					// Old IE support
					if (this.item === document.body) {
						window.attachEvent('onscroll', this.DOMListener);
					} else {
						this.item.attachEvent('onscroll', this.DOMListener);
					}
					window.attachEvent('onresize', this.DOMListener);
				}
				this.destroy = function () {
					if (window.addEventListener) {
						if (this.item === document.body) {
							window.removeEventListener('scroll', this.DOMListener, useCapture);
							this.containerWatcher.destroy();
						} else {
							this.item.removeEventListener('scroll', this.DOMListener, useCapture);
						}
						window.removeEventListener('resize', this.DOMListener);
					} else {
						// Old IE support
						if (this.item === document.body) {
							window.detachEvent('onscroll', this.DOMListener);
							this.containerWatcher.destroy();
						} else {
							this.item.detachEvent('onscroll', this.DOMListener);
						}
						window.detachEvent('onresize', this.DOMListener);
					}
				};
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			// noop, override for your own purposes.
			// in listenToDOM, for example.
		}
	}, {
		key: 'DOMListener',
		value: function DOMListener(event) {
			//alert('got scroll');
			this.setStateFromDOM(event);
		}
	}, {
		key: 'setStateFromDOM',
		value: function setStateFromDOM(event) {
			var viewportTop = scrollTop(this.item);
			var viewportHeight = getViewportHeight(this.item);
			var contentHeight = getContentHeight(this.item);

			this.setState(viewportTop, viewportHeight, contentHeight, event);
		}
	}, {
		key: 'setState',
		value: function setState(newViewportTop, newViewportHeight, newContentHeight, event) {
			var needsRecalcuate = newViewportHeight !== this.viewportHeight || newContentHeight !== this.contentHeight;

			this.latestEvent = event;
			this.viewportTop = newViewportTop;
			this.viewportHeight = newViewportHeight;
			this.viewportBottom = newViewportTop + newViewportHeight;
			this.contentHeight = newContentHeight;

			if (needsRecalcuate) {
				var _i = this.watchers.length;
				while (_i--) {
					this.watchers[_i].recalculateLocation();
				}
			}
			this.updateAndTriggerWatchers(event);
		}
	}, {
		key: 'updateAndTriggerWatchers',
		value: function updateAndTriggerWatchers(event) {
			var i = this.watchers.length;
			while (i--) {
				this.watchers[i].update();
			}

			i = this.watchers.length;
			while (i--) {
				this.watchers[i].triggerCallbacks(event);
			}
		}
	}, {
		key: 'createCustomContainer',
		value: function createCustomContainer() {
			return new ScrollMonitorContainer();
		}
	}, {
		key: 'createContainer',
		value: function createContainer(item) {
			if (typeof item === 'string') {
				item = document.querySelector(item);
			} else if (item && item.length > 0) {
				item = item[0];
			}
			var container = new ScrollMonitorContainer(item, this);
			container.setStateFromDOM();
			container.listenToDOM();
			return container;
		}
	}, {
		key: 'create',
		value: function create(item, offsets) {
			if (typeof item === 'string') {
				item = document.querySelector(item);
			} else if (item && item.length > 0) {
				item = item[0];
			}
			var watcher = new Watcher(this, item, offsets);
			this.watchers.push(watcher);
			return watcher;
		}
	}, {
		key: 'beget',
		value: function beget(item, offsets) {
			return this.create(item, offsets);
		}
	}]);

	return ScrollMonitorContainer;
}();

function ElementWatcher(containerWatcher, watchItem, offsets) {
	var self = this;

	this.watchItem = watchItem;
	this.container = containerWatcher;

	if (!offsets) {
		this.offsets = defaultOffsets;
	} else if (offsets === +offsets) {
		this.offsets = { top: offsets, bottom: offsets };
	} else {
		this.offsets = {
			top: offsets.top || defaultOffsets.top,
			bottom: offsets.bottom || defaultOffsets.bottom
		};
	}

	this.callbacks = {}; // {callback: function, isOne: true }

	for (var i = 0, j = eventTypes.length; i < j; i++) {
		self.callbacks[eventTypes[i]] = [];
	}

	this.locked = false;

	var wasInViewport;
	var wasFullyInViewport;
	var wasAboveViewport;
	var wasBelowViewport;

	var listenerToTriggerListI;
	var listener;
	function triggerCallbackArray(listeners, event) {
		if (listeners.length === 0) {
			return;
		}
		listenerToTriggerListI = listeners.length;
		while (listenerToTriggerListI--) {
			listener = listeners[listenerToTriggerListI];
			listener.callback.call(self, event, self);
			if (listener.isOne) {
				listeners.splice(listenerToTriggerListI, 1);
			}
		}
	}
	this.triggerCallbacks = function triggerCallbacks(event) {

		if (this.isInViewport && !wasInViewport) {
			triggerCallbackArray(this.callbacks[ENTERVIEWPORT], event);
		}
		if (this.isFullyInViewport && !wasFullyInViewport) {
			triggerCallbackArray(this.callbacks[FULLYENTERVIEWPORT], event);
		}

		if (this.isAboveViewport !== wasAboveViewport && this.isBelowViewport !== wasBelowViewport) {

			triggerCallbackArray(this.callbacks[VISIBILITYCHANGE], event);

			// if you skip completely past this element
			if (!wasFullyInViewport && !this.isFullyInViewport) {
				triggerCallbackArray(this.callbacks[FULLYENTERVIEWPORT], event);
				triggerCallbackArray(this.callbacks[PARTIALLYEXITVIEWPORT], event);
			}
			if (!wasInViewport && !this.isInViewport) {
				triggerCallbackArray(this.callbacks[ENTERVIEWPORT], event);
				triggerCallbackArray(this.callbacks[EXITVIEWPORT], event);
			}
		}

		if (!this.isFullyInViewport && wasFullyInViewport) {
			triggerCallbackArray(this.callbacks[PARTIALLYEXITVIEWPORT], event);
		}
		if (!this.isInViewport && wasInViewport) {
			triggerCallbackArray(this.callbacks[EXITVIEWPORT], event);
		}
		if (this.isInViewport !== wasInViewport) {
			triggerCallbackArray(this.callbacks[VISIBILITYCHANGE], event);
		}
		switch (true) {
			case wasInViewport !== this.isInViewport:
			case wasFullyInViewport !== this.isFullyInViewport:
			case wasAboveViewport !== this.isAboveViewport:
			case wasBelowViewport !== this.isBelowViewport:
				triggerCallbackArray(this.callbacks[STATECHANGE], event);
		}

		wasInViewport = this.isInViewport;
		wasFullyInViewport = this.isFullyInViewport;
		wasAboveViewport = this.isAboveViewport;
		wasBelowViewport = this.isBelowViewport;
	};

	this.recalculateLocation = function () {
		if (this.locked) {
			return;
		}
		var previousTop = this.top;
		var previousBottom = this.bottom;
		if (this.watchItem.nodeName) {
			// a dom element
			var cachedDisplay = this.watchItem.style.display;
			if (cachedDisplay === 'none') {
				this.watchItem.style.display = '';
			}

			var containerOffset = 0;
			var container = this.container;
			while (container.containerWatcher) {
				containerOffset += container.containerWatcher.top - container.containerWatcher.container.viewportTop;
				container = container.containerWatcher.container;
			}

			var boundingRect = this.watchItem.getBoundingClientRect();
			this.top = boundingRect.top + this.container.viewportTop - containerOffset;
			this.bottom = boundingRect.bottom + this.container.viewportTop - containerOffset;

			if (cachedDisplay === 'none') {
				this.watchItem.style.display = cachedDisplay;
			}
		} else if (this.watchItem === +this.watchItem) {
			// number
			if (this.watchItem > 0) {
				this.top = this.bottom = this.watchItem;
			} else {
				this.top = this.bottom = this.container.documentHeight - this.watchItem;
			}
		} else {
			// an object with a top and bottom property
			this.top = this.watchItem.top;
			this.bottom = this.watchItem.bottom;
		}

		this.top -= this.offsets.top;
		this.bottom += this.offsets.bottom;
		this.height = this.bottom - this.top;

		if ((previousTop !== undefined || previousBottom !== undefined) && (this.top !== previousTop || this.bottom !== previousBottom)) {
			triggerCallbackArray(this.callbacks[LOCATIONCHANGE], null);
		}
	};

	this.recalculateLocation();
	this.update();

	wasInViewport = this.isInViewport;
	wasFullyInViewport = this.isFullyInViewport;
	wasAboveViewport = this.isAboveViewport;
	wasBelowViewport = this.isBelowViewport;
}

ElementWatcher.prototype = {
	on: function on(event, callback, isOne) {

		// trigger the event if it applies to the element right now.
		switch (true) {
			case event === VISIBILITYCHANGE && !this.isInViewport && this.isAboveViewport:
			case event === ENTERVIEWPORT && this.isInViewport:
			case event === FULLYENTERVIEWPORT && this.isFullyInViewport:
			case event === EXITVIEWPORT && this.isAboveViewport && !this.isInViewport:
			case event === PARTIALLYEXITVIEWPORT && this.isInViewport && this.isAboveViewport:
				callback.call(this, this.container.latestEvent, this);
				if (isOne) {
					return;
				}
		}

		if (this.callbacks[event]) {
			this.callbacks[event].push({ callback: callback, isOne: isOne || false });
		} else {
			throw new Error('Tried to add a scroll monitor listener of type ' + event + '. Your options are: ' + eventTypes.join(', '));
		}
	},
	off: function off(event, callback) {
		if (this.callbacks[event]) {
			for (var i = 0, item; item = this.callbacks[event][i]; i++) {
				if (item.callback === callback) {
					this.callbacks[event].splice(i, 1);
					break;
				}
			}
		} else {
			throw new Error('Tried to remove a scroll monitor listener of type ' + event + '. Your options are: ' + eventTypes.join(', '));
		}
	},
	one: function one(event, callback) {
		this.on(event, callback, true);
	},
	recalculateSize: function recalculateSize() {
		this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom;
		this.bottom = this.top + this.height;
	},
	update: function update() {
		this.isAboveViewport = this.top < this.container.viewportTop;
		this.isBelowViewport = this.bottom > this.container.viewportBottom;

		this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop;
		this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport;
	},
	destroy: function destroy() {
		var index = this.container.watchers.indexOf(this),
		    self = this;
		this.container.watchers.splice(index, 1);
		for (var i = 0, j = eventTypes.length; i < j; i++) {
			self.callbacks[eventTypes[i]].length = 0;
		}
	},
	// prevent recalculating the element location
	lock: function lock() {
		this.locked = true;
	},
	unlock: function unlock() {
		this.locked = false;
	}
};

var eventHandlerFactory = function eventHandlerFactory(type) {
	return function (callback, isOne) {
		this.on.call(this, type, callback, isOne);
	};
};

for (var i = 0, j = eventTypes.length; i < j; i++) {
	var type = eventTypes[i];
	ElementWatcher.prototype[type] = eventHandlerFactory(type);
}

var scrollMonitor = new ScrollMonitorContainer(isInBrowser ? document.body : null);
scrollMonitor.setStateFromDOM(null);
scrollMonitor.listenToDOM();

if (isInBrowser) {
	window.scrollMonitor = scrollMonitor;
}
