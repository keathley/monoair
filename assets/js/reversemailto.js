/**
 * Initialization script for the Air theme.
 *
 * @author  L. Daniel Nordstrom <d@mrnordstrom.com>
 * @license MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

;(function (window, undefined) {
  'use strict'

  /**
   * Performs the actual initialization. Should run when DOM is ready.
   *
   * @method
   */
  function initialize() {
    reverseMailtoAddresses();
  }

  /**
   * Reverses email addresses in "mailtor:" links, hopefully
   * preventing some spam. For example, instead of "mailto:me@me.com"
   * you would use "mailtor:moc.em@em" (note the "r").
   *
   * @method
   */
  function reverseMailtoAddresses() {
    if (document.querySelectorAll) {
      var links = document.querySelectorAll('a[href^="mailtor:"]');
      var index = links.length;

      while (index--) {
        links[index].setAttribute('href', 'mailto:' +
          links[index].getAttribute('href').
          split(':')[1].                      // "moc.em@em"
          split('').reverse().join('')        // "me@me.com"
        );
      }
    }
  }

  if (document.readyState === 'complete') {
    initialize();
  } else {
    document.addEventListener('DOMContentLoaded', initialize, false);
  }
}(window));