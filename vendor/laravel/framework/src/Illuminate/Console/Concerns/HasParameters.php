rceUpdate: function (publicInstance) {\n    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');\n\n    if (!internalInstance) {\n      return;\n    }\n\n    internalInstance._pendingForceUpdate = true;\n\n    enqueueUpdate(internalInstance);\n  },\n\n  /**\n   * Replaces all of the state. Always use this or `setState` to mutate state.\n   * You should treat `this.state` as immutable.\n   *\n   * There is no guarantee that `this.state` will be immediately updated, so\n   * accessing `this.state` after calling this method may return the old value.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} completeState Next state.\n   * @internal\n   */\n  enqueueReplaceState: function (publicInstance, completeState, callback) {\n    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');\n\n    if (!internalInstance) {\n      return;\n    }\n\n    internalInstance._pendingStateQueue = [completeState];\n    internalInstance._pendingReplaceState = true;\n\n    // Future-proof 15.5\n    if (callback !== undefined && callback !== null) {\n      ReactUpdateQueue.validateCallback(callback, 'replaceState');\n      if (internalInstance._pendingCallbacks) {\n        internalInstance._pendingCallbacks.push(callback);\n      } else {\n        internalInstance._pendingCallbacks = [callback];\n      }\n    }\n\n    